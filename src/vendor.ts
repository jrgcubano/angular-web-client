import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/do";
import "jquery";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/collapse";
import * as toastr from "toastr";
import "toastr/build/toastr.css";
import "bootstrap/dist/css/bootstrap.css";

toastr.options.preventDuplicates = true;

if ('production' === ENV) {
} else {
}

