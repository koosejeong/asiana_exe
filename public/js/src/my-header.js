// my-header.js
(function($){
  const headBox = $('#headBox');
  const firstNav = headBox.children('#first-gnb');
  const firstWrap = firstNav.children('.first-wrap');
  const genesysUl = firstWrap.children('#genesys-ul');
  const genesysLi = genesysUl.children('li');
  const widthLi = genesysLi.width();
  const underLine = firstWrap.children('.under-line');
  const genesysLink = genesysLi.children('a');
  const menuUl = genesysLink.next('ul');
  
  
  const geneLioff = [];
  const geneUlOff = genesysUl.offset().left;
  console.log(geneUlOff);
  for(let i=0; i<genesysLi.length; i++){
    geneLioff[i] =  genesysLi.eq(i).offset().left;
  }
  console.log(geneLioff);

  underLine.width(widthLi + 'px');

  genesysLink.on('mouseenter focus', function(){
    menuUl.stop().slideUp();
    $(this).next('ul').stop().slideDown();

    underLine.fadeIn();
    let i = $(this).parent('li').index();
    let underOff = (geneLioff[i] - geneUlOff) + 'px';
    underLine.animate({left:underOff});

  });
  menuUl.on('mouseleave', function(){
    menuUl.stop().slideUp();
    underLine.fadeOut();
  });



})(jQuery);