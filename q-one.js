// Question One


class Multiplier {
	constructor(num){
		this.num = num;
		this.currentVal = 1;
	}
	multiply(num){
		return this.currentVal *= this.num;
	}

	getCurrentValue(){
		return this.currentVal;
	}
}

let multTest = new Multiplier;

multTest.multiply(9);
multTest.multiply(3);
// multTest.multiply(2);
// multTest.multiply(2);

console.log(multTest.getCurrentValue());



