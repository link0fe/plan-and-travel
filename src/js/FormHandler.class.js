export class FormHandler {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.inputs = this.form.querySelectorAll('input');
        this.submitButton = this.form.querySelector('.register-submit');
        this.initialize();
    }

    initialize() {
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     if (this.validateForm()) {
    //         const formData = this.collectFormData();
    //         console.log(formData); // For demonstration: log the collected data
    //         // Here, you would typically send the formData to a server
    //     } else {
    //         console.log('Validation failed.');
    //     }
    // }

    // validateForm() {
    //     // Simple validation example
    //     let isValid = true;
    //     this.inputs.forEach(input => {
    //         if (!input.value.trim()) {
    //             console.error(`Validation failed for ${input.className}: Field is required.`);
    //             isValid = false; // This is a simple validation, you can expand it as needed
    //         }
    //     });
    //     return isValid;
    // }

    collectFormData() {
        const formData = {};
        this.inputs.forEach(input => {
            formData[input.className] = input.value.trim();
        });
        return formData;
    }
}