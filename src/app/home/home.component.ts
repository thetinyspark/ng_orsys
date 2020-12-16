import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,
OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  public date:Date = new Date();
  private timerId:any | null;
  constructor( private cd:ChangeDetectorRef) { 
    this.timerId = null;
    this.refresh();
  }

  refresh(){
    this.date = new Date();
    this.timerId = setTimeout( () => this.refresh(), 100 );

    if( this.date.getSeconds() === 0 ){
      this.cd.markForCheck();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    if( this.timerId)
      clearTimeout(this.timerId);
      
    console.log('ngOnDestroy');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
