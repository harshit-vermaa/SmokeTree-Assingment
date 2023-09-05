import userModel from "../models/user.js";
import addressModel from "../models/address.js";


const createController = async (req, res) => {
    const { first, last, address } =  req.body
    try {
        // Validation 
        if (!first || !last || !address) {
            res.json({
                success: true,
                message: 'Please enter all the details'
            })
        }else{
            // Saving Data 
            const nameSave = new userModel({ first, last });
            const addressSave = new addressModel({ address })
            await nameSave.save()
            await addressSave.save()
            const allNames = await userModel.find()
            const allAddress = await addressModel.find()

            // Showing All the user Names and its address from DB 
            console.log('All user names :', allNames)
            console.log('All user address :', allAddress)
            res.json({
                success: true,
                message: 'User data saved successfully'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export { createController }

// This is a controller file which contain all the code of /create router 