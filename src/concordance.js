/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.

*/
function concordance(data) {
    let map = new Map();
    data.forEach((line, index) => {
      let array = line.split(/[\s.,';]/);
      //console.log('array', array);
      array.forEach((word) => {
        //console.log(word);
        if ((word !== '')) {
          let set = new Set();
          if (map.has(word.toLowerCase())) {
            set = map.get(word.toLowerCase());
          }
          set.add(index);
          map.set(word.toLowerCase(), set);
        }
      })
    })
    //console.log('map', map.size);
    
    let object = {};
    map.forEach ((value, key) => {
      object[key] = [...value];
    })
    //console.log('object', object);
    
    return object;
  }
  
  module.exports = concordance;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  