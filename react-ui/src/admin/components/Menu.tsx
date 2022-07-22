import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const Menu = () => {
   return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
         <div className="sidebar-sticky">
            <ul className="nav flex-column">
               <li className="nav-item">
                  <a className="nav-link" href="/">
                     <FontAwesomeIcon icon={['fas', 'home']}/> Home
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link active" href="/admin/products">
                     <FontAwesomeIcon icon={['fas', 'shopping-cart']}/> Products
                     <span className="sr-only">(current)</span>
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Menu;