# URL Shortener

A URL shortener application to create concise links from long URLs.


## Features

- **Shorten URLs**:  Converts long URLs into short, manageable links.
- **Redirect**: Redirect users from the short link to the original URL.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **Database**: (MongoDB with Mongoose.
- **EJS**: For the User Interface

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ahmedelshinnawi/url-shortener.git
   
3. Navigate to the project directory
   ```
   cd url-shortener

4. Install dependencies:
   ```bash
   npm install
   
3. Setup Database
    **Sign up for MongoDB free database cluster:**  [MongoDB](https://www.mongodb.com/)
  
4. Set up environment variables:
   **Create a .env file to store your credentials. Example below:**
     ```
   MONGODBURI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog
     ```
5. Start the server:
    ```bash
    npm start



## API Endpoints:
- **`GET`** /: Get a list of all the URLs saved in the database.
- **`GET`** /:id: To go to a single URL from the database.
- **`POST`** /shorten: To generate a short URL.



