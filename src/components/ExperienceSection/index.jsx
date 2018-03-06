import React, { Component } from 'react';
import styles from './styles.module.css';
import Job from '../Job/';

class ExperienceSection extends Component {
  state = {
    cx: 0,
    cy: 0,
    r: 0,
    strokeDasharray: 0,
  }

  componentDidMount() {
    this.calcSizes();
    window.addEventListener("resize", this.calcSizes);
  }

  calcSizes = () => {
    let baseSizeVw = 0.1 * window.innerWidth;
    let baseSizePx = 72;
    let newBaseSize;

    if (window.innerWidth < 720) {
      newBaseSize = baseSizeVw;
    } else {
      newBaseSize = baseSizePx;
    }
    this.setState({
      cx: (2.8 * newBaseSize),
      cy: (2.65 * newBaseSize),
      r: (2.7 * newBaseSize),
      strokeDasharray: (17 * newBaseSize),
    })
  }

  render() {
    let titleInitial = `${styles.sectionTitle} animated fadeInUp`;
    let sectionOpen = `${styles.sectionOpen} animated zoomIn`;
    let centerTitlePentagon = `${styles.centerTitlePentagon} animated fadeInDown`;
    let { selected, title, data, toggleTo, toggleSection, downArrow } = this.props

    if (selected) {
      return (
        <div className={styles.circleSection}>
          <div
            className={centerTitlePentagon}
            onClick={() => {
              toggleSection('experience');
            }}
          >
            {title}
          </div>
          <div className={sectionOpen}>
            <figure className={styles.chart}>
              <svg className={styles.circleDraw}>
                <circle
                  className={styles.outer}
                  cx={this.state.cx}
                  cy={this.state.cy}
                  r={this.state.r}
                  style={{strokeDasharray: this.state.strokeDasharray}}
                />
              </svg>
            </figure>
            <div className={styles.iconRowTop} id="experience">
              {data
                .slice(0, 1)
                .map(job => (
                  <Job
                    key={job.company}
                    company={job.company}
                    website={job.website}
                    title={job.title}
                    location={job.location}
                    startDate={job.startDate}
                    endDate={job.endDate}
                    bulletPoints={job.bulletPoints}
                    image={job.image}
                    downArrow={downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRowMiddle}>
              {data
                .slice(1, 3)
                .map(job => (
                  <Job
                    key={job.company}
                    company={job.company}
                    website={job.website}
                    title={job.title}
                    location={job.location}
                    startDate={job.startDate}
                    endDate={job.endDate}
                    bulletPoints={job.bulletPoints}
                    image={job.image}
                    downArrow={downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRowBottom}>
              {data
                .slice(3, 5)
                .map(job => (
                  <Job
                    key={job.company}
                    company={job.company}
                    website={job.website}
                    title={job.title}
                    location={job.location}
                    startDate={job.startDate}
                    endDate={job.endDate}
                    bulletPoints={job.bulletPoints}
                    image={job.image}
                    downArrow={downArrow}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.titleSection} id="experience">
          <div
            className={titleInitial}
            onClick={() => {
              toggleTo('experience');
            }}
          >
            {title}
          </div>
        </div>
      );
    }
  }
}

export default ExperienceSection;
