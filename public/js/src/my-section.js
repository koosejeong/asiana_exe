// my-section.js
(function($){
  const viewBox = $('#viewBox');
  const slideArea = viewBox.children('.slide-area');
  const slideUl = slideArea.children('.slide-ul');
  const slideLi = slideUl.children('li');
  const slideA = slideLi.children('a');

  const indi = slideArea.children('.indicator');
  const indiUl = indi.children('ul');
  const indiLi = indiUl.children('li');
  const indiA = indiLi.children('a');

  const play = indi.children('.play-area');
  const btn = play.children('button');

  let myN = 0;
  let leng = slideLi.length;

  let url = `./public/img/section/`;
  for(let i=0; i<slideLi.length; i++){
    slideLi.eq(i).children(slideA).css({backgroundImage:`url(${url + 'slide0'+(i+1)+'.jpg'})`,
    backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
  }

  function SlideAdd(n){
    slideA.parent('li').css({zIndex:0});
    slideA.parent('li').eq(n).css({zIndex:50});
    indiA.removeClass('action');
    indiLi.eq(n).children('a').addClass('action'); //setInterval 함수라서 $(this)가 없으므로
  }
  indiA.on('click', function(e){
    e.preventDefault();
    myN = $(this).parent(indiLi).index();
    SlideAdd(myN);
  });

  let go;
  const goSlide = function(){
    go = setInterval(function(){
      myN++;
      if(myN > leng){
        myN = 0;
      }
      SlideAdd(myN);
    },5000);
  };

  const stopSlide = function(){
    clearInterval(go);
  };
  goSlide();

  btn.on('click focus', function(e){
    e.preventDefault();
    let play = $(this).hasClass('play');
    let pause = $(this).hasClass('pause');
    if(play){
      $('.play').css({display:'none'});
      $('.pause').css({display:'block'});
      goSlide();
    } else if(pause){
      $('.play').css({display:'block'});
      $('.pause').css({display:'none'});
      stopSlide();
    }
  });


})(jQuery);
