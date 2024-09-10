const input = document.querySelector('input');
const ball = document.querySelector('img');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
	'Tak, zdecydowanie',
	'Możesz na to liczyć',
	'Z pewnością',
	'Tak',
	'Znaki wskazują, że tak',
	'Jest szansa',
	'Nie jestem pewien, spróbuj ponownie',
	'Zapytaj później',
	'Lepiej, żebym nie mówił teraz',
	'Nie mogę tego teraz przewidzieć',
	'Skoncentruj się i zapytaj ponownie',
	'Nie liczyłbym na to',
	'Moja odpowiedź brzmi: nie',
	'Moje źródła mówią, że nie',
	'Wygląda na to, że nie',
	'Bardzo wątpliwe',
];

const shake = () => {
	ball.classList.add('shake-animation');
	setTimeout(() => {
		checkForm();
		ball.classList.remove('shake-animation');
	}, 1000);
};

const checkForm = () => {
	const question = input.value.trim();
	if (question !== '' && question.slice(-1) === '?') {
		generateAnswer();
		error.textContent = '';
	} else if (question !== '' && question.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?"';
		answer.textContent = '';
	} else {
		error.textContent = 'Pole do zadawania pytania nie może być puste!';
		answer.textContent = '';
	}
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answersArr.length);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

const keyboardClick = (event) => {
	if (event.key === 'Enter') {
		shake();
	}
};

ball.addEventListener('click', shake);
input.addEventListener('keydown', keyboardClick);
