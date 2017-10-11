Date.prototype.getMonthName = function() {
  let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[this.getMonth()];
};

Date.prototype.formattedDate = function() {
	date = this.getDate();
	month = this.getMonthName();
	year = this.getFullYear();
	return `${month} ${date}, ${year}`;
};

let theGoodTimesRoll = new Date().formattedDate();

console.log(theGoodTimesRoll);


Date.prototype.formattedTime = function() {
	hours = this.getHours().toString();
	minutes = this.getMinutes().toString();
	seconds = this.getSeconds().toString();

	if (hours.length < 2){
		hours = '0' + hours;
	}
	if (minutes.length < 2){
		minutes = '0' + minutes;
	}
	if (hours.length < 2){
		seconds = '0' + seconds;
	}

	return `${hours}:${minutes}:${seconds}`

};

let takeFive = new Date();

console.log(takeFive.formattedTime());

