import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'containerCapacity';

  // totalItems!: 0;
  // totalRow!: 0;
  // totalColumns!: number;
  totalCrate = 0;
  lastCrate = 0;

  row: string[] = [];
  col: string[] = [];
  crate: string[] = [];

  value: string[] = [];

  products: products[] = [
    {
      height: '',
      totalCrate: 0,
      value: [],
      width: '',
    },
  ];

  productCount = 0;

  values: string[] = [];

  countCheck = 0;

  createCrate() {
    this.countCheck = 0;
    this.products.push({
      height: '',
      totalCrate: 0,
      value: [],
      width: '',
    });
  }

  calculate(index: number) {
    this.products[index].width = this.products[index].totalRow! * 27 + 'px';
    this.products[index].height =
      this.products[index].totalColumns! * 27 + 'px';

    let total =
      this.products[index].totalRow! * this.products[index].totalColumns!;
    let temp;
    let countCrate = -1;
    for (let i = 0; i <= total * this.products[index].totalItems!; i += total) {
      countCrate++;
      let ans = Math.trunc(i / this.products[index].totalItems!);
      if (ans != 0 && temp == 0) {
        break;
      }
      temp = ans;
    }
    this.products[index].totalCrate = countCrate;
    let last = this.products[index].totalItems! - (countCrate - 1) * total;

    countCrate = countCrate * total;

    for (let i = 0; i < countCrate; i++) {
      if (i < this.products[index].totalItems!) {
        this.products[index].value.push('X');
      } else {
        this.products[index].value.push('');
      }
    }

    // if (last == this.totalItems) {
    //   this.products[this.productCount].lastCrate = 0;
    // } else {
    //   this.products[this.productCount].lastCrate = last;
    // }
    // if (this.totalCrate == 1) {
    //   this.products[this.productCount].lastCrate = this.totalItems;
    // }
    // for (let i = 0; i < this.totalCrate - 1; i++) {
    //   this.products[this.productCount].crate.push('');
    // }
    // console.log('this.totalCrate', this.totalCrate);
    // console.log('this.lastCrate', this.products[this.productCount].lastCrate);
    // for(let i=0;i<)
  }

  // lastCrateCheck() {
  //   this.products[this.productCount].countCheck++;
  //   if (
  //     this.products[this.productCount].countCheck <=
  //     this.products[this.productCount].lastCrate
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

interface products {
  totalCrate: number;
  width: string;
  height: string;
  value: string[];
  totalItems?: number;
  totalRow?: number;
  totalColumns?: number;
}
