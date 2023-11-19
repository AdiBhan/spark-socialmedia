import { Pages } from "./interfaces.js";

/****************
 *
 *  Created the ugliest data structure known to man to store data for each page
 *
 *  Format:
 *   Page
 *     ----> name of the page, name of the next page, array of possible choices, if input is needed (for InterPage),
 *           and the header
 */
export const FormPages: Array<Pages> = [
  {
    name: "NamePage",
    next: "ClassessPage",
    choices: [],
    InputNeeded: true,
    header: "Hi, there what's your name?",
  },
  {
    name: " InterPage",
    next: "ToolsPage",

    choices: [
      "UI/UX",
      "Web Development",
      "Mobile Development",
      "AI/ML",
      "Virtual Reality",
      "Augmented Reality",
      "Cybersecurity",
      "Data Science",
      "Game Development",
      "Robotics",
      "Hardware",
      "Civic Tech",
      "Sustainability",
      "Fintech",
      "Other",
    ],
    InputNeeded: false,
    header: "What are your interests?",
  },
  {
    name: "ClassessPage",
    next: "YearPage",
    choices: [
      "Data Structures and Algorithms",
      "Programming",
      "Intro to CS",
      "Statistics",
      "SWE",
      "Machine Learning",
      "Cybersecurity",
      "Ethics in CS/DS",
      "Spark! DEI in Tech",
      "Spark! Civic Tech",
      "Project Management",
      "Spark! Hub",
      "Spark! X-Lab Prac",
    ],
    InputNeeded: false,
    header: "What classes are you taking?",
  },
  {
    name: "YearPage",
    next: "ConnectPage",
    choices: [
      "Freshman",
      "Sophomore",
      "Junior",
      "Senior",
      "Masters",
      "PhD",
      "Alumni",
    ],
    InputNeeded: false,
    header: "What year are you?",
  },
  {
    name: "ConnectPage",
    next: "ToolsPage",
    choices: ["Mentee", "Buddy", "Mentor"],
    InputNeeded: false,
    header: "Are you looking to connect with a...",
  },
  {
    name: "ToolsPage",
    next: "InterPage",
    choices: [
      "Python",
      "C",
      "Rust",
      "C++",
      "R",
      "Java",
      "SQL",
      "JavaScript",
      "MatLab",
      "Kotlin",
      "Figma",
      "Adobe",
      "React",
      "React Native",
      "Flutter",
      "Swift",
      "Dart",
      "HTML/CSS",
      "Other",
    ],
    InputNeeded: false,
    header: "What tools do you use?",
  },
];
