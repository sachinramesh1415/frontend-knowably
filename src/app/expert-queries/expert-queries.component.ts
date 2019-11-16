import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics-service/analytics.service';

@Component({
  selector: 'app-expert-queries',
  templateUrl: './expert-queries.component.html',
  styleUrls: ['./expert-queries.component.css']
})
export class ExpertQueriesComponent implements OnInit {
  public responses =  [];
  public errorMsg;
  public displayedColumns: string[] = ['domain','query','result','posResponse','negResponse'];
  constructor(private _analytics:AnalyticsService) { }

  ngOnInit() {
    this._analytics.changeURL("http://34.93.253.53:8099/api/v1/display");
    this._analytics.getResponses()
        .subscribe(data => this.responses=data,
                   error => this.errorMsg = error);
  }
  logg() {
    console.log(this.errorMsg);
  }

}
