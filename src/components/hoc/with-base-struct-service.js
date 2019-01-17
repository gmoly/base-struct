import React from 'react';
import { BaseStructServiceConsumer } from '../base-struct-context';

const withBaseStructService = () => (Wrapped) => {

  return (props) => {
    return (
      <BaseStructServiceConsumer>
        {
          (baseStructService) => {
            return (<Wrapped {...props}
                     baseStructService={baseStructService}/>);
          }
        }
      </BaseStructServiceConsumer>
    );
  }
};

export default withBaseStructService;
