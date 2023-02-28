import Service from "../../service/Service.js";

export default class PostService extends Service {
  constructor() {
    super();
  }

  async getAll() {
    return this.client.post.findMany();
  }
}
