let person={
    "name" : "Collins Sami",
    "age"  :21,
    "address" :"149 Nakuru",
    is_student :true,
    "my skills" : ["cloud","SRE"]

}
console.log(person)
//dot notation
console.log(person.name)
//bracket_notation
console.log(person["my skills"])
console.log(person['is_student'])
//object methods-notes in book
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(Object.entries(person))
//complex
let person2={
    "name":"jack",
    "skills":{
        "soft_skills":["comms"],
        "technical_skills":["JS","Cloud","Platform"]
    },
    experience:["Google","AWS"]
}
console.log(Object.keys(person2))
console.log(person2.skills.technical_skills[2])
//Task output "postgresSQL" and "Deploy to Netfly"
const userProfile = {
    id: 101,
    name: {
        first: "Brian",
        last: "Letting",
    },
    contact: {
        email: "jeff@example.com",
        phones: ["+254700000001", "+254700000002"],
    },
    address: {
        current: {
            city: "Nairobi",
            street: "Westlands Ave",
            postalCode: "00100",
        },
        previous: [
            {
                city: "Eldoret",
                street: "Main Street",
                postalCode: "30100",
            },
            {
                city: "Kisumu",
                street: "Lake View Road",
                postalCode: "40100",
            },
        ],
    },
    preferences: {
        theme: "dark",
        language: "en",
        notifications: {
            email: true,
            sms: false,
            push: ["promotions", "updates"],
        },
    },
    projects: [
        {
            id: 1,
            name: "POS System",
            technologies: ["React", "FastAPI", "PostgreSQL"],
            tasks: [
                { title: "Set up DB", done: true },
                { title: "Design UI", done: false },
            ],
        },
        {
            id: 2,
            name: "Portfolio Website",
            technologies: ["HTML", "CSS", "JavaScript"],
            tasks: [
                { title: "Create About Page", done: true },
                { title: "Deploy to Netlify", done: false },
            ],
        },
    ],
};
console.log(Object.keys(userProfile))
console.log(userProfile.projects[0].technologies[2])
//add another key amount 90
let my_arr=[23, 'Jane', 560, ['Lesson','Maths',{'currency':'KES'}], 987,76,'John']
console.log(my_arr[3][2])
my_arr[3][2].amount=90
console.log(my_arr[3][2])
//reverse 987 to 789
my_arr[4]=Number(string(my_arr[4]).split('').reverse().join(''))
console.log(my_arr[4])
console.log(my_arr)