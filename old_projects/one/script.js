parts = [" is", " anyone", " one", " right", " now", "?"]

final = ["is"]

const generate = n => {
  for (let i = n; i < parts.length-n; i++) {
    for (let j = 0; j < Math.floor(14*Math.random()); j++) {
      let str = parts[i]
      if (Math.random() > 0.5) {
        str = parts[i-n] + str
      }
      if (Math.random() > 0.5) {
        str = str += parts[i+n]
      }
      final.push(str)
    }
  }
}

const run = () => {
  document.getElementById("run").remove()
  for (let n = 0; n < 10; n++) {
    generate(Math.floor(1 + Math.random()* 4))
  }
  for (let i = 0; i < final.length; i++) {
    setTimeout(() => {
      document.getElementById("output").innerHTML += "<p>" + final[i] + "</p>"
    }, i * 1000)
  }
}