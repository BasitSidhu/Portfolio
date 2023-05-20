import React from 'react';
import './About.css';
import image from '../../../Assets/main-img.png';

function About() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  // return new bootstrap.Popover(popoverTriggerEl)
})
  return (
    <section className="about">
      <div className="main">
        <img src={image} />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>Developer & Designer</h5>
          <p>
            I am a front-end web developer. Ican provide clean code and pixel
            perfect design. I also Make the website more & more interective with
            web animations. I can provide clean code and pixel perfect design. I
            also make the website more & more interactive with web animations.
            Aresponsive design makes your website accessible to all user,
            regardless of their device.
          </p>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="top"
            data-bs-content="Top popover"
          >
            Popover on top
          </button>
          {/* <button type="button">Lets Talk</button> */}
        </div>
      </div>
    </section>
  );
}

export default About