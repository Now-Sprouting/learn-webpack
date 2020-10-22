const Header = require('./header.js');
const Content = require('./content.js');
const Footer = require('./footer.js');
import avatar from './me.png';
const image = require('./me.png')


// *通过 ES module 和 CommonJs导入的变量内容不同
console.log(avatar);
console.log(image);
var img = new Image();
img.src = avatar;

var root = document.getElementById('root');
root.append(img);


new Header();
new Content();
new Footer();