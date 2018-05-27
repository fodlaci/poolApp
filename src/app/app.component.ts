import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//  title = 'Swimm';

  icon = "account_circle";
  belepve = " admin";


  constructor() {  }

  ngOnInit() {

  }

    kiiras()  {

    	console.log("kiirás tesztje");

  }


}
