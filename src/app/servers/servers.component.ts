import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //       <p>This is the Servers Component!!!</p> 
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer= false;
  serverCreationStatus= 'No server was created';
  serverName='TestServer';
  serverCreated=false;
  servers=['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
       this.allowNewServer=true;
    },2000)
         
    
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created' + this.serverName;
  }

  onUpdateServerName(event:Event){
       this.serverName=(<HTMLInputElement>event.target).value;
  }

}
