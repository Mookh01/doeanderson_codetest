import { FaAddressBook, FaBirthdayCake, FaMap, FaPhoneAlt, FaKey} from "react-icons/fa";
import { AiTwotoneMail, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import React from "react";
export default class User extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data, 
            iconSelected : 'none',
            hereNow: ''
        };      
      }

    render () {
        console.log(this.state.data.results[0].gender);
        console.log(this.state.iconSelected);
        let display = '';
        this.handleClickedIcon =(theIcon) =>{
             
            switch(theIcon){
                case 'address':
                    return display = <p>{this.state.data.results[0].location.street.number}&nbsp; {this.state.data.results[0].location.street.name}<br></br>
                    {this.state.data.results[0].location.city}, {this.state.data.results[0].location.state}<br></br>
                    {this.state.data.results[0].location.country} {this.state.data.results[0].location.postcode}</p>;
                case 'email':
                    return display = <p>{this.state.data.results[0].email}</p>;
                case 'dob':
                    return display = <p>{this.state.data.results[0].dob.date}</p>;
                case 'map':
                    return display = <p>Latitude: {this.state.data.results[0].location.coordinates.latitude} Longitude: {this.state.data.results[0].location.coordinates.longitude}</p>;
                case 'phone':
                    return display = <p>Cell:{this.state.data.results[0].cell} Home:{this.state.data.results[0].phone} </p>;
                case 'key':
                    return display = <p>IDName:{this.state.data.results[0].id.name} Value:{this.state.data.results[0].id.value} </p>;
                    default:
                    return display = <p>FOO</p>;
                }
          }

        if (this.state.iconSelected !== 'none'){
            console.log('MY CASE: ' + this.state.iconSelected);
            this.handleClickedIcon(this.state.iconSelected)
        }
    return (
        <>
        <div className="grid_item">
            <div className="wrapper">
                <div className='address' onClick={() => this.setState({iconSelected : "address"})}><FaAddressBook/></div>
                <div className='email' onClick={() => this.setState({iconSelected : "email"})}><AiTwotoneMail/></div>
                <div className='dob' onClick={() => this.setState({iconSelected : "dob"})}><FaBirthdayCake/></div>
                <div className='map' onClick={() => this.setState({iconSelected : "map"})}><FaMap/></div>
                <div className='phone' onClick={() => this.setState({iconSelected : "phone"})}><FaPhoneAlt/></div>
                <div className='key' onClick={() => this.setState({iconSelected : "key"})}><FaKey/></div>
            </div>
        </div>
         
        <div className="grid_item">  
            <div className='iconDetails'>{display}</div>
            <h3>Hi I'm {this.state.data.results[0].name.first} {this.state.data.results[0].name.last} and I live in the city {this.state.data.results[0].location.city}, in the country of {this.state.data.results[0].location.country} </h3>   
            <div className="social">
                <AiFillTwitterSquare onClick={()=> window.open("https://twitter.com/?lang=en", "_blank")}></AiFillTwitterSquare>
                <AiFillFacebook onClick={()=> window.open("https://www.facebook.com/", "_blank")}></AiFillFacebook>
                <AiFillInstagram onClick={()=> window.open("https://www.instagram.com/", "_blank")}></AiFillInstagram>
            </div>
        </div>
            
        </>
      );
    }
}