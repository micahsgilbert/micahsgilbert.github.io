const RED = "#FF4E36"
const ORANGE = "#E8A131"
const YELLOW = "#FFF942"
const GREEN = "#03F038"
const BLUE = "#36F4FF"
const DEFAULT = "#EEEEEE"

function showColor(c) {
	$("body").stop(true).animate({"backgroundColor": c}, 300)
}

function update() {
	f = getAverage("formative")
	s = getAverage("summative")
	if (f == -1 && s == -1) {
		$("#grade").text("")
		showColor(DEFAULT)
	}
	else if (f == -1 && s != -1) {
		$("#grade").text(s.toFixed(2) + " - " + getLetter(s.toFixed(2)))
	}
	else if (f != -1 && s == -1) {
		$("#grade").text(f.toFixed(2) + " - " + getLetter(f.toFixed(2)))
	}
	else {
		g = f*0.35 + s*0.65
		$("#grade").text(g.toFixed(2) + " - " + getLetter(g.toFixed(2)))
	}
}

function getLetter(i) {
	if (i >= 3.26) {
		showColor(BLUE)
		return "A"
	}
	if (i >= 2.51) {
		showColor(GREEN)
		return "B"
	}
	if (i >= 1.76) {
		showColor(YELLOW)
		return "C"
	}
	if (i >= 1.01) {
		showColor(ORANGE)
		return "D"
	}
	showColor(RED)
	return "F"
}

function getAverage(id) {
	var raw_string = document.getElementById(id).value
	var nums = raw_string.split("\n")
	var filteredNums = []
	for (var i = 0; i < nums.length; i++) {
		if (nums[i].length > 0 && !isNaN(nums[i]) && !nums[i].startsWith("0x")) {
			filteredNums.push(Number(nums[i]))
		} else {
      let mult = nums[i].split("x")
      if (mult.length == 2) {
        if (mult[0].length > 0 && !isNaN(mult[0]) && mult[1].length > 0 && !isNaN(mult[1])) {
          for (var j = 0; j < mult[1]; j++) {
            filteredNums.push(Number(mult[0]))
          }
        }
      }
    }
	}
	if (filteredNums.length == 0) {
		return -1
  }
	return filteredNums.reduce((a,b) => {return a+b}) / filteredNums.length
}
