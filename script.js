// Listing element.
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var linkedinElement = document.getElementById('linkedin');
    var mobileElement = document.getElementById('mobile');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var professionalexperienceElement = document.getElementById('professionalexperience');
    var skillsElement = document.getElementById('skills');
    var seminarsandworkshopsElement = document.getElementById('seminarsandworkshops');
    if (nameElement && emailElement && linkedinElement && mobileElement && addressElement && educationElement &&
        professionalexperienceElement && skillsElement && seminarsandworkshopsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var linkedin = linkedinElement.value;
        var mobile = mobileElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var professionalexperience = professionalexperienceElement.value;
        var skills = skillsElement.value;
        var seminarsandworkshops = seminarsandworkshopsElement.value;
        //  Create Resume Output.
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong>".concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Linkedin:</strong>").concat(linkedin, "</p>\n    <p><strong>Mobile:</strong>").concat(mobile, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Professionalexperience</h3>\n    <p>").concat(professionalexperience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Seminarsandworkshops</h3>\n    <p>").concat(seminarsandworkshops, "</p>\n       \n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
