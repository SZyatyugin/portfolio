let show_section=()=>{
    function get(elem) {
        return document.querySelector(elem)
    }
    function getAll(elem){
        return document.querySelectorAll(elem)
    }
window.addEventListener('scroll',show_element);

function show_element(e){
   
   if(window.pageYOffset>100){
  
    Object.values(getAll('.article-1_text')).map((elem)=>{
        elem.classList.add('show')
    })
    get('.header_circle_button').style.opacity=0;
   }else{
       get('.header_circle_button').removeAttribute('style');
   }
   if(window.pageYOffset>(150)){
    Object.values(getAll('.article-2_text')).map((elem)=>{
        elem.classList.add('show')
    })
   }
   if(window.pageYOffset>(300)){
    Object.values(getAll('.article-3_text')).map((elem)=>{
        elem.classList.add('show')
    })
   }
   if(window.pageYOffset>(800)){
    get('.section__portfolio').classList.add('show');
   }
   if(window.pageYOffset>(1100)){
    get('.section__services').classList.add('show');
    
   }
}
}
export default show_section;