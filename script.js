// 1. Find the elements in our HTML using their IDs
const entryInput = document.getElementById('entry-input');
const saveBtn = document.getElementById('save-btn');
const entryDisplay = document.getElementById('entry-display');

// 2. This function runs when you click "Save"
saveBtn.addEventListener('click', function() {
    const textValue = entryInput.value;

    if (textValue === "") {
        alert("Please write something first!");
        return;
    }

    // Save it to the browser's "Local Storage" (Memory)
    localStorage.setItem('savedDiaryEntry', textValue);

    // Update the display on the right page immediately
    displayEntry(textValue);
    
    // Clear the input box so you can write something new
    entryInput.value = "";
});

// 3. This function puts the text onto the right-side page
function displayEntry(text) {
    entryDisplay.innerHTML = `<p>${text}</p>`;
}

// 4. When the page first loads, check if there is a saved entry
window.onload = function() {
    const data = localStorage.getItem('savedDiaryEntry');
    if (data) {
        displayEntry(data);
    }
};

