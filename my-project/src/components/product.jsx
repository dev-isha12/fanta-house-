import fanta1 from "../assets/fanta1.png"
import fanta2 from "../assets/fanta2.png"
import fanta3 from "../assets/fanta3.png"

const ProductData =[
    {
        id: 1,
        title: "Orange Fanta",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, porro.",
        image: fanta1,
        delay: 0.5
    },
    {
        id: 2,
        title: "Lemon Fanta",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, porro.",
        image: fanta2,
        delay: 0.8
    },
    {
        id: 3, 
        title: "Cola Zero",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, porro.",
        image: fanta3,
        delay: 1.1
    },
]

const Product = () => {
    return (
        <div className="bg-gray-100 py-8">
           
            <div className="container mx-auto py-14">
                <h1 className="text-3xl font-bold text-center">Our Products</h1>
              
                <div className="max-w-5xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {ProductData.map((item) => (
                        <div 
                            className="flex flex-col items-center justify-center p-5 w-full max-w-[300px] mx-auto shadow-lg rounded-xl bg-white" 
                            key={item.id}
                        >
                            <div>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300" 
                                />
                            </div>
                            <h1 className="text-xl font-bold text-center">{item.title}</h1>
                            <p className="text-sm text-center text-gray-600 mt-2">{item.desc}</p>
                            
                            <button className="mt-5 border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-colors">
                                Buy Now
                            </button> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
