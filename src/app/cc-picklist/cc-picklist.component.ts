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

    let checkedItems: any[] = this.getCheckedItems(ListType.Source);
    for (let i = this.source.length - 1; i >= 0; i--) {
      if (this.source[i].isActive === true) {
        this.source.splice(this.source[i], 1);  
      }
    }

    checkedItems.forEach(item => item.isActive = false);
    this.target = this.target.concat(checkedItems);
  }

  transferTargetToSource(transferAll: boolean = false): void {
    if (transferAll === true) {
      this.target.forEach(item => item.isActive = true);
    }

    let checkedItems: any[] = this.getCheckedItems(ListType.Target);
    for (let i = this.target.length - 1; i >= 0; i--) {
      if (this.target[i].isActive === true) {
        this.target.splice(this.source[i], 1);  
      }
    }

    checkedItems.forEach(item => item.isActive = false);
    this.source = this.source.concat(checkedItems);
  }

  sortTop(): void {
    for (let i = 0; i < this.source.length; i++) {
      if (this.source[i].isActive === true) {
        if (i > 0) {
          this.sortUp();
          this.sortTop();
        } else {
          this.sourceContainerElem.nativeElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          break;
        }
      }
    }
  }

  sortUp(): void {
    for (let i = 0; i < this.source.length; i++) {
      if (this.source[i].isActive === true) {
         if (i === 0) {
           break;
         } else {
          [this.source[i], this.source[i-1]] = [this.source[i-1], this.source[i]]
         }
      }
    }
  }

  sortDown(): void {
    for (let i = this.source.length - 1; i >= 0; i--) {
      if (this.source[i].isActive === true) {
         if (i === this.source.length - 1) {
           break;
         } else {
          [this.source[i], this.source[i+1]] = [this.source[i+1], this.source[i]]
         }
      }
    }
  }

  sortBottom(): void {
    for (let i = this.source.length - 1; i >= 0; i--) {
      if (this.source[i].isActive === true) {
        if (i < this.source.length - 1) {
          this.sortDown();
          this.sortBottom();
        } else {
          this.sourceContainerElem.nativeElement.scrollTo({
            top: this.sourceContainerElem.nativeElement.scrollHeight,
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
