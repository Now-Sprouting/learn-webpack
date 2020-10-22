function Header(){
	const dom = document.getElementById('root');
	const child = document.createElement('div');
	child.innerText = 'Header';
	dom.append(child);
}
//* commonJS导出方法
module.exports = Header

