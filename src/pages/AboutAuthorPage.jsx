import React from 'react';

export default class AboutAuthorPage extends React.PureComponent {
  render() {
    return (
      <>
        <h2>About the Author</h2>
        <p>
          Hi, my name is
          <em>Ben Salès.</em>
          I am a fullstack web developer. Please visit my
          <a href="https://www.github.com/adebsa2401" target="_blank" rel="noreferrer">github profile.</a>
        </p>
      </>
    );
  }
}
