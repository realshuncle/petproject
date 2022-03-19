import Dropdown from '../../components/dropdown/dropdown.js';
import RangeSlider from '../../components/range-slider/range-slider.js';
import Header from '../../components/header/header.js';
import Catalog from '../../components/catalog/catalog.js';
import paginationjs from 'paginationjs';
//import 'paginationjs/dist/pagination.css';

new Header();

for (let dropdown of document.getElementsByName('guest-dropdown')) {
  new Dropdown(dropdown, {
    'гости': ['гость', 'гостя', 'гостей'],
    'младенцы': ['младенец', 'младенца', 'младенцев'],
  });
}

for (let dropdown of document.getElementsByName('facilities-dropdown')) {
	new Dropdown(dropdown, {
    'спальни': ['спальня', 'спальни', 'спален'],
		'кровати': ['кровать', 'кровати', 'кроватей'],
    'ванные комнаты': ['ванная комната', 'ванные комнаты', 'ванных комнат'],
	});
}

for (let slider of document.querySelectorAll('[name = "my-slider"]')) {``
	new RangeSlider(slider, {
		start: [5000, 10000],
		range: {
				'min': 0,
				'max': 15000
		},
	})
}

let rooms = [];
for (let i = 1; i < 13; i++) {
	rooms.push(require(`./img/room${i}.png`))
}
let x = require(`./img/room${1}.png`);
let y = require('./img/image2.png');
//console.log('1', x);
for (let catalog of document.querySelectorAll('.catalog')) {
	let c = new Catalog({element: catalog, size: 12, 
	elements: [
		{
			images: [rooms[0], rooms[5], rooms[9], rooms[3]],
			number: 888,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
	],
});


$('.catal').pagination({
	dataSource:[
		{
			images: [rooms[0], rooms[5], rooms[9], rooms[3]],
			number: 888,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},

		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[2], rooms[5], rooms[9], rooms[3]],
			number: 333,
			isLus: true,
			price: 9990,
			rating: 5,
			review: 145,
		},
		{
			images: [rooms[1], rooms[11], rooms[8], rooms[7]],
			number: 840,
			price: 9900,
			rating: 4,
			review: 65,
		},
		{
			images: [rooms[2], rooms[10], rooms[5], rooms[6]],
			number: 980,
			price: 8500,
			rating: 3,
			review: 35,
		},
		{
			images: [rooms[3], rooms[1], rooms[9], rooms[7]],
			number: 856,
			price: 7300,
			rating: 5,
			review: 19,
		},
		{
			images: [rooms[4], rooms[9], rooms[11], rooms[3]],
			number: 740,
			price: 6000,
			rating: 4,
			review: 44,
		},
		{
			images: [rooms[5], rooms[2], rooms[9], rooms[4]],
			number: 982,
			price: 5800,
			rating: 3,
			review: 56,
		},
		{
			images: [rooms[6], rooms[11], rooms[2], rooms[0]],
			number: 678,
			price: 5500,
			rating: 5,
			review: 45,
		},
		{
			images: [rooms[7], rooms[2], rooms[5], rooms[1]],
			number: 450,
			price: 5300,
			rating: 4,
			review: 39,
		},
		{
			images: [rooms[8], rooms[11], rooms[3], rooms[6]],
			number: 350,
			price: 5000,
			rating: 3,
			review: 77,
		},
		{
			images: [rooms[9], rooms[2], rooms[6], rooms[0]],
			number: 666,
			price: 5000,
			rating: 5,
			review: 25,
		},
		{
			images: [rooms[11], rooms[3], rooms[7], rooms[5]],
			number: 352,
			price: 5000,
			rating: 3,
			review: 55,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
		{
			images: [rooms[10], rooms[8], rooms[3], rooms[0]],
			number: 444,
			price: 5000,
			rating: 3,
			review: 15,
		},
	],	
	//pageRange: c.elements.length * 12,
	pageSize: 12,
	autoHidePrevious: true,
	autoHideNext: true,
	pageRange: 1,
	prevText: '',
	nextText: '',
	callback: function(data, pagination) {
		c.update(data);	
		$(c.element).animate({scrollTop: 0}, 100);
		c.element.scrollIntoView(true);
		window.scrollBy(0, -100)
	},
	footer: function(currentPage, totalPage, totalNumber) {
		let result = '1 – 12 из 100+ вариантов аренды';
		result = '';
		result += currentPage * 12 - 11;
		result += ' - ';
		result += currentPage * 12 <= totalNumber ? currentPage * 12 : totalNumber;
		result += ' из ';
		if (totalPage * 12 > 100) {
			result += '100+ вариантов аренды';
		}
		else {

			result += totalNumber + ' ' + declOfNum(totalNumber, ['варианта', 'вариантов', 'вариантов']) + 'aренды';
		}
		return result;
	}
})

function declOfNum(n, text_forms) {  
	n = Math.abs(n) % 100; 
	var n1 = n % 10;
	if (n > 10 && n < 20) { return text_forms[2]; }
	if (n1 > 1 && n1 < 5) { return text_forms[1]; }
	if (n1 == 1) { return text_forms[0]; }
	return text_forms[2];
}
}
