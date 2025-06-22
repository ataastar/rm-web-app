import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { RequirementProperty, RequirementService } from '@ataastar/rm-api-ts-oa';
import { NgForOf, NgIf } from '@angular/common';

interface PropertyGroup {
  [key: string]: RequirementProperty[];
}

@Component({
  selector: 'app-requirement-detail',
  standalone: true,
  templateUrl: './requirement-detail.component.html',
  imports: [
    NgIf,
    NgForOf
  ]
})
export class RequirementDetailComponent implements OnInit {
  requirementId!: number;
  properties: RequirementProperty[] | null = [];
  propertyGroups: PropertyGroup = {};
  propertyTypes: string[] = [];

  constructor(private route: ActivatedRoute, private requirementService: RequirementService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.requirementId = +(params.get('id') || 0);
          return this.loadDataFromServer(this.requirementId);
        })
      )
      .subscribe(result => {
        this.properties = result;
        this.groupPropertiesByType();
      });
  }

  groupPropertiesByType(): void {
    if (this.properties === null) {
      return;
    }
    this.propertyGroups = this.properties.reduce((groups, prop) => {
      const type = prop.type || 'other';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(prop);
      return groups;
    }, {} as PropertyGroup);

    this.propertyTypes = Object.keys(this.propertyGroups);
  }

  getPropertiesByType(type: string): RequirementProperty[] {
    return this.propertyGroups[type] || [];
  }

  loadDataFromServer(id: number): Observable<RequirementProperty[]> {
    return this.requirementService.getRequirementProperties(id);
  }

}
