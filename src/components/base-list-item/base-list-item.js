import React, { Fragment } from 'react';
import './base-list-item.css';

const BaseListItem = ({ item }) => {
  const { id } = item;
  return (
    <Fragment>
      <span>{id}</span>
    </Fragment>
  );
};

export default BaseListItem;
