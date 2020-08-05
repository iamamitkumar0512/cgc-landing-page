/* Creating the Nav bar */
function Nav() {

    const navItems = ['About', 'Courses', 'Advantage', 'Contact', 'Testimonials', 'Register'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Register') {
            li.innerHTML += `<a href="https://www.cgc.edu.in/admission-2020/?utm_source=srv&utm_medium=google-text&utm_campaign=brand&gclid=CjwKCAjw_qb3BRAVEiwAvwq6VujclWRZCDsqFKjLShDcKSw4OVaRP59treepxICYeU11Zpws6tKL2hoCh9MQAvD_BwE#home"><button><p>${navItem}</p></button></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }
        else if (navItem == 'About') {
            li.innerHTML += `<a href="#top"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "active box";
            ul.appendChild(li);
        }
        else {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }

    }

}

Nav();


/* Creating the Content Sections */
function Sec() {

    const sectionNames = ['About', 'Cgc', 'Courses', 'Advantage', 'Contact', 'Testimonials'];

    const content = document.getElementById('content');

    for (let sectionName of sectionNames) {
        section = document.createElement("section");
        section.className = "content box";
        section.id = `content-${sectionName.toLowerCase()}`;
        content.appendChild(section);
    }

}

Sec();


/* Creating the App Section */
function Cgc() {
    const app = document.getElementById('content-cgc');
    const imgCard = document.createElement('div');
    app.appendChild(imgCard);
    imgCard.className = "collegeCard box";
    imgCard.id = "collegeCard";
}

Cgc();



/* Creating the About Section */
function About() {
    const aboutText = document.createElement('div');
    const about = document.getElementById('content-about');
    aboutText.className = "aboutText box";
    aboutText.innerHTML = "<p>The Chandigarh Group of Colleges are the educational institutions located in Sahibzada Ajit Singh Nagar district of Punjab in short distance from cities of Chandigarh and Mohali.</br> Chandigarh Group of Colleges was established in 2001 at Landran.</p>"
    about.appendChild(aboutText);
}

About();


/* Creating the course offered Section */
function course() {

    const courseCards = [
        {
            course: "course1",
            description: "Engineering"
        },
        {
            course: "course2",
            description: "Computer Applicant"
        },
        {
            course: "course3",
            description: "Managment"
        },
        {
            course: "course4",
            description: "Pharmacy"
        },
        {
            course: "course5",
            description: "Hotel Managment"
        },
        {
            course: "course6",
            description: "Bio-Technology"
        }
    ];

    const courses = document.getElementById('content-courses');

    const corHeading = document.createElement('p');
    corHeading.textContent = "Courses";
    corHeading.className = "corTitle";
    courses.appendChild(corHeading);

    const corCards = document.createElement('div');
    corCards.className = "corCards";
    courses.appendChild(corCards);

    for (let courseCard of courseCards) {
        course = document.createElement("div");
        course.className = "card box";
        course.innerHTML = `<img src="images/${courseCard.course}.jpg" alt="picture of ${courseCard.course}"><p>${courseCard.description}</p>`
        corCards.appendChild(course);
    }
}

course();


/* Creating the Advanatge Section */
function advantage() {

    const advantageCards = [
        {
            advantage: "1",
            description: "Trust Worthy Brand",
            adv: "19 year long legacy"
        },
        {
            advantage: "2",
            description: "Academic Excellence",
            adv: "project based experimental learning"
        },
        {
            advantage: "3",
            description: "Placement Record",
            adv: "35LPA Highest Package offered"
        }
    ];

    const advantage = document.getElementById('content-advantage');

    const advHeading = document.createElement('p');
    advHeading.textContent = "Advanatge";
    advHeading.className = "advTitle";
    advantage.appendChild(advHeading);

    const advCards = document.createElement('div');
    advCards.className = "advCards";
    advantage.appendChild(advCards);

    for (let advantageCard of advantageCards) {
        adv = document.createElement("div");
        adv.className = "adavantageCard box";
        adv.innerHTML = `<img src="images/${advantageCard.advantage}.png" alt="${advantageCard.advantage} Membership"><p class="membership">${advantageCard.description}</p><p class="adv">${advantageCard.adv}</p>`
        advCards.appendChild(adv);
    }
}

advantage();


/* Creating the Contact Sections */
function contact() {

    const contactCards = [
        {
            contact: "phone",
            description: "Phone No.",
            con: "8804704783"
        },
        {
            contact: "email",
            description: "Email",
            con: "1802292.ece.cec@cgc.edu.in"
        },
        {
            contact: "address",
            description: "Address",
            con: "Sector 112, Landran, Greater Mohali, Punjab 140307 (INDIA)"
        }
    ];

    const contact = document.getElementById('content-contact');

    const conHeading = document.createElement('p');
    conHeading.textContent = "Contact";
    conHeading.className = "conTitle";
    contact.appendChild(conHeading);

    const conCards = document.createElement('div');
    conCards.className = "conCards";
    contact.appendChild(conCards);

    for (let contactCard of contactCards) {
        con = document.createElement("div");
        con.className = "contactCard box";
        con.innerHTML = `<img src="images/${contactCard.contact}.png" alt="${contactCard.contact} Membership"><p class="membership">${contactCard.description}</p><p class="con">${contactCard.con}</p>`
        conCards.appendChild(con);
    }
}

