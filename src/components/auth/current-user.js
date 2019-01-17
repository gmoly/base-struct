import React, { PropTypes } from 'react';

const CurrentUser = ({ user }) => {

return (
    <div className="CurrentUser">
      { user.displayName }
      <img className="CurrentUser--photo"
      src={ user.photoURL }
      alt={ user.displayName }
      />
    </div>
  );
};

export default CurrentUser;
