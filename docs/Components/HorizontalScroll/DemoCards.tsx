// DemoCards.js

import React from "react";

const DemoCard = ({ index }) => (
  <img
    key={index}
    src="https://media1.giphy.com/media/lFof5NSRqNn1yNMleM/200.webp?cid=ecf05e47sog650v8879psfmh39rvxyloewktqddquvb0tr9t&ep=v1_stickers_search&rid=200.webp&ct=s"
    alt={`Demo ${index}`}
  />
);

const DemoCards = () => {
  const numCards = 10; // Adjust the number of cards as needed

  const demoCards = Array.from({ length: numCards }, (_, index) => (
    <DemoCard key={index} index={index} />
  ));

  return demoCards;
};

export default DemoCards;
