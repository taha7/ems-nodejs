import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/UI/Header/Header.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

if (document.getElementById('home')) {
  ReactDOM.render(<Home />, document.getElementById('home'));
}
