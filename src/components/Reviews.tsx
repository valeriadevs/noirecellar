 const quotes = [
   {
     text: "A masterclass in restraint.",
     attribution: null,
   },
   {
     text: "Luxury without excess.",
     attribution: null,
   },
   {
     text: "Where time moves differently.",
     attribution: null,
   },
 ];
 
 const Reviews = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container mx-auto px-6 lg:px-12">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
           {quotes.map((quote, index) => (
             <article
               key={index}
               className="text-center"
             >
               <blockquote className="quote-serif text-foreground">
                 "{quote.text}"
               </blockquote>
               <div className="mt-6 divider-gold mx-auto" />
             </article>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Reviews;