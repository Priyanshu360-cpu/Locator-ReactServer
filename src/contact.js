
import React from 'react';
  
const Contact = () => {
  return (
    <div>
      <h1>Page ID - {window.location.href.split("id=")[1]}</h1>
    </div>
  );
};
  
export default Contact;