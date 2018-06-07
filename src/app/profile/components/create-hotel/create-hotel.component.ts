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
      userId: [1101, [Validators.required]],
      name: [, [Validators.required]],
      chainName: [],
      propertyType: [[Validators.required]],
      rating: [],
      country: [, [Validators.required]],
      latitude: [],
      state: [, [Validators.required]],
      pincode: [, [Validators.required]],
      address: [, [Validators.required]],
      area: [, [Validators.required]],
      longitude: [],
      city: [, [Validators.required]],
      phone: [, [Validators.required]],
      websiteLink: [, [Validators.required]],
      description: [],
      checkIn: [, [Validators.required]],
      checkOut: [, [Validators.required]],
      bankName: [, [Validators.required]],
      bankBranchName: [, [Validators.required]],
      bankAccountName: [, [Validators.required]],
      bankAccountId: [, [Validators.required]],
      bankIfscCode: [, [Validators.required]],
      hotelPanNumber: [, [Validators.required]],
      ownerPersonName: [, [Validators.required]],
      ownerPersonEmail: [, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$")]],
      ownerPersonMobile: [, [Validators.required]],
      ownerPersonFax: [],
      contactPersonName: [],
      contactPersonEmail: [, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$")]],
      contactPersonFax: [],
      contactPersonMobile: [],
      timeZone: [, [Validators.required]],
      currency: [],
      amenties: [],
      imageURL: []
    });

    this.activatedRoute.params.subscribe(res => this.hotelId = res['hotelId']);

    if (this.hotelId) {
      console.log(this.hotelId);
      this.updateHotelFormDetails();
    }

  }

  updateHotelFormDetails() {

    // let hotelDetails = { "hotelId": 328, "name": "Scrunch 123", "chainName": "Carlson Rezidor", "propertyType": 8, "rating": 4, "country": 1, "latitude": 0.0, "state": 16, "pincode": "560082", "address": "demo", "area": 0, "longitude": 0.0, "city": 11, "description": "eendasednkasjd", "checkIn": "12:00 PM", "checkOut": "12:00 PM", "ownerPersonFax": "", "contactPersonFax": "", "amenties": [{ "amenityId": 1, "amenityName": "Railway Transfer", "selected": true }, { "amenityId": 2, "amenityName": "Airport Transfer", "selected": true }, { "amenityId": 3, "amenityName": "Ayurveda Center", "selected": false }, { "amenityId": 4, "amenityName": "Banquets", "selected": false }, { "amenityId": 5, "amenityName": "Business Center", "selected": false }, { "amenityId": 6, "amenityName": "Bar", "selected": false }, { "amenityId": 7, "amenityName": "Cable TV", "selected": false }, { "amenityId": 8, "amenityName": "Car Rental", "selected": false }, { "amenityId": 9, "amenityName": "Tea and Coffee Maker", "selected": true }, { "amenityId": 10, "amenityName": "Conferencing Facility", "selected": true }, { "amenityId": 11, "amenityName": "Credit Card", "selected": true }, { "amenityId": 12, "amenityName": "Doctor on Call", "selected": true }, { "amenityId": 13, "amenityName": "Dry Clean", "selected": false }, { "amenityId": 14, "amenityName": "Golf", "selected": false }, { "amenityId": 15, "amenityName": "Fully Equipped Gym", "selected": false }, { "amenityId": 16, "amenityName": "Rooms for Differently Abled", "selected": false }, { "amenityId": 17, "amenityName": "Hot Water", "selected": false }, { "amenityId": 18, "amenityName": "Internet", "selected": false }, { "amenityId": 19, "amenityName": "Laundry", "selected": false }, { "amenityId": 20, "amenityName": "Outdoor Games", "selected": true }, { "amenityId": 21, "amenityName": "Parking", "selected": true }, { "amenityId": 22, "amenityName": "Pets Allowed", "selected": false }, { "amenityId": 23, "amenityName": "Swimming Pool", "selected": false }, { "amenityId": 24, "amenityName": "Power Backup", "selected": false }, { "amenityId": 25, "amenityName": "Room Service", "selected": false }, { "amenityId": 26, "amenityName": "Restaurant", "selected": false }, { "amenityId": 27, "amenityName": "Locker", "selected": false }, { "amenityId": 28, "amenityName": "Shopping", "selected": false }, { "amenityId": 29, "amenityName": "Spa", "selected": false }, { "amenityId": 30, "amenityName": "Steam Room", "selected": false }, { "amenityId": 31, "amenityName": "Travel Desk", "selected": false }, { "amenityId": 32, "amenityName": "Free Wifi", "selected": false }, { "amenityId": 33, "amenityName": "Currency Exchange", "selected": false }, { "amenityId": 34, "amenityName": "Refrigerator", "selected": false }, { "amenityId": 35, "amenityName": "Fishing", "selected": false }, { "amenityId": 36, "amenityName": "AC", "selected": false }, { "amenityId": 37, "amenityName": "Acoustic Panels", "selected": false }, { "amenityId": 38, "amenityName": "Free Breakfast", "selected": false }, { "amenityId": 39, "amenityName": "E-Gaming Stations", "selected": false }, { "amenityId": 40, "amenityName": "Ghar Ka Swaad", "selected": false }, { "amenityId": 41, "amenityName": "Ice Cube Machine", "selected": false }, { "amenityId": 42, "amenityName": "Children\u0027s Play Area", "selected": false }, { "amenityId": 43, "amenityName": "Pool Table", "selected": false }, { "amenityId": 44, "amenityName": "In Room Dining", "selected": false }, { "amenityId": 45, "amenityName": "Shoe Shining Machine", "selected": false }, { "amenityId": 46, "amenityName": "Special Fasting Snacks", "selected": false }, { "amenityId": 47, "amenityName": "Vending Machine", "selected": false }, { "amenityId": 48, "amenityName": "Complimentary Bottled Water", "selected": false }, { "amenityId": 49, "amenityName": "Women Traveller Special", "selected": false }, { "amenityId": 50, "amenityName": "Breakfast on the Go", "selected": false }, { "amenityId": 51, "amenityName": "AC Rooms", "selected": false }, { "amenityId": 52, "amenityName": "Lift/Elevator", "selected": false }, { "amenityId": 53, "amenityName": "ATM", "selected": false }, { "amenityId": 54, "amenityName": "Balcony", "selected": false }, { "amenityId": 55, "amenityName": "Extra Bed", "selected": false }, { "amenityId": 56, "amenityName": "Room View", "selected": false }, { "amenityId": 57, "amenityName": "Entertainment", "selected": false }, { "amenityId": 58, "amenityName": "Bath Tub", "selected": false }, { "amenityId": 59, "amenityName": "Room Heater", "selected": false }, { "amenityId": 60, "amenityName": "WheelChair Accessible", "selected": false }, { "amenityId": 61, "amenityName": "All rooms have attached bath, running hot and cold water", "selected": false }, { "amenityId": 62, "amenityName": "Safe deposit", "selected": false }, { "amenityId": 63, "amenityName": "laundry service", "selected": false }, { "amenityId": 64, "amenityName": "Transport arrangement for sight- seeing", "selected": false }, { "amenityId": 65, "amenityName": "In house Laundry and dry cleaning services", "selected": false }, { "amenityId": 66, "amenityName": "Multi cuisine restaurant for veg / Non Veg", "selected": false }, { "amenityId": 67, "amenityName": "Bicycle Rental", "selected": false }, { "amenityId": 68, "amenityName": "Trekking", "selected": false }, { "amenityId": 69, "amenityName": "Rafting", "selected": false }, { "amenityId": 70, "amenityName": "Rock climbing", "selected": false }, { "amenityId": 71, "amenityName": "Makeup / Shaving Mirror", "selected": false }, { "amenityId": 72, "amenityName": "Luggage Rack", "selected": false }, { "amenityId": 73, "amenityName": "TELEPHONE", "selected": false }, { "amenityId": 74, "amenityName": "MONEY CHANGING", "selected": false }, { "amenityId": 75, "amenityName": "FAX / STD / ISD /", "selected": false }, { "amenityId": 76, "amenityName": "Spacious lawns", "selected": false }, { "amenityId": 77, "amenityName": "Outdoor decks", "selected": false }, { "amenityId": 78, "amenityName": "Multi Cuisine Restaurant", "selected": false }, { "amenityId": 79, "amenityName": "Attach bathrooms", "selected": false }, { "amenityId": 80, "amenityName": "Wi-Fi", "selected": false }, { "amenityId": 82, "amenityName": "Cultural Programmer on request", "selected": false }, { "amenityId": 83, "amenityName": "Eco-tourism", "selected": false }, { "amenityId": 86, "amenityName": "Bonfire/ Campfire", "selected": false }, { "amenityId": 87, "amenityName": "Front desk", "selected": false }, { "amenityId": 88, "amenityName": "Taxi on Call", "selected": false }, { "amenityId": 89, "amenityName": "Cold running water in each tent and room", "selected": false }, { "amenityId": 90, "amenityName": "All tents are facing Pangong Tso Lake", "selected": false }, { "amenityId": 91, "amenityName": "All tents are neat and clean", "selected": false }, { "amenityId": 92, "amenityName": "Up to date medical facility", "selected": false }, { "amenityId": 93, "amenityName": "Hot water also available", "selected": false }, { "amenityId": 94, "amenityName": "Attached Bathrooms", "selected": false }, { "amenityId": 95, "amenityName": "Ample Parking space", "selected": false }, { "amenityId": 96, "amenityName": "Electricity after Sunset", "selected": false }, { "amenityId": 97, "amenityName": "Bonfire on request", "selected": false }, { "amenityId": 98, "amenityName": "Oxygen Cylinders", "selected": false }, { "amenityId": 100, "amenityName": "Free Parking", "selected": false }, { "amenityId": 101, "amenityName": "Transportation Service", "selected": false }, { "amenityId": 102, "amenityName": "Oxygen Therapy", "selected": false }, { "amenityId": 103, "amenityName": "Medical Services", "selected": false }, { "amenityId": 104, "amenityName": "Complimentary Toiletries", "selected": false }, { "amenityId": 105, "amenityName": "Lake facing view", "selected": false }, { "amenityId": 106, "amenityName": "Waterproof tents", "selected": false }, { "amenityId": 107, "amenityName": "All rooms have attached bath, with running hot and cold water", "selected": false }, { "amenityId": 108, "amenityName": "Different types of Cuisines like Chinese, Continental, Italian, Tibetan, Ladakhi and Indian", "selected": false }, { "amenityId": 109, "amenityName": "Complete arrangement for sightseeing/trekking", "selected": false }, { "amenityId": 110, "amenityName": "Airport pick-up on request", "selected": false }, { "amenityId": 111, "amenityName": "Laundry facilities", "selected": false }, { "amenityId": 112, "amenityName": "Cultural show on demand", "selected": false }, { "amenityId": 113, "amenityName": "Travel Help desk", "selected": false }, { "amenityId": 115, "amenityName": "In House Generator", "selected": false }, { "amenityId": 116, "amenityName": "Camel Safari Rides", "selected": false }, { "amenityId": 118, "amenityName": "24 hrs Hot \u0026 Cold Shower", "selected": false }, { "amenityId": 119, "amenityName": "Airport Transfers", "selected": false }, { "amenityId": 120, "amenityName": "Dining Hall with mouth watering food", "selected": false }, { "amenityId": 121, "amenityName": "Proper Guidance", "selected": false }, { "amenityId": 122, "amenityName": "Open Air Barbeque", "selected": false }, { "amenityId": 123, "amenityName": "Guest Car Park", "selected": false }, { "amenityId": 124, "amenityName": "Packed Lunch", "selected": false }, { "amenityId": 125, "amenityName": "Calling Facilities", "selected": false }, { "amenityId": 126, "amenityName": "Newspapers", "selected": false }, { "amenityId": 127, "amenityName": "Wake-up service", "selected": false }, { "amenityId": 128, "amenityName": "Fax/photocopying", "selected": false }, { "amenityId": 129, "amenityName": "Newspapers In Lobb?y", "selected": false }, { "amenityId": 130, "amenityName": "Smoking Rooms", "selected": false }, { "amenityId": 131, "amenityName": "Meeting Room", "selected": false }], "imageURL": [] };

    // console.log(hotelDetails);

    
    this.createHotelService.getHotelDetails(this.hotelId).subscribe(res => {
      console.log(res);
      this.pupulateForm(res);
    }),
    err => {
      console.error(err);
    }
  }

  pupulateForm(hotelDetails){
    this.createHotelForm.controls.name.setValue(hotelDetails.name);
    this.createHotelForm.controls.chainName.setValue(hotelDetails.chainName);
    this.createHotelForm.controls.propertyType.setValue(hotelDetails.propertyType);
    this.createHotelForm.controls.rating.setValue(hotelDetails.rating);
    
    this.createHotelForm.controls.rating.value = hotelDetails.rating;
    console.log(hotelDetails.rating);
    this.createHotelForm.controls.country.setValue(hotelDetails.country);
    this.createHotelForm.controls.latitude.setValue(hotelDetails.latitude);
    this.createHotelForm.controls.state.setValue(hotelDetails.state);
    this.createHotelForm.controls.pincode.setValue(hotelDetails.pincode);
    this.createHotelForm.controls.address.setValue(hotelDetails.address);
    this.createHotelForm.controls.area.setValue(hotelDetails.area);
    this.createHotelForm.controls.longitude.setValue(hotelDetails.longitude);
    this.createHotelForm.controls.city.setValue(hotelDetails.city);
    this.createHotelForm.controls.phone.setValue(hotelDetails.phone);
    this.createHotelForm.controls.websiteLink.setValue(hotelDetails.websiteLink);
    this.createHotelForm.controls.description.setValue(hotelDetails.description);
    this.createHotelForm.controls.checkIn.setValue(hotelDetails.checkIn);
    this.createHotelForm.controls.checkOut.setValue(hotelDetails.checkOut);
    this.createHotelForm.controls.bankName.setValue(hotelDetails.bankName);
    this.createHotelForm.controls.bankBranchName.setValue(hotelDetails.bankBranchName);
    this.createHotelForm.controls.bankAccountName.setValue(hotelDetails.bankAccountName);
    this.createHotelForm.controls.bankAccountId.setValue(hotelDetails.bankAccountId);
    this.createHotelForm.controls.bankIfscCode.setValue(hotelDetails.bankIfscCode);
    this.createHotelForm.controls.hotelPanNumber.setValue(hotelDetails.hotelPanNumber);
    this.createHotelForm.controls.ownerPersonName.setValue(hotelDetails.ownerPersonName);
    this.createHotelForm.controls.ownerPersonEmail.setValue(hotelDetails.ownerPersonEmail);
    this.createHotelForm.controls.ownerPersonMobile.setValue(hotelDetails.ownerPersonMobile);
    this.createHotelForm.controls.ownerPersonMobile.setValue(hotelDetails.ownerPersonMobile);
    this.createHotelForm.controls.ownerPersonFax.setValue(hotelDetails.ownerPersonFax);
    this.createHotelForm.controls.contactPersonName.setValue(hotelDetails.contactPersonName);
    this.createHotelForm.controls.contactPersonFax.setValue(hotelDetails.contactPersonFax);
    this.createHotelForm.controls.contactPersonEmail.setValue(hotelDetails.contactPersonEmail);
    this.createHotelForm.controls.contactPersonMobile.setValue(hotelDetails.contactPersonMobile);
    this.createHotelForm.controls.timeZone.setValue(hotelDetails.timeZone);
    this.createHotelForm.controls.currency.setValue(hotelDetails.currency);
    this.createHotelForm.controls.amenties.setValue(hotelDetails.amenties);
    this.amentiesList = hotelDetails.amenties;
    this.createHotelForm.controls.imageURL.setValue(hotelDetails.imageURL);

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

  getCountries() {
    this.createHotelService.getCountries().subscribe(
      res => {
        this.countryList = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getStatesByCountryId(countryId) {
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
  getCitiesByStateId(stateId) {
    this.createHotelService.getCitiesByStateId(stateId).subscribe(
      res => {
        this.cityList = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getLocationByCityId(cityId) {
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
      err => {
        console.log(err)
      }
    );
  }

  amenitySelected(am) {
    if (this.selectedAmenitiesNames.includes(am.amenityName)) {
      this.selectedAmenities = this.selectedAmenities.filter(item => item !== am);
      this.selectedAmenitiesNames = this.selectedAmenitiesNames.filter(item => item !== am.amenityName);
      this.amentiesList.forEach(obj => {
        if (obj == am) obj.selected = false;
      });
    } else {
      this.selectedAmenities.push(am.amenityId);
      this.selectedAmenitiesNames.push(am.amenityName);
      this.amentiesList.forEach(obj => {
        if (obj == am) obj.selected = true;
      });
    }
  }

  imageUrlsEntered(imageURLs) {
    this.createHotelForm.controls.imageURL.setValue(imageURLs.split(','));
  }
}



