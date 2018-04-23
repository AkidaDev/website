(function (window, document, $) {

  function dot(selected) {
    return (selected === "selected") ? "◍" : "◎";
  }

  function selectDot(element) {
    $(".nav-helper li").each(function () {
      this.innerHTML = dot("unselect");
    });
    $(element).html(dot("selected"));
  }

  $(".nav-helper li").on('click tap', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.getAttribute('data-target')).offset().top
    }, 600);
    selectDot(this);
    return false;
  });

  $(".nav-primary-links li a").on('click tap', function (e) {
    e.preventDefault();

    var loc = $(this).data('target');
    var element = $(".nav-helper").find($('[data-target="' + loc + '"]'));

    $('html, body').animate({
      scrollTop: $(loc).offset().top
    }, 600);

    selectDot(element);
    return false;
  })

})(window, document, jQuery);


window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-40500632-14');
