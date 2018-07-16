import React from 'react';

class Banner extends React.Component {
	render(){
   	  var myBanner = {
   	  	fontSize: 80,
   	  	color: 'orange'
   	  }
		return (
			<div>
				<h1 class="text-center" style = { myBanner }>ReactJS Component examples</h1>
			</div>
		);
	}
}
class Header extends React.Component {
	render(){
	 	return(
	 		<div>
	 			<h1>Header</h1>
			</div>
	 	);
	}
}
class Content extends React.Component {
	render(){
	 	return(
	 		<div>
	 			<h1>Content</h1>
	 			<p>Content Text!!!</p>
			</div>
	 	);
	}
}
export default Banner;