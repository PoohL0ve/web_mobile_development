# Web and Mobile Development


## Frontend Tools
Common toolss used in frontend development:
- HTML
- CSS: Custom, Tailwind
- JavaScript
- TypeScript
- Frameworks: React, ReactNative, Flutter
- Package Managers: Npm
- Version Control: Git
- Icons (Free) - Material, Feather Icons

View source code: CMD + Option (Mac) and CTRL + U.
# Set Up
Inside the main project or app folder create two folders: frontend and backend. Then run the command npm init -y which commences the node.js project and creates a package.json file which contains important information:
- Project name;
- Version
- Entry point (main)
- Scripts
- Keywords
- Author
- License
- Description

The *y* flag provides the defaults values for the package.json file. When npm install <packageName> is run, the package is automatically added to the dependencies, with the node_modules folder and a package-lock.json file.

Install the packages for the backend in the root directory: 
```bash
npm install express mongoose dotenv
```
### Ways to run the server
1. Using node and the filepath: node ./backend/server.js
2. Create a dev element in the package.json file: 
    "scripts" {
        "dev": "node backend/server.js"
    }
    use npm run dev 
3. Install the nodeman package which will automatically update any changes to the server:
    npm i nodemon -D (automatically adds it to the dependency)
    - Change the "node" to nodemon in the dev
    - This method automatically updates changes and restarts the server

For the mongodb create a ".env" file with a capitalised variable and paste the link from Mongo. Insert the password in the passwrod holder and place the name of the db in before the "?". Use "0.0.0.0/0" in the network access to allow acces to the DB using any IpV4 connection. The "dotenv" allows us to use components from the ".env" file.

## More Backend Work
To connect to the database create a folder called config with a db.js file.
Create a folder for the models and name the file anything with the ".js". In the file import the db:
```js
import mongoose from "mongoose";
 // Set the values for each item using an object
 const itemSchema = new mongoose.Schema({});
```

## Frontend
Build with Vite and use : "npm i react-router-dom" to be able to navigate to different pages. rafce

## UX/UI Essentials
When it comes to CSS almost everything is about the user and how they interact with the page elements. When creating input and label fields ensure that the label is short and visible. Use floating labels when possible where the label floats to the top of the input box.

## Helpful tools
1. [Figma](): UI/UX
2. [Diagrams.net](): Logical and structural diagrams.