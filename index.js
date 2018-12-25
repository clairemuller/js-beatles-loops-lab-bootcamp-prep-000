// add solution here
const theBeatlesPlay = (musician, instrument) => {
  let array = [];
  for (let i = 0; i < musician.length; i++) {
  array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return array;
};


const johnLennonFacts = (facts) => {
  let i = 0;
  let array = [];
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
};

function iLoveTheBeatles(i) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return array;
}




