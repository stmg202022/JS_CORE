//data get from local storage
function getFromLoalstorage() {
  let toDoListsData = JSON.parse(localStorage.getItem("toDoLists")) || [];
  console.log(toDoListsData.length);
  return toDoListsData;
}

//data set to the local storage
function storeOnLocalStorage(toDoLists) {
  localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  return true;
}

//check lists empty or not
function checkEmptyData({ toDoListsData }) {
  if (toDoListsData.length === 0) {
    console.log("empty lists");
    return true;
  }

  console.log("No empty lists");
  return false;
}

//Result
let todoResultFun = ({
  toDoListsData,
  circle__total__lists,
  circle__completed__lists,
  circle__unCompleted__lists,
  todoResultUi,
}) => {
  if (toDoListsData) {
    todoResultUi.style.display = "flex";
    const totalLists = toDoListsData.length;

    const numOfUncompleted = toDoListsData.filter(
      (todo) => todo.complete === false
    ).length;

    const numOfCompleted = toDoListsData.filter(
      (todo) => todo.complete === true
    ).length;

    circle__total__lists.innerHTML = totalLists;
    circle__completed__lists.innerHTML = numOfCompleted;
    circle__unCompleted__lists.innerHTML = numOfUncompleted;

    return { totalLists, numOfCompleted, numOfUncompleted };
  }

  todoResultUi.style.display = "none";

  alert("Empty Lists Array...");
  return false;
};

// const removeOldResultUi = (
//   toDoListsData,
//   circle__total__lists,
//   circle__completed__lists,
//   circle__unCompleted__lists,
//   todoResultUi
// ) => {};

//after check Empty show lists of todo
function returnLi(todo, indx) {
  let li = document.createElement("li");
  li.setAttribute("id", `${indx}`);
  li.setAttribute("value", `${todo.todoName}`);
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("list__content");
  let h2 = document.createElement("h2");
  h2.classList.add("todo__title");
  let p2 = document.createElement("p");
  let todoNode = document.createTextNode(`Todo: ${todo.todoName}`);
  let todoDate = document.createTextNode(`Date: ${todo.submitDate}`);
  let buttondiv = document.createElement("div");
  buttondiv.classList.add("btn__div");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "DELETE";
  deleteBtn.classList.add("btn__danger");
  let completeBtn = document.createElement("button");
  completeBtn.innerHTML = "COMPLETE";
  completeBtn.classList.add("btn__complete");

  h2.appendChild(todoNode);
  contentDiv.appendChild(h2);
  p2.appendChild(todoDate);
  contentDiv.appendChild(p2);
  buttondiv.appendChild(completeBtn);
  buttondiv.appendChild(deleteBtn);
  li.appendChild(contentDiv);
  li.appendChild(buttondiv);
  todoList_lists.appendChild(li);
  return li;
}

const removeOldListsUi = (toDoListsData) => {
  console.log("", toDoListsData);

  toDoListsData.forEach((lst, idx) => {
    console.log(idx);
    let text = idx.toString();
    console.log(typeof text);
    const li = document.getElementById(text);
    li.remove();
  });
  // li.remove();
  return true;
};

const displayNewListsUi = (card, noToDo, todoListsUi, toDoListsData) => {
  console.log("display new ui now..........to", toDoListsData);
  noToDo.style.display = "none";
  card.appendChild(todoListsUi);
  todoListsUi.style.display = "flex";

  console.log(noToDo, todoListsUi);
  toDoListsData.forEach((todo, indx) => {
    const list = returnLi(todo, indx);
  });
};

