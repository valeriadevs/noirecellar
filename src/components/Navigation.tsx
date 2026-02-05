import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navItems = [{
  label: "About",
  href: "#about"
}, {
  label: "Selection",
  href: "#selection"
}, {
  label: "Menu",
  href: "#menu"
}, {
  label: "Atmosphere",
  href: "#atmosphere"
}, {
  label: "Find Us",
  href: "#find-us"
}];
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
  // Keep the nav (logo + close/X button) above the mobile overlay so it stays crisp.
  isMobileMenuOpen ? "z-[70]" : "z-50"} ${isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-background"}`}>
       <div className="border-b border-primary/20">
         <div className="container mx-auto px-6 lg:px-12">
           <div className="flex items-center justify-between h-20">
             {/* Logo */}
             <a href="#" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }} className="font-serif text-xl md:text-2xl tracking-wide text-foreground hover:text-primary transition-colors duration-300">
               Noire Cellar
             </a>
 
             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-10">
               {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href)} className={`text-xs uppercase tracking-widest transition-colors duration-300 ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} style={{
              letterSpacing: "0.15em"
            }}>
                   {item.label}
                 </button>)}
             </div>
 
             {/* Mobile Menu Button */}
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>
         </div>
       </div>
 
       {/* Mobile Menu Overlay */}
       <div
         className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
         aria-hidden={!isMobileMenuOpen}
       >
         {/* Backdrop: blurred + semi-opaque across the whole screen */}
         <button
           type="button"
           aria-label="Close menu"
           onClick={() => setIsMobileMenuOpen(false)}
           className={`absolute inset-0 bg-background/55 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
         />

         {/* Panel: fully opaque, fills viewport under the fixed nav */}
         <div
           className={`absolute left-0 right-0 top-20 bottom-0 border-t border-primary/20 bg-background transition-transform duration-500 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"}`}
         >
           <div className="container mx-auto h-full px-6 py-10">
             <div className="flex h-full flex-col gap-7">
               {navItems.map((item) => (
                 <button
                   key={item.label}
                   onClick={() => handleNavClick(item.href)}
                   className={`text-left text-base uppercase tracking-widest transition-colors duration-300 ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                   style={{ letterSpacing: "0.15em" }}
                 >
                   {item.label}
                 </button>
               ))}

               <div className="mt-auto pt-6">
                 <button onClick={() => setIsMobileMenuOpen(false)} className="link-arrow">
                   Close
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </nav>;
};
export default Navigation;