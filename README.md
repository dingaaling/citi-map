<img width="150" alt="cm_logo" src="https://user-images.githubusercontent.com/5104098/154332677-f2d7f2a9-3653-4679-a579-69912745df25.png">

# Citi Map: Urban Data Collection & Mapping Tool

Citi Map is a React template for creating a web app to collect on-the-ground data to visualize on a map. The tool allows users to click on icons that represent categories of items or behaviors occurring around them. For example, presence of trash piles, cherry blossoms in bloom, or mask wearing behavior, as seen in the example below. By clicking on the icon that represents the occurrence, the user logs a count under the respective icon and as a geolocation point on the map. With Citi Map, users may easily collect timestamped, geolocation data of their interest while moving around a city. 

Data collected through Citi Map can be visualized through the map interface itself or downloaded as a CSV. The data points saved simply are: Timestamp, GPS Coordinates, and Icon Number.

## Requirements

- Node V16.0.0 or higher 
- Yarn V1.17.3 or higer 

## Getting Started

1. Clone the repo (or branch) template depending on the number of items you plan to log (`trash_map_1object` - 1 item, `sound_map` - 2 items, `main` or `trash_map` - 3 items, `light_map` - 4 items)
2. Run `yarn install` to download the required packages
3. Upload your images to the `src/images/` folder. Name them in a format like `icon1.png`, `icon2.png`, etc. starting your numbering from 1 and up to 4. Note: for best results, use square sized images (e.g. 80 x 80)
4. Run `yarn start` to launch the app
5. Click each image to raise to log an instance of that category. This should increment the count below that object and display its location on the map.
6. Click the `Download CSV` button to download your session data.

## Hosting the App

The app may be hosted on any platform of your choice. Here, is an example of how to host it through Firebase. For more details, refer to [Firebase documentation](https://firebase.google.com/docs/web/setup).
1. Run `yarn add firebase`
2. Run `firebase init` on the command line and work through the prompts
3. Run `yarn build`
4. Run `firebase deploy`

## Connecting to a Database

[TODO]

## Examples

![Mask Map Screenshot](https://user-images.githubusercontent.com/5104098/154335000-b60abd1e-fb4e-4ca4-bfad-fc354d20cb7b.png)

[Mask Map](https://github.com/dingaaling/mask-map) was the first iteration of Citi Map. The project's goal was to collect real-time mask behavior data around NYC in 2020 and 2021. 20,000+ data points collected in this time period demonstrated the changes in mask wearing practices across space in time. Learn more about the project results [here](https://jending.medium.com/to-all-the-masks-ive-loved-c72331644fb0).
