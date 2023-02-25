import PostService from './PostService.js';
import Controller from '../controller/Controller.js';

export default class Post extends Controller{
  constructor() {
    super();
    this.postService = new PostService();
  }

  async getAll(event, context, callback) {
    try {
      const users = await this.postService.getAll();
      return this.success(users, 200);
    } catch (error) {
      return this.error(error);
    }
  }

}
