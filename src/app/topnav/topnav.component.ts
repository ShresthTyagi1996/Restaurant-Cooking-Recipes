import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {
  title: string = 'Manju Kitchen';
  languages: string[] = ['English', 'French', 'German', 'Espanol', 'Italian', 'Japanese', 'Chinese', 'Hindi'];
  selectedLanguage: string = 'English';
  @Output() categoryOpen = new EventEmitter<boolean>(); // Initial state: closed

  emitToggleEvent() {
    this.categoryOpen.emit(true);
  }

}
