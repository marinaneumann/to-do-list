$(document).ready(function() {
  var currentList;
  var inputtedTaskName;
  var newTask;

  $("form#createList").submit(function() {
    event.preventDefault();
    var inputtedListName = $("input#new-list-name").val();
    var newList = { listName: inputtedListName, tasksArray: [] };
    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");
    $(".list").last().click(function() {
      $("#list-title h2").text(newList.listName);
      currentList = newList;
      $("ul#tasks").empty();
      currentList.tasksArray.forEach(function(task) {
        alert(task.taskName);
        $("#list-title ul").append("<li>" + task.taskName + "</li>");
        });//closes forEach
      $("#tasks ul").append("<li>" + currentList.newTask + "</li>");
      console.log(currentList);
    });//closes click function for .list
      $("input#new-list-name").val("");
  }); //closes #formcreatList

  $("form#addTask").submit(function() {
    event.preventDefault();
      inputtedTaskName = $("input#new-task-name").val();
      newTask = { taskName :inputtedTaskName };
      currentList.tasksArray.push(newTask);
    $("#list-title ul").empty();//empty all tasks
      currentList.tasksArray.forEach(function(task) {
        $("#list-title ul").append("<li>" + task.taskName  + "</li>");
        console.log(currentList.tasksArray);
        $("input#new-task-name").val("");
        }); //closes forEach function
  }); // closes form#addTask
}); //closes document
