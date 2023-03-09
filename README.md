
# Happy Commuter

![mobile-responsiveness](/img/mobileres.png)

The live demo of the website can be accessed [here](https://happy-commuter-mrt.netlify.app/)

## Project Summary

### Project Context

Happy Commuter by MRT is a mobile responsive web application with an interactive map that allows users to explore bars, restaurants, and gyms located near MRT stations across Singapore.

### Target Audience

The target audience for the app is locals of all ages who need to travel more than two hours round trip every day for work or college. 

The app is also suitable for those who want to explore areas of Singapore that they are not familiar with.

### Justification for the App 

As a full-time employee and now as a full-time student, I am always looking for bars and restaurants where I can hang out with my former colleagues and classmates. Before meeting them, I like to attend the gym in order to maintain a healthy lifestyle. Thus, the Bugis MRT station has become the central meeting point for us to hang out before heading back home. It divides my travel time in half and makes commuting less boring.

This example could be applied to other MRT locations, depending on where you live, work, and study. The app aims to help everyone find bars, restaurants, and gyms to explore in this beautiful city.

## UX/UI

### Organizational Goals

The app aims to promote local bars, restaurants, and gyms by providing a platform for users to discover them along their commuting journey. Organizations can also notify users of special promotions at their collaborating bars and restaurants.

### User Goals

Users want to know where they can hang out. The app provides the names and locations of bars, restaurants, and gyms near MRT stations. Users can also filter the places they want to go to using checkboxes between bars, restaurants, and gyms.

### User Stories

| User Story | Acceptance Criteria |
| ----------- | ----------- |
| I want to easily locate a bar, restaurant and gym nearby MRT. | Search function with fly into MRT map |
| I want to filter the category of places I am interested into narrow down my options. | Feature to checkboxes of 3 categories of selection |
| I want to know the current weather condition.| Feature to show 2hr weather nowcast in the map |
| I want to easily find food nearby and not walk too far after visiting an attraction. | Feature to show nearest places sorted by distance from MRT  |

### Color Reference

Landing page with dim image and map with dark mode in order to let user find reading easier in low light with less eye strain. Also it will brighten below color code for main landing page "Search Now", "Notify Me" and map page search logo.

Example Color  ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a 

### Fonts

Roboto and sans serif are selected for a clean and cutting edge look to make it easy on the user's eyes.

### Icons & Markers

The colors of all icons and markers are selected to match the dim & dark scheme of the app for consistency. This provides a contrast.

## Features

| Feature | Description |
| ----------- | ----------- |
| Search for MRT by name | Users can search for any MRT attraction by its name.  |
| Display a certain category of places on the map | Users can choose to show only the layers they wish to see to reduce cluttering on the map. |
| Display weather forecast | Users can check the 2-hour Nowcasts before making a trip down  |
| Display useful information of an attraction | When users click on the marker of a place, it will  open up to show the name and address. |
| Reset map | This feature removes all layers and markers from the map so that it is empty. |
| Display nearby places| This feature will display up to 10 places for each cataegories nearby MRT |
| Email marketing form | This feature allows users to submit their name and email to receive marketing information. The form is designed with validation rules to prevent invalid inputs from being submitted. |

## Limitations & Future Implementations

| Limitation | Future Implementation |
| ----------- | ----------- |
| Users might not know how to get to the places from their current MRT location. | Provide a routing service to guide them to their desired destination. |
| Users might want more fun and interaction. | Create a random place generator for user who are spontaneous enough to try any places. |

## Technologies Used

1. HTML5
2. CSS3
3. Javascript
4. [Bootstrap v5.2](https://getbootstrap.com/) to structure layout of website and Carousel
5. [Leaflet](https://leafletjs.com/examples/quick-start/) for map
6. [MarkerCluster](https://leafletjs.com/examples/quick-start/) for  marker clustering for leaflet
7. [Axios](https://foursquare.com/) for getting API and promise functions
8. [Axios](http://www.weather.gov.sg/weather-forecast-2hrnowcast-2/) for getting API and promise functions
9. [Font Awesome](https://fontawesome.com/icons) to input icons
10. [Google Fonts](https://fonts.google.com/) to select font family

## Deployment

The web application is hosted using [Netlify](https://www.netlify.com/), deployed directly from the main branch of this GitHub repository. For the detailed deployment steps, you may refer [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

## Credits & Acknowledgement

- https://developer.foursquare.com/ for data on nearby places
- Fontawesome icon - to embelish the website with - icons throughout for better UI UX
- Google fronts - to set the primary and secondary font types
- Foursquare for getting API and promise functions
- (http://www.weather.gov.sg/weather-forecast-2hrnowcast-2/) for getting API and promise functions




