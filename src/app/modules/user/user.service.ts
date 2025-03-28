import { config } from '../../../config';
import ApiError from '../../../errors/ApiErros';
import { IUser } from './user.interface';
import User from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto genarated incremental id
  const id = await generateUserId();
  user.id = id;

  // Default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(500, 'Failed to create');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
