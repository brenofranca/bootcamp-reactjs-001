import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './styles/globals.scss';

import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Autor 1',
        avatar:
          'https://lh3.googleusercontent.com/-z1L6WDz-Ufg/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZyRbrE2AHS28mDN3cXuXZpRCuX3Q/mo/photo.jpg?sz=46',
        created_at: 'há 1 min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere.',
      },
      {
        id: 2,
        author: 'Autor 2',
        avatar:
          'https://lh3.googleusercontent.com/-z1L6WDz-Ufg/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZyRbrE2AHS28mDN3cXuXZpRCuX3Q/mo/photo.jpg?sz=46',
        created_at: 'há 2 min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere.',
      },
      {
        id: 3,
        author: 'Autor 3',
        avatar:
          'https://lh3.googleusercontent.com/-z1L6WDz-Ufg/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZyRbrE2AHS28mDN3cXuXZpRCuX3Q/mo/photo.jpg?sz=46',
        created_at: 'há 3 min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <Post posts={posts} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
