import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  submenubar=[
    {
      submenuname:'Sub Menu 1',
      submenupath:'/submenu1'
    },
    {
      submenuname:'Sub Menu 2',
      submenupath:'/submenu2'
    },
    {
      submenuname:'Sub Menu 3',
      submenupath:'/submenu3'
    },
    {
      submenuname:'Sub Menu 4',
      submenupath:'/submenu4'
    },
]

menu=[
  {
    menuname:'Home',
    menupath:'/home'
  },
  {
    menuname:'Contact Us',
    menupath:'/contactus'
  },
  {
    menuname:'About Us',
    menupath:'/aboutus'
  },
  {
    menuname:'Search Images',
    menupath:'/searchimages'
  }
]

subscriptionpath:string='/plans';

  ngOnInit(): void {
  }

}
