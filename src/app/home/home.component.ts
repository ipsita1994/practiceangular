import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) { }

    ngOnInit() {
    }
  //  openDelModal(template: TemplateRef<any>,item) {
    openDelModal(template: TemplateRef<any>) {
        //   this.idx = this.userlist.indexOf(item);
        this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    }
    confirm(){
    }
    decline(){
        this.modalRef.hide();
    }
}
