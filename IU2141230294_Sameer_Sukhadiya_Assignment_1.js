// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

function isAnagram(str1, str2) {
   
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
   
    if (str1.length !== str2.length) {
      return false;
    }
  
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  console.log(isAnagram('listen', 'silent')); 
  console.log(isAnagram('hello', 'world'));   



// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.

  function calculateTotalSpentByCategory(transactions) {
    
    const categoryTotals = {};
  
    
    for (const transaction of transactions) {
      
      const { category, price } = transaction;
  
      
      if (!categoryTotals[category]) {
        categoryTotals[category] = price;
      } else {
        
        categoryTotals[category] += price;
      }
    }
  
    
    const result = [];
    for (const category in categoryTotals) {
      result.push({ category, totalSpent: categoryTotals[category] });
    }
  
    return result;
  }
  
  const transactions = [
    { category: 'Groceries', price: 50 },
    { category: 'Entertainment', price: 100 },
    { category: 'Groceries', price: 75 },
    { category: 'Utilities', price: 200 },
    { category: 'Entertainment', price: 50 },
  ];
  
  console.log(calculateTotalSpentByCategory(transactions));


  
// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.

  function findLargestElement(numbers) {
    
    let largest = -Infinity;

    for (const number of numbers) {
      if (number > largest) {
        largest = number;
      }
    }
  
    
    return largest;
  }
  
  
  const numbers = [3, 5, 7, 80, 2, 8, -1, 50];
  console.log(findLargestElement(numbers)); 

  

// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.

  function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    
    let left = 0;
    let right = cleanedStr.length - 1;
  
   
    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false; 
      }
      left++;
      right--;
    }
  
    return true; 
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal, Panamad")); 
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello")); 

  

// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.

  function calculateTime(n) {
    
    const startTime = performance.now();
  
   
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
 
    const endTime = performance.now();
  
    const timeTaken = (endTime - startTime) / 1000;
  
    return timeTaken;
  }
  
  const n = 1000000;
  console.log(`Time taken to calculate sum from 1 to ${n}: ${calculateTime(n)} seconds`);

  


// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.

  function countVowels(str) {
    
    const vowels = 'aeiouAEIOU';
    
    let count = 0;
  
    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
 
  console.log(countVowels("Sameer Sukhadiya")); 
  console.log(countVowels("Block Chain"));    
  console.log(countVowels("AEIOU"));         

  




// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

  function sumArray(numbers) {
    let sum = 0;
 
    for (const number of numbers) {
      sum += number;
    }
  
    return sum;
  }
  

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumArray(number)); 



  // 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

  function filterEvenNumbers(numb) {
   
    return numb.filter(number => number % 2 === 0);
  }
  
  const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(filterEvenNumbers(numb)); 




// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.

  function findSmallestElement(num) {
    if (num.length === 0) {
      return undefined;
    }

    let smallest = numb[0];
  
    for (const number of num) {
      if (number < smallest) {
        smallest = number;
      }
    }
  
    return smallest;
  }

  const num = [5, 3, 8, 1,0,-1, -10, 2];
  console.log(findSmallestElement(num)); 
  
  


// 10: Create a function `reverseString` that takes a string and returns the string reversed.

  function reverseString(str) {
    const charArray = str.split('');
    
    const reversedArray = charArray.reverse();
    
    const reversedString = reversedArray.join('');
    
    return reversedString;
  }
 
  console.log(reverseString("Sameer")); 
  console.log(reverseString("kirtan")); 

  

// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.

  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let a = 0;
    let b = 1;
  
    for (let i = 2; i <= n; i++) {
      let next = a + b; 
      a = b; 
      b = next; 
    }
  
    return b;
  }
  
  console.log(fibonacci(0)); 
  console.log(fibonacci(1)); 
  console.log(fibonacci(5)); 
  console.log(fibonacci(10)); 

  


// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.

  function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
  }
  const nu = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(nu)); 
  
  const words = ['Pomegranate', 'Raspberries', 'Pomegranate', 'orange', 'Raspberries', 'Watermelon'];
  console.log(removeDuplicates(words)); 
  
  

// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.

  function countOccurrences(str, char) {
    const parts = str.split(char);
    return parts.length - 1;
  }
  console.log(countOccurrences("Sameer Sukhadiya", 's')); 
  console.log(countOccurrences("Watermelon", 'a')); 
  console.log(countOccurrences("Pineapple", 'p')); 

  

// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.

  function findCommonElements(arr1, arr2) {
    const set2 = new Set(arr2);
    const commonElements = arr1.filter(element => set2.has(element));
    return commonElements;
  }
  const array1 = [1, 2, 3, 4, 5, 8];
  const array2 = [4, 5, 6, 7, 8];
  console.log(findCommonElements(array1, array2));
  
  const array3 = ['apple', 'banana', 'cherry'];
  const array4 = ['banana', 'cherry', 'date'];
  console.log(findCommonElements(array3, array4)); 

  


// 15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.

  function sortStrings(arr) {
    return arr.sort();
  }
  
  const fruits = ['Peach', 'Raspberries', 'Atemoya', 'Pineapplev'];
  console.log(sortStrings(fruits)); 
  
  const names = ['Raspberries', 'Alice', 'Strawberries', 'Soursop'];
  console.log(sortStrings(names)); 

  
  