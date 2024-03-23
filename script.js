//your JS code here. If required.
let btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
	let text = document.getElementById('text')
	let number = document.getElementById('delay')
	const p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(`${text.value}`)
	},`${(number.value)*1000}`)
})
	async function getdata(){
		document.getElementById('output').innerText = await p1;
	}
	getdata();
})
