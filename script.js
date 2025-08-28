 function liveclock()
{
    let time = new Date();

    let hour = time.getHours();
    let Minute = time.getMinutes();
    let period = time.getHours()>=12 ? 'PM' : 'AM';
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();


     if(hour>=12)
         {
             hour=hour-12;

             if(hour===0)hour=12;
         }
       hour=hour< 10? '0' +hour:hour;
       Minute=Minute< 10? '0' +Minute:Minute;   


    const monthName=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    document.querySelector('.hours').textContent=hour + ':';
    document.querySelector('.Minutes').textContent=Minute;
    document.querySelector('.period').textContent=period + '';
    document.querySelector('.days').textContent=dayName[day] + ',';
    document.querySelector('.date').textContent=date + ',';
    document.querySelector('.month').textContent=monthName[month];
    
    let currenthour = time.getHours();
    let Message = "";

    if (currenthour < 12)
    {
        Message = "Good Morning 🌅"
    }
    else if (currenthour < 18)
    {
        Message = "Good Afternoon⛅";
    }
    else {
        Message = "Good Night 🌙";
    }
    document.querySelector('.good-message').textContent=Message;
}
setInterval(liveclock, 1000);
liveclock();

// middle and last part js

    document.addEventListener("DOMContentLoaded", () => {
      const taskInput = document.querySelector(".task-input");
      const addBtn = document.querySelector(".addbtn");
      const taskContainer = document.querySelector(".yourtask-div");
      const allBtn = document.querySelector(".allbtn");
      const activeBtn = document.querySelector(".activebtn");
      const doneBtn = document.querySelector(".donebtn");
      const clrBtn = document.querySelector(".clrbtn");
      const countPara = document.querySelector(".count-div p");

      let tasks = [];
      let filter = "all";

      function addTasks() {
        let newTasks =
          filter === "active"
            ? tasks.filter(t => !t.completed)
            : filter === "done"
            ? tasks.filter(t => t.completed)
            : tasks;

        taskContainer.querySelectorAll(".task").forEach(t => t.remove());

        taskContainer.insertAdjacentHTML(
          "beforeend",
          newTasks
            .map(
              (task, index) => `
            <div class="task">
              <div class="task-left">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})">
                <span class="task-text" style="text-decoration:${task.completed ? "line-through" : "none"}">${task.text}</span>
              </div>
              <div class="task-right">
                <button class="editbtn" onclick="editTask(${index})">Edit</button>
                <button class="deletebtn" onclick="deleteTask(${index})">Delete</button>
              </div>
            </div>
          `
            )
            .join("")
        );

        countPara.textContent = `Total: ${tasks.length}. Completed: ${tasks.filter(t => t.completed).length}. Remaining: ${tasks.filter(t => !t.completed).length}`;
      }

      function addTask() {
        if (taskInput.value.trim() !== "") {
          tasks.push({ text: taskInput.value.trim(), completed: false });
          taskInput.value = "";
          addTasks();
        }
      }

      window.deleteTask = index => {
        tasks.splice(index, 1);
        addTasks();
      };

      window.editTask = index => {
        const newText = prompt("Edit task:", tasks[index].text);
        if (newText && newText.trim() !== "") {
          tasks[index].text = newText.trim();
          addTasks();
        }
      };

      window.toggleTask = index => {
        tasks[index].completed = !tasks[index].completed;
        addTasks();
      };

      addBtn.addEventListener("click", addTask);
      taskInput.addEventListener("keypress", e => e.key === "Enter" && addTask());

      clrBtn.addEventListener("click", () => {
        tasks = [];
        addTasks();
      });

      allBtn.addEventListener("click", () => { filter = "all"; addTasks(); });
      activeBtn.addEventListener("click", () => { filter = "active"; addTasks(); });
      doneBtn.addEventListener("click", () => { filter = "done"; addTasks(); });

     addTasks();



    });



