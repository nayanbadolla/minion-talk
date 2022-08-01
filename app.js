var btnClick=document.querySelector(".btn")
var input=document.querySelector("#input")
var output=document.querySelector("#output")

function constructURL(text) {
    var url="https://api.funtranslations.com/translate/minion.json"
    return url+"?"+"text="+text
}

function fetchURL(URL) {
    fetch(URL)
        .then(response => response.json())
        .then(json => dispOutput(json.contents.translated))
        .catch(e)
            alert(e+"error in API...try after sometime")
}

function dispOutput(result) {
    output.innerText=result
}

btnClick.addEventListener('click', function(e) {
    e.preventDefault()
    inputTxt=input.value
    fetchURL(constructURL(inputTxt))
})