import React from "react";

import About from "./../../Components/AboutComponent/About";

const Main = () => {
  return (
    <div className="mt-5 mb-5 container">
      <h1 className="font mx-auto text-center">HEY, I'M TALYA FALACH</h1>
      <p className="text-center mx-auto w-75 mt-3">
       
        I'm Talya Falach, a dedicated learner with a passion for Quality
        Assurance (QA) in software development. With a solid background in full
        stack development, I bring a holistic understanding of the development
        process to ensure high-quality and efficient software products.
      </p>

      <About />
    </div>
  );
};

export default Main;
