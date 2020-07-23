import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs/observable/of';

import { DemoComponent } from './demo-component.component';
import { BackendService } from '../../Services/backend-service/backend-service.service';

const mockService = {
  getDemoData: () => of({
    "id": 1,
    "name": "Leanne Graham"
  })
};

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
      providers: [
        { provide: BackendService, useValue: mockService },
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;

    let service = TestBed.get(BackendService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data into component', () => {
    component.updateValue();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('UserId: 1 Name: Leanne Graham');
  });
});
