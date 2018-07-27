const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports =[
// {
//     mode:'development',
//     entry: './src/app.scss',
//     output: {
//       // This is necessary for webpack to compile
//       // But we never use style-bundle.js
//       filename: 'style-bundle.js',
//     },
//     module: {
//       rules: [{
//         test: /\.scss$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'bundle.css',
//             },
//           },
//           { loader: 'css-loader' },
//           {
//             loader: 'sass-loader',
//             options: {
//               includePaths: ['./node_modules'],
//             }
//           },
//         ]
//       }]
//     },
//   },
   {
    mode:'development',
    entry:"./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
        //     {
        //   test: /\.js$/,
        //   loader: 'babel-loader',
        //   query: {
        //     presets: ['env']
        //   }
        // },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.scss$/,
            use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                },
                {
                  loader: "sass-loader",
                  options: {
                    includePaths: ['./node_modules'],
                  } // compiles Sass to CSS
                }
              ]
          }]
      }
    }]
    // {
    //   entry: './app.scss',
    //   output: {
    //     // This is necessary for webpack to compile
    //     // But we never use style-bundle.js
    //     filename: 'style-bundle.js',
    //   },
    //   module: {
    //     rules: [{
    //       test: /\.scss$/,
    //       use: [
    //         {
    //           loader: 'file-loader',
    //           options: {
    //             name: 'bundle.css',
    //           },
    //         },
    //         { loader: 'extract-loader' },
    //         { loader: 'css-loader' },
    //         {
    //           loader: 'sass-loader',
    //           options: {
    //             includePaths: ['./node_modules'],
    //           }
    //         },
    //       ]
    //     }]
    //   },
    // },
  