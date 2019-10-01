const getPolygon = function (countOfSegments) {
  
   
    if(typeof countOfSegments !== 'number' || typeof countOfSegments === null){
        console.log(`A polygon needs to have at least 3 segments, it will be set to 3`);
        countOfSegments = 3;
    } else {

   

        if(countOfSegments < 3 || countOfSegments === '' || countOfSegments === 'undefined') {
            console.error(`A polygon needs to have at least 3 segments`);
            countOfSegments = 3;
        }
    }
        // Create a Polygon Object
    const result = {
      getSegments() {
        // Return (Number) the current count of segments
        return `The current number of segments is ${countOfSegments}`;
      },
      describe() {
        // log 'The polygon you created is a *** composed by * segments'  
        if(countOfSegments === 3){
            console.log(`The polygon you created is a triangle composed by ${countOfSegments} segments`);  
        } else if(countOfSegments === 4) {
            console.log(`The polygon you created is a quadrilateral composed by ${countOfSegments} segments`); 
        } else if (countOfSegments === 5){
            console.log(`The polygon you created is a pentagon composed by ${countOfSegments} segments`); 
        } else if (countOfSegments === 6){
            console.log(`The polygon you created is a hexagon composed by ${countOfSegments} segments`); 
        } else if (countOfSegments > 6){
            console.log(`The polygon you created is generically called a polygon and it is composed by ${countOfSegments} segments`); 
        } 
         
      },
      increase() {
        // Increase the segments of a created polygon and log the same sentence in describe()
        countOfSegments += 1;    
        return this.describe();
      },
      whatIs() {
        // Open a new window that links to https://en.wikipedia.org/wiki/Polygon
        window.open("https://en.wikipedia.org/wiki/Polygon");
      }
    };
    return result;
};

// const square = getPolygon(4);
// square.describe(); // The polygon you created is a quadrilateral composed by 4 segments
// square.increase() // The polygon you created is a pentagon composed by 5 segments

// const generic = getPolygon(18);
// generic.describe(); // The polygon you created is a generic polygon composed by 18 segments

// generic.whatIs(); // Open a new window that links to https://en.wikipedia.org/wiki/Polygon


// const emptyPolygon = getPolygon(); // Emit a log message: 'A polygon needs to have at least 3 segments, it will be set to 3' and set it to 3

const test = getPolygon(4);
test.getSegments();

 