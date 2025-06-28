import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementProperty } from '@ataastar/rm-api-ts-oa';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styles: [`
    .card {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class PropertyCardComponent {
  @Input() properties: RequirementProperty[] = [];
}
