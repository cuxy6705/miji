// JavaScript Document


$(document).ready(function(){			
 
  

      $('.banner').bxSlider({
        

          maxSlides: 1,
      
          minSlides: 1,
      
        controls: false,
      
          infiniteLoop: true,
      
          auto: true,
      
        pause: 5000
      
      });
      


      $("#m").click(function () {
        $("#nav").slideToggle("slow");
      });


      slider= $('#wheels').bxSlider({

        maxSlides: 5,

        minSlides: 1,

        controls: true,

        infiniteLoop: false,
        hideControlOnEnd:false,

        responsive:true,
        
      });

      $('.bannera').bxSlider({

        maxSlides: 1,
    
        minSlides: 1,
    
        controls: true,
    
        infiniteLoop: true,

        auto: false, 
        nextSelector: "#feed-next-btn1",
        pagerCustom: '#bannerab',
    
        
      });
      
      $('.bannerc').bxSlider({

        mode: 'fade',

        maxSlides: 1,
    
        minSlides: 1,

        controls: true,
        
        slideWidth: 1008,
        nextSelector: "#feed-next-btn",
        prevSelector: "#feed-prev-btn",
        pagerCustom:'#page-three-button',
        auto: false, 
        

        
        
      });


      $('.finishes').bxSlider({
        
        slideWidth: 1850,
        maxSlides: 1,
    
        minSlides: 1,
    
        controls: false,

        pagerCustom:'#finishes-button',
    
        infiniteLoop: true,
    
        auto: false
      });
      
        $('#t1-b').click(function(){
         $('html,body').animate({scrollTop:$('#t1-1').offset().top}, 800); 
        }); 
        $('#t2-b').click(function(){
          $('html,body').animate({scrollTop:$('#t2-2').offset().top}, 800); 
         }); 
         $('#t3-b').click(function(){
          $('html,body').animate({scrollTop:$('#t3-3').offset().top}, 800); 
         }); 
         $('#t4-b').click(function(){
          $('html,body').animate({scrollTop:$('#t4-4').offset().top}, 800); 
         }); 


    
      $(".hover_bottom").hover(function(){
        if($(window).width()>1024){
          $(".wheelstop").css('visibility','visible');
          $(".wheelstop").fadeIn();
          $("#transfor").fadeIn();
        }
       });       

       $("#www").hover(function(){
        $(".wheelstop").fadeOut();
        $("#transfor").fadeOut();
      });

      $(".framework").hover(function(){
        $(".wheelstop").fadeOut();
        $("#transfor").fadeOut();
      });
      $(".p-detail-outbox").hover(function(){
        $(".wheelstop").fadeOut();
        $("#transfor").fadeOut();
      });
      $(".leave").hover(function(){
        $(".wheelstop").fadeOut();
        $("#transfor").fadeOut();
      });
      $(".amf4-main").hover(function(){
        $(".wheelstop").fadeOut();
        $("#transfor").fadeOut();
      });





      $("#p-detail-span1").click(function(){
        $("#p-detail-span0").text("MATTE GREY");
      });
      $("#p-detail-span2").click(function(){
        $("#p-detail-span0").text("MATTE SPACE");
      });
      $("#p-detail-span3").click(function(){
        $("#p-detail-span0").text("MATTE BLACK");
      });
      $("#p-detail-span4").click(function(){
        $("#p-detail-span0").text("MATTE RED");
      });
      $("#p-detail-span5").click(function(){
        $("#p-detail-span0").text("MATTE BLUE");
      });
      $("#p-detail-span6").click(function(){
        $("#p-detail-span0").text("MATTE YELLOW");
      });
      $("#p-detail-span7").click(function(){
        $("#p-detail-span0").text("MATTE BLACK");
      });
      $("#p-detail-span8").click(function(){
        $("#p-detail-span0").text("MATTE RED");
      });
      $("#bji").click(function(){
        $("#p-detail-span0").text("MATTE WHITE");
      });


      


     
        
});
  


  $.event.add(window, "resize", function() {
    $("#nav").css("display","");
    slider.reloadSlider();
    slider.goToSlide(0);
   
    
});

function totop()
      {
        $(window).scroll(function(e) {
          
          if($(window).scrollTop()>250)
          $("#totop").fadeIn(1000);
          else
          $("#totop").fadeOut(1000);
         });
     };
     $(function(){
           $("#totop").click(function(e) {
                   $('body,html').animate({scrollTop:0},1000);
           });
         
           totop();
});

CloudZoom.quickStart();
 // glass = CloudZoom.quickStart();//
