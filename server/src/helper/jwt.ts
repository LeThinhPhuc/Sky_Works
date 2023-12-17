import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || "";
const EXPIRE_IN = process.env.JWT_EXPIRE_IN || "";

const signJWt = (payload:any) => {
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRE_IN,
  });
  return token;
}

const verifyToken = (token:any) => {
  const decode = jwt.verify(token, SECRET_KEY);
  return decode;
}

export default { signJWt , verifyToken };
