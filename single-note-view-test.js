function createAList(){
  var list = new List()
  assert.isTrue(list.notes.length === 0, "Note list should be an empty array");
  };

createAList();

function returnToHtml(){
  var note = new Note("test")
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.returnToHtml(note) === "<p>test</p>"," single note is printed")
};

returnToHtml();
