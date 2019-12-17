import React from 'react';
import useStyles from './Style';
import GoogleMapReact from 'google-map-react';
import { GoogleMapAPIKey } from '../../config';
import PageSpinner from '../../Common/Spinner/PageSpinner';
import LocationInput from './_components/LocationInput';

const Map = props => {
  const {
    lat,
    lng,
    placesServices,
    setPlacesServices,
    autoCompleteService,
    setAutoCompleteService,
    directionService,
    setDirectionService,
    geoCoderService,
    setGeoCoderService,
    currentPositionLatLng,
    setCurrentPositionLatLng,
    mapLoaded,
    setMapLoaded
  } = props;
  const classes = useStyles();

  const handleApiLoaded = (map, maps) => {
    setAutoCompleteService(new maps.places.AutocompleteService());
    setPlacesServices(new maps.places.PlacesService(map));
    setDirectionService(new maps.DirectionsService());
    setGeoCoderService(new maps.Geocoder());
    setCurrentPositionLatLng(new maps.LatLng(lat, lng));
    setMapLoaded(true);
  };

  return (
    <div className={classes.mapRoot}>
      <div className={classes.googleMap}>
        {lat && lng ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GoogleMapAPIKey,
              libraries: ['places', 'directions']
            }}
            center={{ lat, lng }}
            defaultZoom={14}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <TestDrop lat={lat} lng={lng} />
          </GoogleMapReact>
        ) : (
          <PageSpinner />
        )}
      </div>
      {mapLoaded && (
        <LocationInput
          autoCompleteService={autoCompleteService}
          currentPositionLatLng={currentPositionLatLng}
        />
      )}
    </div>
  );
};

const TestDrop = () => (
  <div style={{ background: 'black', width: '5px', height: '5px' }}></div>
);

export default Map;
