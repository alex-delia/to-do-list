import './style.css';
import { openDialog } from './dialog';
import { renderProjects } from './projects';

const content = document.querySelector('.content');

const newItemButton = document.querySelector('.newItem');
newItemButton.addEventListener('click', openDialog);

renderProjects();