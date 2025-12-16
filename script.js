// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


// Psuedo 
// I need to process student submission data and calculate:

// Each student's weighted average (assignments worth more points count more)
// Individual assignment scores as percentages
// Apply 10% penalty for late submissions
// Skip assignments not yet due
// Handle errors gracefully



// STEP 1: What data do I have?

// CourseInfo: Contains course ID and name
// AssignmentGroup: Contains list of assignments with due dates and points possible
// LearnerSubmissions: Contains student submissions with scores and dates

// STEP 2: Identify what I need to return
// An array of objects, where each object contains:

// Student ID
// Weighted average (total points earned / total points possible)
// Individual assignment percentages (score / points possible)

// STEP 3: Requirements to implement

// Use let and const appropriately
// Use operators for calculations (+, -, *, /, ===, !==, etc.)
// Store strings, numbers, and booleans in variables
// Use at least 2 if/else statements for control flow
// Use try/catch for error handling
// Use 2 different types of loops
// Create and manipulate arrays and objects
// Use functions to handle repeated tasks

//  Find assignment by ID
// Uses: for...of loop 
function findAssignmentById(assignments, assignmentId) {
  for (const assignment of assignments) {
    // IF/ELSE : Check if IDs match
    if (assignment.id === assignmentId) {
      return assignment;
    }
  }
  return null;
}

function isAssignmentDue(dueDate) {
  const currentDate = new Date("2023-03-15"); // STRING converted to date
  const due = new Date(dueDate);
  
  // BOOLEAN value returned
  return due <= currentDate;
}

// Calculate late penalty

function calculateLatePenalty(submittedAt, dueAt, pointsPossible) {
  const submitted = new Date(submittedAt);
  const due = new Date(dueAt);
  
  // Check if submission was late
  if (submitted > due) {
    
    const penalty = pointsPossible * 0.10; // NUMBER literal (0.10)
    return penalty;
  } else {
    return 0;
  }
}
   



// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
