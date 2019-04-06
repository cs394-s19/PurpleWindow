import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen';
import JobScreen from './components/JobScreen';
import logo from './logo.svg';
import './App.css';

const JOBS = [
  {
      "title": "Education and Social Policy Research Aide",
      "employer": "NU Education and Social Policy Department",
      "website": "https://www.sesp.northwestern.edu/",
      "rating": 4.6,
      "pay": "$11.10/hr",
      "hours": "8 to 10",
      "contact": "Adrienne Hu",
      "email": "sihua.hu@northwestern.edu",
      "phone": "847-467-6265",
      "description": "The Research Aide will provide research and administrative support for several studies related to educational policy conducted by Professor Cynthia Coburn. This position begins in Spring 2019, with the possibility to renew. Duties include: coding interview transcripts and surveys, entering data into qualitative and quantitative software programs, reviewing literature, and performing other administrative duties.",
      "qualifications": "Qualified students are reliable, organized, able to work independently, and detail oriented with a background in education, sociology, or organizational change. We are especially interested in hiring students who are able to stay on longer than one quarter.",
      "workStudy": true,
      "onCampus": true,
      "reviews": [
          {
              "id": 1,
              "title": "Fancy from the outside",
              "date": 20190402,
              "recommend": false,
              "outlook": "neutral",
              "ceoOpinion": null,
              "balance": 2,
              "culture": 1,
              "careerOpps": 4,
              "benefits": 3,
              "mgmt": 3,
              "total": 1,
              "pros": "The name alone will get you in the door to other jobs",
              "cons": "Your role, opinion are not valued, pay is low compared to similar institutions. They depend on their name as compensation, but if your a real professional you contribute as much as they do and you should be compensated as such. No diversity, nonfriendly culture throughout every department.",
              "advice": null,
              "currentEmployee": false,
              "fullTime": false,
              "tenure": "<1",
              "role": "Nurse Clinician",
              "locationCity": "Chicago",
              "locationState": "IL"
          },

          {
              "id": 2,
              "title": "Great place to research!",
              "date": 20190404,
              "recommend": true,
              "outlook": "positive",
              "ceoOpinion": null,
              "balance": 5,
              "culture": 5,
              "careerOpps": 5,
              "benefits": 5,
              "mgmt": 5,
              "total": 5,
              "pros": "This is a great place to get a degree. Community is very supportive and encourages you to learn.",
              "cons": "Winters can be a bit rough being in Chicago, but that's true of every company here.",
              "advice": null,
              "currentEmployee": true,
              "fullTime": true,
              "tenure": ">5",
              "role": "PhD Candidate",
              "locationCity": "Chicago",
              "locationState": "IL"
          },
      ]
  },

  {
      "title": "McCormick Research Aide",
      "employer": "NU McCormick School of Engineering",
      "website": "https://www.mccormick.northwestern.edu/",
      "rating": 3.8,
      "pay": "$12.25/hr",
      "hours": null,
      "contact": "Eric Masanet",
      "email": "eric.masanet@northwestern.edu",
      "phone": "847-467-2806",
      "description": "Do you have a passion for sustainability, enjoy working with data and spreadsheets, and want to contribute to reducing global energy use? If so, read on! I'm looking for one or more student researchers to compile data on societal materials flows and materials processing technologies, and to build spreadsheets to calculate key inputs into a modeling platform for evaluating policies and strategies for reducing nation/global materials use.",
      "qualifications": "Experience working with large datasets and building well-organized spreadsheets; familiarity with basic energy/environmental concepts, units, and terms; familiarity with materials end uses (e.g., buildings, infrastructure, vehicles); demonstrated analytical skills (e.g., through coursework or projects); strong work ethic; ability to work independently and in teams; ideal for engineering students, but students from other quantitative domains may be considered.",
      "workStudy": true,
      "onCampus": true,
      "reviews": [
          {
              "id": 1,
              "title": "Fancy from the outside",
              "date": 20190402,
              "recommend": false,
              "outlook": "neutral",
              "ceoOpinion": null,
              "balance": 2,
              "culture": 1,
              "careerOpps": 4,
              "benefits": 3,
              "mgmt": 3,
              "total": 1,
              "pros": "The name alone will get you in the door to other jobs",
              "cons": "Your role, opinion are not valued, pay is low compared to similar institutions. They depend on their name as compensation, but if your a real professional you contribute as much as they do and you should be compensated as such. No diversity, nonfriendly culture throughout every department.",
              "advice": null,
              "currentEmployee": false,
              "fullTime": false,
              "tenure": "<1",
              "role": "Nurse Clinician",
              "locationCity": "Chicago",
              "locationState": "IL"
          },

          {
              "id": 2,
              "title": "Great place to research!",
              "date": 20190404,
              "recommend": true,
              "outlook": "positive",
              "ceoOpinion": null,
              "balance": 5,
              "culture": 5,
              "careerOpps": 5,
              "benefits": 5,
              "mgmt": 5,
              "total": 5,
              "pros": "This is a great place to get a degree. Community is very supportive and encourages you to learn.",
              "cons": "Winters can be a bit rough being in Chicago, but that's true of every company here.",
              "advice": null,
              "currentEmployee": true,
              "fullTime": true,
              "tenure": ">5",
              "role": "PhD Candidate",
              "locationCity": "Chicago",
              "locationState": "IL"
          },
      ]
  },

    {
      "title": "Portuguese Tutor Aide",
      "employer": "NU Department of Spanish and Portuguese",
      "website": "https://www.spanish-portuguese.northwestern.edu/",
      "rating": 2.7,
      "pay": "$11.55/hr",
      "hours": "3 to 4",
      "contact": "Elisa Baena",
      "email": "e-baena@northwestern.edu",
      "phone": "847-491-8220",
      "description": "For the 2018-19 academic year, 3-4 hours a week tutoring Portuguese language students. This includes grammar explanations and practice as well as conversational practice. Please send a letter of interest, resume and a writing sample to the Coordinator of the Portuguese language program, Elisa Baena.",
      "qualifications": "Candidates should have native or near-native proficiency in Portuguese and be responsible, punctual, flexible, helpful and outgoing.",
      "workStudy": true,
      "onCampus": true,
      "reviews": [
          {
              "id": 1,
              "title": "Fancy from the outside",
              "date": 20190402,
              "recommend": false,
              "outlook": "neutral",
              "ceoOpinion": null,
              "balance": 2,
              "culture": 1,
              "careerOpps": 4,
              "benefits": 3,
              "mgmt": 3,
              "total": 1,
              "pros": "The name alone will get you in the door to other jobs",
              "cons": "Your role, opinion are not valued, pay is low compared to similar institutions. They depend on their name as compensation, but if your a real professional you contribute as much as they do and you should be compensated as such. No diversity, nonfriendly culture throughout every department.",
              "advice": null,
              "currentEmployee": false,
              "fullTime": false,
              "tenure": "<1",
              "role": "Nurse Clinician",
              "locationCity": "Chicago",
              "locationState": "IL"
          },

          {
              "id": 2,
              "title": "Great place to research!",
              "date": 20190404,
              "recommend": true,
              "outlook": "positive",
              "ceoOpinion": null,
              "balance": 5,
              "culture": 5,
              "careerOpps": 5,
              "benefits": 5,
              "mgmt": 5,
              "total": 5,
              "pros": "This is a great place to get a degree. Community is very supportive and encourages you to learn.",
              "cons": "Winters can be a bit rough being in Chicago, but that's true of every company here.",
              "advice": null,
              "currentEmployee": true,
              "fullTime": true,
              "tenure": ">5",
              "role": "PhD Candidate",
              "locationCity": "Chicago",
              "locationState": "IL"
          },
      ]
  },
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
      currentSelectedJob: {}
    }
  }

  selectJob = (job) => {
    this.setState({currentPageIndex: 1, currentSelectedJob: job});
  }

  goBack = () => {
    this.setState({currentPageIndex: 0, currentSelectedJob: {}});
  }

  render() {
    switch (this.state.currentPageIndex) {
      case 0:
        return <HomeScreen selectJob={this.selectJob} jobs={JOBS} />
      case 1:
        return <JobScreen job={this.state.currentSelectedJob} selectJob={this.selectJob} goBack={this.goBack}/>
      default:
        return <HomeScreen selectJob={this.selectJob} jobs={JOBS} />
    }
  }
}

export default App;
