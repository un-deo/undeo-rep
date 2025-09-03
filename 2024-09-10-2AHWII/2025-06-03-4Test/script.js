let tasks = {};
let tasktitle;
let movetask;

//localestorage beim schließen und entladen der Seite speichern
window.onclose = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
window.onunload = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//aus localStorage die daten herausnehemen und die aufgaben wieder in die Listen einfügen.
//wenn schon fertig dann auch wieder durchstreichen
window.onload = function () {
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let task in tasks) {
      let taskHTML = `<li id="${task}">${task}`;
      if (tasks[task] === true) {
        taskHTML += ` <button id="btn${task}" onclick="deleteTask('${task}')">delete</button>`;
      } else {
        taskHTML += ` <button id="btn${task}" onclick="completeTask('${task}')">completed</button>`;
      }
      taskHTML += `</li>`;

      if (tasks[task] === true) {
        document.getElementById("completed").innerHTML += taskHTML;
      } else {
        document.getElementById("taskList").innerHTML += taskHTML;
      }
      if (tasks[task] === true) {
        document.getElementById(task).style.textDecoration = "line-through";
      }
    }
  }
};

//hinzugügen von einer Neuen aufgabe
function addTask() {
  tasktitle = document.getElementById("textInput").value;
  //kontrolle ob sowieso etwas eingegeben wurde
  if (tasktitle == "") {
    alert("please input valid Task Name");
  } else if (tasks[tasktitle] != undefined) {
    alert("this task already exists");
  } else {
    //hinzufügen ins JSON und auf der website(false ist der status der aufgabe)
    tasks[tasktitle] = false;
    document.getElementById("textInput").value = "";
    document.getElementById(
      "taskList"
    ).innerHTML += `<li id="${tasktitle}">${tasktitle} <button id="btn${tasktitle}" onclick="completeTask('${tasktitle}')">completed</button></li>`;
  }
}

//markieren als fertig (durchstreichen)
//übertragen auf die Liste mit erfüllten aufgaben
function completeTask(value) {
  tasktitle = value;
  document.getElementById(value).style.textDecoration = "line-through";
  document.getElementById(`btn${value}`).remove();
  document.getElementById(value).innerHTML += `
    <button id="btn${tasktitle}" onclick="deleteTask('${tasktitle}')">
      delete
    </button>`;
  tasks[tasktitle] = true;
  movetask = document.getElementById(value);
  document.getElementById(value).remove();
  document.getElementById("completed").appendChild(movetask);
}

//löschen der angeclickten aufgabe
function deleteTask(param) {
  document.getElementById(param).remove();
  delete tasks[param];
}
