// Listing element.

    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

   

     const nameElement = document.getElementById('name') as HTMLInputElement;
     const emailElement = document.getElementById('email') as HTMLInputElement;
     const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;
     const mobileElement = document.getElementById('mobile') as HTMLInputElement;
     const addressElement = document.getElementById('address') as HTMLInputElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
     const professionalexperienceElement = document.getElementById('professionalexperience') as HTMLInputElement;
     const skillsElement = document.getElementById('skills') as HTMLInputElement;
     const seminarsandworkshopsElement = document.getElementById('seminarsandworkshops') as HTMLInputElement;

       if (nameElement && emailElement && linkedinElement && mobileElement && addressElement && educationElement &&
        professionalexperienceElement && skillsElement && seminarsandworkshopsElement) {

            const name = nameElement.value;
            const email = emailElement.value;
            const linkedin = linkedinElement.value;
            const mobile = mobileElement.value;
            const address = addressElement.value;
            const education = educationElement.value;
            const professionalexperience = professionalexperienceElement.value;
            const skills  = skillsElement.value;
            const seminarsandworkshops = seminarsandworkshopsElement.value


     //  Create Resume Output.

    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Linkedin:</strong>${linkedin}</p>
    <p><strong>Mobile:</strong>${mobile}</p>
    <p><strong>Address:</strong>${address}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Professionalexperience</h3>
    <p>${professionalexperience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Seminarsandworkshops</h3>
    <p>${seminarsandworkshops}</p>
       
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('the resume output elements are missing')
    }
    } else {
        console.error('one or more output elements are missing')
    }

})
