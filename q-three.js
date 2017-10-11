// Question Three

class Library{
	constructor(){
		this.books = [];
  }
  addBook(book){
  	this.books.push(book);
  }
  listBooks(){
  	let bookList = "";
  	for (var i = 0; i < this.books.length; i++) {
  		bookList += ` || ${this.books[i].title} : ${this.books[i].author} : ${this.books[i].genre} ||`;
  	}
  	return bookList;
  }
}

class Book{
	constructor(title, author, genre){
		this.title = title;
		this.author = author;
		this.genre = genre;
	}
}

bookOne = new Book('Cryptonomicon', 'Neal Stephenson', 'Cyber-Thriller');
bookTwo = new Book('Dune', 'Frank Herbert', 'Science Fiction');
bookThree = new Book('IQ84', 'Haruki Murikami', 'Urban Fantasy');

cityLibrary = new Library();

cityLibrary.addBook(bookOne);
cityLibrary.addBook(bookTwo);
cityLibrary.addBook(bookThree);

console.log(cityLibrary.listBooks());


