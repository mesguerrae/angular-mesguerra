import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DataService } from './dataservice.service';

@Component({
  selector: 'app-datapost',
  templateUrl: './datapost.component.html',
})
export class DataPostComponent implements OnInit {

  @Input() Data: any

  public comentarios: any[] = []


  constructor(
    private servicio: DataService,
  ) { }



  ngOnInit() {
  }



}