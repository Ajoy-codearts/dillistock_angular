import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maingalleryback',
  templateUrl: './maingalleryback.component.html',
  styleUrls: ['./maingalleryback.component.scss']
})
export class MaingallerybackComponent implements OnInit {

  gallerydetails=[
    {
      path:'cat1.jpg',
      name:'Travel'
    },
    {
      path:'cat2.jpg',
      name:'Culture'
    },{
      path:'cat3.jpg',
      name:'Business'
    },{
      path:'cat4.jpg',
      name:'Model'
    },{
      path:'cat5.jpg',
      name:'Family'
    },{
      path:'cat6.jpg',
      name:'Lifestyle'
    },{
      path:'cat7.jpg',
      name:'Food'
    }
  ]

  ngOnInit(): void {
  }

}
