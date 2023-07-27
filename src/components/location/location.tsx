import React from 'react';
import { Address } from '../../graphql/queries/property-details';

interface LocationData {
  address: Address;
}

const key = 'AIzaSyDFqcjwssTsHGkqm0V2cVmRCNUhfOhxr4I';

const getGoogleMapsUrl = (locationData: LocationData, key: string) => {
  const { address } = locationData;
  const formattedStreet = address.street.replace(/ /g, '+');
  return `https://www.google.com/maps/embed/v1/place?key=${key}&q=${address.city}+${formattedStreet}+${address.district},${address.state}&center=${address.latitude},${address.longitude}&zoom=10`;
};

export function Location(address: LocationData) {
  const googleMapsUrl = getGoogleMapsUrl(address, key);
  return <iframe width="100%" height="100%" style={{ border: '0' }} src={googleMapsUrl} allowFullScreen></iframe>;
}
