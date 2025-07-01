import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { RequirementProperty, RequirementService } from '@ataastar/rm-api-ts-oa';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../shared/property-card/property-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface PropertyGroup {
  [key: string]: RequirementProperty[];
}

@Component({
  selector: 'app-requirement-detail',
  standalone: true,
  templateUrl: './requirement-detail.component.html',
  imports: [
    CommonModule,
    PropertyCardComponent,
    NgbModule
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
