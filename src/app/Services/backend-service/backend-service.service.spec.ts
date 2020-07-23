import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BackendService } from './backend-service.service';

describe('BackendService', () => {
  let service: BackendService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BackendService]
      });
    service = TestBed.inject(BackendService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get some data', () => {
    const userID = 1;
    service.getDemoData(userID).subscribe(
      (x: string) => {
        expect(x['name']).toBe('Leanne Graham');
      }
    );

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/' + userID);
    expect(request.request.method).toBe('GET');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
