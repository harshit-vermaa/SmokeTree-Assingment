import mongoose from "mongoose";

const addressSchema = mongoose.Schema(
    {
        address:{
            type:String,
            require:true
        }
    }
)

const addressModel = mongoose.model('addressModel', addressSchema)

export default addressModel

// Collection which contain all the address 