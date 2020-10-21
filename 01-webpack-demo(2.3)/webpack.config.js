// *webpack的基本配置
//! 一:基本配置
// *1.入口文件entry
// *2.出口文件output
// *3.打包模式mode 默认production(压缩文件), development(不压缩文件)
// *4.entry 是对 entry : {main: './src/index.js'}的缩写所以会看到打包完后面有个 name: main这个属性


//! 二:运行打包程序
// *3.1如果不存在 webpack.config.js文件,webpack默认有配置文件,可以执行 'npx webpack index.js' 对index.js文件进行打包
// *3.2手动创建webpack.config.js文件,打包执行 'npx webpack' 进行打包,如果创建名不为webpack.config.js的文件,要执行npx webpack --config ***
// *3.3修改package.json中的script代码 执行'npm run boundle'执行打包命令
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // 上面一行代码是对 entry : {main: './src/index.js'}的缩写所以会看到打包完后面有个 name: main这个属性
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}