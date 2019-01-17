import React, { Component } from 'react';
import BaseListItem from '../base-list-item';
import { connect } from 'react-redux';


import { withBaseStructService } from '../hoc';
import { itemsLoaded } from '../../actions';
import { compose } from '../../utils';
import './base-list.css';

class BaseList extends Component {

  componentDidMount() {
    const { baseStructService } = this.props;
    const data = baseStructService.getBaseItems();

    this.props.itemsLoaded(data);
  }

  render() {
    const { items } = this.props;
    return (
      <ul>
        {
         items.map((item) => {
           return (
             <li key={item.id}><BaseListItem item={item}/></li>
           )
         })
       }
      </ul>
    );
  }

}

const mapStateToProps = ({ items }) => {
  return { items };
};

const mapDispatchToProps = {
    itemsLoaded
};

export default compose(
   withBaseStructService(),
   connect(mapStateToProps, mapDispatchToProps)
)(BaseList);
