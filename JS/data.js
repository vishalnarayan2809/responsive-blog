export const blogData = [
  {
    id: 1,
    title: "My New Journey as a Bootcamp Student",
    date: "2022-07-23",
    dateFormatted: "JULY 23, 2022",
    excerpt: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects and meet like-minded peers.",
    image: "https://img-c.udemycdn.com/course/480x270/5178116_6858.jpg",
    content: {
      intro: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects and meet like-minded peers.",
      sections: [
        {
          title: "How I Stay Committed to Learning",
          paragraphs: [
            "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
            "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
          ]
        },
        {
          title: "How I Got Started",
          paragraphs: [
            "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
            "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Learning CSS Grid and Flexbox",
    date: "2022-07-20",
    dateFormatted: "JULY 20, 2022",
    excerpt: "Today I dove deep into CSS Grid and Flexbox layouts. Understanding the differences and when to use each has been a game-changer for my frontend development skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftCnUGl6vomM6fpuEydumrKT8uek9xESMIg&s",
    content: {
      intro: "CSS Grid and Flexbox are powerful layout tools that every frontend developer should master.",
      sections: [
        {
          title: "Understanding CSS Grid",
          paragraphs: [
            "CSS Grid is perfect for two-dimensional layouts where you need control over both rows and columns.",
            "I learned how to create responsive grids that adapt to different screen sizes."
          ]
        },
        {
          title: "When to Use Flexbox",
          paragraphs: [
            "Flexbox excels at one-dimensional layouts and is great for navigation bars and card layouts.",
            "The flexibility it provides for alignment and distribution is unmatched."
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    date: "2022-07-18",
    dateFormatted: "JULY 18, 2022",
    excerpt: "Diving into JavaScript fundamentals and understanding how to manipulate the DOM effectively for interactive web experiences.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscmdBEg3Oxvv-rF15Y5i8JQTgG9gdMwiNow&s",
    content: {
      intro: "JavaScript is the language that brings websites to life with interactivity.",
      sections: [
        {
          title: "DOM Manipulation",
          paragraphs: [
            "Learning how to select elements and modify their content dynamically.",
            "Understanding event listeners and how to respond to user interactions."
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Exploring React.js: Building Dynamic User Interfaces",
    date: "2023-01-10",
    dateFormatted: "JANUARY 10, 2023",
    excerpt: "Delving into React.js to create dynamic and responsive user interfaces, enhancing the user experience.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg",
    content: {
      intro: "React.js has revolutionized the way we build user interfaces. Its component-based architecture allows for reusable and maintainable code.",
      sections: [
        {
          title: "Understanding Components",
          paragraphs: [
            "Components are the building blocks of a React application. They encapsulate logic and UI, making code more organized.",
            "By breaking down the UI into smaller pieces, we can manage complex interfaces more effectively."
          ]
        },
        {
          title: "State and Props",
          paragraphs: [
            "State allows components to manage and respond to data changes, enabling dynamic rendering.",
            "Props are used to pass data between components, promoting reusability and modularity."
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Mastering TypeScript for Scalable Applications",
    date: "2023-03-15",
    dateFormatted: "MARCH 15, 2023",
    excerpt: "Integrating TypeScript into projects to enhance code quality and scalability through static typing.",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png",
    content: {
      intro: "TypeScript brings static typing to JavaScript, allowing developers to catch errors early and write more robust code.",
      sections: [
        {
          title: "Benefits of Static Typing",
          paragraphs: [
            "Static typing helps in identifying potential bugs during development, reducing runtime errors.",
            "It also improves code readability and maintainability, especially in large codebases."
          ]
        },
        {
          title: "Integrating TypeScript",
          paragraphs: [
            "Setting up TypeScript involves configuring the tsconfig.json file and updating existing JavaScript files.",
            "Gradually migrating code allows for a smoother transition and immediate benefits."
          ]
        }
      ]
    }
  },
  {
    id: 6,
    title: "Building Progressive Web Apps (PWAs)",
    date: "2023-06-20",
    dateFormatted: "JUNE 20, 2023",
    excerpt: "Creating Progressive Web Apps to deliver app-like experiences on the web, enhancing user engagement.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFiS-8l6Gc0jA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1719306084344?e=2147483647&v=beta&t=6kvtdM33TGOVls0va8duNgGCf8lS2fG6qgwotfYzdiE",
    content: {
      intro: "Progressive Web Apps combine the best of web and mobile apps, offering offline capabilities and improved performance.",
      sections: [
        {
          title: "Key Features of PWAs",
          paragraphs: [
            "PWAs are installable, work offline, and can send push notifications, providing a native app experience.",
            "They are responsive and can adapt to various screen sizes and devices."
          ]
        },
        {
          title: "Implementing a PWA",
          paragraphs: [
            "Implementing a service worker and a manifest file are essential steps in creating a PWA.",
            "Tools like Workbox can simplify the process of setting up caching strategies and offline support."
          ]
        }
      ]
    }
  },
  {
    id: 7,
    title: "Optimizing Web Performance with Lazy Loading",
    date: "2023-09-05",
    dateFormatted: "SEPTEMBER 5, 2023",
    excerpt: "Enhancing web performance by implementing lazy loading techniques for images and components.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6QOI67zUHLYqQnID8hs0oaHFBD8goGwr8w&s",
    content: {
      intro: "Lazy loading defers the loading of non-critical resources at page load time, improving initial load performance.",
      sections: [
        {
          title: "Benefits of Lazy Loading",
          paragraphs: [
            "Reduces initial page load time, leading to a better user experience.",
            "Decreases bandwidth consumption, especially beneficial for users on limited data plans."
          ]
        },
        {
          title: "Implementing Lazy Loading",
          paragraphs: [
            "Using the 'loading' attribute on images and iframes is a simple way to implement lazy loading.",
            "For components, dynamic imports and React's Suspense can be utilized to load components on demand."
          ]
        }
      ]
    }
  },
  {
    id: 8,
    title: "Exploring Next.js for Server-Side Rendering",
    date: "2023-11-12",
    dateFormatted: "NOVEMBER 12, 2023",
    excerpt: "Leveraging Next.js to implement server-side rendering, improving SEO and initial load performance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MozeErb70lpelYGpS_6VxIUURujjxPgw2-AXMqw9pDDT2HD7xEK89i4zhoyBammK6Ic&usqp=CAU",
    content: {
      intro: "Next.js is a React framework that enables server-side rendering and static site generation, enhancing performance and SEO.",
      sections: [
        {
          title: "Advantages of Server-Side Rendering",
          paragraphs: [
            "Improves SEO by rendering content on the server, making it accessible to search engine crawlers.",
            "Enhances performance by delivering fully rendered pages to the client."
          ]
        },
        {
          title: "Getting Started with Next.js",
          paragraphs: [
            "Setting up a Next.js project involves creating pages in the 'pages' directory, which are automatically routed.",
            "API routes can be created to handle backend logic within the same project."
          ]
        }
      ]
    }
  }
];
