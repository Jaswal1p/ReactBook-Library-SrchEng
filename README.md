# ReactBook-Library-SrchEng

NOTE:  Application is started in the terminal by localhost: npm run develop

## ![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg) 
[View License](https://opensource.org/licenses/MIT) 


# Description

This was a challenging assignment. Heavy on concept & also requires knowledge & application of everything I learned in the last 24 weeks!Not to mention working with Graph QL/Apollo with React. It was quite a learning process to see both server and front end development working from the same local machine. After doing this assignment and not being able to successfully populate the savedbooks page, I have come to the realization that there is small critical knowledge gap I have in the concept of 'context.user' in the authMiddleware function. I plan to work on it, relearn and very soon correct that. Otherwise it was good experience. 

![AcceptanceCriteria](https://user-images.githubusercontent.com/92233527/165021033-afd0ba9b-bcd4-41bc-8975-afad8eddd8fb.png)

 
# Table of Contents:

 * [Usage](#usage)
 * [GitHub Repository Link](#github-repository-link)
 * [GitHub Deployed Application URL](#github-deployed-application-url)
 * [Screenshots](#screenshots)
 * [License](#license)
 * [Contributing](#Contributing)
 * [Dependencies](#dependencies)
 * [Questions](#questions)
 


# GitHub Repository Link

https://github.com/Jaswal1p/ReactBook-Library-SrchEng.git

 
# Heroku Deployed Application URL

https://reactbook-library-srcheng.herokuapp.com/


# Screenshots
  Landing page

 ![LandingPage](https://user-images.githubusercontent.com/92233527/165023901-01994b5c-1c8a-4dce-9ae6-5a1b2975cab7.png) 

 Modal with toggle for signin & signup

 ![ModalSignUp SignIn](https://user-images.githubusercontent.com/92233527/165023956-e76734c4-da99-4e5a-a2bf-85c8c76e23e4.png)

Book search without signin or signup

 ![BookSearhDisplay](https://user-images.githubusercontent.com/92233527/165024010-9c83a37d-c079-4f8d-b34f-9da842f9ba67.png)

successful display books after successful login & there is option to save

![SrchResultAftSignIn](https://user-images.githubusercontent.com/92233527/165025812-65988a1e-d24d-411c-addb-f848ecb3f0dc.png)

Successful display of book saved

![SuccessSavingTheBook](https://user-images.githubusercontent.com/92233527/165025881-10cb92d1-6ae1-4b8b-add0-ab033bd5b7bf.png)

Succesful saving in local storage

![SuccSavingBkTokenInLocalStor](https://user-images.githubusercontent.com/92233527/165025903-99299dd5-f1e5-4c49-bb72-65a5c1610446.png)

# Installation
  
  The following must be installed to run this application. 
  1. React
  2. Bootstarp
  3. Jest testing library
  4. React-dom
  5. React-router-dom
  6. react-scripts
  7. GraphQL
  8. Apollo Server
  9. concurrently
  10. jsonwebtoken
  11. jwt-decode
  12. nodemon
  

# Usage

 This is a front end as well back end application built with GraphQL, Apollo Server & react. 

 # License 
 > This project is licensed under the MIT license.
 >
 > Click the above link adjacent to badge to read further details.
 
 # Contributing

 Contributors: I and only I have contributed to this project so far. 

 # Questions
 If you have any questions about the repo/project, please open an issue or contact by: 
 
 my github username: [Jaswal1p](https://github.com/Jaswal1p) 
 
 my email: Jaswal1p@yahoo.com







Module 21 Assignment

## Server Dependencies installed (All in server)
    
    * npm install
    * npm i apollo-server-express graphql
    * npm install jsonwebtoken
    * npm i express-jwt


    * npm run watch
    * http://localhost:3001/graphql

## Client side installs & start

    * npm i @apollo/client graphql (to install QgraphQ on client side)

## Then go to root of repo 

    * npm init   (to install package to enable both server & client to run concurrently)
     
     ( immediately after that install concurrently by typing following on command line & press enter)

    * npm install -D concurrently

    * npm install jwt-decode

## To start app in development environment

    * npm run develop
     