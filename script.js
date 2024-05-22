document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('get-started-btn');

    getStartedBtn.addEventListener('click', function() {
        alert('Get Started button clicked! Redirecting to the sign-up page...');
        // Here you can add the code to redirect to the sign-up page
        // window.location.href = '/sign-up';
    });

    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Thank you for subscribing with ${email}`);
        // Here you can add code to handle form submission, like sending the email to the server
    });
});
