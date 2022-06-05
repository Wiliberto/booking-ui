import React, {useState} from 'react';
import { BookingContext } from './BookingContext';

import { DatePicker } from './DatePickerCheck/DatePicker';
import { Reservation } from './ReservationView';

export const Booking = () => {
  const places = [
    {
      id: 1,
      currency: 'COP',
      feePerNight: 285041,
      feePerService: 44000,
      taxes: 2000,
      guests: 1,
      checkinDate: new Date(),
      checkoutDate: new Date(),
      days: 3,
    },
    {
      id: 2,
      currency: 'MX',
      feePerNight: 1235,
      feePerService: 440,
      taxes: 200,
      guests: 3,
      checkinDate: new Date(),
      checkoutDate: new Date(),
      days: 5,
    },
  ];
  
  const place = places[0]
  
  const [guests, setGuests] = useState(place.guests)
  const [checkinDate, setCheckinDate] = useState(place.checkinDate)
  const [checkoutDate, setCheckoutDate] = useState(place.checkoutDate)
  const [days, setDays] = useState(place.days)

  return (
    <BookingContext.Provider value={
      {place, 
      guests, 
      setGuests, 
      checkinDate, 
      setCheckinDate,
      checkoutDate,
      setCheckoutDate, 
      days, 
      setDays}}>
      <DatePicker />
      <Reservation />
    </BookingContext.Provider>
  );
};
