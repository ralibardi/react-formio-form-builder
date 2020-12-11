/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const mode = env && env.NODE_ENV ? env.NODE_ENV : "production";

  return {
    mode: mode,
    entry: {
      app: "./src/index.tsx",
      admin: "./src/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "[name].main.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devtool: "source-map",
    plugins: [
      new ForkTsCheckerWebpackPlugin({ eslint: true }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          exclude: [/node_modules/, /Scripts/],
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: [/^\.\/Content/],
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.scss$/,
          exclude: [/^\.\/Content/],
          use: [
            "style-loader",
            "css-loader",
            "resolve-url-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.svg/,
          exclude: [/^\.\/Content/],
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: [
                    { prefixIds: { prefixIds: true, prefixClassNames: false } },
                    { cleanupIDs: false },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
                outputPath: "fonts",
              },
            },
          ],
        },
      ],
    },
  };
};
