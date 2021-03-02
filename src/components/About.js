import React from "react";
import { Link } from "react-router-dom";

const About = () => {
   return (
      <div>
         <h4>Version 1.0.0</h4>
         <p>
            This is a very simple app I made to learn more about React,
            specically state and effect.
         </p>
         <Link to="/">Back to App</Link>
      </div>
   );
};

export default About;
