let likes = 0;
let dislikes = 0;
let comments = [];

// Cookies functions
function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [key, value] = c.split("=");
        if (key === name) return value;
    }
    return null;
}

// Load data on start
window.onload = function () {
    let savedLike = getCookie("like");
    let savedDislike = getCookie("dislike");
    let savedComments = getCookie("comments");

    if (savedLike) likes = parseInt(savedLike);
    if (savedDislike) dislikes = parseInt(savedDislike);

    if (savedComments) {
        comments = JSON.parse(savedComments);
        displayComments();
    }

    updateUI();
};

// Update UI
function updateUI() {
    document.getElementById("likeCount").textContent = likes;
    document.getElementById("dislikeCount").textContent = dislikes;
}

// Like button
document.getElementById("likeBtn").onclick = () => {
    if (!getCookie("voted")) {
        likes++;
        setCookie("like", likes);
        setCookie("voted", "yes");
        updateUI();
    } else {
        alert("You already voted!");
    }
};

// Dislike button
document.getElementById("dislikeBtn").onclick = () => {
    if (!getCookie("voted")) {
        dislikes++;
        setCookie("dislike", dislikes);
        setCookie("voted", "yes");
        updateUI();
    } else {
        alert("You already voted!");
    }
};

// Submit comment
document.getElementById("submitBtn").onclick = () => {
    let text = document.getElementById("commentInput").value;

    if (text && !getCookie("commented")) {
        comments.push(text);
        setCookie("comments", JSON.stringify(comments));
        setCookie("commented", "yes");
        displayComments();
        document.getElementById("commentInput").value = "";
    } else {
        alert("You already commented or empty!");
    }
};

// Display comments
function displayComments() {
    let container = document.getElementById("comments");
    container.innerHTML = "";

    comments.forEach(c => {
        let p = document.createElement("p");
        p.textContent = c;
        container.appendChild(p);
    });
}

// Reset
document.getElementById("resetBtn").onclick = () => {
    document.cookie = "voted=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "commented=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "like=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "dislike=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "comments=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    likes = 0;
    dislikes = 0;
    comments = [];

    updateUI();
    displayComments();
};