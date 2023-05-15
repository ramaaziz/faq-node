import jwt from 'jsonwebtoken';
import secret from "../config/auth.config.js";


const authentification = async (req, res, next) => {
      const token = req.header('Authorization');
      if (!token) return res.status(401).json({ message: 'Token not provided' });
      try {
            const decoded = jwt.verify(token, secret);
            req.user = decoded;
            next();
      }
      catch (err) {
            res.status(400).json({ message: 'Invalid token' });
      }
   }

export default authentification;