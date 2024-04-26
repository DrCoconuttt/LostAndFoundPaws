![image](https://github.com/DrCoconuttt/LostAndFoundPaws/assets/56743529/ddd25b65-ef00-4883-b547-d3008a1d4c3f)

Annually, countless pets go missing, posing risks to the animals and causing significant distress for their owners. LostAndFoundPaws addresses this issue by creating a user-friendly platform that enables swift and effective searches, facilitating the sharing of information for lost or found pets, streamlining the process of reuniting pets with their owners.

## Deployed Site

https://main.d3snkflaj8c6y9.amplifyapp.com/

## Features

-	**Account Management:** Sign up, edit or delete accounts, manage posts, and upload profile pictures.
-	**Post Management:** Create, edit, and delete posts detailing lost or found pets.
-	**Quick Sightings:** Share potential pet sightings rapidly with minimal details; no account creation required, encouraging reporting by making it as quick and easy as possible. 
-	**Advanced Search Filters:** Employ filters to define searches for pets by location, species, and more.
-	**Interactive Map:** Visualize the location of reported pets using and interactive map.
-	**Comment System:** Share information and updates by creating comments on posts.
-	**Admin Controls:** Administrator accounts, with the ability to manage all posts and comments.
-	**Reporting System:** Users can report inappropriate posts and comments for admins to review.
-	**Responsive Design:** A unique layout for both mobile and desktop interfaces.

## Implimentation Details

LostAndFoundPaws is a full-stack web application.

**Frontend:**
-	**React:** Utilized as the primary framework for developing the frontend.
-	**Mapbox:** Integrated to provide an interactive map to visualize post locations.
-	**Material UI:** Employed for pre-designed components to ensure a consistent and visually appealing user interface.

**Backend (Amazon Web Services):**
-	**AWS Amplify:** Provides tools manage the backend and host the application.
-	**AWS AppSync:** Used to create serverless GraphQL APIs, enabling efficient connections to the database.
-	**AWS DynamoDB:** Serves as a key-value NoSQL database, allowing for fast and scalable data storage.
-	**AWS S3:** Provides robust object storage, utilized for saving images such as those of pets and user profile pictures.
-	**AWS Cognito:** Manages user account and enhances security with features such as email verification. 
-	**AWS Lambda:** Runs code in response to events, further automating backend processes without the need for managing servers.


