# Course Project

This repository contains practice exercises for the _Web Application Development_ at WWU.
It has been adapted from _Client-Side Web Development_ course at the UW iSchool.

The site can be viewed at <https://wwu-cptr220-a20.github.io/project-yourusername/>

# Coronavirus Web Application

The coronavirus has upended our lives and sent the world into a lockdown mode. The aim of this website will be to provide informative and helpful information on the coronavirus including number of cases, deaths, a map graphic, and reliable articles. The website presented currently explores this and other possible web applications that could be made in light of the coronavirus.

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
