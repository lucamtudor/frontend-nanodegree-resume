var bio = {
    "name": "Tudor Luca",
    "role": "Android Developer",
    "contacts": {
        "mobile": "+40724565349",
        "email": "luca.mtudor@gmail.com",
        "github": "lucamtudor",
        "twitter": "lucamtudor",
        "location": "Cluj-Napoca"
    },
    "bioPic": "./images/me.png",
    "welcomeMessage": "Wazzzzzap bitches?!",
    "skills": ["Android SDK", "Java", "Kotlin", "Gradle", "Git", "JavaScript"]
};

var work = {
    "jobs": [
        {
            "employer": "Smart Care",
            "title": "Android Developer",
            "location": "Cluj-Napoca, CJ, RO",
            "dates": "April 2014 - Future",
            "description": "Daycare centre management system."
        }
    ]
};

var work1 = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "DayCare Management System",
            "dates": "April 2014 - Future",
            "description": "A management system for daycare centers.",
            "images": []
        }
    ],

    "display": function () {
        var section = $("#projects");
        this.projects.forEach(function (project) {
            section.append(HTMLprojectStart);
            var entry = $(".project-entry:last");
            entry.append(HTMLprojectTitle.replace(placeholder, project.title));
            entry.append(HTMLprojectDates.replace(placeholder, project.dates));
            entry.append(HTMLprojectDescription.replace(placeholder, project.description));
            project.images.forEach(function (imagePath) {
                entry.append(HTMLprojectImage.replace(placeholder, imagePath));
            })
        })
    }
};

var education = {
    "schools": [
        {
            "name": "Technical University of Cluj-Napoca",
            "location": "Cluj-Napoca, CJ, RO",
            "degree": "BA",
            "majors": ["Automation and Applied Informatics"],
            "dates": 2015,
            "url": "http://www.utcluj.ro/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

var placeholder = "%data%";

function displayName(header, bio) {
    var name = HTMLheaderName.replace(placeholder, bio.name);
    var role = HTMLheaderRole.replace(placeholder, bio.role);
    header.prepend(role);
    header.prepend(name);
}

function displayImage(header, picturePath) {
    var image = HTMLbioPic.replace(placeholder, picturePath);
    header.append(image);
}

function displayWelcomeMessage(header, message) {
    var welcomeMessage = HTMLwelcomeMsg.replace(placeholder, message);
    header.append(welcomeMessage);
}

function displayContacts(contacts) {
    var contactsList = $("#topContacts");
    contactsList.append(HTMLmobile.replace(placeholder, contacts.mobile));
    contactsList.append(HTMLemail.replace(placeholder, contacts.email));
    contactsList.append(HTMLgithub.replace(placeholder, contacts.github));
    contactsList.append(HTMLemail.replace(placeholder, contacts.twitter));
    contactsList.append(HTMLlocation.replace(placeholder, contacts.location));
}

function displaySkills(header, skills) {
    header.append(HTMLskillsStart);
    var skillsList = $("#skills");

    skills.forEach(function (skill) {
        skillsList.append(HTMLskills.replace(placeholder, skill));
    });
}

function displayHeader() {
    var header = $("#header");
    displayName(header, bio);
    displayImage(header, bio.bioPic);
    displayWelcomeMessage(header, bio.welcomeMessage);
    displayContacts(bio.contacts);
    displaySkills(header, bio.skills);
}

function displayWork() {
    for (var item in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var workEntry = $(".work-entry:last");
        var formattedEmployer = HTMLworkEmployer.replace(placeholder, work.jobs[item].employer);
        var formattedTitle = HTMLworkTitle.replace(placeholder, work.jobs[item].title);
        var formattedDates = HTMLworkDates.replace(placeholder, work.jobs[item].dates);
        var formattedDescription = HTMLworkDescription.replace(placeholder, work.jobs[item].description);
        workEntry.append(formattedEmployer + formattedTitle);
        workEntry.append(formattedDates);
        workEntry.append(formattedDescription);
    }
}

function capitalizeFirstLetter(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function inName(fullName) {
    var name = fullName.trim().split(" ");
    var firstName = capitalizeFirstLetter(name[0]);
    var lastName = name[1].toUpperCase();
    return firstName + " " + lastName;
}

displayHeader();
displayWork();
projects.display();

