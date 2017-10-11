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
			photoList += `|| ${this.photos[i].photo} : ${this.photos[i].location} || `;
		}



		return photoList;
	}
	accessPhotoByIndex(num){
		this.num = num - 1;
		return `[[${this.num + 1}]]|| ${this.photos[this.num].photo} : ${this.photos[this.num].location} ||`;
	}


};

class Photo {
	constructor(url, location){
		this.url = url;
		this.location = location;
	}
	takePhoto(url, location){
		this.url = url;
		this.location = location;

		let newPhoto = {};
		newPhoto.photo = this.url;
		newPhoto.location = this.location;
		return newPhoto;
	}
}

let machuPiccu = new Photo;

let newPic = machuPiccu.takePhoto('incanland.jpg', 'peru');

console.log(newPic);

let myPics = new Album;

myPics.addPhotos({photo: 'stellamare.jpg', location: 'portugal'});
myPics.addPhotos({photo: 'roda-de-centro.png', location: 'brazil'});

console.log(myPics.accessPhotoByIndex(1));

console.log(myPics.listPhotos());

