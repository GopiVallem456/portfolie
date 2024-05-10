
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    const clickedTab = event.currentTarget;
    for (const link of tablinks) {
        link.classList.remove("active-link");
    }
    for (const content of tabcontent) {
        content.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}


