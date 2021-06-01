// Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

// You may assume that the numbers are always integers (i.e. whole numbers).

// function:
// =========
// name: isEqual

// parameter a: number

// parameter b: number

// return: boolean

// pseudo code:
// ============

function isEqual(a,b){
// if a is equal to b
if(a===b){
    // 	return Tru
return 'True'
}
// else
else{
// 	return False
return 'False'
}

}


// test cases:
// ===========
console.log(isEqual(4, 4), "should be True")
// isEqual(0, 0) should be True
console.log(isEqual(0, 0), "should be True")
// isEqual(-4, -4) should be True
console.log(isEqual(-4, -4), "should be True")
// isEqual(4, -4) should be False
console.log(isEqual(4, -4), "should be True")
// isEqual(0, 1) should be False
console.log(isEqual(0, 1), "should be True")
