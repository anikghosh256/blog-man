export default class Controller{
  response(data, httpCode = 200) {
    return {
      statusCode: httpCode,
      body: JSON.stringify(data),
    };
  }
}