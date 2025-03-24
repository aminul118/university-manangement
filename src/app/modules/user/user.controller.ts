import { RequestHandler } from 'express';
import { UserService } from './user.service';

const handleCreateUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);

    next(err);
  }
};

export const UserController = {
  handleCreateUser,
};
