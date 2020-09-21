import { Component, OnInit, OnDestroy, OnChanges, Input } from "@angular/core";
import { DataService } from "./dataservice.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html"
})
export class PostComponent implements OnInit {

  public aMostrar: any[] = [];

 

  constructor(private servicio: DataService) {}

  ngOnInit() {

    this.servicio.getPosts().subscribe(res => {
      let indicador = 0;
      for (let i = 0; i < res.length; i++) {
        if (indicador < res.length) {
          this.aMostrar.push(res[i]);
        } else {
          break;
        }

      }

    });
  }
}
