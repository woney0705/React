const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
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
      //여러가지 규칙을 적용가능하기때문에 배열
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], //browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  // entry에 파일을 읽어서 모듈의 규칙을 적용해서 output에 출력한다
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, //출력
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
