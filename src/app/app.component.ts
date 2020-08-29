import { Component } from '@angular/core';
import { CoronaService } from './corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries:any;
  country:any;
  confirmed:Number;
  recovered:Number;
  deaths:Number;

  constructor(private corona:CoronaService){}

  isShow = false;
 
  toggleDisplay() {
    this.isShow = true;
  }

  toggleDisplayoff() {
    this.isShow = false;
    this.country = "";
  }
  ngOnInit(){
    this.corona.getCountries().subscribe((data) => {
        this.countries=data;
    });
  }
  getCoronaData(){
    this.corona.getCoronaRealtimeData(this.country).subscribe((data) => {
    var index = data.length - 1;
    this.confirmed = data[index].Confirmed;
    this.recovered = data[index].Recovered;
    this.deaths = data[index].Deaths;
  })
  }

  getCountry(country:any){
    this.country = country;
  }
}
