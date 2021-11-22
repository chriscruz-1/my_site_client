import React from 'react';
import { Table } from 'reactstrap';

const SkillsExp = () => {
  return (
    <>
      <Table borderless>
        <thead>
          <tr>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Javascript</td>
            <td>React</td>
            <td>VX.js</td>
            <td>Python</td>
          </tr>
          <tr>
            <td>Django</td>
            <td>Bootstrap</td>
            <td>React-Bootstrap</td>
            <td>HTML</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Git</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td>jQuery</td>
            <td>Ruby</td>
            <td>C++</td>
          </tr>
          <tr>
            <td>Node.js</td>
            <td>Express.js</td>
            <td>Ruby on Rails</td>
            <td>d3.js</td>
          </tr>
          <tr>
            <td>Pandas</td>
            <td>Numpy</td>
            <td>PyMySQL</td>
            <td>CloudFoundry</td>
          </tr>
        </tbody>
      </Table>
      <Table borderless hover>
        <thead>
          <tr>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Intel</th>
            <td>Software Intern</td>
            <td>Jan - Aug 2021</td>
          </tr>
          <tr>
            <th>UC Davis</th>
            <td>Web Developer</td>
            <td>Apr 2020 - Jan 2021 | Aug 2021 - Present</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default SkillsExp;