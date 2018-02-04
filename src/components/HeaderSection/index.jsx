import React, { Component } from 'react';
import styles from './styles.module.css';
import IntroText from '../IntroText/';

class HeaderSection extends Component {
  componentDidMount() {
    this.setOverlayMovement();
  }

  setOverlayMovement = () => {
    let overlay1 = document.querySelector(`#overlay1`);
    // let overlay2 = document.querySelector(`#overlay2`);
    let background = document.querySelector(`#background`);
    overlay1.onmousemove = event => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = event.clientX / windowWidth;
      const mouseY = event.clientY / windowHeight;

      overlay1.style.transform = `translate3d(-${1 * mouseX}%, -${1 * mouseY}%, 0)`;
      // overlay2.style.transform = `translate3d(${0.5 -(1.5 * mouseX)}%, ${-1.5 * mouseY}%, 0)`;
      background.style.transform = `translate3d(${1 * mouseX}%, ${1 * mouseY}%, 0)`;
    };
  }

  render() {
    let backgroundStyle = `${styles.background} animated`;
    let overlayStyle1 = `${styles.overlay1} animated`;
    let overlayStyle2 = `${styles.overlay2} animated`;
    let profileStyle = `${styles.profilePic} animated zoomIn`;
    let nameStyle = `${styles.title} animated fadeInUp`;

    let { title, profilePic, intro, background, overlay, overlayFlipped } = this.props.data;

    return (
      <div className={styles.header} id="header">
        <img
          className={backgroundStyle}
          id="background"
          alt={title}
          src={background}
        />
        <div
          className={overlayStyle1}
          style={{backgroundImage: `url(${overlay})`}}
          id="overlay1"
        />
        {/* <div
          className={overlayStyle2}
          style={{backgroundImage: `url(${overlayFlipped})`}}
          id="overlay2"
        /> */}
        <img className={profileStyle} alt={title} src={profilePic} />
        <h1 className={nameStyle}>{title}</h1>
        <IntroText text={intro}/>
      </div>
    );
  }
}

export default HeaderSection;
