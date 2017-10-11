class Person {
	constructor(name, age, goals){
		this.name = name;
		this.age = age;
		this.goals = goals;
		this.mind = 1;
		this.body = 1;

	}
	stateGoals(){
		console.log(`${this.goals}: Thats what I wanna do!`);
	}
}


class Student extends Person{
	
	constructor(name, age, goals, major, grade){
		super(name, age, goals);
		this.major = major;
		this.grade = grade;

	}
}

class Teacher extends Person{
	
	constructor(name, age, goals, subject, skillLevel){
		super(name, age, goals);
		this.subject = subject;
		this.skillLevel = skillLevel;

	}
}

class School{
	constructor(){
		this.students = [];
		this.teachers = [];
	}
	hireTeacher(teacher){
		this.teachers.push(teacher);
	}
	admitStudent(student){
		this.students.push(student);
	}
	admittanceOffice(person){
    if (person instanceof Student){
    	this.students.push(person);
    }
    if (person instanceof Teacher){
    	this.teachers.push(person);
    }

	}

}


let hermoine = new Student('Hermoine Granger', 27, 'Polimorphism Mastery', 'Potions', 'A+');
let flitwick = new Teacher('Filius Flitwick', 70, 'Dueling Champion', 'Charms', 'Expert');

console.log(hermoine);
console.log(flitwick);

let hogwarts = new School();

let ron = new Student('Ron Weasley', 26, 'Curse Avoidance', 'Botany', 'C-');
let mcgonagal = new Teacher('Brumhilde McGonagal', 77, 'Buy a new broom', 'Transformation', 'Dark Arts', 'Expert');

hogwarts.hireTeacher(flitwick);
hogwarts.admitStudent(hermoine);

hogwarts.admittanceOffice(mcgonagal);
hogwarts.admittanceOffice(ron);

console.log(hogwarts);



