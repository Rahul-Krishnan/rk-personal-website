import React, { Component } from 'react';
import styles from './styles.module.css';
import IntroText from '../IntroText/';

class HeaderSection extends Component {
  state = {
    marginTop: 0,
  }

  componentDidMount() {
    this.calcMarginTop();
    this.setBackgroundMovement();
    window.addEventListener("resize", this.calcMarginTop);
  }

  calcMarginTop = () => {
    let vh = window.innerHeight / 100;
    let vw = window.innerWidth / 100;
    let marginTop = Math.min(20 * vh, 30 * vw)
    this.setState({ marginTop: marginTop })
  }

  setBackgroundMovement = () => {
    // let overlaySet = document.querySelector(`#overlaySet`);
    let background = document.querySelector(`#background`);
    let header = document.querySelector(`#header`);
    header.onmousemove = event => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let mouseX = event.clientX / windowWidth;
      let mouseY = event.clientY / windowHeight;
      // overlaySet.style.transform = `translate3d(${5 - 10 * mouseX}%, ${5 - 10 * mouseY}%, 0)`;
      background.style.transform = `translate3d(${-1 * mouseX}%, ${-1 * mouseY}%, 0)`;
    };
  }

  render() {
    let backgroundStyle = `${styles.background} animated`;
    // let overlayStyle1 = `${styles.overlay1} animated slideInRight`;
    // let overlayStyle2 = `${styles.overlay2} animated slideInLeft`;
    // let overlayStyle3 = `${styles.overlay3} animated slideInRight`;
    // let overlayStyle4 = `${styles.overlay4} animated slideInLeft`;
    // let overlayStyle5 = `${styles.overlay5} animated slideInLeft`;
    // let overlayStyle6 = `${styles.overlay6} animated slideInLeft`;
    // let overlayStyle7 = `${styles.overlay7} animated slideInRight`;
    // let overlayStyle8 = `${styles.overlay8} animated slideInRight`;
    // let overlayStyle9 = `${styles.overlay9} animated slideInLeft`;
    let profileStyle = `${styles.profilePic} animated zoomIn`;
    let nameStyle = `${styles.title} animated fadeInDown`;

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
      overlay7,
      overlay8,
      overlay9,
    } = this.props.data;

    return (
      <div className={styles.header} id="header">
        <img
          className={backgroundStyle}
          id="background"
          alt={title}
          src={background}
        />
        <h1 className={nameStyle} style={{marginTop: this.state.marginTop}}>{title}</h1>
        {/* <div className={styles.overlaySet} id="overlaySet">
          <img className={overlayStyle1} alt="overlay1" src={overlay1} />
          <img className={overlayStyle2} alt="overlay2" src={overlay2} />
          <img className={overlayStyle3} alt="overlay3" src={overlay3} />
          <img className={overlayStyle4} alt="overlay4" src={overlay4} />
          <img className={overlayStyle5} alt="overlay5" src={overlay5} />
          <img className={overlayStyle6} alt="overlay6" src={overlay6} />
          <img className={overlayStyle7} alt="overlay7" src={overlay7} />
          <img className={overlayStyle8} alt="overlay8" src={overlay8} />
          <img className={overlayStyle9} alt="overlay9" src={overlay9} />
        </div> */}
        <img className={profileStyle} alt={title} src={profilePic} />
        <IntroText text={intro}/>
      </div>
    );
  }
}

export default HeaderSection;
