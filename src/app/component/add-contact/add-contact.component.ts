import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/iContact';
import { IGroup } from 'src/app/models/iGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllGrups().subscribe((data: IGroup[]) => {
      this.groups = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }

}
