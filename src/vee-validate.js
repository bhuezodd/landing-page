import Vue from "vue";
import { extend, localize, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en";

// Add components
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// Add rules
for (const rule in rules) {
    extend(rule, {
        ...rules[rule],
    });
}
// Add location
localize({
    en
});

