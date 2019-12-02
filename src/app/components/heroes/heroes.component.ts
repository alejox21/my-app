import { Component, OnInit, Input } from '@angular/core';
// import Vue from 'vue';
// import customElement from 'vue-custom-element';
// import DemoElement from '../heroes/DemoElement.vue';

// Vue.use(customElement);
// Vue.customElement('demo-basic', DemoElement);

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input()
    msg: string;
  constructor() { }

  ngOnInit() {
    this.msg = 'a name';
  }

}
