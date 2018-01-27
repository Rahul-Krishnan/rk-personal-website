import React, { Component } from 'react';
import $ from 'jquery';
import styles from './styles.module.css';
import data from './assets/data.js';
import Project from '../Project/';
import Job from '../Job/';
import School from '../School/';
import Language from '../Language/';
import ContactItem from '../ContactItem/';
import HeaderSection from '../HeaderSection/';
// import ContactTextSection from '../ContactTextSection/'

class App extends Component {
  state = {
    projects: false,
    experience: false,
    education: false,
    languages: false,
  };

  componentDidMount() {
    this.toggleToTop();
  }

  range = (start, end) => {
    return Array(end - start)
      .fill()
      .map((_, idx) => start + idx);
  };

  toggleSection = section => {
    let state = {
      projects: false,
      experience: false,
      education: false,
      languages: false,
    };
    state[section] = !this.state[section];
    this.setState(state);
  };

  scrollTo = section => {
    this.doScroll(section);
    setTimeout(() => {
      this.doScroll(section);
    }, 700);
  };

  doScroll = section => {
    $('html,body').animate(
      {
        scrollTop: $(`#${section}`).offset().top,
      },
      500,
    );
  };

  toggleTo = section => {
    let state = {
      projects: false,
      experience: false,
      education: false,
      languages: false,
    };
    state[section] = true;
    this.setState(state);
    this.scrollTo(section);
  };

  toggleToTop = () => {
    let state = {
      projects: false,
      experience: false,
      education: false,
      languages: false,
    };
    this.setState(state);
    this.scrollTo('header');
  };

  render() {
    let projects;
    let experience;
    let education;
    let languages;

    let titleInitial = `${styles.sectionTitle} animated fadeInUp`;
    let sectionOpen = 'animated zoomIn';
    let stickyTitleOpen = `${styles.sectionTitle} animated`;
    let centerTitleCircle = `${styles.sectionTitleCircle} animated fadeInDown`;
    let centerTitlePentagon = `${styles.sectionTitlePentagon} animated fadeInDown`;

    if (this.state.projects) {
      projects = (
        <div className={styles.circleSection}>
          <div
            className={centerTitleCircle}
            onClick={() => {
              this.toggleSection('projects');
            }}
          >
            {data.sections.projects.title}
          </div>
          <div className={sectionOpen}>
            <div className={styles.iconRow} id="projects">
              {data.projects
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRowWide}>
              {data.projects
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRow}>
              {data.projects
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      projects = (
        <div className={styles.titleSection} id="projects">
          <div
            className={titleInitial}
            onClick={() => {
              this.toggleTo('projects');
            }}
          >
            {data.sections.projects.title}
          </div>
        </div>
      );
    }

    if (this.state.experience) {
      experience = (
        <div className={styles.circleSection}>
          <div
            className={centerTitlePentagon}
            onClick={() => {
              this.toggleSection('experience');
            }}
          >
            {data.sections.experience.title}
          </div>
          <div className={sectionOpen}>
            <div className={styles.iconRow} id="experience">
              {data.experience
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRowMedium}>
              {data.experience
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
            <div className={styles.iconRow}>
              {data.experience
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      experience = (
        <div className={styles.titleSection} id="experience">
          <div
            className={titleInitial}
            onClick={() => {
              this.toggleTo('experience');
            }}
          >
            {data.sections.experience.title}
          </div>
        </div>
      );
    }

    if (this.state.education) {
      education = (
        <div className={styles.titleSection} id="education">
          <div
            className={stickyTitleOpen}
            onClick={() => {
              this.toggleSection('education');
            }}
          >
            {data.sections.education.title}
          </div>
          <div className={sectionOpen}>
            <div className={styles.iconRow}>
              {data.education
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
                    downArrow={data.icons.downArrow}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      education = (
        <div className={styles.titleSection} id="education">
          <div
            className={titleInitial}
            onClick={() => {
              this.toggleTo('education');
            }}
          >
            {data.sections.education.title}
          </div>
        </div>
      );
    }

    if (this.state.languages) {
      languages = (
        <div className={styles.titleSection} id="languages">
          <div
            className={stickyTitleOpen}
            onClick={() => {
              this.toggleSection('languages');
            }}
          >
            {data.sections.languages.title}
          </div>
          <div className={sectionOpen}>
            {this.range(0, Math.ceil(data.languages.length / 6)).map(mult => (
              <div className={styles.languages}>
                {data.languages
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
      languages = (
        <div className={styles.titleSection} id="languages">
          <div
            className={titleInitial}
            onClick={() => {
              this.toggleTo('languages');
            }}
          >
            {data.sections.languages.title}
          </div>
        </div>
      );
    }

    return (
      <div className={styles.app}>
        <div className={styles.navbar} id="navbar">
          <span
            className={styles.navbarItem}
            onClick={() => {
              this.toggleToTop();
            }}
          >
            {data.sections.header.title}
          </span>
          <span
            className={styles.navbarItem}
            onClick={() => {
              this.toggleTo('projects');
            }}
          >
            {data.sections.projects.title}
          </span>
          <span
            className={styles.navbarItem}
            onClick={() => {
              this.toggleTo('experience');
            }}
          >
            {data.sections.experience.title}
          </span>
          <span
            className={styles.navbarItem}
            onClick={() => {
              this.toggleTo('education');
            }}
          >
            {data.sections.education.title}
          </span>
          <span
            className={styles.navbarItem}
            onClick={() => {
              this.toggleTo('languages');
            }}
          >
            {data.sections.languages.title}
          </span>
          <span
            className={styles.navbarItem}
            onClick={() => {
              this.toggleTo('contact');
            }}
          >
            {data.sections.contact.title}
          </span>
        </div>
        <HeaderSection data={data.sections.header} />
        <div className={styles.body} id="main">
          {projects}
          {experience}
          {education}
          {languages}
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerTitle} id="contact">
            {data.sections.contact.title}
          </div>
          {data.contactItem.map(contactItem => (
            <ContactItem
              key={contactItem.type}
              type={contactItem.type}
              details={contactItem.details}
              subject={contactItem.subject}
              body={contactItem.body}
              image={contactItem.image}
            />
          ))}
          {/* <ContactTextSection /> */}
        </footer>
      </div>
    );
  }
}

export default App;
