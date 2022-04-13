## Project 2

### Description
- The project loads data from data.json file into the index.html file. The index.html file contains a form along with a number of filters to filter data and show in the table.

### UI
- Created index.html file which contains a form along with the table which contains all the data being loaded from the data.json file.
- The form has multiple filters with which each field of the table can be manipulated.
- 1st Filter has a select option with values (Id, Name, Email, Role, Construction Code, Department, Card Number). You may select any one option and filter data based on the selected option.
- 2nd Filter is a radio button group with which you can select the status of the contractor, either active or inactive. If none is selected, both the status are considered.
- 3rd Filter is a checkbox where you can select the type of card you want to filter. You can select mastercard, american express or even both. By default, both of the card types are considered.
- 4th Filter is a range where you can set the min and max amount. All the rows falling between the selected range will be filtered based on the material cost.
- 5th Filter is the material type which contains the name of all the materials. You can select any particular material name which you want to filter.

### Logic
- getAllContractors function accepts multiple parameters and filters the data based on those parameters.
- getContractorById function accepts contractorId as a parameter and returns contractor with the provided Id.

### Architecture
- api folder contains the controller folder and the data folder
- controller folder has the functions which implement the login
- data folder has the data file from where the data is fetched
- styles folder the css file for index.html file.
- main.js file is responsible for loading the data using the controllers.
- dist folder has the bundle.js file which bundles everything together since Browser can only read html.