import { Component, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainPage {
  @ViewChild('AddressForm', {static: false}) AddressForm;

  public country_list: string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
    ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
    ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
    ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
    ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
    ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
    ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
    ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
    ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
    ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
    ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
    ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
    ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia"
    ,"Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"];

  public addressList: Address[] = [];
  public current_name: string;
  public current_street: string;
  public current_zip: string;
  public current_country: string;
  public current_index: number;
  public editingItem = false;
  public showingItem = false;
  public showMainScreen = true;

  constructor() {}

  onSubmit() {
    // Create a new element if we are not editing an existing one. Otherwise, modify selected element
    if (!this.editingItem) {
      this.addressList.push({name: this.current_name, address: {street: this.current_street, zip: this.current_zip, country: this.current_country} });
      this.AddressForm.reset();
    }
    else {
      this.addressList[this.current_index] = ({name: this.current_name,
        address: {street: this.current_street, zip: this.current_zip, country: this.current_country} });
      this.editingItem = false;
    }
  }

  itemSelected (item, index) {
    this.current_name = item.name;
    this.current_street = item.address.street;
    this.current_zip = item.address.zip;
    this.current_country = item.address.country;
    this.current_index = index;
    this.showingItem = true;
    this.editingItem = false;
  }

  discardChanges() {
      this.editingItem = false;
      this.current_name = this.addressList[this.current_index].name;
      this.current_street = this.addressList[this.current_index].address.street;
      this.current_zip = this.addressList[this.current_index].address.zip;
      this.current_country = this.addressList[this.current_index].address.country;
  }

  deleteItem() {
    this.addressList.splice(this.current_index, 1);
  }

  resetFormCurrentValues() {
    this.current_name = '';
    this.current_street = '';
    this.current_zip = '';
    this.current_country = '';
  }

  changeCurrentCountryValue(value) {
    this.current_country = value;
  }
}

export class Address {
  constructor(
    public name: string,
    public address: AddressDetails
  ) {  }
}

export class AddressDetails {
  constructor(
    public street: string,
    public zip: string,
    public country: string
  ) {  }
}
