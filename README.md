<img width="150" alt="cm_logo" src="https://user-images.githubusercontent.com/5104098/154332677-f2d7f2a9-3653-4679-a579-69912745df25.png">

# Citi Map: Urban Data Collection & Mapping Tool

Citi Map is a React template for creating a web app to collect on-the-ground data to visualize on a map. The tool allows users to click on icons that represent categories of items or behaviors occurring around their city. For example, trash piles, cherry blossoms in bloom, or mask wearing behavior. By clicking on the icon that represents the occurrence, the user logs a count under the respective icon and as a geolocation point on the map. With Citi Map, users may easily collect timestamped, geolocation data of their interest while moving around a city.

Data collected through Citi Map can be visualized through the map interface itself or downloaded as a CSV. The data points saved simply are: Timestamp, GPS Coordinates, Icon Number, and Accuracy of Location Data.

## Requirements

- Node V16.0.0 or higher
- Yarn V1.17.3 or higer

## Basic Usage

1. Clone or fork the Citi-Map repository.
2. Run `yarn install` to download the required packages
3. Run `yarn start` to launch the app
4. Click each icon to raise the count of that category. This increments the number below that object and display its location on the map.
5. Click the `Download CSV` button to download your session data.


## How to Customize the App
1. Upload your images to the `src/images/` folder. Name them in a format like `icon1.png`, `icon2.png`, etc. starting your numbering from 1 and up to 4. Note: for best results, use square sized images (e.g. 100 x 100)
2. [WIP] We're still working on a simple way to customize the number of icons you can have. At the moment, the only way is to change the code in JS. For now, you may checkout the branch corresponding with the number of icons you would like. The main branch supports 3 icons.

## Hosting the App on Firebase

The app may be hosted on any platform of your choice. Here is an example of how to host the app and database using Firebase. To follow these steps you need a google account and the firebase CLI installed on your computer (Follow [these instructions](https://firebase.google.com/docs/cli#install-cli-mac-linux) to install firebase cli tools)

1. Create the project on the Firebase console following Step 1 in this [documentation](https://firebase.google.com/docs/web/setup#create-firebase-project-and-app).
2. Go to the Project Settings page in your Firebase console and select the `</>` option to add a web app
<img width="250" alt="Screen Shot 2022-03-06 at 8 10 29 PM" src="https://user-images.githubusercontent.com/5104098/156940765-a4869b01-ab1e-4810-8760-1afbfdb6c5eb.png">
3. Follow the instructions to add Firebase to your web app
<img width="250" alt="Screen Shot 2022-03-06 at 8 10 04 PM" src="https://user-images.githubusercontent.com/5104098/156940778-824cbdde-f2e2-4a9b-b04f-f943539a1235.png">

- Note: make sure to use `yarn add` instead of `npm install` for installation

4. Run `yarn add firebase` on the command line
5. Set up the firebase command line tools following this [documentation](https://firebase.google.com/docs/cli#install-cli-mac-linux)
6. Select the `Hosting options for Firebase CLI features

- Select `Use an existing project` and connect to the project you created in step 1.
- Choose `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
- Use `build` as your public directory
- Yes, configure as a single-page app

7. Run `yarn build` to compile the project and prepare for deployment
8. Run `firebase deploy` to deploy the app

## Connecting the App with a database

### Using a firebase realtime database

1. First, make sure you have the project in your Firebase console. If not please refer to Hosting the App on Firebase section of this page
2. Create a new file `config.js` in the `/src` folder of the app
3. Copy the config information provided on your Project settings page in the `/src/config.js` file. Here's an example of the content of the file with some random values:

```
export const firebaseConfig = {
  apiKey: "123",
  authDomain: "456",
  databaseURL: "789",
  projectId: "123",
  storageBucket: "456",
  messagingSenderId: "789",
  appId: "123"
  measurementId: "456"
};
```
4. In `App.js` uncomment the firebase imports
5. In `App.js::updateData` uncomment the following lines:

```
const firebaseApp = firebase.initializeApp(firebaseConfig);
```
and
```
 firebaseApp.database().ref('/').push(body);
 ```
 This is what will be used to push to the database
 
6. On the Firebase console, go to the Realtime Database page and select Create Database to start logging data.
7. Choose whether you want a test database or a production ready one (Start with test in order to test logging data)
8. Choose a suitable region for your project (If most of the users will be in the US, choose US-central-1, for example)
9. Now, if you log data through your app, you should be able to see them in the firebase realtime UI (See attachment below)

<img width="935" alt="Screen Shot 2022-03-10 at 10 22 11 AM" src="https://user-images.githubusercontent.com/26043344/157693849-81603631-9fd6-4f2b-9e61-eb1f32fa74fd.png">

10. Enjoy collecting and analyzing your data!🚀


## Examples

- [Mask Map](https://maskmap.us) was the first iteration of Citi Map. The project's goal was to collect real-time mask behavior data around NYC in 2020 and 2021. 20,000+ data points collected in this time period demonstrated the changes in mask wearing practices across space in time. Learn more about the project results [here](https://jending.medium.com/to-all-the-masks-ive-loved-c72331644fb0).
- [Street Lighting Map](https://street-lighting-map-90b94.web.app/) A tool to log the street lighting levels in different areas around a city. This data can be used to map out safe paths for walks at night.
- [Street Art Locator](https://street-art-locator-1b6fc.web.app/) A tool to collect data about artists performing in your streets. It supports logging data for musicians, performers and painters
