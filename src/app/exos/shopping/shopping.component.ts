import { Component, OnInit } from '@angular/core';

type Product = {
	id: number;
	name: string;
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
	currentId: number = 4;

	productName : string = '';

	products: Product[] = [
		{
			id: 1,
			name: "One Piece Vol 101"
		},
		{
			id: 2,
			name: "Chainsaw Man Vol 1",
		},
		{
			id: 3,
			name: "One Punch Man Vol 26",
		},
	];


  constructor() { }

  ngOnInit(): void {
  }

	addProduct(){
		const newProduct: Product = {
			id: this.currentId++,
			name: this.productName,
		}

		this.products.push(newProduct);
	}

	removeProduct(id: number) {
		const indexProduct = this.products.findIndex((p) => p.id === id);
		if (indexProduct === -1) return;

		this.products.splice(indexProduct, 1);
	}

}
