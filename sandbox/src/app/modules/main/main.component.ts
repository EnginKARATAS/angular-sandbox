import { Component, OnInit } from '@angular/core';
import { SwitchPortService } from 'src/app/services/switch-port.service';
import { Switch } from './switch';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
//sandbox
  switches?: Switch[] = [];

  constructor(private spService:SwitchPortService) {
  }

  ngOnInit(): void {
   this.getSwitchPorts();
   console.log(this.switches);
  }

  getSwitchPorts() {
    this.spService.getSwitches().subscribe(res=>{
      this.switches?.push(res) 
    });
    
  }

}


