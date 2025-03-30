import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BranchSelectorComponent } from './branch-selector/branch-selector.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BranchSelectorComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rm-web-app';
}
