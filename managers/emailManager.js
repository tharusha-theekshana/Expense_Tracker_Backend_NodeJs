import nodemailer from "nodemailer";
const emailManager = async (to, text, html, subject) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "e215caeb821e6c",
            pass: "76bf9309467ca7",
        },
    });

    await transport.sendMail({
        to: to,
        from: "info@expensetracker.com",
        text: text,
        html: html,
        subject: subject,
    });
};

export default emailManager;
