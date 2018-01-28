import React, { Component } from 'react';
import styles from './styles.module.css';

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
    let profileStyle = `${styles.profilePic} animated zoomIn`;
    let nameStyle = `${styles.title} animated fadeInUp`;
    let introStyle = `${styles.intro} animated fadeInUp`;

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
          className={styles.overlay}
          id="overlay"
          alt={title}
          src={overlay}
        />
        <img className={profileStyle} alt={title} src={profilePic} />
        <h1 className={nameStyle}>{title}</h1>
        <p className={introStyle}>{intro}</p>
      </div>
    );
  }
}

export default HeaderSection;
