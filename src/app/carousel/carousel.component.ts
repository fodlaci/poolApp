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
        visible: false
      },
      loop: true,
      touch: true
    }


   }

  ngOnInit() {

  	 const szov1 = "Az uszoda minen vasárnap 19:00 óráig várja Önöket";
    this.items.push({title: szov1,color:"blue",tartalom: "Ez a tartalmi rész", foto: "http://fodlaci.hu/uszoda/images/fejlec.jpg"});
    this.items.push({title:"slide 2",color:"red", tartalom: "Ez a 2. slide tartalma"});
    this.items.push({title:"slide 38",color:"orange",tartalom: "Ez a 3. tartalmi rész"});

	console.log("carouse elemei: ",this.items.length)

  }

}
