import React, { useState, useContext } from 'react';
import moment from 'moment';

import { BookingContext } from '../BookingContext';

import css from './DatePicker.module.scss';

export const DatePickerForm = () => {
  const { setGuests,
    checkoutDate,
    setCheckoutDate, 
    checkinDate,
    setCheckinDate } = useContext(BookingContext);

  const [checkinType, setCheckinType] = useState('text');
  const [checkoutType, setCheckoutType] = useState('text');

  const handleCheckinClick = (Type) => {
    setCheckinType('date');
  };

  const handleCheckoutClick = (Type) => {
    setCheckoutType('date');
  };

  const getGuestsAmount = () => {
    moment
    const amount = document.getElementById('guests').value;
    setGuests(amount);
  };

  const getCheckinDate = () => {
    let inDate = document.getElementById('check-in').value;
    inDate = moment(inDate).format("DD [de] MMM")
    setCheckinDate(inDate);
  };
  
  const getCheckoutDate = () => {
    let outDate = document.getElementById('checkout').value;
    outDate = moment(outDate).format("DD [de] MMM")
    setCheckoutDate(outDate);
  };

  const compareDates = (checkinDate, checkoutDate) => {
    const a = checkinDate.clone()
    const b = checkoutDate.clone()
    const diffDays = b.diff(a) // (1000 * 60 * 60 * 24)) 
    console.log(diffDays)
  }

  return (
    <section className={css['date-picker-form']}>
      <div className={css['check-in-container']}>
        <label className={css['label']} htmlFor="check-in">
          Llegada
        </label>
        {checkinType === 'text' ? (
          <input
            onClick={handleCheckinClick}
            type={checkinType}
            placeholder="Ingresa una fecha"
          />
        ) : (
          <input
            onClick={getCheckinDate}
            type={checkinType}
            name="check-in"
            id="check-in"
          />
        )}
      </div>

      <div className={css['checkout-container']}>
        <label className={css['label']} htmlFor="checkout">
          Salida
        </label>
        {checkoutType === 'text' ? (
          <input
            onClick={handleCheckoutClick}
            type={checkoutType}
            placeholder="Ingresa una fecha"
          />
        ) : (
          <input
            onClick={getCheckoutDate}
            onChange={compareDates}
            type={checkoutType}
            name="checkout"
            id="checkout"
          />
        )}
      </div>

      <div className={css['guest-counter-container']}>
        <label className={css['label']} htmlFor="guests">
          Huéspedes
        </label>
        <select name="guests" id="guests" onChange={getGuestsAmount}>
          <option value="1">1 Huésped</option>
          <option value="2">2 Huéspedes</option>
          <option value="3">3 Huéspedes</option>
          <option value="4">4 Huéspedes</option>
          <option value="5">5 Huéspedes</option>
          <option value="6">6 Huéspedes</option>
          <option value="7">7 Huéspedes</option>
          <option value="8">8 Huéspedes</option>
          <option value="9">9 Huéspedes</option>
          <option value="10">10 Huéspedes</option>
        </select>
      </div>
    </section>
  );
};
