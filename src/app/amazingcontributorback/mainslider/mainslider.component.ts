import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.scss']
})
export class MainsliderComponent implements OnInit {

  details=[
    {
      path:'c1.jpg',
      name:'John Smith',
      about:'Photographer'
    },
    {
      path:'c2.jpg',
      name:'Adam Doe',
      about:'Illustrator'
    },
    {
      path:'c3.jpg',
      name:'Austin Chumlee',
      about:'Photographer'
    },
    {
      path:'c4.jpg',
      name:'Rick Harrison',
      about:'Illustrator'
    }
  ]

  ngOnInit(): void {
  }

}
