/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  console.log("@" username + ":"+ "comment", addToStart);
  const combinedComment = "@" username + ": " + comment;
    if (addToStart) {
    comments.unshift(combinedComment);
  }
  else {
    comments.push(combinedComment);
  }
  console.log(comments);
  return comments;

  comments.push(combinedComment);  
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(message) {
  const winnerDisplay = document.getElementById("winnerDisplay");

  winnerDisplay.innerHTML = message; // Set the message content
 
}
/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const winner = comments[randomIndex];

  console.log(winningEntry);
  
}
/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  const emojis = ["😀", "😂", "😍", "😎", "🤔", "🙌", "🎉", "🔥"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];

  const emojiDisplay = document.getElementById("emojiDisplay");
  emojiDisplay.innerHTML = randomEmoji; // Set the emoji content
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder(combinedComment) {
  const comments = [
    "@user1: This is a comment",
    "@user2: Another comment",
    "@user3: Yet another comment"
  ];
  // Reverse the order of the comments array

  console.log("Original comments:", comments);

    comments.reverse();

  console.log("Reversed comments:", comments);
  return comments;
  // Return the reversed comments array
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(combinedComment) {
  // Let's say we have an array of comments
const combinedcomment =  [
    "@user1: This is a comment",
    "@user2: Another comment",
    "@user3: Yet another comment"
  ];
// Print the original comments array
console.log('Original comments:', comments);

// To remove a comment at a specific index, use the splice() method
// For example, to remove the comment at index 1 ('Needs improvement.'):
const indexToRemove = 1; // Index of the comment you want to remove
comment.splice(indexToRemove, 1); // 1 means remove one item at this index

// Print the updated comments array
console.log('Comments after removal:', comments);

// Explanation:
// - splice(index, howMany) removes 'howMany' items starting from 'index'.
// - This changes the original array.
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
