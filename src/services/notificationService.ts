
/**
 * Notification service to send login notifications to administrators
 */
export const sendLoginNotification = async (userEmail: string) => {
  try {
    // In a real implementation, this would be an API call to your backend service
    // For demo purposes, we'll use EmailJS as a simple solution
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_trackify',
        template_id: 'template_login_notification',
        user_id: 'YOUR_USER_ID', // You would need to create an EmailJS account and get a user ID
        template_params: {
          user_email: userEmail,
          admin_email: 'anchalmishra028@gmail.com, aksnkshashivnani1808@gmail.com',
          login_time: new Date().toLocaleString(),
          login_ip: 'IP address would be captured server-side',
        }
      }),
    });
    
    console.log('Notification sent:', response.ok);
    return response.ok;
  } catch (error) {
    console.error('Failed to send login notification:', error);
    return false;
  }
};
