import './App.css'
import { LogoFondBlanc } from './images/index';
import { FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { styled } from '@mui/material/styles';

const LogoImg = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    width: 90,
    height: 60,
    transition: 'width 0.3s, height 0.3s',
    [theme.breakpoints.up('lg')]: {
        width: 120,
        height: 90,
    },
}));

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function Contacts() {

    return (
        <div className='bg-[#FFF9E6]'>
            <div className="flex pb-10 mt-10">
                <div className="flex flex-col items-center pt-0 w-full">
                    <div className='flex flex-col items-center lg:flex-row lg:gap-130 lg:mt-10'>
                        <a href="#" className='mb-5'>
                            <LogoImg className="w-[200px] h-[180px] cursor-pointer"
                                src={LogoFondBlanc}
                                alt="logo"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            />
                        </a>
                        <div className='flex justify-center'>
                            <div className='flex flex-col items-start gap-5 w-full  mx-auto'>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='font-semibold'>Adresse</h3>
                                    <div className='text-[#B1B1B1] flex items-center'>
                                        <FaLocationDot color="#C7AD5D" className="w-6 h-6" />
                                        <span className="ml-2">277, Av : Marine, Q : UPN, C : Ngaliema</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='font-semibold'>Contacts</h3>
                                    <div className='text-[#B1B1B1] flex items-center'>
                                        <FaPhoneAlt color="#C7AD5D" className="w-5 h-5" />
                                        <span className="ml-2">+243 81 49 84 424</span>
                                    </div>
                                    <div className='text-[#B1B1B1] flex items-center'>
                                        <IoIosMail color="#C7AD5D" className="w-7 h-7" />
                                        <span className="ml-2">chadrackmbala20@gmail.com</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='font-semibold'>Programmes</h3>
                                    <div className='text-[#B1B1B1] flex items-center'>
                                        <FaClock color="#C7AD5D" className="w-6 h-6" />
                                        <span className="ml-2">Du lundi au vendredi, de 08h à 17h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;