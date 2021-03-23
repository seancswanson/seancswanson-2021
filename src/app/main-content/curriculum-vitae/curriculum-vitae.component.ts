import { Component, OnInit } from '@angular/core';
import { CvItem } from './cvItem.model';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {
  cvItems: CvItem[] = [
    new CvItem(
      'Traditions of the Ancestors',
      'Junior Web Developer',
      "Aug. '18 - May '19",
      "A platform for exploring and connecting with the world's cultures. Currently in beta. Collaborated on a team of ~20 with my contributions including an implementation of a visualization of our app's data, work on the user-facing and site admin UI, event tracking with Google Analytics, and more... the tech stack includes:",
      '',
      '',
      [
        'JavaScript',
        'Node.js',
        'Express.js',
        'jQuery',
        'Underscore',
        'MySql',
        'Google Analytics'
      ],
      []
    ),
    new CvItem(
      'Ian Gilman',
      'Apprentice Web Developer',
      "May '18 - Apr. '19",
      'Apprenticeship under a senior web developer. My day-to-day tasks involved typing out and collaborating on dictated code which reinforced the learning of coding best practices and other related programming skills. It has shown to be an amazing opportunity to learn how to work effectively as a remote developer on a team and all that goes into building a project from scratch to production ready apps and experiences.',
      'As a pair programmer, I was working mostly with front end frameworks and languages but also was involved in some back end programming. We use many technologies including but not limited to:',
      'We also used various other telecom, version control and project management technologies such as:',
      [
        'JavaScript',
        'ES6',
        'React.js',
        'Node.js',
        'Express.js',
        'Three.js',
        'Pixi.js',
        'Hammer.js',
        'WebGL',
        'Aframe.js',
        'WebVR',
        'Lodash',
        'Underscore',
        'Templating',
        'HTML',
        'CSS'
      ],
      ['Git', 'SVN', 'GitHub', 'BitBucket', 'Asana', 'Jira', 'Slack']
    ),
    new CvItem(
      'General Assembly',
      'WDI Graduate',
      "Nov. '17 - Feb. '18",
      'A 12-week web development immersive program, totaling ~480 hours of classroom instruction and 70+ hours of lab work each week in a collaborative environment. I built several full-stack applications in agile sprints using technologies such as:',
      '',
      'Throughout the course, I also mentored several students intermittently during study sessions outside of class and participated in whiteboarding with my cohort.',
      [
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'User Authentication',
        'View Templating Engines (ejs)',
        'jQuery',
        'ORM',
        'PSQL',
        'AJAX',
        '3rd Party API',
        'HTML5',
        'CSS3',
        'CSS Frameworks'
      ],
      []
    ),
    new CvItem(
      'University of Washington',
      'B.A. Philosophy',
      "Jan. '14 - Aug. '15",
      'Studied philosophy with a concentration in the history of western philosophy including metaphysics, ethics, aesthetics, epistemology, and the development of these philosophical concepts and issues from ancient to contemporary times. Go Huskies!',
      '',
      '',
      [],
      []
    )
  ];
  constructor() {}

  ngOnInit() {}
}
