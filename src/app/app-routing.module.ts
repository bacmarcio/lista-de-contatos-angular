import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts/admin', pathMatch: 'full' },
  { path: 'contacts/admin', component: ContactManagerComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent },
  { path: 'contacts/view/:contactId', component: ViewContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
