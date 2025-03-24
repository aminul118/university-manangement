import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  default_user_pass: process.env.DEFAULT_USER_PASS,
};
