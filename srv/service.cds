using { capex as cx } from '../db/schema';

service triggerService @(path : '/odata/v4') {
    action triggerWorkflow(param: String) returns String;

     entity currency as projection on cx.Currency;
};

