import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Article from './article';
import Footer from './footer'
import './index.css';
import Gallery from './gallery';
import FirstGallery from './firstGallery';
import LearnMore from './cardsLearnMore';
import Video from './video';

ReactDOM.render(
  <Header />,
  document.querySelector('header')
);

ReactDOM.render(
  <FirstGallery/>,
  document.querySelector('firstGallery')
);

ReactDOM.render(
  <Article />,
  document.querySelector('article')
);

ReactDOM.render(
  <Gallery />,
  document.querySelector('gallery')
);

ReactDOM.render(
  <LearnMore />,
  document.querySelector('learnMoreCards')
);

ReactDOM.render(
  <Video />,
  document.querySelector('vidos')
);

ReactDOM.render(
  <Footer />,
  document.querySelector('footer')
);
