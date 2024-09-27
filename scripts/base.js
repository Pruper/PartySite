function loadHeader() {
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            let script = document.createElement("script");
            script.src = "../scripts/membership.js";
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

function signupForm() {
    const signupForm = document.getElementById("signup-form");
    if (!signupForm) return;
    const signupContainer = document.getElementById("signup-container");
    const thankYouMessage = document.getElementById("thank-you-message");

    // check if user signed up
    if (localStorage.getItem("signedUp") === "true") {
        signupContainer.style.display = "none";
        thankYouMessage.style.display = "block";
    }

    // form submission
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const state = document.getElementById("state").value;
        const signupTime = Date.now();

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userState", state);
        localStorage.setItem("signedUp", "true");
        localStorage.setItem("signupTime", signupTime);

        signupContainer.style.display = "none";
        thankYouMessage.style.display = "block";

        updateMembershipData();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadHeader();
    loadFooter();
    signupForm();
});

function toggleContent(button) {
    const post = button.closest('.blog-post');
    const content = post.querySelector('.post-content');

    if (content) {
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            button.textContent = "Read More";
        } else {
            content.classList.add('expanded');
            button.textContent = "Read Less";
        }
    }
}