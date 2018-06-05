import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { CreateHotelService } from '../../services/create-hotel.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  public fileCount: Number = 0;
  public createHotelForm;
  public amentiesList;
  public countryList;
  public stateList;
  public cityList;
  public areaList;
  public propertyTypes;
  public amenitiesVisible: Boolean = false;
  public selectedAmenities = [];
  public selectedAmenitiesNames = [];
  public hotelId;
  
  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title,
    private createHotelService: CreateHotelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Create Hotel');
    this.getAmenitiesList();
    this.getPropertyTypes();
    this.getCountries();

    this.createHotelForm = this.formBuilder.group({
      userId: [1101,[Validators.required]],
      name: [,[Validators.required]],
      chainName: [],
      propertyType: [[Validators.required]],
      rating: [],
      country: [,[Validators.required]],
      latitude: [],
      state: [,[Validators.required]],
      pincode: [,[Validators.required]],
      address: [,[Validators.required]],
      area: [,[Validators.required]],
      longitude: [],
      city: [,[Validators.required]],
      phone: [,[Validators.required]],
      websiteLink: [,[Validators.required]],
      description: [],
      checkIn: [,[Validators.required]],
      checkOut: [,[Validators.required]],
      bankName: [,[Validators.required]],
      bankBranchName: [,[Validators.required]],
      bankAccountName: [,[Validators.required]],
      bankAccountId: [,[Validators.required]],
      bankIfscCode: [,[Validators.required]],
      hotelPanNumber: [,[Validators.required]],
      ownerPersonName: [,[Validators.required]],
      ownerPersonEmail: [,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$")]],
      ownerPersonMobile: [,[Validators.required]],
      ownerPersonFax: [],
      contactPersonName: [],
      contactPersonEmail: [,[ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$")]],
      contactPersonFax: [],
      contactPersonMobile: [],
      timeZone: [,[Validators.required]],
      currency: [],
      amenties: [],
      imageURL:[]
    });

    this.activatedRoute.params.subscribe(res => this.hotelId = res['hotelId']);
    
    if(this.hotelId){
      console.log(this.hotelId);
      
      this.updateHotelFormDetails();
    }

  }

  updateHotelFormDetails(){
    this.createHotelService.getHotelDetails(this.hotelId).subscribe(res => {
      console.log(res);
    }),
    err => {
      console.error(err);
    }
  }

  autoCompleteCallback(selectedData: any) {
    let countryShortName;

    selectedData.data.address_components.forEach(adr => {
      if (adr.types.includes("country")) {
        countryShortName = adr.short_name;
      }
      if (adr.types.includes("postal_code")) this.createHotelForm.controls.pincode.setValue(adr.long_name)
    });

    this.createHotelForm.controls.address.setValue(selectedData.data.formatted_address);
    this.createHotelForm.controls.latitude.setValue(selectedData.data.geometry.location.lat);
    this.createHotelForm.controls.longitude.setValue(selectedData.data.geometry.location.lng);
    this.createHotelForm.controls.phone.setValue(selectedData.data.formatted_phone_number);
    this.createHotelForm.controls.websiteLink.setValue(selectedData.data.website);
    this.createHotelForm.controls.name.setValue(selectedData.data.name);

    this.createHotelService.getCurrencyAndTimeZone(countryShortName).subscribe(
      res => {
        this.createHotelForm.controls.timeZone.setValue(res['timezones'][0]);
        this.createHotelForm.controls.currency.setValue(res['currencies'][0]);
      },
      err => {
      }
    );

  }

  getAmenitiesList() {
    this.createHotelService.getAmenitiesList().subscribe(
      res => {
        this.amentiesList = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  getPropertyTypes() {
    this.createHotelService.getPropertyTypes().subscribe(
      res => {
        this.propertyTypes = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  getCountries(){
    this.createHotelService.getCountries().subscribe(
      res => {
        this.countryList = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getStatesByCountryId(countryId){
    this.createHotelService.getStatesByCountryId(countryId).subscribe(
      res => {
        this.stateList = res;
        console.log(this.stateList);
        
      },
      err => {
        console.error(err);
      }
    );
  }
  getCitiesByStateId(stateId){
    this.createHotelService.getCitiesByStateId(stateId).subscribe(
      res => {
        this.cityList = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getLocationByCityId(cityId){
    this.createHotelService.getLocationByCityId(cityId).subscribe(
      res => {
        this.areaList = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  hotelImageUploaded(e) {
    this.fileCount = e.target.files.length;
  }

  CreateHotel() {
    this.createHotelForm.controls.amenties.setValue(this.selectedAmenities);
    console.log(this.createHotelForm.value);
    this.createHotelService.createHotel(this.createHotelForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/profile/details');
      },
      err =>{
        console.log(err)
      }
    );
  }

  amenitySelected(am) {
    if (this.selectedAmenitiesNames.includes(am.amenityName)) {
      this.selectedAmenities = this.selectedAmenities.filter(item => item !== am);
      this.selectedAmenitiesNames = this.selectedAmenitiesNames.filter(item => item !== am.amenityName);
      this.amentiesList.forEach(obj => {
        if(obj == am) obj.selected = false;
      });
    } else {
      this.selectedAmenities.push(am.amenityId);
      this.selectedAmenitiesNames.push(am.amenityName);
      this.amentiesList.forEach(obj => {
        if(obj == am) obj.selected = true;
      });
    }
  }

  imageUrlsEntered(imageURLs){
    this.createHotelForm.controls.imageURL.setValue(imageURLs.split(','));
  }
}



  