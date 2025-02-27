export interface Problem {
  id: string;
  topic: string;
  question: string;
  answer: string;
  solution: string[];
}

export interface Topic {
  id: string;
  title: string;
  subtopics: Topic[];
  problems: Problem[];
}

// Pre-Algebra: Expressions & Variables
const expressionsVariables: Topic = {
  id: 'expressions-variables',
  title: 'Expressions & Variables',
  subtopics: [],
  problems: [
    {
      id: 'ev1',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for x = 7\nx + 3 =',
      answer: '10',
      solution: [
        'x + 3 (Plug in x = 7)',
        '7 + 3 (Add)',
        '10'
      ]
    },
    {
      id: 'ev2',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for y = 4\n2y - 1 =',
      answer: '7',
      solution: [
        '2y - 1 (Plug in y = 4)',
        '2(4) - 1 (Multiply)',
        '8 - 1 (Subtract)',
        '7'
      ]
    },
    {
      id: 'ev3',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for z = 6\nz / 2 + 5 =',
      answer: '8',
      solution: [
        'z / 2 + 5 (Plug in z = 6)',
        '6 / 2 + 5 (Divide)',
        '3 + 5 (Add)',
        '8'
      ]
    },
    {
      id: 'ev4',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for a = 3\n2a + 6 =',
      answer: '12',
      solution: [
        '2a + 6 (Plug in a = 3)',
        '2(3) + 6 (Multiply)',
        '6 + 6 (Add)',
        '12'
      ]
    },
    {
      id: 'ev5',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for b = 10\nb - 4 * 2 =',
      answer: '2',
      solution: [
        'b - 4 * 2 (Plug in b = 10)',
        '10 - 4 * 2 (Multiply)',
        '10 - 8 (Subtract)',
        '2'
      ]
    },
    {
      id: 'ev6',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for c = 8\nc + 6 / 2 =',
      answer: '11',
      solution: [
        'c + 6 / 2 (Plug in c = 8)',
        '8 + 6 / 2 (Divide)',
        '8 + 3 (Add)',
        '11'
      ]
    },
    {
      id: 'ev7',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for d = 5\n3d - 4 =',
      answer: '11',
      solution: [
        '3d - 4 (Plug in d = 5)',
        '3(5) - 4 (Multiply)',
        '15 - 4 (Subtract)',
        '11'
      ]
    },
    {
      id: 'ev8',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for e = 2\n4e + 1 =',
      answer: '9',
      solution: [
        '4e + 1 (Plug in e = 2)',
        '4(2) + 1 (Multiply)',
        '8 + 1 (Add)',
        '9'
      ]
    },
    {
      id: 'ev9',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for f = 4\n10 - f * 2 =',
      answer: '2',
      solution: [
        '10 - f * 2 (Plug in f = 4)',
        '10 - 4 * 2 (Multiply)',
        '10 - 8 (Subtract)',
        '2'
      ]
    },
    {
      id: 'ev10',
      topic: 'Expressions & Variables',
      question: 'Evaluate the expression for g = 9\ng / 3 * 2 =',
      answer: '6',
      solution: [
        'g / 3 * 2 (Plug in g = 9)',
        '9 / 3 * 2 (Divide)',
        '3 * 2 (Multiply)',
        '6'
      ]
    }
  ]
};

