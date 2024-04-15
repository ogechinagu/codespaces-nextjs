import Link from "next/link"
import { FaGithub,FaLinkedinIn,FaThreads,FaXTwitter } from "react-icons/fa6";

const Header = () => {

    const SocialMedia = [
        {route: 'https://twitter.com/ogechinagu', color: 'bg-[#a2d2ff]', name: 'Twitter', icon: <FaXTwitter />},
        {route: 'https://www.linkedin.com/in/ogechinagu/', color: 'bg-[#ffafcc]', name: 'LinkedIn', icon: <FaLinkedinIn />},
        {route: 'https://www.threads.net/@ogechinagu', color: 'bg-[#bde0fe]', name: 'Threads', icon: <FaThreads  />},
        {route: 'https://github.com/ogechinagu', color: 'bg-[#ffc8dd]', name: 'GitHub', icon: <FaGithub  />},
    ]
    return (
        <header className=" flex justify-between items-center px-8 py-4 absolute top-0 w-full">
            <Link href={'/'}>
                <p className="text-lg font-black tracking-tight text-[#a2d2ff]">OGECHINAGU</p>
            </Link>
            <div className="flex gap-2">
                {
                    SocialMedia.map((link) => (
                        <Link 
                        href={'/'} 
                        key={link.name}
                        className={`${link.color} p-2 text-lg rounded-full rounded-bl-none hover:bg-gray-900 hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500`}
                        >
                            {link.icon}
                        </Link>
                    ))
                }
                
            </div>

        </header>
    )
}

export default Header