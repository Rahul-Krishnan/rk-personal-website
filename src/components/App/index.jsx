import React, { Component } from 'react';
import $ from 'jquery';
import styles from './styles.module.css';
import data from './assets/data.js';
import NavBar from '../NavBar/';
import HeaderSection from '../HeaderSection/';
import ProjectSection from '../ProjectSection/';
import ExperienceSection from '../ExperienceSection/';
import EducationSection from '../EducationSection/';
import LanguageSection from '../LanguageSection/';
import FooterSection from '../FooterSection/';

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
    }, 800);
  };

  doScroll = section => {
    $('html,body').animate(
      {
        scrollTop: $(`#${section}`).offset().top - 20,
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
    return (
      <div className={styles.app}>
        <NavBar
          sections={data.sections}
          toggleTo={this.toggleTo}
          toggleToTop={this.toggleToTop}
        />
        <HeaderSection
          data={data.sections.header}
        />
        <div id="main">
          <ProjectSection
            selected={this.state.projects}
            toggleTo={this.toggleTo}
            toggleSection={this.toggleSection}
            title={data.sections.projects.title}
            data={data.projects}
            downArrow={data.icons.downArrow}
          />
          <ExperienceSection
            selected={this.state.experience}
            toggleTo={this.toggleTo}
            toggleSection={this.toggleSection}
            title={data.sections.experience.title}
            data={data.experience}
            downArrow={data.icons.downArrow}
          />
          <EducationSection
            selected={this.state.education}
            toggleTo={this.toggleTo}
            toggleSection={this.toggleSection}
            title={data.sections.education.title}
            data={data.education}
            downArrow={data.icons.downArrow}
          />
          <LanguageSection
            selected={this.state.languages}
            toggleTo={this.toggleTo}
            toggleSection={this.toggleSection}
            title={data.sections.languages.title}
            data={data.languages}
          />
        </div>
        <FooterSection
          title={data.sections.contact.title}
          data={data.contact}
        />
      </div>
    );
  }
}

export default App;
