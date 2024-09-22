// src/ItemList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  // Local state to hold fetched items
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the search term from Redux store
  const searchTerm = useSelector((state) => state.items.searchTerm);

  // Fetch items from the Dummy JSON API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const products = response.data.products.map((product) => ({
          title: product.title,
          image: product.thumbnail,
          price: product.price
        }));
        setItems(products); // Set the products (with title and image) in local state
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch items');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Filter items based on the search term from Redux
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render a loading message, error message, or the filtered items
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="item-list">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default ItemList;