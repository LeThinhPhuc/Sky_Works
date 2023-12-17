import jwt from "../helper/jwt";


// AuthMdw Login
const authMdw = (req:any, res:any, next:any) => {
  // Step 1: get token from header
  const bearer = req.headers.authorization;
  const token = bearer?.split(' ')[1];

  if (!token) {
    return res.status(400).json({
      message: "Access token is required",
    });
  }

  //Step 2: Verify token
  try {
    const decoded = jwt.verifyToken(token);
    if (decoded) {
      req.user = decoded
      next();
    }
  } catch (error:any) {
    
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({
        message: "Token Expired",
      });
    }

    return res.status(403).json({
      message: "Invalid token, no authorization!",
    });
  }
};

// Check Role Admin
const adminMdw = (req:any, res:any, next:any) => {
  const decoded = req.user 
  if (decoded.role === 'admin') {
    next();
  } else {
    res.json({
      message: 'Is not admin',
    });
  }
}

// Check Role employer apply
const employerMdw = (req:any, res:any, next:any) => {
  const decoded = req.user 
  if (decoded.role === 'employer' || decoded.role === 'admin') {
    next();
  } else {
    res.json({
      message: 'Is not employer',
    });
  }
}

// Check Role Content Job
const inditerMdw = (req:any, res:any, next:any) => {
  const decoded = req.user 
  if (decoded.role === 'content' || decoded.role === 'admin') {
    next();
  } else {
    res.json({
      message: 'Is not human resources',
    });
  }
}

export default { authMdw, adminMdw, employerMdw, inditerMdw };
