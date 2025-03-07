
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, ListTodo, Clock, BarChart3 } from "lucide-react";
import { toast } from "sonner";
import TaskCard, { Task } from "./TaskCard";
import Timer from "./Timer";
import Analytics from "./Analytics";

const generateId = () => Math.random().toString(36).substr(2, 9);

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openNewTaskDialog, setOpenNewTaskDialog] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Work");
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  
  // Statistics for the time tracking tab
  const [totalToday, setTotalToday] = useState(0);
  const [totalWeek, setTotalWeek] = useState(0);
  const [totalMonth, setTotalMonth] = useState(0);

  // Update statistics when tasks change
  useEffect(() => {
    // Calculate total time spent today
    const totalTodaySeconds = tasks.reduce((total, task) => total + task.timeSpent, 0);
    setTotalToday(totalTodaySeconds);
    
    // In a real app, we would filter tasks by date range
    // For now, we'll just show placeholder data based on actual task time
    setTotalWeek(totalTodaySeconds > 0 ? totalTodaySeconds * 1.5 : 0);
    setTotalMonth(totalTodaySeconds > 0 ? totalTodaySeconds * 4 : 0);
  }, [tasks]);

  // Timer update function
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (activeTask) {
      interval = setInterval(() => {
        setTasks(prevTasks => 
          prevTasks.map(task => 
            task.id === activeTask.id 
              ? { ...task, timeSpent: task.timeSpent + 1 }
              : task
          )
        );
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTask]);

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) {
      toast.error("Task title cannot be empty");
      return;
    }

    const newTask: Task = {
      id: generateId(),
      title: newTaskTitle,
      category: newTaskCategory,
      timeSpent: 0,
      isRunning: false,
    };

    setTasks([...tasks, newTask]);
    setOpenNewTaskDialog(false);
    setNewTaskTitle("");
    toast.success("Task created successfully");
  };

  const handleDeleteTask = (id: string) => {
    if (activeTask && activeTask.id === id) {
      setActiveTask(null);
    }
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully");
  };

  const handleEditTask = (task: Task) => {
    // This would open an edit dialog in a full implementation
    console.log("Edit task:", task);
  };

  const handleToggleTimer = (id: string) => {
    // If there's already an active task, stop it
    if (activeTask && activeTask.id !== id) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === activeTask.id ? { ...task, isRunning: false } : task
        )
      );
    }

    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          const isRunning = !task.isRunning;
          // If starting timer, set as active task
          if (isRunning) {
            setActiveTask(task);
          } else if (activeTask && activeTask.id === id) {
            setActiveTask(null);
          }
          return { ...task, isRunning };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
          <p className="text-muted-foreground">
            Track your tasks and monitor your progress
          </p>
        </div>

        <Dialog open={openNewTaskDialog} onOpenChange={setOpenNewTaskDialog}>
          <DialogTrigger asChild>
            <Button className="mt-4 md:mt-0">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  placeholder="Enter task title"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newTaskCategory}
                  onValueChange={setNewTaskCategory}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Work">Work</SelectItem>
                    <SelectItem value="Study">Study</SelectItem>
                    <SelectItem value="Fitness">Fitness</SelectItem>
                    <SelectItem value="Personal">Personal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleAddTask}>Create Task</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {activeTask && (
        <div className="mb-8 p-6 glass-card border rounded-xl">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold">{activeTask.title}</h2>
            <p className="text-muted-foreground">Currently tracking</p>
          </div>
          <Timer
            initialTime={activeTask.timeSpent}
            isRunning={true}
            onToggle={() => handleToggleTimer(activeTask.id)}
          />
        </div>
      )}

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="tasks" className="flex items-center">
            <ListTodo className="h-4 w-4 mr-2" /> Tasks
          </TabsTrigger>
          <TabsTrigger value="time-tracking" className="flex items-center">
            <Clock className="h-4 w-4 mr-2" /> Time Tracking
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-2" /> Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tasks">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                You don't have any tasks yet
              </p>
              <Button onClick={() => setOpenNewTaskDialog(true)}>
                <PlusCircle className="mr-2 h-4 w-4" /> Create your first task
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onEdit={handleEditTask}
                  onToggleTimer={handleToggleTimer}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="time-tracking">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-xl flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Today</h3>
                <div className="text-3xl font-bold text-primary">
                  {formatTime(totalToday)}
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">This Week</h3>
                <div className="text-3xl font-bold text-primary">
                  {formatTime(totalWeek)}
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">This Month</h3>
                <div className="text-3xl font-bold text-primary">
                  {formatTime(totalMonth)}
                </div>
              </div>
            </div>
            
            {tasks.length > 0 ? (
              <div className="bg-muted/30 rounded-xl p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                      <div>
                        <div className="font-medium">{task.title}</div>
                        <div className="text-sm text-muted-foreground">{task.category}</div>
                      </div>
                      <div className="font-mono">
                        {Math.floor(task.timeSpent / 3600)}h{" "}
                        {Math.floor((task.timeSpent % 3600) / 60)}m
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-xl">
                <p className="text-muted-foreground mb-4">
                  No activity data yet. Add tasks and start tracking time to see your statistics.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Analytics tasks={tasks} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
