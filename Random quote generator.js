var a = document.getElementById("container")
var quo = document.getElementById("quote");
var author = document.getElementById("writer");
var button = document.getElementById("btn");
var soundtn = document.getElementById("speaker")
function btn(){
var url = "https://type.fit/api/quotes"
fetch("https://type.fit/api/quotes")
.then((response)=>{
    return response.text()
    .then(function(data){
    var obj = JSON.parse(data)
    var index = Math.floor(Math.random()*obj.length);
    var  allquote = obj[index].text;
    // console.log(allquote)
    var allauthor = obj[index].author;
    quo.textContent = allquote;
    author.innerHTML = "By:"+allauthor;

     

    }) 

})


}
function sound(){
    var allquote = quo.textContent
    var x = author.textContent
    var ss = new SpeechSynthesisUtterance(allquote  + x)
    speechSynthesis.speak(ss);
}
button.addEventListener("click",btn)
soundtn.addEventListener("click", sound)

