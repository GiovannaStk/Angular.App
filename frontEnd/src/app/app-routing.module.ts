
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importando as rotas
import {HomeComponent} from './views/home/home.component';
import {ProducCrudComponent} from './views/produc-crud/produc-crud.component';
import { AboutMeComponent} from './views/about-me/about-me.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent

},
{
  path: "products",
  component: ProducCrudComponent

},
{
  path: "aboutme",
  component: AboutMeComponent

},
{
  path: "products/create",
  component: ProductCreateComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
