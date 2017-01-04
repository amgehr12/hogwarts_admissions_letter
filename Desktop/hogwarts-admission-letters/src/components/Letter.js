import React from 'react';

const Letter = props => {
  return (<div>
    <br/>
    <h2> HOGWARTS SCHOOL OF <br/> WITCHCRAFT AND WIZARDRY </h2>
    <br/>
    <h3> Headmaster: Albus Dumbledore </h3>
      <h4> (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
        International Confed. of Wizards) </h4>
          <br/>
          <p> Dear {props.name},</p>
          <p> {props.message} </p>
          <p> Yours sincerely,</p>
      <p>Minerva McGonagall <br/>
      <strong>Deputy Headmistress </strong></p>
  </div>
  );
};

export default Letter;
