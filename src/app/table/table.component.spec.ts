import { Component } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { Post } from './post';
import { TableComponent } from './table.component';

import { PostService } from './post.service';
import { MockPostService } from './post.service.mock';

import { By } from '@angular/platform-browser';

@Component({
  selector: 'test-cmp',
  template: `<app-table [post]="postMock"></app-table>`
})
class TestCmpWrapper {
  public postMock;
}

describe('TableComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCmpWrapper,
        TableComponent
      ]
    })
  });

  describe('check rendering', () => {
    it('if component is rendered', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(TestCmpWrapper);
        const componentInstance = fixture.componentInstance;

        componentInstance.postMock = new Post({title: 'TestPost', author: 'Admin'});

        fixture.detectChanges();

        const td1 = fixture.debugElement.query(By.css('tr td:nth-child(1)')).nativeElement;
        expect(td1.innerText).toBe('TestPost');
        const td2 = fixture.debugElement.query(By.css('tr td:nth-child(2)')).nativeElement;
        expect(td2.innerText).toBe('Admin');
      });
    }));
  });
});

