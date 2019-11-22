import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DraggableComponent } from './draggable/draggable.component';
import { TreeComponent } from './tree/tree.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { SampleAddressFormComponent } from './sample-address-form/sample-address-form.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dragDrop', component: DraggableComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'table', component: SampleTableComponent},
  {path: 'form', component: SampleAddressFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
