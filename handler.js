"use strict";

module.exports.home = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: {"hi": "hello"},
      },
      null,
      2
    ),
  };
};
