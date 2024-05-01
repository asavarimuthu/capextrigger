const cds = require("@sap/cds");
//const xenv = require("@sap/xsenv");
//const axios = require("axios");
//const btoa = require("btoa");
//const qs = require("qs");
//const FormData = require("form-data");
//const { executeHttpRequest } = require('@sap-cloud-sdk/core');
//var XMLHttpRequest = require('xhr2');



class triggerService extends cds.ApplicationService {
  /** Registering custom event handlers */


  async init() {

    this.on('triggerWorkflow',async (req)=>{
     //return await this.triggerWorkflow();
     return "Triggered Saga";

    } )

    return super.init();
  }


 /* async triggerWorkflow(){

    //Get the token for Service manager class
    
    var data={
        "definitionId": "us10.eacc5c99trial.capitalexpenditureapprovalprocesssample.capitalExpenditureApprovalProcess",
        "context": {
            "fbMX9DyfVJ1g89kp_thh8sI": "",
            "fbOMc2QlXtQMwlY0rnhbfYc": "",
            "fbg5ekMlJsALFc2vvUEN5HI": "",
            "fbB6LmfiVnSasWwNOHX7hBZ": "",
            "fbenGLh1CfnUIRo2v85ftma": "",
            "type_": "Software",
            "country": "Germany",
            "businessUnit": "Purchasing",
            "fbTILy1AOZO3L9DWGs56QrA": "",
            "fbWR70rXgKsW9DruhJCyKeW": 0,
            "fb5LUDPHtmfAmiticM_G9g1": 0,
            "fbvpRo9nwQHBycONc1pK6o0": 0,
            "currency": "EUR",
            "fbPssvRaJAiHq8KhKu1toL6": 0,
            "iRR": 0,
            "energyEfficiency": 0,
            "cO2Efficiency": 0,
            "energyCostSavings": 0,
            "waterSavings": 0
        }
    };
    let clientid="sb-efbc43b7-7398-4c0a-957e-d2a989636235!b269310|xsuaa!b49390";
    let clientsecret="ad8866d5-3f1c-401e-8739-39c534fa13f1$HFjBHOlb5HGetCZvjCBQMD8KQZpWXXKmFRBtS9B90wY=";
    let authurl="https://eacc5c99trial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials";
   
    let token=await this.getBearerToken(clientid, clientsecret,authurl);
    let url="https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/public/workflow/rest/v1/workflow-instances";

   return await axios
    .post(
        url, 
        data, { 
        headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "DataServiceVersion":"2.0",
        'X-Requested-With': 'XMLHttpRequest'
    },
    
  })
    .then((response) => {
        return "Triggered Succesfully";
    })
    .catch((error) => {
        throw new Error(error);
    });

        
  }


  async getBearerToken(clientid, clientsecret,url){

    try {
       
         const basicAuth = btoa(`${clientid}:${clientsecret}`);
         const headers = {
             authorization: `Basic ${basicAuth}`,
             "Content-Type": "application/x-www-form-urlencoded",
         };
         return await axios
             .post(
                 url,  
                 qs.stringify({ grant_type: "client_credentials" }),
                 {
                     headers: headers,
                 }
             )
             .then((response) => {
                 return response.data.access_token;
             })
             .catch((error) => {
                 throw new Error(error);
             });
     } catch (err) {
         throw new Error("Some Error has occured. The cause is" + err);
     } 
   } */
 
}
module.exports = { triggerService };