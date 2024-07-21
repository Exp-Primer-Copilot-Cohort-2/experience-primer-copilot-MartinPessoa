function skillsMembers() {
    // Get the element with id="skillsMembers"
    var element = document.getElementById("skillsMembers");
    // If the element has the class "skillsMembers", remove it.
    if (element.classList) {
        element.classList.toggle("skillsMembers");
    } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf("skillsMembers");
        if (i >= 0) {
            classes.splice(i, 1);
        } else {
            classes.push("skillsMembers");
            element.className = classes.join(" ");
        }
    }
}