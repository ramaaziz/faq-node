import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET_KEY;

export default secret;