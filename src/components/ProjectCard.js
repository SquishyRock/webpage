import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ProjectCard extends Component {
  renderCarouselItems() {
    const imgMap = this.props.project.projectPics.map((val) =>
      <Carousel.Item>
        <img
          src={val}
          alt="text"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Carousel.Item>
    );
    return imgMap
  }

  render() {
    return (
      <div className='row' style={styles.containerStyle}>
        <div className='col-4' >
          <Carousel 
            interval={3000}
            controls={false}
            indicators={false}
            style={{
            maxHeight: 300,
            overflow: 'hidden',
          }}>
            {this.renderCarouselItems()}
          </Carousel>
          
        </div>
        <div className='col-8' style={styles.textStyle}>
          <a href={this.props.project.website}><h2>{this.props.project.projectName}</h2></a>
          <p>{this.props.project.projectDesc}</p>
        </div>
      </div >
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    padding: 5,
    borderBottom: 'solid black',
    marginBottom: 30,
    height: 400
  },
  textStyle: {
    fontSize: 16,
    flexGrow: 2
  },
}

export default ProjectCard;
