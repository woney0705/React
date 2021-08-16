const path = require("path");
//노드에서 경로를 쉽게 조작하게 해줌
module.exports = {
  name: "wordrelay-setting", //마음대로
  mode: "development", //실서비스 : production
  devtool: "eval", //빠르게
  resolve: {
    extensions: [".js", ".jsx"],
  }, //확장자
  entry: {
    app: ["./client"],
  }, //입력
  // 다른파일이 다른파일을 불러오고있다면 따로 적을 필요가없다.
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
