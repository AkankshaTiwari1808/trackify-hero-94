
/**
 * This is a mock backend service that simulates what would happen in a real backend
 * In a production environment, this logic would exist in a secure server environment
 */

// Storing admin emails - in a real backend, these would be in environment variables
const ADMIN_EMAILS = ['anchalmishra028@gmail.com', 'akankshashivani1808@gmail.com'];

type LogEntry = {
  userEmail: string;
  timestamp: string;
  action: 'login' | 'register' | 'logout';
  ipAddress?: string;
};

// In-memory storage for this demo (would be a database in real implementation)
const userLogs: LogEntry[] = [];

export const logUserAction = (entry: LogEntry): void => {
  userLogs.push({
    ...entry,
    timestamp: new Date().toISOString()
  });
  
  console.log(`Action logged: ${entry.action} by ${entry.userEmail} at ${entry.timestamp}`);
  
  // In a real backend, this would trigger an email notification
  // This is just a placeholder to show the concept
  if (entry.action === 'login' || entry.action === 'register') {
    notifyAdmins(entry);
  }
};

const notifyAdmins = (entry: LogEntry): void => {
  // In a real implementation, this would send actual emails
  // For demo purposes, we'll just log to console
  console.log(`[NOTIFICATION] Email would be sent to ${ADMIN_EMAILS.join(', ')}`);
  console.log(`Subject: New user ${entry.action} - Trackify`);
  console.log(`Body: User ${entry.userEmail} has ${entry.action}ed at ${new Date(entry.timestamp).toLocaleString()}`);
  
  // Simulate sending an email by showing an alert (for demo purposes only)
  // This will at least show the user that the notification system is working
  setTimeout(() => {
    alert(`DEMO: Notification email about user ${entry.userEmail} ${entry.action} would be sent to admin emails.`);
  }, 1000);
};

export const getUserLogs = (): LogEntry[] => {
  return [...userLogs]; // Return a copy to prevent direct manipulation
};

// This would normally be in a separate admin service
export const getAllUserLoginHistory = (): LogEntry[] => {
  return [...userLogs].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
};
