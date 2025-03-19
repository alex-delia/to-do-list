import { v4 as uuidv4 } from 'uuid';

const projectList = document.querySelector('.projectList');
const newProjectForm = document.querySelector('.newProjectForm');
const newProjectInput = document.querySelector('.newProjectInput');
const deleteProjectBtn = document.querySelector('.delete');

class Project {
    constructor(name) {
        this.name = name;
        this.id = uuidv4();
        this.tasks = [];
    }
}

const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

projectList.addEventListener('click', e => {
    if (e.target.classList.contains('project')) {
        selectedProjectId = e.target.dataset.projectId;
        saveAndRender();
    }
})

function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
}

function saveAndRender() {
    save();
    renderProjects();
}

deleteProjectBtn.addEventListener('click', e => {
    projects = projects.filter(project => project.id !== selectedProjectId);
    saveAndRender();
})

newProjectForm.addEventListener('submit', e => {
    e.preventDefault();
    const projectName = newProjectInput.value;
    const project = new Project(projectName);
    newProjectInput.value = null;
    projects.push(project);
    saveAndRender();
})

function renderProjects() {
    clearElement(projectList);

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add('project');
        projectElement.textContent = project.name;
        if (project.id == selectedProjectId) {
            projectElement.classList.add('activeProject');
        }
        projectList.appendChild(projectElement);
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.firstChild.remove();
    }
}

export { renderProjects };