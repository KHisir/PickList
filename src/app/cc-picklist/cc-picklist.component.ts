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

  constructor() {
    this.source = ["item1", "item2", "item3"]
  }

  ngOnInit() {
  }

}
