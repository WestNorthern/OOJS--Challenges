class Photo{
	constructor(url, description){
		this.url = url;
		this.description = description;
	}
}

class Album {
	constructor(){
		this.photos = [];
	}
	addPhoto(photo){
		this.photos.push(photo);
	}
	listPhotos(){
  	let photoList = "";
  	for (var i = 0; i < this.photos.length; i++) {
  		photoList += ` || ${this.photos[i].url} : ${this.photos[i].description} || `;
  	}
  	return photoList;
  }
  accessPhotoByIndex(num){
		return `[[${num + 1}]]|| ${this.photos[num].url} : ${this.photos[num].description} ||`;
	}
	photoLayout(element){
		let photoLayout = "";
  	for (var i = 0; i < this.photos.length; i++) {
  		photoLayout += `<div class="image-box"><img src="${this.photos[i].url}" alt="${this.photos[i].description}"></div>`;
  	}
  	document.getElementById(element).innerHTML = photoLayout;
	}
}

let myPix = new Album();


let picOne = new Photo('mypic.jpg', 'sugarhouse');
let picTwo = new Photo('picturetwo.jpg', 'liberty wells');
let picThree = new Photo('newpicture.ppg', 'gilgal garden');

myPix.addPhoto(picOne);
myPix.addPhoto(picTwo);
myPix.addPhoto(picThree);

console.log(myPix.accessPhotoByIndex(2));
console.log(myPix.listPhotos());

let pageGallery = new Album();

let pixOne = new Photo('images/august.jpg', 'coolpic');
let pixTwo = new Photo('images/castle.jpg', 'coolpic');
let pixThree = new Photo('images/beer.jpg', 'coolpic');
let pixFour = new Photo('images/skull.jpg', 'coolpic');
let pixFive = new Photo('images/ragnar.jpg', 'coolpic');
let pixSix = new Photo('images/vegas.jpg', 'coolpic');
let pixSeven = new Photo('images/wut.jpg', 'coolpic');
let pixEight = new Photo('images/mywall.jpg', 'coolpic');

pageGallery.addPhoto(pixOne);
pageGallery.addPhoto(pixTwo);
pageGallery.addPhoto(pixThree);
pageGallery.addPhoto(pixFour);
pageGallery.addPhoto(pixFive);
pageGallery.addPhoto(pixSix);
pageGallery.addPhoto(pixSeven);
pageGallery.addPhoto(pixEight);

console.log(pageGallery.listPhotos());

pageGallery.photoLayout('page-box');






