import React from 'react';

const About = () => (
  <div
    name="about"
    className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-6"
  >
    <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-l mt-2">
        I am a detail-oriented Full Stack Web Developer with experience
        in project management, problem-solving, and time management. My
        creativity and collaboration skills make me a valuable addition
        to any software development team, particularly in a remote or
        cross-cultural setting.
      </p>

      <br />

      <p className="text-l">
        With an international background and experience working
        asynchronously, I am well-equipped to handle global projects.
        As a results-oriented developer, I always strive to deliver
        high-quality work, whether it&apos;s designing and implementing
        user-friendly interfaces or analyzing data to improve
        software performance.
      </p>

      <br />

      <p className="text-l">
        I am committed to continuous learning and staying up-to-date
        with the latest technologies and best practices in software
        development. With a solid foundation in object-oriented
        programming, data structures, and algorithms, I am confident
        in my ability to tackle any development challenge.
      </p>
    </div>
  </div>
);

export default About;
