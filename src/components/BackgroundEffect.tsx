export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-swirlazzo-cream to-swirlazzo-coral/10 opacity-50" />
      
      {/* Soft radial overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-swirlazzo-pink/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-swirlazzo-teal/10 to-transparent transform translate-x-1/2" />
    </div>
  );
}