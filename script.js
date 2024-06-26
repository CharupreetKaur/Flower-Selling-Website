window.onload = function() {
    const imageHeight = document.getElementById('contactImage').offsetHeight;
    const form = document.querySelector('.contact .row form');
    form.style.height = `${imageHeight}px`;
};

window.onload = function() {
    const image = document.getElementById('contactImage');
    const form = document.querySelector('.contact .row form');

    function adjustFormWidth() {
        const windowWidth = window.innerWidth;
        const formWidth = (windowWidth > 768) ? '40%' : '90%'; // Adjust width based on window size
        form.style.width = formWidth;
    
        const imageHeight = image.offsetHeight;
        form.style.height = `${imageHeight}px`; // Set form height to match image height
    }    

    adjustFormWidth();

    window.addEventListener('resize', adjustFormWidth);
};



