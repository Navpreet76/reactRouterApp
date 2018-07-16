import React from 'react';

class Conclusion extends React.Component {
	render(){
   	  var myConclusion = {
   	  	fontSize: 60,
   	  	color: 'blue',
   	  	backgroundColor: 'lightgray'
   	  }
		return (
			<div>
				<h2 style = { myConclusion }>Conclusion is here</h2>
			</div>
		);
	}
}

export default Conclusion;