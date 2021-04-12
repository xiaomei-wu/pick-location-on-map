# Investigate: Pick a location on a map and get the address
## Tasks
- Check known libs for location picking support
- At the best do not use (google) maps -> DSGVO
- Build a small local prototype outside of the project to demo the picker

### Alternatives to Google Maps API

There are a bunch of alternatives to Google Maps API available, both open source and commercial. These links may provide some insight on that.
https://geoawesomeness.com/google-maps-api-alternatives-best-cheap-affordable/
https://stackoverflow.com/questions/4151593/alternatives-to-google-maps-api

### Libraries which can intergrate OpenStreetMap

https://wiki.openstreetmap.org/wiki/Frameworks

### Candidates
1. Mapbox GL JS (Up to 50,000 free, 50,000 to 100,000 $5 per 1,000, mapping)
2. LocationIQ ($100/monthly for 50,000 reqs/day, mapping and searching)
3. Gisgraphy (120€/monthly for 43,200 reqs/day, mapping and searching)
4. Openlayers (Free, mapping)
5. Leaflet (Free, mapping)
6. Nominatim (Free, searching)

## Why Nominatim and Leaflet?

1. Nominatim https://nominatim.org/release-docs/develop/

- Free, open-source
- Supports address search both in Forward Geocoding (search for an address based on the name query) and Reverse Geocoding (search for an address based on geographical loction)
- Allows to do high volume, batch geocoding for any address
- Well-documented, developed and maintained by the OpenStreetMap community and used as a default geocoding service for OSM data.
- The server for Nominatim located in Amsterdam

(Source: https://www.geoapify.com/nominatim-geocoder)

2. Leaflet React https://react-leaflet.js.org/
- Free, open-source
- Easy-to-use and light-weight
- Well-documented, quite large contribute community

(Source: https://www.geoapify.com/leaflet-vs-openlayers)

# DEMO

A local prototype for placing a marker on a map and converting the marked geographical coordinated (lat, lng) into an address.

https://codesandbox.io/s/demo-pick-location-on-map-38ugk?file=/src/Components/LocationMarker.js