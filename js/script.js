$(document).ready(function () {

    $(document).ready(function () {
        $('.nav').on('click', 'a', function (event) {
            event.preventDefault()
            let id = $(this).attr('href'),
                top = $(id).offset().top
            $('body,html').animate({
                scrollTop: top
            }, 1500)
        })
    })


    // Slider Team
    let positionTeam = 0

    const slidesToShowTeam = 1
    const slidesToScrollTeam = 1

    const containerTeam = $('.slider-container-team')
    const trackTeam = $('.slider-track-team')
    const itemTeam = $('.slider-item-team')

    const itemsCountTeam = itemTeam.length
    const itemWidthTeam = containerTeam.width() / slidesToShowTeam

    const btnPrevTeam = $('.btn--prev--team')
    const btnNextTeam = $('.btn--next--team')

    const movePositionTeam = slidesToScrollTeam * itemWidthTeam

    itemTeam.each(function (index, item) {
        $(itemTeam).css({
            minWidth: itemWidthTeam
        })
    })

    btnNextTeam.click(function () {
        positionTeam -= movePositionTeam
        setPositionTeam()
        checkBtnsTeam()
    })

    btnPrevTeam.click(function () {
        positionTeam += movePositionTeam
        setPositionTeam()
        checkBtnsTeam()
    })

    const setPositionTeam = () => {
        trackTeam.css({
            transform: `translateX(${positionTeam}px)`
        })
    }

    const checkBtnsTeam = () => {
        btnNextTeam.prop('disabled', positionTeam <= -(itemsCountTeam - slidesToShowTeam) * itemWidthTeam)
        btnPrevTeam.prop('disabled', positionTeam === 0)
    }

    checkBtnsTeam()

    // Slider Testimonials
    let position = 0

    const slidesToShow = 1
    const slidesToScroll = 1

    const container = $('.slider-container')
    const track = $('.slider-track')
    const item = $('.slider-item-team')

    const itemsCount = item.length
    const itemWidth = container.width() / slidesToShow

    const btnPrev = $('.btn--prev--testimonials')
    const btnNext = $('.btn--next--testimonials')

    const movePosition = slidesToScroll * itemWidth

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth
        })
    })

    btnNext.click(function () {
        position -= movePosition
        setPosition()
        checkBtns()
    })

    btnPrev.click(function () {
        position += movePosition
        setPosition()
        checkBtns()
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        })
    }

    const checkBtns = () => {
        btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth)
        btnPrev.prop('disabled', position === 0)
    }

    checkBtns()

    // Slider News
    let positionNews = 0

    const slidesToShowNews = 1
    const slidesToScrollNews = 1

    const containerNews = $('.slider-container-news')
    const trackNews = $('.slider-track-news')
    const itemNews = $('.slider-item-news')

    const itemsCountNews = itemNews.length
    const itemWidthNews = containerNews.width() / slidesToShowNews

    const btnPrevNews = $('.btn--prev--news')
    const btnNextNews = $('.btn--next--news')

    const movePositionNews = slidesToScrollNews * itemWidthNews

    itemNews.each(function (index, item) {
        $(itemNews).css({
            minWidth: itemWidthNews
        })
    })

    btnNextNews.click(function () {
        positionNews -= movePositionNews
        setPositionNews()
        checkBtnsNews()
    })

    btnPrevNews.click(function () {
        positionNews += movePositionNews
        setPositionNews()
        checkBtnsNews()
    })

    const setPositionNews = () => {
        trackNews.css({
            transform: `translateX(${positionNews}px)`
        })
    }

    const checkBtnsNews = () => {
        btnNextNews.prop('disabled', positionNews <= -(itemsCountNews - slidesToShowNews) * itemWidthNews)
        btnPrevNews.prop('disabled', positionNews === 0)
    }

    checkBtnsNews()
})

// Portfolio Click
$('.portfolio-item').click(function () {
    $(this).toggleClass('portfolio--active')
})

