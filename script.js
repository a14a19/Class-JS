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



// rough work below this

//============================================================================
// const course1 = new Course('JS', 'JS-101')
// const person1 = new Person('Ken')
// const teacher1 = new Teacher('Ryan', 'JavaScript', course1)
// const student1 = new Student('Tobi', 'T1', 1, course1)

// console.log(teacher1)
// console.log(student1)
// console.log(person1)

//============================================================================
// const studentFactory = function(name = '', id, year){
//     const course = new Course('JS', 'JS-101')
//     return new Student(name, id, year, course) 
// }

// const student1 = studentFactory('Tobi', 'T-01', 1)
// const student2 = studentFactory('Obito', 'T-01', 1)

// let ls = new Course()
// ls.students.push(student1.name)
// ls.students.push(student2.name)

// console.log(ls.students);

// const teacherFactory = function(name = '', teaches = ''){
//     const course = new Course('React', 'R-101')
//     return new Teacher(name, teaches, course)
// }

// const teacher1 = teacherFactory('Goku', 'React')
// const teacher2 = teacherFactory('Vegeta', 'React')

// // console.log(teacher1.name);

// let lt = new Course()
// lt.teachers.push(teacher1.name)
// lt.teachers.push(teacher2.name)

// console.log(teacher1.name);
// console.log(lt.teachers);
// console.log(student1);

//===============================================================
// let listTeacher = [];
// listTeacher.push(teacher2.name)
// listTeacher.push(teacher1.name)

// console.log(listTeacher);

// Object.setPrototypeOf(person1, teacher1)

// const JS = new Course('JS', 'js-101')
// const teacher1 = new Teacher('Ken', 'JS')
// const student1 = new Student('Arima', 'A-01', 1, JS)

// course1.listTeachers(name).push(teacher1.name)

// let teachers = [
//     new Teacher('Obito', 'JS'), 
//     new Teacher('Ryan', 'React')
// ]
// const student = [
//     new Student('Arima', 'A-01', 1), 
//     new Student('Kaneki', 'K-01', 2)
// ]

// Object.setPrototypeOf(teachers, course1)

