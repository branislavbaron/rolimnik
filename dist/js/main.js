   $().ready(function(){

// DOM CACHE

        var $packages = $('.packages');
        var $basicTraining = $('.basic-training');
        var $cardSwapIcon = $('.card-swap');

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

    });