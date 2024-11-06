import React, { useState } from 'react';
import '../assets/css/Banner.css'

const BucketList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Start this website work', completed: true },
    { id: 2, text: 'Complete this website', completed: false },
    { id: 3, text: 'Cooking together', completed: false },
    { id: 4, text: 'Ooty ponum', completed: false },
  ]);
  const [newItem, setNewItem] = useState('');

  // Add a new bucket list item
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: Date.now(), text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  // Toggle the completed state of an item
  const toggleComplete = (id) => {
    setItems(
      items.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    );
  };

  return (
    <div className="bucket-list-section bg-blue-50 py-10 px-4 md:px-16 text-center">
      <h2 className="text-4xl font-serif font-bold text-[#743c1f] mb-8">Our Bucket List</h2>

      {/* Add New Item Input */}
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Add a new goal or activity..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="w-2/3 md:w-1/2 p-2 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addItem}
          className="ml-4 px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>

      {/* Bucket List Items */}
      <ul className="bucket-list-items max-w-xl mx-auto space-y-4">
        {items.map(item => (
          <li key={item.id} className={`p-4 border rounded-lg shadow-md ${item.completed ? 'bg-green-100' : 'bg-white'}`}>
            <div className="flex justify-between items-center">
              <span className={`text-lg ${item.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                {item.text}
              </span>
              <button
                onClick={() => toggleComplete(item.id)}
                className={`text-sm px-4 py-1 rounded-lg ${item.completed ? 'bg-gray-300' : 'bg-green-500 text-white hover:bg-green-600'} transition duration-200`}
              >
                {item.completed ? 'Completed' : 'Mark as Done'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;

