


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for reaching out, ${name}! I'll respond to ${email} soon.`);
    this.reset(); // Reset form fields
});


