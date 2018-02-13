import React, { Component } from 'react';
import styles from './styles.module.css';
import IntroText from '../IntroText/';

class HeaderSection extends Component {
  componentDidMount() {
    this.setOverlayMovement();
  }

  setOverlayMovement = () => {
    let overlaySet = document.querySelector(`#overlaySet`);
    let background = document.querySelector(`#background`);
    let header = document.querySelector(`#header`);
    header.onmousemove = event => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let mouseX = event.clientX / windowWidth;
      let mouseY = event.clientY / windowHeight;
      overlaySet.style.transform = `translate3d(${5 - 10 * mouseX}%, ${5 - 10 * mouseY}%, 0)`;
      background.style.transform = `translate3d(${1 * mouseX}%, ${1 * mouseY}%, 0)`;
    };
  }

  render() {
    let backgroundStyle = `${styles.background} animated`;
    let overlayStyle1 = `${styles.overlay1} animated slideInRight`;
    let overlayStyle2 = `${styles.overlay2} animated slideInLeft`;
    let overlayStyle3 = `${styles.overlay3} animated slideInRight`;
    let overlayStyle4 = `${styles.overlay4} animated slideInLeft`;
    let overlayStyle5 = `${styles.overlay5} animated slideInLeft`;
    let overlayStyle6 = `${styles.overlay6} animated slideInLeft`;
    let profileStyle = `${styles.profilePic} animated zoomIn`;
    let nameStyle = `${styles.title} animated fadeInUp`;

    let {
      title,
      profilePic,
      intro,
      background,
      overlay1,
      overlay2,
      overlay3,
      overlay4,
      overlay5,
      overlay6,
    } = this.props.data;

    return (
      <div className={styles.header} id="header">
        <img
          className={backgroundStyle}
          id="background"
          alt={title}
          src={background}
        />
        <div className={styles.overlaySet} id="overlaySet">
          <img className={overlayStyle1} alt="overlay1" src={overlay1} />
          <img className={overlayStyle2} alt="overlay2" src={overlay2} />
          <img className={overlayStyle3} alt="overlay3" src={overlay3} />
          <img className={overlayStyle4} alt="overlay4" src={overlay4} />
          <img className={overlayStyle5} alt="overlay5" src={overlay5} />
          <img className={overlayStyle6} alt="overlay6" src={overlay6} />
        </div>
        <img className={profileStyle} alt={title} src={profilePic} />
        <h1 className={nameStyle}>{title}</h1>
        <IntroText text={intro}/>
      </div>
    );
  }
}

export default HeaderSection;
