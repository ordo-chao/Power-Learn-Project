task_array = [];

let text = document.getElementById("text_input");

let task_div = document.getElementById("tasks_inner_div");

let completion_div = document.getElementById("completed_inner_div");

let submit = document.getElementById("submit_button");

let clear_tasks = document.getElementById("tasks_clear_button");

let clear_completed_tasks = document.getElementById("completed_tasks_clear_button");

let task_date = document.getElementById("date_time");


submit.onclick =() =>
{
  
  console.log(text.value);
  task_array.push(text.value);
  console.log(task_array[0]);

  //Creation of elements
  task = document.createElement("li");
  completion = document.createElement("li")
  complete_button = document.createElement("button")
  remove_button = document.createElement("button");
  //addition of element contents
  complete_button.textContent = "✔";
  remove_button.textContent = "✗";
  task.textContent = text.value + ":" + task_date.value;
  completion.textContent = text.value;


  //identification of elements
  complete_button.id = "complete_button";
  remove_button.id = "remove_button";

  complete_button.onclick =() =>
  {
    task.textContent = text.value + ":" + Date();
    completion_div.appendChild(task);
    completion_div.appendChild(complete_button);
    completion_div.appendChild(remove_button);
  }

  task_div.appendChild(task);
  task_div.appendChild(complete_button);
  task_div.appendChild(remove_button);
}

clear_tasks.onclick = ()=>
{
  task_div.replaceChildren(task);
  task_div.removeChild(task);
}

clear_completed_tasks.onclick = ()=>
{
  completion_div.replaceChildren(task);
  completion_div.removeChild(task);

}




