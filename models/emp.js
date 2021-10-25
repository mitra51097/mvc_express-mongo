const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name: {
        type : String,
        //required : true
    },
    location: {
        type : String,
        //required : true
    },
    bool: {
        type : Boolean,
        //required : true,
        default : false
    }
})

module.exports = mongoose.model('emp',empSchema);