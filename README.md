# URL Shortener

A simple and efficient **URL Shortener** built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

This application converts long URLs into short links, redirects users to their original URLs, and tracks link visits through click analytics.

## Features

- Generate short URLs from long URLs.
- Redirect short URLs to their original destination.
- Store URL information in MongoDB.
- Track the total number of clicks.
- Maintain visit history with timestamps.
- View all generated URLs on the home page.
- Simple and user-friendly interface.

## Technologies Used

- **Node.js** – JavaScript runtime.
- **Express.js** – Backend framework.
- **MongoDB** – Database.
- **Mongoose** – MongoDB object modeling.
- **EJS** – Template engine.
- **NanoID** – Generate unique short IDs.
- **HTML & CSS** – Frontend.

## Project Structure

```text
URL-Shortener/
│
├── connections/
│   └── Connection.js
│
├── controllers/
│   └── Url.js
│
├── models/
│   └── Url.js
│
├── routes/
│   ├── Url.js
│   └── staticRouter.js
│
├── views/
│   └── home.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/5onu-hub/URL-Shortener.git
```

### 2. Navigate to the Project Folder

```bash
cd URL-Shortener
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

The default database connection is:

```text
mongodb://127.0.0.1:27017/url-shortner
```

### 5. Run the Application

For development:

```bash
npm run dev
```

Or:

```bash
npm start
```

### 6. Open in Browser

```text
http://localhost:8001
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/url` | Generate a short URL |
| GET | `/url/:shortId` | Redirect to original URL |
| GET | `/url/analytics/:shortId` | Get URL click analytics |

## Analytics Example

To check analytics for a generated short ID:

```text
http://localhost:8001/url/analytics/YOUR_SHORT_ID
```

Example response:

```json
{
  "totalClicks": 5,
  "analytics": [
    {
      "timestamp": "2026-11-11T10:30:00.000Z"
    }
  ]
}
```

*Note: The response format depends on your controller implementation.*

## Future Improvements

- User authentication and authorization.
- Custom short URL generation.
- QR code generation.
- URL expiration feature.
- Dashboard with click statistics.
- Improved responsive UI.

## Author

**Sonu Kumar**

B.Tech – Computer Science & Engineering

GitHub: [@5onu-hub](https://github.com/5onu-hub)

---

⭐ If you like this project, consider giving it a star!
