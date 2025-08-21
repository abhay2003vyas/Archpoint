import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// ✅ Setup transporter once (not on every request)
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter at server start
transporter
  .verify()
  .then(() => console.log("✅ Mail server ready"))
  .catch((err) => console.error("❌ Mail server error:", err));

// 📩 Contact Form Route
router.post("/", async (req, res) => {
  try {
    const { name, contact, email } = req.body;

    if (!name || !contact || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newContact = new Contact({ name, contact, email });
    await newContact.save();

    // Get current date and time
    const currentDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Enhanced Email content with modern styling
    const mailOptions = {
      from: `"ArchPoint Contact" <${process.env.EMAIL_USER}>`,
      to: "contactarchpoint@gmail.com", // 👈 Admin email
      subject: `🏗️ New Contact Form Submission - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
          
          <!-- Main Container -->
          <div style="max-width: 600px; margin: 20px auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2);">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                🏗️ ArchPoint
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 16px; font-weight: 300;">
                New Contact Form Submission
              </p>
            </div>

            <!-- Content Card -->
            <div style="background: white; margin: 0; border-radius: 0;">
              
              <!-- Alert Banner -->
              <div style="background: linear-gradient(90deg, #10b981, #059669); color: white; padding: 15px 30px; text-align: center;">
                <div style="display: inline-flex; align-items: center; font-weight: 600;">
                  <span style="margin-right: 8px;">🔔</span>
                  New lead received on ${currentDate}
                </div>
              </div>

              <!-- Contact Details -->
              <div style="padding: 40px 30px;">
                
                <!-- Contact Info Grid -->
                <div style="margin-bottom: 30px;">
                  
                  <!-- Name Card -->
                  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, #3b82f6, #1d4ed8);"></div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                      <span style="background: #dbeafe; color: #1e40af; padding: 8px; border-radius: 8px; margin-right: 12px; font-size: 16px;">👤</span>
                      <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span>
                    </div>
                    <div style="color: #1e293b; font-size: 18px; font-weight: 600; margin-left: 44px;">${name}</div>
                  </div>

                  <!-- Email Card -->
                  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, #06b6d4, #0891b2);"></div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                      <span style="background: #cffafe; color: #0e7490; padding: 8px; border-radius: 8px; margin-right: 12px; font-size: 16px;">📧</span>
                      <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span>
                    </div>
                    <div style="color: #1e293b; font-size: 18px; font-weight: 600; margin-left: 44px;">
                      <a href="mailto:${email}" style="color: #0891b2; text-decoration: none; border-bottom: 1px dotted #0891b2;">${email}</a>
                    </div>
                  </div>

                  <!-- Contact Card -->
                  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, #10b981, #059669);"></div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                      <span style="background: #d1fae5; color: #065f46; padding: 8px; border-radius: 8px; margin-right: 12px; font-size: 16px;">📱</span>
                      <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact Number</span>
                    </div>
                    <div style="color: #1e293b; font-size: 18px; font-weight: 600; margin-left: 44px;">
                      <a href="tel:${contact}" style="color: #059669; text-decoration: none; border-bottom: 1px dotted #059669;">${contact}</a>
                    </div>
                  </div>

                </div>

                <!-- Quick Actions -->
                <div style="background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 12px; padding: 24px; text-align: center;">
                  <h3 style="margin: 0 0 16px 0; color: #334155; font-size: 18px; font-weight: 700;">Quick Actions</h3>
                  <div style="display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
                    <a href="mailto:${email}" style="background: #0891b2; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; transition: all 0.3s ease;">
                      📧 Reply via Email
                    </a>
                    <a href="tel:${contact}" style="background: #059669; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; transition: all 0.3s ease;">
                      📞 Call Now
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <!-- Footer -->
            <div style="background: #1e293b; color: #94a3b8; padding: 24px 30px; text-align: center;">
              <div style="border-top: 1px solid #334155; padding-top: 16px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.5;">
                  This email was automatically generated from your ArchPoint contact form.<br>
                  <strong style="color: #f1f5f9;">Submission ID:</strong> ${newContact._id || 'Generated'}
                </p>
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #334155;">
                  <span style="color: #64748b; font-size: 12px;">
                    © ${new Date().getFullYear()} ArchPoint. Powered by modern web technology.
                  </span>
                </div>
              </div>
            </div>

          </div>

          <!-- Mobile Responsiveness -->
          <style>
            @media only screen and (max-width: 600px) {
              .container { margin: 10px !important; }
              .content { padding: 20px !important; }
              .actions a { display: block !important; margin: 8px 0 !important; }
            }
          </style>

        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("📩 Email sent successfully");
      return res.status(201).json({
        message: "Contact saved & email sent successfully",
      });
    } catch (mailError) {
      console.error("❌ Error sending email:", mailError);
      return res.status(201).json({
        message: "Contact saved, but email could not be sent",
      });
    }
  } catch (error) {
    console.error("Error in contact form submission:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;