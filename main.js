console.log("Hello World")

let msgArray = ['Hello', 'My', 'Name', 'is', 'Ellis']

var showMsg = document.getElementById('msg')
var name = document.getElementById('nameBox')
let showName = document.getElementById('name')


document.getElementById("btn")
.addEventListener('click', changeMe);


document.getElementById('nameBtn')
.addEventListener('click', changeName)

var changeMe = () => console.log("Hello Yo")

function changeMe() {
    let resultMsg
    msgArray.forEach(e => {
        resultMsg = msgArray[Math.floor(Math.random()*msgArray.length)]
    })
    console.log(resultMsg)
    showMsg.innerHTML = resultMsg
}

function changeName() {
    console.log("Hello")
    if(name = '') {
        showName.innerHTML = "Please Enter a name"
    }else {
        showName.innerHTML = name
    }
    showName.innerHTML ="test"
}

console.log(name)
