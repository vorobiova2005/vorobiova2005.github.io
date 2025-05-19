const form = document.getElementById('registration-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const comments = document.getElementById('comments');
const errorFirstName = document.getElementById('error-first-name');
const errorLastName = document.getElementById('error-last-name');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');
const registerBtn = document.getElementById('register-btn');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (validateForm()) {
		alert('Registration successful!');
		form.reset();
	}
});

function validateForm() {
	let isValid = true;

	if (firstName.value.trim() === '') {
		isValid = false;
		setErrorFor(firstName, errorFirstName, "First name is required");
	} else {
		setSuccessFor(firstName, errorFirstName);
	}

	if (lastName.value.trim() === '') {
		isValid = false;
		setErrorFor(lastName, errorLastName, "Last name is required");
	} else {
		setSuccessFor(lastName, errorLastName);
	}

	if (email.value.trim() === '') {
		isValid = false;
		setErrorFor(email, errorEmail, 'Email address is required');
	} else if (!isValidEmail(email.value.trim())) {
		isValid = false;
		setErrorFor(email, errorEmail, 'Please enter a valid email address');
	} else {
		setSuccessFor(email, errorEmail);
	}

	if (phone.value.trim() === '') {
		isValid = false;
		setErrorFor(phone, errorPhone, "Phone number is required");
	} else if (!isValidPhone(phone.value.trim())) {
		isValid = false;
		setErrorFor(phone, errorPhone, 'Please enter a valid phone number');
	} else {
		setSuccessFor(phone, errorPhone);
	}

	return isValid;
}

function setErrorFor(input, error, message) {
	input.classList.add('error');
	error.innerText = message;
}

function setSuccessFor(input, error) {
	input.classList.remove('error');
	error.innerText = '';
}

function isValidEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

function isValidPhone(phone) {
	const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
	return re.test(phone);
}


function validateForm() {
	let isValid = true;
  
	if (firstName.value.trim() === '') {
	  isValid = false;
	  setErrorFor(firstName, errorFirstName, "First name is required");
	} else if (/^\d+$/.test(firstName.value.trim())) { // new code - prevent numeric values
	  isValid = false;
	  setErrorFor(firstName, errorFirstName, "First name must contain letters");
	} else {
	  setSuccessFor(firstName, errorFirstName);
	}
  
	if (lastName.value.trim() === '') {
	  isValid = false;
	  setErrorFor(lastName, errorLastName, "Last name is required");
	} else if (/^\d+$/.test(lastName.value.trim())) { // new code - prevent numeric values
	  isValid = false;
	  setErrorFor(lastName, errorLastName, 'Last name must contain letters');
	} else {
	  setSuccessFor(lastName, errorLastName);
	}
  
	if (email.value.trim() === '') {
	  isValid = false;
	  setErrorFor(email, errorEmail, 'Email address is required');
	} else if (!isValidEmail(email.value.trim())) {
	  isValid = false;
	  setErrorFor(email, errorEmail, 'Please enter a valid email address');
	} else {
	  setSuccessFor(email, errorEmail);
	}
  
	if (phone.value.trim() === '') {
	  isValid = false;
	  setErrorFor(phone, errorPhone, "Phone number is required");
	} else if (!isValidPhone(phone.value.trim())) {
	  isValid = false;
	  setErrorFor(phone, errorPhone, 'Please enter a valid phone number');
	} else {
	  setSuccessFor(phone, errorPhone);
	}
  
	return isValid;
  }

 
  window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('fixed', window.scrollY > 0);
  });

  