const locationData = {
  address: {
    district: 'Bonfim',
    city: 'Osasco',
    longitude: -46.78864601596307,
    latitude: -23.521839344387367,
    state: 'SP',
    street: 'Avenida das Nações Unidas',
  },
};

const key = 'AIzaSyDFqcjwssTsHGkqm0V2cVmRCNUhfOhxr4I&q';
const formattedStreet = locationData.address.street.replace(/ /g, '+');

export function Location() {
  return (
    <iframe
      width="390"
      height="415"
      style={{ border: '0', margin: '60px' }}
      src={`https://www.google.com/maps/embed/v1/place?key=${key}=${locationData.address.city}+${formattedStreet}+${locationData.address.district},${locationData.address.state}&center=${locationData.address.latitude},${locationData.address.longitude}&zoom=10`}
      allowFullScreen
    ></iframe>
  );
}
