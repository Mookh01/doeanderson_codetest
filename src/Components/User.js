import { FaAddressBook, FaBirthdayCake, FaMap, FaPhoneAlt, FaKey} from "react-icons/fa";
import { AiTwotoneMail} from "react-icons/ai";
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
                    return display = <p>PARTY</p>;
                case 'email':
                    return display = <p>EMAIL</p>;
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
                <h2 className='address' onClick={() => this.setState({iconSelected : "address"})}><FaAddressBook/></h2>
                <h2 className='email' onClick={() => this.setState({iconSelected : "email"})}><AiTwotoneMail/></h2>
                <h2 className='dob'><FaBirthdayCake/></h2>
                <h2 className='map'><FaMap/></h2>
                <h2 className='phone'><FaPhoneAlt/></h2>
                <h2 className='key'><FaKey/></h2>
            </div>
        </div>
            <div className="grid_item">
                <div>{display}</div>
                {/* <div>{this.state.handleClickedIcon}</div> */}
            {/* <p>{this.state.data.results[0].location.street.number} &nbsp; {this.state.data.results[0].location.street.name}<br></br>
                    {this.state.data.results[0].location.city}, {this.state.data.results[0].location.state}<br></br>
                    {this.state.data.results[0].location.country} {this.state.data.results[0].location.postcode}</p>
                <p>{this.state.data.results[0].email}</p>
                <p>{this.state.data.results[0].dob.date}</p>
                <p>latitude: {this.state.data.results[0].location.coordinates.latitude} | longitude: {this.state.data.results[0].location.coordinates.longitude}</p>
                <p>cell:{this.state.data.results[0].cell} | home:{this.state.data.results[0].phone} </p>
                <p>IDName:{this.state.data.results[0].id.name} | Value:{this.state.data.results[0].id.value} </p>  */}
            </div>
        </>
      );
    }
}