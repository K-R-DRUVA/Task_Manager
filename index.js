const path = require('path');
const express = require('express');
const fs = require("node:fs");
const app = express();

// ____                              
// |  _ \ __ _ _ __ ___  ___ _ __ ___ 
// | |_) / _` | '__/ __|/ _ \ '__/ __|
// |  __/ (_| | |  \__ \  __/ |  \__ \
// |_|   \__,_|_|  |___/\___|_|  |___/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//the following line tells us that the all the Static Files are found on this path
app.use(express.static(path.join(__dirname, 'public')))
//the down lines are just to check the actual path of the public file location
// console.log(path.join(__dirname, '/public'));
// console.log(__filename);

//Setting Up EJS
app.set('view engine', 'ejs');
//After setting this up you can create a folder named Views and once you do that  you can directly render pages instead of res.send etc

// Array to store tasks (temporary solution - replace with database later)
let tasks = [];

// GET route for the home page
app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

// POST route for creating tasks
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    
    // Create new task object
    const newTask = {
        title: title || 'Untitled Task',
        description: description || 'No description provided'
    };
    
    // Add to tasks array
    tasks.push(newTask);
    
    // Redirect back to home page
    res.redirect('/');
});

function toCamelCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// POST route for creating tasks
app.post("/tasks", async (req, res) => {
    try {
        const { title, description } = req.body;
        const filename = `${toCamelCase(title)}.txt`;
        
        fs.writeFile(`./files/${filename}`, description, function(err) {
            if (err) {
                console.error('Error creating task:', err);
                return res.redirect('/?error=failed-to-create-task');
            }
            res.redirect("/");
        });
    } catch (error) {
        console.error('Error creating task:', error);
        res.redirect('/?error=failed-to-create-task');
    }
});


// app.get('/profile/yuchen', function(req, res) {
//     res.send("its a Page For her")
// });
// the above part is  a simple static route but now we have to create a dynamic route for the same now to do this
// make the dynamic part a variable to do this we have to apply a colon[:]infront of the dynamic path see the next path as a example
app.get('/profile/:username/:age', function (req, res) {
    res.send(`Welcome ${req.params.username} You are ${req.params.age}`)
}); //there can be only one of the res.send()
app.listen(3000, function () {
    console.log("Its Running")
});

//  ___                   ____       _       _   
// |_ _|_ __ ___  _ __   |  _ \ ___ / |_ __ | |_ 
//  | || '_ ` _ \| '_ \  | |_) / _ \| | '_ \| __|
//  | || | | | | | |_) | |  __/ (_) | | | | | |_ 
// |___|_| |_| |_| .__/  |_|   \___/|_|_| |_|\__|
//   |_|
// app.use(express.static(path.join(__dirname,'public')))
// onvce this is written we have to make sure that while we are referencing all the file like css .js files etc from the .ejx file the public part in the path should not be mentioned otherwise we will face a slight problem
