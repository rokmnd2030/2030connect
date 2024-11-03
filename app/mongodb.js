import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const host = process.env.MONGODB_HOST;
const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DATABASE;

const init_mongodb = async () => {
    try {
        await mongoose.connect(`mongodb://${username}:${password}@${host}:27017/${dbName}`);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('MongoDB connection error: ', err);
    }
}

const userSchema = new mongoose.Schema({
    uuid: { type: String, required: true, unique: true }
});

const User = mongoose.model('users', userSchema);

export { init_mongodb, User }