import React, { Component } from 'react';
import styles from './styles.module.css';
import PreviewIcon from '../PreviewIcon/';
import Modal from 'react-modal';

class School extends Component {
  state = {
    modalOpen: false,
    modalStyle: '',
    textOverflown: false,
  };

  expandModal = () => {
    this.setState({
      modalStyle: `${styles.modal} animated zoomIn`,
      modalOpen: true,
    });
    this.scrollCheck();
    this.windowSizeCheck();
  };

  closeModal = () => {
    this.setState({
      modalStyle: `${styles.modal} animated zoomOut`,
      modalOpen: false,
    });
  };

  windowSizeCheck = () => {
    window.onresize = event => {
      setTimeout(() => {
        let textBox = document.querySelector('#textBox');
        if (textBox) {
          this.textOverflowCheck();
        }
      }, 100);
    };
  }

  scrollCheck = () => {
    let textBox = document.querySelector('#textBox');
    if (textBox) {
      this.textOverflowCheck();
      textBox.onscroll = event => {
        this.textOverflowCheck();
      };
    } else {
      setTimeout(() => {
        this.scrollCheck();
      }, 100);
    }
  };

  textOverflowCheck = () => {
    let textBox = document.querySelector('#textBox');
    let overflown =
      textBox.scrollTop !== textBox.scrollHeight - textBox.offsetHeight &&
      textBox.scrollHeight > textBox.clientHeight;
    this.setState({ textOverflown: overflown });
  };

  render() {
    let {
      name,
      startDate,
      endDate,
      degree,
      bulletPoints,
      image,
      website,
      downArrow,
    } = this.props;

    return (
      <div>
        <div onClick={this.expandModal}>
          <PreviewIcon name={name} image={image} />
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          ariaHideApp={false}
          closeTimeoutMS={250}
          overlayClassName={styles.overlay}
          className={this.state.modalStyle}
        >
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={styles.topSection} id="textBox">
            <div className={styles.closeButton} onClick={this.closeModal}>
              X
            </div>
            <div>
              <a href={website} target="_blank">
                <img className={styles.icon} alt={name} src={image} />
              </a>
            </div>
            <a href={website} className={styles.title} target="_blank">
              <div className={styles.title}>{name}</div>
            </a>
            <div className={styles.details}>
              {startDate} - {endDate}
            </div>
            <div className={styles.details}>{degree}</div>
            <div className={styles.bulletSection}>
              {bulletPoints.map(line => (
                <div className={styles.bullet} key={line}>
                  ● {line}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottomSection}>
            <div className={styles.backButton} onClick={this.closeModal}>
              Go Back
            </div>
            {this.state.textOverflown && (
              <img className={styles.more} alt="scrollDown" src={downArrow} />
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default School;
