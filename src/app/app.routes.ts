import {RouterConfig} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserShowComponent} from "./components/user/user-show.component";
import {FollowingListComponent} from "./components/relationship/following-list.component";
import {FollowerListComponent} from "./components/relationship/follower-list.component";
import {UserListComponent} from "./components/user/user-list.component";
import {HelpComponent} from "./components/help/help.component";
import {UserEditComponent} from "./components/user/user-edit.component";
import {ProfileDataResolver} from "../shared/routes/profile-data.resolver";
import {LoginComponent} from "./components/login/login.component";

export const routes:RouterConfig = [
  {path: 'home', component: <any>HomeComponent},
  {path: 'users/:id', component: UserShowComponent},
  {path: 'users/:id/followings', component: FollowingListComponent},
  {path: 'users/:id/followers', component: FollowerListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'help', component: HelpComponent},
  {
    path: 'users/me/edit',
    component: UserEditComponent,
    resolve: {profile: ProfileDataResolver}
  },
  {path: 'login', component: LoginComponent},
];
