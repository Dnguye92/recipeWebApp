// typescript class
import { Component } from '@angular/core';

// inside of Component is the html selector
// app-header, the view - header.component.html
// allocated css file for header.component.html files
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

}
