import { Component } from '@angular/core';
//  var CanvasJS = require('canvasjs');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

sno : string;
month : string;
expense : string;
leftover : string;
update:boolean=false;
datatobeedited:any;

table : any;
 dps : any;

constructor(){
  this.table=[{sno:"1",month:"jan",expense:"10000",leftover:"2500"}]
  this.dps=[{expense:"10000"},
{expense:"5000"}]
}

public barChartLabels:any[] = ["January","February","March","April","May","June","July"];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [10000], label: 'Expenses'},
  {data: [2500,1500,3000,5000,2000,3500,1000,0], label: 'Leftover'}
];

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
transfer(sno,month,expense,leftover){

  this.sno = sno;
  this.month = month;
  this.expense = expense;
  this.leftover = leftover;

//console.log(this.sno+this.month+this.expense+this.leftover);


let newo:any;
let up : any;
newo = {
  sno: this.sno, month : this.month, expense : this.expense, leftover: this.leftover
}
// up = {
//   expense : this.expense
// }

 this.table.push(newo);
// this.dps.push(up);
console.log(this.table)

this.setchartdata(this.table)
}

setchartdata(table){
  let data = [];
 
 
  table.map((row)=>{data[row.month]=(data[row.month]||0)+row.expense})
  this.barChartLabels= Object.keys(data);
  this.barChartData = Object.values(data);

  console.log(this.barChartData)
  console.log(this.barChartLabels)
 
}
deleteData(x:number)
  {
    console.log(x);
    this.table.splice(x,1)
    this.setchartdata(this.table)
  }
  editData(i:any)
  {
   
    if(this.update==true)
    {
      this.update=false;
    }
    else if(this.update==false)
    {
      this.update=true;
    }
     
  }
  
}
