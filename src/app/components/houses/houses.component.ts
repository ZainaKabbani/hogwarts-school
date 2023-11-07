import { Component, ElementRef, OnInit } from '@angular/core';

import { HousesService } from '../../services/houses.service';

import { IHouse } from '../../interfaces/house';

import { HouseDetailsComponent } from './../house-details/house-details.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  constructor(
    private housesService: HousesService,
    public dialog: MatDialog,
    private elementRef: ElementRef
  ) {}
  details: any;
  changeText = false;
  houses: IHouse[] = [];

  ngOnInit(): void {
    this.houses = this.housesService.getHouses();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#383838';
  }

  showDetails(id: number) {
    let house = this.houses.find((e) => e.houseId == id);
    const dialogRef = this.dialog.open(HouseDetailsComponent, {
      height: '80%',
      width: '60%',
      data: house,
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      // this.details.showDetails(house)
      console.log(house);
    });
  }
}
