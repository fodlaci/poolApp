import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

    getAddress(par)  {
	  	let vissza = "üres";
	  	if (par == 1) { vissza = "Beállítások"};
	  	if (par == 2) { vissza = "Admin"};
	  	if (par == 3) { vissza = "három"};
	  	if (par == 4) { vissza = "négy"};
  	return vissza
  }


}
