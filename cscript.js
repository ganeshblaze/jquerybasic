  
   $(document).ready(function(){
   	$("#accordian div").hide();
   	$("#accordian h2").click(function(){


      $(this)
           .next("#accordian div").slideDown("slow")
           .siblings("#accordian div").slideUp("slow");

   	});
});


 
  