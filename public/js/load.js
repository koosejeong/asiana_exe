(function($){
  const body = $('body');
  const wrap = $('#wrap');

  //navigator area ===========

  wrap.append('<header id="headBox"></header>');
  const headBox = $('#headBox');

  const jsLink = (temp) => {
    return body.append(`<script src="./public/js/src/${temp}.js"></script>`);
  }
  headBox.load('./public/html/temp/my-header.html', () => {
    return jsLink('my-header');
  });

  //indicator area ===========

  wrap.append('<div id="indiBox"></div>');
  const indiBox = $('#indiBox');
  indiBox.load('./public/html/temp/my-indi.html', () => {
    return jsLink('my-indi');
  });

  //slide area ===============

  wrap.append('<section id="viewBox"></section>');
  const viewBox = $('#viewBox');
  viewBox.load('./public/html/temp/my-section.html', () => {
    return jsLink('my-section');
  });

  //reserve area =============

  wrap.append('<article id="reserveBox"></article');
  const reserBox = $('#reserveBox');
  reserBox.load('./public/html/temp/my-reserve.html', () => {
    return jsLink('my-reserve');
  });

  //check in area ============

  wrap.append('<article id="checkInBox"></article>');
  const checkInBox = $('#checkInBox');
  checkInBox.load('./public/html/temp/my-checkIn.html', () => {
    return jsLink('my-checkIn')
  });

  //airport time area ========

  wrap.append('<article id="timeCheckBox"></article>');
  const timeCheckBox = $('#timeCheckBox');
  timeCheckBox.load('./public/html/temp/my-timeCheck.html', () => {
    return jsLink('my-timeCheck');
  });

  //event area ===============

  wrap.append('<aside id="eventBox"></aside>');
  const eventBox = $('#eventBox');
  eventBox.load('./public/html/temp/my-event.html', () => {
    return jsLink('my-event');
  });

  //footer area ==============

  wrap.append('<footer id="footBox"></footer>');
  const footBox = $('#footBox');
  footBox.load('./public/html/temp/my-footer.html', () => {
    return jsLink('my-footer');
  });

})(jQuery);