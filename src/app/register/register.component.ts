import { MessageService } from './../../message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  lat:any;
  lng:any;
  // constructor(){
    location = {};
    setPosition(position){
       this.location = position.coords;
       console.log(position.coords);
       }


  angForm: FormGroup;
  constructor(private fb: FormBuilder,private messageservice:MessageService) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      email:['',Validators.required],
      upload:['', Validators.required]
   });
 }

 getMessage()
 {
   return this.messageservice.messages;
 }
 reset()
 {
this.messageservice.clear()

this.messageservice.addMessage('Just cleared the message')
console.log('Cleared all the messages')
 }

 done()
 {
  console.log(this.angForm.value);
  this.messageservice.addMessage('Form submitted')
 }

 ngOnInit(): void {
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position => {
//       this.location = position.coords;
//       console.log(position.coords);
//     });

//  }
//  if (!navigator.geolocation) {
//   console.log('location is not supported');
// }
// navigator.geolocation.getCurrentPosition((position) => {
//   const coords = position.coords;
//   const latLong = [coords.latitude, coords.longitude];
//   console.log(
//     `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
//   );
//   let mymap = L.map('map').setView(latLong, 13);

//   L.tileLayer(
//     'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
//     {
//       attribution:
//         'Map data @2021 |<a href="https://www.google.com/intl/en-GB_US/help/terms_maps/"> Terms of Use  | <a href="https://www.google.com/maps/@19.1690776,77.317126,12z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"> Report a map error ',
//       maxZoom: 18,
//       id: 'mapbox/streets-v11',
//       tileSize: 512,
//       zoomOffset: -1,
//       accessToken: 'your.mapbox.access.token',
//     }
//   ).addTo(mymap);

//   let marker = L.marker(latLong).addTo(mymap);

//   marker.bindPopup("<b>Timestamp:</b> " + this.parseTimestamp(position.timestamp) + "<br/><b>Developer location:</b> lat " + position.coords.latitude + ", long " + position.coords.longitude + ", accuracy " + position.coords.accuracy).openPopup();

//   let popup = L.popup()
//     .setLatLng(latLong)
//     .setContent('Developer location')
//     .openOn(mymap);
// },
// (err) => {
//   var errors={1: 'Permission denied',
//         2: 'Position unavailable',
//         3: 'Request timeout'}
//         alert("Error: " + errors[err.code]);
// }
// );
// this.watchPosition();
// }
// parseTimestamp(timestamp) {
//   var d = new Date(timestamp);
//   var day = d.getDate();
//   var month = d.getMonth() + 1;
//   var year = d.getFullYear();
//   var hour = d.getHours();
//   var mins = d.getMinutes();
//   var secs = d.getSeconds();
//   var msec = d.getMilliseconds();
//   return day + "." + month + "." + year + " " + hour + ":" + mins + ":" + secs + "," + msec;
// }
// watchPosition() {
// let desLat = 0;
// let desLon = 0;
// let id = navigator.geolocation.watchPosition(
//   (position) => {
//     console.log(
//       `lat: ${position.coords.latitude}, lon: ${position.coords.longitude},<b>Timestamp:</b>${this.parseTimestamp(position.timestamp) } `
//     );
//     if (position.coords.latitude === desLat) {
//       navigator.geolocation.clearWatch(id);
//     }
//   },
//   (err) => {
//     var errors={1: 'Permission denied',
// 					2: 'Position unavailable',
// 					3: 'Request timeout'}
//           alert("Error: " + errors[err.code]);
//   },
//   {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   }
// );

   this.messageservice.addMessage('Welcome to Registration Page');
 }
}
