# Eat-Da-Burger! (Node Express Handlebars)

<img width="1080" alt="app" src="https://user-images.githubusercontent.com/53587397/72695797-7ad3e500-3aff-11ea-8c04-9075ff34985d.png">

## Introduction

Eat-Da-Burger is a simple full stack application that follows the MVC (model view controller) framework. The app utilizes express routing, handlebars.js, and stores data in a MySQL database. It is is very simple - there are two columns listed as "burgers ready for devouring," and "devoured burgers." Burgers listed as ready to be devoured have a button next to them called Devour! Clicking this will move the burger into the devoured burgers column.

Once in the "devoured burgers" column, the Devour! button is replaced by an Order Up! button. Clicking this will relocate the burger back into the "ready to be devoured" column. Regardless of column, burgers also have a Trash It! button which will delete the burger from the app entirely.

At the bottom, users can enter any burger they want in the "What Burger Would You Like?" text field, and clicking the "Place Your Order" button will generate the entered burger into the "burgers ready for devouring" column.

All burgers are stored in a MySQL database.

## Technologies

The app's database schema and seeds were created in the MySQL workbench, and the coding was done in VS Code using node.js, JavaScript, handlebars.js, and Express. A custom ORM was also utilized. CSS, Bootstrap and Google Fonts were used for the styling of the app.

## Launch

http://eat-da-burger-kb.herokuapp.com/

## Sources and Inspiration

Despite being a pretty silly app, this was a very valuable assignment. It was a small dose of what full stack development is like where an app utilizes both front and back end approaches. It could be quite challenging wrapping my head around the sheer breadth of files and what was supposed to go where. Understanding how the files interacted with each other and translated to the app was difficult, but a very valuable lesson.

I think my favorite code from this was the handlebars portion. 

<img width="435" alt="code" src="https://user-images.githubusercontent.com/53587397/72695813-8b845b00-3aff-11ea-9113-dfff5e3dcf18.png">

This was all brand new to me, and generating a page / html using handlebars was very rewarding. Having this tool will be very valuable moving forward!