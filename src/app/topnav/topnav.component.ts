import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {
  title: string = 'Manju Kitchen';
  logoUrl: string = 'assets/logo.png';
  languages: string[] = ['English', 'French', 'German', 'Espanol', 'Italian', 'Japanese', 'Chinese', 'Hindi'];
  selectedLanguage: string = 'English';
}
