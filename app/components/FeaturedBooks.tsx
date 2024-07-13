"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      extraLarge?: string;
      large?: string;
      medium?: string;
      small?: string;
      thumbnail?: string;
      smallThumbnail?: string;
    };
    authors?: string[];
  };
}

const categories = [
  'All',
  'Business',
  'Technology',
  'Adventure',
  'Romantic',
  'Fictional'
];

const FeaturedBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    getBooks();
  }, [selectedCategory]);

  const getBooks = async () => {
    let query = 'random';
    if (selectedCategory !== 'All') {
      query = selectedCategory;
    }
    try {
      const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`);
      if (!api.ok) {
        throw new Error('Network response not ok');
      }
      const data = await api.json();
      console.log("Fetched data from API:", data);
      setBooks(data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-gray-600 tracking-wide">Some Quality Items</p>
        <h2 className="text-4xl font-bold text-[#4338CA] mb-4">{selectedCategory !== 'All' ? `${selectedCategory} Books` : 'Popular Books'}</h2>
        <div className="flex justify-center mt-4">
          <div className="border-t-2 border-gray-300 w-12"></div>
        </div>
      </div>

      <div className="flex justify-center mb-8 space-x-4 sm:text-sm flex-wrap px-6 tracking-['1.5px']">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-gray-600 text-sm md:text-lg hover:text-gray-800 ${selectedCategory === category ? 'font-bold border-b-2 border-[#4338CA] text-[#4338CA]' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:px-8 max-w-[90%] mx-auto">
        {books.map((book) => (
          <div key={book.id} className="shadow-md rounded-lg overflow-hidden text-center p-5">
            <img
              src={
                book.volumeInfo.imageLinks?.extraLarge ||
                book.volumeInfo.imageLinks?.large ||
                book.volumeInfo.imageLinks?.medium ||
                book.volumeInfo.imageLinks?.small ||
                book.volumeInfo.imageLinks?.thumbnail ||
                book.volumeInfo.imageLinks?.smallThumbnail
              }
              alt={book.volumeInfo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm md:text-md font-semibold mb-2">{book.volumeInfo.title}</h3>
              <p className="text-gray-600">{book.volumeInfo.authors?.join(', ')}</p>
              <Button className="border-slate-100 mt-4 bg-transparent border text-[#4338CA] hover:bg-[#4338CA] hover:text-white" aria-label="Learn More">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
