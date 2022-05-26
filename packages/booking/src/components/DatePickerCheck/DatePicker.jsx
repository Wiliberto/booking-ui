import React from 'react';

import css from './DatePicker.module.scss';
import {DatePickerForm} from './DatePickerForm';
import {DatePickerButtonCheck} from './DatePickerButtonCheck';


export const DatePicker = () => {
  
  const feePerNight = 285040;

  return (
    <div className={css['container body']}>
      <p className={css['night-fee']}>
        <b> ${feePerNight} COP</b> / noche
      </p>
      <DatePickerForm />
      <DatePickerButtonCheck />
    </div>
  );
};


