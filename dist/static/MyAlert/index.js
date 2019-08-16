import Vue from "vue";
import MyToastComponent from './MyToast'
import MyAlertComponent from './MyAlert'
import MyConfirmComponent from './MyConfirm'

let MyToast = (options={}) => {
  let ToastConstructor = Vue.extend(MyToastComponent);
  let instance = new ToastConstructor({el:document.createElement("msgbox")});
  document.body.appendChild(instance.$el);
  Object.assign(instance.$data,options);
  return new Promise((resolve,reject)=>{
    instance.ShowMyToast = true;
    setTimeout(()=>{instance.ShowMyToast = false},1500);
  });
};
let MyAlert = (options={}) => {
  let AlertConstructor = Vue.extend(MyAlertComponent);
  let AlertInstance = new AlertConstructor({el:document.createElement("msgbox")});
  document.body.appendChild(AlertInstance.$el);
  Object.assign(AlertInstance.$data,options);
  return new Promise((resolve) => {
    AlertInstance.ShowMyAlert = true;
    let Btn = AlertInstance.Btn;
    AlertInstance.Btn = () =>{
      resolve();
      Btn();
    }
  })
};
let MyConfirm = (options={}) => {
  let ConfirmConstructor = Vue.extend(MyConfirmComponent);
  let ConfirmInstance = new  ConfirmConstructor({el:document.createElement("msgbox")});
  document.body.appendChild(ConfirmInstance.$el);
  Object.assign(ConfirmInstance.$data,options);
  return new Promise((resolve,reject) => {
    ConfirmInstance.ShowMyConfirm = true;
    let BtnLeft = ConfirmInstance.BtnLeft;
    let BtnRight = ConfirmInstance.BtnRight;
    ConfirmInstance.BtnLeft = () =>{
      resolve();
      BtnLeft();
    }
    ConfirmInstance.BtnRight = () =>{
      reject();
      BtnRight();
    }
  })
};

export default function (Vue) {
  Vue.prototype.$MyToast = MyToast;
  Vue.prototype.$MyAlert = MyAlert;
  Vue.prototype.$MyConfirm = MyConfirm;
}
