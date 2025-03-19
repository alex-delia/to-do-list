import { todoItem } from "./todoItem";

function openDialog() {
    const dialog = document.querySelector('#dialog');
    const cancel = dialog.querySelector('#cancel');
    const submit = dialog.querySelector('#submit');

    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');
    const notes = document.querySelector('#notes');

    dialog.showModal();

    cancel.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
    });

    submit.addEventListener('click', () => {
        e.preventDefault();
        const item = todoItem(title.value, description.value, dueDate.value, priority.value, notes.value);

    });

}

export { openDialog };