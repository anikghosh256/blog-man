// import UserService from './UserService';
import Controller from '../controller/Controller.js';
export default class User extends Controller{
  constructor() {
    super();
    // this.userService = new UserService();
  }

  async getUser(event, context, callback) {
    return this.response({message: 'Get User'}, 200)
  }

}
