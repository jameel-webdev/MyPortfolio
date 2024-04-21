import Project1Img from "../assets/Genie.png";
import Project2Img from "../assets/FlightTicket.png";
import Project3Img from "../assets/Shopkart.png";
import Project4Img from "../assets/RealChat.png";

const projects = [
  {
    id: 1,
    type: "Full Stack",
    title: "Gemini AI Content Generator",
    img: Project1Img,
    description:
      "This AI Content Generator platform harnesses the power of Gemini AI to revolutionize the way you generate content. Whether you're seeking inspiration, looking for answers, or simply exploring new ideas.",
    techstack:
      "React, Context API, Node.js, Express.js, Mongoose, TailwindCSS, Tanstack Query, Stripe",
    websiteUrl: "https://geniehub.vercel.app/",
    frontendUrl:
      "https://github.com/jameel-webdev/AI-Content-Generator-frontend",
    backendUrl: "https://github.com/jameel-webdev/AI-Content-Generator-backend",
  },
  {
    id: 2,
    type: "Full Stack",
    title: "Flight Ticket Booking WebApp",
    img: Project2Img,
    description:
      "Your convenient gateway to seamless travel experiences. With intuitive navigation and user-friendly design, our platform allows you to effortlessly search and book flights for your next adventure.",
    techstack:
      "React, Redux, RTKQuery, React-Bootstrap, Node.js, Express, Mongoose, Razorpay",
    websiteUrl: "https://flight-ticket-booking-webapp.netlify.app/",
    frontendUrl:
      "https://github.com/jameel-webdev/flight-ticket-booking-app-frontend",
    backendUrl:
      "https://github.com/jameel-webdev/flight-ticket-booking-app-backend",
  },
  {
    id: 3,
    type: "Full Stack",
    title: "ShopKart Ecommerse",
    img: Project3Img,
    description:
      "Discover seamless shopping experiences with our platform. Our intuitive interface and user-friendly design make browsing and purchasing the latest electronics effortless. Find your tech-savvy lifestyle with ease and convenience.",
    techstack:
      "React, Redux, Node.js, Express.js, Firebase, Mongoose, SCSS, RTK Query, Stripe",
    websiteUrl: "https://shop-kart-frontend.vercel.app/",
    frontendUrl: "https://github.com/jameel-webdev/ShopKart-frontend",
    backendUrl: "https://github.com/jameel-webdev/ShopKart-backend",
  },
  {
    id: 4,
    type: "Full Stack",
    title: "Realtime ChatApp",
    img: Project4Img,
    description:
      "Experience seamless communication with our Realtime ChatApp. Our intuitive platform effortlessly connects you with others for smooth and reliable chat experiences, whether it's with friends or colleagues.",
    techstack:
      "React, Nodejs, Expressjs, Mongoose, Zustand, Socket.io, DaisyUI.",
    websiteUrl: "https://chatapp-apce.onrender.com/login",
    frontendUrl: "https://github.com/jameel-webdev/Real-time-ChatApp",
    backendUrl: "https://github.com/jameel-webdev/Real-time-ChatApp",
  },
];

export default projects;
