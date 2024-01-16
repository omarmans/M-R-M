import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServicesService } from '../../Products-Services/products-services.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  spinner = false;
  // id!: number;
  id: any;
  targetItem: any = {};
  constructor(
    private get_id_from_url: ActivatedRoute,
    private get_id: ProductsServicesService
  ) {
    this.id = this.get_id_from_url.snapshot.paramMap.get('id');
    // console.log(this.id);
  }
  ngOnInit(): void {
    this.Get_products_from_Services();
  }
  Get_products_from_Services() {
    this.spinner = true;
    this.get_id.get_product_by_id(this.id).subscribe((res: any) => {
      this.targetItem = res;
      // console.log(res);
      this.spinner = false;
    });
  }
}
