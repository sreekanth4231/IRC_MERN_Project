const mongoose = require('mongoose');

const studentData = new mongoose.Schema({
    studentName : {type : String},
    grade : {type : String},
    subject : {type : String},
    createAt : {type : Date, default : Date.now}
})

module.exports = mongoose.model('StudentDataBase',studentData);