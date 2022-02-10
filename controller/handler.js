// Controller -- --
const  user = require('../database/schema');
// const bcrypt = require('bcrypt');


exports.createUser = async (req, res)=>{
   try {
      let name = req.body.name,
            email = req.body.email,
            password =req.body.password

   console.log(name, email, password)
   if(!name, !email, !password){
      res.json({
         message: "All fields must be filled propperly!😗"
      })
   }else{
      if(email == user.findOne({email}).select("email")){
         res.json({
            message: "Email already exists 🙄"
         })
      }else{
         let  User = new user({name, email, password});
         await User.save()
         res.status(200).json({
            message: "User Created!!!🚀🚀",
            data: User
         })
         console.log(User);
      }
   }
} catch (error) {
      console.log(error);  
   }
}


exports.loginUser = async(req, res)=>{
   try {
      let email = req.body.email
      let password = req.body.password
   user.findOne({email, password})
   if((email, password)){
      if(user.password == req.body.password){
         res.json({
            message: `Bravo!, Successfully Logged in as ${email}🤩🚀🐐`
         })
      }else{
         res.json({
            message: "Wrong Password!🙄🙄"
         })
      }
   }else{
      res.json({
         message:  `${req.body.email} is not registered!`
      });
   }
   } catch (error) {
      console.log(error)
   }
};