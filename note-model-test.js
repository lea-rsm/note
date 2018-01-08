function checkTextFormat(){
  var note = new Note("My favourite language is Ruby");

  assert.isTrue(note.text === "My favourite language is Ruby", "When initialized the note is in text format");
  };

  checkTextFormat();