// Pre-Algebra: Powers & Exponents
const powersExponents: Topic = {
  id: 'powers-exponents',
  title: 'Powers & Exponents',
  subtopics: [],
  problems: [
    {
      id: 'pe1',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for x = 2\nx^3 =',
      answer: '8',
      solution: [
        'x^3 (Plug in x = 2)',
        '2^3 (Cube)',
        '8'
      ]
    },
    {
      id: 'pe2',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for y = 5\ny^2 + 4 =',
      answer: '29',
      solution: [
        'y^2 + 4 (Plug in y = 5)',
        '5^2 + 4 (Square)',
        '25 + 4 (Add)',
        '29'
      ]
    },
    {
      id: 'pe3',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for z = 3\n2z^2 - 1 =',
      answer: '17',
      solution: [
        '2z^2 - 1 (Plug in z = 3)',
        '2(3^2) - 1 (Square)',
        '2(9) - 1 (Multiply)',
        '18 - 1 (Subtract)',
        '17'
      ]
    },
    {
      id: 'pe4',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for a = 4\na^2 / 2 =',
      answer: '8',
      solution: [
        'a^2 / 2 (Plug in a = 4)',
        '4^2 / 2 (Square)',
        '16 / 2 (Divide)',
        '8'
      ]
    },
    {
      id: 'pe5',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for b = 6\nb^3 - b =',
      answer: '210',
      solution: [
        'b^3 - b (Plug in b = 6)',
        '6^3 - 6 (Cube)',
        '216 - 6 (Subtract)',
        '210'
      ]
    },
    {
      id: 'pe6',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for c = 7\n2^c + 3 =',
      answer: '131',
      solution: [
        '2^c + 3 (Plug in c = 7)',
        '2^7 + 3 (Exponentiation)',
        '128 + 3 (Add)',
        '131'
      ]
    },
    {
      id: 'pe7',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for d = 3\n5 * d^2 =',
      answer: '45',
      solution: [
        '5 * d^2 (Plug in d = 3)',
        '5 * 3^2 (Square)',
        '5 * 9 (Multiply)',
        '45'
      ]
    },
    {
      id: 'pe8',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for e = 2\ne^4 - 1 =',
      answer: '15',
      solution: [
        'e^4 - 1 (Plug in e = 2)',
        '2^4 - 1 (Exponentiation)',
        '16 - 1 (Subtract)',
        '15'
      ]
    },
    {
      id: 'pe9',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for f = 1\nf^5 + f =',
      answer: '2',
      solution: [
        'f^5 + f (Plug in f = 1)',
        '1^5 + 1 (Exponentiation)',
        '1 + 1 (Add)',
        '2'
      ]
    },
    {
      id: 'pe10',
      topic: 'Powers & Exponents',
      question: 'Evaluate the expression for g = 2\ng^3 * 2 =',
      answer: '16',
      solution: [
        'g^3 * 2 (Plug in g = 2)',
        '2^3 * 2 (Cube)',
        '8 * 2 (Multiply)',
        '16'
      ]
    }
  ]
};

