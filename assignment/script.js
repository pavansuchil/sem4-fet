window.onload = function () {
    alert("welcome to kishan's portfolio!");
};

document.getElementById("welcomeBtn").addEventListener(
    "click",
    function () {
        alert("Thanks for visiting my portfolio!");
    }
);

document.getElementById("a1").addEventListener(
    "click",
    function () {
        this.style.color = "darkgreen";
    }
);

function editRole() {
    let newRole = prompt("enter your new role:");

    if (newRole && newRole.trim() != "") {
        document.querySelector("h1").innerText = newRole;
    } else {
        alert("please enter a valid role!");
    }
}
