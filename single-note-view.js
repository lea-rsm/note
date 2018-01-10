(function (exports){
  function SingleNoteView(note){
    this.note = note
  };
  SingleNoteView.prototype.returnToHtml = function (note){
    return '<p>' + note.returnNote() + '</p>';
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
