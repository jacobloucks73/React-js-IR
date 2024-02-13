import React, { useState, useEffect } from 'react';

function ListGroup() {
  const input = [
    'Home',
    'About',
    'Contact Me',
    'Portfolio',
    'Work-With_Me'
  ];

  // State to hold the current list of items to display
  const [displayedList, setDisplayedList] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if there are more items to display
      if (displayedList.length < input.length) {
        // Add the next item from 'input' to 'displayedList'
        setDisplayedList(currentList => [...currentList, input[currentList.length]]);
      }
    }, 500); // Update the list every 500 ms

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, [displayedList, input]); // Depend on 'displayedList' and 'input'

  return (
    <ul className="list-group">
      {displayedList.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
