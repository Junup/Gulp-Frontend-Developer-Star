# 使用构建工具gulp 搭建前端开发环境

#### 初期功能：
* css压缩
* less编译
* 图片压缩
* html压缩
* 自动刷新
* 模板文件

-----
1. 首先clone项目到本地
 `git clone git@172.16.204.11:junup/Gulp-Frontend-Developer.git`

2. 在项目内打开CMD执行代码
`npm install`

3. 开始开发
`gulp`

-----
>注：因图片压缩不必要每次保存都执行，所以想执行图片压缩操作时，请执行 `gulp smushit` 
-----

Ps：

src为开发文件夹，html，css，js在该文件夹下开发，
app为生产文件夹，编译后的代码会生成在改文件夹下，

v1.0.2版本已可正式使用。