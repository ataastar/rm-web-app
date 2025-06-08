import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BranchSelectorComponent } from './branch-selector/branch-selector.component';
import { RequirementTreeSelectorComponent } from './requirement-tree-selector/requirement-tree-selector.component';
import { RequirementNodeComponent } from './requirement-node/requirement-node.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BranchSelectorComponent, RequirementTreeSelectorComponent, RequirementNodeComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rm-web-app';
}
