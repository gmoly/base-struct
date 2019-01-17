import React from 'react';
import BaseList from '../base-list';
import { Auth } from '../auth'

const HomePage = () => {
  return (
    <div>
      <Auth />
      <BaseList />
    </div>
  );
};

export default HomePage;
