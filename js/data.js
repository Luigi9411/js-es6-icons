function renderIcons(arrIcons,eleBox){
	eleBox.innerHTML = ''
	arrIcons.forEach(objDate => eleBox.innerHTML += generateBox(objDate));

}


function generateBox(obj){
    return `
	   <div class= "box">
	        <i class="${obj.prefix}sharp ${obj.prefix}solid ${obj.prefix}${obj.name}" style="color:${obj.color}" ></i>
			<h4>${obj.name}</h4>
	   </div>	
	`
}

function populateSelect(arrIcon, eleSelectLevel){
	const arrType = [];
	arrIcon.forEach(objDate => arrType.includes(objDate.type) ? '': arrType.push(objDate.type));
	arrType.forEach(type => eleSelectLevel.innerHTML += `<option value="${type}">${type}</option>`);
}

function filterIcons() {
	const selectedType = this.value; 
	if (selectedType !== '') {
		arrDateFiltered = arrDate.filter(objDate => objDate.type === selectedType)
	} else {
		arrDateFiltered = arrDate;
	}
	renderIcons(arrDateFiltered, eleBoxFlex);
}

function randomizeColors(arrIcons) {
	arrIcons.forEach(objDate => objDate.color = getRandomColor());
}

function getRandomColor() {
	const acceptableChars = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += acceptableChars[getRandomInteger(0, 15)];
	}
	return color; 
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const arrDate =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	}
];


const eleSelectLevel = document.querySelector('#select-level');
const eleBoxFlex=document.querySelector('.box-flex');

renderIcons(arrDate,eleBoxFlex);
randomizeColors(arrDate);
populateSelect(arrDate,eleSelectLevel);
eleSelectLevel.addEventListener('change', filterIcons);
