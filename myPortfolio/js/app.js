//Preloader
$(window).load(function () {
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
    $('body').removeClass('noScroll');
});
$(document).foundation()
$(document).ready(function () {
    //Função para setar o circulo e valor das habilidades
    $(function () {
        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#4527A0',
            trackColor: '#d9d9d9',
            scaleColor: false,
            lineCap: 'round',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function () {
            chart.update(Math.random() * 200 - 100);
        });
    });
    //Text Warp
    $('#bruno').circleType({ radius: 100 });
    $('#lollato').circleType({ radius: 100, dir: -1 });
    //ScrollReveal
    window.sr = ScrollReveal();
    sr.reveal('.reveal1', { viewFactor: '0.5', duration: 500 });
    sr.reveal('.reveal2', { origin: 'left', distance: '200px', scale: '0.2', duration: 500, delay: 100 });
    sr.reveal('.reveal3', { origin: 'top', distance: '50px', scale: '0.1', duration: 500, delay: 300 });
    sr.reveal('.reveal4', { origin: 'right', distance: '200px', duration: 500, delay: 600 });
    sr.reveal('.reveal5', { origin: 'right', distance: '200px', duration: 500, delay: 700 });
    sr.reveal('.reveal6', { origin: 'bottom', distance: '200px', duration: 500, delay: 300 });

    sr.reveal('.formacoes1', { origin: 'left', distance: '200px', duration: 300, delay: 100 });
    sr.reveal('.formacoes2', { origin: 'right', distance: '200px', duration: 300, delay: 300 });
    sr.reveal('.formacoes3', { origin: 'left', distance: '200px', duration: 300, delay: 600 });
    sr.reveal('.formacoes4', { origin: 'right', distance: '200px', duration: 300, delay: 900 });

    sr.reveal('.inte1', { origin: 'left', distance: '200px', scale: { direction: 'bottom', power: '5%' }, duration: 500, delay: 1200 });
    sr.reveal('.inte2', { origin: 'left', scale: '0.1', distance: '200px', duration: 300, delay: 1500 });
    sr.reveal('.inte3', { origin: 'bottom', distance: '200px', duration: 300, delay: 1800 });
    sr.reveal('.inte4', { origin: 'up', distance: '200px', duration: 300, delay: 2100 });

    sr.reveal('.skills', { origin: 'right', distance: '100vw', duration: 500 }, 100);

    sr.reveal('.port1', { easing: 'cubic-bezier(.17,.67,.83,.67)', duration: 400 }, 200);

    sr.reveal('.social1', { easing: 'cubic-bezier(.17,.67,.83,.67)', duration: 300, delay: 100 });
    sr.reveal('.social2', { origin: 'bottom', distance: '100vh', duration: 300 }, 100);

    sr.reveal('.cont1', { origin: 'left', distance: '100vw', duration: 600, delay: 500 });
    sr.reveal('.cont2', { scale: 1.2, opacity: 1, duration: 400, delay: 100 });
    sr.reveal('.cont3', { origin: 'right', distance: '100vw', duration: 600, delay: 500 });

    sr.reveal('.form', { origin: 'right', opacity: 1, distance: '100vw', duration: 1000 }, 200)

    sr.reveal('footer', { origin: 'left', distance: '100vw', duration: 1000 })
    sr.reveal('footer h6', { container: 'footer', rotate: { y: 180 }, duration: 1000, delay: 1000 });

    sr.reveal('.up', { container: 'footer', origin: 'bottom', distance: '100vh', duration: 800, delay: 1200, });
    sr.reveal('#btnOffCanvas', { origin: 'bottom', distance: '100vh', duration: 800 });

    //Slider
    $("#home").backstretch(["../img/bghome1.jpeg", "../img/bgHome2.jpeg", "../img/bgHome3.jpg"], { duration: 4000, fade: 2500 });

    
    $(".input").change(function () {
        var x, y, z, v;
        var nome = $("#nome").val();
        var email = $("#email").val();
        var assunto = $("#assunto").val();
        var msg = $("#msg").val();
        if (nome.length > 0 && /^[a-zA-Z]*$/g.test(nome)) {
            y = 1;
        }
        else {
            y = 2;
        }
        if (email.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            z = 1;
        }
        else {
            z = 2;
        }
        if (assunto.length > 0) {
            x = 1;
        }
        else {
            x = 2;
        }
        if (msg.length > 0) {
            v = 1;
        }
        else {
            v = 2;
        }
        if (y == 1 && z == 1 && x == 1 && v == 1) {
            $("#enviar").attr("disabled", false);
        }
        else {
            $("#enviar").attr("disabled", true);
        }
    });
});