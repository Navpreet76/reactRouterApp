import React from 'react';

class Footer extends React.Component {
	render(){
   	  var myFooter = {
   	  	fontSize: 60,
   	  	color: 'lightgray',
   	  	borderRadius: 10,
   	  }
		return (
			<div>
				<h2 style = { myFooter }>Footer</h2>
			</div>
		);
	}
}

export default Footer;