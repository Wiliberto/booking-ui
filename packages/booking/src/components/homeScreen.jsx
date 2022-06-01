import React from 'react';
import { BookingContext } from './BookingContext';

import DatePicker from './DatePickerCheck/DatePicker';

export const Booking = () => {
  return (
    <BookingContext.Provider value={{}}>
      <DatePicker />
    </BookingContext.Provider>
  );
};
