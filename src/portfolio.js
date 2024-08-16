import aboutpic from "./components/Access/mePhoto.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'Swarup.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Swarup',
  role: 'Full stack developer',
  description:
    'I am  Swarup Kumar Sahoo, a software engineer specializing in Java backend and Spring Boot, also working in several projects in AI and Machine Learning.',
  resume: 'https://drive.google.com/file/d/1KrPj23RxqRCaPgKHtbkEryoBjyJIDrlz/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/swarup-kumar-sahoo-2460b3242/',
    github: 'https://github.com/swarup-raj',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AI Assistant',
    description:
      'Jarvis is a voice assistant ai model who can perform several task like web searching , sending emails , opening social media, etc.',
    stack: ['Python', 'AI', 'Pyttsx3','Voice Assistant',],
    sourceCode: 'https://github.com/swarup-raj/jarvis-ai',
    livePreview: 'https://github.com/swarup-raj/jarvis-ai',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://github.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://github.com/',
  },
  {
    name: 'GameStoreData(back end)',
    description:
      'GameStoreData is able to let user retrieve the game from database based on its year and category',
    stack: ['Java 8', 'MySQL', 'React'],
    sourceCode: 'https://github.com/',
    
  },
  {
    name: 'Music Store(back end)',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://github.com/',
  },
  {
    name: 'Movie Tracker',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://github.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Python',
  'Ruby',
  'Material UI',
  'Git',
  'MERN',
  'Java 8',
  'Java Spring Boot',
  'Microservices',
  'Docker',
  'Cloud Computing',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kumarswarup7272@gmail.com',
}

export { header, about, projects, skills, contact }
