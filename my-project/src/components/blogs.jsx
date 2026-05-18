import React from 'react'
import { motion } from 'framer-motion'
import first from '../assets/first.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'
import four from '../assets/four.jpg'

const data =[
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corrupti?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error!",
        img: first ,
        link: "#"
    },
     {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corrupti?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error!",
        img: second,
        link: "#"
    },
     {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corrupti?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error!",
        img: third ,
        link: "#"
    },
     {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corrupti?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error!",
        img: four ,
        link: "#"
    },
    
    
]

const Blog = () => {
  return (
    <section>
        <div className="container">
            <h1 className=" text-center font-bold text-3xl pb-8 ml-[210px]">Blogs</h1>
            
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {data.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-3 p-4 max-w-[300px] mx-auto shadow-lg rounded-md">
            <img src={item.img} alt={item.title} className="w-full rounded-md object-cover" />
            <div className="space-y-2 w-full">
                <h2 className="text-xl font-bold line-clamp-2">{item.title}</h2>
                <p className="line-clamp-2">{item.desc}</p>
            </div>
        </div>
    ))}
</div>

    </section>
  )
}

export default Blog
