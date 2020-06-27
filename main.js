console.log("Hello World")

let msgArray = ['Hello', 'My', 'Name', 'is', 'Ellis']

var showMsg = document.getElementById('msg')


document.getElementById("btn")
.addEventListener('click', changeMe);


var changeMe = () => console.log("Hello Yo")

function changeMe() {
    let resultMsg
    msgArray.forEach(e => {
        resultMsg = msgArray[Math.floor(Math.random()*msgArray.length)]
    })
    console.log(resultMsg)
    showMsg.innerHTML = resultMsg
}
