import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import TopNavigation from "./TopNavigation"; 

const mapStyles = {
  width: '80%',
  height: '80%'
};


class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      currentLat: 17.4699,
      currentLong: 78.3578
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
     this.setState({ currentLat: position.coords.latitude, currentLong: position.coords.longitude });
    })

    
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("Insidessss again");
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    //   debugger;
    //   this.setState({ currentLat: position.coords.latitude, currentLong: position.coords.longitude });
    // });

     
    
  }

  render() {
    return (
      <div>
        <TopNavigation />
             <h1>Navigator</h1>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.state.currentLat,
            lng: this.state.currentLong
          }}
          centre={{
            lat: this.state.currentLat,
            lng: this.state.currentLong
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }

  // state = {
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {},
  // };

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  // onMapClicked = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     })
  //   }
  // };

  // render() {
  //   return (
  //     <div>
  //     <TopNavigation />
  //           <h1>Navigator</h1>

  //     <Map google={this.props.google} zoom={14}>

  //       <Marker onClick={this.onMarkerClick}
  //               name={'Current location'} />

  //       <InfoWindow onClose={this.onInfoWindowClose}>
  //           <div>
  //             <h1>{this.state.selectedPlace.name}</h1>
  //           </div>
  //       </InfoWindow>
  //     </Map></div>
  //   );
  // }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDRXieIlg9bIJnebB_e5fE8uUNp6d9ILms'
})(MapContainer)