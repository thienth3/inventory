import { Component, OnInit } from '@angular/core';
import { ManageesService } from 'src/app/core/services/swagger-api/services/managees.service';
import { Managess } from 'src/app/core/services/swagger-api/models/managess.class';
import { Infomation } from 'src/app/core/services/swagger-api/models/infomation.class';

@Component({
  selector: 'app-managees',
  templateUrl: './managees.component.html',
  styleUrls: ['./managees.component.scss']
})

export class ManageesComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'name', 'ldap', 'position', 'employee'];
  manageeses: Managess[];
  manager: Managess[];
  info: Infomation;

  constructor(
    private managees: ManageesService,
  ) { }

  ngOnInit() {
    this.getInfo();
    this.getManagess();
    this.getManager();

  }

  getInfo() {
    this.managees.getInfo().subscribe(res => {
      this.info = res;
    })
  }

  getManager() {
    this.managees.getAllManager().subscribe((res) => {
      this.manager = res;
    })
  }

  getManagess() {
    this.managees.getAllManagees().subscribe((res) => {
      this.manageeses = res;
    })
  }
}
