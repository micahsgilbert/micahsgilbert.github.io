import React from 'react'
import "./styles/Typer.css"
import languages from "../data/languages.json"

export default class Typer extends React.Component {
  constructor(props) {
    super(props)
    this.languages = languages
    this.state = {
      mode: "deleted",
      currentWord: "",
      currentText: "",
      color: null
    }
  }
  render() {
    switch(this.state.mode) {
      case "typing":
        setTimeout(() => {
          let length = this.state.currentText.length
          let newWord = this.state.currentWord.substr(0, length + 1)
          if (newWord == this.state.currentWord) {
            this.setState({currentText: newWord, mode: "typed"})
          } else {
            this.setState({currentText: newWord})
          }
        }, 50)
        break
      case "typed":
        setTimeout(() => {
          this.setState({mode: "deleting"})
        }, 2000)
        break
      case "deleting":
        setTimeout(() => {
          let length = this.state.currentText.length
          let newWord = this.state.currentWord.substr(0, length - 1)
          if (newWord.length === 0) {
            this.setState({currentText: newWord, mode: "deleted"})
          } else {
            this.setState({currentText: newWord})
          }
        }, 100 * Math.random() + 150)
        break
      case "deleted":
        setTimeout(() => {
          this.languages = this.languages.filter(lang => lang !== this.state.currentWord)
          if (this.languages.length === 0) {
            this.languages = languages
          }
          let newWord
          while(true) {
            newWord = this.languages[Math.floor(Math.random() * this.languages.length)]
            if (newWord.language !== this.state.currentWord) {
              break
            }
          }

          this.setState({mode: "typing", currentWord: newWord.language, color: newWord.color})
        }, 200)
        break
      default:
    }

    return <span id="typer-container" style={{color: this.state.color}}><span id="typer-language">{this.state.currentText}</span><span id="typer-cursor">|</span></span>
  }
}