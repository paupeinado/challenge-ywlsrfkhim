import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShowComponent } from './post-show.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClientTestingModule } from '@angular/common/http/testing';

export class MockMapsAPILoader {
  public load(): Promise<boolean> {
    return new Promise(() => {
      return true;
    });
  }
}

describe('PostShowComponent', () => {
  let component: PostShowComponent;
  let fixture: ComponentFixture<PostShowComponent>;

  const mockMapAPILoader = new MockMapsAPILoader();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        PostShowComponent
      ],
      providers: [
        { provide: FormGroup, useValue: class {} },
        { provide: MapsAPILoader, useValue: mockMapAPILoader }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
