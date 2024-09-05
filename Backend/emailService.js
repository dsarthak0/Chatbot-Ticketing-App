const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});


const sendTicketNotification = () => {
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: "neha.gade@somaiya.edu",
    subject: 'Your Museum Ticket Booking Confirmation',
    text: `Hello,

Thank you for booking your tickets with us. Here are your booking details:

Museum: Nehru Science Center
Number of Tickets: 4
Date: 10th Sept 2024

We look forward to seeing you!

Best regards,
The Museum Team`
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendTicketNotification };
