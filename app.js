// Make sure you have these middleware configurations
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.json()); // For parsing JSON data

// Add the POST route for tasks
app.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        
        // Add your task creation logic here
        // For example, if you're using a database:
        // await Task.create({ title, description });
        
        // Redirect back to the main page after creating the task
        res.redirect('/');
    } catch (error) {
        console.error('Error creating task:', error);
        res.redirect('/?error=failed-to-create-task');
    }
}); 