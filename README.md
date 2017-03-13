#Order-list
This application is intended for receiving orders from the server, including their sorting and filtration.

###Module  <code>orders.js</code>
<b>Properties:</b><br>
<code>initialState</code> stores a data object received from the server when the application is initialized.<br>
<code>filtered</code> stores a filtered object.<br>
<br>
<b>Methods:</b><br>
<code>filter</code> records filtered data to filtered property and resets state if data is not filled.<br>
<code>sortInitialStateDesc</code> sorts and shows initial state of an object in descending order.<br>
<code>sortInitialStateAsc</code> sorts and shows initial state of an object in ascending order.<br>
<code>sortFilteredDesc</code> filters and shows data in descending order.<br>
<code>sortFilteredAsc</code> filters and shows data in ascending order.<br>
<code>showFilteredOrders</code> shows data without sorting<br>
<code>addOrders</code> the method draws an object on the form. The object (this.initialState || this.filtered) is taken as an argument.<br>
<code>formatDate</code> the data format is based on a technical project. The line with the data is taken as an argument.<br>
<code>sortDesc</code> sorting in descending order.<br>
<code>sortAsc</code> sorting in ascending order. Both methods are basically used as a callback for the method .sort<br>
