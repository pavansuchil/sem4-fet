function editRole() {
   
    alert("You are about to change your role!");

   
    let newRole = prompt("Enter your new role:");

    
    if (newRole !== null && newRole.trim() !== "") {
        document.getElementById("role").innerText = newRole;
        alert("Role updated successfully!");
    } else {
        alert("No changes made.");
    }
}
