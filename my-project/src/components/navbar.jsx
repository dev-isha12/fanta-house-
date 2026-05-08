import logo from "../assets/logo.png"
import { FaRegUser } from "react-icons/fa";



const NavbarMenu =[
    {
        id:1,
        title:"Home",
        link :"#"
    } ,
    {
        id:2,
        title:"Categories",
        link :"#"
    },
    {
        id:3,
        title:"Blog",
        link :"#"
    },
    {
        id:4,
        title:"About",
        link :"#"
    },
    {
        id:5,
        title:"Contact",
        link :"#"
    }
]

export default function Navbar (){
    return(
        <header className="relative z-30 h-[118px] text-white">
            <div className="mx-auto flex h-full w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-16 xl:px-20">
                <img src={logo} alt="Fanta Logo" className="h-24 w-24 object-contain invert sm:h-28 sm:w-28"/>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 lg:gap-12">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="inline-block py-2 text-base font-black uppercase transition-colors hover:text-orange-100">
                                    {item.title}
                                </a>
                            </li>
                        ))}

                        <li>
                            <button className="rounded-full p-2 text-2xl transition hover:bg-white/10" aria-label="Account">
                                <FaRegUser />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
