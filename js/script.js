sections = document.querySelectorAll('section');
navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top= window.scrollY;
        let offset= sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');
        
        if (top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('activo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            });
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}