(function(exports) {
  function List() {
    this.notes = [];
  };

  List.prototype.AddNoteToList = function (noteToAdd) {
    note = new Note(noteToAdd)
    this.notes.push(note);
  };

  List.prototype.getNotes = function () {
    return this.notes.map(note => note.returnNote())
  };

  exports.List = List;
})(this);
