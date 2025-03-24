import User from './user.model';

// Function to find the last user ID from the database
const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id;
};

// Function to generate a new user ID
const generateUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || '00000';
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementedId;
};

export { generateUserId, findLastUserId };
