# TedFlix
Movie Data application
# [TedFlix](https://tw-tedflix.herokuapp.com/)

TedFlix provides information and commentary about a variety of movies from various genre.

<div>
  <img style="margin: 10px" src="./react-ui/src/assets/noir-movie-collage.jpg" alt="TedFlix Movie Posters" height="45" />
</div>

## Coding Challenge:
- Use React.js and Redux with an API server providing data to the frontend of the application.
    - using `react-redux`.

## Tools:
<div align="left">
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="45" />  
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="45" /> 
  <img style="margin: 30px" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" alt="JSON" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="express" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="45" />
  <img style="margin: 30px" src="https://process.filestackapi.com/cache=expiry:max/resize=width:700/YO2eS6E7QmwNbjzGrNZz" alt="Sequelize" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="45" />  
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="45" />  
  <img style="margin: 30px" src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png" alt="heroku" height="45" />
</div>

1. HTML
1. CSS
1. JAVASCRIPT
1. NODE
1. JSON
1. EXPRESS
1. POSTGRESQL
1. SEQUELIZE
1. REACT
1. REDUX
1. HEROKU

## Links:
  - [TedFlix Movies Site](https://tw-tedflix.herokuapp.com/)

# Overview of the TedFlix Movie Site
## TedFlix User Interface
 <img style="margin: 30px" src="./react-ui/src/assets/noir-movie-collage.jpg" alt="TedFlix Main Page" height="200" />
 
  1. The header for the site provides a nav bar to easily access the other pages on the website.
  1. The "Home" page provides links to other entertainment and movie sites.
  1. The films page displays cards for the movies in the database including a poster for the movie, information about the production of the movie, various ratings for the movie, including my own rating, the storyline and my comments about the movie.
 
## TedFlix Functional Design
  1. The TedFlix site is an API that presents a web user-interface.  
  1. Movies on the site are maintained in a PostgreSQL database.
  1. In Dev the client communicates on localhost port 3000, the server communicates on localhost port 8080.

## Developed by:
- [Ted Wetekamp](https://www.linkedin.com/in/ted-wetekamp-a6a2281/)

# Setting up the application locally on your computer?
## Follow the steps below
### Copy and Paste these commands and paste them in terminal to run server.  Ensure commands are initiated from the correct folder/location.
    git clone https://github.com/TWetekamp/tedflix.git

### From the application root folder
    npm i dotenv express express-session
    npx create-react-app react-ui --use-npm
    npm i -D nodemon sequelize-cli
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

### Go into package.json and paste this in scripts
    "dev": "nodemon server.js"

### From the tedflix/react-ui folder
    npm run build
    npm run start

### From the root folder
    npm run dev