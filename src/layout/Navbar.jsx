
import { Menu ,X } from 'lucide-react'
import { Button } from '../components/Button'
import { useEffect, useState } from 'react'

const navlinks = [
 { href: '#about',label: 'About'},
 { href: '#experience',label: 'Experience'},
 { href: '#testimonials',label: 'Testimonials'},
 { href: '#projects',label: 'Projects'},
]

export const Navbar = () => {
  const [ismobilemenuopen, setIsmobilemenuopen] =  useState(false);
  const [isScrolled, setIsScrolled] =  useState(false);

  useEffect(() => {
    const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => 
      window.removeEventListener('scroll', handleScroll);
    
  }, []);
  

  return <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
    <nav className="container mx-auto flex justify-between px-6">
      <a href="#" className="font-bold text-xl tracking-tight hover:text-primary" >
        Y076 <span>.</span>
      </a>
      {/* //Desktop Navbar// */}
      <div className="hidden md:flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 flex items-center gap-2">
          {navlinks.map((link ,index) =>(
            <a href={link.href} key={index} className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-surface"> {link.label} </a>
          ))}
        </div>
      </div>

      {/* CAT BUTTON */}
      <div className='hidden md:block'>
        <Button size="sm" >Contact Me</Button>
        </div>
          {/* mobile menu button */}
        <button className='md:hidden p-2 text-foreground cursor-pointer' 
         onClick={() => setIsmobilemenuopen((prev)=> !prev ) }
         >
          {ismobilemenuopen ? <X size={24}/> : <Menu size={24}/> }
        </button>
   </nav>

        {/* mobile menu */}
        {ismobilemenuopen && (<div className='md:hidden glass-strong animate-fade-in'>
             <div className='container flex flex-col gap-2 py-6 px-6 mx-auto'>
                {navlinks.map((link ,index) =>(
            <a href={link.href} key={index} className="text-lg text-muted-foreground py-2"> {link.label} </a>
          ))}
        <Button size="sm" >Contact Me</Button>
            </div>
          </div>
        )}
  </header>
}