$(document).mouseup(function (e) {
    let portfolioItem = $('.portfolio--active')
    if (!portfolioItem.is(e.target) && portfolioItem.has(e.target).length === 0) {
        portfolioItem.removeClass('portfolio--active')
    }



    // About Click
    let activeIcon = $('.icon--active')

    let icon1 = $('#detail__icon__1')
    let icon2 = $('#detail__icon__2')
    let icon3 = $('#detail__icon__3')

    let detail1 = $('#detail__1')
    let detail2 = $('#detail__2')
    let detail3 = $('#detail__3')

    $('.details__icon').click(function () {
        $(activeIcon).removeClass('icon--active')
        $(this).addClass('icon--active')
        activeIcon = $('.icon--active')

        if (activeIcon.is(icon1)) {
            detail1.addClass('detail--active')
            detail2.removeClass('detail--active')
            detail3.removeClass('detail--active')

        } else if (activeIcon.is(icon2)) {
            detail1.removeClass('detail--active')
            detail2.addClass('detail--active')
            detail3.removeClass('detail--active')

        } else if (activeIcon.is(icon3)) {
            detail1.removeClass('detail--active')
            detail2.removeClass('detail--active')
            detail3.addClass('detail--active')

        }

    })

    // Burger
    $('.burger').click(function () {
        let nav = $('.nav--mobile')
        nav.addClass('nav--active')
    })

    $(document).mouseup(function (e) {
        let activeNav = $('.nav--active')
        if (!activeNav.is(e.target) && activeNav.has(e.target).length === 0) {
            activeNav.removeClass('nav--active')
        }
    })

    // Featured Click
    let activeFeature = $('.features--active')

    let feature1 = $('#features__1')
    let feature2 = $('#features__2')
    let feature3 = $('#features__3')

    $('.features-item').click(function () {
        $(activeFeature).removeClass('features--active')
        $(this).addClass('features--active')
        activeFeature = $('.features--active')

        if (activeFeature.is(feature1)) {
            feature1.addClass('features--active')
            feature2.removeClass('features--active')
            feature3.removeClass('features--active')

        } else if (activeFeature.is(feature2)) {
            feature1.removeClass('features--active')
            feature2.addClass('features--active')
            feature3.removeClass('features--active')

        } else if (activeFeature.is(feature3)) {
            feature1.removeClass('features--active')
            feature2.removeClass('features--active')
            feature3.addClass('features--active')

        }

    })


    // Services Click
    let activeServiceIcon = $('.service--icon--active')

    const servicesIcon1 = $('#service__icon__1')
    const servicesIcon2 = $('#service__icon__2')
    const servicesIcon3 = $('#service__icon__3')
    const servicesIcon4 = $('#service__icon__4')

    const service1 = $('#service__1')
    const service2 = $('#service__2')
    const service3 = $('#service__3')
    const service4 = $('#service__4')

    $('.services__icon').click(function () {
        $(activeServiceIcon).removeClass('service--icon--active')
        $(this).addClass('service--icon--active')
        activeServiceIcon = $('.service--icon--active')

        if (activeServiceIcon.is(servicesIcon1)) {
            service1.addClass('service--active')
            service2.removeClass('service--active')
            service3.removeClass('service--active')
            service4.removeClass('service--active')

        } else if (activeServiceIcon.is(servicesIcon2)) {
            service1.removeClass('service--active')
            service2.addClass('service--active')
            service3.removeClass('service--active')
            service4.removeClass('service--active')

        } else if (activeServiceIcon.is(servicesIcon3)) {
            service1.removeClass('service--active')
            service2.removeClass('service--active')
            service3.addClass('service--active')
            service4.removeClass('service--active')

        } else if (activeServiceIcon.is(servicesIcon4)) {
            service1.removeClass('service--active')
            service2.removeClass('service--active')
            service3.removeClass('service--active')
            service4.addClass('service--active')

        }

    })

    // Sorting
    let activeCategory = $('.category--active')
    let portfolioPhotos = $('.portfolio-photos')

    let all = $('.all')
    let print = $('.print')
    let identity = $('.identity')
    let branding = $('.branding')
    let web = $('.web')
    let html = $('.html')
    let wordpress = $('.wordpress')

    let allItems = $('.portfolio-item')
    let printItems = $('.print-item')
    let identityItems = $('.identity-item')
    let brandingItems = $('.branding-item')
    let webItems = $('.web-item')
    let htmlItems = $('.html-item')
    let wordpressItems = $('.wordpress-item')

    let hiddenElems

    function resetItems(items, keyword) {
        $('.portfolio-item').not($(items)).addClass('hidden')
        $(activeCategory).removeClass('category--active')
        hiddenElems = items
        $(hiddenElems).removeClass('hidden')
        $(keyword).addClass('category--active')
        $(portfolioPhotos).addClass('flexed')
    }

    $(all).click(function () {
        resetItems(allItems, all)
        $(portfolioPhotos).removeClass('flexed')
    })

    $(print).click(function () {
        resetItems(printItems, print)
    })

    $(identity).click(function () {
        resetItems(identityItems, identity)
    })

    $(branding).click(function () {
        resetItems(brandingItems, branding)
    })

    $(web).click(function () {
        resetItems(webItems, web)
    })

    $(html).click(function () {
        resetItems(htmlItems, html)
    })

    $(wordpress).click(function () {
        resetItems(wordpressItems, wordpress)
    })
})
