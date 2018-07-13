import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

   items: object[] = []; 

	bgcolor = "";

	igaz = true;
	serv1 = false;
  serv2 = false;

  constructor() { }

  ngOnInit() {

    this.items.push({color:"red", foto: "http://fodlaci.hu/uszoda/images/solarium.png"});

    this.bgcolor="red";
	this.serv1 = true;

  }

    kiiras(par)  {
		this.serv1 = false;
		this.serv2 = false;
    	console.log("tartalom tesztje,",this.bgcolor);
    	if (par == '1') this.serv1 = true;
    	if (par == '2') this.serv2 = true;
    	

  }

}
