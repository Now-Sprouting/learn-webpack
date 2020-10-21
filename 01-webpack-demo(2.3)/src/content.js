function Contant(){
	const dom = document.getElementById('root');
	const child = document.createElement('div');
	child.innerText = 'Contant';
	dom.append(child);
}
//* commonJS导出方法
module.exports = Contant

