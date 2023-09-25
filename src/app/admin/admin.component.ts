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
    this.fileLoaderService.loadStylesheet('https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css').then().catch();
    this.fileLoaderService.loadScript('https://code.jquery.com/jquery-3.6.0.min.js').then().catch();
    this.fileLoaderService.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', false).then().catch();
    this.fileLoaderService.loadScript('https://use.fontawesome.com/releases/v6.1.0/js/all.js').then().catch();
  }
}
