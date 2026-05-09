import React from 'react'
import { motion } from 'framer-motion'
import juice from "../assets/juice.png"
import splash from "../assets/splash.png"
import { fadeUp } from "./fadeup.js"  

const Banner = () => {
    return(
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
                {/* {banner image section} */}
                <div className='relative' >
                    <motion.img  initial = {{ 
                        opacity:0, x: -100
                    }}
                    whileInView={{
                        opacity:1 , x:0
                    }}
                    transition={{
                        duration:0.8 , delay:0.2 ,   ease: "easeInOut"
                    }}
                    
                    src={juice} alt="" 
                    className='w-[300px] md:w-[400px] mx-auto relative z-10 '/>

                    <motion.img   initial = {{ 
                        opacity:0, y: -100 , rotate:-180, scale:0
                    }}
                    whileInView={{
                        opacity:1 , y:0 , rotate:0 , scale:1
                    }}
                    transition={{
                        duration:0.8 , delay:0.6 ,   ease: "easeInOut"
                    }}
                    src={splash} alt="" className='absolute bottom-0 z-0' />

                </div>

                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl lg:text-4xl font-semibold mt-30'>Refresh Your World with Fanta</h1>
                    <p className='text-gray-500 mt-4' >
                        Fanta brings a burst of vibrant flavors and effervescent fun to your day! Whether you're looking to quench your thirst with a zesty orange, tangy lemon, or one of our many other fruit-inspired flavors, Fanta is your go-to drink for a refreshing and exciting experience. Dive into the world of Fanta and let every sip spark your senses with its bold, bubbly, and refreshing taste!
                    </p>
                    {/* banner text info section  */}
                    <button className="rounded-full border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 mt-5 w-30 ml-60">
  Buy Now
</button>
                </div>
            </div>
        </section>
    )
}

export default Banner 