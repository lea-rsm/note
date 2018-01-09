function createAList(){
  var list = new List()
  assert.isTrue(list.notes.length === 0, "Note list should be an empty array");
  };

createAList();

function AddNoteToList() {
  var list = new List()
  list.AddNoteToList("Lea's note");
  assert.isTrue(list.notes.length === 1, "A note was added to the list")

};

 AddNoteToList();

function getNotes() {
  var list = new List()
  list.AddNoteToList("Lea's note");
  list.AddNoteToList("Tom's note");
  assert.isTrue(list.getNotes().toString() === ["Lea's note", "Tom's note"].toString(), "Return all the notes from the list")
};

getNotes();
