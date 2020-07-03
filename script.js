jQuery("body").ready(function($J) {

	

    var domain = 'http://localhost',

        bodyH;



    if (window.location !== window.parent.location) {

        domain = getDomain(document.referrer);

    }



    function getDomain(link) {

        var iframeDomain,

            parser = document.createElement('a');



        parser.href = link;

        iframeDomain = parser.protocol + '//' + parser.hostname;



        return iframeDomain;

    }



    if (window.addEventListener) {

        addEventListener('message', listener, false);

    } else {

        attachEvent('onmessage', listener);

    }



    function listener(event) {

        if ((event && event.data === 'need_height') || !event) {

            message = {

                type: 'resize',

                height: $J('body').height() + 50

            };

            window.parent.postMessage(JSON.stringify(message), domain);

            /* Add the urls where the C69-10 component is used */

            window.parent.postMessage(JSON.stringify(message), 'https:// nl-nl.qa.heliosrenault.net/');

            window.parent.postMessage(JSON.stringify(message), 'https:// nl-nl.uat.heliosrenault.net/');

            window.parent.postMessage(JSON.stringify(message), 'https:// nl-nl.prod.heliosrenault.net/');

            window.parent.postMessage(JSON.stringify(message), 'https://nl-nl.prod.heliosnissan.net/');

            window.parent.postMessage(JSON.stringify(message), 'https://www.nissan.nl/');

            window.parent.postMessage(JSON.stringify(message), 'https://author.qa.heliosalliance.net/');

            window.parent.postMessage(JSON.stringify(message), 'https://author.uat.heliosalliance.net/');

            window.parent.postMessage(JSON.stringify(message), 'https://author.prod.heliosalliance.net/');

            window.parent.postMessage(JSON.stringify(message), 'https://author.prod.heliosnissan.net/');

        }

    }



    function scrollTopIframe(event) {

        var message = {

            type: 'scrolltopiframe'

        };

        window.parent.postMessage(JSON.stringify(message), domain);

        /* Add the urls where the C69-10 component is used */

        window.parent.postMessage(JSON.stringify(message), 'https:// nl-nl.qa.heliosrenault.net/');

        window.parent.postMessage(JSON.stringify(message), 'https:// nl-nl.uat.heliosrenault.net/');

        window.parent.postMessage(JSON.stringify(message), 'https:// nl-nl.prod.heliosrenault.net/');

        window.parent.postMessage(JSON.stringify(message), 'https://nl-nl.prod.heliosnissan.net/');

        window.parent.postMessage(JSON.stringify(message), 'https://www.renault.fr/');

        window.parent.postMessage(JSON.stringify(message), 'https://author.qa.heliosalliance.net/');

        window.parent.postMessage(JSON.stringify(message), 'https://author.uat.heliosalliance.net/');

        window.parent.postMessage(JSON.stringify(message), 'https://author.prod.heliosalliance.net/');

        window.parent.postMessage(JSON.stringify(message), 'https://author.prod.heliosnissan.net/');

    }



    function checkForNewHeight() {

		

        var newBodyH = $J('body').height();

        if (bodyH !== newBodyH) {

            bodyH = newBodyH;

            listener();

        }

    }



    $J('[data-scrolltop-iframe]').on('click', scrollTopIframe);



    setInterval(checkForNewHeight, 250);



});
