import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BackendService } from '../../Services/backend-service/backend-service.service';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponent implements OnInit {

  userId: number = 0;
  value: string;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.updateValue();
  }

  updateValue() {
    this.userId++;

    if (this.userId > 10) {
      this.userId = 1;
    }

    this.backend.getDemoData(this.userId)
      .pipe(first())
      .subscribe(
      (x: string) => {
        console.log(x);
        this.value = x['name'];
      }
    );
  }

}
