import React, { Component } from 'react';



class ContactMe extends Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        <div style={styles.textContainer}>
          <h2>
            Alexander Iacampo
          </h2>
          <h2>
            iacampoaw@gmail.com
          </h2>
          <h2>
            289-339-3955
          </h2>
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textContainer: {

  }  
}

export default ContactMe;
