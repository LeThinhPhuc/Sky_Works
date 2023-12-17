import UserAdmin from '../models/userAdmin.model';
import validationMongoId from '../helper/validationMongoId'
import  bcrypt from 'bcryptjs';

const fetchAllUser = async (req: any, res: any) => {
  try {

    const User:any = await UserAdmin.find().select('-password');

    if (!User) {
      res.status(404).json({
        message: 'Not Found',
      });
    }
    
    res.json({
      message: 'Success Get All User',
      data: User,
    })}

    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'User not valid',
      });
    }

    const user = await UserAdmin.findById(id).select('-password');

    if (!user) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success Get User',
      data: user,
    })}
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

// API register a user
const registerUser = async (req:any, res:any) => {
  const { username, password, email, role } = req.body;

  // 1. Validation
  if (!username || !password || !email) {
    return res.status(400).json({
      message: "Missing required keys",
    });
  }

  // 2. ExistingUser
  try {
    const existingUser = await UserAdmin.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // 3. Mã hoá password
    // 4. Add user => vào database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserAdmin({
      username,
      password: hashedPassword,
      email,
      role,
    });

    await user.save();

    // 5. Response
    res.status(201).json({
      message: "Register successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    })}
};

const updateIn4User = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'User not valid',
      });
    }
    const existingUser = await UserAdmin.findById(id);

    if (!existingUser) {
      return res.status(400).json({
        message: 'User not exists',
      });
    }
    // Mã hoá password
    const { username, email, role } = req.body
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      username,
      // password: hashedPassword,
      email,
      role,
      
    };

    await UserAdmin.findByIdAndUpdate(id, user);
    const newDataUpdate:any = await UserAdmin.find().select('-password');


    res.json({
      message: 'Success Update Information User',
      newData:newDataUpdate,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: 'User not valid',
      });
    }

    await UserAdmin.findByIdAndDelete(id);

    const newDataUser = await UserAdmin.find();
    res.json({
      message: 'Success Delete UserAdmin',
      newData: newDataUser
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

export default { fetchAllUser, fetchUser, registerUser, updateIn4User, deleteUser };