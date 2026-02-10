// let t=document.getElementById('t')
// t.style.backgroundColor='red'
// window.onscroll=function(){
//     if ( scrollY >=400) {
//         t.style.display='block'
//     }
//     else{
//         t.style.display='none'

//     }
// }
// t.click=function(){
//     scroll({
//         left:0,
//         top:0,
//         behavior:'smooth'
//     })
// }

$(document).ready(function(){
    $(window).scroll(function(){
         if ($(this).scrollTop()>300){
            $('#t').fadeIn();
         }else{
            $('#t').fadeOut();
         }
         

    });
    $('#t').click(function () {
        $('html, body').animate({scrollTop:0},800);
        return false;
    })
});



