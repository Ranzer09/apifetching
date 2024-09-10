import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setItems(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p className="text-lg text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-white text-3xl font-bold mb-8">Posts</h1>
      <ul className="space-y-8 w-3/4 mx-auto ">
        {items.map(item => (
          <li key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className=" text-xl font-semibold mb-4 lg:mb-2">{item.title}</h2>
            <p className="mt-2">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
