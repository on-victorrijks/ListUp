# ListUp 1.0
Easy custom and efficient drop list in js

*Hi*
you thing that html select are too simple and too ugly to use it ? But I have a solution, with ListUp you can easily create custom drop list wwith a lot of features. Just add the .js file to your project, download a .css file or create one and it's done ! The .js file detects automatically all the select with the data-listup attr and generate a new one more beautiful, more useful and more attractive for the user. Even if the list is long, the user has access to a search bar to find exactly the data he needs.

# Functions

There are two main function, both are optional

  - listup_toggle(fID, speed)
  - listup_Frst(res, fID, optVal, slOpt)

### 1. listup_toggle(fID, speed)

--> If you want to toggle a drop list throught a function call

Here's the syntax
```javascript
listup_toggle(fID, speed)
```
So let's explain each of these :

| Name  | Type of info | Posibilities |
| ------------- | ------------- | ------------- |
| fID  | string  | id of the div that contains the drop list |
| speed | number/string  | (number) 0 to toggle without any animation, (number) 1-->infinity to set a custom duration to the animation, (string) default to set the default time to the animation |

### 2. listup_Frst(res, fID, optVal, slOpt)

--> The callback function, it is called after the user clicks on a item in the drop list

Here's the syntax
```javascript
function listup_Frst(res, fID, optVal, slOpt){
// ...
}
```

| Name  | Type of info | Posibilities |
| ------------- | ------------- | ------------- |
| res  | string  |  text in the selected option 
| fID  | string  |  id of the div that contains the drop list of the selected item
| optVal  | array  |  array of all the values from the options
| slOpt  | number  |  number of the selected item in the drop list

# Syntax of a select in the html/php file
```html
<select name="country" data-listup="1" data-debug="1" data-listup-searchbar="Search a country" data-listup-title="Select a country" data-listup-content='content' id="selectCase1" data-listup-doneF="1">
    <option value="1">Belgium</option>
    <option value="2">France</option>
    <option value="3">Germany</option>
    <option value="4">Finland</option>
  </select>
  
<div id="content"></div>
```

## How to version
```html
<select name="country" 
data-listup="1" <!-- Enable the listUp process * -->
data-debug="1" <!-- Enable the debug mode (console.log) -->
data-listup-searchbar="Search a country"  <!-- Enable the search bar (the content is the placeholder of the input) -->
data-listup-title="Select a country"  <!-- the Title of the deop list * -->
data-listup-content='content'  <!-- the id of the div that contains the drop list * -->
id="selectCase1"  <!-- id of the select * -->
data-listup-doneF="1">  <!-- Enable the listup_Frst() function -->

    <option value="1">Belgium</option>   <!-- value == 1 because it's the first option *-->
    <option value="2">France</option> <!-- value == 2 because it's the second option *-->
    <option value="3">Germany</option><!-- ... *-->
    <option value="4">Finland</option><!-- ... *-->
    
  </select>
  
<div id="content"></div> <!-- The div that is going to contains the drop list -->
```

# If you need help 

--> Twitter : https://twitter.com/VictorRijks


# Design

```css
#content {
    width: 500px;
    height: auto;
    max-height: 300px;
    padding: 40px;
    background: #2C2F33;
    position: relative;
    float: left;
    padding-bottom: 5px;
}
.listup-maincontent {
    width: 100%;
    height: 100%;
}
.listup-actBtn {
    background: #23272A;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    width: 96%;
}
.listup-actBtn {
    background: #23272A;
    padding: 5%;
    width: 90%;
    line-height: 15px;
    font-size: 10px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-decoration: unset !important;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    transform: scale(1);
    transition: transform 0.15s;
    z-index: 899;
-webkit-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.0);
-moz-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.0);
box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.0);
cursor: pointer;
}
.listup-actBtn::before{
content: url("down.png");
position: relative;
margin: auto;
width: 30px;
height: 30px;
float: right;
top: -7.5px;
right: -7.5px;
transition: transform 0.4s;
transform: rotate(0deg);
}
.listup-actBtn:hover{
	transform: scale(1.01);
-webkit-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.03);
-moz-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.03);
box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.03);
}
*{
	margin: 0;
	padding: 0;
}
.listup-drop {
position: relative;
float: left;
width: 100%;
padding: 0;
background: #7289DA;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 300;
-webkit-border-bottom-right-radius: 4px;
-webkit-border-bottom-left-radius: 4px;
-moz-border-radius-bottomright: 4px;
-moz-border-radius-bottomleft: 4px;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 4px;
max-height: 200px;
overflow-y: scroll;
}
.listup-drop p{
    position: relative;
    float: left;
    width: 94%;
    padding: 3%;
    font-weight: 400;
    border-bottom: solid 1px #ffffff1a;
    color: #fff;
    transition: color 0.3s;
    cursor: pointer;
    background-color: rgba(255,255,255,0);
    transition: background-color 0.6s;
}
.listup-drop input{
    position: relative;
    float: left;
    width: 94%;
    padding: 3%;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    border: none;
    background: rgba(255,255,255,0.05);
    border-bottom: solid 1px #ffffff1a;
    color: #fff;
    transition: color 0.3s;
    cursor: pointer;
}
.listup-drop p:hover{
	color: lightgrey;
}
```

