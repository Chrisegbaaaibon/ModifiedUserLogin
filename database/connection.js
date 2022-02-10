const mongoose = require('mongoose');

exports.db = async ()=>{
try {
   mongoose.connect(process.env.MONGO_URI)
   console.log('Connected Successfully!😌😌')
} catch (error) {
   console.error()
}};