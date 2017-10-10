import { TestBed, async } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PostService } from './table/post.service';
import { MockPostService } from './table/post.service.mock';

import { By } from '@angular/platform-browser';

@Component({
  selector: 'test-app',
  template: `<app-root></app-root>`
})
export class TestCmpWrapper {
}

@Component({
  selector: 'app-table',
  template: `<div>{{post}}</div>`
})
export class TestTableCmpWrapper {
  @Input() public post: any;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestCmpWrapper,
        TestTableCmpWrapper
      ],
      providers: [
        { provide: PostService, useClass: MockPostService }
      ],
      imports: [
        HttpModule
      ]
    }).compileComponents;
  }));

  describe('check rendering', () => {
    it('it component is rendered', () => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(TestCmpWrapper);
        const componentInstance = fixture.componentInstance;

        fixture.detectChanges();

        const appRoot = fixture.debugElement.query(By.css('app-root')).nativeElement;

        fixture.autoDetectChanges();

        fixture.whenStable().then(() => {
          const appRootAfter = fixture.debugElement.query(By.css('app-root')).nativeElement;
        });
      });
    });
  });
});
