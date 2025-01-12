import React from 'react';
import { AddProductForm } from '../../components/admin/AddProductForm';
import { Product } from '../../types/product';

export default function Dashboard() {
  const handleAddProduct = (product: Product) => {
    // Here you would typically make an API call to add the product to your backend
    console.log('New product:', product);
    
    // For now, we'll just show an alert
    alert('Product added successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Admin Dashboard</h1>
        
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
          <AddProductForm onSubmit={handleAddProduct} />
        </div>
      </div>
    </div>
  );
}
