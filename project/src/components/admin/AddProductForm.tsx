import React, { useState } from 'react';
import { Product } from '../../types/product';

interface AddProductFormProps {
  onSubmit: (product: Product) => void;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    id: '',
    name: '',
    category: undefined,
    subcategory: '',
    description: '',
    shortDescription: '',
    benefits: [],
    ingredients: [],
    packageSizes: [],
    usageSuggestions: [],
    image: '',
  });

  const [currentBenefit, setCurrentBenefit] = useState({ title: '', description: '' });
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [currentPackageSize, setCurrentPackageSize] = useState({ size: '', price: 0, unit: '' });

  const subcategoryOptions = {
    'Milk': ['Pasteurized Cow Milk', 'Gold Milk', 'Standardized Milk', 'Toned Milk', 'Buttermilk'],
    'Milk Beverages': ['Tadka Chhach', 'Masala Tak', 'Dahi', 'Mishti Dahi', 'Lassi', 'Mango Lassi'],
    'Milk Byproducts': ['Fresh Paneer', 'Butter', 'Cow Ghee', 'Buffalo Ghee', 'Amrakhand', 'Shrikhand']
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addBenefit = () => {
    setFormData({
      ...formData,
      benefits: [...(formData.benefits || []), currentBenefit]
    });
    setCurrentBenefit({ title: '', description: '' });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...(formData.ingredients || []), currentIngredient]
    });
    setCurrentIngredient('');
  };

  const addPackageSize = () => {
    setFormData({
      ...formData,
      packageSizes: [...(formData.packageSizes || []), currentPackageSize]
    });
    setCurrentPackageSize({ size: '', price: 0, unit: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData: Product = {
      ...formData as Product,
      id: formData.name?.toLowerCase().replace(/\s+/g, '-') || '',
    };
    onSubmit(productData);
    setFormData({
      id: '',
      name: '',
      category: undefined,
      subcategory: '',
      description: '',
      shortDescription: '',
      benefits: [],
      ingredients: [],
      packageSizes: [],
      usageSuggestions: [],
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select Category</option>
            {Object.keys(subcategoryOptions).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {formData.category && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Subcategory</label>
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="">Select Subcategory</option>
              {subcategoryOptions[formData.category as keyof typeof subcategoryOptions]?.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Descriptions */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Descriptions</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Short Description</label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            rows={4}
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Benefits</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Benefit Title"
            value={currentBenefit.title}
            onChange={(e) => setCurrentBenefit({ ...currentBenefit, title: e.target.value })}
            className="flex-1 rounded-md border-gray-300"
          />
          <input
            type="text"
            placeholder="Description"
            value={currentBenefit.description}
            onChange={(e) => setCurrentBenefit({ ...currentBenefit, description: e.target.value })}
            className="flex-1 rounded-md border-gray-300"
          />
          <button
            type="button"
            onClick={addBenefit}
            className="px-4 py-2 bg-gray-100 rounded-md"
          >
            Add
          </button>
        </div>
        <div className="space-y-2">
          {formData.benefits?.map((benefit, index) => (
            <div key={index} className="flex gap-2 items-center">
              <span className="font-medium">{benefit.title}:</span>
              <span>{benefit.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Package Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Package Sizes</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Size"
            value={currentPackageSize.size}
            onChange={(e) => setCurrentPackageSize({ ...currentPackageSize, size: e.target.value })}
            className="flex-1 rounded-md border-gray-300"
          />
          <input
            type="number"
            placeholder="Price"
            value={currentPackageSize.price}
            onChange={(e) => setCurrentPackageSize({ ...currentPackageSize, price: Number(e.target.value) })}
            className="flex-1 rounded-md border-gray-300"
          />
          <input
            type="text"
            placeholder="Unit"
            value={currentPackageSize.unit}
            onChange={(e) => setCurrentPackageSize({ ...currentPackageSize, unit: e.target.value })}
            className="flex-1 rounded-md border-gray-300"
          />
          <button
            type="button"
            onClick={addPackageSize}
            className="px-4 py-2 bg-gray-100 rounded-md"
          >
            Add
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Product
      </button>
    </form>
  );
}; 