import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <div>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </div>
  );
};

const root = document.getElementById("root") || document.createElement("div");
document.body.appendChild(root);

const rootInstance = createRoot(root);

rootInstance.render(<BookList />);
