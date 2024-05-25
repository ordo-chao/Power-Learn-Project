import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js';

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getFirestore, collection, addDoc , rmDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBw6_mpKS6XifsZF4P8MP0bgRU1QQq9I9o",
  authDomain: "task-manager-8324e.firebaseapp.com",
  projectId: "task-manager-8324e",
  storageBucket: "task-manager-8324e.appspot.com",
  messagingSenderId: "779798919537",
  appId: "1:779798919537:web:63bcae04d88e186c6f1ed0",
  measurementId: "G-ZMS3MS30QN"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

let task_array = [];

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
  let task = document.createElement("li");
  let completion = document.createElement("li")
  let complete_button = document.createElement("button")
  let remove_button = document.createElement("button");
  //addition of element contents
  complete_button.textContent = "✔";
  remove_button.textContent = "✗";
  task.textContent = text.value + ":" + task_date.value;
  completion.textContent = text.value;

  let fireinput = text.value;


  //identification of elements
  complete_button.id = "complete_button";
  remove_button.id = "remove_button";

  //Addition to the database
  addDoc(collection(db, "pendingTasks"), {
    task: fireinput,
    timestamp: serverTimestamp()
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
  alert("Task is added");

  complete_button.onclick =() =>
  {
    task.textContent = text.value + ":" + Date();
    completion_div.appendChild(task);
    completion_div.appendChild(complete_button);
    completion_div.appendChild(remove_button);

    addDoc(collection(db, "completedTasks"), {
      task: text.value,
      timestamp: serverTimestamp()
    }).then(function(docRef) {
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
    alert("Task is added");

    rmDoc(collection(db, "pendingTasks"), {
      task: fireinput,
      timestamp: serverTimestamp()
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
    alert("Task is added");
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




