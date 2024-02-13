import React, { useState, useEffect } from 'react';

function Message() {
  const input = "Jacob Loucks";
  const nameProgression = getStringProgression(input);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentIndex < nameProgression.length) {
      const timer = setTimeout(() => {
        setDisplayedText(nameProgression[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 500); // Update text every 500 ms

      return () => clearTimeout(timer);
    }
  }, [currentIndex, nameProgression]);

  return <p>{displayedText}</p>;
}

function getStringProgression(inputString: string): string[] {
  let result: string[] = [];
  for (let i = 1; i <= inputString.length; i++) {
    result.push(inputString.substring(0, i));
  }
  return result;
}

export default Message;
