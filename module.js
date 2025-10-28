// module.js

function sum(a, b) {
  return a + b;
}

function div(a, b) {
  return a / b;
}

function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(text.charAt(i))) // This is the bug labels whitespace as a number
      return true;
  }
  return false;
}

// Export all functions for testing
export default { sum, div, containsNumbers };