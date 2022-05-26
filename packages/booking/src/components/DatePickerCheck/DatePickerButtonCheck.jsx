import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {DatePickerDescriptions} from './DatePickerDescriptions';

import css from './DatePicker.module.scss'

export const DatePickerButtonCheck = ({ feePerService, taxes, feePerNight }) => {
  // use a hook state to change the text on the button
  const [buttonText, setButtonText] = useState('Comprobar disponibilidad');

  // create a variable to store the function that will set the new state
  const changeText = (text) => {
    setButtonText('Comprobando');
    setTimeout(() => {
      setButtonText(text);
    }, 4000);
  };
  console.log(feePerService)
  return (
    <>
      <button onClick={() => changeText('Reservar')}
      className={css['button']}>{buttonText}</button>
      {buttonText === 'Reservar' ? (
        <DatePickerDescriptions
          feePerNight={feePerNight}
          feePerService={feePerService}
          taxes={taxes}
        />
      ) : null}
    </>
  );
};

DatePickerButtonCheck.propTypes = {
  feePerService: PropTypes.number,
  taxes: PropTypes.number,
  feePerNight: PropTypes.number,
}


