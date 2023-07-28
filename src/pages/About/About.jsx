import React, { useEffect, useState } from 'react';
import Top from '../Top';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import Ending from '../../components/Ending';
import './About.scss';

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="About">
      <article>
        <Top title="About Us"/>
        <WhoWeAre />
        <WhatWeDo />
        <Team />
        {/* TODO: Add Meet the Team section */}
        <Ending width={width} />
      </article>
    </div>
  );
};

export default About;
