import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AjaxComponent } from './ajax/ajax.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  // ルーティングの設定
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'model', component: ModelComponent },
  { path: 'ajax', component: AjaxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
