import React, {useContext} from 'react';
import PropTypes from 'prop-types'

import css from './DatePicker.module.scss';
import { BookingContext } from '../BookingContext';

export const DatePickerDescriptions = ({ feePerNight, feePerService, taxes }) => {
  const {place}= useContext(BookingContext)
  const {days} = place 
  return (
    <section className={css['date-picker-descriptions']}>
      <p className={css['descriptions']}>
        <span className={css['span']}> {feePerNight} x {days} noche</span>
        <span className={css['span']}> Comisión por servicio</span>
        <span className={css['span']}> Impuestos y tarifas</span>
      </p>
      <p className={css['amounts']}>
        <span className={css['span']}>$ {feePerNight * days} </span>
        <span className={css['span']}>$ {feePerService} </span>
        <span className={css['span']}>$ {taxes} </span>
      </p>
      <p className={css['total-container']}>
        <b className={css['total-text']}> Total </b>
        <b className={css['total-amount']}>
          {' '}
          $ {(feePerNight * days) + feePerService + taxes}{' '}
        </b>
      </p>
    </section>
  );
};


DatePickerDescriptions.propTypes = {
  feePerService: PropTypes.number,
  taxes: PropTypes.number,
  feePerNight: PropTypes.number,
}