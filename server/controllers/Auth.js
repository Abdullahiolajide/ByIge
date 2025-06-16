const User = require("../Model/users")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { frontendUrl } = require("../global");
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
      console.error("Full error:", err);

        // Check if it's a duplicate email error inside the cause
        if (err?.cause?.code === 11000) {
            return res.status(400).json({ message: "Email already exists" });
        }

        res.status(500).json({ message: "Something went wrong" });
    }
}


const verifyEmail = async (req, res)=>{
    const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).send("User not found.");

    if (user.isVerified) return res.redirect(`${frontendUrl}/email-verified`)

    user.isVerified = true;
    await user.save();

   
    res.redirect(`${frontendUrl}/email-verified`)
  } catch (err) {
    res.status(400).send("Invalid or expired verification link.");
  }

}


const login = async(req, res)=>{
    const {email, password} = req.body

    try{
        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({messae: "Invalid Email"})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message: "Incorrect Password"})
        
        if(!user.isVerified) return res.status(403).json({message: "Please verify your email "})

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ message: 'Login successful', token });
        
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', err });
  }

}
module.exports = {
    createAccount,
    verifyEmail,
    login
}