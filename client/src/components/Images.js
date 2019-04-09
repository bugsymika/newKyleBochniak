import './css/image.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import React, { Component } from 'react';

export default class Images extends Component {
  state = {
    photos: [
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/18301294_10105178630424993_1767433976070417434_n.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/19113690_10155051316130073_5515622077057682741_n.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/21462506_10155344043315073_5041360259054022643_n.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/41688055_1838061816269355_7186466019857137664_n.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/DFXoMDsWAAAQ7lA.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/Kyle_Bochniak.png',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/gettyimages-596419994.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/kyle-bochniak-brandon-davis-ufc-2201.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/kyle-bochniak-ufc-223-1.jpg',
      'https://s3.us-east-2.amazonaws.com/crashbochniak/photos/kyle-bochniak-ufc-2231.jpg'
    ]
  };

  render() {
    return this.state.photos.map(element => {
      return (
        <LazyLoadImage
          effect='blur'
          key={element}
          src={element}
          alt='did not load'
          className='image-image'
        />
      );
    });
  }
}
