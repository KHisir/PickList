import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ListType } from './model/listType';

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
  @ViewChild('sourceContainer', { static: false }) sourceContainerElem!: ElementRef;

  componentId: string;
  listType: any = ListType;

  constructor() {
    this.componentId = this.createComponentId();
  }

  ngOnInit() {
  }

  getCheckedItems(listType: ListType): any[] {
    if (listType === ListType.Source) {
      return this.source.filter((x) => x.isActive === true);
    } else {
      return this.target.filter((x) => x.isActive === true);
    }
  }

  transferSourceToTarget(transferAll: boolean = false): void {
    if (transferAll === true) {
      this.source.forEach(item => item.isActive = true);
    }

    let checked: any[] = [];
    let rest: any[] = [];

    for (let i = this.source.length - 1; i >= 0; i--) {
      if (this.source[i].isActive === true) {
        this.source[i].isActive = false;
        checked.push(this.source[i]);  
      } else {
        rest.push(this.source[i]); 
      }
    }

    this.source = rest;
    this.target = this.target.concat(checked);
  }

  transferTargetToSource(transferAll: boolean = false): void {
    if (transferAll === true) {
      this.target.forEach(item => item.isActive = true);
    }

    let checked: any[] = [];
    let rest: any[] = [];

    for (let i = this.target.length - 1; i >= 0; i--) {
      if (this.target[i].isActive === true) {
        this.target[i].isActive = false;
        checked.push(this.target[i]);  
      } else {
        rest.push(this.target[i]); 
      }
    }

    this.target = rest;
    this.source = this.source.concat(checked);
  }

  sortTop(list: any[], elem: HTMLElement): void {
    for (let i = 0; i < list.length; i++) {
      if (list[i].isActive === true) {
        if (i > 0) {
          this.sortUp(list);
          this.sortTop(list, elem);
        } else {
          elem.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          break;
        }
      }
    }
  }

  sortUp(list: any[]): void {
    for (let i = 0; i < list.length; i++) {
      if (list[i].isActive === true) {
         if (i === 0) {
           break;
         } else {
          [list[i], list[i-1]] = [list[i-1], list[i]]
         }
      }
    }
  }

  sortDown(list: any[]): void {
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].isActive === true) {
         if (i === list.length - 1) {
           break;
         } else {
          [list[i], list[i+1]] = [list[i+1], list[i]];
         }
      }
    }
  }

  sortBottom(list: any[], elem: HTMLElement): void {
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].isActive === true) {
        if (i < list.length - 1) {
          this.sortDown(list);
          this.sortBottom(list, elem);
        } else {
          elem.scrollTo({
            top: elem.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
          break;
        }
      }
    }
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
