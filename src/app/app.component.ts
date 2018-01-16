import {Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/observable/merge";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   // Var
  @ViewChild('btn') btn;
  @ViewChild('text') text;
  message: string;

  ngOnInit () {

  /*
  // this is with two subscribes the same code
  // var const   // we get into DOM by .natiElement
    const btnOb$ = Observable.fromEvent(this.btn.nativeElement, 'click');

  // make subscribe
    btnOb$.subscribe( res => this.message = "hello Angular, RxJS");
  // var const
  const textOb$ = Observable.fromEvent(this.text.nativeElement, 'change').map((event:Event) =>
    (<HTMLInputElement>event.target).value);
  // make subscribe
  textOb$.subscribe( res => this.message = res);
  */
  // just one subscribe

    const btnOsb = Observable.fromEvent(this.btn.nativeElement, 'click').map(event => 'Hello Angular, Rxjs!' );

    const textOsb = Observable.fromEvent(this.text.nativeElement, 'change').map( (event: Event) =>
      (<HTMLInputElement>event.target).value);

    Observable.merge(btnOsb, textOsb).subscribe( res => this.message = res);
}

}
