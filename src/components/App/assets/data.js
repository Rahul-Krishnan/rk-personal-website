import headerBackground from '../../HeaderSection/assets/background.jpg';
import overlay from '../../HeaderSection/assets/overlay.png';
import profilePic from '../../HeaderSection/assets/profile.jpg';
import downArrow from './downArrow.gif';
import election from '../../Project/assets/election3.png';
import pinteresting from '../../Project/assets/pinteresting.png';
import podcastaway from '../../Project/assets/podcastaway.png';
import reduxtagram from '../../Project/assets/reduxtagram.png';
import snacktracker from '../../Project/assets/snacktracker.png';
import tweetbots from '../../Project/assets/tweetbots.png';
import arkitHome from '../../Project/assets/arkitHome.png';
import electionHome from '../../Project/assets/electionHome.png';
import pinterestingHome from '../../Project/assets/pinterestingHome.png';
import podcastawayHome from '../../Project/assets/podcastawayHome.png';
import reduxtagramHome from '../../Project/assets/reduxtagramHome.png';
import snacktrackerHome from '../../Project/assets/snacktrackerHome.png';
import tweetbotsHome from '../../Project/assets/tweetbotsHome.png';
import arkit from '../../Project/assets/arkit.png';
import html from '../../Language/assets/html.png';
import css from '../../Language/assets/css.png';
import ruby from '../../Language/assets/ruby.png';
import rails from '../../Language/assets/rails.png';
import rspec from '../../Language/assets/rspec.png';
import capybara from '../../Language/assets/capybara.png';
import javaScript from '../../Language/assets/javascript.png';
import react from '../../Language/assets/react.png';
import router from '../../Language/assets/router.png';
import redux from '../../Language/assets/redux.png';
import node from '../../Language/assets/node.png';
import enzyme from '../../Language/assets/enzyme.png';
import jest from '../../Language/assets/jest.png';
import s3 from '../../Language/assets/s3.png';
import googleCloud from '../../Language/assets/googlecloud.png';
import sql from '../../Language/assets/sql.png';
import postgres from '../../Language/assets/postgres.png';
import git from '../../Language/assets/git.png';
import github from '../../Language/assets/github.png';
import bloomberg from '../../Language/assets/bloomberg.png';
import reuters from '../../Language/assets/reuters.jpg';
import intex from '../../Language/assets/intex.png';
import yieldbook from '../../Language/assets/yieldbook.gif';
import stata from '../../Language/assets/stata.png';
import creditSuisse from '../../Job/assets/creditSuisse.png';
import cello from '../../Job/assets/cello.png';
import socGen from '../../Job/assets/socGen.png';
import intrepid from '../../Job/assets/intrepid.png';
import launch from '../../Job/assets/launch.png';
import columbia from '../../School/assets/columbia.png';
import email from '../../ContactItem/assets/email.png';
import linkedin from '../../ContactItem/assets/linkedin.png';

