//In the HTML, you MUST load all of your service JS files before loading
//this file, because the contents of the function initializeAllService()
//are defined in those service JS files.

//#############################---INIT PARAMETERS---#################################
const DEVICE_NAME_PREFIX = 'FlowIO';
let listOfServices = ['generic_access','battery_service',
controlServiceUUID, indicatorServiceUUID, pressureServiceUUID, powerOffServiceUUID, configServiceUUID, strainServiceUUID]; //MUST INCLUDE ALL SERVICES!
//If a service is not declared in the list, you cannot access it later. It is OK to have
//declared more services than those that are present on the device; the device will still
//show up in the list. Treat this list as an OR rather than an AND.
//(But obviously if you then later try accessing a service that is not on the device, you will get an error that it's not existing.)

//TODO: Maybe I can even remove all but one of the services.
//You can find the names of service names defined in the Web Bluetooth API at
//https://googlechrome.github.io/samples/web-bluetooth/characteristic-properties-async-await.html

//This function must contain all of the services that you wish to access:
async function initializeAllServices(){
  try{
    await initBatteryService(); //defined in "batteryService.js"
    await initConfigService(); //defined in "configService.js"
    await initPowerOffService(); //defined in "controlService.js"
    await initIndicatorService(); //defined in "controlService.js"
    await initControlService(); //defined in "controlService.js"
    await initPressureService(); //defined in "controlService.js"
    //await initStrainService(); //defined in "strainService.js"
  }catch(error){
    console.log("Init Error: " + error);
    throw "ERROR: initializeAllServices() failed."
  }
}
function enableControls(){
  document.querySelector('#disconnect_btn').disabled = false;
  document.querySelector('#batt_refresh_btn').disabled = false;
  document.querySelector('#config_select').disabled = false;
  document.querySelector('#autoOff_select').disabled = false;
  document.querySelector('#powerOff_btn').disabled = false;
  document.querySelector('#timeRemaining_btn').disabled = false;
  document.querySelector('#getLedStates_btn').disabled = false;
  document.querySelector('#toggleBlue_btn').disabled = false;
  document.querySelector('#toggleRed_btn').disabled = false;
  document.querySelector('#readError_btn').disabled = false;
  document.querySelector('#clearError_btn').disabled = false;
  document.querySelector('#port1_chk').disabled = false;
  document.querySelector('#port2_chk').disabled = false;
  document.querySelector('#port3_chk').disabled = false;
  document.querySelector('#port4_chk').disabled = false;
  document.querySelector('#port5_chk').disabled = false;
  document.querySelector('#inflate_btn').disabled = false;
  document.querySelector('#vacuum_btn').disabled = false;
  document.querySelector('#release_btn').disabled = false;
  document.querySelector('#stop_btn').disabled = false;
  document.querySelector('#stopall_btn').disabled = false;
  document.querySelector('#pwm_i').disabled = false;
  document.querySelector('#pwm_o').disabled = false;
  document.querySelector('#getPressure_btn').disabled = false;
  document.querySelector('#requestNew_btn').disabled = false;
  document.querySelector('#setminmax_btn').disabled = false;
  document.querySelector('#getmin_btn').disabled = false;
  document.querySelector('#getmax_btn').disabled = false;
  document.querySelector('#strain_refresh_btn').disabled = false;
}
function disableControls(){
  document.querySelector('#disconnect_btn').disabled = true;
  document.querySelector('#batt_refresh_btn').disabled = true;
  document.querySelector('#config_select').disabled = true;
  document.querySelector('#autoOff_select').disabled = true;
  document.querySelector('#powerOff_btn').disabled = true;
  document.querySelector('#timeRemaining_btn').disabled = true;
  document.querySelector('#getLedStates_btn').disabled = true;
  document.querySelector('#toggleBlue_btn').disabled = true;
  document.querySelector('#toggleRed_btn').disabled = true;
  document.querySelector('#readError_btn').disabled = true;
  document.querySelector('#clearError_btn').disabled = true;
  document.querySelector('#port1_chk').disabled = true;
  document.querySelector('#port2_chk').disabled = true;
  document.querySelector('#port3_chk').disabled = true;
  document.querySelector('#port4_chk').disabled = true;
  document.querySelector('#port5_chk').disabled = true;
  document.querySelector('#inflate_btn').disabled = true;
  document.querySelector('#vacuum_btn').disabled = true;
  document.querySelector('#release_btn').disabled = true;
  document.querySelector('#stop_btn').disabled = true;
  document.querySelector('#stopall_btn').disabled = true;
  document.querySelector('#pwm_i').disabled = true;
  document.querySelector('#pwm_o').disabled = true;
  document.querySelector('#getPressure_btn').disabled = true;
  document.querySelector('#requestNew_btn').disabled = true;
  document.querySelector('#setminmax_btn').disabled = true;
  document.querySelector('#getmin_btn').disabled = true;
  document.querySelector('#getmax_btn').disabled = true;
  document.querySelector('#strain_refresh_btn').disabled = true;
}
function enableReconnectBtn(){
  document.querySelector('#reconnect_btn').disabled = false;
}
function disableReconnectBtn(){
  document.querySelector('#reconnect_btn').disabled = true;
}

function log(text) {
    console.log(text);
    //This is how to make the new line appear at the top of the log!
    document.querySelector('#log').textContent = text + '\n' + document.querySelector('#log').textContent;
}

function clearLog() {
    document.querySelector('#log').textContent = "";
}
//##################################################################################
