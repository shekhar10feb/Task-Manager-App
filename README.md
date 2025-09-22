# Task Manager App Documentation

## Overview
A simple, themeable task management application built with React and Tailwind CSS.  
Users can register, manage tasks by category, and switch between light and dark themes.

## Screenshot
- **Picture 1**
![Task Manager Page in Dark mode and also in desktop mode](images/1.png)

- **Picture 2**
![Task Manager Page in light mode and also in desktop mode](images/2.png)

- **Picture 3**
![Task Manager Page in light mode and also in mobile screen resolution showing reponsiveness](images/3.png)

- **Picture 4**
![Registration Page](images/4.png)

## Features
- **User Registration:**  
  Users can register with a name and email to access the dashboard.

- **Task Management:**  
  - Add, view, and toggle completion of tasks.
  - Tasks can be filtered by category (Work, Personal, Study).

- **Notes Panel:**  
  A separate panel for notes, visible on larger screens.

- **Responsive Design:**  
  - Mobile: Task list and notes stack vertically.
  - Desktop: Task list and notes are side-by-side using a grid layout.

- **Theme Switching:**  
  Toggle between light and dark modes using the header button.

## Folder Structure

```
src/
│
├── components/
│   ├── AddTaskForm.jsx
│   ├── Header.jsx
│   ├── NotesPanel.jsx
│   ├── Register.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
│
├── context/
│   └── UserContext.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Customization
You can modify the styling by editing Tailwind classes.
Add more features (e.g., delete tasks) by extending the logic.

## Deployment
- Connected this GitHub account to Netlify account and deployed it.

## Key Files

### `App.jsx`
- Root component.
- Applies theme styles.
- Renders `Header` and either `Register` or `Dashboard` based on user state.

### `UserContext.jsx`
- Provides global state for user, login status, email, and theme.
- Exposes functions to toggle login and theme.

### `Register.jsx`
- Registration form for new users.
- Fills the viewport and adapts to the current theme.

### `Dashboard.jsx`
- Main dashboard after login.
- Uses a responsive grid to display `TaskList` and `NotesPanel`.

### `TaskList.jsx`
- Displays and manages tasks.
- Supports adding, filtering, and toggling tasks.
- Renders a list of `TaskItem` components.

### `TaskItem.jsx`
- Represents a single task item.
- Handles displaying task details and toggling completion state.

### `AddTaskForm.jsx`
- Form for adding new tasks.
- Category selection adapts to theme using custom CSS.

### `Header.jsx`
- Displays app title, user greeting, logout, and theme toggle button.

## Theming
- Theme is managed via React context (`UserContext`).
- The background and text colors adapt based on the selected theme.
- Theme toggle is available in the header.

## Technologies Used
- React
- Tailwind CSS
- JavaScript (ES6+)

## Responsive Design
- Uses Tailwind CSS grid utilities.
- On mobile (`sm` and below): Task list and notes stack vertically.
- On desktop (`md` and above): Task list and notes are side-by-side.

## Custom Styling for `<option>` Elements
- `<option>` elements in `<select>` cannot be styled directly with Tailwind classes.
- Custom CSS classes are used to style options based on the theme.

## Usage
1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the app:**
   ```
   npm run dev
   ```

3. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 5. **Set Up Auto-Deploy**
Every time, you changes and commited, you push to GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
# Netlify automatically rebuilds and deploys! 🎉
```

## 🚀 Live Demo
**[View Live App](https://thetaskmanagerr.netlify.app/)**

## License
This project is for educational purposes. You may use and modify it as needed.
