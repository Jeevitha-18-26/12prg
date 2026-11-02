
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value.trim();

    if (name === "" || email === "" || course === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Confirm before deleting a student
function confirmDelete() {
    return confirm("Are you sure you want to delete this student?");
}

