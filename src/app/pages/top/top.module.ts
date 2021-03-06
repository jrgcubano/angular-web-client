import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RouterModule} from "@angular/router";
import {TopComponent} from "./top.component";
import {SharedModule} from "../../shared/shared.module";
import {FacebookLoginModule} from "../../components/facebook/facebookLogin.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FacebookLoginModule,
  ],
  declarations: [
    TopComponent,
  ],
  exports: [
    TopComponent,
  ]
})
export class TopModule {
}
