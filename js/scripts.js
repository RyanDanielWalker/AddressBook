// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function (id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}
// Business Logic for Destinations
function Destination(country, city, name, notes) {
  this.country = country;
  this.city = city;
  this.name = name;
  this.notes = notes;
}

// Business Logic for PlacesIHaveBeen
function PlacesIHaveBeen() {
  this.destinations = {}
  this.currentId = 0
}

PlacesIHaveBeen.prototype.assignId = function () {
  this.currentId += 1
  return this.currentId
}

PlacesIHaveBeen.prototype.addDestination = function (destination) {
  destination.id = this.assignId()
  this.destinations[destination.id] = destination
}

PlacesIHaveBeen.prototype.findDestination = function (id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  } else {
    return false;
  }
}

PlacesIHaveBeen.prototype.deleteDestination = function (id) {
  if (this.destinations[id] === undefined) {
    return false;
  } else {
    delete this.destinations[id];
    return true;
  }
}

// Business Logic for TaskList
function TaskList() {
  this.tasks = {}
  this.currentId = 0
}

TaskList.prototype.assignId = function () {
  this.currentId += 1
  return this.currentId
}

TaskList.prototype.addTask = function (task) {
  task.id = this.assignId()
  this.tasks[task.id] = task
}

TaskList.prototype.deleteTask = function (id) {
  if (this.tasks[id] === undefined) {
    return this.tasks[id]
  }
  delete this.tasks[id]
  return true
}


TaskList.prototype.viewTasks = function (indexID) {
  let newArray = []
  for (let i = 1; i <= indexID; i++) {
    let myString = masterList.tasks[i].task;
    newArray.push(myString + " ")
  }
  return newArray
}

// TaskList.prototype.taskName = function () {
//   return this.tasks.task;
// }

// Business Logic for Tasks
function Tasks(task) {
  this.task = task
}

let masterList = new TaskList();

$(document).ready(function () {
  $("#task").submit(function (event) {
    event.preventDefault()

    let newTask = $("#user-input").val()
    taskToAdd = new Tasks(newTask)
    masterList.addTask(taskToAdd)
    $("#list").empty();
    let myArray = masterList.viewTasks(masterList.currentId);
    myArray.forEach(element => {
      $("#list").append(`<p>${element}</p>`);
    });
  })
})


// let tasks = ["task 1", "task 2"]
// tasks.forEach(function (task) {
//   masterList.addTask(task)
// })