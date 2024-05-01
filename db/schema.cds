namespace capex;

using { cuid ,managed} from '@sap/cds/common';

entity Currency{
    currencycode:String;
    usdvalue:Decimal;
}