var doc = document.documentElement;
doc.ondragover = function () { this.className = 'hover'; return false; };
doc.ondragend = function () { this.className = ''; return false; };
doc.ondrop = function (event) {
  event.preventDefault && event.preventDefault();
  this.className = '';

  // now do something with:
  var files = event.dataTransfer.files;

  return false;
};