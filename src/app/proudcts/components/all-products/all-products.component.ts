import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from '../../Products-Services/products-services.service';
import { Router } from '@angular/router';
import { product } from '../../models/Prooducts';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  Product_items: product[] = [];
  Catigore_Names: string[] = [];
  Showing_Spinner = false;
  Cart_OF_Items: any[] = [];
  constructor(
    private products: ProductsServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllPdoductsFromServices();
    this.getAllCatigoresFromServices();
    this.getItemfromItemComp;
  }
  getAllPdoductsFromServices() {
    this.Showing_Spinner = true;
    this.products.getAllProudctsFromApi().subscribe(
      (fetchingData: any) => {
        this.Showing_Spinner = false;
        this.Product_items = fetchingData;
        // console.log(fetchingData);
      },
      () => {
        this.router.navigate(['404']);
        this.Showing_Spinner = false;
      }
    );
  }
  getAllCatigoresFromServices() {
    this.Showing_Spinner = true;
    this.products.getAllCatigoresFromApi().subscribe((names: any) => {
      this.Catigore_Names = names;
      this.Showing_Spinner = false;
      // console.log(names);
    });
  }

  GettheNameOfCategoriesFromTEMP(name: any) {
    this.Showing_Spinner = true;
    let value = name.target.value;
    console.log(value);
    if (value == 'All') {
      this.getAllPdoductsFromServices();
    } else {
      this.products
        .GetKeywordOfCatigoresFromApi(value)
        .subscribe((values: any) => {
          this.Showing_Spinner = false;
          this.Product_items = values;
        });
    }
  }

  //L.S
  //get item from item comp
  getItemfromItemComp(event: any) {
    if ('cartItem' in localStorage) {
      this.Cart_OF_Items = JSON.parse(localStorage.getItem('cartItem')!);
      let ComparingItem = this.Cart_OF_Items.find(
        (el) => el.Chsoen_item.id == event.Chsoen_item.id
      );
      if (ComparingItem) {
        // console.log('ComparingItem:', ComparingItem);
        alert('Chosen Before !');
      } else {
        this.Cart_OF_Items.push(event);
        localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
      }
    } else {
      this.Cart_OF_Items.push(event);
      localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
    }
  }
}
