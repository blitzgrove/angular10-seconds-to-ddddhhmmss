import { Component, OnInit } from "@angular/core";

import { Observable, timer, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  timer$: Observable<string>;

  ngOnInit() {
    this.timer$ = timer(0, 1000).pipe(map(this.secondsToDhms));
  }

  secondsToDhms(totalSeconds) {
    let padZero = value => String(value).padStart(2, "0");

    totalSeconds = Number(totalSeconds);
    const dTemp = totalSeconds / 3600;
    const hTemp = dTemp % 24;
    const mTemp = (hTemp * 3600) % 3600;

    const d = Math.floor(dTemp / 24);
    const h = Math.floor(hTemp);
    const m = Math.floor(mTemp / 60);
    const s = Math.floor(mTemp % 60);

    const dDisplay = d > 0 ? padZero(d) + (d == 1 ? " Tag, " : " Tage, ") : "";
    const hDisplay = h > 0 ? padZero(h) + ":" : "";
    const mDisplay = padZero(m) + ":";
    const sDisplay = padZero(s);
    return `${dDisplay}${hDisplay}${mDisplay}${sDisplay}`;
  }
}
