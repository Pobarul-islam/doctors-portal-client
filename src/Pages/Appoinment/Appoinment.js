import React, { useState } from 'react';
import Footer from '../Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>

        </div>
    );
};

export default Appoinment;