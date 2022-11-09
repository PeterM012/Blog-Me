# Blog-Me

## Video Link


## Technologies Used
JS - Used to create functions needed to communicate with SQL
SQL - To create databases and tables
Sequelize - Used to route database 
Node JS - Used to open on the server
Express JS - Used to route API
HandleBars - Used for MVC views
Insomina - Application to see a visual representation of objects to GET,POST,PUT,DELETE

## To Do
CMS-style blog site visit the site for the first time
Presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
Click on the homepage option taken to the homepage
Click on any other links in the navigation prompted to either sign up or sign in
Choose to sign up prompted to create a username and password
Click on the sign-up button user credentials are saved and I am logged into the site
Revisit the site at a later time and choose to sign in prompted to enter my username and password
Signed in to the site see navigation links for the homepage, the dashboard, and the option to log out
Click on the homepage option in the navigation taken to the homepage and presented with existing blog posts that include the post title and the date created
Click on an existing blog post presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
Enter a comment and click on the submit button while signed in comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
Click on the dashboard option in the navigation taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
Click on the button to add a new blog post prompted to enter both a title and contents for my blog post
Click on the button to create a new blog post title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
Click on one of my existing posts in the dashboard able to delete or update my post and taken back to an updated dashboard
Click on the logout option in the navigation signed out of the site
Idle on the page for more than a set time automatically signed out of the site 


## Summary 
This project was to create a Model-View-Controller (MVC). To begin this task I had to spend some time reading different articles such as how to download the different packages and handlebars.js. After reviewing the material I was going to need to utilize Node.JS, Sequelize, and Handlebars to execute what was needed. In order to complete this task I had to start from scratch starting with the routes and then models. I used node to create a live server and generate my different seeds with sequelize. During my research I discovered how to use the handlebars to create html text where i can route in information from api's. I felt the most challenging task to overcome for this task was understanding how to make the assignment functioning and create a login and dashboard. Something that I took away from this was how you can create a front end using backend packages. I feel at the end of this I have achieved a better understanding of backend development. Below is my code for the function that excutes api calls.

## Code Snippet
JS
```js
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
  
```
