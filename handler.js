"use strict";
import UserController from "./modules/user/UserController.js";
const userController = new UserController();
export async function home(event) {
  const response = await userController.getUser(event);
  return response;
}
