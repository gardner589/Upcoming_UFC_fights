$(document).ready(function(){
  $.ajaxSetup({
    headers: {
      'Origin' : '*'
    }
  });
  $.getJSON('http://ufc-data-api.ufc.com/api/v1/us/events').then(function(res){
    $.each(res,function(i,item){
      // console.log(item)
      $('.test').append('<div><div class="tester"><img src="'+item.feature_image+'"/><h2>'+item.title_tag_line+'</h2><h3>'+item.base_title+'</h3><p>'+new Date(item.event_date)+'</p></div></div>')
    })
    $(".test").slick({
      dots: true,
      speed: 500,
      infinite: true
    })
  })
})
