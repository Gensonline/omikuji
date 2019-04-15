let btn = document.getElementById('btn');

btn.addEventListener('click', omikuji);

function omikuji(){
	let res = ['大吉','吉','中吉,','凶','大凶'];
	let resLen = res.Length - 1;
	let randomNum = Math.random();
	let num = Math.round(resLen * randomNum);
	document.getElementById('result').innerHTML = `<strong>${res[num]}</strong>`;
}