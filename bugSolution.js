function foo(a, b) {
  // Explicitly check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Return 0 if either input is not a number
  }
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}