$(document).ready(function () {
	
    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800,
        type: 'image',
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                locked: true
            },
            buttons: {
                // Remove download button from Fancybox
                download: false
            }
        },
        beforeShow: function(){
            this.title = $(this.element).data("caption");
        },
        afterLoad: function() {
            // Disable right-click in lightbox
            $('.fancybox-wrap').on('contextmenu', function(e) {
                e.preventDefault();
                return false;
            });
            // Disable image dragging in lightbox
            $('.fancybox-image').on('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
            // Disable image selection
            $('.fancybox-image').css({
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                '-webkit-user-drag': 'none',
                '-khtml-user-drag': 'none',
                '-moz-user-drag': 'none',
                '-o-user-drag': 'none',
                'user-drag': 'none'
            });
            // Additional protection: prevent image save via browser menu
            $('.fancybox-image').on('contextmenu', function(e) {
                e.preventDefault();
                return false;
            });
        }
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function (event) {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(globalThis).scroll(function () {
            const scroll = $(globalThis).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    const share_bar = document.getElementsByClassName('share-bar');
    let po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (const bar of share_bar) {
        const html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(globalThis.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(globalThis.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';
        bar.innerHTML = html;
        bar.style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    const myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Matrimonio Matteo e Aqila",

            // Event start date
            start: new Date('Sept 19, 2025 11:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Sept 20, 2025 00:00'),

            // Event Address
            address: 'Palazzo Albornoz, Cesena',

            // Event Description
            // description: "We can't wait to see you on our big day. For any queries or issues contact Mr. Amit Roy at +91 9435021804 or +91 7086018971."
        }
    });

    $('#add-to-cal').html(myCalendar);

    /********************** CONFERMA PRESENZA **********************/
    $('#confirm-form').on('submit', function (e) {
        e.preventDefault();
        const data = $(this).serialize();

        if ($('#honeypot').val() !== "") {
            return;
        }

        $('#confirm-alert').html(alert_markup('info', '<strong>Un attimo di pazienza!</strong> Stiamo salvando la conferma.'));

        $.post('https://script.google.com/macros/s/AKfycbwCQGaR3t73uKV2J8gxD0AL38Kz-tWGk5w2ZQQDK0k0kSDWj2515HeQoemGPj4kAVAXVw/exec', data)
            .done(function (data) {
                console.log(data);
                $('#confirm-alert').html('');
                document.getElementById('confirm-modal').showModal();
            })
            .fail(function (data) {
                console.log(data);
                $('#confirm-alert').html(alert_markup('danger', '<strong>Errore!</strong> Qualcosa è andato storto, riprova.'));
            });
    });


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        const data = $(this).serialize();
		
		if($('#honeypot').val()!==""){
			return;
		}

        $('#alert-wrapper').html(alert_markup('info', '<strong>Un attimo di pazienza!</strong> Stiamo salvando i tuoi dati.'));

            $.post('https://script.google.com/macros/s/AKfycbxMVh4FtN8rdoC8l1JCTEeQ8N_PtKhV4T0qWlBpLukV3Ko1RT1vpO_coergHwsPL_XQ/exec', data)
                .done(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html('');
                    document.getElementById('rsvp-modal').showModal();
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
        // }
    });

    // Close button handlers for native dialog elements
    $('#confirm-modal .close').on('click', function() {
        document.getElementById('confirm-modal').close();
    });
    
    $('#rsvp-modal .close').on('click', function() {
        document.getElementById('rsvp-modal').close();
    });

});


/********************** Extras **********************/
function initMap() {
      let castello = { lat: 44.0631557, lng: 12.2934148 }; // <-- sostituisci qui

      let map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: castello,
        scrollwheel: false
      });

      // Marker is created and added to map (side effect via map property)
      void new google.maps.Marker({ // NOSONAR - marker instantiation has side effect
        position: castello,
        map: map,
        title: 'Castello Montenovo'
      });
      // eslint-disable-next-line no-unused-vars
      // Marker variable kept for clarity; marker is used via side effect (added to map)
    }


