Day 5 Assignment: Users and Library API

This project fetches users from JSONPlaceholder, displays their details, and lets you filter by name without making another request.

# Files

- `Day5_index.html` — page structure and user controls
- `Day5_styles.css` — page styling
- `Day5_users.js` — fetches, displays, and filters users
- `README.md` — REST API design for a library's books

# Run the project

Open `Day5_index.html` in a browser. If local file access prevents the API request, use a local development server.

The page shows loading and error messages. It checks `response.ok` because `fetch()` does not reject automatically for HTTP error statuses.
