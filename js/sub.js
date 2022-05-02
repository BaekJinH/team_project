// window.addEventListener("wheel",function(e){
//     e.preventDefault();
//   },{passive:false});
  
//   var $html = $("html");
//   var page = 1;
//   var lastPage = $(".content").length;
//   $html.animate({scrollTop:0},10);
  
//   $(window).on("wheel", function (e) {
//     if ($html.is(":animated")) return;
  
//     if (e.originalEvent.deltaY > 0) {
//       if (page == lastPage) return;
  
//       page++;
//     } else if (e.originalEvent.deltaY < 0) {
//       if (page == 1) return;
  
//       page--;
//     }
//     var posTop = (page - 1) * $(window).height();
  
//     $html.animate({ scrollTop: posTop });
//   });
  
  
//   $(window).scroll(function(){
//     var ws = $(this).scrollTop();
  
//     if(ws>0){
//         $("#pos1").css({"background-color":"#fff"});
//         $(".gnb > li:not(#pos1)").css({"background-color":"rgba(255, 255, 255, 0.493)"});
//     }
  
//     if(ws>500){
//         $("#pos2").css({"background-color":"#fff"});
//         $(".gnb > li:not(#pos2)").css({"background-color":"rgba(255, 255, 255, 0.493)"});
//     }
  
//     if(ws>1500){
//       $("#pos3").css({"background-color":"#fff"});
//       $(".gnb > li:not(#pos3)").css({"background-color":"rgba(255, 255, 255, 0.493)"});
//     }
  
//     if(ws>2500){
//       $("#pos4").css({"background-color":"#fff"});
//       $(".gnb > li:not(#pos4)").css({"background-color":"rgba(255, 255, 255, 0.493)"});
//     }
  
//     if(ws>3500){
//       $("#pos5").css({"background-color":"#fff"});
//       $(".gnb > li:not(#pos5)").css({"background-color":"rgba(255, 255, 255, 0.493)"});
//     }
  
//     if(ws>4500){
//       $("#pos6").css({"background-color":"#fff"});
//       $(".gnb > li:not(#pos6)").css({"background-color":"rgba(255, 255, 255, 0.493)"});
//     }
//   });
  
  
// $(document).ready(function($) {

//     $(".scroll").click(function(event){         
  
//             event.preventDefault();
  
//             $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  
//     });
// });
// function mFunc(){
//     if(document.documentElement.scrollTop > 50){
//         document.getElementsByClassName('scroll1').className='.scroll1';
//     }else{
//         document.getElementsByClassName('scroll1').className=''
//     }
// }

// function mFunc(){
//     if(document.documentElement.scrollTop > 50){
//         document.getElementsByClassName('scroll2').className='.scroll2';
//     }else{
//         document.getElementsByClassName('scroll2').className=''
//     }
// }

// function mFunc(){
//     if(document.documentElement.scrollTop > 50){
//         document.getElementsByClassName('scroll3').className='.scroll3';
//     }else{
//         document.getElementsByClassName('scroll3').className=''
//     }
// }

// document.querySelector('scroll1').addEventListener('click',e=>{
//     document.querySelector('.container').scrollIntoView({behavior:'smooth'});
// });

// document.querySelector('scroll2').addEventListener('click',e=>{
//     document.querySelector('.yearpass').scrollIntoView({behavior:'smooth'});
// });

// document.querySelector('scroll3').addEventListener('click',e=>{
//     document.querySelector('.promotion').scrollIntoView({behavior:'smooth'});
// });






// const btn=document.querySelectorAll('scroll_container > div');
// const target= document.querySelector('.container');
// const target_top = target.getBoundingClientRect().height;

// btn.forEach(_btn =>{
//     _btn.addEventListener('click', (e)=>{
//         e.preventDefault();
        
//         const num = _btn.innerText;
        
//         window.scroll({top : ((num-1)*target_top), behavior: 'smooth'});
// })



function onday(){
    window.location.href='#main1'
}
function oneyear(){
    window.location.href='#yearpass'
}
function promo(){
    window.location.href='#promotion'
}

function Buttontoggle(){
    document.getElementsByClassName('sub_btn').click=function(){
    }
}