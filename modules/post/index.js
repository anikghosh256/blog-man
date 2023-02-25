"use strict";
import PostController from "./PostController.js";

const postController = new PostController();

export async function posts(event, context, callback) {
  const response = await postController.getAll(event, context, callback);
  return response;
}
