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
}

