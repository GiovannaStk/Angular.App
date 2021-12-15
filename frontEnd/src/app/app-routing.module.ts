import { DeleteComponent } from './components/product/delete/delete.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importando as rotas
import {HomeComponent} from './views/home/home.component';
import {ProducCrudComponent} from './views/produc-crud/produc-crud.component';
import { AboutMeComponent} from './views/about-me/about-me.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { UpdateComponent } from './components/product/update/update.component';

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

},{

  path: "products/update/:id",
  component: UpdateComponent

},{
  path: "products/delete/:id",
  component: DeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
