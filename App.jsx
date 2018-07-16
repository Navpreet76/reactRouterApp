import React from 'react';

class App extends React.Component {
   render() {
   	  var myStyle = {
   	  	fontSize: 70,
   	  	color: '#00FF7F',
   	  	backgroundColor: 'gray',
   	  		
   	  }

      return (
         <div>
         <h1 class="text-center" style = { myStyle }>ReactJS Components</h1>
         
        </div>
      );
   }
}
export default App;