document.addEventListener('DOMContentLoaded', () => {
	scrollTo(0, 0)
	preloader()
	herosTabs()
	videoSection()

	if (document.documentElement.clientWidth < 991) {
		mobile()
	} else {
		gsap.registerPlugin(ScrollTrigger)
		scrollTo(0, 0)

		let offerBackground

		offerParallax()
		stickyHeaderComputer()
		animateDots()
		textAnimationAbout()
		scene()
		roadmap()
		behindSlider()
		faqs()
		checkBrowser()
		sliderSafari()
	}
})

function preloader() {
	if (document.querySelector('.dot-1')) {
		function fade(element, duration, callback) {
			var op = 1
			var start = null

			function step(timestamp) {
				if (!start) start = timestamp
				var progress = timestamp - start
				if (progress >= duration) {
					element.style.opacity = '0'
					if (callback) callback()
					return
				}
				element.style.opacity = 1 - progress / duration
				window.requestAnimationFrame(step)
			}

			window.requestAnimationFrame(step)
		}

		function fadeIn(element, duration, callback) {
			var op = 0
			var start = null

			function step(timestamp) {
				if (!start) start = timestamp
				var progress = timestamp - start
				if (progress >= duration) {
					element.style.opacity = '1'
					if (callback) callback()
					return
				}
				element.style.opacity = progress / duration
				window.requestAnimationFrame(step)
			}

			window.requestAnimationFrame(step)
		}

		var dot1 = document.querySelector('.dot-1')
		var dot2 = document.querySelector('.dot-2')
		var dot3 = document.querySelector('.dot-3')

		function animateDots() {
			fade(dot1, 0, function () {
				fade(dot2, 0, function () {
					fade(dot3, 0, function () {
						fadeIn(dot1, 100, function () {
							fadeIn(dot2, 100, function () {
								fadeIn(dot3, 100, function () {
									animateDots()
								})
							})
						})
					})
				})
			})
		}

		animateDots()
	}

	document.querySelector('body').style.overflowY = 'hidden'

	window.addEventListener('load', function () {
		var preloader = document.querySelector('.preloader')
		preloader.classList.add('hide-preloader')

		setTimeout(() => {
			document.querySelector('body').style.overflowY = 'auto'
			preloader.style.display = 'none'
		}, 1000)
	})
}

function stickyHeaderComputer() {
	if (document.querySelector('.header-sticky')) {

		(function ($) {
			$.fn.visible = function (partial) {
				var $t = $(this),
					$w = $(window),
					viewTop = $w.scrollTop(),
					viewBottom = viewTop + $w.height(),
					_top = $t.offset().top,
					_bottom = _top + $t.height(),
					compareTop = partial === true ? _bottom : _top,
					compareBottom = partial === true ? _top : _bottom

				return ((compareBottom <= viewBottom) && (compareTop >= viewTop))
			}
		})(jQuery);

		(function ($) {
			$(window).scroll(function (event) {
				$(".all-content").each(function (i, el) {
					var el = $(el)

					const menu = document.querySelector('.header-sticky')

					if (el.visible(true)) {
						menu.classList.add("menu-active-display")

						setTimeout(() => {
							menu.classList.add("menu-active-top")
						}, 100)

					} else {
						setTimeout(() => {
							menu.classList.remove("menu-active-top")
						}, 1000)

						menu.classList.remove("menu-active-top")
					}
				})
			})
		})(jQuery)

	}
}

function disableParallax() {
	window.removeEventListener('scroll', handleScroll)
	window.removeEventListener('scroll', fadeInOut)

	const elements = [
		offerTitle,
		heroLeft,
		heroCenter,
		heroRight,
		offerGround,
		heroesV,
		offerMeteorite,
		offerFrontSecondRocks,
		offerBackRocks,
		offerFrontRocks,
	]
	gsap.set(elements, { y: 0 })

	offerBackground.style.opacity = 0
}

function offerParallax() {
	if (document.querySelectorAll('.offer')) {
		const offerTitle = document.querySelector('.offer__title')
		const heroLeft = document.querySelector('.hero__left')
		const heroCenter = document.querySelector('.hero__center')
		const heroRight = document.querySelector('.hero__right')
		const offerGround = document.querySelector('.offer__ground')
		const heroesV = document.querySelector('.heroes__v')
		const offerMeteorite = document.querySelector('.offer__meteorite')
		const offerFrontSecondRocks = document.querySelector(
			'.offer__front-second-rocks'
		)
		const offerBackRocks = document.querySelector('.offer__back-rocks')
		const offerFrontRocks = document.querySelector('.offer__front-rocks')
		const offerTTest = document.querySelector('.offer--shadow')

		gsap.set(
			[
				offerTitle,
				heroLeft,
				heroCenter,
				heroRight,
				offerGround,
				heroesV,
				offerMeteorite,
				offerFrontSecondRocks,
				offerBackRocks,
				offerFrontRocks,
				offerTTest, // Добавленный блок
			],
			{ y: 0 }
		)

		let scrollAnimationId

		function handleScroll() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			const offerSection = document.querySelector('.offer')
			const offerSectionTop = offerSection.offsetTop
			const offerSectionBottom = offerSectionTop + offerSection.offsetHeight

			if (scrollTop >= offerSectionTop && scrollTop <= offerSectionBottom) {
				const offsetYOfferTitle = (scrollTop - offerSectionTop) * 0.4
				const offsetYHeroLeft = (scrollTop - offerSectionTop) * 0.8
				const offsetYHeroCenter = (scrollTop - offerSectionTop) * 0.8
				const offsetYHeroRight = (scrollTop - offerSectionTop) * 0.8
				const offsetYOfferGround = (scrollTop - offerSectionTop) * 0.8
				const offsetYHeroesV = (scrollTop - offerSectionTop) * 1.2
				const offsetYOfferMeteorite = (scrollTop - offerSectionTop) * 0.4
				const offsetYOfferFrontSecondRocks =
					-(scrollTop - offerSectionTop) * 0.3
				const offsetYOfferBackRocks = (scrollTop - offerSectionTop) * 0.7
				const offsetYOfferFrontRocks = -(scrollTop - offerSectionTop) * 1
				const offsetYOfferTTest = -(scrollTop - offerSectionTop) * 0.5 // Добавленное свойство

				gsap.to(offerTitle, { duration: 1, y: offsetYOfferTitle })
				gsap.to(heroLeft, { duration: 1, y: offsetYHeroLeft })
				gsap.to(heroCenter, { duration: 1, y: offsetYHeroCenter })
				gsap.to(heroRight, { duration: 1, y: offsetYHeroRight })
				gsap.to(offerGround, { duration: 1, y: offsetYOfferGround })
				gsap.to(heroesV, { duration: 1, y: offsetYHeroesV })
				gsap.to(offerMeteorite, { duration: 1, y: offsetYOfferMeteorite })
				gsap.to(offerFrontSecondRocks, {
					duration: 1,
					y: offsetYOfferFrontSecondRocks,
				})
				gsap.to(offerBackRocks, { duration: 1, y: offsetYOfferBackRocks })
				gsap.to(offerFrontRocks, { duration: 1, y: offsetYOfferFrontRocks })
				gsap.to(offerTTest, { duration: 1, y: offsetYOfferTTest }) // Добавленная анимация
			}
		}

		window.addEventListener('scroll', handleScroll)

		// eslint-disable-next-line no-undef
		offerBackground = document.querySelector('.offer__background-black')

		var fadeStart = 0
		var fadeEnd = 450

		function fadeInOut() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop

			if (scrollTop <= fadeStart) {
				offerBackground.style.opacity = 0
			} else if (scrollTop >= fadeEnd) {
				offerBackground.style.opacity = 1
			} else {
				var opacity = (scrollTop - fadeStart) / (fadeEnd - fadeStart)
				offerBackground.style.opacity = opacity
			}
		}

		window.addEventListener('scroll', fadeInOut)

		const exitSectionButton = document.createElement('button')
		exitSectionButton.textContent = 'Exit Section'
		exitSectionButton.classList.add('exit-section-button')
		exitSectionButton.addEventListener('click', disableParallax)
		document.body.appendChild(exitSectionButton)

		const block = document.querySelector('.offer--shadow-decor')
		gsap.set(block, { opacity: 0 })

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: block,
				start: 'top 0%',
				end: 'bottom 40%',
				scrub: true,
			},
		})

		tl.to(block, {
			opacity: 1,
			duration: 0.5,
			ease: 'power2.out',
		})
	}
}

function animateDots() {
	const animatedPaths = document.querySelectorAll('.animatedPath')
	let currentIndex = 0

	function animatePaths() {
		animatedPaths.forEach(path => {
			path.style.opacity = 0
		})

		animatedPaths[currentIndex].style.opacity = 1

		currentIndex++

		if (currentIndex === animatedPaths.length) {
			currentIndex = 0
		}

		setTimeout(animatePaths, 400)
	}
	animatePaths()
}

function textAnimationAbout() {
	if (document.querySelector('.box__first')) {
		const boxFirst = document.querySelector('.box__first')
		const boxExclusive = document.querySelector('.box__exclusive')
		const boxSecond = document.querySelector('.box__second')
		const descriptionP1 = document.querySelector(
			'body > div.parallax > section.about > div.container > div.about__union > div.about__block > div.block__description > p:nth-child(1)'
		)
		const descriptionP2 = document.querySelector(
			'.about .about__union .about__block .block__description ul'
		)
		const descriptionSpan3 = document.querySelector(
			'body > div.parallax > section.about > div.container > div.about__union > div.about__block > div.block__description > span:nth-child(3)'
		)
		const aboutLine = document.querySelector('.about__line')

		const handleIntersection = function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					setTimeout(function () {
						entry.target.style.opacity = '1'
						entry.target.style.transform = 'translateY(0)'
					}, 200)
				}
			})
		}

		const handleLineIntersection = function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					setTimeout(function () {
						entry.target.classList.add('visible')
					}, 200)
				}
			})
		}

		const options = {
			threshold: 0.5,
		}

		const observerFirst = new IntersectionObserver(handleIntersection, options)
		const observerExclusive = new IntersectionObserver(
			handleIntersection,
			options
		)
		const observerSecond = new IntersectionObserver(handleIntersection, options)
		const observerP1 = new IntersectionObserver(handleIntersection, options)
		const observerP2 = new IntersectionObserver(handleIntersection, options)
		const observerSpan3 = new IntersectionObserver(handleIntersection, options)
		const observerLine = new IntersectionObserver(
			handleLineIntersection,
			options
		)
		observerLine.observe(aboutLine)

		observerFirst.observe(boxFirst)
		observerExclusive.observe(boxExclusive)
		observerSecond.observe(boxSecond)
		observerP1.observe(descriptionP1)
		observerP2.observe(descriptionP2)
		observerSpan3.observe(descriptionSpan3)
		observerLine.observe(aboutLine)
	}
}

