const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let schema = mongoose.Schema;
let kiki = "Fields must be filled properly🙄"

const user = new schema({
   name: {
      type: String,
      required: true | kiki
   },
   email:{
      type: String,
      unique: true,
      required: true | kiki
   },
   password:{
      type:String,
      required: true | kiki
   }
})

// Hash Password 
user.pre("save", (next)=>{
   if (this.isNew) {
   let salt = bcrypt.genSaltSync(10);
   let hash = bcrypt.hashSync(this.password, salt);
   this.password = hash;
 }
 next();
});
//validate user password
user.methods.validPassword = function(inputedPassword) {
 return bcrypt.compareSync(inputedPassword, this.password);
};

module.exports = mongoose.model("user ", user)