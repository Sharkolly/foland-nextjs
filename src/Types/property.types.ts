export type imageType = {
    path: string;
    hash: string;
    uploadedAt: string;
  };
  
  type ownershipDetailsType = {
    titleDocument: string;
    ownershipType: "Leasehold" | "Freehold";
    propertyID: number;
  };

export type propertiesType = {
    _id: string;
    uuid: string;
    title: string;
    description: string;
    propertyType: "For Sale" | "For Rent";
    property: string;
    state: string;
    price: string;
    location: string;
    bedroom: number;
    bathroom: number;
    landSize: string;
    isLandlordLivingWithTenant: string;
    ownershipDetails: ownershipDetailsType[];
    images: imageType[];
    saved: boolean;
    purpose: string;
  };

  export type PropertyFormValues = {
    title: string;
    description: string;
    files: File[]; 
    price: string;
    type: "For Rent" | "For Sale";
    location: string;
    state: string;
    lga: string;
    property: string;
    bathroom: string;
    titleDocument: string;
    bedroom: string;
    landSize: string;
    ownershipType: string;
    propertyID: string;
    purpose: string;
    isLandlordLivingWithTenant: string;
  };
  export type itemType = {
    property: string;
    owner: string;
  };