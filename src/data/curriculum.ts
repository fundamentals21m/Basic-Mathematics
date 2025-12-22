export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export interface Chapter {
  id: number;
  title: string;
  slug: string;
  part: number; // 1 = Algebra, 2 = Geometry, 3 = Trigonometry/Functions
  sections: Section[];
}

export const curriculum: Chapter[] = [
  // PART ONE: ALGEBRA
  {
    id: 1,
    title: "Numbers",
    slug: "numbers",
    part: 1,
    sections: [
      { id: 0, title: "The Integers", slug: "integers", description: "Positive integers, zero, negative integers, and the number line" },
      { id: 1, title: "Rules for Addition", slug: "addition-rules", description: "Commutativity, associativity, and the additive inverse" },
      { id: 2, title: "Rules for Multiplication", slug: "multiplication-rules", description: "Distributivity, powers, and sign rules" },
      { id: 3, title: "Even and Odd; Divisibility", slug: "even-odd", description: "Properties of even and odd integers, divisibility" },
      { id: 4, title: "Rational Numbers", slug: "rational-numbers", description: "Fractions and their arithmetic" },
      { id: 5, title: "Multiplicative Inverses", slug: "multiplicative-inverses", description: "Reciprocals and division" },
    ]
  },
  {
    id: 2,
    title: "Linear Equations",
    slug: "linear-equations",
    part: 1,
    sections: [
      { id: 6, title: "Equations in Two Unknowns", slug: "two-unknowns", description: "Solving systems of two linear equations" },
      { id: 7, title: "Equations in Three Unknowns", slug: "three-unknowns", description: "Solving systems of three linear equations" },
    ]
  },
  {
    id: 3,
    title: "Real Numbers",
    slug: "real-numbers",
    part: 1,
    sections: [
      { id: 8, title: "Addition and Multiplication", slug: "real-operations", description: "Properties of real number arithmetic" },
      { id: 9, title: "Positivity", slug: "positivity", description: "Positive and negative numbers, absolute value" },
      { id: 10, title: "Powers and Roots", slug: "powers-roots", description: "Integer powers, nth roots, and fractional exponents" },
      { id: 11, title: "Inequalities", slug: "inequalities", description: "Ordering real numbers and solving inequalities" },
    ]
  },
  {
    id: 4,
    title: "Quadratic Equations",
    slug: "quadratic-equations",
    part: 1,
    sections: [
      { id: 12, title: "Completing the Square", slug: "completing-square", description: "Method and quadratic formula derivation" },
    ]
  },
  // INTERLUDE
  {
    id: 0,
    title: "Interlude: Logic",
    slug: "logic-interlude",
    part: 1,
    sections: [
      { id: 13, title: "On Logic and Mathematical Expressions", slug: "logic", description: "Logical foundations for mathematical reasoning" },
    ]
  },
  // PART TWO: INTUITIVE GEOMETRY
  {
    id: 5,
    title: "Distance and Angles",
    slug: "distance-angles",
    part: 2,
    sections: [
      { id: 14, title: "Distance", slug: "distance", description: "Distance axioms, segments, and circles" },
      { id: 15, title: "Angles", slug: "angles", description: "Rays, angles, and measurement" },
      { id: 16, title: "The Pythagoras Theorem", slug: "pythagoras", description: "Right triangles and the fundamental theorem" },
    ]
  },
  {
    id: 6,
    title: "Isometries",
    slug: "isometries",
    part: 2,
    sections: [
      { id: 17, title: "Standard Mappings", slug: "standard-mappings", description: "Identity, reflection, rotation, dilation" },
      { id: 18, title: "Isometries", slug: "isometries-def", description: "Distance-preserving transformations" },
      { id: 19, title: "Congruence", slug: "congruence", description: "When figures are congruent" },
    ]
  },
  {
    id: 7,
    title: "Area and Applications",
    slug: "area-applications",
    part: 2,
    sections: [
      { id: 20, title: "Area of Parallelograms", slug: "parallelogram-area", description: "Deriving area formulas" },
      { id: 21, title: "Area of Triangles", slug: "triangle-area", description: "Base times height and applications" },
      { id: 22, title: "The Pythagoras Theorem Proof", slug: "pythagoras-proof", description: "A rigorous proof using areas" },
    ]
  },
  // PART THREE: COORDINATE GEOMETRY
  {
    id: 8,
    title: "Coordinates and Graphs",
    slug: "coordinates-graphs",
    part: 2,
    sections: [
      { id: 23, title: "Coordinate Systems", slug: "coordinate-systems", description: "The Cartesian plane and plotting points" },
      { id: 24, title: "Distance in the Plane", slug: "distance-formula", description: "The distance formula from Pythagoras" },
      { id: 25, title: "Equation of a Circle", slug: "circle-equation", description: "Standard form of circle equations" },
    ]
  },
  {
    id: 9,
    title: "Operations on Points",
    slug: "operations-points",
    part: 2,
    sections: [
      { id: 26, title: "Dilations and Reflections", slug: "dilations-reflections", description: "Coordinate transformations" },
      { id: 27, title: "Addition and Subtraction of Points", slug: "point-addition", description: "Vector-like operations on coordinates" },
      { id: 28, title: "The Parallelogram Law", slug: "parallelogram-law", description: "Geometric interpretation of addition" },
    ]
  },
  {
    id: 10,
    title: "Segments, Rays, and Lines",
    slug: "segments-rays-lines",
    part: 2,
    sections: [
      { id: 29, title: "Segments and Rays", slug: "segments-rays", description: "Parameterizing parts of lines" },
      { id: 30, title: "Lines", slug: "lines", description: "Equations and properties of lines" },
      { id: 31, title: "Perpendicularity", slug: "perpendicularity", description: "Orthogonal lines and their equations" },
    ]
  },
  // PART FOUR: TRIGONOMETRY
  {
    id: 11,
    title: "Trigonometry",
    slug: "trigonometry",
    part: 3,
    sections: [
      { id: 32, title: "Radian Measure", slug: "radian-measure", description: "Arc length and the radian" },
      { id: 33, title: "Sine and Cosine", slug: "sine-cosine", description: "Defining the fundamental trig functions" },
      { id: 34, title: "The Graphs", slug: "trig-graphs", description: "Visualizing sine and cosine" },
      { id: 35, title: "The Tangent", slug: "tangent", description: "The tangent function and its properties" },
      { id: 36, title: "Addition Formulas", slug: "addition-formulas", description: "sin(a+b), cos(a+b), and applications" },
      { id: 37, title: "Rotations", slug: "rotations", description: "Using trigonometry to rotate points" },
    ]
  },
  {
    id: 12,
    title: "Some Analytic Geometry",
    slug: "analytic-geometry",
    part: 3,
    sections: [
      { id: 38, title: "The Straight Line", slug: "straight-line", description: "Slope-intercept and point-slope forms" },
      { id: 39, title: "The Parabola", slug: "parabola", description: "Quadratic curves and their properties" },
      { id: 40, title: "The Ellipse", slug: "ellipse", description: "Ellipses, foci, and eccentricity" },
      { id: 41, title: "The Hyperbola", slug: "hyperbola", description: "Hyperbolas and their asymptotes" },
      { id: 42, title: "Rotation of Hyperbolas", slug: "hyperbola-rotation", description: "Rotating conic sections" },
    ]
  },
  // PART FIVE: MISCELLANEOUS
  {
    id: 13,
    title: "Functions",
    slug: "functions",
    part: 3,
    sections: [
      { id: 43, title: "Definition of a Function", slug: "function-definition", description: "Functions as input-output relationships" },
      { id: 44, title: "Polynomial Functions", slug: "polynomial-functions", description: "Polynomials and their properties" },
      { id: 45, title: "Graphs of Functions", slug: "function-graphs", description: "Visualizing functions" },
      { id: 46, title: "Exponential Functions", slug: "exponential-functions", description: "Growth and decay" },
      { id: 47, title: "Logarithms", slug: "logarithms", description: "The inverse of exponentials" },
    ]
  },
  {
    id: 14,
    title: "Mappings",
    slug: "mappings",
    part: 3,
    sections: [
      { id: 48, title: "Definition of Mappings", slug: "mapping-definition", description: "Functions between sets" },
      { id: 49, title: "Formalism of Mappings", slug: "mapping-formalism", description: "Domain, codomain, and image" },
      { id: 50, title: "Composition and Inverses", slug: "composition-inverses", description: "Combining and reversing mappings" },
      { id: 51, title: "Permutations", slug: "permutations", description: "Bijections of finite sets" },
      { id: 52, title: "Cycles", slug: "cycles", description: "Cycle notation and structure" },
    ]
  },
  {
    id: 15,
    title: "Complex Numbers",
    slug: "complex-numbers",
    part: 3,
    sections: [
      { id: 53, title: "The Complex Plane", slug: "complex-plane", description: "Representing complex numbers geometrically" },
      { id: 54, title: "Polar Form", slug: "polar-form", description: "Magnitude and argument" },
    ]
  },
  {
    id: 16,
    title: "Induction and Summations",
    slug: "induction-summations",
    part: 3,
    sections: [
      { id: 55, title: "Induction", slug: "induction", description: "Proof by mathematical induction" },
      { id: 56, title: "Summations", slug: "summations", description: "Sigma notation and sum formulas" },
      { id: 57, title: "Geometric Series", slug: "geometric-series", description: "Finite and infinite geometric sums" },
    ]
  },
  {
    id: 17,
    title: "Determinants",
    slug: "determinants",
    part: 3,
    sections: [
      { id: 58, title: "Matrices", slug: "matrices", description: "Arrays of numbers and basic operations" },
      { id: 59, title: "Determinants of Order 2", slug: "determinants-2x2", description: "2×2 determinants and their properties" },
      { id: 60, title: "Properties of 2×2 Determinants", slug: "determinant-properties-2x2", description: "D1-D6 and applications" },
      { id: 61, title: "Determinants of Order 3", slug: "determinants-3x3", description: "Expansion by rows and columns" },
      { id: 62, title: "Properties of 3×3 Determinants", slug: "determinant-properties-3x3", description: "Extended properties" },
      { id: 63, title: "Cramer's Rule", slug: "cramers-rule", description: "Solving systems with determinants" },
    ]
  },
];

export const getAllSections = (): Section[] => {
  return curriculum.flatMap(chapter => chapter.sections);
};

export const getSectionById = (id: number): Section | undefined => {
  return getAllSections().find(s => s.id === id);
};

export const getChapterBySectionId = (sectionId: number): Chapter | undefined => {
  return curriculum.find(chapter =>
    chapter.sections.some(section => section.id === sectionId)
  );
};

export const getChapterById = (id: number): Chapter | undefined => {
  return curriculum.find(c => c.id === id);
};

export const getAdjacentSections = (sectionId: number): { prev?: Section; next?: Section } => {
  const allSections = getAllSections();
  const index = allSections.findIndex(s => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : undefined,
    next: index < allSections.length - 1 ? allSections[index + 1] : undefined,
  };
};

export const getTotalSections = (): number => {
  return getAllSections().length;
};

export const getPartTitle = (partNum: number): string => {
  switch (partNum) {
    case 1: return "Algebra";
    case 2: return "Geometry";
    case 3: return "Trigonometry & Functions";
    default: return "";
  }
};
