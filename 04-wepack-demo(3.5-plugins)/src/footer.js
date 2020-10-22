function Footer(){
    const dom = document.getElementById('root');
	const child = document.createElement('div');
	child.innerText = 'Footer';
	dom.append(child);
}
//* commonJS导出方法
module.exports = Footer

