import { Component, OnInit } from '@angular/core';
import { SavingService } from 'src/app/shared/service/saving.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  Saving = [];
  id: any;

  constructor(private SavingSV: SavingService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach(
      params => {
        this.id = params.id;
        console.log(this.id);
      });
    this.InitailLoadSaving();
  }
  private InitailLoadSaving() {
    this.SavingSV.getOneSaving(this.id)
      .then(item => {
        this.Saving = item;
        console.log(item);
      });
  }
}
