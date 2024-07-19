const greetings = [
    "Konnichiwa",
    "Salam Alaikum",
    "Marhaban",
    "Kya haal he?",
    "Hey there",
    "Hello",
    "Wassup G?",
    "Bonjour",
    "Hola",
    "Anyo Hasayo",
    "Nihao"
];

function randomGreetingChooser() {
    index = Math.floor(Math.random()*10+1)

    randomGreeting = greetings[index]

    document.getElementById('greeting').innerHTML = randomGreeting;
}

function ageCalculator() {
    const dob = 2003;
    let curr_year = Date().split(" ")[3];
    curr_year = Math.floor(curr_year)
    const age = curr_year - dob;

    var personal_info_elem = document.getElementById("personal-info-para").innerHTML = `I am a ${age} year old Softwware Dev. Main language is Python, and main area of expertise is backend, although I can create frontends.<br>What else? Well, mechs are cool.`;
}