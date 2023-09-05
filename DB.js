import mongoose from "mongoose"

const DBConnect = () => {
    mongoose.connect(process.env.DB).then(() => { console.log('DB is Connected') })
    .catch(() => { console.log('Error in DB connection', process.env.DB) })
}

export default DBConnect

// This file have code for connecting DataBase