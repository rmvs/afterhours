import UserService from "./UserService";
import { db } from "./firebase";

export const userService = new UserService(db)