<img width="150" alt="cm_logo" src="https://user-images.githubusercontent.com/5104098/154332677-f2d7f2a9-3653-4679-a579-69912745df25.png">

# Citi Map: Urban Data Collection & Mapping Tool

Citi Map is a React template for creating a web app for collecting on-the-ground data and visualizing on a map. The tool allows users to click on icons that represent categories of items or behaviors occurring around them. For example, presence of trash piles or the mask wearing behavior of people around them, as seen in the example below. By clicking on the icon that represents the occurrence, this is logged as a count under the icon and as a geolocation point on the map. With Citi Map, users may easily collect data of their interest while moving through a city. 

Data collected through Citi Map can be visualized through the map interface itself or downloaded as a CSV. The data points saved simply are: Time, GPS Location, and Icon.

## Getting Started

1. Clone the repo and run `yarn install` to download the required packages
2. Select the images you'd like to represent your categories for data collection. Name them in a format like `icon1`, `icon2`, etc. starting your numbering from 1 and up to 6. Move the images to the `src/images/` folder
3. Run `yarn start` to launch the app
4. Click each image to raise to log an instance of that category. This should increment the count below that object and display its location on the map.

## Hosting the App

The app may be hosted on any platform of your choice. Here, we will provide an example of how to host it through Firebase. 
1. Run `firebase init` on the command line and work through the prompts
2. Run `yarn build`
3. Run `firebase deploy`

## Connecting to a Database

[TODO]

## Examples

![Mask Map Screenshot](https://user-images.githubusercontent.com/5104098/154335000-b60abd1e-fb4e-4ca4-bfad-fc354d20cb7b.png)

[Mask Map](https://github.com/dingaaling/mask-map) was the first iteration of Citi Map. The project's goal was to collect real-time mask behavior data around NYC in 2020 and 2021. 20,000+ data points collected in this time period demonstrated the changes in mask wearing practices across space in time. Learn more about the project results [here](https://jending.medium.com/to-all-the-masks-ive-loved-c72331644fb0).
