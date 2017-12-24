   $().ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
// DOM CACHE

        var $packages = $('.packages');
        var $basicTraining = $('.basic-training');
        var $cardSwapIcon = $('.card-swap');
        var $formControl = $('.form-control');

        $('.carousel').on('slid.bs.carousel', function () {
            $basicTraining.removeClass('active');
          var $drama = $('.carousel-indicators li.active').attr('data-slide-to');
          var $finder = $('.basic-training[data-slide-to="' +$drama +'"]').addClass('active');
        });

        $('.btn-close-hrs').on('click touch', function(event) {
            event.preventDefault();
            $('.working-hours-menu').collapse('hide');
        });

        $packages.waypoint(function(){
        $('.standard').addClass('animated tada');
    }, {
        offset: '30%'
    });

        $cardSwapIcon.on('click', function() {
            $('.card.dark').removeClass('forward');
            $(this).parent().offsetParent().addClass('forward');
        });

        $formControl.on({
          focus: function() {
                if($(this).is('textarea')) {
                  $(this).next().css('top', '-13%');
                } else {
                  $(this).next().css('top', '-35%');
                }
          },
          blur: function() {
                if(!$(this).val()){
                  $(this).next().css('top', '32%');
                }
          }
        });

        // FORM VALIDATION

        var $form = $('#form-contact');
        var $inputs = $('.form-control', $form);
        var $contactSubmitButton = $('#contact-submit-btn', $form);

        $inputs.on('change', function() {
            $(this).parent().find('.floating-label').css('color', 'white');
        });

            $inputs.on('input change keyup', function() {

            var attr = $(this).attr('id');

            if(attr === 'email') {
                var email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var is_email = email_pattern.test($(this).val());

                if($(this).val() && is_email){
                    $(this).removeClass('form-control-danger').addClass('form-control-success');
                    $(this).parent().removeClass('has-danger').addClass('has-success');
                    $(this).removeClass('animated shake');
                    $(this).parent().find('.form-control-feedback').hide();
                }
                else if(!$(this).val()) {
                    $(this).addClass('form-control-danger');
                    $(this).addClass('animated shake');
                    $(this).parent().removeClass('has-success').addClass('has-danger');
                    $(this).parent().find('.form-control-feedback').show().addClass('animated fadeInDown').text('Niste popunili polje!');
                } else {
                    $(this).addClass('form-control-danger');
                    $(this).addClass('animated shake');
                    $(this).parent().addClass('has-danger');
                    $(this).parent().find('.form-control-feedback').show().addClass('animated fadeInDown').text('Niste uneli ispravnu e-mail adresu!');
                }
            } else if(attr === 'phone') {
                var phone_pattern = /^0(6([0-6]|9)){1}((\-)|(\/))?(((\d{6}|\d{7}))|((\d{3}){1}((\-)|(\/))?(\d{3}|\d{4}))|((\d{4}){1}((\-)|(\/))?(\d{3})))$/;
                var is_phone = phone_pattern.test($(this).val());

                if($(this).val() && is_phone){
                    $(this).removeClass('form-control-danger').addClass('form-control-success');
                    $(this).parent().removeClass('has-danger').addClass('has-success');
                    $(this).removeClass('animated shake');
                    $(this).parent().find('.form-control-feedback').hide();
                }
                else if(!$(this).val()) {
                    $(this).addClass('form-control-danger');
                    $(this).addClass('animated shake');
                    $(this).parent().removeClass('has-success').addClass('has-danger');
                    $(this).parent().find('.form-control-feedback').show().addClass('animated fadeInDown').text('Niste popunili polje!');
                } else {
                    $(this).addClass('form-control-danger');
                    $(this).addClass('animated shake');
                    $(this).parent().addClass('has-danger');
                    $(this).parent().find('.form-control-feedback').show().addClass('animated fadeInDown').text('Niste uneli validan broj telefona!');
                }
            } else {
                if(!$(this).val()) {
                    $(this).addClass('form-control-danger');
                    $(this).addClass('animated shake');
                    $(this).parent().removeClass('has-success').addClass('has-danger');
                    $(this).parent().find('.form-control-feedback').show().addClass('animated fadeInDown').text('Niste popunili polje!');
                } else {
                    $(this).removeClass('form-control-danger').addClass('form-control-success');
                    $(this).parent().removeClass('has-danger').addClass('has-success');
                    $(this).removeClass('animated shake');
                    $(this).parent().find('.form-control-feedback').hide();
                }
            } 
          });

              $form.on('submit', function(event) {
                event.preventDefault();
                  var form_data = $form.serializeArray();
                  var error_free = true;

                  for (var input in form_data){
                    var element = $("#"+form_data[input].name);
                    var valid = element.hasClass("form-control-success");
                    var error_element = element.parent();
                    if (!valid){
                        element.addClass('.form-control-feedback');
                        error_element.removeClass('has-success').addClass("has-danger");
                        error_free = false;
                     }
                    else {
                        error_element.removeClass('has-danger').addClass("has-success");
                    }
                  }
                  if (!error_free){
                    event.preventDefault();
                    $('.msg').html('<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '<strong>Niste popunili polja!</strong>' +'</div>').css('display', 'block');
                  }
                  else {
                    $('.msg').html('<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '<strong>Uspešno ste poslali e-mail!</strong>' +'</div>').css('display', 'block');
                    $contactSubmitButton.css('cursor', 'pointer').find('svg').addClass('wobble-to-top-right');
                    $form.submit();
                  }
              });


            var $faqs = $('#faqs');

              $('div[data-toggle="collapse"]', $faqs).on('shown.bs.collapse hide.bs.collapse', function () {
                $(this)
                  .find('[data-fa-processed]')
                  .toggleClass('fa-plus-hexagon')
                  .toggleClass('fa-minus-hexagon');
              });

              $('#navbarNavDropdown').on('show.bs.collapse hide.bs.collapse', function () {
                var $navToggler = $('.navbar-toggle');
                  $navToggler.find('[data-fa-processed]')
                  .toggleClass('fa-bars')
                  .toggleClass('fa-times');
              });

              var $backToTop = $('#backtotop');

                  if ($backToTop.length) {
                      var scrollTrigger = 2560, // px
                          backToTop = function () {
                              var scrollTop = $(window).scrollTop();
                              if (scrollTop > scrollTrigger) {
                                  $backToTop.addClass('show');
                              } else {
                                  $backToTop.removeClass('show');
                              }
                          };
                      backToTop();
                      $(window).on('scroll', function () {
                          backToTop();
                      });
                      $backToTop.on('click', function (e) {
                          e.preventDefault();
                          $('html,body').animate({
                              scrollTop: 0
                          }, 1000);
                      });
                  }

                  $(window).scroll(function() {
                     if ($(this).scrollTop() > 130){
                         $('.nav-cont').addClass("sticky");
                       }
                       else{
                         $('.nav-cont').removeClass("sticky");
                       }
                     });
    });