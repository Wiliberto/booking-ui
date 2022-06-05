import React, {useContext} from 'react';

import css from './DatePicker.module.scss';
import {DatePickerForm} from './DatePickerForm';
import {DatePickerButtonCheck} from './DatePickerButtonCheck';
import { BookingContext } from '../BookingContext';


export const DatePicker = () => {

  const {place} = useContext(BookingContext)

  const {feePerNight, feePerService, taxes, currency} = place

  return (
    <div className={css['container body']}>
      <p className={css['night-fee']}>
        <b> ${feePerNight} {currency}</b> / noche
      </p>
      <DatePickerForm />
      <DatePickerButtonCheck 
      feePerNight={feePerNight}
      feePerService={feePerService}
      taxes={taxes}
      />
    </div>
  );
};


