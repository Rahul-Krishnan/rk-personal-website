import React, { Component } from 'react';
import styles from './styles.module.css';
import Language from '../Language/';

class LanguageSection extends Component {
  range = (start, end) => {
    return Array(end - start)
      .fill()
      .map((_, idx) => start + idx);
  };

  render() {
    let titleInitial = `${styles.sectionTitle} animated fadeInUp`;
    let sectionOpen = 'animated zoomIn';
    let stickyTitleOpen = `${styles.sectionTitle} animated`;
    let { selected, title, data, toggleTo, toggleSection } = this.props

    if (selected) {
      return (
        <div className={styles.titleSection} id="languages">
          <div
            className={stickyTitleOpen}
            onClick={() => {
              toggleSection('languages');
            }}
          >
            {title}
          </div>
          <div className={sectionOpen}>
            {this.range(0, Math.ceil(data.length / 6)).map(mult => (
              <div className={styles.languages} key={mult}>
                {data
                  .slice(mult * 6, (mult + 1) * 6)
                  .map(language => (
                    <Language
                      key={language.name}
                      name={language.name}
                      website={language.website}
                      image={language.image}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.titleSection} id="languages">
          <div
            className={titleInitial}
            onClick={() => {
              toggleTo('languages');
            }}
          >
            {title}
          </div>
        </div>
      );
    }
  }
}

export default LanguageSection;
