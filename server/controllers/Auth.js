const User = require("../Model/users")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config()



const createAccount = async (req, res)=>{
    try{
        const user = await User.create(req.body)

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const verifyLink = `http://localhost:4000/api/auth/verifyEmail?token=${token}`;

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
        });

        const mailOptions = {
        from: `"ByIge Auth" <${process.env.EMAIL}>`,
        to: user.email,
        subject: "Verify Your Email",
        html: `
            <h2>Welcome to ByIge 🎉</h2>
            <p>Click the link below to verify your email:</p>
            <a href="${verifyLink}">Verify Now</a>
        `
        };
        transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Email error:", err);
            return res.status(500).json({ message: "Failed to send verification email" });
        }
        res.status(200).json({ message: "Signup successful. Check your email to verify." });
        });
    }
    catch(err){
        console.log(err)
        res.status(500).send('Error creating User')
    }
}


const verifyEmail = async (req, res)=>{
    const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).send("User not found.");

    if (user.isVerified) return res.send("Email already verified.");

    user.isVerified = true;
    await user.save();

    res.send("Email successfully verified. You can now log in.");
  } catch (err) {
    res.status(400).send("Invalid or expired verification link.");
  }

}

module.exports = {
    createAccount,
    verifyEmail
}