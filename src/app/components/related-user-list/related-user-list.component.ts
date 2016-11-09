import {Observable} from "rxjs/Observable";
import {Component, OnInit, Input} from "@angular/core";
import {RelatedUser} from "../../core/domains";
import {HttpErrorHandler} from "../../core/services/http-error-handler";
import {styles} from "./related-user-list.component.styles";

@Component({
  selector: 'mpt-related-user-list',
  templateUrl: 'related-user-list.component.html',
})
export class RelatedUserListComponent implements OnInit {

  @Input() listProvider: (params: {maxId: number|null, count: number}) => Observable<RelatedUser[]>;

  styles: any = styles;
  users: RelatedUser[] = [];
  noMoreUsers: boolean = false;

  constructor(private errorHandler: HttpErrorHandler) {
  }

  ngOnInit(): any {
    this.list();
  }

  loadMore() {
    const lastUser = this.users[this.users.length - 1];
    if (!lastUser) return false;
    this.list(lastUser.relationshipId);
  }

  private list(maxId: number|null = null) {
    this.listProvider({maxId: maxId, count: 5})
      .subscribe(users => {
          this.users = this.users.concat(users);
          this.noMoreUsers = users.length === 0;
        }, e => this.errorHandler.handle(e)
      )
    ;
  }

}
