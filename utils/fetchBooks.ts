"use client";

//to fetch books 

export const fetchBooks = async () =>{
    const response = await fetch('https://openlibrary.org/works/OL45883W.json');
    const data = await response.json();
    return [data];
}