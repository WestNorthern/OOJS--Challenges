// Question One


class Multiplier {
	constructor(num){
		this.num = num;
		this.currentVal = 1;
	}
	multiply(num){
	
	this.num = num;

	//       This worked
	// 	if (this.currentVal === 1){
	// 		this.currentVal = this.num;
	// 		return this.currentVal;
	// 	}
	// 	else if (this.currentVal !== 1){
	// 		this.currentVal = this.currentVal * this.num;
	// 		return this.currentVal;
	// 	}
	// }  End of stuff that worked

	 return this.currentVal *= this.num;
	}

	getCurrentValue(){

		return this.currentVal;
	}
}

let multTest = new Multiplier;

multTest.multiply(2);
multTest.multiply(3);
multTest.multiply(2);
multTest.multiply(2);

console.log(multTest.getCurrentValue());



