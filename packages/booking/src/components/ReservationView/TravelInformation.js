import React, {useContext} from 'react';
// Components
import SubTitle from './SubTitle';
import Paragraph from './Paragraph';
import EditButton from './EditButton';
import TextInformation from './TextInformation';
import { BookingContext } from '../BookingContext';
// Styles
import '../../assets/styles/TravelInformation.scss';


const TravelInformation = () => {

  const {checkinDate,checkoutDate, guests} = useContext(BookingContext)

  console.log(checkinDate)
  console.log(checkoutDate)

  return (
    <section className="travelInformation">
      <SubTitle>Tu viaje</SubTitle>
      <div className="travelInformation__section">
        <div className="travelInformation__first">
          <Paragraph>Fechas</Paragraph>
          <EditButton>Editar</EditButton>
        </div>
        <TextInformation>{checkinDate.toString()} - {checkoutDate.toString()}</TextInformation>
      </div>
      <div className="travelInformation__section">
        <div className="travelInformation__first">
          <Paragraph>Huéspedes</Paragraph>
          <EditButton>Editar</EditButton>
        </div>
        <TextInformation>{guests} huésped</TextInformation>
      </div>
    </section>
  );
};

export default TravelInformation;
