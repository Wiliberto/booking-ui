import React from 'react';
import { BookingContext } from './BookingContext';


import {DatePicker} from './DatePickerCheck/DatePicker';
import { Reservation } from './ReservationView';

export const Booking = () => {
  return (
    <BookingContext.Provider value={{}}>
      <DatePicker />
      <Reservation />
    </BookingContext.Provider>
  );
};