import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:['h1{color: dodgerblue;}']
})
export class AppComponent {
  name = 'AVIRUP DUTTA';
  log=[];
  showSecret= false;

  username='';

  onToggleDetails(){
    console.log("Hello World")
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
