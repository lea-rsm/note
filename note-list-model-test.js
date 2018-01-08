function createAList(){
  var list = new List()
  assert.isTrue(list.notes.length === 0, "Note list should be an empty array");
  };

createAList();

function AddNoteToList() {
  var list = new List()
  var note = new Note("Lea's note")
  list.AddNoteToList(note);
  assert.isTrue(list.notes.length === 1, "A note was added to the list")

};

 AddNoteToList();
