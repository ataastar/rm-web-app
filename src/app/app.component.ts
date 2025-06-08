import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BranchSelectorComponent } from './branch-selector/branch-selector.component';
import { RequirementTreeSelectorComponent } from './requirement-tree-selector/requirement-tree-selector.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BranchSelectorComponent, RequirementTreeSelectorComponent, NgStyle],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rm-web-app';

  isResizing = false;
  sidebarWidth = 250; // init width
  readonly minWidth = 150;
  readonly maxWidth = 500;

  constructor() {
  }

  onMouseDown(event: MouseEvent) {
    this.isResizing = true;
    event.preventDefault(); // do not select text when clicking and moving
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isResizing) return;
    this.sidebarWidth = Math.max(this.minWidth, Math.min(event.clientX, this.maxWidth));
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isResizing = false;
  }
}
