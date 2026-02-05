 const About = () => {
   return (
     <section id="about" className="section-padding bg-background">
       <div className="container mx-auto px-6 lg:px-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           {/* Left Column - Content */}
           <div className="max-w-lg">
             <span className="micro-text">About</span>
             
             <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
               A space designed
               <br />
               for pause.
             </h2>
             
             <div className="divider-gold mt-8" />
             
             <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
               <p>
                 Every bottle is chosen with patience.
                 <br />
                 Every pour is intentional.
               </p>
               <p className="font-serif italic text-foreground text-lg">
                 Nothing here is rushed.
               </p>
               <p>
                 This is where evenings unfold.
               </p>
             </div>
           </div>
 
           {/* Right Column - Visual Element */}
           <div className="relative">
             <div className="aspect-[4/5] bg-card rounded-sm overflow-hidden">
               <div
                 className="absolute inset-0 opacity-30"
                 style={{
                   background:
                     "radial-gradient(ellipse at 30% 30%, hsl(43 45% 58% / 0.2) 0%, transparent 60%)",
                 }}
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center px-8">
                   <div className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary/20">
                     NC
                   </div>
                   <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground" style={{ letterSpacing: "0.3em" }}>
                     Est. MMXIX
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;