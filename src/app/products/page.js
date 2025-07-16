'use client';
import { useState, useEffect } from 'react';
export default function Products(){
  const [products, setProducts] = useState([]);
  const [Title, setTitle] = useState('');
  const [Price, setPrice] = useState('');
  
  // Fetch products from the API
  const fetchProducts = async () => {
    const response = await fetch ('http://localhost:8000/api/products');
    const data = await response.json();
    setProducts(data);
  }
  // Add a new product
  const addProduct = async () => {
    const response = await fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ Title, Price}),
    });
    const data = await response.json();
    setProducts([...products, data]);
    setTitle('');
    setPrice('');
  }
  // Delete a product
  const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:8000/api/products/${id}`, {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'DELETE',
    });
    const data = await response.json();
    // setProducts([...products, data]);
    setProducts(products.filter((product => product.id !== id)));
  };
  useEffect(() => {
    fetchProducts(); 
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Products Page</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
        <input 
          className='border p-2 rounded w-full sm:w-auto' 
          type="text" 
          placeholder="Title" 
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          className='border p-2 rounded w-full sm:w-auto' 
          type="number" 
          placeholder="Price" 
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button 
          className='bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded w-full sm:w-auto' 
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition">
            <span className="font-medium">{product.Title} - ${product.Price}</span>
            <button 
              className='bg-red-500 hover:bg-red-600 transition text-white p-2 rounded' 
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}