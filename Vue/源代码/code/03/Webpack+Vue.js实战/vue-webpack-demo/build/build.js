'use strict'  // js的严格模式
require('./check-versions')() // 引入node和npm的版本检查

// 设置环境变量为production生产环境，而development为开发环境
process.env.NODE_ENV = 'production'  

// 导进所需的各模块
const ora = require('ora')  // loading模块
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')  // 公共配置文件
const webpackConfig = require('./webpack.prod.conf')  // 开发配置

const spinner = ora('building for production...')
spinner.start()

// rm方法删除dist目录下的static文件夹
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err  //若删除中有错误则抛出异常并终止程序
  webpack(webpackConfig, (err, stats) => {  //若没有错误则继续执行，构建webpack
    spinner.stop()  //结束loading动画
    if (err) throw err  //若有异常则抛出
    process.stdout.write(stats.toString({ //标准输出流，类似于console.log
      colors: true, // 增加控制台颜色开关
      modules: false, // 是否增加内置模块信息
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,  // 允许较少的输出
      chunkModules: false // 编译过程持续打印
    }) + '\n\n')

    // 编译出错的信息
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    // 编译成功的信息
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
