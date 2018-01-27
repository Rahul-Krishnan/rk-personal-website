import React, { Component } from 'react';
import styles from './styles.module.css';

class ContactItem extends Component {
  render() {
    let contactItem;

    let { type, details, image, subject, body } = this.props;

    if (type === 'email') {
      let emailContent = `mailto:${details}?subject=${subject}&body=${body}`;
      contactItem = (
        <a className={styles.link} href={emailContent}>
          <img className={styles.image} alt={type} src={image} />
          {details}
        </a>
      );
    } else {
      let shortName = details.slice(8);
      contactItem = (
        <a className={styles.link} href={details} target="_blank">
          <img className={styles.image} alt={type} src={image} />
          {shortName}
        </a>
      );
    }

    return <div className={styles.item}>{contactItem}</div>;
  }
}

export default ContactItem;
