import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App.jsx';
import Banner from './Banner.jsx';
import Navigation from './Navigation.jsx';
import Content from './Content.jsx';
import Conclusion from './Conclusion.jsx';
import Footer from './Footer.jsx';
import Welcome from './Welcome.jsx';
import Timer from './Timer.jsx';
import Todo from './Todo.jsx';
import MarkdownEditor from './MarkdownEditor.jsx';
import UsernameChange from './UsernameChange.jsx';
import About from './About.jsx';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Banner />, document.getElementById('app2'));
ReactDOM.render(<Navigation />, document.getElementById('app3'));
ReactDOM.render(<Content />, document.getElementById('app4'));
ReactDOM.render(<Conclusion />, document.getElementById('app5'));
ReactDOM.render(<Footer />, document.getElementById('app6'));
ReactDOM.render(<Welcome name="Navpreet" />, document.getElementById('app7'));
ReactDOM.render(<Timer />, document.getElementById('app8'));
ReactDOM.render(<Todo />, document.getElementById('app9'));
ReactDOM.render(<About />, document.getElementById('app10'));
