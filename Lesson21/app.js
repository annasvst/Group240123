const textInput = document.getElementById('todo-input');
const form = document.getElementById('todo-form');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (textInput.value == '') {
		alert('Provide valid input');
	} else {
		const newItem = document.createElement('li');
		const forText = document.createElement('span');
		forText.innerText = textInput.value;

		newItem.addEventListener('click', function () {
			forText.classList.toggle('completed');
		});

		const deleteButton = document.createElement('button');
		deleteButton.innerText = 'x';
    console.log(deleteButton);
    deleteButton.classList.add('button--light');
        // deleteButton.setAttribute("class","button--light");
		deleteButton.addEventListener('click', function () {
			newItem.remove();
		});

		newItem.appendChild(forText);
		newItem.appendChild(deleteButton);
		list.appendChild(newItem);

		textInput.value = '';
	}
});
