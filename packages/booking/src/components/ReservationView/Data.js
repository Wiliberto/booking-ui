import React, {useContext} from 'react';
// Components
import Title from './Title';
import TravelInformation from './TravelInformation';
import Requirements from './Requirements';
import Politics from './Politics';
import Card from './Card';
// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// Styles
import '../../assets/styles/Data.scss';
import '../../assets/styles/Card.scss';

import { BookingContext } from '../BookingContext';

// Card information
const imgOne = 'https://maidtocleanboise.com/files/2020/01/dl01kitchen.jpg';




const Data = () => {

  const {place} = useContext(BookingContext)
  const {feePerNight, feePerService, taxes, days} = place

  const data = [
    { detail: `${feePerNight} x ${days} noche`, value: `$${(feePerNight * days)}` },
    { detail: 'Comisión por servicio', value: `$${feePerService}` },
    { detail: 'Impuestos y tarifas', value: `$${taxes}` },
  ];

  const total = [{ detail: 'Total', value: `$${(feePerNight * days) + feePerService + taxes}` }];
  return (
    <section className="data">
      <div className="data__booking">
        <p className="data__icon">
          <ArrowBackIosNewIcon />
        </p>
        <Title />
      </div>
      <div className="information">
        <section className="information__left">
          <TravelInformation />
          <Requirements />
          <Politics />
        </section>
        <section className="information__right">
          <section className="App-container">
            <div>
              {/* <div className='bloque_der'> */}
              <Card Img={imgOne} Data={data} Total={total} />
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Data;