contact();


/* Creating the Testimony Section */
function testimonials() {
    const quoteBox = document.createElement('div');
    const testSection = document.getElementById('content-testimonials');
    quoteBox.id = "quoteBox";
    testSection.appendChild(quoteBox);

    const testimonials = [
        {
            quote: "My alma mater was really awesome time I had in my life as I have enjoyed a lot over there with studies. There was cool teaching staff and environment of college was up to mark. And really I miss my college BATCH 2013",
            person: "Ashim Chhabra - Sr. System support Associater"
        },
        {
            quote: "I think CGC is one of the best group of Colleges in North India. CGC staff specially the CRC department very good and hardworking. They provide more opportunities to a student to get placed as compare to others.",
            person: "Rohit Kumar - Senior Software Engineering"
        },
        {
            quote: "A place known for its beautiful campus and resounding placement record is known as Chandigarh Group of Colleges Landran of which I am part of and feel immense proud when I hear the achievements.",
            person: "Amarnath Kumar - Software Developer "
        }
    ];

    function getRandom() {
        let randomNo = Math.floor(Math.random()*testimonials.length);
        return(testimonials[randomNo]);
    }

    function test() {
        let test = getRandom();
        let htmlString = "";

        htmlString += `<p class='quote'>"${test.quote}"</p><br>`;
        htmlString += `<p class='source'>${test.person}`;
        htmlString += "</p>";

        document.getElementById("quoteBox").innerHTML = htmlString;
    }

    test();

    let time;

    function timer() {
        time = setInterval(test, 3000);
    }

    timer();
}

testimonials();

/* Determining if element is in viewport */
function view () {
    let isInViewport = function (ele) {
        let bound = ele.getBoundingClientRect();
        return (
            bound.top >= 0 &&
            bound.left >= 0 &&
            bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const course = document.querySelector('#content-courses');
    window.addEventListener('scroll', function (event) {
        if (isInViewport(course)) {
            let adview = document.querySelector('Courses');
            adview.classList.add("active");
        }
    }, false);
}

view();

function activeabout(){
    let isInViewport = function (ele) {
        let bound = ele.getBoundingClientRect();
        return (
            bound.top >= 0 &&
            bound.left >= 0 &&
            bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const about = document.querySelector('#content-about');
        if (isInViewport(about)) {
            let adview = document.querySelector('#About');
            adview.classList.add("a-state");
        }
        else{
            let adview = document.querySelector('#About');
            adview.classList.remove("a-state");
        }

}
window.onscroll = activeabout;
activeabout();



function activecourse(){
    let isInViewport = function (ele) {
        let bound = ele.getBoundingClientRect();
        return (
            bound.top >= 0 &&
            bound.left >= 0 &&
            bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const course = document.querySelector('#content-courses');
        if (isInViewport(course)) {
            let adview = document.querySelector('#Courses');
            adview.classList.add("a-state");
        }
        else{
            let adview = document.querySelector('#Courses');
            adview.classList.remove("a-state");
        }

}
activecourse();
window.onscroll = activecourse;



function activeadvantage(){
    let isInViewport = function (ele) {
        let bound = ele.getBoundingClientRect();
        return (
            bound.top >= 0 &&
            bound.left >= 0 &&
            bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const advantage = document.querySelector('#content-advantage');
        if (isInViewport(course)) {
            let adview = document.querySelector('#Advanatge');
            adview.classList.add("a-state");
        }
        else{
            let adview = document.querySelector('#Advanatge');
            adview.classList.remove("a-state");
        }

}
activeadvantage();
window.onscroll = activeadvantage;

function activecontact(){
    let isInViewport = function (ele) {
        let bound = ele.getBoundingClientRect();
        return (
            bound.top >= 0 &&
            bound.left >= 0 &&
            bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const contact = document.querySelector('#content-contact');
        if (isInViewport(contact)) {
            let adview = document.querySelector('#Contact');
            adview.classList.add("a-state");
        }
        else{
            let adview = document.querySelector('#Contact');
            adview.classList.remove("a-state");
        }

}
activecontact();

function activett(){
    let isInViewport = function (ele) {
        let bound = ele.getBoundingClientRect();
        return (
            bound.top >= 0 &&
            bound.left >= 0 &&
            bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const tt = document.querySelector('#content-testimonials');
        if (isInViewport(tt)) {
            let adview = document.querySelector('#Testimonials');
            adview.classList.add("a-state");
        }

}
activett();

