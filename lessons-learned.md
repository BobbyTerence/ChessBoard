## Learning and Resources
### DOM
  **Resources:**<br>
	- [W3 Schools](https://www.w3schools.com/js/js_htmldom.asp)

  **What is the DOM**
 	<p>The Document Object Model (DOM) is what programming languages (*like JavaScript*) use to modify HTML elements, and their properties.
	When working with the DOM, you can use methods to perform actions on Elements, and the values used within those methods are then applied to the corresponding element's properties.</p>
		<ul>
            <li>These properties include small things like text-size, or they can completely change the content of the element using the .innerHTML property.</li>
        </ul>

  **Accessing the DOM**
 	<p>To utilize JavaScript to manipulate content on your HTML page, you want to use the *document* object. The use of this object allows you to find specific elements by using one of three methods.</p>
    <ol>
        <li>document.getElementById(*id*)</li>
        <ul>
            <li>This is the most specific one, as you can only have one unique id in your document, when specified.</li>
        </ul>
        <li>document.getElementsByTag(*tag*)</li>
        <ul>
            <li>This will grab all elements belonging to one tag, which would allow to make large, sweeping changes across the document, depending on the tag.</li>
        </ul>
        <li>document.getElementsByClass(*class*)</li>
        <ul>
            <li>This grabs all elements belonging to a particular class.</li>
        </ul>
    </ol>

[Back](https://github.com/BobbyTerence/ChessBoard)