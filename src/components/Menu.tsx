 import { useState } from "react";
 
 const menuData = {
   glass: [
     { name: "Sancerre, Loire Valley", price: "18", note: "Crisp minerality, citrus" },
     { name: "Barolo, Piedmont", price: "32", note: "Rose petals, structured" },
     { name: "Châteauneuf-du-Pape", price: "24", note: "Spice, dark fruit" },
     { name: "Puligny-Montrachet", price: "38", note: "Buttery, elegant" },
     { name: "Amarone della Valpolicella", price: "28", note: "Dried cherry, chocolate" },
   ],
   cellar: [
     { name: "Château Lafite Rothschild 2010", price: "890", note: "Legendary Pauillac" },
     { name: "Domaine Leroy Musigny 2015", price: "2,400", note: "Grand Cru excellence" },
     { name: "Screaming Eagle 2018", price: "3,200", note: "California icon" },
     { name: "Penfolds Grange 2016", price: "650", note: "Australian masterpiece" },
     { name: "Sassicaia 2017", price: "420", note: "Super Tuscan heritage" },
   ],
   pairings: [
     { name: "Oyster Flight", price: "45", note: "With Champagne selection" },
     { name: "Aged Cheese Board", price: "38", note: "Paired with three wines" },
     { name: "Wagyu Tartare", price: "52", note: "With bold red selection" },
     { name: "Dark Chocolate Truffles", price: "28", note: "Port & dessert wines" },
   ],
   cocktails: [
     { name: "Noire Negroni", price: "22", note: "Aged gin, Carpano, bitters" },
     { name: "Velvet Manhattan", price: "24", note: "Rye, sweet vermouth, Luxardo" },
     { name: "Champagne Cocktail", price: "26", note: "Cognac, bitters, sugar" },
     { name: "Old Fashioned", price: "20", note: "Bourbon, Demerara, orange" },
   ],
 };
 
 const tabs = [
   { key: "glass", label: "By the Glass" },
   { key: "cellar", label: "Cellar Selection" },
   { key: "pairings", label: "Pairings" },
   { key: "cocktails", label: "Cocktails" },
 ] as const;
 
 type TabKey = typeof tabs[number]["key"];
 
 const Menu = () => {
   const [activeTab, setActiveTab] = useState<TabKey>("glass");
   const [isAnimating, setIsAnimating] = useState(false);
 
   const handleTabChange = (key: TabKey) => {
     if (key === activeTab) return;
     setIsAnimating(true);
     setTimeout(() => {
       setActiveTab(key);
       setIsAnimating(false);
     }, 200);
   };
 
   const currentItems = menuData[activeTab];
 
   return (
     <section id="menu" className="section-padding bg-background">
       <div className="container mx-auto px-6 lg:px-12">
         {/* Header */}
         <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
           <span className="micro-text">The Menu</span>
           <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl">
             Thoughtfully curated
           </h2>
         </div>
 
         {/* Tabs */}
         <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 md:mb-16">
           {tabs.map((tab) => (
             <button
               key={tab.key}
               onClick={() => handleTabChange(tab.key)}
               className={`tab-underline ${activeTab === tab.key ? "active" : ""}`}
             >
               {tab.label}
             </button>
           ))}
         </div>
 
         {/* Menu Items */}
         <div className="max-w-3xl mx-auto">
           <div
             className={`space-y-0 ${
               isAnimating ? "tab-content-exit" : "tab-content-enter"
             }`}
           >
             {currentItems.map((item, index) => (
               <article
                 key={item.name}
                 className="group py-6 border-b border-border/50 last:border-0"
                 style={{ animationDelay: `${index * 50}ms` }}
               >
                 <div className="flex justify-between items-start gap-4">
                   <div className="flex-1">
                     <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                       {item.name}
                     </h3>
                     <p className="mt-1 text-sm text-muted-foreground">
                       {item.note}
                     </p>
                   </div>
                   <span className="text-primary font-light">${item.price}</span>
                 </div>
               </article>
             ))}
           </div>
         </div>
 
         {/* CTA */}
         <div className="mt-12 md:mt-16 text-center">
           <button className="link-arrow text-muted-foreground hover:text-primary">
             Explore the full list
           </button>
           <p className="mt-6 micro-text">
             Selection evolves with availability.
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default Menu;