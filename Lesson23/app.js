const phoneRegex = /^\+?9?0?\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('myForm');

form.addEventListener('submit', function () {
	event.preventDefault();

	const errors = document.getElementsByClassName('error');
	for (let i = 0; i < errors.length; i++) {
		errors[i].innerText = '';
	}
    
	const name = document.getElementById('name');
	const nameError = document.getElementById('nameError');
	const surname = document.getElementById('surname');
	const surnameError = document.getElementById('surnameError');
	const email = document.getElementById('email');
	const age = document.getElementById('age');
	const phone = document.getElementById('phone');
	const emailError = document.getElementById('emailError');
	const ageError = document.getElementById('ageError');
	const phoneError = document.getElementById('phoneError');
	let isFormValid = true;

	if (name.value === '') {
		nameError.innerText = 'Please enter your name.';
		isFormValid = false;
	}

	if (surname.value === '') {
		surnameError.innerText = 'Please enter your surname.';
		isFormValid = false;
	}

	if (email.value === '') {
		emailError.innerText = 'Please enter your email.';
		isFormValid = false;
	} else if (!emailRegex.test(email.value)) {
		emailError.innerText = 'Please enter valid email.';
		isFormValid = false;
	}

	if (age.value === '') {
		ageError.innerText = 'Please enter your age.';
		isFormValid = false;
	} else if (isNaN(age.value)) {
		ageError.innerText = 'Please input valid age.';
		isFormValid = false;
	}

	if (phone.value === '') {
		phoneError.innerText = 'Please enter your phone number.';
		isFormValid = false;
	} else if (!phoneRegex.test(phone.value)) {
		phoneError.innerText = 'Please enter valid phone number';
		isFormValid = false;
	}

	if (isFormValid) {
		event.target.submit(); // Event.target.submit() can be accessed when you want to submit the form in response to a specific event
		//  form.submit();  // Can be used outside of the eventListener in places where you don't have access to the event object.
	}
});
