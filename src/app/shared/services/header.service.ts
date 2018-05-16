import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeaderService {

  constructor(
    private http: HttpClient
  ) { }

  public headerJson = {
    "menus": [
        {
            "name": "Booking Engine",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "Hotel Booking Report",
                    "actionUrl": "/support/hotelOrdersReport.html"
                },
                {
                    "name": "Manage Hotel Bookings",
                    "actionUrl": "/support/manageHotelBookings.html"
                },
                {
                    "name": "Hotel Package Booking Report",
                    "actionUrl": "/support/hotelPackageOrdersReport.html"
                },
                {
                    "name": "Hotel Booking Analysis Report",
                    "actionUrl": "/support/orderAnalysisReport.html"
                },
                {
                    "name": "Hotel Inventory Report",
                    "actionUrl": "/support/checkHotelInventory.html"
                },
                {
                    "name": "BE Log Report",
                    "actionUrl": "/support/beActionReport.html"
                },
                {
                    "name": "Tracking Report",
                    "actionUrl": "/support/beTrackingReport.html"
                },
                {
                    "name": "Manual Booking",
                    "actionUrl": "/support/manualBooking.html"
                }
            ]
        },
        {
            "name": "Channel Manager",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "CM Booking",
                    "actionUrl": "/support/arcHotelBookingReport.html"
                },
                {
                    "name": "Channel Status",
                    "actionUrl": "/support/viewArcChannelsStatus.html"
                },
                {
                    "name": "Activity Report",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "CM Log Report",
                            "actionUrl": "/support/arcActionReport.html"
                        },
                        {
                            "name": "Inventory Update Report",
                            "actionUrl": "/support/arcUpdateInventoryReport.html"
                        },
                        {
                            "name": "Price Update Report",
                            "actionUrl": "/support/arcUpdatePriceReport.html"
                        },
                        {
                            "name": "OTA Activation Report",
                            "actionUrl": "/support/productOTAReport.html"
                        },
                        {
                            "name": "Product Price Report",
                            "actionUrl": "/support/viewTripVillasProductPrice.html"
                        },
                        {
                            "name": "Block Channel Report",
                            "actionUrl": "/support/arcBlockedChannels.html"
                        },
                        {
                            "name": "Promotion Log Report",
                            "actionUrl": "/support/otaPromotionActionLog.html"
                        },
                        {
                            "name": "Price Config Change Report",
                            "actionUrl": "/support/viewPriceConfigChangeReport.html"
                        },
                        {
                            "name": "CM Booking Graph",
                            "actionUrl": "/support/arcBookingReportGraph.html"
                        },
                        {
                            "name": "Arc Price Report",
                            "actionUrl": "/support/viewArcPricesRequest.html"
                        },
                        {
                            "name": "Bulk Price Upload",
                            "actionUrl": "/support/viewBulkPricesUpload.html"
                        },
                        {
                            "name": "Last Booking Retrieval",
                            "actionUrl": "/support/arcLastBookingRetrievalReport.html"
                        },
                        {
                            "name": "Last Action Report",
                            "actionUrl": "/support/arcLastActionReport.html"
                        },
                        {
                            "name": "Inventory Discrepancy Report",
                            "actionUrl": "/support/inventoryDiscrepancyReport.html"
                        },
                        {
                            "name": "Inventory and Price Availability Report",
                            "actionUrl": "/support/viewArcInventoryRequest.html"
                        }
                    ]
                },
                {
                    "name": "System Status",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Product Status",
                            "actionUrl": "/support/arcProductsStatusReport.html"
                        },
                        {
                            "name": "Connectivity Status",
                            "actionUrl": "/support/arcHotelConnectivityStatusReport.html"
                        },
                        {
                            "name": "Rate Plan Status",
                            "actionUrl": "/support/arcRatePlanReport.html"
                        }
                    ]
                },
                {
                    "name": "PMS Reports",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "PMS Mapping Report",
                            "actionUrl": "/support/pmsMappingReport.html"
                        },
                        {
                            "name": "PMS Push Booking Report",
                            "actionUrl": "/support/pmsPushBookingReport.html"
                        }
                    ]
                },
                {
                    "name": "Cluster",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Add Cluster",
                            "actionUrl": "/support/addCluster.html"
                        },
                        {
                            "name": "Add Cluster Product",
                            "actionUrl": "/support/addClusterMap.html"
                        },
                        {
                            "name": "Price Calendar Cluster Wise",
                            "actionUrl": "/support/priceCalendarClusterWise.html"
                        }
                    ]
                },
                {
                    "name": "Bulk Price Sync Channels",
                    "actionUrl": "/support/bulkPriceSyncFileUpload.html"
                },
                {
                    "name": "Promotion",
                    "actionUrl": "/support/viewArcOtaPromotions.html"
                },
                {
                    "name": "Invoice Generation",
                    "actionUrl": "/support/invoiceGenerationReport.html"
                }
            ]
        },
        {
            "name": "Report",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "Suppliers",
                    "actionUrl": "/support/userList.html?user_type=1"
                },
                {
                    "name": "Suppliers Admin",
                    "actionUrl": "/support/userList.html?user_type=6"
                },
                {
                    "name": "Whitelable User",
                    "actionUrl": "/support/userList.html?user_type=8"
                },
                {
                    "name": "Product List",
                    "actionUrl": "/support/productList.html"
                },
                {
                    "name": "Corporates",
                    "actionUrl": "/support/corporateList.html"
                },
                {
                    "name": "ARC Product List",
                    "actionUrl": "/support/arcProductList.html"
                },
                {
                    "name": "Hex Product List",
                    "actionUrl": "/support/hexProductsList.html"
                }
            ]
        },
        {
            "name": "Analytics",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "ARC Booking Analytic",
                    "actionUrl": "/support/arcBookingAnalyticReport.html"
                },
                {
                    "name": "Master Report",
                    "actionUrl": "/support/masterReport.html"
                },
                {
                    "name": "Booking Analytics",
                    "actionUrl": "/support/arcHotelBookingAnalytics.html"
                },
                {
                    "name": "Bookings Breakup",
                    "actionUrl": "/support/arcHotelBookingAnalyticsReport.html"
                },
                {
                    "name": "ARC Daywise Booking",
                    "actionUrl": "/support/bookingBasedOnDays.html"
                },
                {
                    "name": "ARC Datewise Booking",
                    "actionUrl": "/support/bookingBasedOnDateWise.html"
                },
                {
                    "name": "More",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Update Analysis",
                            "actionUrl": "/support/arcInventoryUpdateAnalysis.html"
                        },
                        {
                            "name": "ARC OTA Inventory",
                            "actionUrl": "/support/viewAROTAInvActions.html"
                        },
                        {
                            "name": "ARC Booking By Product",
                            "actionUrl": "/support/arcBookingReportProductWise.html"
                        },
                        {
                            "name": "ARC Hotel RoomNights",
                            "actionUrl": "/support/arcHotelRoomNightReport.html"
                        },
                        {
                            "name": "Arc Operations",
                            "actionUrl": "/support/viewPipelinesReport.html?type=2"
                        }
                    ]
                }
            ]
        },
        {
            "name": "PMS",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "Channel Status",
                    "actionUrl": "/support/viewTripVillaChannels.html"
                },
                {
                    "name": "PMS Log Report",
                    "actionUrl": "/support/viewTripVillasLogReport.html"
                },
                {
                    "name": "Inventory Report",
                    "actionUrl": "/support/viewTripVillasInventoryReport.html"
                },
                {
                    "name": "Channel Rate Plan Report",
                    "actionUrl": "/support/viewChannelRatePlanReport.html"
                }
            ]
        },
        {
            "name": "Operations",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "Bulk Block/Unblock Channels",
                    "actionUrl": "/support/viewBulkInventoryUpload.html"
                },
                {
                    "name": "Bulk Price Sync Channels",
                    "actionUrl": "/support/bulkPriceSyncFileUpload.html"
                },
                {
                    "name": "Change Booking Status",
                    "actionUrl": "/support/changeBookingStatus.html"
                },
                {
                    "name": "Arc System Alert Report",
                    "actionUrl": "/support/arcSystemAlertReport.html"
                },
                {
                    "name": "Register Supplier",
                    "actionUrl": "/support/supplierRegister.html"
                },
                {
                    "name": "Create Hotel",
                    "actionUrl": "/support/hexCreateHotelPage.html"
                },
                {
                    "name": "Reload Item",
                    "actionUrl": "/support/reload.html"
                },
                {
                    "name": "Resources",
                    "actionUrl": "/support/resources.html"
                },
                {
                    "name": "Manage Locations",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Location List",
                            "actionUrl": "/support/locations.html"
                        },
                        {
                            "name": "Country List",
                            "actionUrl": "/support/countrys.html"
                        },
                        {
                            "name": "State List",
                            "actionUrl": "/support/states.html"
                        },
                        {
                            "name": "City List",
                            "actionUrl": "/support/citys.html"
                        }
                    ]
                },
                {
                    "name": "More",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Supplier Mail",
                            "actionUrl": "/support/supplierMail.html"
                        },
                        {
                            "name": "Supplier Mail Status",
                            "actionUrl": "/support/viewSupplierMailReport.html"
                        },
                        {
                            "name": "View /Add System Alerts",
                            "actionUrl": "/support/viewSystemAlert.html"
                        },
                        {
                            "name": "Supplier Contract",
                            "actionUrl": "/support/viewSupplierContractedHotelList.html"
                        },
                        {
                            "name": "Track Status",
                            "actionUrl": "/support/viewUnpaidInvoice.html"
                        },
                        {
                            "name": "Block Channel Report",
                            "actionUrl": "/support/arcBlockedChannels.html"
                        },
                        {
                            "name": "Arc Queue Statistics",
                            "actionUrl": "/support/arQueueStats.html"
                        },
                        {
                            "name": "Assign Product Status",
                            "actionUrl": "/support/assignProductStatus.html"
                        },
                        {
                            "name": "Assign Internal Task",
                            "actionUrl": "/support/assignInternaltask.html"
                        },
                        {
                            "name": "Know Your Market Manager",
                            "actionUrl": "/support/marketManageList.html"
                        },
                        {
                            "name": "Arc Inventory Availability",
                            "actionUrl": "/support/inventoryavailability.html"
                        }
                    ]
                }
            ]
        },
        {
            "name": "devesh",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "My Account",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Register Support",
                            "actionUrl": "/support/supportSignUp.html"
                        },
                        {
                            "name": "Manage Timezone",
                            "actionUrl": "/support/userTimezone.html"
                        }
                    ]
                },
                {
                    "name": "Private",
                    "actionUrl": "/support/",
                    "submenus": [
                        {
                            "name": "Resellers",
                            "actionUrl": "/support/userList.html?user_type=10"
                        },
                        {
                            "name": "Supplier Enquiry Report",
                            "actionUrl": "/support/hexSuppliersList.html"
                        },
                        {
                            "name": "Buyer Enquiry Report",
                            "actionUrl": "/support/hexBuyersList.html"
                        },
                        {
                            "name": "Register Reseller",
                            "actionUrl": "/support/privateRegisterReseller.html"
                        },
                        {
                            "name": "Buyers",
                            "actionUrl": "/support/buyerListAdmin.html"
                        },
                        {
                            "name": "Hex Report",
                            "actionUrl": "/support/hexSupplierBuyerWiseContractReport.html"
                        },
                        {
                            "name": "Product List",
                            "actionUrl": "/support/pcProductList.html"
                        }
                    ]
                },
                {
                    "name": "<i class='fa fa-sign-out'></i> Logout",
                    "actionUrl": "/support/signOut.html"
                }
            ]
        },
        {
            "name": "<i class=\"fa fa-question-circle-o fa-2x\" style=\"color: white ; font-size:18px;\"></i>",
            "actionUrl": "/support/",
            "submenus": [
                {
                    "name": "<i class=\"icon-phone\">&nbsp</i> +91-80-67488900",
                    "actionUrl": "/support/"
                }
            ]
        }
    ]
};


  getHeaderData(){
    const url = 'http://192.168.0.161:8080/api/menuItem?userId=1578';
    return this.http.get(url);
  }
}
