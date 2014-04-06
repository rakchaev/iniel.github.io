(function($, _) {
$(function() {
    var SITE_URL = '';

    var allFonts = [{
        name: 'Arial',
        image: 'arial.png',
        leftLine: 2,
        rightLine: 410,
        higherLine: 40,
        topLine: 60,
        buttomLine: 133,
        designer: ['Robin Nicholas'],
        released: 1982,
        link: 'http://en.wikipedia.org/wiki/Arial'
    }, {
        name: 'Baskerville Old Face',
        image: 'baskerville_old_face.png',
        leftLine: 1,
        rightLine: 390,
        higherLine: 40,
        topLine: 68,
        buttomLine: 133,
        designer: ['John Baskerville'],
        released: 1757,
        link: 'http://en.wikipedia.org/wiki/Baskerville'
    }, {
        name: 'Bodoni MT',
        image: 'bodoni_mt.png',
        leftLine: 2,
        rightLine: 418,
        higherLine: 40,
        topLine: 71,
        buttomLine: 133,
        designer: ['Giambattista Bodoni'],
        released: 1798,
        link: 'http://en.wikipedia.org/wiki/Bodoni'
    }, {
        name: 'Book Antiqua',
        image: 'book_antiqua.png',
        leftLine: 2,
        rightLine: 415,
        higherLine: 40,
        topLine: 64,
        buttomLine: 133,
        designer: ['Monotype Type Drawing Office'],
        released: 1991,
        link: ''
    }, {
        name: 'Calibri',
        image: 'calibri.png',
        leftLine: 1,
        rightLine: 415,
        higherLine: 40,
        topLine: 59,
        buttomLine: 133,
        designer: ['Lucas de Groot'],
        released: 2005,
        link: 'http://en.wikipedia.org/wiki/Calibri'
    }, {
        name: 'Century',
        image: 'century.png',
        leftLine: 2,
        rightLine: 407,
        higherLine: 40,
        topLine: 66,
        buttomLine: 133,
        designer: ['Morris Fuller Benton'],
        released: 1992,
        link: 'http://en.wikipedia.org/wiki/Century_Type_Family'
    }, {
        name: 'Comic Sans MS',
        image: 'comic_sans_ms.png',
        leftLine: 3,
        rightLine: 433,
        higherLine: 40,
        topLine: 62,
        buttomLine: 133,
        designer: ['Vincent Connare'],
        released: 1995,
        link: 'http://en.wikipedia.org/wiki/Comic_Sans'
    }, {
        name: 'Corbel',
        image: 'corbel.png',
        leftLine: 2,
        rightLine: 415,
        higherLine: 40,
        topLine: 61,
        buttomLine: 133,
        designer: ['Jeremy Tankard'],
        released: 2004,
        link: 'http://en.wikipedia.org/wiki/Corbel_%28typeface%29'
    }, {
        name: 'Franklin Gothic Book',
        image: 'franklin_gothic_book.png',
        leftLine: 1,
        rightLine: 401,
        higherLine: 40,
        topLine: 59,
        buttomLine: 133,
        designer: ['Victor Caruso'],
        released: 1990,
        link: 'http://en.wikipedia.org/wiki/Franklin_Gothic'
    }, {
        name: 'Garamond',
        image: 'garamond.png',
        leftLine: 0,
        rightLine: 419,
        higherLine: 40,
        topLine: 66,
        buttomLine: 133,
        designer: ['Claude Garamond'],
        released: 1991,
        link: 'http://en.wikipedia.org/wiki/Garamond'
    }, {
        name: 'Georgia',
        image: 'georgia.png',
        leftLine: 1,
        rightLine: 403,
        higherLine: 40,
        topLine: 63,
        buttomLine: 133,
        designer: ['Microsoft Corp.'],
        released: 1996,
        link: 'http://en.wikipedia.org/wiki/Georgia_%28typeface%29'
    }, {
        name: 'Gill Sans MT',
        image: 'gill_sans_mt.png',
        leftLine: 2,
        rightLine: 377,
        higherLine: 40,
        topLine: 65,
        buttomLine: 133,
        designer: ['Eric Gill'],
        released: 1991,
        link: 'http://en.wikipedia.org/wiki/Gill_Sans'
    }, {
        name: 'Lucida Sans',
        image: 'lucida_sans.png',
        leftLine: 1,
        rightLine: 425,
        higherLine: 40,
        topLine: 59,
        buttomLine: 133,
        designer: ['Bigelow & Holmes'],
        released: 1993,
        link: 'http://en.wikipedia.org/wiki/Lucida_Sans'
    }, {
        name: 'Minion Pro',
        image: 'minion_pro.png',
        leftLine: 1,
        rightLine: 395,
        higherLine: 41,
        topLine: 64,
        buttomLine: 133,
        designer: ['Robert Slimbach'],
        released: 1990,
        link: 'http://en.wikipedia.org/wiki/Minion_%28typeface%29'
    }, {
        name: 'Myraid Pro',
        image: 'myraid_pro.png',
        leftLine: 0,
        rightLine: 398,
        higherLine: 40,
        topLine: 61,
        buttomLine: 133,
        designer: ['Robert Slimbach'],
        released: 2002,
        link: 'http://en.wikipedia.org/wiki/Myriad_Pro#Myriad_Pro'
    }, {
        name: 'Palatino Linotype',
        image: 'palatino_linotype.png',
        leftLine: 2,
        rightLine: 415,
        higherLine: 40,
        topLine: 65,
        buttomLine: 133,
        designer: ['Hermann Zapf'],
        released: 1981,
        link: 'http://en.wikipedia.org/wiki/Palatino_Linotype'
    }, {
        name: 'Tahoma',
        image: 'tahoma.png',
        leftLine: 0,
        rightLine: 393,
        higherLine: 40,
        topLine: 58,
        buttomLine: 133,
        designer: ['Matthew Carter'],
        released: 2004,
        link: 'http://en.wikipedia.org/wiki/Tahoma_%28typeface%29'
    }, {
        name: 'Times New Roman',
        image: 'times_new_roman.png',
        leftLine: 2,
        rightLine: 399,
        higherLine: 40,
        topLine: 64,
        buttomLine: 133,
        designer: ['Victor Lardent'],
        released: 1931,
        link: 'http://en.wikipedia.org/wiki/Times_New_Roman'
    }, {
        name: 'Trebuchet MS',
        image: 'trebuchet_ms.png',
        leftLine: 0,
        rightLine: 411,
        higherLine: 40,
        topLine: 60,
        buttomLine: 133,
        designer: ['Vincent Connare'],
        released: 1996,
        link: 'http://en.wikipedia.org/wiki/Trebuchet_MS'
    }, {
        name: 'Verdana',
        image: 'verdana.png',
        leftLine: 0,
        rightLine: 441,
        higherLine: 40,
        topLine: 58,
        buttomLine: 133,
        designer: ['Matthew Carter'],
        released: 1996,
        link: 'http://en.wikipedia.org/wiki/Verdana'
    }];
    var fonts = null;

    var getFont = function(name) {
        return _.find(allFonts, function(font) {
            return font.name == name;
        });
    };

    var generateAnswer = function() {
        var answer = _.first(_.shuffle(fonts));

        fonts = _.reject(fonts, function(font) {
            return answer.name == font.name;
        });

        return answer;
    };

    var generateQuestion = function() {
        var answer = generateAnswer();
        var allOptions = _.reject(allFonts, function(font) {
            return answer.name == font.name;
        });

        var options = _.first(_.shuffle(allOptions), 3);

        options = _.shuffle(_.union([answer], options));

        return {
            option1: options[0].name,
            option2: options[1].name,
            option3: options[2].name,
            option4: options[3].name,
            score: score,
            answer: answer
        };
    };

    var renderTemplate = function(templateName, context) {
        var template = $('#js-tmpl-' + templateName).html();
        var render = _.template(template);
        return render(context);
    };

    var score,
        gameStep,
        totalSteps = 20;

    var testBlock = $('.b-test');
    var counterBlock = $('.b-header__counter');
    var restartLink = $('.js-game-restart');
    var hotkeysLink = $('.js-game-hotkeys');

    var gameStart = function() {
        counterBlock.show();
        fonts = _.clone(allFonts);

        $('.b-header__game-title').hide();

        score = 0;
        gameStep = 1;
        renderStep();
    };

    var renderIntro = function() {
        testBlock.html(renderTemplate('start'));
        testBlock.data('template', 'start');

        restartLink.hide();

        var startbutton = $('.js-game-start-button');
        startbutton.click(restartClick);
    };

    var renderStep = function() {
        var question = generateQuestion();

        testBlock.html(renderTemplate('question', question));
        testBlock.data('template', 'js-question');
        counterBlock.html(renderTemplate('counter', {
            step: gameStep,
            total: totalSteps
        }));

        var questionBlock = $('.js-question', testBlock);
        var answerName = questionBlock.data('answer');
        var optionClick = function() {

            gameStep++;

            var $this = $(this);
            var value = $this.data('value');
            if (value == answerName) {
                score++;

                renderNext();

            } else {
                renderAnswer({
                    score: score,
                    answer: question.answer,
                    choice: getFont(value)
                });
            }
        };

        var options = $('.b-options__item', testBlock);
        options.click(optionClick);
    };

    var renderNext = function() {
        if (gameStep > totalSteps) {
            renderFinal();
        } else {
            renderStep();
        }
    };

    var renderAnswer = function(context) {
        testBlock.html(renderTemplate('answer', context));
        testBlock.data('template', 'answer');

        var nextLink = $('.js-game-next');
        nextLink.click(function() {
            renderNext();
            return false;
        });

    };

    var renderFinal = function() {
        counterBlock.hide();
        restartLink.hide();

        $('.js-show').show();
        $('.b-final__score').html(score);
        $('.b-final__total').html(totalSteps);

        var tweetButton = $('.js-game-tweet-score');
        tweetButton.bind('click', function(event) {

            event.preventDefault();

            var height = 400,
                width = 575,
                left = ($(window).width() - width) / 2,
                top = ($(window).height() - height) / 2,
                windowOptions = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left,
                text = "I had fun with fonts and guessed " + score + " of " + totalSteps + " of them",
                twitterUrl = "http://twitter.com/share?text=" + text;

            if (SITE_URL) {
                twitterUrl += "&url=" + SITE_URL;
            }

            return window.open(twitterUrl, 'twitter', windowOptions);
        });

        var restartButton = $('.js-game-restart-button');
        restartButton.click(restartClick);
    };

    var restartClick = function() {
        restartLink.show();
        $('.js-show').hide();
        gameStart();
        return false;
    };

    restartLink.click(restartClick);

    hotkeysLink.click(function() {
        $('.b-hotkeys').slideToggle();
        return false;
    });

    var setupHotkeys = function() {
        var KEY_ENTER = 13,
            KEY_1 = 49,
            KEY_4 = 52;

        var $document = $(document);
        var onKeydown = function(event) {
            var template = testBlock.data('template');
            var keyCode = event.keyCode;
            if (keyCode == KEY_ENTER) {
                if (template == 'start') {
                    $('.js-game-start-button').click();
                } else if (template == 'answer') {
                    $('.js-game-next').click();
                }
            } else if (keyCode >= KEY_1 && keyCode <= KEY_4) {
                if (template == 'js-question') {
                    var option = keyCode - 48;
                    $('.js-option' + option).click();
                }
            }
        };
        $document.bind('keydown', onKeydown);
    };

    setupHotkeys();
    renderIntro();

});
})(jQuery, _);
