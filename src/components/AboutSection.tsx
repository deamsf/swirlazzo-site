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
        <h2 className="text-3xl font-bold text-swirlazzo-teal mb-8">About the Artist</h2>
        <p className="mb-6 text-gray-700">
          Hello! I'm the creative soul behind Swirlazzo, where each piece is carefully
          handcrafted with love and attention to detail. My passion for creating unique
          gypsum decorative objects started when I discovered the beautiful possibilities
          of combining traditional craftsmanship with modern design.
        </p>
        <p className="text-gray-700">
          Every Swirlazzo piece is inspired by the elegant swirls of terrazzo patterns
          and created to bring a touch of artisanal beauty to your space. Each item is
          unique, just like the homes they're destined to enhance.
        </p>
      </div>
    </div>
  );
}