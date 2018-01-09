(function(exports){

  function NoteViewer(list){
    this.list = list
  }

  NoteViewer.prototype.viewNotes = function() {
    for(var i = 0; i<this.list.length)
  };

  exports.NoteViewer = NoteViewer
})(this);
