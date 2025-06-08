import { Component, OnInit } from '@angular/core';
import { Requirement, RequirementService, } from '@ataastar/rm-api-ts-oa';
import { NgForOf } from '@angular/common';
import { RequirementNodeComponent } from '../requirement-node/requirement-node.component';

@Component({
  selector: 'requirement-tree-selector',
  templateUrl: './requirement-tree-selector.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RequirementNodeComponent
  ],
  styleUrl: './requirement-tree-selector.component.css'
})
export class RequirementTreeSelectorComponent implements OnInit {

  requirements: Requirement[] = [];
  expandedNodes = new Set<number>();

  constructor(private requirementTreeService: RequirementService) {
    console.log("RequirementNodeComponent constructor");
  }

  ngOnInit(): void {
    console.log("RequirementNodeComponent init");
    this.requirementTreeService.allRequirementTree().subscribe(response => {
      this.requirements = response;
    });
  }

}
