document.getElementById("name").addEventListener("keyup", function(e) {  console.log('validating')
  if(document.getElementById("name").value == null || document.getElementById("name").value == '') {
    document.getElementById("name-error").innerText = "Name is required."
    e.preventDefault();
  } else {
    document.getElementById("name-error").innerText = ""
  }
}, false);
