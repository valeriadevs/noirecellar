 import heroImage from "@/assets/hero-wine-bar.jpg";
 
 const Hero = () => {
   const handleNavClick = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <section className="relative h-screen min-h-[700px] overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="Wine glasses catching candlelight in an intimate cellar setting"
           className="w-full h-full object-cover animate-slow-zoom"
         />
         {/* Gradient Overlay */}
         <div
           className="absolute inset-0"
           style={{
             background:
               "linear-gradient(180deg, hsla(240, 8%, 3%, 0.3) 0%, hsla(240, 8%, 3%, 0.6) 50%, hsla(240, 8%, 3%, 0.95) 100%)",
           }}
         />
       </div>
 
       {/* Content */}
       <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 lg:pb-40">
         <div className="container mx-auto px-6 lg:px-12">
           <div className="max-w-3xl">
             {/* Headline */}
             <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground animate-fade-up">
               An evening,
               <br />
               <span className="italic">properly aged.</span>
             </h1>
 
             {/* Subtext */}
             <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up-delayed">
               Rare vintages. Quiet conversations. Timeless nights.
             </p>
 
             {/* CTAs */}
             <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 animate-fade-up-delayed-2">
               <button
                 onClick={() => handleNavClick("#selection")}
                 className="btn-gold-outline"
               >
                 View Selection
               </button>
               <button
                 onClick={() => handleNavClick("#find-us")}
                 className="link-arrow"
               >
                 Find Us
               </button>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;