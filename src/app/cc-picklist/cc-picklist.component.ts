import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cc-picklist',
  templateUrl: './cc-picklist.component.html',
  styleUrls: ['./cc-picklist.component.scss']
})
export class CcPicklistComponent implements OnInit {

  @Input() source: any[] = [];
  @Input() target: any[] = [];

  @Input() sourceHeader: string = "";
  @Input() targetHeader: string = "";

  @ContentChild(TemplateRef) template!: TemplateRef<any>

  componentId: string;
  checkedItems: any[] = [];

  constructor() {
    this.componentId = this.createComponentId();
  }

  ngOnInit() {
  }

  countCheckedItems(): void {
    this.checkedItems = this.source.filter((x) => x.isActive === true);
  }

  createComponentId() {
    // tslint:disable-next-line:only-arrow-functions
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
