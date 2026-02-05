 import { useEffect, useRef, useState } from "react";
 import atmosphereSeating from "@/assets/atmosphere-seating.jpg";
 import atmosphereCandles from "@/assets/atmosphere-candles.jpg";
 import atmosphereCellar from "@/assets/atmosphere-cellar.jpg";
 
 const images = [
   { src: atmosphereSeating, alt: "Intimate leather seating with candlelit tables" },
   { src: atmosphereCandles, alt: "Wine glasses catching warm candlelight" },
   { src: atmosphereCellar, alt: "Floor to ceiling wine cellar storage" },
 ];
 
 const Atmosphere = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false]);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         if (entries[0].isIntersecting) {
           images.forEach((_, index) => {
             setTimeout(() => {
               setVisibleImages((prev) => {
                 const newState = [...prev];
                 newState[index] = true;
                 return newState;
               });
             }, index * 200);
           });
         }
       },
       { threshold: 0.2 }
     );
 
     if (sectionRef.current) {
       observer.observe(sectionRef.current);
     }
 
     return () => observer.disconnect();
   }, []);
 
   return (
     <section id="atmosphere" className="section-padding bg-charcoal" ref={sectionRef}>
       <div className="container mx-auto px-6 lg:px-12">
         {/* Header */}
         <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
           <span className="micro-text">The Atmosphere</span>
           <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl italic">
             Quiet nights deserve great wine.
           </h2>
         </div>
 
         {/* Image Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
           {images.map((image, index) => (
             <div
               key={index}
               className={`aspect-[4/3] overflow-hidden rounded-sm transition-all duration-700 ${
                 visibleImages[index]
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-8"
               }`}
             >
               <img
                 src={image.src}
                 alt={image.alt}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Atmosphere;