// Pre-Algebra: Order of Operations
const orderOperations: Topic = {
  id: 'order-operations',
  title: 'Order of Operations',
  subtopics: [],
  problems: [
    {
      id: 'oo1',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n3 + 6 * (5 + 4) / 3 - 7 =',
      answer: '14',
      solution: [
        'Step 1: 3 + 6 * (5 + 4) / 3 - 7',
        'Step 2: 3 + 6 * 9 / 3 - 7  (Parentheses)',
        'Step 3: 3 + 54 / 3 - 7     (Multiply)',
        'Step 4: 3 + 18 - 7         (Divide)',
        'Step 5: 21 - 7             (Add)',
        'Step 6: 14                 (Subtract)'
      ]
    },
    {
      id: 'oo2',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n8 + (3 * 2)² - 5 =',
      answer: '39',
      solution: [
        'Step 1: 8 + (3 * 2)² - 5',
        'Step 2: 8 + (6)² - 5        (Multiply)',
        'Step 3: 8 + 36 - 5          (Exponentiation)',
        'Step 4: 44 - 5              (Add)',
        'Step 5: 39                  (Subtract)'
      ]
    },
    {
      id: 'oo3',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n(4 + 6) * 2 - 3 =',
      answer: '17',
      solution: [
        'Step 1: (4 + 6) * 2 - 3',
        'Step 2: 10 * 2 - 3          (Parentheses)',
        'Step 3: 20 - 3              (Multiply)',
        'Step 4: 17                  (Subtract)'
      ]
    },
    {
      id: 'oo4',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n5 * (2 + 3) - 4 / 2 =',
      answer: '23',
      solution: [
        'Step 1: 5 * (2 + 3) - 4 / 2',
        'Step 2: 5 * 5 - 4 / 2       (Parentheses)',
        'Step 3: 25 - 4 / 2          (Multiply)',
        'Step 4: 25 - 2              (Divide)',
        'Step 5: 23                  (Subtract)'
      ]
    },
    {
      id: 'oo5',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n12 / (2 + 4) * 3 =',
      answer: '6',
      solution: [
        'Step 1: 12 / (2 + 4) * 3',
        'Step 2: 12 / 6 * 3          (Parentheses)',
        'Step 3: 2 * 3               (Divide)',
        'Step 4: 6                   (Multiply)'
      ]
    },
    {
      id: 'oo6',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n(8 + 2) * (6 - 4) =',
      answer: '20',
      solution: [
        'Step 1: (8 + 2) * (6 - 4)',
        'Step 2: 10 * 2               (Parentheses)',
        'Step 3: 20                   (Multiply)'
      ]
    },
    {
      id: 'oo7',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n4 + (6 * 3) / 2 =',
      answer: '13',
      solution: [
        'Step 1: 4 + (6 * 3) / 2',
        'Step 2: 4 + 18 / 2           (Multiply)',
        'Step 3: 4 + 9                (Divide)',
        'Step 4: 13                   (Add)'
      ]
    },
    {
      id: 'oo8',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n15 - 3 * (2 + 1) =',
      answer: '6',
      solution: [
        'Step 1: 15 - 3 * (2 + 1)',
        'Step 2: 15 - 3 * 3           (Parentheses)',
        'Step 3: 15 - 9               (Multiply)',
        'Step 4: 6                    (Subtract)'
      ]
    },
    {
      id: 'oo9',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n(10 - 2) + (4 * 3) =',
      answer: '20',
      solution: [
        'Step 1: (10 - 2) + (4 * 3)',
        'Step 2: 8 + 12               (Parentheses)',
        'Step 3: 20                   (Add)'
      ]
    },
    {
      id: 'oo10',
      topic: 'Order of Operations',
      question: 'Evaluate the expression\n3 * (2 + 5) - 4 =',
      answer: '17',
      solution: [
        'Step 1: 3 * (2 + 5) - 4',
        'Step 2: 3 * 7 - 4            (Parentheses)',
        'Step 3: 21 - 4               (Multiply)',
        'Step 4: 17                   (Subtract)'
      ]
    }
  ]
};

