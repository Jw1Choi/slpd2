function dzie111tion() {


     if ($('#agree11').is(":checked")==true)
 {
               
  $('#quest00_1').prop("disabled", false);
  $('#start').css({transition:"1s"});
      $('#start').css({background:"#1b1b1b"});
      $('#start').css({border:"1px solid #fff"});
      $('#start').css({color:"#fff"});
      $('#start').css({cursor:"pointer"});
      $('#alert_41').css({transition:"1s"});
      $('#alert_41').css({color:"#fff"});
      $('#alert_41').text('　');
}
else {
    
      $('#quest00_1').prop("disabled", true);
      $('#start').css({transition:"1s"});
      $('#start').css({background:"transparent"});
      $('#start').css({border:"1px solid #1b1b1b"});
      $('#start').css({color:"#1b1b1b"});
      $('#start').css({cursor:"unset"});
      $('#alert_41').css({transition:"1s"});
      $('#alert_41').css({color:"#fff"});
      $('#alert_41').text('개인정보동의를 확인하세요.');
  }
}

 

   $(function(){
  $('#agree11').bind("click keyup", dzie111tion);
})