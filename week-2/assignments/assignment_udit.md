# Assignment 1

1. The [<effective Date>03/12/2016</effective Date>] cannot contain space in between the xml element and so, removing the space solves the issue.

2. CDATA or character data is used in the description tag which considers everything inside it as a string. Hence, whenever you wish to display a string, use CDATA.

3. ![Student Name and Id](./comment.JPG)

4. - <?xml version="1.0" encoding="UTF-8" standalone="yes" ?> - is the prolog statement.
   - <menuInfo>
        <title>Chester's Breakfast Menu</title>
        <summary>
            <![CDATA[
            If you've been craving an authentic homestyle country breakfast,
            look no further than Chester's!  We've got your breakfast favorites served
            up just the way you like them!!
            ]]>
        </summary>
        <effectiveDate>03/12/2016</effectiveDate>
        <menu>
            <category>Traditional Favorites</category>
            <menuItem>
            <itemName>
                <originalName> Rise n' Shine</originalName>
                <oldName> Shine </oldName>
            </itemName>
            <description>
                <![CDATA[
                Two Eggs* cooked to order with Grits, Gravy and Homemade Buttermilk
                Biscuits along with real Butter and the best fresh jam
                available. Served with your choice of Fresh Fruit or Hashbrown Casserole
                and Smoked Sausage Patties, Turkey Sausage Patties or Thick-Sliced Bacon.
                ]]>
            </description>
            <price>7.95</price>
            </menuItem>
            <menuItem>
            <itemName>
                <originalName> Fresh Mornin' Sampler </originalName>
                <oldName> Mornin' Sampler </oldName>
            </itemName>
            <description>
                <![CDATA[
                Low-Fat Vanilla Yogurt and Seasonal Fruit topped with our Honey Granola
                mix of Almonds and Dried Fruit. Served with a Wild Maine Blueberry Muffin
                or an Apple Bran Muffin.
                ]]>
            </description>
            <price>6.95</price>
            <indicator>&#9829;</indicator>  <!-- heart healthy -->
            <indicator>&#9830;</indicator>  <!-- low-sodium -->
            <indicator>&#9824;</indicator>  <!-- vegan -->  
            </menuItem>
        </menu>
        <menu>
            <category>Lite and Quick</category>
            <menuItem>
            <itemName>
                <originalName> Oatmeal Breakfast </originalName>
            </itemName>
            <description>
                <![CDATA[
                Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins,
                Fresh Sliced Bananas or 100% Pure Natural Syrup. Also, served with your
                choice of Apple Bran Muffin or Wild Maine Blueberry Muffin. Available
                all day.
                ]]>
            </description>
            <price>6.95</price>
            <indicator>&#9829;</indicator>  <!-- heart healthy -->
            <indicator>&#9830;</indicator>  <!-- low-sodium -->
            <indicator>&#9824;</indicator>  <!-- vegan -->  
            </menuItem>
            <menuItem>
            <itemName>
                <originalName> Chester's Meat Platter </originalName>
                <oldName> Chester Platter </oldName>
            </itemName>
            <description>
                <![CDATA[
                Country Ham, Pork Chops or Steak* grilled to order, Three Eggs* cooked
                to order served with Cottage Cheese, Smoked Sausage Patties, Turkey
                Sausage Patties or Thick-Sliced Bacon.
                ]]>
            </description>
            <price>12.95</price>
            <indicator>&#9832;</indicator>  <!-- Low-carb -->
            </menuItem>
        </menu>
    </menuInfo> - this entire part is the document body.

    - Student Name and Student Id comment at the bottom is the epilog of the document.
    - There are no processing instructions as of the 5th point. There will be once 7th point is implemented in the document.

5. ![](./step-7.JPG)

6. ![Screenshot for the validation of the assignment-1.xml file](./assignment-1.JPG)

7.  ![](./step-7.JPG) 
    ![](./step-7b.JPG)