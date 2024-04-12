function login() {
  var usernameValue = document.getElementById("username").value;
  var passwordValue = document.getElementById("password").value;

  if (usernameValue.trim() === "" || passwordValue.trim() === "") {
    alert("Enter again");
  } else {
    window.location.href = "/templates/index.html";
    alert("Successfully login");
  }
}
function signup() {
  var signupUservalue = document.getElementById("signup-user").value;
  var signupEmailvalue = document.getElementById("signup-email").value;
  var signupPasswordvalue = document.getElementById("signup-password").value;

  if (
    signupUservalue.trim() === "" ||
    signupEmailvalue.trim() === "" ||
    signupPasswordvalue.trim() === ""
  ) {
    alert("Enter all required fields");
  } else {
    alert("Successfully registered");
  }
}

//for making background blur
document.addEventListener("DOMContentLoaded", function () {
  var loginContainer = document.querySelector(".container");
  var backgroundContainer = document.querySelector(".background-container");

  loginContainer.addEventListener("mouseover", function () {
    backgroundContainer.style.filter = "blur(2px)";
  });
  loginContainer.addEventListener("mouseout",function(){
    backgroundContainer.style.filter="none";
  })
});

//For toggling the page 
function toggleForm() {
  var loginForm = document.getElementById("login");
  var signupForm = document.getElementById("signup");

  if (signupForm.style.display !== "block") {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  }
}


const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL);


async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("EventsManagement");
    return db.collection("events");
}

async function ReadData()
{
    let data = await GetConnection();
    data = await data.find().toArray();
    console.log("Data from EventsManagement database is:");
    console.log(data);
}

async function DeleteData()
{
    let data = await GetConnection();
    let result = await data.deleteOne({"Name":"LSP"});
    if (result.acknowledged)
    {
        console.log("Data gets deleted successfully.");
    }
}


async function insertData()
{
    let data = await GetConnection();
    let result = await data.insertOne({"Name":"Aryan","Password":"aryan@123"});

    if (result.acknowledged)
    {
        console.log("Data inserted successfully");
    }
}


async function updateData()
{
    let data = await GetConnection();
    let result = await data.updateOne({"Name":"Adwait"},{$set :{"Password":"ad@123"}});

    if (result.acknowledged)
    {
        console.log("Data gets updated successfully");
    }
}


function main ()
{
    let ret;
    ret=GetConnection();
    console.log("Database Connected");
    ReadData();
    //DeleteData();
    //insertData();
    //updateData();
}

main()