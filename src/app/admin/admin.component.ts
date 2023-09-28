import {Component, OnInit} from '@angular/core';
import {FileLoaderService} from "../file-loader.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fileLoaderService: FileLoaderService) {
  }

  ngOnInit(): void {
    // this.fileLoaderService.loadStylesheet('https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css').then().catch();
  }
}
