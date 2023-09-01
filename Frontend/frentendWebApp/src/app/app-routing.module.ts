import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardModule } from './views/admin/dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
const routes: Routes = [
  {path:'', component:FrontLayoutComponent, children:[
    {path:'', loadChildren:()=>import('./views/front/home-page/home-page.module').then(m=>m.HomePageModule)},
    {path:'about', loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'prodacts', loadChildren:()=>import('./views/front/prodacts/prodacts.module').then(m=>m.ProdactsModule)},
    {path:'contact', loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)}

  ]}, 
  {path:'admin',component:AdminLayoutComponent, children:[
    {path:'', loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'contactliste', loadChildren:()=>import('./views/admin/contact-liste/contact-liste.module').then(m=>m.ContactListeModule)},
    {path:'userliste', loadChildren:()=>import('./views/admin/user-liste/user-liste.module').then(m=>m.UserListeModule)},
    {path:'profil', loadChildren:()=>import('./views/admin/profile/profile.module').then(m=>m.ProfileModule)},
    {path:'adddecice', loadChildren:()=>import('./views/admin/add-device/add-device.module').then(m=>m.AddDeviceModule)},
    {path:'prodacts', loadChildren:()=>import('./views/admin/prodacts/prodacts.module').then(m=>m.ProdactsModule)},
    {path:'conseil', loadChildren:()=>import('./views/admin/conseil/conseil.module').then(m=>m.ConseilModule)},
    {path:'addconseil', loadChildren:()=>import('./views/admin/addconseil/addconseil.module').then(m=>m.AddconseilModule)}

  ]},
  {path:'login', component:AuthLayoutComponent, children:[
    {path:'', loadChildren:()=>import('./views/admin/login-admin/login-admin.module').then(m=>m.LoginAdminModule)},
    {path:'register', loadChildren:()=>import('./views/admin/register/register.module').then(m=>m.RegisterModule)},
    {path:'resetpassword', loadChildren:()=>import('./views/admin/reset-password/reset-password.module').then(m=>m.ResetPasswordModule)}
  ]}
  // {path:"admin", loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
