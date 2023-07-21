import React from 'react';

interface Address {
  district: string;
  city: string;
  longitude: number;
  latitude: number;
  state: string;
  street: string;
}

interface LocationData {
  address: Address;
}

const locationData: LocationData = {
  address: {
    district: 'Bonfim',
    city: 'Osasco',
    longitude: -46.78864601596307,
    latitude: -23.521839344387367,
    state: 'SP',
    street: 'Avenida das Nações Unidas',
  },
};

const key = 'AIzaSyDFqcjwssTsHGkqm0V2cVmRCNUhfOhxr4I';

const getGoogleMapsUrl = (locationData: LocationData, key: string) => {
  const { address } = locationData;
  const formattedStreet = address.street.replace(/ /g, '+');
  return `https://www.google.com/maps/embed/v1/place?key=${key}=${address.city}+${formattedStreet}+${address.district},${address.state}&center=${address.latitude},${address.longitude}&zoom=10`;
};

export function Location() {
  const googleMapsUrl = getGoogleMapsUrl(locationData, key);
  return <iframe width="100%" height="100%" style={{ border: '0' }} src={googleMapsUrl} allowFullScreen></iframe>;
}
