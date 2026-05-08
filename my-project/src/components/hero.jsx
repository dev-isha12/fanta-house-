import { useState } from "react";
import Navbar from "../components/navbar.jsx";
import fanta1 from "../assets/fanta1.png";
import fanta2 from "../assets/fanta2.png";
import fanta3 from "../assets/fanta3.png";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HeroData = [
    {
        id: 1,
        image: fanta1,
        title: "Orange Fanta",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "$40",
        oldPrice: "$40",
        modal: "Orange",
        bgColor: "#cf4f00"
    },
    {
        id: 2,
        image: fanta2,
        title: "Cola Zero",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "$100",
        oldPrice: "$100",
        modal: "Zero",
        bgColor: "#2e2e2e"
    },
    {
        id: 3,
        image: fanta3,
        title: "Coca Cola",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "$100",
        oldPrice: "$100",
        modal: "Cola",
        bgColor: "#ac1a00"
    }
];

export default function Hero() {
    const [activeData, setActiveData] = useState(HeroData[0]);

    return (
        <motion.div
            className="relative flex h-[700px] min-h-[730px] w-full flex-col overflow-hidden text-white"
            initial={{ backgroundColor: activeData.bgColor }}
            animate={{ backgroundColor: activeData.bgColor }}
            transition={{ duration: 0.8 }}
        >
            <Navbar />

            <AnimatePresence mode="wait">
                <motion.h1
                    key={activeData.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.12, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 select-none text-[10rem] font-black leading-none text-white opacity-10 sm:text-[14rem] md:text-[18rem] lg:text-[22rem] xl:text-[26rem]"
                >
                    {activeData.modal}
                </motion.h1>
            </AnimatePresence>

            <div className="relative z-10 mx-auto grid h-[582px] w-full max-w-[1500px] grid-cols-1 px-5 sm:px-8 md:grid-cols-[0.95fr_1.05fr] lg:px-16 xl:px-20">
                <div className="order-2 flex min-w-0 flex-col justify-center pb-8 md:order-1 md:pb-16">
                    <div className="text-center md:text-left ">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={activeData.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.45 }}
                                className="font-handwriting text-[3.65rem] font-bold leading-[0.95] text-white drop-shadow-[0_10px_7px_rgba(0,0,0,0.25)] sm:text-[5.4rem] lg:text-[6.3rem] xl:text-[6rem] "
                            >
                                {activeData.title}
                            </motion.h1>
                        </AnimatePresence>
                        <p className="mx-auto mt-7 max-w-[590px] text-[0.95rem] font-semibold leading-8 text-white/90 md:mx-0 md:text-base">
                            {activeData.subtitle}
                        </p>
                        <button className="mt-7 rounded-sm bg-white px-7 py-3 text-base font-semibold text-[#cf4f00] shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(0,0,0,0.22)]">
                            Order Now
                        </button>

                        <div className="mt-9 flex items-center justify-center gap-5 md:justify-start">
                            <div className="h-px w-14 bg-white/80 sm:w-24"></div>
                            <p className="text-xs font-black uppercase text-white sm:text-[0.95rem]">Top Recommendation</p>
                            <div className="h-px w-14 bg-white/80 sm:w-24"></div>
                        </div>

                        <div className="mx-auto mt- grid w-full max-w-[520px] grid-cols-3 gap-4 sm:gap-8 md:mx-0 md:max-w-[500px] ">
                            {HeroData.map((data) => (
                                <button
                                    key={data.id}
                                    type="button"
                                    aria-label={`Show ${data.title}`}
                                    aria-pressed={activeData.id === data.id}
                                    onClick={() => setActiveData(data)}
                                    className="group flex min-w-0 cursor-pointer flex-col items-center rounded-sm py-1 outline-none transition focus-visible:ring-2 focus-visible:ring-white/80"
                                >
                                    <div className={`mb-3 h-3 w-3 rounded-full bg-white transition-opacity ${activeData.id === data.id ? "opacity-100" : "opacity-0"}`}></div>
                                    <div className={`flex h-[148px] w-[92px] items-end justify-center transition duration-300 group-hover:scale-105 ${activeData.id === data.id ? "scale-105 opacity-100" : "scale-95 opacity-50"}`}>
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                            className="max-h-[142px] w-auto object-contain drop-shadow-[0_16px_16px_rgba(0,0,0,0.28)]"
                                        />
                                    </div>
                                    <div className="mt-4 text-center text-white">
                                        <p className="text-base font-bold leading-none text-white/45 line-through">{data.oldPrice}</p>
                                        <p className="mt-3 text-[1.45rem] font-black leading-none">{data.price}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative order-1 hidden h-full items-end justify-center md:order-2 md:flex">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeData.id}
                            src={activeData.image}
                            alt={activeData.title}
                            initial={{ opacity: 0, scale: 0.86, rotate: 10, y: 28 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                            exit={{ opacity: 0, scale: 0.86, rotate: -10, y: 24 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="z-10 max-h-[500px] w-auto object-contain drop-shadow-[-20px_26px_34px_rgba(0,0,0,0.35)] lg:max-h-[550px] xl:max-h-[455px] mb-10"
                        />
                    </AnimatePresence>
                </div>

            </div>

            <div className="fixed bottom-8 right-8 z-50">
                <a href="#" className="text-[#00e5ff] text-4xl hover:scale-110 transition-transform inline-block drop-shadow-md">
                    <FaWhatsapp />
                </a>
            </div>
        </motion.div>
    );
}
