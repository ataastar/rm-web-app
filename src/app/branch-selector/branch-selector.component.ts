import { Component, OnInit } from '@angular/core';
import { BranchService, BranchTree } from '@ataastar/rm-api-ts-oa';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'branch-selector',
  templateUrl: './branch-selector.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './branch-selector.component.css'
})
export class BranchSelectorComponent implements OnInit {

  branches: BranchTree[] = [];

  constructor(private branchTreeService: BranchService) {
    console.log("BranchTreeComponent constructor");
  }

  ngOnInit(): void {
    console.log("BranchTreeComponent init");
    this.branchTreeService.branchTree().subscribe(response => {
      this.branches = response;
    });
  }

}
