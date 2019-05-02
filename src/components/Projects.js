import React, { Component } from 'react';
import rick from '../assets/rick.jpg';
import Container from 'react-bootstrap/Container';
import ProjectCard from './ProjectCard';
import lyft1 from '../assets/lyftr/exercises.PNG';
import lyft2 from '../assets/lyftr/login.PNG';
import lyft3 from '../assets/lyftr/workout.PNG';
import lyft4 from '../assets/lyftr/workouts.PNG';
import terra1 from '../assets/terracotta/1fix.png';
import terra2 from '../assets/terracotta/2fix.png';
import terra3 from '../assets/terracotta/3fix.png';
import weather1 from '../assets/weather/first.png';
import weather2 from '../assets/weather/second.png';

const imageMap = [
  {
    projectName: 'Weather Website',
    projectPics: [weather1, weather2],
    projectDesc: `Built over a couple of days as a pair-programming project, users can search any city on earth and will recieve local weather including a multi-day forecast of temperature and percipitation displayed as a graph. Users type a city name into the search bar, which makes an axios request to our Express server that handles the Mapbox API for exact longitude and latitude co-ordinates, which are then used to request weather data from the Darksky API. The returned data is then parsed into usable JSON objects that can be given to Chart.js to display.`,
    website: 'https://github.com/SquishyRock/Weather'
  },
  {
    projectName: 'Lyfter Final Project',
    projectPics: [lyft1, lyft2, lyft3, lyft4],
    projectDesc: `Web browser application, optimized for mobile viewing, that was built as the final project to a 3 month coding bootcamp. The application was completed start to finish in the two final weeks of the program.

    Users can sign into the application after creating a personalized username and password, which once signed in is stored as a JWT to allow for users to use the site without having to sign in again until clearing their cookies. Once signed in, users can search through workout programs created by other users that they have shared or can create their own. By selecting 'Make a Workout' users can search through our database of exercises and add them to a workout with their desired sets and reps. Once finished adding exercies users can give the workout a name and choose whether to make that workout public so other users can select it aswell. Once saved all public workouts, plus the signed in users private workouts, will be visable on the find a workout tab. From this page users can view workouts and delete workouts that they have created themselves.`,
    website: 'https://github.com/SquishyRock/Lyftr'
  },
  {
    projectName: 'Terracotta Application',
    projectPics: [terra1, terra2, terra3],
    projectDesc: `Multi-lingual audio guide mobile application built using React Native and deployed to both the Google and Apple stores. Flags on the home screen are used to signify which language the application will use, which can also be modified at any time. Users can listen to 30 different audio guides, view one of over 100 text panels, or get more information on the exhibit from the different links on the home screen. Both the audio player and panel search tabs lets users type an input code to select an individual link or users may scroll through the available links and make their selection from there. The information tab provides a breif exhbit overview as well as links to directions, the exhibit web page, and Facebook page.

    All content is downloaded with application to elimate the need to transmit content`,
    website: 'https://github.com/SquishyRock/TerracottaArmy'
  }
]

class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectCard project={imageMap[0]}/>
        <ProjectCard project={imageMap[1]}/>
        <ProjectCard project={imageMap[2]}/>
      </div>
    );
  }
}

export default Projects;
