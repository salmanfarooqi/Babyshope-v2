// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

// const Layout  = ({ Children }) => {
//   return (
//     <div>
//       <div>
//         <Navbar/>
//         {Children}
//         <Footer/>
//       </div>
//     </div>
//   );
// }

// export default Layout



import React from 'react';
// import Navbar from './Navbar';
import Footer from './Footer';
// import Navbar from './navbar';
import Navbar from './Navbar'

const Layout  = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;

