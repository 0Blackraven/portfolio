"use server"

import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { serviceType } from "@/components/ui/contactForm"
import { number } from "framer-motion"

dotenv.config()

export async function sendMail(data: {
    name: string;
    email: string;
    number: string | number;
    service: serviceType | null;
    message: string;
}) {
    try{

    const service = (number: serviceType|null) =>{
        const num = Number(number);
        console.log(num);
        if(num === null || num === undefined)
            return "No Subject Selected";

        switch(num){
            case 0:
                return "Full Stack Development"; 
            case 1:
                return "Back End Development";   
            case 3:
                return "Front End Development"; 
            case 4:
                return "Others"; 
    }}
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }});
        const mailOptionsToMe = {
        from: `"${data.name}" <${process.env.SMTP_USERNAME}>`,
        to: process.env.MAIL_RECEIVER_ADDRESS,
        replyTo: data.email,
        subject: `New Inquiry about ${service(data.service)}`,
        text: `
            Name: ${data.name}
            Email: ${data.email}
            Mobile: ${data.number}
            Message: ${data.message}
        `,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mobile:</strong> ${data.number}</p>
            <p><strong>Subject:</strong> ${service(data.service)}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
        `,
    }


        const mailOptionsToClient = {
        from: `"JOYDEEP DAS" <${process.env.SMTP_USERNAME}>`,
        to: data.email,
        subject: service(data.service),
        text: `
            Name: ${data.name}
            Email: ${data.email}
            Mobile: ${data.number}
            Message: ${data.message}
        `,
        html: `
            <h2>Thank You for contacting Me.</h2>
            <p style="font-size: 15px">Hey <strong>${data.name}</strong>,</p>
            <p style="font-size: 15px">Thank you for taking your time to check out my website and provide me with your valuable feedback. I truly appreaciate you taking the time to reach out.</p>
            <p style="font-size: 20px"><strong>Copy of the form you filled</strong></p>
            <p><strong style="font-size: 18px">Name:</strong> ${data.name}</p>
            <p><strong style="font-size: 18px">Email:</strong> ${data.email}</p>
            <p><strong style="font-size: 18px">Mobile:</strong> ${data.number}</p>
            <p><strong style="font-size: 18px">Subject:</strong> ${service(data.service)}</p>
            <p><strong style="font-size: 18px">Message:</strong></p>
            <p>${data.message}</p>
            <p style="font-size: 18px; margin-top: 70px">Thank you again. Hope to see u in next few days</p>
            <p>Warm regards,</p>
            <p><strong>Joydeep Das</strong></p>
        `,
    }

        await transporter.sendMail(mailOptionsToMe);
        await transporter.sendMail(mailOptionsToClient);
    
    return { success: true };
    }catch(err){
        console.log(err);
        return { success: false, error: "Failed to send email" };
    }
}