function initBBSRMap() {
    let la_fiesta = {lat: 44.081114, lng: 12.14323};
    let map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    // Marker is created and added to map (side effect via map property)
    void new google.maps.Marker({ // NOSONAR - marker instantiation has side effect
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
// NOSONAR - MD5 algorithm requires specific argument order for cryptographic correctness
const MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        let lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        return (x ^ y ^ z);
    }

    function I(x, y, z) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        let lWordCount;
        const lMessageLength = string.length;
        const lNumberOfWords_temp1 = lMessageLength + 8;
        const lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        const lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        const lWordArray = new Array(lNumberOfWords - 1);
        let lBytePosition = 0;
        let lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            // Using codePointAt for better Unicode support, but charCodeAt works for ASCII
            const codePoint = string.codePointAt(lByteCount);
            lWordArray[lWordCount] = (lWordArray[lWordCount] | ((codePoint ?? 0) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        let WordToHexValue = "";
        let WordToHexValue_temp = "";
        let lByte;
        let lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            // Using slice instead of deprecated substr
            WordToHexValue = WordToHexValue + WordToHexValue_temp.slice(-2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) { // NOSONAR - Helper function kept inside MD5 for encapsulation
        string = string.replace(/\r\n/g, "\n"); // NOSONAR - replaceAll doesn't work with regex, must use replace with global flag
        let utftext = "";

        for (let n = 0; n < string.length; n++) {
            // Using codePointAt for better Unicode support
            const codePoint = string.codePointAt(n);
            const c = codePoint ?? 0;

            if (c < 128) {
                utftext += String.fromCodePoint(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCodePoint((c >> 6) | 192);
                utftext += String.fromCodePoint((c & 63) | 128);
            }
            else {
                utftext += String.fromCodePoint((c >> 12) | 224);
                utftext += String.fromCodePoint(((c >> 6) & 63) | 128);
                utftext += String.fromCodePoint((c & 63) | 128);
            }

        }

        return utftext;
    };

    let x;
    let k, AA, BB, CC, DD, a, b, c, d;
    const S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    const S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    const S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    const S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    // NOSONAR start - MD5 algorithm requires specific argument order for cryptographic correctness
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        // eslint-disable-next-line sonarjs/argument-order
        // MD5 algorithm requires specific argument order for cryptographic correctness
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        // eslint-disable-next-line sonarjs/argument-order
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        // eslint-disable-next-line sonarjs/argument-order
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB); // NOSONAR - MD5 algorithm requires specific argument order
        // eslint-disable-next-line sonarjs/argument-order
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF); // NOSONAR
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A); // NOSONAR
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613); // NOSONAR
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501); // NOSONAR
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8); // NOSONAR
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF); // NOSONAR
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1); // NOSONAR
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE); // NOSONAR
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122); // NOSONAR
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193); // NOSONAR
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E); // NOSONAR
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821); // NOSONAR
        // NOSONAR - MD5 algorithm requires specific argument order
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562); // NOSONAR
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340); // NOSONAR
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51); // NOSONAR
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA); // NOSONAR
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D); // NOSONAR
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453); // NOSONAR
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681); // NOSONAR
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8); // NOSONAR
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6); // NOSONAR
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6); // NOSONAR
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87); // NOSONAR
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED); // NOSONAR
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905); // NOSONAR
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8); // NOSONAR
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9); // NOSONAR
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A); // NOSONAR
        // NOSONAR - MD5 algorithm requires specific argument order
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942); // NOSONAR
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681); // NOSONAR
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122); // NOSONAR
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C); // NOSONAR
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44); // NOSONAR
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9); // NOSONAR
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60); // NOSONAR
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70); // NOSONAR
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6); // NOSONAR
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA); // NOSONAR
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085); // NOSONAR
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05); // NOSONAR
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039); // NOSONAR
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5); // NOSONAR
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8); // NOSONAR
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665); // NOSONAR
        // NOSONAR - MD5 algorithm requires specific argument order
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244); // NOSONAR
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97); // NOSONAR
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7); // NOSONAR
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039); // NOSONAR
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3); // NOSONAR
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92); // NOSONAR
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D); // NOSONAR
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1); // NOSONAR
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F); // NOSONAR
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0); // NOSONAR
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314); // NOSONAR
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1); // NOSONAR
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82); // NOSONAR
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235); // NOSONAR
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB); // NOSONAR
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391); // NOSONAR
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    // NOSONAR end

    let temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};