// Algebra 1: Solving Simple Equations
const simpleEquations: Topic = {
  id: 'simple-equations',
  title: 'Solving Simple Equations',
  subtopics: [],
  problems: [
    {
      id: 'se1',
      topic: 'Solving Simple Equations',
      question: 'Solve for x\nx + 5 = 12',
      answer: '7',
      solution: [
        'Step 1: x + 5 = 12',
        'Step 2: x = 12 - 5          (Subtract 5 from both sides)',
        'Step 3: x = 7'
      ]
    },
    {
      id: 'se2',
      topic: 'Solving Simple Equations',
      question: 'Solve for y\n3y = 15',
      answer: '5',
      solution: [
        'Step 1: 3y = 15',
        'Step 2: y = 15 / 3          (Divide both sides by 3)',
        'Step 3: y = 5'
      ]
    },
    {
      id: 'se3',
      topic: 'Solving Simple Equations',
      question: 'Solve for z\nz - 4 = 10',
      answer: '14',
      solution: [
        'Step 1: z - 4 = 10',
        'Step 2: z = 10 + 4          (Add 4 to both sides)',
        'Step 3: z = 14'
      ]
    },
    {
      id: 'se4',
      topic: 'Solving Simple Equations',
      question: 'Solve for a\n2a + 3 = 11',
      answer: '4',
      solution: [
        'Step 1: 2a + 3 = 11',
        'Step 2: 2a = 11 - 3         (Subtract 3 from both sides)',
        'Step 3: 2a = 8',
        'Step 4: a = 8 / 2           (Divide by 2)',
        'Step 5: a = 4'
      ]
    },
    {
      id: 'se5',
      topic: 'Solving Simple Equations',
      question: 'Solve for b\nb / 4 = 6',
      answer: '24',
      solution: [
        'Step 1: b / 4 = 6',
        'Step 2: b = 6 * 4           (Multiply both sides by 4)',
        'Step 3: b = 24'
      ]
    },
    {
      id: 'se6',
      topic: 'Solving Simple Equations',
      question: 'Solve for c\n5c - 2 = 13',
      answer: '3',
      solution: [
        'Step 1: 5c - 2 = 13',
        'Step 2: 5c = 13 + 2         (Add 2 to both sides)',
        'Step 3: 5c = 15',
        'Step 4: c = 15 / 5          (Divide by 5)',
        'Step 5: c = 3'
      ]
    },
    {
      id: 'se7',
      topic: 'Solving Simple Equations',
      question: 'Solve for d\nd / 2 + 4 = 10',
      answer: '12',
      solution: [
        'Step 1: d / 2 + 4 = 10',
        'Step 2: d / 2 = 10 - 4      (Subtract 4 from both sides)',
        'Step 3: d / 2 = 6',
        'Step 4: d = 6 * 2           (Multiply by 2)',
        'Step 5: d = 12'
      ]
    },
    {
      id: 'se8',
      topic: 'Solving Simple Equations',
      question: 'Solve for e\n7e = 21',
      answer: '3',
      solution: [
        'Step 1: 7e = 21',
        'Step 2: e = 21 / 7          (Divide both sides by 7)',
        'Step 3: e = 3'
      ]
    },
    {
      id: 'se9',
      topic: 'Solving Simple Equations',
      question: 'Solve for f\nf - 8 = 4',
      answer: '12',
      solution: [
        'Step 1: f - 8 = 4',
        'Step 2: f = 4 + 8           (Add 8 to both sides)',
        'Step 3: f = 12'
      ]
    },
    {
      id: 'se10',
      topic: 'Solving Simple Equations',
      question: 'Solve for g\n4g + 2 = 18',
      answer: '4',
      solution: [
        'Step 1: 4g + 2 = 18',
        'Step 2: 4g = 18 - 2        (Subtract 2 from both sides)',
        'Step 3: 4g = 16',
        'Step 4: g = 16 / 4         (Divide by 4)',
        'Step 5: g = 4'
      ]
    }
  ]
};

