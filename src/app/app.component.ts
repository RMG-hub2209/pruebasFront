import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {GenIpServiceService} from "../core/services/gen-ip-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaFront';
  newIp: any;
  ipControl = new FormControl ('', Validators.compose([Validators.required, Validators.pattern('[0-9]{12}')]));
  newIpControl = new FormControl ('');

  constructor(
    private ipService: GenIpServiceService
  ) {}

  generateIp(){
    const getdIp = this.ipControl.value;
    console.log(getdIp);
    this.ipService.genIp(getdIp).subscribe(data => {
      this.newIpControl.setValue(data);
      this.newIp = data;
      console.log(this.newIp);
    });
  }

  clear(){
    this.newIpControl.reset();
  }

  clearString(){
    this.ipControl.reset();
  }
}
