export function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-4 relative">
        {/* Swirl background */}
        <div 
          className="absolute -left-24 top-1/2 -translate-y-1/2 w-48 h-48 opacity-50"
          style={{
            backgroundImage: 'url(/swirl-preheader.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-y',
            transform: 'scaleX(-1) translateY(-50%)',
          }}
        />
        
        <div className="aspect-square rounded-full overflow-hidden border-4 border-swirlazzo-teal relative z-10">
          <img src="/img/artist/kh.jpg" alt="Katrien" className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="md:col-span-8 prose prose-lg">
        <h2 className="text-3xl font-bold text-swirlazzo-teal mb-8">Over mij</h2>
        <p className="mb-6 text-gray-700">
        Hallo! Ik ben de creatieveling achter Swirlazzo, waar elk stuk zorgvuldig met de hand wordt gemaakt met liefde en aandacht voor detail. Mijn passie voor het creëren van unieke gipsen decoratieve objecten begon toen ik de prachtige mogelijkheden ontdekte van het combineren van traditioneel vakmanschap met modern design.        </p>
        <p className="text-gray-700">
        Elk Swirlazzo-object is geïnspireerd op de elegante wervelingen van terrazzopatronen en gemaakt om een vleugje ambachtelijke schoonheid in je interieur te brengen. Elk item is uniek, net als de huizen die ze zullen verfraaien.        </p>
      </div>
    </div>
  );
}