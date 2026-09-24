import { FiMapPin, FiHome } from 'react-icons/fi';

export const projects = [
  {
    slug: 'civic-issue-mapper',
    title: 'Civic Issue Mapper',
    tagline: 'Report civic issues, track resolutions — powered by ML clustering and real-time accountability.',
    icon: FiMapPin,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Leaflet', 'JWT Auth', 'Redis'],
    github: 'https://github.com/Bhartendra-singh/civic-issue-mapper',
    live: '',
    status: 'Core platform live — currently extending with ML-based duplicate detection (DBSCAN).',
    problem:
      'Civic complaints like potholes, garbage, and waterlogging often go unresolved without any tracking or accountability, leaving citizens with no way to know if their report was even seen.',
    objective:
      'Build a platform where citizens can report civic issues quickly and transparently, and where admins have the tools to prioritize, route, and resolve them efficiently.',
    solution:
      'Citizens report issues with a photo and live geolocation, and can upvote existing reports to avoid duplicates. All reports appear on a live interactive map, filterable by category and status. Admins manage resolution through a dedicated dashboard with department routing, SLA monitoring, and full audit logs.',
    features: [
      'Photo + geolocation-based reporting with multi-photo upload and category auto-routing',
      'Live interactive map (Leaflet) with color-coded pins and crowd-upvoting for duplicate signals',
      'Public accountability dashboard — reopen rate, SLA-breach tracking, median resolution time',
      'Full admin panel — analytics charts, department management, audit log for every status change',
      'Secure auth — JWT with rotating refresh tokens, Google OAuth, rate limiting',
    ],
    architecture: {
      current: [
        'Modular monolith backend (Express) with a dedicated Python microservice for ML tasks',
        'Report status follows a state-machine pattern (pending → in-progress → resolved/reopened)',
        'Notification system uses an observer-style event trigger on status changes',
      ],
      planned: [
        'Redis caching for analytics endpoints',
        'Redis Pub/Sub paired with Socket.io for scaling real-time notifications',
        'Rate limiting migrated from in-memory to Redis-backed store',
      ],
    },
    roadmap: [
      'ML-based duplicate detection using DBSCAN clustering',
      'Redis caching for analytics and rate-limiting',
      'RAG-powered chatbot for natural language queries',
      'Real-time updates via Socket.io',
    ],
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