// Algebra 1: Solving Multi-Step Equations
const multiStepEquations: Topic = {
  id: 'multi-step-equations',
  title: 'Solving Multi-Step Equations',
  subtopics: [],
  problems: [
    {
      id: 'me1',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for x\n2x + 3 = 15',
      answer: '6',
      solution: [
        'Step 1: 2x + 3 = 15',
        'Step 2: 2x = 15 - 3          (Subtract 3 from both sides)',
        'Step 3: 2x = 12',
        'Step 4: x = 12 / 2           (Divide by 2)',
        'Step 5: x = 6'
      ]
    },
    {
      id: 'me2',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for y\n3y - 4 = 2y + 5',
      answer: '9',
      solution: [
        'Step 1: 3y - 4 = 2y + 5',
        'Step 2: 3y - 2y = 5 + 4      (Move terms with y to one side)',
        'Step 3: y = 9'
      ]
    },
    {
      id: 'me3',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for z\n4z + 6 = 2z + 14',
      answer: '4',
      solution: [
        'Step 1: 4z + 6 = 2z + 14',
        'Step 2: 4z - 2z = 14 - 6     (Move terms with z to one side)',
        'Step 3: 2z = 8',
        'Step 4: z = 8 / 2             (Divide by 2)',
        'Step 5: z = 4'
      ]
    },
    {
      id: 'me4',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for a\n2(a - 3) = 8',
      answer: '7',
      solution: [
        'Step 1: 2(a - 3) = 8',
        'Step 2: a - 3 = 8 / 2        (Divide both sides by 2)',
        'Step 3: a - 3 = 4',
        'Step 4: a = 4 + 3            (Add 3 to both sides)',
        'Step 5: a = 7'
      ]
    },
    {
      id: 'me5',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for b\n5(b + 2) = 25',
      answer: '3',
      solution: [
        'Step 1: 5(b + 2) = 25',
        'Step 2: b + 2 = 25 / 5       (Divide by 5)',
        'Step 3: b + 2 = 5',
        'Step 4: b = 5 - 2            (Subtract 2 from both sides)',
        'Step 5: b = 3'
      ]
    },
    {
      id: 'me6',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for c\n2c - 4 = c + 5',
      answer: '9',
      solution: [
        'Step 1: 2c - 4 = c + 5',
        'Step 2: 2c - c = 5 + 4       (Combine like terms)',
        'Step 3: c = 9'
      ]
    },
    {
      id: 'me7',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for d\nd / 3 + 2 = 5',
      answer: '9',
      solution: [
        'Step 1: d / 3 + 2 = 5',
        'Step 2: d / 3 = 5 - 2        (Subtract 2 from both sides)',
        'Step 3: d / 3 = 3',
        'Step 4: d = 3 * 3            (Multiply by 3)',
        'Step 5: d = 9'
      ]
    },
    {
      id: 'me8',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for e\n4e + 3 = 2e + 9',
      answer: '3',
      solution: [
        'Step 1: 4e + 3 = 2e + 9',
        'Step 2: 4e - 2e = 9 - 3      (Move terms with e to one side)',
        'Step 3: 2e = 6',
        'Step 4: e = 6 / 2            (Divide by 2)',
        'Step 5: e = 3'
      ]
    },
    {
      id: 'me9',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for f\n6f - 2 = 4f + 8',
      answer: '5',
      solution: [
        'Step 1: 6f - 2 = 4f + 8',
        'Step 2: 6f - 4f = 8 + 2      (Combine like terms)',
        'Step 3: 2f = 10',
        'Step 4: f = 10 / 2           (Divide by 2)',
        'Step 5: f = 5'
      ]
    },
    {
      id: 'me10',
      topic: 'Solving Multi-Step Equations',
      question: 'Solve for g\n3(g - 2) = 2g + 6',
      answer: '12',
      solution: [
        'Step 1: 3(g - 2) = 2g + 6',
        'Step 2: 3g - 6 = 2g + 6     (Distribute 3)',
        'Step 3: 3g - 2g = 6 + 6     (Combine like terms)',
        'Step 4: g = 12'
      ]
    }
  ]
};

