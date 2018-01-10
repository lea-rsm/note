window.onload = function(){
  function Controller(list = new List()) {
    this.list = list;
    this.list.AddNoteToList("Testing");
    this.printer = new NoteViewer(list);
  };

  Controller.prototype.printNotes = function(){
    this.printer.viewNotes();
  }

  controller = new Controller();
  controller.printNotes();
}
