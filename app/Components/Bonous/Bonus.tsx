"use client"
import Details from '../../Components/Bonous/Details';
import PassengerDetails from '../../Components/Bonous/Details';
import { passengerdetails, payment} from '../../data';
import TopComponents from '../HelpCenter/topComponents';
import Dots from './Dots';
import PaymentDetails from './payment';
import Qrcodeimg from '../../../public/qrcode.jpg';
import Image from 'next/image';

const Bonus = () => {
    return (
        <div className='w-full bg-white py-[30px] shadow-lg my-[50px]'>
            <TopComponents title="Bonuce" subtitle="scan and pay for Technical krish"/>
            <div className='w-[353px] h-auto relative top-[30px] bg-base-white p-4 rounded-[10px] mx-auto my-0'>

                <Details passengerdetails={passengerdetails} />

                <hr className='mt-5 text-md-r text-secondary-200' />

                <PaymentDetails payment={payment} />

                <Dots />

                <div className='w-full h-full flex justify-center mt-[30px]'>
                    <Image src={Qrcodeimg} alt='' className='w-[100px] h-[100px]' />
                </div>
            </div>
        </div>
    )
}

export default Bonus