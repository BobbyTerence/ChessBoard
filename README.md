# Web Chess Board
In a desire to keep programming while looking for a job, but also to learn a little more about JavaScript, I am creating a webpage to facilitate a Chess game.

##### Table of Contents
- [Objectives](#objectives)
- [Learning and Resources](#learning-and-resources)

## Objectives
 - Become more familiar with JavaScript.
 - Gain a better understanding of what React is doing behind the scenes.
 - Learn more about my personal development process, and possibly pick up more tools to help with a better workflow.

## Learning and Resources
##### DOM
> **Resources:**
	- [W3 Schools](https://www.w3schools.com/js/js_htmldom.asp)

> **What is the DOM**
> 	The Document Object Model (DOM) is what programming languages (*like JavaScript*) use to modify HTML elements, and their properties.
>
> 	When working with the DOM, you can use methods to perform actions on Elements, and the values used within those methods are then applied to the corresponding element's properties.
> 		- These properties include small things like *text-size*, or they can completely change the content of the element using the *.innerHTML* property.

> **Accessing the DOM**
> 	To utilize JavaScript to manipulate content on your HTML page, you want to use the *document* object. The use of this object allows you to find specific elements by using one of three methods.
> 		1. document.getElementById(*id*)
> 			- This is the most specific one, as you can only have one unique id in your document, when specified.
> 		2. document.getElementsByTag(*tag*)
> 			- This will grab all elements belonging to one tag, which would allow to make large, sweeping changes across the document, depending on the tag.
> 		3. document.getElementsByClass(*class*)
> 			- This grabs all elements belonging to a particular class.