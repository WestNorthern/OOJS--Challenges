// Question two


class Album {
	constructor(){
		this.photos = [];
	}
	addPhotos(photo){
		this.photos.push(photo);
	}
	listPhotos(){
		let photoList = "";

		for (var i = 0; i < this.photos.length; i++) {
			photoList += `|| ${this.photos[i].url} : ${this.photos[i].location} || `;
		}

		return photoList;
	}
	printPhotoStringByIndex(num){
		this.num = num - 1;
		return `[[${this.num + 1}]]|| ${this.photos[this.num].url} : ${this.photos[this.num].location} ||`;
	}
	accessPhotoByIndex(num){
		return this.photos[num+1];
	}
	


};

class Photo {
	constructor(url, location){
		this.url = url;
		this.location = location;
	}
}

let machuPiccu = new Photo('incanland.jpg', 'peru');
let grandeTetons = new Photo('bigmountain.ngv', 'wyoming');



let myPics = new Album;

let starfield = new Photo('stellamare.jpg', 'portugal');
let roda = new Photo('roda-de-centro.png', 'brazil');

myPics.addPhotos(machuPiccu);
myPics.addPhotos(grandeTetons);
myPics.addPhotos(starfield);
myPics.addPhotos(roda);

console.log(myPics.accessPhotoByIndex(1));

console.log(myPics.listPhotos());

