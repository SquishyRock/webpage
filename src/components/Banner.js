import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        <h1>
          Alexander Iacampo
      </h1>
        <h2>
          Developer
      </h2>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    padding: 5,
    borderBottom: 'solid black',
    marginBottom: 30,
    flexDirection: 'column'
  },
  textStyle: {
    fontSize: 16,
    flexGrow: 2
  },
  imgStyle: {
    flexGrow: 1
  }
}

export default Banner;
