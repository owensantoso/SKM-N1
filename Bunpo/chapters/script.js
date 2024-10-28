function openGrammar(evt, grammarName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Remove "active" class from chapter dropdown if open
    var dropbtn = document.getElementsByClassName("dropbtn");
    for (i = 0; i < dropbtn.length; i++) {
        dropbtn[i].classList.remove("active");
    }

    // Show the current tab
    document.getElementById(grammarName).style.display = "block";

    // Add "active" class to the current button if it's a tab, or to the chapter title if it's the Overview
    if (grammarName === 'Overview') {
        var chapterTitle = document.getElementById("chapterTitle");
        chapterTitle.classList.add("active");
    } else {
        var clickedButton = evt ? evt.currentTarget : null;
        if (clickedButton) {
            clickedButton.classList.add("active");
        }
    }

    // Scroll to top of content
    window.scrollTo(0, 0);
}

// Make the chapter title clickable to open the Overview
document.getElementById("chapterTitle").addEventListener("click", function(event) {
    openGrammar(event, 'Overview');
});

// Get the element with class="current" in dropdown and highlight it
window.onload = function() {
    // By default, open the Overview
    openGrammar(null, 'Overview');

    // Highlight the current chapter in the dropdown
    var currentChapter = document.querySelector('.dropdown-content a.current');
    if (currentChapter) {
        currentChapter.style.backgroundColor = '#1e4f7a';
        currentChapter.style.color = '#fff';
    }
};
