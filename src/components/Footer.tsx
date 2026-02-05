 const Footer = () => {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="bg-background border-t border-primary/20">
       <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
           {/* Logo & Tagline */}
           <div>
             <span className="font-serif text-xl tracking-wide text-foreground">
               Noire Cellar
             </span>
             <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
               Crafted for those who linger.
             </p>
           </div>
 
           {/* Address */}
           <div className="text-sm text-muted-foreground">
             <p>127 Merchant Street</p>
             <p>Lower Manhattan</p>
             <p>New York, NY 10013</p>
           </div>
 
           {/* Hours */}
           <div className="text-sm text-muted-foreground">
             <p>Tuesday – Saturday</p>
             <p>5:00 PM – 1:00 AM</p>
             <div className="mt-6 flex gap-6">
               <a
                 href="https://instagram.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-primary transition-colors duration-300"
               >
                 Instagram
               </a>
             </div>
           </div>
         </div>
 
         {/* Bottom */}
         <div className="mt-12 pt-8 border-t border-border/30">
           <p className="text-xs text-muted-foreground/60">
             © {currentYear} Noire Cellar. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;