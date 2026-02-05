 import wineBordeaux from "@/assets/wine-bordeaux.jpg";
 import wineBurgundy from "@/assets/wine-burgundy.jpg";
 import wineBarolo from "@/assets/wine-barolo.jpg";
 import wineNapa from "@/assets/wine-napa.jpg";
 
 const wines = [
   {
     name: "Château Margaux",
     region: "Bordeaux, France",
     note: "Velvet tannins, violet and blackcurrant",
     image: wineBordeaux,
   },
   {
     name: "Domaine de la Romanée",
     region: "Burgundy, France",
     note: "Earth, cherry, silken finish",
     image: wineBurgundy,
   },
   {
     name: "Giacomo Conterno",
     region: "Barolo, Italy",
     note: "Rose, tar, timeless depth",
     image: wineBarolo,
   },
   {
     name: "Opus One",
     region: "Napa Valley, USA",
     note: "Cassis, espresso, new world elegance",
     image: wineNapa,
   },
 ];
 
 const Selection = () => {
   return (
     <section id="selection" className="section-padding bg-charcoal">
       <div className="container mx-auto px-6 lg:px-12">
         {/* Header */}
         <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
           <span className="micro-text">Signature Selection</span>
           <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl">
             Chosen with patience
           </h2>
           <p className="mt-6 text-muted-foreground">
             A curated collection of exceptional vintages from the world's most revered estates.
           </p>
         </div>
 
         {/* Wine Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {wines.map((wine, index) => (
             <article
               key={wine.name}
               className="wine-card group"
               style={{ animationDelay: `${index * 100}ms` }}
             >
               {/* Image */}
               <div className="aspect-[3/4] overflow-hidden bg-background">
                 <img
                   src={wine.image}
                   alt={`${wine.name} from ${wine.region}`}
                   className="wine-card-image w-full h-full object-cover"
                 />
               </div>
 
               {/* Content */}
               <div className="p-6">
                 <h3 className="font-serif text-lg text-foreground">
                   {wine.name}
                 </h3>
                 <p className="mt-1 text-xs uppercase tracking-wider text-primary" style={{ letterSpacing: "0.1em" }}>
                   {wine.region}
                 </p>
                 <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                   {wine.note}
                 </p>
               </div>
             </article>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Selection;