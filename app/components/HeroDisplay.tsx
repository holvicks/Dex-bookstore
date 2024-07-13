"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    description: string;
  };
}

const HeroDisplay: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const topics = ['health', 'lifestyle', 'fashion', 'stories']; // Topics you want to fetch books for
  const randomTopic = topics[Math.floor(Math.random() * topics.length)]; // Randomly select a topic

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${randomTopic}&maxResults=1`);
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
    <div className="flex items-center justify-center min-h-screen">
      {books.map((book) => (
        <div key={book.id} className="flex flex-col md:flex-row items-center p-6 md:p-20  rounded-lg max-w-[90%] w-full">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{book.volumeInfo.title}</h1>
            <p className="text-sm md:text-lg mb-6 line-clamp-6">{book.volumeInfo.description}</p>
          
            <Button className='bg-[#4338CA] hover:bg-[#3b31ad]' aria-label="Learn More">
           Learn More
        </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {book.volumeInfo.imageLinks && (
              <img
                src={
                  book.volumeInfo.imageLinks.extraLarge ||
                  book.volumeInfo.imageLinks.large ||
                  book.volumeInfo.imageLinks.medium ||
                  book.volumeInfo.imageLinks.small ||
                  book.volumeInfo.imageLinks.thumbnail ||
                  book.volumeInfo.imageLinks.smallThumbnail
                }
                alt={book.volumeInfo.title}
                className="rounded-lg w-[80%] md:w-[40%]"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroDisplay;
