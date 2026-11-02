function validateForm() {
 let name = document.getElementById("name").value.trim();
 let email = document.getElementById("email").value.trim();
 let course = document.getElementById("course").value;
 if (name === "" || email === "" || course === "") {
 alert("Please fill in all fields.");
 return false;
 }
 if (!email.includes("@") || !email.includes(".")) {
 alert("Please enter a valid email address.");
 return false;
 }
 return true;
}
function confirmDelete() {
 return confirm("Are you sure you want to delete this student?");
}
