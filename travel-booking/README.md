# AltaiNomad – Travel Booking System

A full stack web application for managing travel bookings, built with Node.js, Express, and vanilla JavaScript.

## Project Overview

AltaiNomad is a travel booking web app that allows users to create, view, edit, and cancel travel bookings. Data is stored persistently using a local JSON file. The app runs entirely on a local machine without any cloud infrastructure. I also added "more info" link which leads to my different demo web site which has more information about travel.

## System Requirements

- Node.js v18 or higher
- npm (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari)

## Installation & Running

1. Clone the repository:
   git clone https://github.com/tjsrjtr/GINFV25

2. Navigate to the project folder:
   cd GINFV25/travel-booking

3. Install dependencies:
   npm install

4. Start the server:
   node server.js

5. Open your browser and go to:
   http://localhost:3000

## Features

- Create a new travel booking with name, email, destination, date and passengers
- View all bookings in a dynamic table
- Edit existing bookings
- Delete/cancel bookings
- Client-side and server-side validation
- Success and error feedback messages
- Responsive design using Bootstrap

## API Endpoints

| Method | Endpoint | Description |
|--------|------------------|----------------------|
| GET | /api/bookings | Get all bookings |
| POST | /api/bookings | Create a new booking |
| GET | /api/bookings/:id | Get a single booking |
| PUT | /api/bookings/:id | Update a booking |
| DELETE | /api/bookings/:id | Delete a booking |

## Project Structure

travel-booking/
├── public/
│   └── index.html       ← frontend
├── data/
│   └── bookings.json    ← persistent storage
├── routes/
│   └── booking.js
├── server.js            ← backend
├── package.json
└── README.md

## Troubleshooting

- **Port already in use**: change PORT in server.js to 3001
- **Page not loading**: make sure node server.js is running in terminal
- **Bookings not saving**: check that the data/ folder exists
- **npm not found**: install Node.js from https://nodejs.org