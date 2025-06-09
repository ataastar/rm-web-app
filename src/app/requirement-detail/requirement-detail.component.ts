import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-requirement-detail',
  standalone: true,
  templateUrl: './requirement-detail.component.html',
})
export class RequirementDetailComponent implements OnInit {
  requirementId!: number;
  data!: string;

  constructor(private route: ActivatedRoute) {
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
        this.data = result;
      });
  }

  loadDataFromServer(id: number) {
    // Itt cseréld ki a saját HTTP service hívásodra
    return of(`Szerverről betöltött adatok a(z) #${id} követelményhez`);
  }
}
