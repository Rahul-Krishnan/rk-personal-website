import React, { Component } from 'react';
import styles from './styles.module.css';
import Project from '../Project/';

class ProjectSection extends Component {
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
    let centerTitleCircle = `${styles.sectionTitleCircle} animated fadeInDown`;
    let { selected, title, data, toggleTo, toggleSection, downArrow } = this.props

    if (selected) {
      return (
        <div className={styles.circleSection}>
          <div
            className={centerTitleCircle}
            onClick={() => {
              toggleSection('projects');
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
            <div className={styles.iconRow} id="projects">
              {data
                .slice(0, 2)
                .map(project => (
                  <Project
                    key={project.title}
                    title={project.title}
                    website={project.website}
                    repo={project.repo}
                    date={project.date}
                    bulletPoints={project.bulletPoints}
                    image={project.image}
                    homeImage={project.homeImage}
                    downArrow={downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRowWide}>
              {data
                .slice(2, 4)
                .map(project => (
                  <Project
                    key={project.title}
                    title={project.title}
                    website={project.website}
                    repo={project.repo}
                    date={project.date}
                    bulletPoints={project.bulletPoints}
                    image={project.image}
                    homeImage={project.homeImage}
                    downArrow={downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRow}>
              {data
                .slice(4, 6)
                .map(project => (
                  <Project
                    key={project.title}
                    title={project.title}
                    website={project.website}
                    repo={project.repo}
                    date={project.date}
                    bulletPoints={project.bulletPoints}
                    image={project.image}
                    homeImage={project.homeImage}
                    downArrow={downArrow}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.titleSection} id="projects">
          <div
            className={titleInitial}
            onClick={() => {
              toggleTo('projects');
            }}
          >
            {title}
          </div>
        </div>
      );
    }
  }
}

export default ProjectSection;
