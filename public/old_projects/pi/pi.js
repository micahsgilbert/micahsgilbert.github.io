var pi
var i=0
var points = []

fetch('pi.txt').then(function(response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.text();
}).then(function(file_content) {
    pi = file_content
}).catch(function(status) {
    console.log('Error ' + status);
});


function showNum() {
	if (typeof pi != 'undefined') {
		d = new Date
		i = Math.floor((d.getHours()*3600*1000 + d.getMinutes()*60*1000 + d.getSeconds()*1000 + d.getMilliseconds()) * 1000000/86400000)
		if (i > 1000000) {
			i = 0
		}
		document.getElementById("num").innerHTML = pi[i]
		document.getElementById('info').innerHTML = 'Current Digit: '+i.toString()+'<br>Digits Remaining: '+(1000000-i).toString()
		i++
	}
}

setInterval(showNum,1)