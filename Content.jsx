import React from 'react';

class Content extends React.Component {
	render(){
   	  var myContent = {
   	  	fontSize: 50,
   	  	color: 'green'
   	  }
		return (
			<div>
				<p style = { myContent }>Main Content....</p>
			</div>
		);
	}
}

export default Content;