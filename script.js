const clock = document.getElementById('clock')

function currentTime() {
	let date = new Date()

	let hours = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()

	let time = hours + ':' + min + ':' + sec

	clock.innerText = time
}
