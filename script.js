

const form = document.getElementById('contactForm');
const thankMsg = document.getElementById('thankMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                thankMsg.style.display = 'block';
                form.reset();
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        })
        .catch(error => {
            alert('Oops! There was a problem submitting your form.');
        });
});
