import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private _router: Router) {
}

onSearch(searchText: string): void {
   this._router.navigate(['/results', searchText])
  }
}

