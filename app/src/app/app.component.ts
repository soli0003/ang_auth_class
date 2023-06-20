import { Component } from '@angular/core';
import { ProdsService } from './Services/prod.service';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  products: any[] = [];


  constructor(private prod_srv: ProdsService, private auth:AuthService) {
    this.loadData();
  }
  loadData() {
    this.prod_srv.getProducts().subscribe((data) => (this.products = data));
  }
  add(desc: string, price: number) {
    this.prod_srv
      .addProduct({ desc, price })
      .subscribe((res) => console.log(res));
    this.loadData();
  }
  del(id: number) {
    this.prod_srv.delProduct(id).subscribe((res) => console.log(res));
    this.loadData();
  }


  upd(desc: string, price: number, id: number) {
    this.prod_srv
      .updProduct({ desc, price }, id)
      .subscribe((res) => console.log(res));
    this.loadData();
  }

  login(pwd:string,user:string){
    this.auth.login(pwd, user).subscribe((res) => localStorage.setItem("token", res.access));
    
  }
    cart:any [] = []
  buy(id: number){
    this.prod_srv.getItem(id).subscribe(res => this.cart.push(res))
    console.log(this.cart);

  }
}



