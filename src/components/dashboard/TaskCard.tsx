
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MoreVertical, Play, Pause, Trash, Edit, Clock } from "lucide-react";
import Timer from "./Timer";

export interface Task {
  id: string;
  title: string;
  category: string;
  timeSpent: number; // in seconds
  isRunning: boolean;
  lastStarted?: Date;
}

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onToggleTimer: (id: string) => void;
}

const TaskCard = ({ task, onDelete, onEdit, onToggleTimer }: TaskCardProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "work":
        return "bg-blue-500 hover:bg-blue-600";
      case "study":
        return "bg-green-500 hover:bg-green-600";
      case "fitness":
        return "bg-orange-500 hover:bg-orange-600";
      case "personal":
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-2 flex flex-row justify-between items-start">
        <div>
          <CardTitle className="text-lg font-bold">{task.title}</CardTitle>
          <Badge variant="secondary" className="mt-1">
            {task.category}
          </Badge>
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowOptions(!showOptions)}
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
          {showOptions && (
            <div className="absolute right-0 top-8 z-10 w-36 rounded-md border bg-background shadow-md">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex w-full items-center justify-start px-3"
                    onClick={() => setShowOptions(false)}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                  </DialogHeader>
                  {/* Task edit form would go here */}
                  <div className="grid gap-4 py-4">
                    <p>Edit form placeholder</p>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-start px-3 text-destructive hover:text-destructive"
                onClick={() => {
                  onDelete(task.id);
                  setShowOptions(false);
                }}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center mt-2">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>{formatTime(task.timeSpent)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-2 bg-muted/50 border-t flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs flex-1"
          onClick={() => onEdit(task)}
        >
          <Edit className="h-3 w-3 mr-1" /> Edit
        </Button>
        <Button
          variant={task.isRunning ? "destructive" : "default"}
          size="sm"
          className="text-xs flex-1"
          onClick={() => onToggleTimer(task.id)}
        >
          {task.isRunning ? (
            <>
              <Pause className="h-3 w-3 mr-1" /> Pause
            </>
          ) : (
            <>
              <Play className="h-3 w-3 mr-1" /> Start
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
