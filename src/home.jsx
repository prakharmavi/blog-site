import { useState } from "react";
import BlogList from './BlogList'; // Adjust the path as necessary

let Home = () => {
const [blogs, setBlogs] = useState([
    {
        title: 'My new website',
        body: 'This is a blog post about my new website. It has many features and a sleek design. I spent countless hours perfecting the user interface and ensuring that the user experience is seamless. The website is built using the latest web technologies, including React for the frontend and Node.js for the backend. I am excited to share it with the world and hope you find it as amazing as I do!',
        author: 'mario',
        id: 1
    },
    {
        title: 'Welcome party!',
        body: 'We had an amazing welcome party with lots of fun activities and delicious food. The event was a great opportunity for everyone to get to know each other and build strong connections. We played games, shared stories, and enjoyed a variety of dishes from different cuisines. It was a memorable evening that set the tone for a positive and collaborative environment.',
        author: 'yoshi',
        id: 2
    },
    {
        title: 'Web dev top tips',
        body: 'Here are some top tips for web development to help you build better websites:\n\n1. Keep your code clean and organized.\n2. Use semantic HTML for better accessibility.\n3. Optimize your images and assets for faster load times.\n4. Make your website responsive to ensure it looks great on all devices.\n5. Stay updated with the latest web development trends and technologies.',
        author: 'luigi',
        id: 3
    },
    {
        title: 'React basics',
        body: 'This post covers the basics of React, a popular JavaScript library for building user interfaces. React allows you to create reusable components, manage state efficiently, and build dynamic web applications with ease. Whether you are a beginner or an experienced developer, understanding the fundamentals of React is essential for modern web development.',
        author: 'peach',
        id: 4
    },
    {
        title: 'Advanced CSS',
        body: 'Learn about advanced CSS techniques to create stunning web pages. Topics covered include:\n\n1. Flexbox and Grid layouts for complex designs.\n2. CSS animations and transitions for interactive elements.\n3. Custom properties (CSS variables) for better maintainability.\n4. Responsive design principles for a mobile-first approach.\n5. Using preprocessors like SASS for more powerful styling capabilities.',
        author: 'toad',
        id: 5
    },
    {
        title: 'JavaScript tricks',
        body: 'Discover some cool JavaScript tricks to enhance your coding skills:\n\n1. Use destructuring to extract values from arrays and objects.\n2. Take advantage of template literals for cleaner string concatenation.\n3. Utilize arrow functions for more concise function expressions.\n4. Implement async/await for better handling of asynchronous code.\n5. Explore the power of higher-order functions like map, filter, and reduce.',
        author: 'bowser',
        id: 6
    },
    {
        title: 'Node.js guide',
        body: 'A comprehensive guide to Node.js, a powerful JavaScript runtime. Node.js allows you to build scalable and high-performance server-side applications. This guide covers:\n\n1. Setting up a Node.js development environment.\n2. Understanding the event-driven architecture.\n3. Working with modules and packages using npm.\n4. Building RESTful APIs with Express.js.\n5. Connecting to databases like MongoDB and PostgreSQL.',
        author: 'mario',
        id: 7
    },
    {
        title: 'Frontend frameworks',
        body: 'An overview of popular frontend frameworks and their features. This post compares React, Angular, and Vue.js, highlighting their strengths and use cases. Whether you are building a small project or a large-scale application, choosing the right framework can significantly impact your development process and the final product.',
        author: 'yoshi',
        id: 8
    },
    {
        title: 'Backend development',
        body: 'Tips and best practices for backend development. Topics include:\n\n1. Designing scalable and maintainable APIs.\n2. Implementing authentication and authorization.\n3. Ensuring data integrity and security.\n4. Optimizing database queries and performance.\n5. Using tools like Docker and Kubernetes for containerization and orchestration.',
        author: 'luigi',
        id: 9
    },
    {
        title: 'Fullstack journey',
        body: 'My journey to becoming a fullstack developer and the challenges I faced. From learning the basics of HTML and CSS to mastering complex backend technologies, this post shares my experiences, struggles, and triumphs. I hope my story inspires others to pursue their passion for web development and never give up on their dreams.',
        author: 'peach',
        id: 10
    },
    {
        title: 'DevOps essentials',
        body: 'Essential practices and tools for DevOps to streamline your development process. This post covers:\n\n1. Continuous Integration and Continuous Deployment (CI/CD).\n2. Infrastructure as Code (IaC) with tools like Terraform.\n3. Monitoring and logging for better visibility and troubleshooting.\n4. Automating repetitive tasks with scripts and tools.\n5. Collaborating effectively with development and operations teams.',
        author: 'toad',
        id: 11
    }
]);

return (
        <div className="home container mx-auto px-4">
        <BlogList blogs ={blogs}/>
    </div>
        
    );
    };

export default Home;