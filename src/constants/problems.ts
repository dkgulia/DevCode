
import { Problem, DifficultyLevel } from '@/types/problem';
export const problems:Problem[] = [
    {
      id: '1',
      title: 'Build a Responsive Navbar',
      difficulty: 'Easy'as DifficultyLevel,
      tags: ['HTML', 'CSS', 'Responsive Design'],
      description: 'Create a responsive navigation bar that works well on both desktop and mobile devices. Implement a hamburger menu for mobile screens.',
      example: 'Input: None. Output: A responsive navbar with a hamburger menu on small screens.',
    },
    {
      id: '2',
      title: 'Create a To-Do List App',
      difficulty: 'Easy'as DifficultyLevel,
      tags: ['JavaScript', 'React', 'CRUD Operations'],
      description: 'Build a simple to-do list application with the ability to add, delete, and mark tasks as completed. Use React for the frontend.',
      example: 'Input: User inputs a task and clicks "Add". Output: Task appears in the list, and users can mark it as completed or delete it.',
    },
    {
      id: '3',
      title: 'Implement a Modal Component',
      difficulty: 'Medium'as DifficultyLevel,
      tags: ['React', 'Component Design', 'CSS'],
      description: 'Create a reusable modal component in React that can be used for showing content or forms in a pop-up style.',
      example: 'Input: A button triggers the modal to open. Output: A modal appears with content and a close button.',
    },
    {
      id: '4',
      title: 'Design a Custom Dropdown Menu',
      difficulty: 'Medium'as DifficultyLevel,
      tags: ['React', 'Accessibility', 'CSS'],
      description: 'Create a custom dropdown menu that is accessible and works on both desktop and mobile. The dropdown should be keyboard accessible and usable with a screen reader.',
      example: 'Input: A user clicks a button to open the dropdown menu. Output: The dropdown appears with selectable options.',
    },
    {
      id: '5',
      title: 'Build a Real-Time Chat App',
      difficulty: 'Hard'as DifficultyLevel,
      tags: ['Node.js', 'Socket.IO', 'MongoDB'],
      description: 'Create a real-time chat application where users can send and receive messages instantly. Use Socket.IO for real-time communication and MongoDB to store the messages.',
      example: 'Input: User sends a message in the chat window. Output: Message appears in real-time in the chat interface for all users.',
    },
    {
      id: '6',
      title: 'Implement Infinite Scrolling',
      difficulty: 'Medium'as DifficultyLevel,
      tags: ['React', 'API Integration', 'Optimization'],
      description: 'Implement infinite scrolling where new data is loaded automatically as the user scrolls down the page. This can be used for displaying lists, articles, or images.',
      example: 'Input: User scrolls down the page. Output: New data is fetched and appended to the existing list as the user reaches the bottom.',
    },
    {
      id: '7',
      title: 'Create a File Upload Component',
      difficulty: 'Hard'as DifficultyLevel,
      tags: ['Node.js', 'Express', 'AWS S3'],
      description: 'Build a file upload component where users can upload files to a server, and the files are stored in an AWS S3 bucket. Use Express.js for the backend and AWS SDK for integration.',
      example: 'Input: User selects a file to upload. Output: The file is uploaded to the server and stored in AWS S3.',
    },
    {
      id: '8',
      title: 'Build a Dark Mode Toggle',
      difficulty: 'Easy'as DifficultyLevel,
      tags: ['React', 'CSS', 'State Management'],
      description: 'Create a simple dark mode toggle in a React app where users can switch between light and dark themes.',
      example: 'Input: User clicks on a button to toggle dark mode. Output: The app switches between dark and light themes.',
    },
    {
      id: '9',
      title: 'Implement Authentication with JWT',
      difficulty: 'Hard'as DifficultyLevel,
      tags: ['Node.js', 'Express', 'JWT', 'Authentication'],
      description: 'Implement user authentication in a Node.js application using JWT (JSON Web Tokens). Users should be able to register, log in, and access protected routes.',
      example: 'Input: User enters login credentials. Output: User is authenticated and receives a JWT token to access protected routes.',
    },
    {
      id: '10',
      title: 'Build a Responsive Grid Layout',
      difficulty: 'Medium'as DifficultyLevel,
      tags: ['CSS Grid', 'Responsive Design', 'HTML'],
      description: 'Create a responsive grid layout using CSS Grid. The layout should adjust based on the screen size and display multiple items in a flexible grid.',
      example: 'Input: None. Output: A responsive grid layout that displays different numbers of items based on screen size.',
    },
    {
      id: '11',
      title: 'Design a Pagination Component',
      difficulty: 'Medium'as DifficultyLevel,
      tags: ['React', 'Component Design', 'Pagination'],
      description: 'Design a pagination component that allows users to navigate through pages of content. The component should display page numbers and allow jumping to the first, last, and specific pages.',
      example: 'Input: User clicks on a page number or next/previous buttons. Output: The content updates based on the selected page.',
    },
    {
      id: '12',
      title: 'Develop a RESTful API for Products',
      difficulty: 'Hard'as DifficultyLevel,
      tags: ['Node.js', 'Express', 'MongoDB', 'API Design'],
      description: 'Create a RESTful API in Node.js using Express that allows CRUD operations for managing products. Store product data in MongoDB.',
      example: 'Input: User sends a POST request to create a new product. Output: A new product is created in the database and returned in the response.',
    },
  ];
  