const data = {
  icons: {
    downArrow: downArrow,
  },
  sections: {
    header: {
      background: headerBackground,
      overlay: overlay,
      profilePic: profilePic,
      title: 'Rahul Krishnan',
      intro:
        'Full-stack Web Developer with a focus on React and Rails. Former investment professional with specialization in structured derivatives. Have experience both in small and large work groups, from startup environments to well-established multinational firms.',
    },
    projects: {
      title: 'Projects',
    },
    languages: {
      title: 'Languages & Frameworks',
    },
    experience: {
      title: 'Experience',
    },
    education: {
      title: 'Education',
    },
    contact: {
      title: 'Contact me',
    },
  },
  languages: [
    { name: 'SQL', image: sql, website: 'https://en.wikipedia.org/wiki/SQL' },
    {
      name: 'Postgres',
      image: postgres,
      website: 'https://www.postgresql.org',
    },
    { name: 'Git', image: git, website: 'https://git-scm.com' },
    { name: 'GitHub', image: github, website: 'https://github.com/' },
    { name: 'Amazon S3', image: s3, website: 'https://aws.amazon.com/s3' },
    {
      name: 'Google Cloud',
      image: googleCloud,
      website: 'https://cloud.google.com',
    },
    {
      name: 'HTML5',
      image: html,
      website: 'https://www.w3.org/TR/2010/WD-html5-20100624',
    },
    {
      name: 'CSS3',
      image: css,
      website: 'https://www.w3.org/TR/2001/WD-css3-roadmap-20010523',
    },
    {
      name: 'JavaScript ES6',
      image: javaScript,
      website: 'http://es6-features.org',
    },
    { name: 'Ruby', image: ruby, website: 'https://www.ruby-lang.org' },
    { name: 'Rails', image: rails, website: 'https://www.rubyonrails.org' },
    { name: 'RSpec', image: rspec, website: 'https://rspec.info' },
    {
      name: 'Capybara',
      image: capybara,
      website: 'http://teamcapybara.github.io/capybara',
    },
    { name: 'React', image: react, website: 'https://reactjs.org' },
    {
      name: 'React Router',
      image: router,
      website: 'https://reacttraining.com/react-router',
    },
    { name: 'Redux', image: redux, website: 'https://redux.js.org' },
    { name: 'Node', image: node, website: 'https://nodejs.org' },
    { name: 'Enzyme', image: enzyme, website: 'http://airbnb.io/enzyme/' },
    { name: 'Jest', image: jest, website: 'https://facebook.github.io/jest' },
    {
      name: 'Bloomberg',
      image: bloomberg,
      website: 'https://www.bloomberg.com',
    },
    { name: 'Reuters', image: reuters, website: 'https://www.reuters.com' },
    { name: 'Intex', image: intex, website: 'http://www.intex.com/main' },
    {
      name: 'Yield Book',
      image: yieldbook,
      website: 'https://www.yieldbook.com',
    },
    { name: 'Stata', image: stata, website: 'https://www.stata.com' },
  ],
  projects: [
    {
      title: 'AR Kit',
      website: 'none yet',
      repo: 'none yet',
      date: 'Jan 2018',
      image: arkit,
      homeImage: arkitHome,
      bulletPoints: ['Still working on it!'],
    },
    {
      title: 'SnackTracker',
      website: 'https://snack-tracker.herokuapp.com',
      repo: 'https://github.com/rahul-krishnan/food_truck_tracker',
      date: 'Feb 2017',
      image: snacktracker,
      homeImage: snacktrackerHome,
      bulletPoints: [
        'Personalized daily food truck scheduling web app built using Rails and React',
        'Database repopulated hourly via web scraping to keep information current',
        'Users can search for local food trucks by name, location or time, as well as save favorite trucks and see daily food truck schedule and map using the Google Maps API',
      ],
    },
    {
      title: 'Tweet Bots',
      website: 'https://twitter.com/Rahul_Dev_Acct',
      repo: 'https://github.com/Rahul-Krishnan/TwitterBots',
      date: 'May 2017',
      image: tweetbots,
      homeImage: tweetbotsHome,
      bulletPoints: [
        'A bunch of tweet bots, including:',
        'Basic Bot, i.e. add/remove friends/posts',
        'Mimic Bot that uses Rita and sample text',
        'Human Emotions Bot using Google Cloud Vision API',
        'Story Generation Bot using Tracery',
        'Retrieve & tweet info from Google Spreadsheets',
        'Twitter Audio Bot that composes songs',
      ],
    },
    {
      title: 'Podcastaway',
      website: 'https://podcastaway.herokuapp.com',
      repo: 'https://github.com/katherine-sawyer/podcastaway',
      date: 'Jan 2017',
      image: podcastaway,
      homeImage: podcastawayHome,
      bulletPoints: [
        'Group project, podcast review site that supports user and admin accounts',
        'Responsive interface built in Rails, with live updates using React and Foundation for styling',
        'Users receive email updates when there are comments posted on their entries',
      ],
    },
    {
      title: 'Pinteresting',
      website: 'https://run-pinteresting.herokuapp.com',
      repo: 'https://github.com/rahul-krishnan/pinteresting',
      date: 'Oct 2016',
      image: pinteresting,
      homeImage: pinterestingHome,
      bulletPoints: [
        'Imageboard site that supports user accounts and dynamically rearranges images to screen size',
        'Built using Rails, with Devise for user authentication and Bootstrap for styling',
      ],
    },
    {
      title: '2016 Election Tracker',
      repo: 'https://github.com/rahul-krishnan/Election-Update',
      date: 'Sep 2016',
      image: election,
      homeImage: electionHome,
      bulletPoints: [
        'Ruby program that pulls in polling numbers and betting odds from multiple user-defined sources',
        'Used several Ruby Gems to scrape data and interact with APIs on multiple different election websites',
      ],
    },
    {
      title: 'Reduxtagram',
      website: 'https://reduxtagram-rk.herokuapp.com/',
      repo: 'https://github.com/Rahul-Krishnan/Reduxtagram',
      date: 'Sep 2017',
      image: reduxtagram,
      homeImage: reduxtagramHome,
      bulletPoints: [
        'Simple Image board site built using React and Redux',
        'Responsive design with user comments and likes',
      ],
    },
  ],
  experience: [
    {
      company: 'Intrepid Pursuits',
      title: 'Software Engineer',
      location: 'Cambridge, MA',
      startDate: 'Sep 2017',
      endDate: 'Present',
      bulletPoints: [
        "Work closely with Intrepid's team of designers and developers to build exceptional products",
        'Build APIs, administrative tools and infrastructure to support iOS and Android mobile applications',
        'Build full-stack web applications',
        'Lead projects and mentor junior developers',
        'Communicate project plans, progress, and scope to clients',
        'Participate in code and architecture reviews',
        "Enhance Accenture and Intrepid's knowledge of new stacks",
        'Participate in Agile development process',
      ],
      image: intrepid,
      website: 'https://intrepid.io',
    },
    {
      company: 'Launch Academy',
      title: 'Apprentice Ruby on Rails Developer',
      location: 'Boston, MA',
      startDate: 'Nov 2016',
      endDate: 'Feb 2017',
      bulletPoints: [
        'Completed an intensive programming bootcamp targeted at building software development skills',
        'Focused on TDD, Agile methodologies, Git workflow, pair programming and continuous integration',
      ],
      image: launch,
      website: 'https://launchacademy.com',
    },
    {
      company: 'Société Générale',
      title: 'Trader, Vice President',
      location: 'New York, NY',
      startDate: 'Jun 2014',
      endDate: 'Jun 2015',
      bulletPoints: [
        'Helped build a new mortgage trading desk',
        'Traded and hedged derivative books to maximize profitability while gaining market share',
        'Pitched trade ideas to customers, including hedge funds, money managers, mortgage servicers',
      ],
      image: socGen,
      website: 'https://www.societegenerale.com',
    },
    {
      company: 'Cello Capital',
      title: 'Portfolio Manager, Vice President',
      location: 'New York, NY',
      startDate: 'Jul 2012',
      endDate: 'Mar 2014',
      bulletPoints: [
        'Jointly managed fund as part of Portfolio Management team',
        'Presented new products and trade ideas to the team and to existing and potential investors',
        'Primary point of contact with dealers and salespeople',
      ],
      image: cello,
      website: 'https://www.cellocapital.com',
    },
    {
      company: 'Credit Suisse',
      title: 'Trader, Associate',
      location: 'New York, NY',
      startDate: 'Jul 2008',
      endDate: 'Jun 2012',
      bulletPoints: [
        'Traded and hedged mortgage derivatives trading book',
        'Part of syndicate that launched the Synthetic IO (IOS)',
        'Provided pricing on mortgage products for margin calls, repo and month-end marks',
      ],
      image: creditSuisse,
      website: 'https://credit-suisse.com',
    },
  ],
  education: [
    {
      name: 'Columbia University',
      location: 'New York, NY',
      degree: 'Bachelor of Arts, Mathematics and Economics',
      startDate: 'Sep 2004',
      endDate: 'May 2008',
      bulletPoints: [
        'Completed degree with focus on Pure Mathematics and Economics',
        'Research and classes specialized in Cryptography, Econometrics and Statistics',
      ],
      image: columbia,
      website: 'https://www.columbia.edu',
    },
  ],
  contact: [
    {
      type: 'email',
      details: 'rk2211@gmail.com',
      subject: 'Hi Rahul!',
      body: 'Hi Rahul, I saw your website and just wanted to reach out.',
      image: email,
    },
    {
      type: 'linkedin',
      details: 'https://linkedin.com/in/rahul-krishnan',
      image: linkedin,
    },
    {
      type: 'GitHub',
      details: 'https://github.com/rahul-krishnan',
      image: github,
    },
  ],
};

export default data;
