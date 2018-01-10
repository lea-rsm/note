(function(exports) {

  function NoteViewer(list) {
    this.list = list
  }

  NoteViewer.prototype.viewNotes = function() {

    var location = document.getElementById('list');
    var arr = this.list.getNotes();
    var len = this.list.getNotes().length;

    location.innerHTML = " "
    for (var i = 0; i < len; i++) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(arr[i]);
      node.appendChild(textnode);
      location.appendChild(node);
    };
  };
  exports.NoteViewer = NoteViewer;
})(this);
