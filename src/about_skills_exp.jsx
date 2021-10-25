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
            <td>Python</td>
            <td>SQL</td>
            <td>jQuery</td>
          </tr>
          <tr>
            <td>Ruby</td>
            <td>HTML</td>
            <td>CSS</td>
            <td>C++</td>
          </tr>
          <tr>
            <td>Markdown</td>
            <td>Latex</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Django</td>
            <td>Node.js</td>
            <td>Express.js</td>
          </tr>
          <tr>
            <td>Ruby on Rails</td>
            <td>Bootstrap</td>
            <td>Pandas</td>
            <td>React-Bootstrap</td>
          </tr>
          <tr>
            <td>Numpy</td>
            <td>PyMySQL</td>
            <td>Cloud Foundry</td>
            <td>Git</td>
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