// Algebra 1: Solving Equations with Variables on Both Sides
const variablesBothSides: Topic = {
  id: 'variables-both-sides',
  title: 'Variables on Both Sides',
  subtopics: [],
  problems: [
    {
      id: 'vb1',
      topic: 'Variables on Both Sides',
      question: 'Solve for x\n2x + 3 = x + 8',
      answer: '5',
      solution: [
        'Step 1: 2x + 3 = x + 8',
        'Step 2: 2x - x = 8 - 3      (Move variables to one side and constants to the other)',
        'Step 3: x = 5'
      ]
    },
    {
      id: 'vb2',
      topic: 'Variables on Both Sides',
      question: 'Solve for y\n3y - 4 = 2y + 1',
      answer: '5',
      solution: [
        'Step 1: 3y - 4 = 2y + 1',
        'Step 2: 3y - 2y = 1 + 4      (Combine like terms)',
        'Step 3: y = 5'
      ]
    },
    {
      id: 'vb3',
      topic: 'Variables on Both Sides',
      question: 'Solve for z\n5z + 2 = 3z + 10',
      answer: '4',
      solution: [
        'Step 1: 5z + 2 = 3z + 10',
        'Step 2: 5z - 3z = 10 - 2     (Move variables to one side and constants to the other)',
        'Step 3: 2z = 8',
        'Step 4: z = 8 / 2             (Divide by 2)',
        'Step 5: z = 4'
      ]
    },
    {
      id: 'vb4',
      topic: 'Variables on Both Sides',
      question: 'Solve for a\n4a - 7 = 2a + 5',
      answer: '6',
      solution: [
        'Step 1: 4a - 7 = 2a + 5',
        'Step 2: 4a - 2a = 5 + 7       (Combine like terms)',
        'Step 3: 2a = 12',
        'Step 4: a = 12 / 2            (Divide by 2)',
        'Step 5: a = 6'
      ]
    },
    {
      id: 'vb5',
      topic: 'Variables on Both Sides',
      question: 'Solve for b\n6b + 3 = 4b + 11',
      answer: '4',
      solution: [
        'Step 1: 6b + 3 = 4b + 11',
        'Step 2: 6b - 4b = 11 - 3       (Move variables to one side)',
        'Step 3: 2b = 8',
        'Step 4: b = 8 / 2              (Divide by 2)',
        'Step 5: b = 4'
      ]
    },
    {
      id: 'vb6',
      topic: 'Variables on Both Sides',
      question: 'Solve for c\n2c + 4 = c + 9',
      answer: '5',
      solution: [
        'Step 1: 2c + 4 = c + 9',
        'Step 2: 2c - c = 9 - 4         (Combine like terms)',
        'Step 3: c = 5'
      ]
    },
    {
      id: 'vb7',
      topic: 'Variables on Both Sides',
      question: 'Solve for d\n7d - 2 = 5d + 6',
      answer: '4',
      solution: [
        'Step 1: 7d - 2 = 5d + 6',
        'Step 2: 7d - 5d = 6 + 2        (Combine like terms)',
        'Step 3: 2d = 8',
        'Step 4: d = 8 / 2              (Divide by 2)',
        'Step 5: d = 4'
      ]
    },
    {
      id: 'vb8',
      topic: 'Variables on Both Sides',
      question: 'Solve for e\n3e + 1 = 2e + 7',
      answer: '6',
      solution: [
        'Step 1: 3e + 1 = 2e + 7',
        'Step 2: 3e - 2e = 7 - 1        (Combine like terms)',
        'Step 3: e = 6'
      ]
    },
    {
      id: 'vb9',
      topic: 'Variables on Both Sides',
      question: 'Solve for f\n4f - 5 = 2f + 3',
      answer: '4',
      solution: [
        'Step 1: 4f - 5 = 2f + 3',
        'Step 2: 4f - 2f = 3 + 5        (Combine like terms)',
        'Step 3: 2f = 8',
        'Step 4: f = 8 / 2              (Divide by 2)',
        'Step 5: f = 4'
      ]
    },
    {
      id: 'vb10',
      topic: 'Variables on Both Sides',
      question: 'Solve for g\n5g + 2 = 3g + 10',
      answer: '4',
      solution: [
        'Step 1: 5g + 2 = 3g + 10',
        'Step 2: 5g - 3g = 10 - 2       (Move variables to one side)',
        'Step 3: 2g = 8',
        'Step 4: g = 8 / 2              (Divide by 2)',
        'Step 5: g = 4'
      ]
    }
  ]
};

// Group topics
const preAlgebra: Topic = {
  id: 'pre-algebra',
  title: 'Pre-Algebra',
  subtopics: [expressionsVariables, powersExponents, orderOperations],
  problems: []
};

const algebra1: Topic = {
  id: 'algebra-1',
  title: 'Algebra 1',
  subtopics: [simpleEquations, multiStepEquations, variablesBothSides],
  problems: []
};

export const topics: Topic[] = [preAlgebra, algebra1];