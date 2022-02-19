const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pagesDir = path.resolve(__dirname, "src/pages");
const pages = fs.readdirSync(pagesDir);

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode + " mode");

module.exports = {
  mode: mode,
  entry: "./src/entry.js",
  //devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    open: true,
    port: 9000,
    static: {
      directory: "./src",
      watch: true,
    },
    client: {
      overlay: {
        warnings: true, // Чтобы предупреждения выбешивали не только в консоле
        errors: true, // и ошибки пусть также красочно бесят на страницах))))
      },
    },
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css", //[name]
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          filename: `${page}.html`,
          // Названия для итоговых страниц, которые будут в корне dist
          template: `${pagesDir}/${page}/${page}.pug`,
          // Указываем откуда берем каждый элемент
        })
      // /каталог со страницами/имя дирректории/имя диррекктории.pug
    ),
    /*new HtmlWebpackPlugin({
      template: "./src/index.pug",
    }),*/
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        //use: 
        //use: ["html-loader", "my-loader",],
        use: [
          {
            loader: "html-loader",
          }
          /*{
            // Передаем результат в bemdecl-to-fs-loader
            loader: 'bemdecl-to-fs-loader',
            // Указываем уровни переопределения и расширения технологий
            options: { levels: ['pages'], extensions: ['css', 'js'] }
          },
          {
            loader: 'html2bemdecl-loader',
            // Указываем уровни переопределения и расширения технологий
          },
          //"html-loader",
          "my-loader",*/
        ]
        //loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "resolve-url-loader",
          "sass-loader",
          //"my-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: [path.resolve(__dirname, "src/fonts")],
        // exclude не разрешает смотреть в каталог шрифтов
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        include: [
          path.resolve(__dirname, "src/fonts"),
          // include - будет брать только из данных каталогов
          //path.resolve(__dirname, 'node_modules'),
          // Для подключения шрифтов из пакетов если на них есть ссылка
        ],
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        //loader: "pug-loader",
        use: [
          
          {
            loader: "pug-loader",
            options: {
              pretty: true,
              root: path.resolve(__dirname, "src"), // Можно прописывать абсолютные пути внутри pug относительно указанного пути.
            },
          },
          /*{
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty":true
            }
          }*/
        ]
        /*use:[
          {
              // Передаем результат в bemdecl-to-fs-loader
              loader: 'bemdecl-to-fs-loader',
              // Указываем уровни переопределения и расширения технологий
              options: { levels: ['pages'], extensions: ['css', 'js'] }
          },
          {
            loader: 'html2bemdecl-loader',
            // Указываем уровни переопределения и расширения технологий
          },
          {
            loader: "pug-loader",
            options: {
              pretty: true,
              root: path.resolve(__dirname, "src"), // Можно прописывать абсолютные пути внутри pug относительно указанного пути.
            },
          },
          "my-loader"
        ],
        exclude: /(node_modules|bower_components)/,
        /*options: {
          pretty: true,
          root: path.resolve(__dirname, "src"), // Можно прописывать абсолютные пути внутри pug относительно указанного пути.
        },*/
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //     presets: ['@babel/preset-env']
          // }
        },
      },
    ],
  },
  //resolveLoader: {
    //alias: {
      //'my-loader': path.resolve(__dirname, 'src/my-loader.js'),
      //'html-to-bem-loader': path.resolve(__dirname, 'src/html-to-bem-loader.js'),
    //},
  //},
};
if (mode === "development") {
  module.exports.devtool = "source-map";
}
