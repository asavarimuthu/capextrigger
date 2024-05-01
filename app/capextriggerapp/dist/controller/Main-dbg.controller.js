sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    'sap/ui/core/BusyIndicator'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,BusyIndicator) {
        "use strict";

        return Controller.extend("com.sap.capextriggerapp.controller.Main", {
            onInit: function () {

            },
            _fetchToken: function () {
                var fetchedToken;
      
                jQuery.ajax({
                  url: "/odata/v4/xsrf-token",
                  method: "GET",
                  async: false,
                  headers: {
                    "X-CSRF-Token": "Fetch",
                  },
                  success(result, xhr, data) {
                    fetchedToken = data.getResponseHeader("X-CSRF-Token");
                  },
                });
                return fetchedToken;
              },
              triggerWorkflow1:function(){
                var servicePath="/odata/v4";

                const tokenResponse= fetch(`${servicePath}getCSRFToken()`,{
                    method:'GET',
                    headers:{
                     'X-CSRF-Token':'fetch'
                    }
                    });
                    
                    const xsrfToken=tokenResponse.headers.get('X-CSRF-Token');

               /* $.ajax({
                    url: "/odata/v4",
                    type: "GET",
                    async: true,
                    beforeSend: function(xhr) {
                        sap.ui.core.BusyIndicator.show(0);
                        xhr.setRequestHeader("X-CSRF-Token", "Fetch");
                    },
                    complete: function(xhr) {
                        // after requesting the token, save this into a variable.
                        // funny thing: we don't use it anywhere, since oData.create
                        // already handles this. However, without this call the OData Service
                        // denies my requests. So, let's stick to this until I find a more
                        // beautiful solution.
                        var token = xhr.getResponseHeader("X-CSRF-Token");
                    }
                }); */
              },
            triggerWorkflow_temp:function(){

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-Token': token
                    }
                });
                var data={};
                jQuery.ajax({
                    url: "/odata/v4/triggerWorkflow",
                    method: "POST",
                    contentType: "application/json",
                    async: false,
                    data: JSON.stringify(data),
                    headers: {
                        'X-CSRF-Token': token
                     },
                     beforeSend: function(xhr) {
                     }
                  });
              
            },
            triggerWorkflow_tobecheckedlater:function(){
                var data={};
                var that=this;
                this.byId("triggertile").setState("Loading");
              //  var url=window.location.host.includes("launchpad")?"/dcf178ae-e027-422d-a949-c25ac9e0af18.capextriggerrouter.comsapcapextriggerapp/~180424184331+0000~":"";
        /*     $.ajax({
                url: "/odata/v4",
                type: "GET",
                beforeSend: function(xhr){
                    xhr.setRequestHeader('X-CSRF-Token', 'fetch');
                  },
                  complete : function(response) {
                    $.ajax({
                        url: "/odata/v4/triggerWorkflow",
                        type: 'POST',
                        data: JSON.stringify(data),
                        processData: false,
                        contentType: 'application/json',
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader("X-CSRF-Token",response.getResponseHeader('X-CSRF-Token'));
                          },
                        success:function(oData, oResponse){
                            that.byId("triggertile").setState("Loaded");
                            MessageToast.show(oData.value);
                     },
                        error:function(oError){
                         var sMsg=oError.responseText
                     }
                     });
                },
                error:function(err){
                    debugger;
                }
            }); */
             
             
             
            },
            triggerWorkflow:function(){
              $.ajax({
                method: 'POST',
                url: '/odata/v4/triggerWorkflow',
                contentType: 'application/json',
                data: JSON.stringify({ param: 'value' }),
                success: function(response) {
                  console.log(response);
                  // Handle success response
                },
                error: function(xhr, status, error) {
                  console.error(xhr.responseText);
                  // Handle error response
                }
              });
          },
            triggerWorkflow_odata:function(){
              var oModel=this.getView().getModel("TriggerModel");

              oModel.callFunction('/triggerWorkflow', {
                method: 'POST',
                urlParameters: { param: 'value' },
                success: function(response) {
                  console.log(response);
                  // Handle success response
                },
                error: function(error) {
                  console.error(error);
                  // Handle error response
                }
              });
            },

            triggerWorkflow_canbeusedtemporarily:function(){
              this.byId("triggertile").setState("Loading");
              this.showBusyIndicator(4000);
              this.byId("triggertile").setState("Loaded");
             

            },
            hideBusyIndicator : function() {
              BusyIndicator.hide();
              MessageToast.show("Triggered Successfully");
            },

            showBusyIndicator : function (iDuration, iDelay) {
              BusyIndicator.show(iDelay);
        
              if (iDuration && iDuration > 0) {
                if (this._sTimeoutId) {
                  clearTimeout(this._sTimeoutId);
                  this._sTimeoutId = null;
                }
        
                this._sTimeoutId = setTimeout(function() {
                  this.hideBusyIndicator();
                }.bind(this), iDuration);
              }
            }
        
        });
    });
