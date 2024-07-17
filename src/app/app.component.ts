import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  // template: `
  //   Hi there!
  //   <a href="/upload">Upload Users</a>
  //   <nav>
  //      |
  //     <a routerLink="/users">User List</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // `,
  // imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exostar-assessment';
}
