/// KATA #102 ///

/* Description:
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/function getSize(width, height, depth) {
    let area = 2 * (width * depth) + 2 * (width * height) + 2 * (depth * height);
    let volume = width * height * depth;
    return [area, volume];
} 
