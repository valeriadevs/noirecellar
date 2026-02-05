 import { MapPin, Phone } from "lucide-react";
 
 const FindUs = () => {
   return (
     <section id="find-us" className="section-padding bg-charcoal">
       <div className="container mx-auto px-6 lg:px-12">
         <div className="max-w-3xl mx-auto text-center">
           {/* Header */}
           <span className="micro-text">Visit</span>
           <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl">
             Plan your visit.
           </h2>
 
           {/* Info */}
           <div className="mt-10 md:mt-12 space-y-2 text-muted-foreground">
             <p>127 Merchant Street, Lower Manhattan</p>
             <p>New York, NY 10013</p>
             <div className="pt-4">
               <p>Tuesday – Saturday</p>
               <p>5:00 PM – 1:00 AM</p>
             </div>
           </div>
 
           <div className="divider-gold mx-auto mt-10" />
 
           {/* CTAs */}
           <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
             <a
               href="https://maps.google.com"
               target="_blank"
               rel="noopener noreferrer"
               className="btn-gold-outline inline-flex items-center gap-3"
             >
               <MapPin size={16} />
               Get Directions
             </a>
             <a
               href="tel:+12125551234"
               className="btn-gold-outline inline-flex items-center gap-3"
             >
               <Phone size={16} />
               Call Bar
             </a>
           </div>
 
           {/* Secondary Link */}
           <div className="mt-8">
             <a
               href="https://instagram.com"
               target="_blank"
               rel="noopener noreferrer"
               className="link-arrow"
             >
               Instagram
             </a>
           </div>
 
           {/* Microcopy */}
           <p className="mt-10 micro-text">
             Walk-ins welcome. Evenings are busiest after sunset.
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default FindUs;