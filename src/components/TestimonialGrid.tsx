import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import type { Testimonial } from '../types/testimonial';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-swirlazzo-cream/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.name}
            className="relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-swirlazzo-pink/20 text-4xl" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-swirlazzo-teal"
                />
                <div>
                  <h4 className="font-semibold text-swirlazzo-teal">{testimonial.name}</h4>
                  <div className="flex gap-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <a 
                    href={testimonial.href}
                    className="text-sm text-swirlazzo-pink hover:text-swirlazzo-teal transition-colors"
                  >
                    {testimonial.product}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}