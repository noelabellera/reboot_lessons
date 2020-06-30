console.log("Hello World")

let msgArray = ['Hello', 'My', 'Name', 'is', 'Ellis']

var showMsg = document.getElementById('msg')
var typeName = document.getElementById('nameBox')
let showName = document.getElementById('yourName')


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
    if(typeName.value === '') {
        showName.innerHTML = "Please Enter a name"
    }else {
        showName.innerHTML = typeName.value
    }
    console.log(typeName.value)
    typeName.value = ''
}

let ul = document.createElement('ul')

document.getElementById('list').appendChild(ul);

msgArray.forEach(function (item) {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += item;
})
