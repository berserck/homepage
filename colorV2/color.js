function color() {
  var lines = document.getElementById("textInput").value.split('\n');
  var x = "";
  for ( var i = 0; i < lines.length; i++){
    var prefix = "";
    var posfix = "";
    if(  lines[i].substring(0, 1) === "+"){
      prefix = "<font color=\"#800\">"
      posfix = "</font>"
    }
    if(  lines[i].substring(0, 1) === "-"){
      prefix = "<font color=\"#88F\">"
      posfix = "</font>"
    }
    x = x + "\n" + prefix +
      lines[i]
    + posfix;

  }
  document.getElementById("textOutput").value = x;
  // just for debug, the \n replace is needed because elog is more premissive than HTML
  document.getElementById("result").innerHTML = x.replace(/(\n)/gm,"<br/>");
}


// function copyToClipboard() {
//   console.log("copyToClipboard");
//   text = document.getElementById("textOutput").value;
//   window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
// }

