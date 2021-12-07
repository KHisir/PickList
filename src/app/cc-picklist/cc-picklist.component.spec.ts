/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CcPicklistComponent } from './cc-picklist.component';

describe('CcPicklistComponent', () => {
  let component: CcPicklistComponent;
  let fixture: ComponentFixture<CcPicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcPicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
