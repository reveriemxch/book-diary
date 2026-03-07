const leaves = document.querySelectorAll('.leaf');

leaves.forEach((leaf, index) => {
    leaf.addEventListener('click', (e) => {
        // Don't flip if we are clicking inside the textarea
        if (e.target.tagName === 'TEXTAREA') return;

        leaf.classList.toggle('flipped');

        // Logic to make sure the pages layer correctly when flipped
        if (leaf.classList.contains('flipped')) {
            // Wait for the animation to finish then change z-index
            setTimeout(() => {
                leaf.style.zIndex = index;
            }, 500);
        } else {
            // When flipping back, restore higher z-index immediately
            leaf.style.zIndex = leaves.length - index;
        }
    });
});

// Simple reaction function
function addReaction(emoji) {
    const readerView = document.getElementById('reader-view');
    const span = document.createElement('span');
    span.innerText = emoji;
    readerView.appendChild(span);
}
