import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public op:any="";
  public res:any;
  public a:number;
  public b:number;
  public Add(){
    console.log(this.a);
    console.log(typeof(this.a));
    this.res="Add:"+(this.a+this.b);

  }
  public Add1(val:string){
    console.log(this.a);
    console.log(typeof(this.a));
    this.res=val+":"+(this.a+this.b);

  }
  public Sub(){
    console.log(this.a);
    console.log(typeof(this.a));
    this.res="Sub:"+(this.a-this.b);

  }
  public Sub1(val:string){
    console.log(this.a);
    console.log(typeof(this.a));
    this.res=val+":"+(this.a-this.b);

  }

}
