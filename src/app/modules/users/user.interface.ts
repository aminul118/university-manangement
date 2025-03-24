import { Model } from 'mongoose'

type IUser = {
  id: string
  role: string
  password: string
}

type UserModel = Model<IUser, object>

export { IUser, UserModel }
