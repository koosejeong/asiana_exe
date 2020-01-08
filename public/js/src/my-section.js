// my-section.js
(function($){
  const viewBox = $('#viewBox');
  const slideArea = viewBox.children('.slide-area');
  const slideUl = slideArea.children('ul');
  const slideLi = slideUl.children('li');
  const slideA = slideLi.children('a');

  let url = `./public/img/section/`;
  for(let i=0; i<slideLi.length; i++){
    slideLi.eq(i).children(slideA).css({backgroundImage:`url(${url + 'slide0'+(i+1)+'.jpg'})`,
    backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
  }
})(jQuery);
