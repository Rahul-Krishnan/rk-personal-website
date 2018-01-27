import React, { Component } from 'react';
import styles from './styles.module.css';
import PreviewIcon from '../PreviewIcon/';
import Modal from 'react-modal';

class School extends Component {
  state = {
    modalOpen: false,
    textOverflown: false,
  };

  expandModal = () => {
    this.setState({ modalOpen: true });
    this.findTextBox();
    window.onresize = event => {
      this.textOverflowCheck();
    };
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  findTextBox = () => {
    let textBox = document.querySelector('#textBox');
    if (textBox) {
      this.textOverflowCheck();
      textBox.onscroll = event => {
        this.textOverflowCheck();
      };
    } else {
      setTimeout(() => {
        this.findTextBox();
      }, 100);
    }
  };

  textOverflowCheck = () => {
    let element = document.querySelector('#textBox');
    let overflown =
      element.scrollTop !== element.scrollHeight - element.offsetHeight &&
      element.scrollHeight > element.clientHeight;
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
          className={styles.modal}
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
