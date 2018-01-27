import React, { Component } from 'react';
import styles from './styles.module.css';

class HeaderSection extends Component {
  componentDidMount() {
    let overlay = document.querySelector(`#overlay`);

    overlay.onmousemove = event => {
      const windowWidth = window.innerWidth / 5;
      const windowHeight = window.innerHeight / 5;

      const mouseX = event.clientX / windowWidth;
      const mouseY = event.clientY / windowHeight;

      overlay.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
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
