import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const MapDetails = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const center = {
    lat: 6.447413,
    lng: 3.439152,
  };

  if (!isLoaded) {
    return <p>Error Loading map</p>;
  }
  return (
    <div className="shadow-custom">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "400px" }}
        options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false
        }}
      >
        <Marker position={center} />
</GoogleMap>
    </div>
  );
};

export default MapDetails;
