'use client'

import { motion } from "framer-motion";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { MdHome, MdMail, MdPerson, MdWork } from "react-icons/md";


const Sidenav = () => {

    const pathname = usePathname()

    console.log('Pathname: ', pathname)

    const navlinks = [
        { name: 'Home', icon: <MdHome />, path: '/' },
        { name: 'About', icon: <MdPerson />, path: '/about' },
        { name: 'Projects', icon: <MdWork />, path: '/projects' },
        { name: 'Contact', icon: <MdMail />, path: '/contact' },
    ]

    return (
        <nav className='fixed max-lg:bottom-2 max-lg:w-full flex items-center justify-center z-50 lg:left-2 lg:h-full'>
            <div className='flex gap-x-6 lg:gap-x-10 px-4 py-3 lg:py-6 rounded-full bg-stone-300 lg:flex-col lg:gap-y-10'>
                {navlinks.map((link) => (
                    <Link key={link.name} href={link.path} className={`${link.path === pathname ? "text-white" : "text-['#141414']"}`}>
                        <motion.div whileHover={{ scale: 1.2 }} className="bg-[#14141419] relative group rounded-full p-1 lg:p-2">
                            <motion.span className="h-8 w-8 bold-18 z-50">{link.icon}</motion.span>
                            <span className='absolute max-lg:bottom-[50px] max-lg:-right-3 lg:left-[50px] lg:top-2 text-white bg-stone-600 text-sm px-2 rounded-md hidden group-hover:flex'>{link.name}
                            <span className="h-2 w-2 bg-stone-600 absolute max-lg:top-4 max-lg:left-5 translate-x-1/2 lg:top-[6px] lg:left-[-6px] rotate-45 rounded-sm"></span>
                            </span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Sidenav