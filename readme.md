
<br />
<p align="center">
  <a href="https://github.com/Thibault-collard/herobay">
    <img src="/src/assets/screenshot-herobay.png" alt="Logo" height="600">
  </a>

  <h3 align="center"> Herobay </h3>

  <p align="center">
    Application test for the position of Fullstack developer at Eden AI, a platform for aggregation and simplification of the use of artificial intelligence.
		<br />
    <br />
    <a href="https://herobay.herokuapp.com/">View Online Demo</a>
    ·
    <a href="https://github.com/Thibault-collard/herobay/issues">Report a Bug</a>
    ·
    <a href="https://github.com/Thibault-collard/herobay/pulls">Suggest a modification</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About this projet

The goal of the challenge is to develop a supermarket checkout management solution. 
I have chosen to offer a superhero rental service for all types of use: war, work, entertainment...

The product catalog must contain: 
- The list of products with their prices
- Two discounts prices : 2 products purchased = 1 free, 50% discount on one product

With this version, you'll be able to : 
- Create a shopping cart with your favorite superheroes
- Add and remove items from this shopping cart (Without any subscription or registration)
- Get the amount of rental services and reduction applied

### Built with

* Django REST (Back-end)
* Vue JS (Front-end)
* MongoDB (Database)
* Vuex (Data storage)
* Heroku (Deployment)
* Bootsrap (Library Front-end)

<!-- GETTING STARTED -->
## Start the project ...

To quickly checkout this project, you don't need any credentials, just click on this link: https://herobay.herokuapp.com/

### Pré-requis

En plus d'avoir un environnement de programmation adéquat, il convient d'avoir des notions en Javascript, Canva et React pour bien appréhender ce projet

```

### Installation

1. Clone the repo
```sh
git clone https://github.com/Thibault-collard/herobay.git
```
2. Instal NPM packages
```sh
npm install
```
3. Install Python packages
```sh
pip install -r requirements.txt
```
4. Build and launch the server
```sh
npm run go
```
To replicate this project, you must type your credentials in dotenv files or Heroku config vars: 
DJANGO_SECRET_KEY=''
MONGO_DB_HOST=''
MONGO_DB_NAME=''
MONGO_DB_MECH=''
MONGO_DB_PASSWORD=''
MONGO_DB_USERNAME=''
API_URL=''

<!-- USAGE EXAMPLES -->
## Compétences utilisés

- Synch a Django back-end with Vue JS Front-end
- Connect MongoDB database to Django
- Deploy the project on production server
- Create grid view with all products available
- Create shopping cart with localstorage and vuex

<!-- ROADMAP -->
## Project Structure

FRONT (Src folder):
-> In Component folder : 
- 'Cart' is the modal shopping cart of the homepage, 
- 'GridHeroes' is the list of all superheroes available for renting (Hover : one more picture and the add to cart)

-> In Services folder:
- 'api' and 'heroesServices' make data available from the backend API
- 'promo_code' is used to store all promotional marketing discount

-> In Store folder
- 'store' and subfolder 'modules' is the storage for getters, states, actions, mutations of the app

BACK (backend folder):
-> In Api folder
- 'views' to handle GET, POST, PUT, DELETE requests
- 'models' to store the structure of database

-> In Settings folder
- 'setup' to store Django settings required to run the back-end

-> In root folder:
- 'urls' to handle the differents routes of the API





<!-- LICENSE -->
## Licence

This folder and all of the code it contains is freely accessible, without the need for attribution. But remember that copying without understanding will not advance your skills.

<!-- CONTACT -->
## Contact

For all requests: thibault.collard@gmail.com


