import React, { Component } from 'react';
import styles from './styles.module.css';
import School from '../School/';

class EducationSection extends Component {
  render() {
    let titleInitial = `${styles.sectionTitle} animated fadeInUp`;
    let sectionOpen = 'animated zoomIn';
    let stickyTitleOpen = `${styles.sectionTitle} animated`;
    let { selected, title, data, toggleTo, toggleSection, downArrow } = this.props

    if (selected) {
      return (
        <div className={styles.titleSection} id="education">
          <div
            className={stickyTitleOpen}
            onClick={() => {
              toggleSection('education');
            }}
          >
            {title}
          </div>
          <div className={sectionOpen}>
            <div className={styles.iconRow}>
              {data
                .slice(0, 1)
                .map(school => (
                  <School
                    key={school.name}
                    name={school.name}
                    website={school.website}
                    degree={school.degree}
                    startDate={school.startDate}
                    endDate={school.endDate}
                    bulletPoints={school.bulletPoints}
                    image={school.image}
                    downArrow={downArrow}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.titleSection} id="education">
          <div
            className={titleInitial}
            onClick={() => {
              toggleTo('education');
            }}
          >
            {title}
          </div>
        </div>
      );
    }
  }
}

export default EducationSection;
