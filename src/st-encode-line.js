import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = [];
  let ind = 1;
     for (let i=0; i < str.length; i++) {
      if (str[i] === str [i+1]) {
        ind++ ;
              } else {
        ind!==1 ? arr.push([ind,str[i]].join('')) : arr.push([str[i]].join(''));
        ind = 1;
        
   }
      }

         return arr.join('').toString();
}

