window.onload = function(){
  console.log(document.getElementById('app'));
  list = new List;
  list.AddNoteToList("Appear to the screen please");
  list.AddNoteToList("Appearrrrrr");
  list.AddNoteToList("Appear to the screen ddddd");
  list.AddNoteToList("Appear to the screen ddddd");
  list.AddNoteToList("Appear  ddddd");
  list.AddNoteToList("Appear to f screen ddddd");
  printer = new NoteViewer(list);
  printer.viewNotes();
}
