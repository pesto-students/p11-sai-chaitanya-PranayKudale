function drawTriangle(triangleSize) {
  // Iterate from 1 to triangleSize (inclusive) to build each row of the triangle
  for (let i = 1; i <= triangleSize; i++) {
    let asterisks = "";
    // Add i asterisks to the row
    for (let j = 1; j <= i; j++) {
      asterisks += "*";
    }
    // Output the row to the console
    console.log(asterisks);
  }
}

// Call drawTriangle() to draw a triangle with triangleSize 4
drawTriangle(4);
