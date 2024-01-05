var alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var alphabetArray = alphabetString.split('')

initAlphabet = () => {
	$("#alphabet").text("")
	if ($("#customalphabet").val().length > 0) {
		alphabetString = $("#customalphabet").val().toUpperCase()
	} else {
		alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	}
	alphabetArray = alphabetString.split('')
	for (var i = 0; i < alphabetString.length; i++) {
		$("#alphabet").append(generateInput(alphabetString[i]))
	}
}

arrayObjectIndexOf = (myArray, searchTerm) => {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i] == searchTerm) return i;
    }
    return -1;
}

generateInput = (letter) => {
	return `<div class='letter-input'><p>${letter}</p><input id='${letter}-replace' onkeyup='update()'></input></div>`
}

update = () => {
	const newArray = []
	for (var i = 0; i < alphabetArray.length; i++) {
		var s = $(`#${alphabetArray[i]}-replace`).val()
		if (s.length == 0) {
			s = "-"
		}
		newArray.push(s.toLowerCase())
	}
	var output = ""
	var input = $("#input").val().toUpperCase()
	for (var i = 0; i < input.length; i++) {
		var ind = arrayObjectIndexOf(alphabetArray, input[i])
		var char
		if (ind < 0) {
			char = input[i]
		} else {
			char = newArray[ind]
		}
		output += char
	}
	$("#output").val(output)
}

$(document).ready(() => {
	initAlphabet()
})