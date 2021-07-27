import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.homeApi().subscribe((response) => {
      console.log(response);
    });
  }
}
