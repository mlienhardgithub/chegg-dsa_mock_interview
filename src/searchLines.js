/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
    let map = new Map();
    let word = words.head;
    while (word) {
      let array = concordance[word.value.toLowerCase()];
      if (Array.isArray(array)) {
        map.set(word.value.toLowerCase(), array);
      }
      word = word.next;
    }
    
    let set = new Set();
    map.forEach((value, key) => {
      //console.log('value', value);
      value.reduce((s, e) => s.add(e), set);
    })
    //console.log('set', set);
    const array = Array.from(set);
    //console.log('array', array);
    const returnArray = [];
    array.forEach(line => {
      returnArray.push(data[line]);
    })
    //console.log('returnArray', returnArray);
    return returnArray;
  }
  
  module.exports = searchLines;