function videoPopup() {
	const btn = document.querySelector('.button__video')
	const close = document.querySelector('.video__close')
	const video = document.querySelector('.our-video__box')

	btn.addEventListener('click', e => {
		e.preventDefault()

		video.style.display = 'block'

		setTimeout(() => {
			video.style.width = '700px'
			video.style.height = '500px'
			video.classList.add('video--expanded')
		}, 100)
	})

	close.addEventListener('click', e => {
		e.preventDefault()
		video.style.width = '1px'
		video.style.height = '1px'
		video.classList.remove('video--expanded')

		setTimeout(() => {
			video.style.display = 'none'
		}, 1200)

		setTimeout(() => {
			video.style.width = '100%'
			video.style.height = '740px'
		}, 2000)
	})
}

function herosTabs() {
	if (document.querySelector('.select .select__box .box__heros')) {
		const hero_1 = document.querySelector('.select .select__box .heros .hero_1')
		const hero_2 = document.querySelector('.select .select__box .heros .hero_2')
		const hero_3 = document.querySelector('.select .select__box .heros .hero_3')
		const hero_4 = document.querySelector('.select .select__box .heros .hero_4')

		const heroDefault_1 = document.querySelector(
			'.select .select__box .heros .hero_default_1'
		)
		const heroDefault_2 = document.querySelector(
			'.select .select__box .heros .hero_default_2'
		)
		const heroDefault_3 = document.querySelector(
			'.select .select__box .heros .hero_default_3'
		)
		const heroDefault_4 = document.querySelector(
			'.select .select__box .heros .hero_default_4'
		)

		const heroBox_1 = document.querySelector(
			'.select .select__box .heros .hero_1_box'
		)
		const heroBox_2 = document.querySelector(
			'.select .select__box .heros .hero_2_box'
		)
		const heroBox_3 = document.querySelector(
			'.select .select__box .heros .hero_3_box'
		)
		const heroBox_4 = document.querySelector(
			'.select .select__box .heros .hero_4_box'
		)

		const element_1 =
			document.querySelector('body > div.all-content > section.select > div.select__box > div > div > div.herosMobNav > div:nth-child(4)')
		const element_2 = document.querySelector(
			'body > div.all-content > section.select > div.select__box > div > div > div.herosMobNav > div:nth-child(3)'
		)
		const element_3 = document.querySelector(
			'body > div.all-content > section.select > div.select__box > div > div > div.herosMobNav > div:nth-child(2)'
		)
		const element_4 = document.querySelector(
			'body > div.all-content > section.select > div.select__box > div > div > div.herosMobNav > div:nth-child(1)'
		)

		const element_1_second =
			document.querySelector('body > div.all-content > section.select > div.select__box > div > div > div.herosMob > img.lightning_light')
		const element_2_second = document.querySelector(
			'body > div.all-content > section.select > div.select__box > div > div > div.herosMob > img.fire_light'
		)
		const element_3_second = document.querySelector(
			'body > div.all-content > section.select > div.select__box > div > div > div.herosMob > img.demon_light'
		)
		const element_4_second = document.querySelector(
			'body > div.all-content > section.select > div.select__box > div > div > div.herosMob > img.lady_light'
		)

		const contentHero_1 = document.querySelector('.content__hero_1')
		const contentHero_2 = document.querySelector('.content__hero_2')
		const contentHero_3 = document.querySelector('.content__hero_3')
		const contentHero_4 = document.querySelector('.content__hero_4')

		const contents = document.querySelectorAll('.content__hero')

		const horosActive = document.querySelectorAll('.hero__active')
		const heroDefault = document.querySelectorAll('.hero__default')

		function hideContent() {
			contents.forEach(content => {
				content.classList.remove('content__hero_active')
				content.classList.remove('content__hero_anim_active')
			})
		}

		function hideActiveHero() {
			horosActive.forEach(hero => {
				hero.style.opacity = 0
			})

			heroDefault.forEach(hero => {
				hero.style.opacity = 1
			})
		}

		hero_1.style.opacity = 1
		heroDefault_1.style.opacity = 0
		contentHero_1.classList.add('content__hero_active')
		contentHero_1.classList.add('content__hero_anim_active')

		heroBox_1.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			heroBox_1.classList.add('hero_hide_hover')

			hero_1.style.opacity = 1
			hero_1.style.zIndex = 1111
			heroDefault_1.style.opacity = 0
			contentHero_1.classList.add('content__hero_active')

			setTimeout(() => {
				contentHero_1.classList.add('content__hero_anim_active')
			}, 50)

			hero_2.style.zIndex = ''
			hero_3.style.zIndex = ''
			hero_4.style.zIndex = ''

			heroBox_4.classList.remove('hero_hide_hover')
			heroBox_3.classList.remove('hero_hide_hover')
			heroBox_2.classList.remove('hero_hide_hover')
		})

		heroBox_2.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()
			console.log('111')

			heroBox_2.classList.add('hero_hide_hover')

			hero_2.style.opacity = 1
			hero_2.style.zIndex = 1111
			heroDefault_2.style.opacity = 0
			contentHero_2.classList.add('content__hero_active')

			setTimeout(() => {
				contentHero_2.classList.add('content__hero_anim_active')
			}, 50)

			hero_1.style.zIndex = ''
			hero_3.style.zIndex = ''
			hero_4.style.zIndex = ''

			heroBox_4.classList.remove('hero_hide_hover')
			heroBox_3.classList.remove('hero_hide_hover')
			heroBox_1.classList.remove('hero_hide_hover')
		})

		heroBox_3.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			heroBox_3.classList.add('hero_hide_hover')

			hero_3.style.opacity = 1
			hero_3.style.zIndex = 1111
			heroDefault_3.style.opacity = 0
			contentHero_3.classList.add('content__hero_active')

			setTimeout(() => {
				contentHero_3.classList.add('content__hero_anim_active')
			}, 50)

			hero_1.style.zIndex = ''
			hero_2.style.zIndex = ''
			hero_4.style.zIndex = ''

			heroBox_4.classList.remove('hero_hide_hover')
			heroBox_2.classList.remove('hero_hide_hover')
			heroBox_1.classList.remove('hero_hide_hover')
		})

		heroBox_4.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			heroBox_4.classList.add('hero_hide_hover')

			hero_4.style.opacity = 1
			hero_4.style.zIndex = 1111
			heroDefault_4.style.opacity = 0
			contentHero_4.classList.add('content__hero_active')

			setTimeout(() => {
				contentHero_4.classList.add('content__hero_anim_active')
			}, 50)

			hero_1.style.zIndex = ''
			hero_2.style.zIndex = ''
			hero_3.style.zIndex = ''

			heroBox_3.classList.remove('hero_hide_hover')
			heroBox_2.classList.remove('hero_hide_hover')
			heroBox_1.classList.remove('hero_hide_hover')
		})

		element_1.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			hero_1.style.opacity = 1
			heroDefault_1.style.opacity = 0
			contentHero_1.classList.add('content__hero_active')
			contentHero_1.classList.add('content__hero_anim_active')
		})

		element_2.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			hero_2.style.opacity = 1
			heroDefault_2.style.opacity = 0
			contentHero_2.classList.add('content__hero_active')
			contentHero_2.classList.add('content__hero_anim_active')
		})

		element_3.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			console.log('111')

			hero_3.style.opacity = 1
			heroDefault_3.style.opacity = 0
			contentHero_3.classList.add('content__hero_active')
			contentHero_3.classList.add('content__hero_anim_active')
		})

		element_4.addEventListener('click', e => {
			e.preventDefault()
			hideContent()
			hideActiveHero()

			hero_4.style.opacity = 1
			heroDefault_4.style.opacity = 0
			contentHero_4.classList.add('content__hero_active')
			contentHero_4.classList.add('content__hero_anim_active')
		})

		element_1_second.addEventListener('click', e => {
			element_1.click()
		})

		element_2_second.addEventListener('click', e => {
			element_2.click()
		})

		element_3_second.addEventListener('click', e => {
			element_3.click()
		})

		element_4_second.addEventListener('click', e => {
			element_4.click()
		})
	}
}

function scene() {
	const sectionBackground = document.querySelector('.scene__background')
	const topRock = document.querySelector('.scene__top_rock')
	const aboutUnion = document.querySelector('.about__union')
	const box = document.querySelector('.scene__box')
	const hero = document.querySelector('.scene__hero')
	const centerRockLeft = document.querySelector('.scene__center_rock_left')
	const centerRockRight = document.querySelector('.scene__center_rock_right')
	const graund = document.querySelector('.scene__graund')
	const bottomRocks = document.querySelector('.scene__front_rocks')

	if (
		sectionBackground &&
		topRock &&
		aboutUnion &&
		box &&
		hero &&
		centerRockLeft &&
		centerRockRight &&
		graund &&
		bottomRocks
	) {
		function parallaxForSection() {
			gsap.set(
				[
					sectionBackground,
					topRock,
					aboutUnion,
					box,
					hero,
					centerRockLeft,
					centerRockRight,
					graund,
					bottomRocks,
				],
				{ y: 0, smoothChildTiming: true }
			)

			let isParallaxStarted = false
			let isFrontRocksVisible = false

			function handleScroll() {
				const sectionBackgroundRect = sectionBackground.getBoundingClientRect()
				const topRockRect = topRock.getBoundingClientRect()
				const aboutUnionRect = aboutUnion.getBoundingClientRect()
				const bottomRocksRect = bottomRocks.getBoundingClientRect()
				const scrollTop =
					window.pageYOffset || document.documentElement.scrollTop
				const windowHeight = window.innerHeight

				if (
					(sectionBackgroundRect.top <= windowHeight / 2 &&
						sectionBackgroundRect.bottom >= windowHeight / 2) ||
					(topRockRect.top <= windowHeight / 2 &&
						topRockRect.bottom >= windowHeight / 2) ||
					(aboutUnionRect.top <= windowHeight / 2 &&
						aboutUnionRect.bottom >= windowHeight / 2)
				) {
					if (!isParallaxStarted) {
						isParallaxStarted = true
						window.addEventListener('scroll', updateParallax)
						updateParallax()
					}
				} else {
					isParallaxStarted = false
					gsap.set(
						[
							sectionBackground,
							topRock,
							aboutUnion,
							box,
							hero,
							centerRockLeft,
							centerRockRight,
							graund,
						],
						{ y: 0 }
					)
				}

				if (bottomRocksRect.top <= 0 && bottomRocksRect.bottom >= 0) {
					isFrontRocksVisible = true
				} else {
					isFrontRocksVisible = false
				}
			}

			function updateParallax() {
				const scrollTop =
					window.pageYOffset || document.documentElement.scrollTop
				const offsetYSectionBackground = -scrollTop * 0.3
				const offsetYTopRock = -scrollTop * 0.3
				const offsetYAboutUnion = -scrollTop * 0.2
				const offsetYBox = -scrollTop * 0.7
				const offsetYHero = -scrollTop * 0.7
				const offsetYCenterRockLeft = -scrollTop * 0.4
				const offsetYCenterRockRight = -scrollTop * 0.4
				const offsetYGraund = -scrollTop * 0.3
				const offsetYBottomRocks = -scrollTop * 0.3

				gsap.to(sectionBackground, {
					duration: 1.5,
					y: offsetYSectionBackground,
					ease: 'power1.out',
				})
				gsap.to(topRock, {
					duration: 1.5,
					y: offsetYTopRock,
					ease: 'power1.out',
				})
				gsap.to(aboutUnion, {
					duration: 1.5,
					y: offsetYAboutUnion,
					ease: 'power1.out',
				})
				gsap.to(box, { duration: 1.5, y: offsetYBox, ease: 'power1.out' })
				gsap.to(hero, { duration: 1.5, y: offsetYHero, ease: 'power1.out' })
				gsap.to(centerRockLeft, {
					duration: 1.5,
					y: offsetYCenterRockLeft,
					ease: 'power1.out',
				})
				gsap.to(centerRockRight, {
					duration: 1.5,
					y: offsetYCenterRockRight,
					ease: 'power1.out',
				})
				gsap.to(graund, { duration: 1.5, y: offsetYGraund, ease: 'power1.out' })
				if (!isFrontRocksVisible) {
					gsap.to(bottomRocks, {
						duration: 1.5,
						y: offsetYBottomRocks,
						ease: 'power1.out',
					})
				}
			}

			window.addEventListener('scroll', handleScroll)
		}

		parallaxForSection()
	}
}

