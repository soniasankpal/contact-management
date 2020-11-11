import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'second-component/:DisplayName' , component: SecondComponent},
  {path: 'app-component', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
