import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log('\nMongoDB connected\n');
    }
    catch(error){
        console.log("MONGODB connection FAILED ", error);
    }
}

export default connectDB