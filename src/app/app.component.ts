import { Component, OnInit } from '@angular/core';
// import vueCustomElement from 'vue-custom-element'
// declare var lala: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  ngOnInit() {
    //  lala();
  }
}
