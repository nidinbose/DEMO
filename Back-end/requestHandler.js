import countrySchema from './Modeles/country.model.js'
import pkg from 'jsonwebtoken'
import user from './Modeles/user.model.js'
import bcrypt from 'bcrypt'
import Razorpay from 'razorpay'
// const Razorpay = require('razorpay');
import env from 'dotenv'
import crypto from 'crypto'


// console.log('Key ID:', process.env.RAZORPAY_KEY_ID);

export async function addCountry(req,res) {
    try {
        const { Country, photo, Visitvisa, Studyvisa, Workvisa,Heading,Paragraph,About } = req.body;
        if (!(Country && photo && Visitvisa && Studyvisa && Workvisa&&Heading&&Paragraph&&About)) {
            return res.status(400).json({ error: "Invalid input of data. All fields are required." });
        }
        await countrySchema.create({ Country, photo, Visitvisa, Workvisa, Studyvisa,Heading,Paragraph,About });
        return res.status(200).json({ message: "Country created successfully." });
    } catch (error) {
        console.error("Error in addCountry:", error.message);
        return res.status(500).json({ error: "An error occurred while creating the country." });
    }
}

export async function getCountry(req,res){
    try {
        const data=await countrySchema.find({}).then((data)=>{
            return res.status(200).send(data)
        
        })

        if(!data)
            return res.status(400).send("error in getting country")

    } catch (error) {
        return res.status(500).send("error in getting data")
    }
}

export async function getData(req,res){

    try {
        const {id}=req.params;

        const data=await countrySchema.findOne({_id:id}).then((data)=>{
            return res.status(201).send(data)
        })
    } catch (error) {
        return res.status(500).send("internal server error")
    }
}


export async function userRegister(req, res) {
  const { name, email, password, referredBy, subscriptionId } = req.body;

  try {
    const newUser = new user({
      name,
      email,
      password,
      referredBy,
      subscriptionStatus: "active",
      subscriptionId,
    });

    await newUser.save();
    res.status(201).json({ success: true, referralCode: newUser.referralCode });
  } catch (error) {
    res.status(400).json({ error: "Failed to register user." });
  }
}



export async function userLogin(req, res) {
    try {
      const { email, password } = req.body;
    
      if (!email || !password) {
        return res.status(400).json({
          msg: "Email or password cannot be empty!"
        });
      }
  
      const usere = await user.findOne({ email });
      if (!usere) {
        return res.status(400).json({
          msg: "Invalid email or password!"
        });
      }
  
      const isMatch = await bcrypt.compare(password, usere.password);
      if (isMatch) {
               const token = pkg.sign(
          {
            email: usere.email,
            userId: usere._id
          },
          process.env.JWT_KEY,
          {
            expiresIn: "48h"
          }
        );
       
        return res.status(200).json({
          msg: "Login successful!",
          token,
          userId: user._id 
        });
      }
  
      return res.status(400).json({
        msg: "Invalid email or password!"
      });
  
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        msg: "An error occurred during login.",
        error: error.message
      });
    }
  }
  


  
  // const razorpay = new Razorpay({
  //   key_id:rzp_test_kZ85G3MYrmQk4J,
  //   key_secret:xKU1mjuFZg4IZ7dggh8uee8l,
  // });

  // const razorpay = new Razorpay({
  //   key_id: process.env.RAZORPAY_KEY_ID,
  //   key_secret: process.env.RAZORPAY_KEY_SECRET,
  // });

  const razorpay = new Razorpay({
    key_id: "rzp_test_kZ85G3MYrmQk4J",
    key_secret: "xKU1mjuFZg4IZ7dggh8uee8l", 
  });
  
export async function createOrder(req,res){
  const { email, name } = req.body;
  const amount = 50000;

  const options = {
    amount,
    currency: "INR",
    receipt: `${email}_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Razorpay order." });
  }
}


export async function verifyPayment(req,res){
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const keySecret = "your_razorpay_secret";
  const generatedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generatedSignature === razorpay_signature) {
    return res.status(200).json({ success: true, subscriptionId: razorpay_payment_id });
  } else {
    return res.status(400).json({ success: false });
  }
}



