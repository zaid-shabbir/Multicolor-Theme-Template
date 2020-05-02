// Change theme function
document.addEventListener('DOMContentLoaded' , () => {
    var ct = localStorage.getItem('currenttheme') || 'light';
    var theme = document.getElementsByTagName('body');
    theme[0].classList.remove('light');
    theme[0].classList.remove('dark');
    theme[0].classList.add(ct);
    var toggletheme = document.getElementById('toggle');
    toggletheme.addEventListener('click', () => {
        if(theme[0].classList.contains('dark')){
            theme[0].classList.add('light');
            theme[0].classList.remove('dark');
            localStorage.setItem('currenttheme', 'light');
        }
        else{
            theme[0].classList.add('dark');
            theme[0].classList.remove('light');
            var c = localStorage.setItem('currenttheme', 'dark');
        }
    });
    var colorbtn1 = document.getElementById('myCanvas1');
    colorbtn1.addEventListener('click' , () =>{
        theme[0].classList.add('red');
        theme[0].classList.remove('green');
        theme[0].classList.remove('blue');


    });
    var colorbtn2 = document.getElementById('myCanvas2');
    colorbtn2.addEventListener('click' , () =>{
        theme[0].classList.add('green');
        theme[0].classList.remove('red');
        theme[0].classList.remove('blue');
    });
    var colorbtn3 = document.getElementById('myCanvas3');
    colorbtn3.addEventListener('click' , () =>{
        theme[0].classList.add('blue');
        theme[0].classList.remove('red');
        theme[0].classList.remove('green');
    });
   
});


let trans = () =>{
    document.documentElement.classList.add('transition');
    window.setTimeout(() =>{
        document.documentElement.classList.remove('transition')
    }, 700)
}
