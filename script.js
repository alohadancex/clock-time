const clock = document.getElementById('clock')

function currentTime() {
	const date = new Date()

	hours = date.getHours().toString()
	min = date.getMinutes().toString()
	sec = date.getSeconds().toString()

	hourse = hours < 10 ? '0' + hours : hours

	min = min < 10 ? '0' + min : min

	sec = sec < 10 ? '0' + sec : sec

	const time = hours + ':' + min + ':' + sec

	clock.innerHTML = time
}

setInterval(currentTime, 500)
