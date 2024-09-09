import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Blog.scss"; // Make sure to style this

const Blog = () => {
  return (
    <div className="app__blog">
      <h2 className="head-text">
        Exploring Local Experiences Around the <span>World</span>
      </h2>
      <div className="app__blog-content">
        <section className="app__blog-section">
          <h3 className="section-title">
            “Travel is the only thing you buy that makes you richer.” – Unknown
          </h3>
          <p className="section-text">
            Traveling is more than just visiting new places; it’s about
            immersing yourself in different cultures and experiences that can
            profoundly change you. As the famous saying goes, “Travel is the
            only thing you buy that makes you richer.” This blog explores how
            traveling around the world can transform you into a different
            person, broadening your horizons and enriching your life in ways you
            never imagined.
          </p>
          {/* </section> */}
          {/* {/* <section className="app__blog-section"> */} 
          <br></br>
          <h3 className="section-title">
            “The world is a book, and those who do not travel read only one
            page.” – Saint Augustine
          </h3>
          <p className="section-text">
            One of the most enriching aspects of travel is the opportunity to
            immerse yourself in different cultures. Whether it’s participating
            in a traditional tea ceremony in Japan, dancing the tango in
            Argentina, or celebrating Diwali in India, these experiences allow
            you to see the world through a different lens. For instance, during
            my trip to Morocco, I was invited to a local family’s home for a
            meal. The warmth and hospitality they showed me, despite being
            strangers, left a lasting impression and taught me the true meaning
            of generosity. Traveling is a continuous learning journey. You pick
            up new languages, understand historical contexts, and adapt to new
            environments. Each destination offers unique lessons. In Italy, I
            learned about the Renaissance and its impact on modern art and
            culture. In Kenya, I gained insights into wildlife conservation
            efforts. These experiences not only expand your knowledge but also
            enhance your adaptability and problem-solving skills.
            <br></br>
            The friendships and connections you make while traveling are
            invaluable. Meeting people from different backgrounds and forming
            bonds with them can significantly influence your worldview. I
            remember meeting a fellow traveler in Thailand who shared his
            experiences of volunteering in remote villages. His stories inspired
            me to participate in community service projects during my travels,
            which have been some of the most rewarding experiences of my life.
          </p>
          {/* </section> */}
          {/* <section className="app__blog-section"> */}
          <h3 className="section-title">
            “Travel makes one modest. You see what a tiny place you occupy in
            the world.” – Gustave Flaubert
          </h3>
          <p className="section-text">
            All these experiences collectively contribute to personal
            transformation. Traveling has changed my outlook on life, making me
            more open-minded and appreciative of diversity. It has taught me to
            value experiences over material possessions and to embrace
            uncertainty and spontaneity. Each journey has left an indelible mark
            on my personality, shaping me into a more empathetic and resilient
            individual.
            <br></br>
            Traveling isn’t always smooth sailing. Culture shock, language
            barriers, and homesickness are common challenges. However,
            overcoming these obstacles is part of the growth process. I recall
            feeling overwhelmed during my first solo trip to China due to the
            language barrier. But as I navigated through the challenges, I
            became more confident and self-reliant. These experiences taught me
            that stepping out of your comfort zone is essential for personal
            development.
          </p>
          {/* </section> */}
          {/* <section className="app__blog-section"> */}
          <h3 className="section-title">
            “To travel is to live.” – Hans Christian Andersen
          </h3>
          <p className="section-text">
            Traveling around the world and experiencing different cultures can
            be a transformative journey. It broadens your horizons, enriches
            your life, and shapes you into a different person. So, pack your
            bags, embrace the unknown, and embark on a journey of
            self-discovery. Share your travel experiences and how they have
            changed you in the comments below. Let’s inspire each other to
            explore the world and grow together.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Blog, "app__blog"), "blog", "app__whitebg");
