import React from "react";

function Profile(props) {
  const { user } = props;
  return (
    <div
      className='col-md-3 text-center'
      style={{ boxShadow: "0px 0px 4px 0px #00000045" }}
    >
      <div className='bg-white rounded shadow-sm py-5 px-4'>
        <img
          src='https://bootdey.com/img/Content/avatar/avatar2.png'
          alt='avatar'
          width={100}
          className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
        />
        <h5 className='mb-0'>{user.name}</h5>
        <span className='small text-uppercase text-muted'>Web developer</span>
        <ul className='social mb-0 list-inline mt-3'>
          <li className='list-inline-item'>
            <a href='#/' className='social-link'>
              <i className='fa fa-facebook-f' />
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='#/' className='social-link'>
              <i className='fa fa-twitter' />
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='#/' className='social-link'>
              <i className='fa fa-instagram' />
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='#/' className='social-link'>
              <i className='fa fa-linkedin' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
