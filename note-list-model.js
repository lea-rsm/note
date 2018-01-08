(function(exports) {
  function List() {
    this.notes = [];
  };
  // var note = new Note("note")
    List.prototype.AddNoteToList = function (note) {
    this.notes.push(note);
  };
  
  exports.List = List;
})(this);
