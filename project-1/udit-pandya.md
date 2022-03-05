- Everything is developed by me since I am the only one in the group.

- Implemented the Logic for Gender filter and Department filter by first getting paramters from the url. Then checking on which gender has been selected and filtered those records/items from the array and passed on the filtered array for further querying. Similarly, with the help of params.getAll('name') method, received all the departments selected and then ran a loop which further filters down my 'filteredData' array.

- Developed dynamic query structure based on filters applied. First, created a 'filteredData' array which is a copy of the main data set and applied all the above mentioned steps on the 'filteredData' array which in last is passed as the final result array.

- Developed the form with the required form filters such as Gender Radio Button, Department Checkboxes, Contact Type checkboxes, Input field to filter by name and contact number etc. Created a proper table structure keeping a neat and clean UI in mind.

- Handled dynamic UI and form creation as well as submission events.Everytime the form is submitted the UI has to be updated. With the help of map method, I took each item parameters and passed to create a new row using the 'htmlToElement' function, which in turn created the html element resulting into a table child.

- Form reset and submit events. On form submit, extracted the params from the url using 'URLSearchParams(window.location.search);'. Created a new object called 'params' which provides different methods to fetch all the parameters as well as their values. On form reset, simply setting the original url and data at the same time. [window.location = 'http://127.0.0.1:5500/project-1/employee.html']

- Function to render table. With the help of xmlData from the loadData method, extracted all the necessary and needed information and mapped each item as the table child by creating an html element out of it.

- Developed XSD for the xml file. Created an XSD schema for the employee.xml file. Added all the attributes as the <xs:attritbute> tag and the main tag names with the <xs:element>tag. Created a complexType for each tag with attribute and gave them appropriate names.

- Added data for the xml file along with required tags as well attributes. Generated dummy data to be filtered while querying.