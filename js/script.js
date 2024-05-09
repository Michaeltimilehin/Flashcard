$(document).ready(function() {
  $("button1").click(function() {
    
    let index = $("button1").index(this);

$(".toxic").hide();
$(".toxic").eq(index).show();
$(".toxic").eq(index).find("ul").toxic(); 
   
  });
});