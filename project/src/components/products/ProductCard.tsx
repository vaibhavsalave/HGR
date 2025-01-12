
interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, description, image, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-1">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
      />
      <div className="p-4">
        <span className="text-sm text-green-600 font-medium">{category}</span>
        <h3 className="text-xl font-semibold mt-1">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors duration-300">
          Learn More →
        </button>
      </div>
    </div>
  );
}