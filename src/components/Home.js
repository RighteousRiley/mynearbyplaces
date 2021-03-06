import React from 'react';
import Login from "./Login";
import Search from './Search';
import Add from './Add';
import { Link, Redirect } from 'react-router-dom';
import { Jumbotron, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import applePic from '../images/apple.jpg';
import lair from '../images/lair.jpg';
import taco from '../images/taco.jpg';
import wildcat from '../images/wildcat.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
            authenticated:false,
            username: "",
            places : [
                {
                    name: "Applebee's Grill + Bar",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "5870 East Broadway",
                    phoneNum: "(520) 750-9780",
                    type: "American, Sports Bar",
                    thumb: applePic
                },
                {
                    name: "Joey's Taco Shop",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "123 South Campbell",
                    phoneNum: "(520) 125-1538",
                    type: "Mexican, Small Plates",
                    thumb: taco
                },
                {
                    name: "Wildcat Kitchen",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "1658 N Cherry Ave",
                    phoneNum: "(520) 986-8943",
                    type: "Variety, Grill",
                    thumb: wildcat
                },
                {
                    name: "Roger's Lair",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "123 S Kent St",
                    phoneNum: "(520) 712-7649",
                    type: "BBQ, American",
                    thumb: lair
                }
            ],
            cursor: 0 // current index in list of quizzes 
        };
    }

    login = () => {
        this.setState({
            loggedIn: true
        });
    }
    
    body = () => {
        return(
            <div className="content">
                <Link to={{pathname:'/add', state: {places: this.state.places}}}>Add a Place</Link><br/>
                <Link to={{pathname:'/delete', state: {places: this.state.places}}}>Delete a Place</Link><br/>
                <Link to={{pathname:'/search', state: {places: this.state.places}}}>Find a Place</Link><br/>
            </div>
        )
    }
    
    addPlace = (placeObj) => {
        var joined = JSON.parse(JSON.stringify(this.state.places))
        this.setState(
            {
                places: joined
            }
        )
    }

    getPlaces = () => {
        let arr = [];
        for(let curr in (this.state.places)) {
                arr.push(curr);
        }
        return arr;
    }

    nav = () => {
        return (
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">MyNearbyPlaces</Navbar.Brand>
                    <Nav.Link as={Link} to={{pathname: '/', state: {username: this.state.username, authenticated: true}}}>Home</Nav.Link>
                    <Nav.Link as={Link} to={{pathname: '/add', state: {places : this.state.places, addPlace: this.addPlace, test:""}}} >Add a Place</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Welcome, {this.state.username}</Nav.Link>
                </Nav>
            </Navbar>
        )
    }

    searchTextHandler = (search_query) => {
        
    }

    render () {
        if(this.props.location) {
            if(this.props.location.state) {
                if(this.props.location.state.username && this.state.username != this.props.location.state.username) {
                    this.setState(
                        {
                            username: this.props.location.state.username,
                            authenticated: this.props.location.state.authenticated
                        }
                    )
                }
            }
        }

        return(
            <div>
                <body>
                <div id="navigation-bar">
                    <div className="username">
                        {(this.state.username.length > 0) ? <div className="username">{this.nav()}</div> : <div id="notLogged"><Login /></div>}
                    </div>
                </div>
                <Jumbotron className="hero">
                    <h1>Welcome to Mynearbyplaces!</h1>
                    <p>
                        Here one can find a multitude of nearby restaurants. All kinds of cultural
                        cuisines and recipe in your local area can be found today!
                    </p>
                </Jumbotron>
                <hr/>
                    <div>
                        <Search places={this.state.places} searchTextChanged={this.searchTextHandler}/>
                        <br /><hr /><br />
                        <Add places={this.state.places} searchTextChanged={this.searchTextHandler}/>
                    </div>
                </body>
            </div>
        
        )
        
    }
}
export default Home;