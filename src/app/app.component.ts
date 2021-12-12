import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cc-picklist';

  sourceData: any[] = [];
  targetData: any[] = [];

  constructor() {
    this.fetch((res: any) => {
      this.sourceData = res;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data.json');
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };
    req.send();
  }

  onSearch(searchString: string): void {
    console.log(searchString);
  }
}
