import React, { Component } from 'react';
import styles from './styles.module.css';
import IntroText from '../IntroText/';

class HeaderSection extends Component {
  componentDidMount() {
    this.setOverlayMovement();
  }

  setOverlayMovement = () => {
    let overlay = document.querySelector(`#overlay`);
    let background = document.querySelector(`#background`);
    overlay.onmousemove = event => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = event.clientX / windowWidth;
      const mouseY = event.clientY / windowHeight;

      overlay.style.transform = `translate3d(-${10 * mouseX}%, -${10 * mouseY}%, 0)`;
      background.style.transform = `translate3d(${1 * mouseX}%, ${1 * mouseY}%, 0)`;
    };
  }

  render() {
    let backgroundStyle = `${styles.background} animated`;
    let overlayStyle = `${styles.overlay} animated`;
    let profileStyle = `${styles.profilePic} animated zoomIn`;
    let nameStyle = `${styles.title} animated fadeInUp`;

    let { title, profilePic, intro, background, overlay } = this.props.data;

    return (
      <div className={styles.header} id="header">
        <img
          className={backgroundStyle}
          id="background"
          alt={title}
          src={background}
        />
        <img
          className={overlayStyle}
          id="overlay"
          alt={title}
          src={overlay}
        />
        <img className={profileStyle} alt={title} src={profilePic} />
        <h1 className={nameStyle}>{title}</h1>
        <IntroText text={intro}/>
      </div>
    );
  }
}

export default HeaderSection;
