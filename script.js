class Person{
    // name 
    constructor (name = ''){
        this.name = name
    }
    introduceSelf(){
        console.log(`Hi, This is ${this.name}`)
    }
}

class Course{
    // title
    // code
    // student
    // teacher
    constructor(title = '', code = '', teachers, students){
        this.title = title
        this.code = code
        this.teachers = teachers
        this.students = students
        // let listStudents = []
        // return listStudents
    }
    listTeachers(){
        return this.teachers
    }
    listStudents(){
        return this.students
    }
}

class Teacher extends Person {
    // name
    // teaches
    constructor(name, teaches = []){
        super(name)
        this.teaches = teaches
        // this.course = courses
    }
    introduceSelf(){
        console.log(`Hi, This is ${this.name}. I'm Professor and I teach ${this.teaches}`);
    }
    assignCourse(){
        this.teaches = 'JavaScript'
        console.log(`${this.teaches}`);
    }
    removeCourse(){
        let deleted = delete this.teaches;
        console.log(`${deleted}`);
        console.log(`${this.teaches}`);
    }
    listCourse(){
        let courseList = []
        for(let x = 0; x < teacher.length; x++){
            courseList.push(teacher[x].teaches)
        }
        return courseList;
    }
}

class Student extends Person {
    // name
    // id
    // year
    // course
    constructor(name = '', id = '', year = -1, course){
        super(name)
        this.id = id
        this.year = year
        this.course = course
    }
    introduceSelf(){
        console.log(`Hi, This is ${this.name}. I'm Student, my student ID is ${this.id} and I'm in ${this.year} year. I'm pursuing ${this.course}`);
    }
    assignCourse(){
        this.course = 'Bootstrap'
        console.log(`${this.course}`);
    }
    removeCourse(){
        let deleted = delete this.course;
        console.log(`${deleted}`);
        console.log(`${this.course}`);
    }
}



let teacher = [new Teacher('Dabi', 'jQuery'), new Teacher('Shawn'), new Teacher('Ken', 'JS')]
let student = [new Student('Gohan', 'G-01', 1, 'jQuery'), new Student('Ryan', 'R-01', 2, 'React'), new Student('Saske', 'S-01', 1, 'JavaScript')]

// created static array first, to add to this array, used push 
const teacher1 = new Teacher('Arima', 'React')
teacher.push(teacher1)
const student1 = new Student('Nate', 'N-01', 2, 'JavaScript')
student.push(student1)

// created a factory function for both student and teacher for front end course
const frontEndFactory = function(title, code){
    return new Course(title, code, teacher, student); 
}

const course1 = frontEndFactory('Front-End', '101')

// console.log(teacher[0].teaches);
// console.log(student[2].title);
// delete teacher[0].teaches;
// delete student[2].title;
console.log(course1);
