# JavaScript Function: Handling Non-Numeric Inputs

This repository demonstrates a common JavaScript error: unexpected runtime errors due to non-numeric inputs in a function. The `bug.js` file contains a function with a potential error, while `bugSolution.js` provides an improved version that handles non-numeric inputs gracefully.

## Problem

The `foo` function in `bug.js` attempts to add two numbers. However, it only explicitly checks for `null` values and does not handle cases where `a` or `b` might be strings, booleans, or other non-numeric types, which will cause an error.

## Solution

The `bugSolution.js` file addresses this issue by performing type checking before the addition operation. If either input is not a number, it returns a default value (0). This prevents runtime errors and improves the code's reliability.

## How to use

1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` files to see the problematic and improved code respectively. 
3. Run the code in your preferred JavaScript environment to compare the results.