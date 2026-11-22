import { FiMapPin, FiHome } from 'react-icons/fi';

export const projects = [
  {
    slug: 'civic-issue-mapper',
    title: 'AI-Powered Civic Issue Mapper',
    tagline: 'Report civic issues, track resolutions, powered by ML clustering and real-time accountability.',
    icon: FiMapPin,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'FastAPI', 'Python', 'Leaflet', 'JWT Auth'],
    github: 'https://github.com/Bhartendra-singh/civic-issue-mapper',
    live: 'https://civic-issue-mapper.vercel.app',
    status: '',
    problem:
      'Civic complaints like potholes, garbage and waterlogging often go unresolved without tracking or accountability. Citizens never know if their report was seen, and duplicate reports bury the urgent ones.',
    objective:
      'Build a platform where citizens can report issues quickly and transparently, and admins can detect duplicates, prioritize, route and resolve them with measurable accountability.',
    solution:
      'Citizens report issues with photos and live location, and an ML model suggests the category. Nearby duplicates are clustered with DBSCAN, and everything shows on a live map. Admins resolve issues through a dashboard with priority scoring, SLA monitoring and an audit log, while an AI chatbot answers questions about the data.',
    features: [
      'Reporting with up to 4 photos, live geolocation and automatic department routing',
      'ML category suggestion (TF-IDF + Naive Bayes) on English and Hinglish text',
      'Duplicate detection with DBSCAN clustering (~200 m radius) in a FastAPI service',
      'Live Leaflet map with color-coded pins and crowd-upvoting',
      'Priority scoring, SLA breach alerts, and a reopen-and-rate flow for citizens',
      'Public accountability dashboard: reopen rate, SLA-breach rate, median resolution time',
      'Real-time notifications and admin dashboard via Socket.io',
      'Gemini-powered chatbot that turns plain-English questions into MongoDB queries, scoped per user',
      'Admin panel with analytics charts, department management and a full audit log',
    ],
    architecture: {
      current: [
        'Modular monolith (Express) with a separate Python FastAPI microservice for ML',
        'Status state machine: pending → in-progress → resolved → reopened',
        'Observer-style notifications triggered on status changes',
        'Redis cache-aside on analytics (~64% faster) and Redis-backed rate limiting',
        'Socket.io rooms (per user, per report, admins) for targeted real-time events',
        'Cron jobs for clustering every 6 hours and daily SLA checks',
        'Secure auth: JWT in httpOnly cookies, rotating refresh tokens, Google OAuth, email verification',
        'Deployed on Vercel (frontend) and Render (backend + ML) with uptime monitoring',
        'Solved production issues: cross-domain cookie auth, SMTP blocked on free tier (moved to Brevo HTTP API)',
      ],
      planned: [],
    },
    roadmap: [],
  },
  {
    slug: 'stayora',
    title: 'Stayora',
    tagline: 'A full-stack accommodation booking platform with separate experiences for guests, hotel owners and admins.',
    icon: FiHome,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Clerk', 'Razorpay', 'Cloudinary'],
    github: 'https://github.com/Bhartendra-singh/Stayora-An-Accommodation-Booking-Platform',
    live: 'https://stayora-mocha.vercel.app',
    status: '',
    problem:
      'Booking a stay usually means juggling separate tools. Guests search on one platform, hotel owners track rooms and bookings elsewhere, and no one has a single view of the whole system.',
    objective:
      'Build one platform where guests can search, book and pay for rooms, owners can manage listings and revenue, and admins can oversee users, hotels and bookings.',
    solution:
      'A MERN application with three role-based experiences (Guest, Hotel Owner, Admin), secure authentication, online payments, cloud image hosting and email confirmations. The frontend and backend are deployed separately, on Vercel and Render, with MongoDB Atlas as the database.',
    features: [
      'Search rooms by destination with recent-search history, filter by room type and price, sort results',
      'Room details with images, amenities, discount badge and Google Maps location',
      'Reviews and ratings, wishlist, offers and coupons',
      'Razorpay payments, Pay Now for unpaid bookings, cancellation, invoice download and booking confirmation emails',
      'Hotel registration and room listing with multi-image upload (Cloudinary)',
      'Owner dashboard with total bookings, revenue and a 6-month performance chart',
      'Create and manage offers and coupons',
      'Admin panel listing all users, with a full platform overview — hotels, rooms, bookings, revenue',
      'Change user roles from the UI, delete hotels, cancel bookings',
    ],
    architecture: {
      current: [
        'Clerk authentication (Google + email) with webhook-based user sync',
        'Role-based route protection on client and server, with role changes from the admin UI',
        'Rate limiting, Helmet security headers, and upload validation',
        'Structured MongoDB models — User, Hotel, Room, Booking, Coupon, Review',
        'Coupon and review/rating system built on top of the core booking flow',
        'Split deployment — frontend on Vercel, backend on Render, MongoDB Atlas as the database',
      ],
      planned: [],
    },
    roadmap: [],
  },
];