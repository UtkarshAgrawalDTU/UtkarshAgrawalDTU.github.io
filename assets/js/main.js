$("a.btn-lg").hover(function() {
    $("i.know-more").addClass("fa-arrow-down");
    $("i.know-more").removeClass("fa-arrow-right");
  }, function() {
    $("i.know-more").removeClass("fa-arrow-down");
    $("i.know-more").addClass("fa-arrow-right");
  }
);

$('body').scrollspy({ target: '#navbarNav' });

    $('#navbarNav a').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function () {
          window.location.hash = hash;
        });
      }
    });
