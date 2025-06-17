# TODO

## Description

A list of tasks for this project.

## Tasks

### MVP

- [ ] Template elements should be rendered using JavaScript
    - [x] Header
    - [ ] Footer
- [x] When updating data (e.g., todo, project), the state variables should
initially set to the current data (otherwise immediate submission causes issues)
- [ ] When updating data (e.g., todo, project), the user should always be sent
back to the previous interface after submission
    - [x] Updating a project via the todo list view sends the user back to the
    todo list view
    - [ ] Updating a project via the project view sends the user back to the
    project view
    - [x] Updating a todo via the project view sends the user back to the
    project view
- [ ] Project view should display the following information for todos
    - [x] Title
    - [ ] Due date
    - [ ] Priority (via colour, _on side border?_)
        - Darkblue
        - Purple
        - Cyan
    - [x] Update button
    - [x] Delete button
- [ ] Use icons for certain buttons
    - [ ] Update project in todo list view
    - [ ] Delete project in todo list view
    - [ ] Update todo in project view
    - [ ] Delete todo in project view
- [ ] The application should have data persistence
- [ ] Style application
- [x] Users should be able to go back to the todo list page from a project
- [x] Users should be able to view individual todos
- [x] Users should be able to update individual todos
- [x] Users should be able to exit exiting todo dialog without updating a todo
- [x] Users should be able to exit new todo dialog without creating a todo
- [x] Users should be able to delete individual todos
- [x] Users should be able to update projects
    - [x] From todo list view
    - [x] From project view
- [x] Users should be able to delete projects
    - [x] From todo list view
    - [x] From project view
- [x] Users should be able to create todos
    - [x] Title
    - [x] Description
    - [x] Due date
    - [x] Priority

### Additional

- [ ] Resetting input data properties (`UI.js`) should be done in specific
methods
- [ ] Form validation
    - [ ] Project
        - [ ] Create
        - [ ] Update
    - [ ] Todo
        - [ ] Create
        - [ ] Update
- [ ] Confirmation
    - [ ] Deleting a project
    - [ ] Deleting a todo
    - [ ] Exiting out of edit mode without editing a todo, but new data has been
    entered
- [ ] Users should be sent to a default project when they first start the
application
    - [ ] This project cannot be deleted
    - [ ] Todos are sent to this project by default
- [ ] Users should be able to sort the todos their projects
    - [ ] By title
    - [ ] By due date
    - [ ] By priority
- [ ] Project descriptions should be cut off with an ellipsis if they are too
long

#### Maintenance

- [ ] Methods to close a dialog should use the same function

### Bugs
