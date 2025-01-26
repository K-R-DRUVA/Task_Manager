// Add loading state when form is submitted
document.querySelector('form').addEventListener('submit', function(e) {
    const submitButton = this.querySelector('input[type="submit"]');
    
    // Only change the button state if it's not already in loading state
    if (!submitButton.disabled) {
        submitButton.value = 'Creating...';
        submitButton.disabled = true;
        
        // Reset the button after a timeout (in case of error)
        setTimeout(() => {
            submitButton.value = 'Create Task';
            submitButton.disabled = false;
        }, 3000);
    }
});

// Add animation class when new tasks are added
document.addEventListener('DOMContentLoaded', function() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.style.opacity = '0';
        setTimeout(() => {
            task.style.opacity = '1';
        }, 100);
    });
});