// ========== Feature 1: Heading Color ==========

// STEP 1: Select the heading
const heading = document.querySelector("#heading");

// STEP 2: Create a function that adds the blue-text class
const changeFontColor = () => {
    heading.classList.add("blue-text");
};

// STEP 3: Listen for a click on the heading
heading.addEventListener("click", changeFontColor);

// ========== Feature 2: Subtitle Color ==========

const subtitle = document.querySelector("#____");  // fill in the ID

const changeSubtitleColor = () => {
    subtitle.classList.add("blue-text");
};

subtitle.addEventListener("click", changeSubtitleColor);
``

// ========== Feature 3: Toggle Read/Unread ==========

const toggleReadUnread = () => {
    const inbox = document.querySelector("#inbox");
    inbox.classList.toggle("is-read");
};  