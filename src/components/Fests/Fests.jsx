import { useState } from 'react';
import '../Home/style.css';
import '../Home/font.css';

const Fests = () => {

  const [activeHero, setActiveHero] = useState(0);

  const handleHeroClick = (index) => {
    setActiveHero(index);
  };

  const heroData = [
    {
      title: 'Food Festival',
      hero: 'lightning',
      description: `Embark on a flavor-filled journey at DESPORTIVOS FOOD FESTIVAL! Picture a campus transformed into a culinary wonderland, featuring an array of dishes from top-notch brands. Indulge in spicy sensations and delectable sweets, ensuring every taste bud is in for a treat. With attendees from across India, this festival promises not just food, but a ton of unforgettable memories and a celebration of our nation's diverse flavors. Join us for a delicious adventure of a lifetime!
      `,
    },
    {
      title: 'Concerts',
      hero: 'fire',
      description: `Get ready for an extraordinary spectacle at Desportivos! The stage will be ablaze with the nation's most promising artists, delivering electrifying performances that promise to captivate every soul. Amidst a dynamic lineup of events, the air will pulsate with the energy of music, leaving the crowd in sheer awe. Brace yourself for a sensory journey, where each note and every beat will create an unforgettable symphony of entertainment. Join us for nights filled with pure musical magic!
      `,
    },
    {
      title: 'Sports',
      hero: 'demon',
      description: `Experience the pinnacle of sportsmanship at DESPORTIVOS! Over 15 thrilling sports, 150+ colleges nationwide – prepare for 3 days of sheer dedication, relentless hard work, and the purest spirit of competition. Join us for an electrifying showcase of athleticism, where passion takes center stage, and the pursuit of excellence becomes a thrilling saga. 
      `,
    },
    {
      title: 'E-SPORTS',
      hero: 'lady',
      description: `Gear up for a gaming revolution at DESPORTIVOS! Immerse yourself in the unparalleled thrill of large-scale LAN events, showcasing your favorite games like never before. Witness the clash of titans as players and enthusiasts from diverse realms of Mobile and PC gaming converge. From the intense world of esports to the console gaming realm, we're set to captivate every gaming enthusiast. Brace yourself for an unexplored gaming adventure – where the action is limitless, and the excitement knows no bounds!`,
    },
  ];

  return (
    <div>
      <section className="select min-h-screen bg-black z-20">
        <div className="select__title font-[ethnocentric]">
          Know Your
          <p>Fest</p>
        </div>
        <div className="select__box">
          <div className="container">
            <div className="box__heros">
              <div className="heros">
              {heroData.map((hero, index) => (
                  <div
                    key={index}
                    className={`hero_${index + 1}_box 
                    ${index === activeHero ? 'hero_hide_hover' : ''}
                    `}
                    onClick={() => handleHeroClick(index)}
                  >
                    <img
                      src={`src/components/images/active_hero_${index + 1}.png`}
                      alt={`hero ${index + 1}`}
                      className={`hero_${index + 1} ${index === activeHero ? 'hero__active' : ''}`}
                    />
                    {console.log(activeHero)}
                    <img
                      src={`src/components/images/hero_default_${index + 1}.png`}
                      alt={`hero ${index + 1}`}
                      className={`hero_default_${index + 1} ${index === activeHero ? '' : 'hero__default'}`}
                    />
                  </div>
                ))}

              </div>
              <div className="herosMob">
                {heroData.map((hero, index) => (
                  <div
                    key={index}
                    onClick={() => handleHeroClick(index)}
                  >
                    <img
                      src={`src/components/images/active_hero_${index + 1}.png`}
                      alt={`hero ${index + 1}`}
                      className={`${hero.hero_dark} ${index === activeHero ? 'hero__active' : ''}`}
                    />
                    {console.log(activeHero)}
                    <img
                      src={`src/components/images/hero_default_${index + 1}.png`}
                      alt={`hero ${index + 1}`}
                      className={`${hero.hero_light} ${index === activeHero ? '' : 'hero__default'}`}
                    />
                  </div>
                ))}
              </div>
              <div className="heros__content">
                <div className="heros__content">
                  {heroData.map((hero, index) => (
                    <div key={index} className={`content__hero content__hero_${index + 1}`} style={{ display: index === activeHero ? 'block' : 'none' }}>
                      <h3 className="hero__title">
                        <img src={`src/components/images/force-${index + 1}.svg`} alt="force" className="hero__force" />
                        {hero.title}
                      </h3>
                      <div className="hero__description">
                        {hero.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="select__left_rock"></span>
        <span className="select__right_rock"></span>
      </section>
    </div>
  )
}

export default Fests