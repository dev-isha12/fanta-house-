import React from 'react'
// import { motion } from 'framer-motion' // You can uncomment this when you use it!

const Text = () => {
  return (
    <section className='py-12 text-center '>
        <div className="container">
           
            <div className='max-w-40xl ml-45 mx-auto bg-gradient-to-t from-orange-500 to-orange-400 text-white rounded-3xl p-10 hover:scale-105 duration-500 shadow-xl shadow-orange-500/30 hover:shadow-2xl'>
                
                {/* 4. Made text bold, larger, and added a line break (<br/>) to match the target */}
                <p className='font-bold text-2xl md:text-3xl leading-snug tracking-wide'>
                    Every sip of Fanta turns up the fun—refresh your day <br className="hidden md:block" /> 
                    with bold flavors and bubbly excitement!
                </p>
                
            </div>
        </div>
    </section>
  )
}

export default Text