//addListForm
const addList = ({
  card,
  inputForm,
  toDoInput,
  noToDo,
  todoListsUi,
  todoResultUi,
}) => {
  console.log("first addList reload success ================");
  let inputList = "";
  let list;

  toDoInput.addEventListener("change", async (e) => {
    inputList = e.target.value;
    // console.log(inputList);
  });

  inputForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    toDoListsData = getFromLoalstorage();
    console.log("old ToDoLists are: ==========", toDoListsData);

    if (toDoListsData) {
      //   console.log(toDoListsData);
      if (inputList.trim() === "") {
        alert("Add to do...");
      } else {
        // check todo exist or not

        list = {
          id: toDoListsData.length,
          todoName: inputList,
          submitDate: new String(new Date()),
          complete: false,
        };

        console.log(list);

        console.log("isRemoved", removeOldListsUi(toDoListsData));

        toDoListsData = [...toDoListsData, list];
        let isSave = storeOnLocalStorage(toDoListsData);

        if (isSave) {
          toDoListsData = getFromLoalstorage();
          console.log("new ToDoLists are: =======", toDoListsData);

          displayNewListsUi(card, noToDo, todoListsUi, toDoListsData);

          todoResultFun({ toDoListsData, todoResultUi });
          // ============================================================================================================================
        }

        toDoInput.value = "";
        inputList = "";

        //create a UI for new
        // noToDo.style.display = "none";
        // todoListsUi.style.display = "flex";
        // returnLi(list, list.id);
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("first DOM reload success ================");
  const card = document.getElementById("card");
  const noToDo = document.getElementById("no__to__do");
  const todoListsUi = document.getElementById("todoLists");
  const todoResultUi = document.getElementById("todo__result");
  const circle__total__lists = document.getElementById("circle__total__lists");
  const circle__completed__lists = document.getElementById(
    "circle__completed__lists"
  );
  const circle__unCompleted__lists = document.getElementById(
    "circle__unCompleted__lists"
  );
  const todoList_lists = document.getElementById("todoList_lists");

  const inputForm = document.getElementById("inputForm");
  const toDoInput = document.getElementById("toDoInput");
  const searchInput = document.getElementById("search");

  const notFound = document.getElementById("notFound");
  let lists_items = document.querySelectorAll("li");

  //   at first reload
  //    * get data
  let toDoListsData = getFromLoalstorage();
  console.log(toDoListsData);

  //    * check empty list or not
  let isEmptyData = checkEmptyData({ toDoListsData });
  console.log("empty list", isEmptyData);

  if (isEmptyData) {
    noToDo.style.display = "flex";
    todoListsUi.style.display = "none";
  } else {
    //

    //result called
    todoResultFun({
      toDoListsData,
      circle__total__lists,
      circle__completed__lists,
      circle__unCompleted__lists,
      todoResultUi,
    });

    //create list for each data
    noToDo.style.display = "none";
    todoListsUi.style.display = "flex";
    toDoListsData.forEach((todo, indx) => {
      const list = returnLi(todo, indx);
    });

    // displayUi(noToDo, todoListsUi, toDoListsData);
  }

  let isAdded = addList({
    card,
    inputForm,
    toDoInput,
    noToDo,
    todoListsUi,
    todoResultUi,
  });

  //=======================================================================
  // let inputList = "";
  // let list;

  // toDoInput.addEventListener("change", async (e) => {
  //   inputList = e.target.value;
  //   // console.log(inputList);
  // });

  // inputForm.addEventListener("submit", async (e) => {
  //   e.preventDefault();
  //   if (inputList.trim() === "") {
  //     alert("Add to do...");
  //   } else {
  //     // check todo exist or not

  //     list = {
  //       id: toDoListsData.length,
  //       todoName: inputList,
  //       submitDate: new String(new Date()),
  //       complete: false,
  //     };

  //     console.log(list);
  //     toDoListsData = [...toDoListsData, list];
  //     let isSave = storeOnLocalStorage(toDoListsData);

  //     if (isSave) {
  //       toDoListsData = getFromLoalstorage();
  //       console.log("new ToDoLists are: =======", toDoListsData);
  //     }

  //     //create a UI for new
  //     noToDo.style.display = "none";
  //     todoListsUi.style.display = "flex";
  //     returnLi(list, list.id);

  //     toDoInput.value = "";
  //     inputList = "";
  //   }
  // });
});
