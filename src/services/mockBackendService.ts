
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
const registeredUsers: Set<string> = new Set();

export const isUserRegistered = (email: string): boolean => {
  return registeredUsers.has(email);
};

export const registerUser = (email: string): void => {
  registeredUsers.add(email);
};

export const logUserAction = (entry: LogEntry): void => {
  userLogs.push({
    ...entry,
    timestamp: new Date().toISOString()
  });
  
  // If this is a register action, add the user to registered users
  if (entry.action === 'register') {
    registerUser(entry.userEmail);
  }
  
  console.log(`Action logged: ${entry.action} by ${entry.userEmail} at ${entry.timestamp}`);
  
  // In a real backend, this would trigger an email notification
  // This is just a placeholder to show the concept
  if (entry.action === 'login' || entry.action === 'register') {
    notifyAdmins(entry);
  }
};

const notifyAdmins = (entry: LogEntry): void => {
  // In a real implementation, this would send actual emails using a service like SendGrid, Mailgun, etc.
  // For demo purposes, we'll just log to console
  console.log(`[NOTIFICATION] Email would be sent to ${ADMIN_EMAILS.join(', ')}`);
  console.log(`Subject: New user ${entry.action} - Trackify`);
  console.log(`Body: User ${entry.userEmail} has ${entry.action}ed at ${new Date(entry.timestamp).toLocaleString()}`);
  
  // IMPORTANT NOTE: In a real application, you would:
  // 1. Set up a backend API with an email service provider (SendGrid, AWS SES, etc.)
  // 2. Create a secure endpoint that sends emails when users login/register
  // 3. Call that endpoint from your frontend or have it triggered by database events
  
  // Removed the alert popup
};

export const getUserLogs = (): LogEntry[] => {
  return [...userLogs]; // Return a copy to prevent direct manipulation
};

export const getRegisteredUsersCount = (): number => {
  return registeredUsers.size;
};

// This would normally be in a separate admin service
export const getAllUserLoginHistory = (): LogEntry[] => {
  return [...userLogs].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
};
