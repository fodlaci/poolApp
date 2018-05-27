import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

   items: object[] = []; 
   carouselConfig: NgxCarousel;
  


  constructor() {

    this.carouselConfig = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: true
      },
      loop: true,
      touch: true
    }

   }

  ngOnInit() {

  	 const szov1 = "Az uszoda minen vasárnap 19:00 óráig várja Önöket";
    this.items.push({title: szov1,color:"blue"});
    this.items.push({title:"slide 2",color:"red"});
    this.items.push({title:"slide 3",color:"orange"});

	console.log("carouse elemei: ",this.items.length)

  }

}
