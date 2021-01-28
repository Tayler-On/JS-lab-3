`use strict`;

// Declare a variable named submissions:

let submissions = [
  {
    name: `Jane`,
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: `Joe`,
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: `Jack`,
    score: 5,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: `Jill`,
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

// addSubmission(submissions, `Tayler`, 70, `Date`);
// console.log(submissions);

// Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

// Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name. Incorporate the findIndex method and the splice method.

const deleteSubmissionsByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (index !== -1) {
    deleteSubmissionByIndex(array, index);
  } else {
    console.log(`No Match...`);
  }
};

// deleteSubmissionsByName(submissions, `Jane`);
// console.log(submissions);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

// editSubmission(submissions, 0, 10);
// console.log(submissions);

// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the find method.

const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};

// console.log(findSubmissionByName(submissions, `Jill`));

//7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((submission) => {
    if (submission.score < lowestScore) {
      lowestScore = submission.score;
    }
  });
  return lowestScore;
};

// console.log(findLowestScore(submissions));

// function findLowestScore(array) {
// 	return array.reduce((accumulator, currentValue) => currentValue.score < accumulator.score ? currentValue : accumulator);
// }

//8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

const findAverageScore = (array) => {
    // pull out scores??? 



        let scoresArray = [];
        for (let score of array){
        let addscore = (scoresArray, array[index].score){
            scoresArray.push(array[index].score);
        } }   
        // use .reduce to find sum of scores 
        let scoreSum = (scoresArray) => {
        return array.reduce((accumulator, currentValue) => {
        return accumulator.score + currentValue.score;
        });
      };
    // then divided by array.length
    /array.length;
    // return average
};

// Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed;
  });
};
// console.log(filterPassing(submissions));

// Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((submission) => {
    return submission.score >= 90;
  });
};

// console.log(filter90AndAbove(submissions))
