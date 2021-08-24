import { CartItem } from "../../../../modules/sales/src/models/cart-item";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromTypes from "e-store-typings";
import { ProductId } from "e-store-typings";
import { Router } from "@angular/router";

@Component({
  selector: "es-order-submit-page",
  templateUrl: "./order-submit-page.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSubmitContainerComponent {
  constructor(private readonly router: Router) {}
  placeOrder() {
    alert("Thanks for shopping with us, please continue shopping");
    this.router.navigate(["/"]);
  }
}
