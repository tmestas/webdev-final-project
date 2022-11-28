let form = document.querySelector("form");
form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  var name = undefined;
  var email = undefined;
  var message = undefined;

  if (document.getElementById("name").value.length == 0) {
    name = "No submission";
  } else {
    name = document.getElementById("name").value;
  }

  if (document.getElementById("email").value.length == 0) {
    email = "No submission";
  } else {
    email = document.getElementById("email").value;
  }

  if (document.getElementById("message").value.length == 0) {
    message = "No submission";
  } else {
    message = document.getElementById("message").value;
  }

  if (
    name.localeCompare("No submission") == 0 &&
    email.localeCompare("No submission") == 0 &&
    message.localeCompare("No submission") == 0
  ) {
    console.warn("You must enter data in a fields to submit this form");
  }

  console.log("======== Form Submission ========");
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
}
