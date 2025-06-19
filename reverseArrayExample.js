// Create an array with some items
const fruits = ['apple', 'banana', 'cherry'];

// Print the original array
console.log('Original array:', fruits);

// Use the reverse() method to reverse the order of the items in the array
fruits.reverse();

// Print the reversed array
console.log('Reversed array:', fruits);

// Explanation:
// - The reverse() method changes the order of the items in the array so that the last item becomes the first, and the first becomes the last.
// - It also changes (modifies) the original array.

// Let's say we have an array of comments
const comments = ['Great job!', 'Needs improvement.', 'Well explained!'];

// Print the original comments array
console.log('Original comments:', comments);

// To remove a comment at a specific index, use the splice() method
// For example, to remove the comment at index 1 ('Needs improvement.'):
const indexToRemove = 1; // Index of the comment you want to remove
comments.splice(indexToRemove, 1); // 1 means remove one item at this index

// Print the updated comments array
console.log('Comments after removal:', comments);

// Explanation:
// - splice(index, howMany) removes 'howMany' items starting from 'index'.
// - This changes the original array.
