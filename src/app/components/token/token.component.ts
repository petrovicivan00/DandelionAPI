import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  token: string = environment.token;

  ngOnInit(): void {
    localStorage.setItem("token", this.token);
  }

  isEmpty(): boolean {
    return this.token.length == 0;
  }

  setToken() {
    if (this.token.length > 0) {
      localStorage.setItem("token", this.token);
      this.token = '';
    }
  }
}
