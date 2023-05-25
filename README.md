# What's the reason behind this project?
This project is a first attempt at using next.js 13 in a front end application.
It follows [this basic tutorial](https://youtu.be/__mSgDEOyv8) from fireship.
The goal of this project is to better understand how next works and the tools it provides.

# What can you see in this project?
This project will use next 13 app routing.
It applies next routing to a note application.
Once the project is launched: 
  - you can see your notes at http://localhost:3000/notes , as well as create a new note through a form
  - you can check a specific note at http://localhost:3000/notes/:id

The database is handled by pocketbase, which allows a fast implementation of a db for this small project. To add directly table/element in the databse, start pocketbase with ```./pocketbase serve``` at the root of this project and click on the link given to access the tables and modify them.

# What's different between this project and the tutorial?
This project final goal is to be an example of [hexagonal architecture](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c) implementation with front end technology, more specifically next 13. This project will serve as a template to get an idea of what can be done with next 13 in term of architecture, and how to do it properly.

# How to use this project?

Run ```./pocketbase serve``` to start the server. You can follow the link showed in the terminal to set some data directly in the databse. Once the server is running, you can run ```npm run dev``` to start the front.