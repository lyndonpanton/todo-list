document.addEventListener("DOMContentLoaded", function(e) {
   let todoCheckboxes = document.getElementsByClassName("todo-list-checkbox");

   for (let i = 0; i < todoCheckboxes.length; i++) {
       todoCheckboxes[i].addEventListener("click", checkTodo);
   }

   function checkTodo(event) {
       event.target.parentElement.classList.toggle("todo-list-item-complete");
   }
});
