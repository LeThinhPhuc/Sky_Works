import mongoose, { Document, Model, Schema } from 'mongoose';
// Variable declaration
export interface IAdmin {
    username: String;
    email: String;
    password: String;
    role: String;  //admin, HR, content
    created_at: Date;
  }

  // Schema is database combination of rules
  const userAdmin: Schema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String },
    created_at: { type: Date, default: Date.now() },
  });
  
  const UserAdmin = mongoose.model<IAdmin>('UserAdmin', userAdmin);

  export default UserAdmin;
