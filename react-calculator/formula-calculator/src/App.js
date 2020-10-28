import React from 'react';
import './App.css';

const initializeState = {
  isFunction: false,
  isZero: true,
  isNumber: true,
  isMinus: false,
  isDot: false,
  formulaValue: "0",
  displayValue: "0",
  prevOp: "",
  isEqual: false,
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initializeState

    this.concatNumber = this.concatNumber.bind(this);
    this.reset = this.reset.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.addDotToNumber = this.addDotToNumber.bind(this);
    this.result = this.result.bind(this);
  }

  async reset() {
    await this.setState(initializeState);
  }

     async concatNumber(event) {
      let targetText = event.target.innerText

      if(this.state.isZero) {
        if(targetText === "0")  {
          await this.setState({
            isZero: true
            })
            return
        }

        if(this.state.displayValue === "0") {
          let tempFormula = this.state.formulaValue.slice(0, -1) + targetText
          await this.setState({
            displayValue: targetText,
            formulaValue: tempFormula,
            isZero: false,
            isEqual: false,
            })
            return
        }

      }
       if(this.state.isFunction) {
         await this.setState({
          isFunction: false,
          displayValue: targetText,
          formulaValue: this.state.formulaValue + targetText,
          isNumber: true,
          isEqual: false,
          isMinus: false,
          prevOp: ""
         })
       }
       else {
        await this.setState({
          isNumber: true,
          isEqual: false,
          isMinus: false,
          displayValue: this.state.displayValue + targetText,
          formulaValue: this.state.formulaValue + targetText,
          prevOp: ""
        })
       }
     

   



  }
    
  async addDotToNumber() {
    if(!this.state.isNumber) {
      await this.setState({
        displayValue: "0.",
        formulaValue: this.state.formulaValue + "0.",
        isNumber: true,
        isFunction: false,
        isZero: false,
        isMinus: false,
        isDot: true,
        prevOp: "",
        isEqual: false,
      })
      return
    }
    if(this.state.isDot) {
      return
    }
   await this.setState({
      displayValue: this.state.displayValue + ".",
      formulaValue: this.state.formulaValue + ".",
      isEqual: false,
      isNumber: true,
      isFunction: false,
      isZero: false,
      isDot: true,
      prevOp: "",
    })
  }

  async addOperation(event) {

    let sign = event.target.value
    let {displayValue, formulaValue} = this.state
    let displayValue2 = parseFloat(displayValue)

    let notnaned = false
    if(!isNaN(displayValue2)) {
      notnaned = true
    }
    
    if(notnaned) {
     await this.setState({
        
        displayValue: sign,
        formulaValue: formulaValue + sign,
        isFunction: true,
        isZero: false,
        isNumber: false,
        isDot: false,
        isEqual: false,
        prevOp: sign
      })
      return
    }
    else {
    if(this.state.prevOp === "") {

      await this.setState({
        displayValue: sign,
        formulaValue: this.state.formulaValue + sign,
        prevOp: sign,
        isEqual: false,
      }) 
      return
    }
    else {
      if(this.state.prevOp !== "-" && sign === "-") {
        await this.setState({
        displayValue: sign,
        formulaValue: this.state.formulaValue + sign,
        prevOp: sign,
        isMinus: true,
        isEqual: false,
      })
        return
      }
      else if (this.state.prevOp !== "-" && sign !== "-") {
        let tempForm = this.state.formulaValue.slice(0, -1) + sign
        await this.setState({
          displayValue: sign,
          formulaValue: tempForm,
          prevOp: sign,
          isEqual: false,
        })
        return
      }
      else {
        let tempForm = this.state.formulaValue.slice(0, -2) + sign
        await this.setState({
          displayValue: sign,
          formulaValue: tempForm,
          prevOp: sign,
          isEqual: false,
        })
        return
      }

    }
    }
  }

 async result() {
  let {formulaValue} = this.state
  if(this.state.isEqual) {
    await this.setState({
      isFunction: false,
      isNumber: true,
      isMinus: false,
      isDot: false,
      prevOp: "",
    })
    return
  }
   
  if(this.state.displayValue.match(/[\-\*\:\+]/)) {
    formulaValue = formulaValue.substring(0, formulaValue.length - 1);
  }

  console.log(formulaValue)

    let newArray0 = formulaValue.split(/([\-\*\:\+])/g)
    console.log(newArray0)
    newArray0 = newArray0.filter(function (el) {
      return el != "";
    });

    console.log(newArray0)
    let newArray = newArray0.map((el) => {

      if(isNaN(Number(el))) {
        return el
      }
      else {
        return Number(el)
      }
    })

    //console.log("New array with numbers", newArray)

      while(newArray.indexOf("-") != -1 && isNaN(Number(newArray[newArray.indexOf("-") - 1]))) {
      let deletedIndex = newArray.indexOf("-");
      newArray.splice(newArray.indexOf("-"), 1);
      newArray[ deletedIndex] = newArray[ deletedIndex] * -1;
      console.log("Deleted and new:", newArray);
    }

    // Tutaj ogarnac dzialanie 5* -5 i 2/7 i 4*-* i 5 +* 7(to laguje)
    let symbols = [":", "*", "-", "+"]
    symbols.forEach((el) => {
      while(newArray.indexOf(el) != -1)
    {
    let operation = newArray.indexOf(el)
    let resultNumber
    
    switch(el) {
      case ":":
        resultNumber = newArray[operation - 1] / newArray[operation + 1]
        break;
        case "*":
          resultNumber = newArray[operation - 1] * newArray[operation + 1]
          break;
          case "-":
            resultNumber = newArray[operation - 1] - newArray[operation + 1]
            break;
            case "+":
            resultNumber = newArray[operation - 1] + newArray[operation + 1]
            break;
    }

    newArray.splice(operation - 1, 3, resultNumber)
    
    console.log("Deleted sign", newArray)
    
    }
    })

    newArray[0] = newArray[0]+""

    await this.setState({
      displayValue: newArray[0],
      formulaValue: newArray[0],
      isFunction: false,
      isZero: newArray[0] === "0" ? true : false,
      prevOp: "",
      isEqual: true,
      isNumber: true,
      isMinus: false,
      isDot: false,
      prevOp: "",
    })
    console.log("Final", this.state.displayValue)
  }
  


  render() {
    return (
      <div id="calculator">
        <span id="formula">{this.state.formulaValue}</span>
        <span id="display">{this.state.displayValue}</span>
        <button id="clear" onClick={this.reset}>C</button>
        <button id="equals" onClick={this.result}>=</button>
        <button id="zero" onClick={this.concatNumber}>0</button>
        <button id="one" onClick={this.concatNumber}>1</button>
        <button id="two" onClick={this.concatNumber}>2</button>
        <button id="three" onClick={this.concatNumber}>3</button>
        <button id="four" onClick={this.concatNumber}>4</button>
        <button id="five" onClick={this.concatNumber}>5</button>
        <button id="six" onClick={this.concatNumber}>6</button>
        <button id="seven" onClick={this.concatNumber}>7</button>
        <button id="eight" onClick={this.concatNumber}>8</button>
        <button id="nine" onClick={this.concatNumber}>9</button>
        <button id="add" value="+" onClick={this.addOperation}>+</button>
        <button id="subtract" value="-" onClick={this.addOperation}>-</button>
        <button id="multiply" value="*" onClick={this.addOperation}>*</button>
        <button id="divide" value=":" onClick={this.addOperation}>:</button>
        <button id="decimal" onClick={this.addDotToNumber}>.</button>
      </div>
      );
     }
}

export default App;