function roadmap() {
	if (document.querySelector('.roadmap')) {
		const arrowLeftOld = document.querySelector(
			'.roadmap .roadmap__box .carousel nav .prev'
		)
		const arrowRightOld = document.querySelector(
			'.roadmap .roadmap__box .carousel nav .next'
		)
		const arrowLeftNew = document.querySelector('.roadmap .prev-arrow')
		const arrowRightNew = document.querySelector('.roadmap .next-arrow')

		const cartsTexts = document.querySelectorAll(
			'.roadmap .roadmap__box .carousel figure .carousel__block .block__box'
		)

		let counter = 0

		var carousel = document.querySelector('.carousel'),
			figure = carousel.querySelector('figure'),
			nav = carousel.querySelector('nav'),
			numImages = figure.childElementCount,
			theta = (2 * Math.PI) / numImages,
			currImage = 0

		nav.addEventListener('click', onClick, true)

		function onClick(e) {
			e.stopPropagation()

			var t = e.target
			if (t.tagName.toUpperCase() != 'BUTTON') return

			if (t.classList.contains('next')) {
				currImage++
			} else {
				currImage--
			}

			figure.style.transform = `rotateY(${currImage * -theta}rad)`
		}

		cartsTexts[2].style.opacity = 0.3
		cartsTexts[3].style.opacity = 0.3

		arrowLeftNew.addEventListener('click', e => {
			e.preventDefault()

			if (counter >= 1) {
				arrowLeftOld.click()
				counter--
			}

			if (counter == 0) {
				cartsTexts[4].style.opacity = 1
				cartsTexts[2].style.opacity = 0.2
			} else if (counter == 1) {
				cartsTexts[0].style.opacity = 1
				cartsTexts[3].style.opacity = 0.2
			} else if (counter == 2) {
				cartsTexts[1].style.opacity = 1
				cartsTexts[4].style.opacity = 0.2
			} else if (counter == 3) {
				cartsTexts[2].style.opacity = 1
				cartsTexts[0].style.opacity = 0.2
			} else if (counter == 4) {
				cartsTexts[0].style.opacity = 1
				cartsTexts[2].style.opacity = 0.2
			} else if (counter == 5) {
				cartsTexts[1].style.opacity = 1
				cartsTexts[3].style.opacity = 0.2
				counter = 0
			}
		})

		arrowRightNew.addEventListener('click', e => {
			e.preventDefault()
			arrowRightOld.click()
			counter++

			if (counter == 1) {
				cartsTexts[2].style.opacity = 1
				cartsTexts[4].style.opacity = 0.2
			} else if (counter == 2) {
				cartsTexts[3].style.opacity = 1
				cartsTexts[0].style.opacity = 0.2
			} else if (counter == 3) {
				cartsTexts[4].style.opacity = 1
				cartsTexts[1].style.opacity = 0.2
			} else if (counter == 4) {
				cartsTexts[0].style.opacity = 1
				cartsTexts[2].style.opacity = 0.2
			} else if (counter == 5) {
				cartsTexts[1].style.opacity = 1
				cartsTexts[3].style.opacity = 0.2
				counter = 0
			}
		})
	}
}

function faqs() {
	const faqsContainer = document.querySelector('.faqs__lists')

	if (faqsContainer) {
		const btns = faqsContainer.querySelectorAll('.item__btn')

		btns.forEach(btn => {
			btn.addEventListener('click', () => {
				const item = btn.closest('.item')
				const content = item.querySelector('.item__content')

				item.classList.toggle('active')

				if (item.classList.contains('active')) {
					content.style.maxHeight = content.scrollHeight + 'px'
				} else {
					content.style.maxHeight = '0'
				}
			})
		})
	}
}

function behindSlider() {
	if (document.querySelector('.behind')) {

		$('.behind__box .behind__slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrow: true,
			swipe: false,
		})

		$('.behind .behind__slider-right').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrow: false,
			swipe: false,
		})

		const btnLeftBigSlider = document.querySelector('.behind__box_computer .behind__slider .slick-prev'),
			btnRightBigSlider = document.querySelector('.behind__box_computer .behind__slider .slick-next'),
			btnLeftSmallSlider = document.querySelector('.behind__slider-right .slick-prev'),
			btnRightSmallSlider = document.querySelector('.behind__slider-right .slick-next'),
			arrowLeft = document.querySelector('.behind__box_computer .behind__slider_arrow .arrow__left'),
			arrowRight = document.querySelector('.behind__box_computer .behind__slider_arrow .arrow__right')

		arrowLeft.addEventListener('click', (e) => {
			e.preventDefault()
			// btnLeftBigSlider.click()
			// btnLeftSmallSlider.click()
			btnRightBigSlider.click()
			btnRightSmallSlider.click()
		})

		arrowRight.addEventListener('click', (e) => {
			e.preventDefault()
			btnRightBigSlider.click()
			btnRightSmallSlider.click()
		})
	}
}

function videoSection() {
	if (document.querySelector('.video-section')) {
		const btn = document.querySelector('.video__play'),
			video = document.querySelector('.video-section .our-video'),
			videBox = document.querySelector(
				'.video-section .video__box .our-video__box'
			),
			preloader = document.querySelector('.video__preloader'),
			close = document.querySelector('.our-video__close'),
			header = document.querySelector('.header-sticky')

		btn.addEventListener('click', e => {
			e.preventDefault()

			document.querySelector('body').style.overflowY = 'hidden'

			preloader.style.display = 'none'
			videBox.style.display = 'flex'
			btn.style.display = 'none'
			header.style.display = 'none'
			setTimeout(() => {
				close.style.opacity = 1
			}, 1000)

			video.play()
		})

		close.addEventListener('click', e => {
			e.preventDefault()

			document.querySelector('body').style.overflowY = 'auto'

			header.style.display = ''
			preloader.style.display = 'flex'
			videBox.style.display = 'none'
			btn.style.display = 'flex'
			close.style.opacity = 0

			video.pause()
		})
	}
}

function mobile() {
	$(document).ready(function () {
		function menu() {
			const btns = document.querySelectorAll('.header__menu'),
				block = document.querySelector('.mobileMenu'),
				mint = document.querySelector('.mobileMenu__header-mint'),
				items = document.querySelectorAll('.mobileMenu__menu-list li a')

			btns.forEach((btn) => {
				btn.addEventListener('click', e => {
					e.preventDefault()
					document.querySelector('body').classList.toggle('overflowHidden')

					btn.classList.toggle('active')

					block.classList.toggle('active')

					mint.style.opacity = 1

				})
			})

			items.forEach(item => {
				item.addEventListener('click', () => {
					document.querySelector('body').classList.remove('overflowHidden')

					btns.forEach((btn) => {
						btn.classList.remove('active')
					})

					block.classList.remove('active')

					mint.style.opacity = 0
				})
			})
		}
		menu()

		$('.herosMobNav .item').on('click', function () {
			if (!$(this).hasClass('active')) {
				$('.herosMobNav .item').removeClass('active')
				$(this).addClass('active')
				// $('.content__hero').removeClass('active')
				// $($(this).data('id')).addClass('active')
				$('.herosMob img').removeClass('active')
				$($(this).data('img')).addClass('active')
			}
		})
		$('.carousel figure').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		})
		$('.behind .behind__slider').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		})

		function faqs() {
			const faqsContainer = document.querySelector('.faqs__lists')

			if (faqsContainer) {
				const btns = faqsContainer.querySelectorAll('.item__btn')

				btns.forEach(btn => {
					btn.addEventListener('click', () => {
						const item = btn.closest('.item')
						const content = item.querySelector('.item__content')

						item.classList.toggle('active')

						if (item.classList.contains('active')) {
							content.style.maxHeight = content.scrollHeight + 'px'
						} else {
							content.style.maxHeight = '0'
						}
					})
				})
			}
		}
		faqs()

		function pulsation() {
			const canvases = document.querySelectorAll("canvas")
			const ctxs = []

			canvases.forEach((canvas, index) => {
				const ctx = canvas.getContext("2d")
				ctxs.push(ctx)

				canvas.width = window.innerWidth / 2
				canvas.height = window.innerHeight / 2
				canvas.style.left = `${(index % 2) * canvas.width}px`
				canvas.style.top = `${Math.floor(index / 2) * canvas.height}px`

				let radius = 50
				let maxRadius = 100
				let growing = true
				let gradient

				function draw() {
					ctx.clearRect(0, 0, canvas.width, canvas.height)

					if (growing) {
						radius += 2
					} else {
						radius -= 2
					}

					if (radius >= maxRadius || radius <= 0) {
						growing = !growing
					}

					gradient = ctx.createRadialGradient(
						canvas.width / 2, canvas.height / 2, radius / 3,
						canvas.width / 2, canvas.height / 2, radius
					)

					gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
					gradient.addColorStop(1, "transparent")

					ctx.beginPath()
					ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2)
					ctx.fillStyle = gradient
					ctx.fill()

					requestAnimationFrame(draw)
				}
				draw()
			})
		}
	})
	checkBrowser()
	// pulsation()
}

function sliderSafari() {
	const leftBtn = document.querySelector('.prev-arrow-slider'),
		rightBtn = document.querySelector('.next-arrow-slider'),
		defaultButtonLeft = document.querySelector('.dg-prev'),
		defaultButtonRight = document.querySelector('.dg-next')

	leftBtn.addEventListener('click', () => {
		defaultButtonLeft.click()
	})

	rightBtn.addEventListener('click', () => {
		defaultButtonRight.click()
	})

	$(function () {
		$('#roadmap-slider').gallery()
	})
}

