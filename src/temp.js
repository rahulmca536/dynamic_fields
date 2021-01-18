
// function insertAfter(newNode, referenceNode) {
//   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

// function runOrFunc() {
//   let orFunc = document.getElementsByClassName('orBtn')
//   let removeFunc = document.getElementsByClassName('removeOrCond')
//   let length = orFunc.length
//   if(length > 0) {
//       for (var i=0; i < length; i++) {
//           orFunc[i].onclick = function() {
//               orHandler(this)
//           }
//       }
//   }

//   length = removeFunc.length
//   if(length > 0) {
//       for (var i=0; i < length; i++) {
//           removeFunc[i].onclick = function() {
//               removeOrHandler(this)
//           }
//       }
//   }
// }

// function orHandler(element) {
//   element.disabled = true
//   let parent = element.parentElement
//   let parentClass = parent.className
//   let parentClassArr = parentClass.split('-')
//   let condNumber = parseInt(parseInt(parentClassArr[parentClassArr.length-1])+1)
//   let orCondNumb = condNumber - 1
//   let dynamicClass = "orCondCont-"+condNumber
//   let superParent = parent.parentElement
//   let SsuperParent = superParent.parentElement
//   let newHtml = document.createElement('p')
//   newHtml.innerHTML = 'Or Condition '+orCondNumb+'<span><button class="removeOrCond">Remove</button></span>'
//   insertAfter(newHtml, element)
//   let newHtml2 = document.createElement('div')
//   newHtml2.classList.add('orCondCont2')
//   newHtml2.classList.add(dynamicClass)
//   newHtml2.innerHTML = '<button type="button" class="orBtn">OR</button>'
//   insertAfter(newHtml2, parent)
//   runOrFunc()
// }

// function removeOrHandler(element) {
//   let parent = element.parentElement
//   let prev = parent.previousSibling
//   let superParent = parent.parentElement
//   let sSuperParent = superParent.parentElement
//   let ssSuperParent = sSuperParent.parentElement
//   let prevParent = superParent.previousSibling
//   superParent.remove()
//   prevParent.disabled = false
//   let childrens = ssSuperParent.children
//   let last = childrens[childrens.length - 1]
//   last.remove()
// }
// class App extends React.Component {
//   dynamicHtml = (<div className="button-cont"><button className="cond-adder" onClick={this.AddCondition.bind(this)}>Add Condition</button></div>)

//   constructor(props) {
//       super(props)
//       this.state = {
//           addedConditions: 0,
//       }
//       this.AddCondition = this.AddCondition.bind(this)
//       this.RemoveCondition = this.RemoveCondition.bind(this)
//   }

//   async AddCondition() {
//       if(this.state.addedConditions == 0) {
//           let divNo = this.state.addedConditions+1
//           let dynamicId = 'cardNo'+divNo
//           this.dynamicHtml = (<div className="Main"><div className="card-cont" id={dynamicId}><p>Condition {divNo}</p><div className='orCondCont'><div className='orCondCont2 orCondCont-1'><button type="button" className="orBtn">OR</button></div></div></div><div className="button-cont"><button className="cond-adder" onClick={this.AddCondition}>And</button><button className="cond-remover" onClick={this.RemoveCondition.bind(this)}>Remove</button></div></div>)
//           await this.setState({
//               addedConditions: divNo
//           })
//           console.log(this.state.addedConditions)
//       }
//       else if(this.state.addedConditions > 0) {
//           let originalNo = this.state.addedConditions
//           let divNoC = originalNo
//           let divNoN = originalNo+1
//           let dynamicIdC = 'cardNo'+divNoC
//           let dynamicIdN = 'cardNo'+divNoN
//           let selected = document.getElementById(dynamicIdC)
//           let html = ''
//           let newHtml = document.createElement('div')
//           newHtml.classList.add('card-cont')
//           newHtml.setAttribute('id', dynamicIdN)
//           newHtml.innerHTML = '<p>Condition '+divNoN+'</p><div className="orCondCont"><div class="orCondCont2 orCondCont-1"><button type="button" class="orBtn">OR</button></div></div>'
//           insertAfter(newHtml, selected)
//           await this.setState({addedConditions: divNoN})
//       }
//       runOrFunc()
//   }

//   async RemoveCondition() {
//       if(this.state.addedConditions > 0) {
//           let originalNo = this.state.addedConditions
//           let divNo = originalNo
//           let subtractedNo = originalNo-1
//           console.log(subtractedNo)
//           let dynamicId = 'cardNo'+divNo
//           console.log(dynamicId)
//           if(subtractedNo == 0) {
//               this.dynamicHtml = (<div className="button-cont"><button className="cond-adder" onClick={this.AddCondition}>Add Condition</button></div>)
//           }
//           else {
//               let selected = document.getElementById(dynamicId)
//               selected.remove()
//           }
//           await this.setState({addedConditions: subtractedNo})
//           console.log(this.state.addedConditions)
//       }
//       runOrFunc()
//   }

//   render() {
//       return this.dynamicHtml
//   }
// }
