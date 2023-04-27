import { Component, OnInit } from '@angular/core';
import BScroll from 'better-scroll';
import { Wheel } from 'better-scroll';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  public items = [
    { code: 0, description: "cero" },
    { code: 1, description: "uno" },
    { code: 2, description: "dos" },
    { code: 3, description: "tres" },
  ]
  public bs: any;

  constructor() { }

  ngOnInit(): void {
    BScroll.use(Wheel)
  }

  ngAfterViewChecked() {
    if (this.bs === undefined) {
      this.bs = new BScroll('.wheel', {
        wheel: {
          selectedIndex: 0,
          wheelWrapperClass: "wheel-container",
          wheelItemClass: "wheel-item",
          rotate: 20
        },
        probeType: 3
      })
    }
  }

  confirm() {}

}
