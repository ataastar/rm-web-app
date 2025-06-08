import { Component, Input } from '@angular/core';
import { Requirement, } from '@ataastar/rm-api-ts-oa';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'requirement-node',
  templateUrl: './requirement-node.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    CommonModule
  ],
  styleUrl: './requirement-node.component.css'
})
export class RequirementNodeComponent {

  @Input() node!: Requirement;
  @Input() expandedNodes!: Set<number>;

  toggle() {
    console.log('req id' + this.node.requirementId);
    if (this.expandedNodes.has(<number>this.node.requirementId)) {
      this.expandedNodes.delete(<number>this.node.requirementId);
    } else {
      this.expandedNodes.add(<number>this.node.requirementId);
    }
  }

  isExpanded(): boolean {
    return this.expandedNodes.has(<number>this.node.requirementId);
  }
}
