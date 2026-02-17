# Meetup

A full-stack event management application that allows users to explore online and offline events with detailed information.  
Users can search, filter, and view comprehensive event details including schedule, speakers, pricing, venue, and more.

Built using a React frontend, Node.js/Express backend, and MongoDB database.

---

## Demo Link

[Live Demo](https://frontend-meetup-app-sable.vercel.app/)

---

## Quick Start

```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev      # or `npm start`
```

---

## Technologies Used

### Frontend
- React JS
- React Router

### Backend
- Node.js
- Express

### Database
- MongoDB

---

## Environment Setup

Create a `.env` file in the root of your backend directory and add the following variable:

```
MONGODB=your_mongodb_connection_string
```

Replace the value with your own MongoDB connection string (local or MongoDB Atlas).

⚠️ Make sure not to commit your `.env` file to version control.

---

## App Features

### Event Listings
- Displays a structured list of events with title, date, and event type (Online/Offline).
- Shows a thumbnail image to provide visual context.
- Maintains a consistent and user-friendly layout.
- Presents key event information inside clean event cards.

### Event Search and Filtering
- Allows filtering by event type (Online, Offline, or Both).
- Displays "Both" as the default view.
- Enables users to search events by title.
- Enables users to search events by tags.

### Event Details Page
- Displays complete and detailed event information.
- Shows event description with key highlights.
- Displays session timings including start and end time.
- Presents speaker or presenter details with name, role, and image.
- Shows event pricing if applicable.
- Displays venue details including address and city.
- Provides additional information such as dress code and age restrictions.
- Displays event-related tags.

---

## API Reference

### **GET /events**
Retrieves all events.

Sample Response:
```
[
  {
    "_id": "event_id",
    "eventTitle": "Loreal Appreciation Meeting",
    "eventType": "Offline",
    "eventPrice": 500
  }
]
```

---

### **GET /events/:eventId**
Retrieves details of a specific event by ID.

Sample Response:
```
{
  "_id": "event_id",
  "eventTitle": "Loreal Appreciation Meeting",
  "eventType": "Offline",
  "eventStartTime": "2025-08-14 15:00:00",
  "eventEndTime": "2025-08-14 18:00:00",
  "eventPrice": 500,
  "eventTags": ["tech", "AI"]
}
```

---

## Data Model (Event)

Each event includes the following fields:

- eventTitle
- hostedBy
- eventType (Online/Offline)
- eventImages
- eventDescription
- eventStartTime
- eventEndTime
- eventLocation (venue, address, city)
- eventPrice
- eventDressCode
- eventAgeRestriction
- eventTags
- speakers (name, role, photo)

---

## Contact

For bugs or feature requests, please reach out to:  
kashishbansal081@gmail.com
