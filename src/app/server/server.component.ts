import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online { color: white;}`]
})
export class ServerComponent implements OnInit {

  
  ngOnInit(): void {
  }


  serverId= 10;
  serverStatus;

  constructor() {
    this.serverStatus=Math.random() >0.5 ? 'online' : 'offline';
   }

 

  getServerStatus (){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
