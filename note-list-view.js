(function(exports){

  function NoteViewer(list){
    this.list = list
  }

  NoteViewer.prototype.viewNotes = function() {
    var location = document.getElementById('list');
    var arr = this.list.getNotes();
    var len = this.list.getNotes().length;
    for(var i = 0; i < len; i++) {
      location.append(arr[i]);
    };
  };
  exports.NoteViewer = NoteViewer;
})(this);
