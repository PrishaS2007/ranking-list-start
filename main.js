// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Ranking List Array
let rankList = ["Pizza", "Pasta", "Salad", "Soup"];
drawRankList();

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  } else if (selection == "empty") {
    empty();
  }

  // Redraw rankList after changes have been made
  drawRankList();
}

// FUNCTIONS TO DEFINE
function drawRankList() {
  let listAmount = 0;
  let htmlStr = "";
  for (let list of rankList) {
    listAmount++;
    htmlStr += `<p>${listAmount}: ${list}</p>`;
  }
  document.getElementById("output").innerHTML = htmlStr;
  console.log("Draw rankList");
}

function addItem() {
  let itemPrompt = prompt("Enter an item.");
  document.getElementById("output").innerHTML = rankList.push(itemPrompt);
  console.log("Add Item");
}

function removeLast() {
  document.getElementById("output").innerHTML = rankList.pop();
  console.log("Remove Last");
}

function insert() {
  let positionPrompt = +prompt("Insert Position:");
  let insertPrompt = prompt("Item to insert:");
  for (let i = 0; i < rankList.length; i++) {
    rankList.push(insertPrompt[i]);
  }
  console.log("Insert");
}

function removePos() {
  let removePrompt = +prompt("Position to remove:");
  console.log("Remove at Position");
}

function move() {
  let fromPrompt = +prompt("Move item from:");
  let toPrompt = +prompt("Move item to:");
  console.log("Move");
}

function edit() {
  let positionPrompt = +prompt("Enter position");
  let replacePrompt = prompt("Replace with:");
  for (let i = 0; i < rankList.length; i++) {
    rankList.splice(positionPrompt, 1, replacePrompt);
  }
  console.log("Edit");
}

function empty() {
  let emptyArray = [""];
  console.log("Empty");
}
