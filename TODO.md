# TODO

## Description

A list of tasks for this project.

## Tasks

### MVP

- [ ] Style application
    - [ ] Creating todos titles with a lot of text breaks in
        - [ ] Project view
    - [ ] Creating projects titles with a lot of text breaks in
        - [ ] Todo list view
        - [ ] project view
    - [ ] Creating projects descriptions with a lot of text breaks in project
    view
    - [ ] Create project dialog should display on top of previous interface
    - [ ] Update project dialog should display on top of previous interface
    - [ ] Create todo dialog should display on top of previous interface
    - [ ] Update todo dialog should display on top of previous interface
- Validate application
    - [ ] Project
        - [ ] Title
            - [ ] String
            - [ ] 40 characters
        - [ ] Description
            - [ ] String
            - [ ] 400 characters
    - [ ] Todo
        - [ ] Title
            - [ ] String
            - [ ] 40 characters
        - [ ] Description
            - [ ] String
            - [ ] 400 characters
        - [ ] Is Complete
            - [ ] Boolean
        - [ ] Due Date
            - [ ] Date
        - [ ] Priority
            - [ ] Integer: 1 - 5
- [ ] Template elements should be rendered using JavaScript
    - [x] Header
    - [ ] Footer
- [ ] Cut off overflowing content with an ellipsis
- [x] The application should have data persistence
    - [x] Application start: Load local storage
    - [x] Create project: Save local storage
    - [x] Update project: Save local storage
    - [x] Delete project: Save local storage
    - [x] Create todo: Save local storage
    - [x] Update todo: Save local storage
    - [x] Delete todo: Save local storage
- [x] Format dates in the UI: `DD/MM/YYYY`
- [x] Use icons for certain buttons
    - [x] Update project in todo list view
    - [x] Delete project in todo list view
    - [x] Update todo in project view
    - [x] Delete todo in project view
- [x] Project view should display the following information for todos
    - [x] Title
    - [x] Due date
    - [x] Priority (via colour, _on side border?_)
    - [x] Update button
    - [x] Delete button
- [x] When updating data (e.g., todo, project), the state variables should
initially set to the current data (otherwise immediate submission causes issues)
- [x] When updating data (e.g., todo, project), the user should always be sent
back to the previous interface after submission
    - [x] Updating a project via the todo list view sends the user back to the
    todo list view
    - [x] Updating a project via the project view sends the user back to the
    project view
    - [x] Updating a todo via the project view sends the user back to the
    project view
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

- [ ] New keys are generated when projects are loaded from local storage
- [ ] New keys are generated when todos are loaded from local storage
- [x] Error when attempting to create a todo in project view
