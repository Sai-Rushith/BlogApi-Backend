# BlogApi-Backend




This is a simple Node.js + Express backend API for a blog application that supports posts, likes, and comments. It's built with MongoDB, Mongoose, and follows a modular 

structure for scalability and ease of maintenance.



reference : https://documenter.getpostman.com/view/24441701/2s93RUvs44



🔧 Tech Stack

Node.js



Express.js

MongoDB with Mongoose

Postman (for testing)

Dotenv for managing environment variables

📦 Features
Create a blog post

Like a blog post

Unlike a blog post

Comment on a blog post

Get a blog post with populated likes/comments

RESTful API structure

Error handling with status codes

📁 Project Structure
pgsql
Copy
Edit
blog-backend/


├── controllers/

│   ├── postController.js

│   ├── likeController.js

│   └── commentController.js

├── models/

│   ├── postModel.js

│   ├── likeModel.js

│   └── commentModel.js

├── routes/

│   ├── postRoutes.js

│   ├── likeRoutes.js

│   └── commentRoutes.js

├── config/

│   └── database.js

├── .env

├── index.js

└── package.json

🔗 API Endpoints

📝 Posts

POST /api/v1/create – Create a new post



GET /api/v1/posts – Get all posts



GET /api/v1/post/:id – Get a single post (with likes/comments)



❤️ Likes

POST /api/v1/like – Like a post



POST /api/v1/unlike – Unlike a post



💬 Comments

POST /api/v1/comment – Add a comment to a post



🚀 How to Run

Clone the repo



bash

Copy

Edit

git clone https://github.com/yourusername/blog-backend.git
cd blog-backend

Install dependencies


bash

Copy

Edit

npm install
Add .env file


ini

Copy

Edit
PORT=3000

DATABASE_URL=mongodb://127.0.0.1:27017/YourDBName

Run the server


bash
Copy

Edit
node index.js

📬 Testing with Postman

Use Postman to send HTTP requests:



Make sure MongoDB is running (mongod)



Use the above API routes



Set request type to POST or GET as needed



Use raw JSON in body for POST routes





