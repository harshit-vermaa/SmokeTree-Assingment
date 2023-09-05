import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        first: {
            type: String,
            require: true
        },
        last: {
            type: String,
            require: true
        }
    }
)

const userModel = mongoose.model('userModel', UserSchema)

export default userModel

// collection which contain all user name { first, last  }