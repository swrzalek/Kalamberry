
export const shuffleArray = (array) => {
    const arrayCopy = [...array];
    const shuffledArray = [];
  
    array.forEach(() => {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      shuffledArray.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1);
    });
  
    return shuffledArray;
  };