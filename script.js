//!   1).Creating Resume in JSON format :-

let data = [{
    name: "Ajith",
    description: "Full Stack Web Developer",
    contact: {
        mobile: 6380702825,
        email: "ajithrs45@gmail.com"
    },
    address: {
        doorno: "5/131-A",
        streetname: "BSNL Nagar",
        locality: "Ramachandrapuram",
        City: "Pollachi",
        State: "Tamil Nadu",
        Country: "India"
    },
    education: {
        school: {
            name: "GHSS",
            marks: 75.6
        },
        diploma: {
            name: "PAPTC",
            marks: 72
        },
        college: {
            name: "PACET",
            marks: 7.38,
            dept: "B.E Mech"
        }
    },
    skills: {
        programmingLanguages: ["javaScript", "Python"],
        interests: ["React", "Node.js", "MySQL", "MongoDB"],
        tools: "git",
        dataStructures: "aws"
    }
}];

let a = JSON.stringify(data);
let resume = JSON.parse(a);



//!  2). Task - 2 => Printing all the objects in array by using loop :-

//!     1).  for loop :-
for (let i = 0; i < resume.length; i++) {
    console.log(resume[i]);
}

//!     2). for - in :-
for (let key in resume) {
    console.log(
        "Name :" + " " + resume[key].name + ",",
        "Description :" + " " + resume[key].description + ",",
        "Mobile :" + " " + resume[key].contact.mobile + ",",
        "E-Mail ID :" + " " + resume[key].contact.email);
}

//!     3). for - of :-
for (let obj of resume) {
    console.log(
        "College Name :" + " " + obj.education.college.name + ",",
        "Department :" + " " + obj.education.college.dept + ",",
        "CGPA :" + " " + obj.education.college.marks
    );
}

//!     4). forEach :-
resume.forEach((a) => console.log(
    "Programming Languages Known :" +" "+ a.skills.programmingLanguages +",",
    "Interested to learn :" +" "+ a.skills.interests
    )
);
