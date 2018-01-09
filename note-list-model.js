(function(exports) {
  function List() {
    this.notes = [];
  };

    List.prototype.AddNoteToList = function (note) {
    this.notes.push(note);
  };

  List.prototype.getNotes = function () {
    var listofnotes = ""
    for ( var i = 0; i< this.notes.length; i++ ){
      listofnotes += this.notes[i] + ", "
    } return listofnotes
  };

  exports.List = List;
})(this);
