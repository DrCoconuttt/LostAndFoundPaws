![image](https://github.com/DrCoconuttt/LostAndFoundPaws/assets/56743529/ddd25b65-ef00-4883-b547-d3008a1d4c3f)

Annually, countless pets go missing, posing risks to the animals and causing significant distress for their owners. LostAndFoundPaws addresses this issue by creating a user-friendly platform that enables swift and effective searches, facilitating the sharing of information for lost or found pets, streamlining the process of reuniting pets with their owners.

## Deployed Site

https://main.d3snkflaj8c6y9.amplifyapp.com/

## Features

-	Account Management: Sign up, edit or delete accounts, manage posts, and upload profile pictures.
-	Post Management: Create, edit, and delete posts detailing lost or found pets.
-	Quick Sightings: Share potential pet sightings rapidly with minimal details; no account creation required, encouraging reporting by making it as quick and easy as possible. 
-	Advanced Search Filters: Employ filters to define searches for pets by location, species, and more.
-	Interactive Map: Visualize the location of reported pets using and interactive map.
-	Comment System: Share information and updates by creating comments on posts.
-	Admin Controls: Administrator accounts, with the ability to manage all posts and comments.
-	Reporting System: Users can report inappropriate posts and comments for admins to review.
-	Responsive Design: A unique layout for mobile and desktop interfaces.

## Implimentation Details

LostAndFoundPaws is a full-stack web application that supports both mobile and desktop interfaces. It was developed using React for the frontend and Amazon Web Services for the backend. In the frontend, Mapbox is utilized to create an interactive map, and Material UI's pre-designed components help establish a consistent and visually appealing user interface. Several AWS services are utilized to handle backend functionality and data storage. 
-	AWS Amplify: provides tools manage the backend and host the application.
-	AWS AppSync: used to create serverless GraphQL APIs, enabling efficient connections to the database.
-	AWS DynamoDB: serves as a key-value NoSQL database, allowing for fast and scalable data storage.
-	AWS S3: provides robust object storage, utilized for saving images such as those of pets and user profile pictures.
-	AWS Cognito: manages user account and enhances security with features such as email verification. 
-	AWS Lambda: runs code in response to events, further automating backend processes without the need for managing servers.

