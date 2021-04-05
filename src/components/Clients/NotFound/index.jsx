import useImportScript from "hooks/import-custom-script";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useImportScript();

  return (
    <div className='error-page-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='error-content'>
              <h2>Oooops!</h2>
              <h3>PAGE NOT FOUND</h3>
              <img src='assets/images/404.gif' alt='Mountains' />
              <Link to='/' className='btn-small'>
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
