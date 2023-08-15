import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardModule } from './views/admin/dashboard/dashboard.module';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'', component:FrontLayoutComponent, children:[
    {path:'', loadChildren:()=>import('./views/front/home-page/home-page.module').then(m=>m.HomePageModule)},
    {path:'loginuser', loadChildren:()=>import('./views/front/userlogin/userlogin.module').then(m=>m.UserloginModule)},
    {path:'about', loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'prodacts', loadChildren:()=>import('./views/front/prodacts/prodacts.module').then(m=>m.ProdactsModule)},
    {path:'contact', loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)}

  ]},
  {path:'admin',component:AdminLayoutComponent, children:[
    {path:'', loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'loginadmin', loadChildren:()=>import('./views/admin/login-admin/login-admin.module').then(m=>m.LoginAdminModule)},
    {path:'contactliste', loadChildren:()=>import('./views/admin/contact-liste/contact-liste.module').then(m=>m.ContactListeModule)}

  ]}
  // {path:"admin", loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
