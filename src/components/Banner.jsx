/* eslint-disable no-unused-vars */
import React from 'react';
import { GoSearch } from "react-icons/go";
import {motion} from 'motion/react'
import { easeOut } from 'motion';
const Banner = () => {

    
    return (
        <div className="bg-[url('/banner.jpg')] bg-cover bg-center h-[500px] pt-[102px] px-[25px] flex flex-col justify-center gap-7">
            <motion.h1
            animate={{x: window.innerWidth >=768 ? [0, 150, 0] : [0, 60, 0]}}
            transition={{duration: 6, delay:2, ease: easeOut, repeat: Infinity}}
            className='text-[32px] max-w-[400px] md:text-[44px] md:max-w-[500px] font tracking-tight font-bold text-center'>
                A Better Way to <motion.span 
                animate={{
                    color: ["#e74c3c", "#f1c40f", "#d35400"],
                }}
                transition={{
                    duration: 3, // Duration of color cycle
                    ease: "easeInOut",
                    repeat: Infinity, // Repeats infinitely
                }}
                >Ship</motion.span> and <motion.span
                animate={{
                    color: ["#e74c3c", "#f1c40f", "#d35400"],
                }}
                transition={{
                    duration: 3, // Duration of color cycle
                    ease: "easeInOut",
                    repeat: Infinity, // Repeats infinitely
                }}
                >
                Logistics</motion.span> Solution</motion.h1>
            <form className="bg-white h-[54px] max-w-[500px]">
                <div className="flex gap-[28px] px-[25px] h-full items-center">
                    <div className='flex items-center w-full gap-3'>
                        <GoSearch></GoSearch>
                        <input type="password" placeholder="Search All Parcels" className="w-full outline-none" required />
                    </div>

                    <GoSearch className='text-[32px] text-red-600'></GoSearch>
                </div>
                
            </form>

        </div>
    );
};

export default Banner;