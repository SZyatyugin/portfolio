
let nav_bar_sticky = () => {
    function get(elem) {
        return document.querySelector(elem)
    }
    window.addEventListener('scroll', check_coords_place_navbar);

    function check_coords_place_navbar() {
        if(document.body.clientWidth>767){
            if (window.pageYOffset > 100) {
                get('.nav_bar').classList.add("fixed");
            } else {
                get('.nav_bar').classList.remove('fixed');
            }
            if (window.pageYOffset > 20) {
                get('.message').style.transform = `translateY(-${window.pageYOffset}px)`
            } else {
                get('.message').removeAttribute('style')
            }
        }
    }
    get('.header_circle_button').addEventListener('click', scroll_down_click_circle);

    function scroll_down_click_circle() {
       
        get('.section__about').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        get('.section__about').classList.add('move');
    }

    get('.menu').addEventListener('click',scroll_to_element);

function scroll_to_element(e){

   if(e.target.innerHTML=='HOME'){
    get('.header').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
   }else if(e.target.innerHTML=="ABOUT"){
   
    get('.section__about').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
    get('.section__about').classList.add('move');
   }else if(e.target.innerHTML=="PORTFOLIO"){
    get('.section__portfolio').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    }); 
   }else if(e.target.innerHTML=="SERVICES"){
    get('.section__services').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    }); 
   }else if(e.target.innerHTML=='CONTACT'){
    get('.footer').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    }); 
   }
 
}
get('.fa-bars').addEventListener('click',show_menu);
function show_menu(e){
    console.log(e)
    if(e.target.className=='menu_close'){
        get('.menu').classList.remove('active')
    }else{
        if(get('.menu').classList.contains('active')){
            get('.menu').classList.remove('active')
        }else{
            get('.menu').classList.add('active');
        }
    }
}
get('.menu_close').addEventListener('click',show_menu);

}



export default nav_bar_sticky;