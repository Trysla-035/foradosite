function selected(button) {
    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
}