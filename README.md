# CovidHub

Welcome to CovidHub! Your personal hub for all things COVID-19!

The coronavirus has upended our lives and sent the world into a lockdown mode. The aim of this website will be to provide informative and helpful information on the coronavirus including number of cases, deaths, a map graphic, and a personal survey. To use our app, simply explore the Home page and use the navigation bar at the top to be directed to the different features. Explore the About page to learn more about the team behind the app.

This project was bootstrapped with [Creat React App](https://reactjs.org/)!

## The CovidHub Team:
* [Spencer Nielsen](https://github.com/amazingspencer)
* [Samuel Hernadez](https://github.com/SamuelSHernandez)
* [Hayden Tinker](https://github.com/tinktink1)
* [Samuel Nguyen](https://github.com/samuelnguyen316)

# Development Process:

See Stage-7 notes at the bottom, for the latest updates on what has been added!

## Stage-2 Improvements

For stage-2, CSS and more HTML has been added to improve the overall look and functionality of the site. In particular, several features have been added to increase the design complexity of the site.

### New site features:
* Parallax scrolling
* Bootstrap navbar with custom styles
* Extensive iconography using Font Awesome in navbar
* Responsive containers using Bootstrap
* Bootstrap card with styled contact button
* Box shadows around images
* Various styling adjustments (i.e. fonts, and background colors)

## Stage-3 Improvements

Currently, Survey.js and Google Map Coronavirus API are not functional as the code was unable to pass the test suite with jest.

### Survey.js

To implement the survey, I utilized Survey.js, which allowed me to create and set up my survey at https://surveyjs.io/create-survey. Once set up, I included the necessary JavaScript and HTML code to make it appear within the website. This was a fantastic way of adding a survey to my site. I saved a ton of time and created something that looks good on both mobile and desktop.

### Google Map Coronavirus API
#### Implemented by Samuel Hernadez

As part of the coronavirus web application, Samuel Hernadez was able to implement a Google Map API that shows the user coronavirus stats for each country. The user views this information by clicking on a blue dot that is found within the borders of the country. The idea of utilizing a map like this, is to give users of the site an idea of how other countries are doing with the coronavirus.

### World Case Numbers using Coronavirus API

For the page on cases, the same Coronavirus API was used to retrieve the data on the current world numbers for coronavirus around the world. The "Show Cases by Country" button provides a list of all the countries and their provinces along with a case count. The button can be used to toggle the list from visible and not visible.

## Stage-4 Improvements

For this stage of the project, more improvements have been made and some issues with the last stage have been resolved.

### [Survey.js](https://surveyjs.io/create-survey) Updates

Survey.js is now working appropriately and is passing the tests with jest. The survey has also been styled to look more in line with the rest of the site. A link has been added to Survey.js survey creator in the title.

### Google Map Coronavirus API Updates

The map feature is undergoing bug fixing and being revised to pass the jest tests. It is still unable to pass the testing at this time. (10/28/2020) Samuel Hernadez and Hayden Tinker are actively working on this solution.

### Last Updated Header Added Using [Lodash](https://lodash.com/)

To fulfill stage-4 requirements, Lodash has been used to implement a header that informs the user when the data was last updated. This will be helpful, as it will put confidence in users that the coronavirus data presented is up to date and accurate. Lodash functions used were "_.sample" and "_.truncate". A link has been included to the Lodash Library in the title.

## Stage-5: Testing

For Stage-5, our team has added tests to ensure that our website is functioning as it should. We have added tests for all HTML files to check that content is present and styled appropriately. We have also added tests for some of our functionality, in particular, the "Cases" page.

### Contributions:

Our team's contributions are listed below:
* Samuel Hernadez - Full map functionality ("Map" page), implemented Google Map along with Coronavirus API, and added test for this aspect.
* Hayden Tinker   - Helped add tests for HTML and CSS content.
* Samuel Nguyen   - Currently working on a user form and testing for this aspect.
* Spencer Nielsen - Added case functionality to view case totals ("Case" page), added survey from Survey.js ("Survey" page), and added tests for HTML, CSS, and JS content.

## Stage-6: Complete Site Overhaul with [React](https://reactjs.org/)!

For Stage-6, our team's task was to rebuild our site with the React JavaScript library. Here are the improvements:

### Improvements

#### Client-Side Routing

To enable our site to behave like a normal website, client-side routing was added.
One issue that came up with this, however, was Github Pages. Luckily, these awesome [guys](https://github.com/rafgraph/spa-github-pages) provided a way for us to utilize client-side routing and Github Pages. The trick they used, was to force Github Pages to keep retrieving the same resource (index.html) everytime a new component was clicked on. This way when you click on a nav tab, Github attempts to access what is there, finds a 404.html file (part of the trick), then gets its url modified to be what the component is expecting. Thus, the component appears. I am very thankful for this workaround and ease of use.

### Improved About page

In previous stages, our About page was looking very lackluster and I (Spencer Nielsen) was the only one on it. However, this is all changed with much improved styling updates and the rest of the team has been added using their images from ASWWU's Mask!

### Other Styling Changes

In addition to revamping the About page, the Cases page gained a brand new table that renders when you click on the button! A table was also added to the Home page for the timeline.

## Stage-7: Final Website - CovidHub

The site has been updated and rehauled even further. The Map page should now be working as intended and other pages have also gotten some upgrades. The Survey page has been rebuilt from the ground-up and now uses all original code in conjuction with client-side routing and nested routes. In addition, many other styling changes have been made.

### Survey Page Specifics:

The Survey page was rebuilt from the ground up. This was in large part due to accessibility requirements and now fits in with the overall theme of the site. Nested routes are used to direct the user to specific resources that can help them based on how they are feeling. The Survey page uses one button that both starts and restarts the survey as needed!

#### Specific Improvements:
* Added a team name
* Fixed parallax feature
* Disabled parallax feature for mobile devices
* Changed Timeline to nice table
* Updated footer with special message from the team
* Added handy loading spinners for Cases page
* Turned ugly unordered list on Cases page into nice table
* Added responsiveness to the About page
* Addressed accessibility issues throughout the site