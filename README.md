# Task_Manager
Self hosting Backend Website[Task Manager]

## 📝 Description

Task Manager is a modern web application designed to help users organize and manage their tasks efficiently. Built with a sleek, dark-themed interface and engaging animations, it provides a seamless and intuitive user experience for creating and tracking tasks.

### 🎯 Purpose
The application serves as a digital solution for:
- Organizing daily tasks and responsibilities
- Keeping track of important projects
- Managing personal and professional to-do lists
- Maintaining a clear overview of pending tasks

### ✨ Key Features

#### 1. User Interface
- Modern dark theme for reduced eye strain
- Animated components for enhanced user engagement
- Responsive design that works on all devices
- Smooth transitions and interactive elements

#### 2. Task Management
- Simple task creation with title and description
- Clean task display in an organized grid layout
- Easy-to-use form with animated input fields
- Real-time visual feedback on user interactions

#### 3. Design Elements
- Gradient animations on important elements
- Floating labels for improved form usability
- Interactive hover effects
- Professional typography and spacing

#### 4. User Experience
- Intuitive navigation
- Clear visual hierarchy
- Immediate feedback on actions
- Smooth animations for better engagement

### 💡 Unique Selling Points
1. **Simplicity**: Clean, distraction-free interface
2. **Visual Appeal**: Modern design with thoughtful animations
3. **Accessibility**: Easy to use across all devices
4. **Performance**: Lightweight and fast loading
5. **User-Centric**: Designed with user experience in mind

### 🎨 Design Philosophy
The application follows a minimalist approach while maintaining visual interest through:
- Carefully chosen color schemes
- Strategic use of animations
- Balanced white space
- Consistent visual language

### 🔄 Workflow
1. User visits the application
2. Creates new tasks using the animated form
3. Views tasks in the organized grid layout
4. Manages tasks as needed

### 🎯 Target Users
- Professionals managing daily tasks
- Students organizing assignments
- Anyone seeking a simple task management solution
- Users who appreciate modern design aesthetics

### 🌟 Benefits
- **Increased Productivity**: Easy task organization
- **Better Overview**: Clear task visualization
- **Reduced Stress**: Organized task management
- **Enhanced Focus**: Clean, distraction-free interface
- **Improved Efficiency**: Quick task creation and management

### 🔮 Future Scope
The application is designed to be extensible with planned features including:
- User authentication
- Task categories and tags
- Priority levels
- Due dates and reminders
- Collaboration features
- Data export capabilities

### 💻 Technical Implementation
Built using modern web technologies:
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express
- **Template Engine**: EJS
- **Styling**: Custom CSS with animations
- **Server**: Express.js server

This Task Manager combines functionality with aesthetic appeal, creating an efficient and enjoyable task management experience for users who appreciate both form and function.

## 🚀 Getting Started

### Prerequisites
Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Step-by-Step Setup Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install:
   - express
   - ejs
   - body-parser
   - other required packages

3. **Environment Setup**
   ```bash
   # Create a .env file in the root directory
   touch .env

   # Add the following configurations
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the Application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

5. **Access the Application**
   - Open your browser
   - Visit `http://localhost:3000`
   - You should see the Task Manager interface

### Project Structure

### Development Guidelines

1. **Making Changes**
   - CSS styles are in `public/stylesheets/styles.css`
   - Main template is in `views/index.ejs`
   - Server logic is in `index.js`

2. **Adding New Features**
   - Create a new branch for each feature
   - Follow the existing code style
   - Test thoroughly before committing

3. **Running Tests**
   ```bash
   npm test
   ```

### Troubleshooting Common Issues

1. **Port Already in Use**
   ```bash
   # Kill the process using the port
   lsof -i :3000
   kill -9 PID
   ```

2. **Node Modules Issues**
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

3. **Database Connection** (for future implementation)
   - Check your database credentials
   - Ensure database service is running
   - Verify network connectivity

### Development Mode Features
- Live reload enabled
- Detailed error messages
- Debug logging
- Performance monitoring

### Production Deployment
1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Environment Variables**
   - Set `NODE_ENV=production`
   - Configure proper port settings
   - Set up security parameters

3. **Deployment Platforms**
   - Heroku: Ready to deploy
   - Vercel: Supported
   - AWS: Compatible
   - Docker: Dockerfile provided

### Support and Updates
- Check for updates regularly: `npm update`
- Report issues on GitHub
- Join our community discussions
- Follow the project's social media

This getting started guide should help new developers:
1. Set up the project quickly
2. Understand the project structure
3. Start development immediately
4. Troubleshoot common issues
5. Deploy to production effectively

This Task Manager combines functionality with aesthetic appeal, creating an efficient and enjoyable task management experience for users who appreciate both form and function.

## 🚀 Getting Started

### Prerequisites
Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Step-by-Step Setup Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install:
   - express
   - ejs
   - body-parser
   - other required packages

3. **Environment Setup**
   ```bash
   # Create a .env file in the root directory
   touch .env

   # Add the following configurations
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the Application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

5. **Access the Application**
   - Open your browser
   - Visit `http://localhost:3000`
   - You should see the Task Manager interface

### Project Structure
