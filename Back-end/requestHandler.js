import countrySchema from './Modeles/country.model.js'
import pkg from 'jsonwebtoken'
import user from './Modeles/user.model.js'
import bcrypt from 'bcrypt'
import Razorpay from 'razorpay'


console.log('Key ID:', process.env.RAZORPAY_KEY_ID);

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

export async function userRegester(req, res) {
  const { name, email, password, cpassword, referredBy } = req.body;
  if (!(name && email && password && cpassword && referredBy)) {
    return res.status(400).send("Please fill in all fields.");
  }
  if (password !== cpassword) {
    return res.status(400).send("Passwords don't match.");
  }

  try {
      const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      email,
      name,
      password: hashedPassword,
      referredBy,
    });

    return res.status(200).send("Registration successful!");
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred. Please try again later.");
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
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });


const razorpay = new Razorpay({
  key_id: 'rzp_test_kZ85G3MYrmQk4J',       // Replace 'your_key_id' with your actual Razorpay key ID
  key_secret: 'xKU1mjuFZg4IZ7dggh8uee8l' // Replace 'your_key_secret' with your actual Razorpay key secret
});
  export async function subscribeUser(req,res){
    const { userId, planId, planName, amount } = req.body;

  try {
    const user = await user.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      total_count: 12, 
    });

    user.subscription = {
      plan: planName,
      amount,
      status: "pending",
      subscriptionId: subscription.id,
    };
    await user.save();

    res.status(200).json({
      subscriptionId: subscription.id,
      status: user.subscription.status,
      plan: user.subscription.plan,
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Failed to create subscription" });
  }

  }