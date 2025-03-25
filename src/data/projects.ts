import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "GalaryMaster",
    description: "An image search application with full responsiveness",
    image: "galary_master.png",
    tech: ["React.js", "React Bootstrap", "Material UI", "CSS"],
    github: "https://github.com/supriyamaji1998/galary_master",
    live: "https://supriyamaji1998.github.io/galary_master/",
    details: {
      problem: "Finding high-quality images quickly with a seamless user experience",
      solution:
        "Developed a responsive image search application with auto-rendering features",
      features: [
        "Fully responsive design",
        "Auto-render images as user searches",
        "Modern UI with Material UI and Bootstrap",
      ],
      impact: "Enhancing user experience with efficient and visually appealing image browsing",
    },
  },
  {
    title: "NewsFeed",
    description: "A real-time news aggregator using the gNews API",
    image: "newsfeed.png",
    tech: ["HTML", "CSS", "JavaScript", "gNews API"],
    github: "https://github.com/supriyamaji1998/mytools_project",
    live: "https://supriyamaji1998.github.io/mytools_project/html/newsFeed.html",
    details: {
      problem: "Users need a simple way to access real-time news from multiple sources",
      solution:
        "Built a web application that fetches and displays live news using the gNews API",
      features: [
        "Live news updates from multiple sources",
        "Search functionality with autocomplete",
        "Clean and user-friendly UI",
        "Fast and lightweight web experience",
      ],
      impact: "Providing users with quick access to real-time news in a seamless way",
    },
},
{
  title: "Quiz App",
  description: "A competitive exam practice quiz application",
  image: "QuizApp.png",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/supriyamaji1998/Quiz_App",
  live: "https://supriyamaji1998.github.io/Quiz_App/",
  details: {
    problem: "Lack of interactive platforms for practicing computer science-related questions for competitive exams",
    solution:
      "Developed a responsive quiz application with interactive features to enhance learning and practice",
    features: [
      "Time countdown for each question",
      "Restart quiz functionality",
      "Progress bar to track completion",
      "Result display with correct and selected answers",
      "Stops selection when time is over",
      "Fully responsive UI",
    ],
    impact: "Helping students prepare effectively for competitive exams with real-time quiz interactions",
  },
},
{
  title: "Tic Tac Toe",
  description: "A classic Tic Tac Toe game with time tracking and interactive UI",
  image: "tictactoe.png",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/supriyamaji1998/tic-tac-toe",
  live: "https://supriyamaji1998.github.io/tic-tac-toe/",
  details: {
    problem: "Traditional Tic Tac Toe games lack interactive UI and time-based mechanics",
    solution:
      "Developed a user-friendly Tic Tac Toe game with enhanced interactivity and time-tracking features",
    features: [
      "Turn-based timer functionality",
      "Prevents re-selection of already selected cells",
      "Automatically stops game when a player wins",
      "Replay functionality for multiple rounds",
      "Responsive UI for smooth user experience",
    ],
    impact: "Enhancing user engagement with an interactive and time-tracked gaming experience",
  },
}
];