function checkBrowser() {
	const defaultSlider = document.querySelector('.roadmap-d-slider'),
		safariSlider = document.querySelector('.roadmap-s-slider')

	function isSafari() {
		const userAgent = navigator.userAgent.toLowerCase()
		return userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("firefox")
	}

	if (isSafari()) {
		defaultSlider.style.display = 'none'
		safariSlider.style.display = 'block'
	} else {
		defaultSlider.style.display = 'block'
		safariSlider.style.display = 'none'
	}

	if (document.documentElement.clientWidth < 991) {
		defaultSlider.style.display = 'block'
		safariSlider.style.display = 'none'
	}
}

function pulsation() {

	const time = 6000

	function animateSvg1(blockContent, svgBlock) {
		const svg1 = document.querySelector(blockContent)
		svg1.innerHTML = svgBlock
	}

	function animateSvg2(blockContent, svgBlock) {
		const svg2 = document.querySelector(blockContent)
		svg2.innerHTML = svgBlock
	}

	setInterval(() => {
		// lady
		animateSvg1('.hero__1_svg_circle_1', '<svg class="hero__decor1 hero__decor1_play" width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M46.8339 22.9956C46.597 22.964 46.4156 22.7692 46.4009 22.5307C46.0162 16.2787 41.1944 10.8252 34.4419 8.57434C34.281 8.52071 34.1582 8.38916 34.1159 8.22494C33.7374 6.75828 34.0895 5.06082 34.5783 3.64497C31.7065 6.45604 29.246 7.05686 28.7611 7.17528C28.7459 7.179 28.7326 7.18225 28.7213 7.18507C28.6614 7.20004 28.5992 7.2038 28.538 7.19614C27.0018 7.00411 25.3558 7.09838 23.6934 7.39125L23.6909 7.39175L23.6641 7.39738C23.6398 7.40255 23.6029 7.41057 23.5544 7.42159C23.4573 7.44362 23.3137 7.47762 23.1313 7.52473C22.7664 7.619 22.2473 7.76552 21.636 7.97339C20.4099 8.39025 18.8287 9.04845 17.3773 10.016C17.2659 10.0903 17.1293 10.1168 16.9982 10.0895L17.1 9.6C20.1 7.6 23.6 6.9 23.6 6.9C25.3 6.6 27 6.5 28.6 6.7C28.6106 6.69735 28.6236 6.69421 28.6389 6.69051C29.1225 6.57353 31.9256 5.89548 35.0536 2.4273C35.5633 1.86216 36.0817 1.22295 36.6 0.5C36.6 0.5 36.0317 1.41335 35.4803 2.70056C34.8078 4.27052 34.1604 6.39661 34.6 8.1C41.5 10.4 46.5 16 46.9 22.5C47.8645 22.6286 50.1936 22.7986 52.4248 22.744C53.5642 22.7161 54.678 22.6297 55.5716 22.4493C54.778 22.622 53.5961 22.8949 52.5083 23.242C51.5613 23.5442 50.6857 23.9026 50.2 24.3C48.9773 25.1967 48.8841 26.0269 49.1082 26.7365C49.159 26.8974 49.2261 27.0521 49.3 27.2C49.3 27.2 49.1153 27.2588 48.8212 27.3593C48.1006 27.6057 46.7233 28.1028 45.8 28.6C43.5 34.6 37.2 39.1 29.5 39.8C26 40.3 22.6 39.7 19.6 38.6C17.7903 38.3871 16.6322 38.9108 15.9448 39.4473C15.3407 39.9187 15.1 40.4 15.1 40.4C15.2983 39.9636 15.4219 39.5548 15.4887 39.1743C15.7587 37.6364 15.1008 36.5612 14.7 36C12.4 34.4 10.6 32.5 9.5 30.5C8.2 28.1 7.8 25.8 7.8 23.8C7.10929 22.9558 5.4173 21.3459 4.66773 20.6428C4.4406 20.4298 4.3 20.3 4.3 20.3C4.42629 20.1918 4.54606 20.0737 4.6517 19.9442C5.13159 19.3557 5.31959 18.5294 4.5 17.3C4.08857 16.6535 3.02076 15.8687 1.96664 15.1895C1.26753 14.739 0.574443 14.3349 0.0828379 14.0483C0.0545455 14.0318 0.0269205 14.0157 0 14C0.565754 14.2716 1.32099 14.5124 2.16836 14.7248C4.56671 15.3261 7.70313 15.6997 9.37036 15.8983C9.48891 15.9124 9.60003 15.9257 9.70294 15.9381C9.90096 15.9619 10.0685 15.9825 10.2 16C10.2 15.9839 10.2026 15.9652 10.2074 15.9447C10.2322 15.8381 10.3161 15.6839 10.4 15.6C9.66707 12.8311 6.61293 8.53691 4.37012 6.01188C3.85889 5.43633 3.38982 4.95269 3 4.6C3.48173 4.94925 4.05193 5.2869 4.6823 5.61067C9.28623 7.97535 17.1 9.6 17.1 9.6C16.9982 10.0895 16.9983 10.0896 16.9982 10.0895L16.9901 10.0878L16.9676 10.0831L16.8807 10.0646C16.8046 10.0482 16.693 10.024 16.5498 9.9922C16.2634 9.92858 15.8504 9.83459 15.3427 9.71276C14.3276 9.4692 12.9318 9.11397 11.4092 8.66728C9.49326 8.10515 7.34243 7.38877 5.49514 6.55537C6.1711 7.3689 6.88164 8.29125 7.55835 9.24897C9.03779 11.3427 10.4089 13.6797 10.8834 15.4721C10.9289 15.6442 10.8795 15.8276 10.7536 15.9536C10.754 15.9531 10.7535 15.9535 10.7536 15.9536C10.7536 15.9536 10.7488 15.9589 10.7397 15.9723C10.7295 15.9872 10.7189 16.0052 10.7097 16.0236C10.7041 16.0348 10.7001 16.044 10.6974 16.0507C10.6847 16.1759 10.625 16.2925 10.5294 16.3762C10.4209 16.4711 10.2768 16.5147 10.1339 16.4956C9.94247 16.4701 9.66613 16.4372 9.32536 16.3966C8.37109 16.2829 6.91164 16.109 5.39671 15.8688C4.70561 15.7593 3.99118 15.6343 3.29698 15.4923C3.54304 15.6721 3.77874 15.855 3.9938 16.0375C4.36581 16.3531 4.70336 16.69 4.91888 17.0269C5.46256 17.844 5.64682 18.573 5.52964 19.2258C5.45318 19.6518 5.2561 20.0008 5.01798 20.2858C5.03253 20.2995 5.04742 20.3135 5.06265 20.3278C5.32169 20.5711 5.67665 20.9072 6.06011 21.2781C6.81917 22.0123 7.71549 22.9071 8.18698 23.4834C8.26007 23.5727 8.3 23.6846 8.3 23.8C8.3 25.73 8.68509 27.9452 9.93892 30.2605C10.9942 32.1784 12.7347 34.0238 14.9855 35.5895C15.0325 35.6222 15.0736 35.6628 15.1069 35.7094C15.3729 36.0819 15.7671 36.6964 15.9508 37.5299C16.0338 37.9067 16.0724 38.322 16.0411 38.7731C16.8435 38.2809 18.0187 37.9105 19.6584 38.1034C19.6973 38.108 19.7354 38.1171 19.7721 38.1306C22.7149 39.2096 26.0301 39.7906 29.4293 39.305C29.4377 39.3038 29.4462 39.3028 29.4547 39.3021C36.9976 38.6163 43.1124 34.2143 45.3331 28.421C45.376 28.3092 45.4575 28.2165 45.563 28.1598C46.2455 27.7922 47.148 27.4323 47.8646 27.1683C48.1567 27.0607 48.4217 26.9677 48.6339 26.895C48.5276 26.5614 48.472 26.1831 48.5454 25.7742C48.6622 25.1232 49.0854 24.5 49.894 23.9044C50.198 23.6583 50.6028 23.4417 51.0394 23.2514C51.0029 23.251 50.9665 23.2505 50.9302 23.2499C49.2029 23.2247 47.6077 23.0988 46.8339 22.9956ZM55.8 22.4C55.7256 22.4172 55.6494 22.4336 55.5716 22.4493C55.6519 22.4318 55.7282 22.4154 55.8 22.4Z" fill="#F14B64"></path> </svg>')
		animateSvg2('.hero__1_svg_circle_2', '<svg class="hero__decor2" width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M46.8339 22.9956C46.597 22.964 46.4156 22.7692 46.4009 22.5307C46.0162 16.2787 41.1944 10.8252 34.4419 8.57434C34.281 8.52071 34.1582 8.38916 34.1159 8.22494C33.7374 6.75828 34.0895 5.06082 34.5783 3.64497C31.7065 6.45604 29.246 7.05686 28.7611 7.17528C28.7459 7.179 28.7326 7.18225 28.7213 7.18507C28.6614 7.20004 28.5992 7.2038 28.538 7.19614C27.0018 7.00411 25.3558 7.09838 23.6934 7.39125L23.6909 7.39175L23.6641 7.39738C23.6398 7.40255 23.6029 7.41057 23.5544 7.42159C23.4573 7.44362 23.3137 7.47762 23.1313 7.52473C22.7664 7.619 22.2473 7.76552 21.636 7.97339C20.4099 8.39025 18.8287 9.04845 17.3773 10.016C17.2659 10.0903 17.1293 10.1168 16.9982 10.0895L17.1 9.6C20.1 7.6 23.6 6.9 23.6 6.9C25.3 6.6 27 6.5 28.6 6.7C28.6106 6.69735 28.6236 6.69421 28.6389 6.69051C29.1225 6.57353 31.9256 5.89548 35.0536 2.4273C35.5633 1.86216 36.0817 1.22295 36.6 0.5C36.6 0.5 36.0317 1.41335 35.4803 2.70056C34.8078 4.27052 34.1604 6.39661 34.6 8.1C41.5 10.4 46.5 16 46.9 22.5C47.8645 22.6286 50.1936 22.7986 52.4248 22.744C53.5642 22.7161 54.678 22.6297 55.5716 22.4493C54.778 22.622 53.5961 22.8949 52.5083 23.242C51.5613 23.5442 50.6857 23.9026 50.2 24.3C48.9773 25.1967 48.8841 26.0269 49.1082 26.7365C49.159 26.8974 49.2261 27.0521 49.3 27.2C49.3 27.2 49.1153 27.2588 48.8212 27.3593C48.1006 27.6057 46.7233 28.1028 45.8 28.6C43.5 34.6 37.2 39.1 29.5 39.8C26 40.3 22.6 39.7 19.6 38.6C17.7903 38.3871 16.6322 38.9108 15.9448 39.4473C15.3407 39.9187 15.1 40.4 15.1 40.4C15.2983 39.9636 15.4219 39.5548 15.4887 39.1743C15.7587 37.6364 15.1008 36.5612 14.7 36C12.4 34.4 10.6 32.5 9.5 30.5C8.2 28.1 7.8 25.8 7.8 23.8C7.10929 22.9558 5.4173 21.3459 4.66773 20.6428C4.4406 20.4298 4.3 20.3 4.3 20.3C4.42629 20.1918 4.54606 20.0737 4.6517 19.9442C5.13159 19.3557 5.31959 18.5294 4.5 17.3C4.08857 16.6535 3.02076 15.8687 1.96664 15.1895C1.26753 14.739 0.574443 14.3349 0.0828379 14.0483C0.0545455 14.0318 0.0269205 14.0157 0 14C0.565754 14.2716 1.32099 14.5124 2.16836 14.7248C4.56671 15.3261 7.70313 15.6997 9.37036 15.8983C9.48891 15.9124 9.60003 15.9257 9.70294 15.9381C9.90096 15.9619 10.0685 15.9825 10.2 16C10.2 15.9839 10.2026 15.9652 10.2074 15.9447C10.2322 15.8381 10.3161 15.6839 10.4 15.6C9.66707 12.8311 6.61293 8.53691 4.37012 6.01188C3.85889 5.43633 3.38982 4.95269 3 4.6C3.48173 4.94925 4.05193 5.2869 4.6823 5.61067C9.28623 7.97535 17.1 9.6 17.1 9.6C16.9982 10.0895 16.9983 10.0896 16.9982 10.0895L16.9901 10.0878L16.9676 10.0831L16.8807 10.0646C16.8046 10.0482 16.693 10.024 16.5498 9.9922C16.2634 9.92858 15.8504 9.83459 15.3427 9.71276C14.3276 9.4692 12.9318 9.11397 11.4092 8.66728C9.49326 8.10515 7.34243 7.38877 5.49514 6.55537C6.1711 7.3689 6.88164 8.29125 7.55835 9.24897C9.03779 11.3427 10.4089 13.6797 10.8834 15.4721C10.9289 15.6442 10.8795 15.8276 10.7536 15.9536C10.754 15.9531 10.7535 15.9535 10.7536 15.9536C10.7536 15.9536 10.7488 15.9589 10.7397 15.9723C10.7295 15.9872 10.7189 16.0052 10.7097 16.0236C10.7041 16.0348 10.7001 16.044 10.6974 16.0507C10.6847 16.1759 10.625 16.2925 10.5294 16.3762C10.4209 16.4711 10.2768 16.5147 10.1339 16.4956C9.94247 16.4701 9.66613 16.4372 9.32536 16.3966C8.37109 16.2829 6.91164 16.109 5.39671 15.8688C4.70561 15.7593 3.99118 15.6343 3.29698 15.4923C3.54304 15.6721 3.77874 15.855 3.9938 16.0375C4.36581 16.3531 4.70336 16.69 4.91888 17.0269C5.46256 17.844 5.64682 18.573 5.52964 19.2258C5.45318 19.6518 5.2561 20.0008 5.01798 20.2858C5.03253 20.2995 5.04742 20.3135 5.06265 20.3278C5.32169 20.5711 5.67665 20.9072 6.06011 21.2781C6.81917 22.0123 7.71549 22.9071 8.18698 23.4834C8.26007 23.5727 8.3 23.6846 8.3 23.8C8.3 25.73 8.68509 27.9452 9.93892 30.2605C10.9942 32.1784 12.7347 34.0238 14.9855 35.5895C15.0325 35.6222 15.0736 35.6628 15.1069 35.7094C15.3729 36.0819 15.7671 36.6964 15.9508 37.5299C16.0338 37.9067 16.0724 38.322 16.0411 38.7731C16.8435 38.2809 18.0187 37.9105 19.6584 38.1034C19.6973 38.108 19.7354 38.1171 19.7721 38.1306C22.7149 39.2096 26.0301 39.7906 29.4293 39.305C29.4377 39.3038 29.4462 39.3028 29.4547 39.3021C36.9976 38.6163 43.1124 34.2143 45.3331 28.421C45.376 28.3092 45.4575 28.2165 45.563 28.1598C46.2455 27.7922 47.148 27.4323 47.8646 27.1683C48.1567 27.0607 48.4217 26.9677 48.6339 26.895C48.5276 26.5614 48.472 26.1831 48.5454 25.7742C48.6622 25.1232 49.0854 24.5 49.894 23.9044C50.198 23.6583 50.6028 23.4417 51.0394 23.2514C51.0029 23.251 50.9665 23.2505 50.9302 23.2499C49.2029 23.2247 47.6077 23.0988 46.8339 22.9956ZM55.8 22.4C55.7256 22.4172 55.6494 22.4336 55.5716 22.4493C55.6519 22.4318 55.7282 22.4154 55.8 22.4Z" fill="#F14B64"></path> </svg>')

		// // demon
		animateSvg1('.hero__2_svg_circle_1', '<svg width="61" height="72" viewBox="0 0 61 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_590_186)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M59.9605 12.8392C60.1232 13.0599 60.0778 13.3705 59.8588 13.5354C52.701 18.9235 47.4554 23.0282 43.9764 26.6959C40.5057 30.3548 38.8517 33.5187 38.7758 37.0216C38.6994 40.553 40.222 44.5299 43.3612 49.8207C46.4264 54.9866 50.9837 61.3284 56.9601 69.6449L57.3718 70.2178C57.5302 70.4383 57.4838 70.7449 57.2672 70.9085C57.0506 71.0722 56.743 71.0331 56.5742 70.8205C56.2717 70.4396 55.9727 70.0629 55.6769 69.6904C49.5327 61.9505 44.8206 56.0147 40.7953 51.7391C36.5711 47.2523 33.1656 44.6643 29.7346 43.7185C26.3308 42.7801 22.8086 43.4348 18.2864 45.6706C13.7528 47.9121 8.28651 51.7056 1.01877 56.9522C0.79645 57.1127 0.486354 57.0642 0.323649 56.8435C0.160944 56.6228 0.206335 56.3122 0.425398 56.1473C7.58176 50.7603 12.8679 46.608 16.4183 42.9092C19.9635 39.2158 21.7192 36.034 21.9154 32.5945C22.1127 29.137 20.7419 25.3133 17.7757 20.3211C14.8983 15.4782 10.5655 9.60819 4.84183 1.98861C4.6706 1.76082 4.49823 1.53144 4.32472 1.30046C4.32469 1.30042 4.32466 1.30039 4.32463 1.30035C4.15879 1.07959 4.20328 0.766187 4.42402 0.600311C4.64475 0.434436 4.95816 0.478883 5.12406 0.699594C5.29782 0.930737 5.47036 1.16034 5.64169 1.38842C11.5759 9.28278 16.1127 15.2199 20.0094 19.3949C24.0228 23.695 27.2941 26.0542 30.6341 26.7899C33.9576 27.5219 37.4559 26.6682 41.9828 24.2732C46.515 21.8754 51.9956 17.9786 59.2654 12.7305C59.4877 12.57 59.7978 12.6185 59.9605 12.8392ZM4.72439 1.00003C4.89796 1.23107 5.07036 1.4605 5.24161 1.68832C9.2619 7.04026 12.6056 11.5416 15.2425 15.4351C26.1671 31.566 24.9586 37.2639 9.46021 49.7946C6.93217 51.8386 4.02392 54.0643 0.726104 56.5468C4.08569 54.1215 7.06841 52.0006 9.75723 50.1975C28.3659 37.7184 32.8978 40.4587 50.8579 62.8377C52.4758 64.8537 54.2027 67.0291 56.0587 69.3671C56.3577 69.7437 56.66 70.1245 56.9658 70.5096L56.5414 69.9191C54.6365 67.2683 52.874 64.8157 51.257 62.5362C34.8109 39.3511 33.4201 34.0706 50.3529 20.2665C52.9772 18.1271 56.0415 15.7831 59.558 13.1359C56.002 15.7031 52.8656 17.9533 50.0539 19.8652C33.8493 30.8842 28.4315 30.668 15.6434 15.1354C12.6556 11.5064 9.26555 7.04142 5.24161 1.68832C5.07043 1.46044 4.89802 1.23102 4.72439 1.00003Z" fill="#F14B64"/> </g> <defs> <clipPath id="clip0_590_186"> <rect width="59.832" height="70.5096" fill="white" transform="translate(0.226074 0.5)"/> </clipPath> </defs> </svg>')
		animateSvg2('.hero__2_svg_circle_2', '<svg width="61" height="72" viewBox="0 0 61 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_590_186)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M59.9605 12.8392C60.1232 13.0599 60.0778 13.3705 59.8588 13.5354C52.701 18.9235 47.4554 23.0282 43.9764 26.6959C40.5057 30.3548 38.8517 33.5187 38.7758 37.0216C38.6994 40.553 40.222 44.5299 43.3612 49.8207C46.4264 54.9866 50.9837 61.3284 56.9601 69.6449L57.3718 70.2178C57.5302 70.4383 57.4838 70.7449 57.2672 70.9085C57.0506 71.0722 56.743 71.0331 56.5742 70.8205C56.2717 70.4396 55.9727 70.0629 55.6769 69.6904C49.5327 61.9505 44.8206 56.0147 40.7953 51.7391C36.5711 47.2523 33.1656 44.6643 29.7346 43.7185C26.3308 42.7801 22.8086 43.4348 18.2864 45.6706C13.7528 47.9121 8.28651 51.7056 1.01877 56.9522C0.79645 57.1127 0.486354 57.0642 0.323649 56.8435C0.160944 56.6228 0.206335 56.3122 0.425398 56.1473C7.58176 50.7603 12.8679 46.608 16.4183 42.9092C19.9635 39.2158 21.7192 36.034 21.9154 32.5945C22.1127 29.137 20.7419 25.3133 17.7757 20.3211C14.8983 15.4782 10.5655 9.60819 4.84183 1.98861C4.6706 1.76082 4.49823 1.53144 4.32472 1.30046C4.32469 1.30042 4.32466 1.30039 4.32463 1.30035C4.15879 1.07959 4.20328 0.766187 4.42402 0.600311C4.64475 0.434436 4.95816 0.478883 5.12406 0.699594C5.29782 0.930737 5.47036 1.16034 5.64169 1.38842C11.5759 9.28278 16.1127 15.2199 20.0094 19.3949C24.0228 23.695 27.2941 26.0542 30.6341 26.7899C33.9576 27.5219 37.4559 26.6682 41.9828 24.2732C46.515 21.8754 51.9956 17.9786 59.2654 12.7305C59.4877 12.57 59.7978 12.6185 59.9605 12.8392ZM4.72439 1.00003C4.89796 1.23107 5.07036 1.4605 5.24161 1.68832C9.2619 7.04026 12.6056 11.5416 15.2425 15.4351C26.1671 31.566 24.9586 37.2639 9.46021 49.7946C6.93217 51.8386 4.02392 54.0643 0.726104 56.5468C4.08569 54.1215 7.06841 52.0006 9.75723 50.1975C28.3659 37.7184 32.8978 40.4587 50.8579 62.8377C52.4758 64.8537 54.2027 67.0291 56.0587 69.3671C56.3577 69.7437 56.66 70.1245 56.9658 70.5096L56.5414 69.9191C54.6365 67.2683 52.874 64.8157 51.257 62.5362C34.8109 39.3511 33.4201 34.0706 50.3529 20.2665C52.9772 18.1271 56.0415 15.7831 59.558 13.1359C56.002 15.7031 52.8656 17.9533 50.0539 19.8652C33.8493 30.8842 28.4315 30.668 15.6434 15.1354C12.6556 11.5064 9.26555 7.04142 5.24161 1.68832C5.07043 1.46044 4.89802 1.23102 4.72439 1.00003Z" fill="#F14B64"/> </g> <defs> <clipPath id="clip0_590_186"> <rect width="59.832" height="70.5096" fill="white" transform="translate(0.226074 0.5)"/> </clipPath> </defs> </svg>')

		// // fire
		animateSvg1('.hero__3_svg_circle_1', '<svg width="51" height="55" viewBox="0 0 51 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_590_193)"> <path d="M25.08 46.6481C23.7467 46.4651 22.4047 46.3605 21.0888 46.0904C19.8688 45.8377 18.8579 46.1688 17.9255 46.8834C16.5312 47.9465 15.529 49.3496 14.6315 50.831C14.5182 51.014 14.4397 51.2231 14.3003 51.3887C14.2306 51.4759 14.0824 51.502 13.9692 51.563C13.9604 51.4497 13.9082 51.3103 13.9517 51.2231C14.1783 50.7177 14.4484 50.2384 14.6576 49.733C15.0672 48.7308 15.3286 47.7025 15.1717 46.5958C15.0585 45.7854 14.6663 45.1492 14.004 44.6874C13.4812 44.3301 12.9234 44.4521 12.3744 44.6351C10.954 45.1144 9.74268 45.9684 8.56624 46.866C5.62078 49.1143 3.01518 51.746 0.453148 54.4039C0.427005 54.4388 0.400862 54.491 0.366004 54.4998C0.244003 54.5346 0.122001 54.552 0 54.5782C0.0261432 54.4649 0.00871439 54.3168 0.0697151 54.2383C0.627436 53.5847 1.20259 52.9573 1.76031 52.3037C3.92147 49.7678 6.06521 47.2145 7.86909 44.3998C8.37452 43.6155 8.8451 42.7789 9.16753 41.8988C9.82111 40.1472 8.63595 38.8313 6.80593 39.1537C6.6665 39.1799 6.50965 39.145 6.3615 39.1363C6.38764 38.9969 6.38764 38.84 6.44864 38.7093C6.94536 37.7071 7.46823 36.7224 7.94752 35.7203C8.04338 35.5111 8.07823 35.2061 7.99981 34.997C7.3288 33.0885 6.98894 31.1365 7.06737 29.1148C7.13708 27.2935 7.50309 25.5331 8.31352 23.9123C8.87996 22.7968 9.61197 21.7424 10.3788 20.7489C11.4856 19.3024 11.6686 17.6728 11.4594 15.9648C11.0586 12.6794 9.80368 9.68168 8.35709 6.75365C7.65123 5.32449 6.84079 3.94762 6.10007 2.5446C6.03035 2.40517 6.0565 2.22217 6.03035 2.05659C6.16978 2.15245 6.35279 2.21345 6.43993 2.34417C8.40938 5.41163 10.6141 8.28738 13.2633 10.8233C15.2589 12.7317 17.6118 13.7077 20.3568 13.8907C22.0823 14.004 23.7641 13.7862 25.4547 13.5334C27.215 13.2633 28.9753 13.0106 30.7356 12.7666C32.9578 12.4616 34.936 11.5466 36.7137 10.2394C40.8269 7.23294 44.8965 4.1829 48.9748 1.1503C49.4193 0.819152 49.8376 0.461862 50.282 0.148145C50.4127 0.0522863 50.6044 0.0522863 50.77 0C50.709 0.156859 50.6916 0.348575 50.587 0.461862C49.5674 1.55987 48.5217 2.62303 47.5195 3.72104C45.0621 6.4225 42.6569 9.17625 40.6787 12.2524C40.0252 13.272 39.389 14.3177 39.1973 15.5552C39.1189 16.0606 39.267 16.4615 39.694 16.7578C40.7223 17.4811 41.8378 17.5421 43.0055 17.1935C44.0512 16.8885 44.9662 16.3482 45.8464 15.7207C45.9597 15.6423 46.1339 15.651 46.2821 15.6162C46.2298 15.7643 46.2124 15.9386 46.1078 16.0432C44.7222 17.4723 43.3889 18.9364 42.2996 20.6095C41.9423 21.1672 41.6199 21.7598 41.3672 22.3698C40.975 23.311 41.1929 23.921 42.0295 24.5048C42.9619 25.1584 44.0164 25.2369 45.1144 25.141C45.2625 25.1323 45.4107 25.2107 45.5588 25.2456C45.4542 25.3589 45.3671 25.5157 45.2364 25.5854C44.1645 26.1606 43.0752 26.6922 42.0208 27.2935C41.6286 27.52 41.2888 27.8599 40.975 28.1997C40.4696 28.7313 40.2605 29.3326 40.3127 30.1256C40.4783 32.6877 40.06 35.1887 39.0317 37.5503C38.779 38.1254 38.413 38.6744 38.0034 39.1537C37.4021 39.8596 37.3586 40.609 37.5329 41.463C37.9947 43.8421 38.8749 46.0555 40.1297 48.1034C41.2539 49.9421 42.5349 51.685 43.7462 53.4715C43.7898 53.5325 43.8595 53.576 43.8769 53.6457C43.9118 53.759 43.9118 53.8723 43.9205 53.9943C43.7985 53.9595 43.6242 53.9682 43.5458 53.881C43.2059 53.5237 42.9096 53.1316 42.5785 52.7656C40.609 50.5783 38.535 48.4955 36.095 46.8137C34.9185 46.0032 33.6898 45.2974 32.2607 45.0272C31.5635 44.8965 30.9099 44.9575 30.2476 45.3061C28.6355 46.134 26.9187 46.5871 25.08 46.6481ZM43.9815 25.6987C43.9815 25.6639 43.9728 25.6377 43.9728 25.6029C43.8769 25.5854 43.7811 25.568 43.6852 25.5506C42.7092 25.4024 41.8378 25.0713 41.1842 24.287C40.8792 23.921 40.7049 23.5027 40.7833 23.0408C40.8705 22.579 40.975 22.0822 41.219 21.6901C41.8552 20.6444 42.5523 19.6248 43.2582 18.6226C43.6068 18.1259 44.0425 17.6728 44.4346 17.2022C43.9989 17.2806 43.6155 17.4375 43.2233 17.5595C41.9685 17.9429 40.7397 17.9429 39.5894 17.2022C38.8836 16.749 38.6657 16.2349 38.8052 15.3983C39.0056 14.2132 39.5982 13.1936 40.2256 12.2001C42.1079 9.23725 44.3824 6.59679 46.7178 3.9999C47.1448 3.52061 47.5718 3.05003 47.9988 2.57946C47.9727 2.55331 47.9465 2.52717 47.9204 2.50103C47.5108 2.81475 47.1012 3.12846 46.683 3.43347C43.2321 5.95192 39.7986 8.49652 36.3128 10.9801C34.692 12.1391 32.8619 12.8711 30.8751 13.15C29.533 13.3417 28.1736 13.4899 26.8316 13.7077C24.5136 14.0912 22.213 14.5094 19.8427 14.2567C18.0301 14.065 16.3133 13.6032 14.7883 12.5749C12.967 11.3461 11.5204 9.71654 10.0913 8.07823C9.66425 7.58151 9.26339 7.06737 8.8451 6.56193C9.06296 7.28523 9.36796 7.94752 9.65554 8.61853C10.7884 11.2764 11.7993 13.9692 11.8951 16.9059C11.93 18.0301 11.8254 19.1455 11.2328 20.1389C10.7971 20.8709 10.3265 21.5942 9.8124 22.274C8.27867 24.2957 7.56409 26.5963 7.44208 29.0973C7.33751 31.1191 7.70352 33.0798 8.42681 34.9708C8.53138 35.2497 8.54881 35.4763 8.39195 35.7464C8.04338 36.3826 7.72094 37.0361 7.39851 37.681C7.24165 37.9947 7.09351 38.3171 6.91922 38.6831C7.11965 38.6831 7.25037 38.6831 7.38108 38.6831C8.56624 38.718 9.29825 39.2932 9.62939 40.426C9.90826 41.3759 9.55097 42.195 9.14139 42.9968C8.01723 45.1667 6.50093 47.0838 5.01077 49.0097C4.92363 49.123 4.83648 49.245 4.74934 49.367C4.9062 49.3583 5.00206 49.2973 5.08049 49.2276C6.38764 48.1557 7.66866 47.0402 9.01939 46.0119C10.1261 45.1667 11.3026 44.4259 12.7056 44.1209C13.4027 43.9728 14.0214 44.1035 14.553 44.6002C15.4593 45.4455 15.6859 46.5174 15.5813 47.6938C15.5552 48.025 15.4942 48.3474 15.4419 48.6785C15.6423 48.5653 15.7469 48.4345 15.8602 48.3038C16.6096 47.4062 17.4201 46.5784 18.4571 46.0294C19.1891 45.6459 19.9559 45.4717 20.8012 45.6285C21.8818 45.8202 22.9711 45.9684 24.0691 46.0904C26.1083 46.3257 28.0429 45.8987 29.8816 45.0185C30.4829 44.7309 31.0494 44.4434 31.7814 44.5392C33.0188 44.7048 34.1255 45.1667 35.1887 45.7767C37.0448 46.8485 38.657 48.2428 40.1995 49.7156C40.365 49.8724 40.5393 50.0206 40.7049 50.1774C40.6613 49.9247 40.5567 49.733 40.4435 49.55C39.389 47.8507 38.4653 46.0729 37.8117 44.1732C37.3847 42.9271 36.9926 41.6635 36.9926 40.3302C36.9926 40.0775 37.0884 39.7899 37.2191 39.572C37.6461 38.8836 38.2126 38.2649 38.5437 37.5329C39.5982 35.2323 40.0339 32.7835 39.8596 30.2563C39.7986 29.2978 40.0077 28.496 40.6962 27.8599C41.1842 27.4067 41.707 26.9972 42.2648 26.6312C42.8225 26.2913 43.4151 26.0124 43.9815 25.6987Z" fill="#EF536B"/> </g> <defs> <clipPath id="clip0_590_193"> <rect width="50.77" height="54.5782" fill="white"/> </clipPath> </defs> </svg>')
		animateSvg2('.hero__3_svg_circle_2', '<svg width="51" height="55" viewBox="0 0 51 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_590_193)"> <path d="M25.08 46.6481C23.7467 46.4651 22.4047 46.3605 21.0888 46.0904C19.8688 45.8377 18.8579 46.1688 17.9255 46.8834C16.5312 47.9465 15.529 49.3496 14.6315 50.831C14.5182 51.014 14.4397 51.2231 14.3003 51.3887C14.2306 51.4759 14.0824 51.502 13.9692 51.563C13.9604 51.4497 13.9082 51.3103 13.9517 51.2231C14.1783 50.7177 14.4484 50.2384 14.6576 49.733C15.0672 48.7308 15.3286 47.7025 15.1717 46.5958C15.0585 45.7854 14.6663 45.1492 14.004 44.6874C13.4812 44.3301 12.9234 44.4521 12.3744 44.6351C10.954 45.1144 9.74268 45.9684 8.56624 46.866C5.62078 49.1143 3.01518 51.746 0.453148 54.4039C0.427005 54.4388 0.400862 54.491 0.366004 54.4998C0.244003 54.5346 0.122001 54.552 0 54.5782C0.0261432 54.4649 0.00871439 54.3168 0.0697151 54.2383C0.627436 53.5847 1.20259 52.9573 1.76031 52.3037C3.92147 49.7678 6.06521 47.2145 7.86909 44.3998C8.37452 43.6155 8.8451 42.7789 9.16753 41.8988C9.82111 40.1472 8.63595 38.8313 6.80593 39.1537C6.6665 39.1799 6.50965 39.145 6.3615 39.1363C6.38764 38.9969 6.38764 38.84 6.44864 38.7093C6.94536 37.7071 7.46823 36.7224 7.94752 35.7203C8.04338 35.5111 8.07823 35.2061 7.99981 34.997C7.3288 33.0885 6.98894 31.1365 7.06737 29.1148C7.13708 27.2935 7.50309 25.5331 8.31352 23.9123C8.87996 22.7968 9.61197 21.7424 10.3788 20.7489C11.4856 19.3024 11.6686 17.6728 11.4594 15.9648C11.0586 12.6794 9.80368 9.68168 8.35709 6.75365C7.65123 5.32449 6.84079 3.94762 6.10007 2.5446C6.03035 2.40517 6.0565 2.22217 6.03035 2.05659C6.16978 2.15245 6.35279 2.21345 6.43993 2.34417C8.40938 5.41163 10.6141 8.28738 13.2633 10.8233C15.2589 12.7317 17.6118 13.7077 20.3568 13.8907C22.0823 14.004 23.7641 13.7862 25.4547 13.5334C27.215 13.2633 28.9753 13.0106 30.7356 12.7666C32.9578 12.4616 34.936 11.5466 36.7137 10.2394C40.8269 7.23294 44.8965 4.1829 48.9748 1.1503C49.4193 0.819152 49.8376 0.461862 50.282 0.148145C50.4127 0.0522863 50.6044 0.0522863 50.77 0C50.709 0.156859 50.6916 0.348575 50.587 0.461862C49.5674 1.55987 48.5217 2.62303 47.5195 3.72104C45.0621 6.4225 42.6569 9.17625 40.6787 12.2524C40.0252 13.272 39.389 14.3177 39.1973 15.5552C39.1189 16.0606 39.267 16.4615 39.694 16.7578C40.7223 17.4811 41.8378 17.5421 43.0055 17.1935C44.0512 16.8885 44.9662 16.3482 45.8464 15.7207C45.9597 15.6423 46.1339 15.651 46.2821 15.6162C46.2298 15.7643 46.2124 15.9386 46.1078 16.0432C44.7222 17.4723 43.3889 18.9364 42.2996 20.6095C41.9423 21.1672 41.6199 21.7598 41.3672 22.3698C40.975 23.311 41.1929 23.921 42.0295 24.5048C42.9619 25.1584 44.0164 25.2369 45.1144 25.141C45.2625 25.1323 45.4107 25.2107 45.5588 25.2456C45.4542 25.3589 45.3671 25.5157 45.2364 25.5854C44.1645 26.1606 43.0752 26.6922 42.0208 27.2935C41.6286 27.52 41.2888 27.8599 40.975 28.1997C40.4696 28.7313 40.2605 29.3326 40.3127 30.1256C40.4783 32.6877 40.06 35.1887 39.0317 37.5503C38.779 38.1254 38.413 38.6744 38.0034 39.1537C37.4021 39.8596 37.3586 40.609 37.5329 41.463C37.9947 43.8421 38.8749 46.0555 40.1297 48.1034C41.2539 49.9421 42.5349 51.685 43.7462 53.4715C43.7898 53.5325 43.8595 53.576 43.8769 53.6457C43.9118 53.759 43.9118 53.8723 43.9205 53.9943C43.7985 53.9595 43.6242 53.9682 43.5458 53.881C43.2059 53.5237 42.9096 53.1316 42.5785 52.7656C40.609 50.5783 38.535 48.4955 36.095 46.8137C34.9185 46.0032 33.6898 45.2974 32.2607 45.0272C31.5635 44.8965 30.9099 44.9575 30.2476 45.3061C28.6355 46.134 26.9187 46.5871 25.08 46.6481ZM43.9815 25.6987C43.9815 25.6639 43.9728 25.6377 43.9728 25.6029C43.8769 25.5854 43.7811 25.568 43.6852 25.5506C42.7092 25.4024 41.8378 25.0713 41.1842 24.287C40.8792 23.921 40.7049 23.5027 40.7833 23.0408C40.8705 22.579 40.975 22.0822 41.219 21.6901C41.8552 20.6444 42.5523 19.6248 43.2582 18.6226C43.6068 18.1259 44.0425 17.6728 44.4346 17.2022C43.9989 17.2806 43.6155 17.4375 43.2233 17.5595C41.9685 17.9429 40.7397 17.9429 39.5894 17.2022C38.8836 16.749 38.6657 16.2349 38.8052 15.3983C39.0056 14.2132 39.5982 13.1936 40.2256 12.2001C42.1079 9.23725 44.3824 6.59679 46.7178 3.9999C47.1448 3.52061 47.5718 3.05003 47.9988 2.57946C47.9727 2.55331 47.9465 2.52717 47.9204 2.50103C47.5108 2.81475 47.1012 3.12846 46.683 3.43347C43.2321 5.95192 39.7986 8.49652 36.3128 10.9801C34.692 12.1391 32.8619 12.8711 30.8751 13.15C29.533 13.3417 28.1736 13.4899 26.8316 13.7077C24.5136 14.0912 22.213 14.5094 19.8427 14.2567C18.0301 14.065 16.3133 13.6032 14.7883 12.5749C12.967 11.3461 11.5204 9.71654 10.0913 8.07823C9.66425 7.58151 9.26339 7.06737 8.8451 6.56193C9.06296 7.28523 9.36796 7.94752 9.65554 8.61853C10.7884 11.2764 11.7993 13.9692 11.8951 16.9059C11.93 18.0301 11.8254 19.1455 11.2328 20.1389C10.7971 20.8709 10.3265 21.5942 9.8124 22.274C8.27867 24.2957 7.56409 26.5963 7.44208 29.0973C7.33751 31.1191 7.70352 33.0798 8.42681 34.9708C8.53138 35.2497 8.54881 35.4763 8.39195 35.7464C8.04338 36.3826 7.72094 37.0361 7.39851 37.681C7.24165 37.9947 7.09351 38.3171 6.91922 38.6831C7.11965 38.6831 7.25037 38.6831 7.38108 38.6831C8.56624 38.718 9.29825 39.2932 9.62939 40.426C9.90826 41.3759 9.55097 42.195 9.14139 42.9968C8.01723 45.1667 6.50093 47.0838 5.01077 49.0097C4.92363 49.123 4.83648 49.245 4.74934 49.367C4.9062 49.3583 5.00206 49.2973 5.08049 49.2276C6.38764 48.1557 7.66866 47.0402 9.01939 46.0119C10.1261 45.1667 11.3026 44.4259 12.7056 44.1209C13.4027 43.9728 14.0214 44.1035 14.553 44.6002C15.4593 45.4455 15.6859 46.5174 15.5813 47.6938C15.5552 48.025 15.4942 48.3474 15.4419 48.6785C15.6423 48.5653 15.7469 48.4345 15.8602 48.3038C16.6096 47.4062 17.4201 46.5784 18.4571 46.0294C19.1891 45.6459 19.9559 45.4717 20.8012 45.6285C21.8818 45.8202 22.9711 45.9684 24.0691 46.0904C26.1083 46.3257 28.0429 45.8987 29.8816 45.0185C30.4829 44.7309 31.0494 44.4434 31.7814 44.5392C33.0188 44.7048 34.1255 45.1667 35.1887 45.7767C37.0448 46.8485 38.657 48.2428 40.1995 49.7156C40.365 49.8724 40.5393 50.0206 40.7049 50.1774C40.6613 49.9247 40.5567 49.733 40.4435 49.55C39.389 47.8507 38.4653 46.0729 37.8117 44.1732C37.3847 42.9271 36.9926 41.6635 36.9926 40.3302C36.9926 40.0775 37.0884 39.7899 37.2191 39.572C37.6461 38.8836 38.2126 38.2649 38.5437 37.5329C39.5982 35.2323 40.0339 32.7835 39.8596 30.2563C39.7986 29.2978 40.0077 28.496 40.6962 27.8599C41.1842 27.4067 41.707 26.9972 42.2648 26.6312C42.8225 26.2913 43.4151 26.0124 43.9815 25.6987Z" fill="#EF536B"/> </g> <defs> <clipPath id="clip0_590_193"> <rect width="50.77" height="54.5782" fill="white"/> </clipPath> </defs> </svg>')

		// lightning
		animateSvg1('.hero__4_svg_circle_1', '<svg width="35" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_590_182)"> <path d="M-0.000112912 25.6749C0.0165678 21.5801 1.08413 18.3575 3.14698 15.4517C5.21539 12.5459 7.94547 10.5123 11.2761 9.26775C11.4039 9.21775 11.5374 9.1233 11.6208 9.01217C12.5938 7.75094 13.1387 6.29524 13.5057 4.76732C13.8338 3.40052 14.0173 2.00594 14.0117 0.59469C14.0117 0.144646 14.3453 -0.138715 14.6734 0.0613048C14.8124 0.144646 14.9403 0.361334 14.9569 0.528017C15.1237 2.08928 15.5741 3.56164 16.2469 4.97845C16.7918 6.12856 17.5035 7.17311 18.332 8.13987C18.5711 8.41767 18.8825 8.37322 19.1716 8.41212C22.6579 8.88438 25.7716 10.2012 28.4405 12.5125C30.7814 14.546 32.4606 17.0296 33.4336 19.9799C33.9007 21.3967 34.1842 22.8524 34.2621 24.347C34.3955 26.8083 34.0619 29.1975 33.1445 31.4866C32.0436 34.2313 30.3644 36.5649 28.0847 38.4595C26.1831 40.0374 24.0312 41.1264 21.6459 41.7598C21.5403 41.7876 21.4235 41.8987 21.379 41.9987C20.7785 43.3933 20.4115 44.8434 20.2447 46.3491C20.0946 47.7104 20.128 49.0605 20.3504 50.4051C20.3948 50.6829 20.2447 50.9107 20.0112 50.9551C19.7387 51.0051 19.5386 50.8774 19.4496 50.5884C19.1327 49.5772 18.8547 48.5494 18.4932 47.5548C17.9817 46.1491 17.2867 44.8323 16.3192 43.6822C16.0189 43.3211 15.6686 42.9988 15.3295 42.671C14.9903 42.3432 14.5844 42.1821 14.1007 42.0987C10.8924 41.5487 8.0678 40.1652 5.67133 37.9483C2.94125 35.4314 1.16754 32.3533 0.383544 28.7196C0.127773 27.5473 -0.0112334 26.3527 -0.000112912 25.6749ZM31.4208 24.6415C31.3652 24.1359 31.3318 23.208 31.1428 22.3079C30.192 17.6964 27.6009 14.2627 23.4863 12.0014C20.7785 10.5179 17.8649 9.95671 14.7901 10.2123C13.0331 10.3567 11.3428 10.779 9.74699 11.5235C6.3886 13.0792 3.91986 15.5461 2.33519 18.8965C1.21202 21.28 0.744959 23.7803 0.972929 26.4139C1.12862 28.2363 1.56787 29.9809 2.39635 31.6199C3.81421 34.4202 5.93266 36.5537 8.65162 38.0761C10.6366 39.1873 12.794 39.7818 15.0626 39.9596C16.7751 40.093 18.4599 39.9596 20.1168 39.5207C23.2751 38.6817 25.9273 37.0371 28.0013 34.4924C30.2309 31.7422 31.3708 28.603 31.4208 24.6415ZM19.8221 50.2828C19.761 49.1327 19.6887 48.0049 19.7721 46.8659C19.9 45.1157 20.3114 43.4433 20.9787 41.8265C21.0954 41.5431 21.2734 41.4153 21.5681 41.3209C22.6245 40.9597 23.7087 40.643 24.704 40.1485C27.0671 38.9873 29.0188 37.3149 30.5868 35.1981C32.7664 32.2533 33.8729 28.9586 33.8729 25.3026C33.8729 24.1025 33.7283 22.9135 33.467 21.7356C32.8998 19.1965 31.8156 16.9241 30.1698 14.9127C28.4906 12.857 26.4555 11.2735 24.009 10.2178C22.3965 9.51778 20.734 9.01773 18.9825 8.82327C18.6879 8.78993 18.3765 8.82882 18.1207 8.54546C16.6083 6.85641 15.5519 4.91178 14.9514 2.73379C14.7679 2.0615 14.6511 1.36699 14.5066 0.683588C14.4954 0.705812 14.4788 0.739148 14.4732 0.766929C14.4565 0.905831 14.4343 1.04473 14.4343 1.17808C14.3953 2.43931 14.2119 3.67832 13.9172 4.90066C13.5613 6.39525 13.022 7.81206 12.1212 9.07329C11.9433 9.32332 11.7709 9.56778 11.4373 9.68446C9.15204 10.4901 7.1448 11.7513 5.41556 13.4404C3.76417 15.0572 2.50756 16.9463 1.61792 19.0798C1.1731 20.1466 0.856164 21.2523 0.694917 22.3968C0.733839 22.3301 0.7672 22.2579 0.783881 22.1801C1.17866 20.2799 1.89037 18.502 2.95793 16.8796C5.79366 12.5736 9.82483 10.229 14.9291 9.7678C17.1032 9.57334 19.2439 9.8567 21.3178 10.579C23.9868 11.5069 26.272 13.0126 28.1236 15.1461C30.1197 17.4463 31.3318 20.1133 31.7099 23.1413C31.9268 24.8526 31.8879 26.5583 31.5042 28.2363C30.7369 31.5866 29.0744 34.4258 26.4611 36.6815C25.0654 37.8816 23.503 38.804 21.7793 39.4429C19.1938 40.3986 16.5305 40.6541 13.8115 40.2374C11.8599 39.9374 9.98052 39.3707 8.27908 38.3595C4.95406 36.3926 2.50756 33.6646 1.23982 29.9587C1.21758 29.892 1.17866 29.8253 1.13418 29.7253C1.11194 29.792 1.09525 29.8142 1.10081 29.8253C1.11194 29.8864 1.12862 29.9531 1.1453 30.0142C1.97933 32.7534 3.41943 35.1425 5.44892 37.1594C7.95103 39.6374 10.948 41.1764 14.4398 41.7376C14.6456 41.7709 14.868 41.8154 15.0348 41.9265C15.9856 42.5543 16.7195 43.3933 17.3367 44.3323C18.3765 45.9046 19.066 47.6326 19.5775 49.4383C19.6665 49.7217 19.7443 50.005 19.8221 50.2828Z" fill="#EF536B"/> </g> <defs> <clipPath id="clip0_590_182"> <rect width="34.29" height="50.9716" fill="white"/> </clipPath> </defs> </svg>')
		animateSvg2('.hero__4_svg_circle_2', '<svg width="35" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_590_182)"> <path d="M-0.000112912 25.6749C0.0165678 21.5801 1.08413 18.3575 3.14698 15.4517C5.21539 12.5459 7.94547 10.5123 11.2761 9.26775C11.4039 9.21775 11.5374 9.1233 11.6208 9.01217C12.5938 7.75094 13.1387 6.29524 13.5057 4.76732C13.8338 3.40052 14.0173 2.00594 14.0117 0.59469C14.0117 0.144646 14.3453 -0.138715 14.6734 0.0613048C14.8124 0.144646 14.9403 0.361334 14.9569 0.528017C15.1237 2.08928 15.5741 3.56164 16.2469 4.97845C16.7918 6.12856 17.5035 7.17311 18.332 8.13987C18.5711 8.41767 18.8825 8.37322 19.1716 8.41212C22.6579 8.88438 25.7716 10.2012 28.4405 12.5125C30.7814 14.546 32.4606 17.0296 33.4336 19.9799C33.9007 21.3967 34.1842 22.8524 34.2621 24.347C34.3955 26.8083 34.0619 29.1975 33.1445 31.4866C32.0436 34.2313 30.3644 36.5649 28.0847 38.4595C26.1831 40.0374 24.0312 41.1264 21.6459 41.7598C21.5403 41.7876 21.4235 41.8987 21.379 41.9987C20.7785 43.3933 20.4115 44.8434 20.2447 46.3491C20.0946 47.7104 20.128 49.0605 20.3504 50.4051C20.3948 50.6829 20.2447 50.9107 20.0112 50.9551C19.7387 51.0051 19.5386 50.8774 19.4496 50.5884C19.1327 49.5772 18.8547 48.5494 18.4932 47.5548C17.9817 46.1491 17.2867 44.8323 16.3192 43.6822C16.0189 43.3211 15.6686 42.9988 15.3295 42.671C14.9903 42.3432 14.5844 42.1821 14.1007 42.0987C10.8924 41.5487 8.0678 40.1652 5.67133 37.9483C2.94125 35.4314 1.16754 32.3533 0.383544 28.7196C0.127773 27.5473 -0.0112334 26.3527 -0.000112912 25.6749ZM31.4208 24.6415C31.3652 24.1359 31.3318 23.208 31.1428 22.3079C30.192 17.6964 27.6009 14.2627 23.4863 12.0014C20.7785 10.5179 17.8649 9.95671 14.7901 10.2123C13.0331 10.3567 11.3428 10.779 9.74699 11.5235C6.3886 13.0792 3.91986 15.5461 2.33519 18.8965C1.21202 21.28 0.744959 23.7803 0.972929 26.4139C1.12862 28.2363 1.56787 29.9809 2.39635 31.6199C3.81421 34.4202 5.93266 36.5537 8.65162 38.0761C10.6366 39.1873 12.794 39.7818 15.0626 39.9596C16.7751 40.093 18.4599 39.9596 20.1168 39.5207C23.2751 38.6817 25.9273 37.0371 28.0013 34.4924C30.2309 31.7422 31.3708 28.603 31.4208 24.6415ZM19.8221 50.2828C19.761 49.1327 19.6887 48.0049 19.7721 46.8659C19.9 45.1157 20.3114 43.4433 20.9787 41.8265C21.0954 41.5431 21.2734 41.4153 21.5681 41.3209C22.6245 40.9597 23.7087 40.643 24.704 40.1485C27.0671 38.9873 29.0188 37.3149 30.5868 35.1981C32.7664 32.2533 33.8729 28.9586 33.8729 25.3026C33.8729 24.1025 33.7283 22.9135 33.467 21.7356C32.8998 19.1965 31.8156 16.9241 30.1698 14.9127C28.4906 12.857 26.4555 11.2735 24.009 10.2178C22.3965 9.51778 20.734 9.01773 18.9825 8.82327C18.6879 8.78993 18.3765 8.82882 18.1207 8.54546C16.6083 6.85641 15.5519 4.91178 14.9514 2.73379C14.7679 2.0615 14.6511 1.36699 14.5066 0.683588C14.4954 0.705812 14.4788 0.739148 14.4732 0.766929C14.4565 0.905831 14.4343 1.04473 14.4343 1.17808C14.3953 2.43931 14.2119 3.67832 13.9172 4.90066C13.5613 6.39525 13.022 7.81206 12.1212 9.07329C11.9433 9.32332 11.7709 9.56778 11.4373 9.68446C9.15204 10.4901 7.1448 11.7513 5.41556 13.4404C3.76417 15.0572 2.50756 16.9463 1.61792 19.0798C1.1731 20.1466 0.856164 21.2523 0.694917 22.3968C0.733839 22.3301 0.7672 22.2579 0.783881 22.1801C1.17866 20.2799 1.89037 18.502 2.95793 16.8796C5.79366 12.5736 9.82483 10.229 14.9291 9.7678C17.1032 9.57334 19.2439 9.8567 21.3178 10.579C23.9868 11.5069 26.272 13.0126 28.1236 15.1461C30.1197 17.4463 31.3318 20.1133 31.7099 23.1413C31.9268 24.8526 31.8879 26.5583 31.5042 28.2363C30.7369 31.5866 29.0744 34.4258 26.4611 36.6815C25.0654 37.8816 23.503 38.804 21.7793 39.4429C19.1938 40.3986 16.5305 40.6541 13.8115 40.2374C11.8599 39.9374 9.98052 39.3707 8.27908 38.3595C4.95406 36.3926 2.50756 33.6646 1.23982 29.9587C1.21758 29.892 1.17866 29.8253 1.13418 29.7253C1.11194 29.792 1.09525 29.8142 1.10081 29.8253C1.11194 29.8864 1.12862 29.9531 1.1453 30.0142C1.97933 32.7534 3.41943 35.1425 5.44892 37.1594C7.95103 39.6374 10.948 41.1764 14.4398 41.7376C14.6456 41.7709 14.868 41.8154 15.0348 41.9265C15.9856 42.5543 16.7195 43.3933 17.3367 44.3323C18.3765 45.9046 19.066 47.6326 19.5775 49.4383C19.6665 49.7217 19.7443 50.005 19.8221 50.2828Z" fill="#EF536B"/> </g> <defs> <clipPath id="clip0_590_182"> <rect width="34.29" height="50.9716" fill="white"/> </clipPath> </defs> </svg>')
	}, time)
}
