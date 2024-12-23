import { FaStar, FaRocket } from 'react-icons/fa';
import { categories, featuredCategories } from '../data/categories';
import type { Category } from '../types/category';

function CategoryCard({ name, image, icon, featured = false, href }: Category) {
  return (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-lg ${
        featured ? 'shadow-lg hover:shadow-xl' : 'shadow-md hover:shadow-lg'
      } transition-all block`}
    >
      <div className={featured ? 'aspect-w-16 aspect-h-9' : 'aspect-w-4 aspect-h-3'}>
        <div 
          className={`${featured ? 'h-64' : 'h-48'} bg-cover bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all">
        <div className="text-center">
          {icon && (
            <div className="flex items-center justify-center mb-2">
              {typeof icon === 'string' ? (
                featured && (icon === 'FaStar' ? <FaStar className="text-3xl text-yellow-400" /> : <FaRocket className="text-3xl text-swirlazzo-pink" />)
              ) : (
                icon
              )}
            </div>
          )}
          <h3 className={`text-white font-semibold transform group-hover:scale-110 transition-transform ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {name}
          </h3>
        </div>
      </div>
    </a>
  );
}

export function CategoryGrid() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {featuredCategories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto opacity-90">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
}