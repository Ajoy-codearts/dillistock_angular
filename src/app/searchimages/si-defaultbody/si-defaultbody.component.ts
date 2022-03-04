import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si-defaultbody',
  templateUrl: './si-defaultbody.component.html',
  styleUrls: ['./si-defaultbody.component.scss']
})
export class SiDefaultbodyComponent implements OnInit {

  img=[
    {
      path:'g1.jpg'
    },
    {
      path:'g2.jpg'
    },
    {
      path:'g3.jpg'
    },
    {
      path:'g4.jpg'
    },
    {
      path:'g5.jpg'
    },
    {
      path:'g6.jpg'
    },
    {
      path:'g7.jpg'
    },
    {
      path:'g8.jpg'
    },
    {
      path:'g9.jpg'
    },
    {
      path:'g10.jpg'
    }, {
      path:'g11.jpg'
    }, {
      path:'g12.jpg'
    }
  ]
  tags=[
    {
      tagname:'Lorem'
    },
    {
      tagname:'Dummy'
    },
    {
      tagname:'Ipsum'
    },
    {
      tagname:'Lorem'
    },
    {
      tagname:'Dummy'
    },
    {
      tagname:'Ipsum'
    },
    {
      tagname:'Lorem'
    },
    {
      tagname:'Dummy'
    },
    {
      tagname:'Ipsum'
    }
   
  ]
  ngOnInit(): void {
  }

}
