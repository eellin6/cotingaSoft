# cotingaSoft
Coding Exercise - Elevator Access Problem

## Installation/Start-up
1. First fork the repo and clone it to your local machine.
2. Change .env_sample to .env and change REACT_APP_PASSWORD=SECRET_PASSWORD_HERE to the secret password provided (ONLY change SECRET_PASSWORD_HERE and password is case sensitive)
3. Run npm install to install all dependencies
4. Run npm run build to bundles React in production mode
5. Run npm start to run the server

## Application Walk Through
Once the server is run, the user will be greeted and told to use the elevator. The user will be able to go from floor 1-3 without having to "Insert Key". The user will be able to see the button for the fourth floor but they will not be able to go to that floor without inserting the correct key. The text for the fourth floor will remain red until the correct key is inserted.

Once the user inserts the correct key, the button will turn green and the user will be able to reach the fourth floor. Once on the fourth floor, the user can remove the key and still be able to go to any of the other floors. However, once the user leaves the fourth floor they will have to insert the correct key again to get back to the forth floor.

## Tech
This app was made with Create-React-App

## Environment Variables Needed
REACT_APP_PASSWORD - Secret Password