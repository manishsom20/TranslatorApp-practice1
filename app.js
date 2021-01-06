var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output-div");

var severurl = "https://lessonfourapi.som021100.repl.co/translate/yoda.json";
function constUrl(text) {
  return severurl + "?text=" + text;
}
function errorhandler (error){
  console.log("Error occurred");
  alert("Server is down!! Plese try latter");
}
function clickHandler() {
  var inputText = txtInput.value
  fetch(constUrl(inputText))
    .then(Response => Response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText.value;
    })
    .catch(errorhandler)
};
btnTranslate.addEventListener("click", clickHandler);