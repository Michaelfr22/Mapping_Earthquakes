# Mapping_Earthquakes

## Purpose
The purpose of this analysis was to visualize the geographial location and magnitude of every earthquake recorded over the **last seven days**. The visualization of the earthquake data can found in the index.html file of the Earthquake_Challenge folder. When the file is opened into a broswer, a global map is displayed.
Both the Map Style and Data can be toggled to make the earthquake markers more accessible to the observer. If you were to click on one of the Circle Markers, a popup will display the _Magnitude_ and _Location_ of that Marker.

## Languages and Tools Utilized
- JavaScript
- HTML
- Leaflet.js

## Data
- All Earthquakes (1933 count): https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
- Major Earthquakes (4.5+ magnitude, 80 count) : https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
- Tectonic Plates (Red dividers): https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

## Map Preview
![map](https://user-images.githubusercontent.com/102773052/180616321-2c1c1786-9ca7-45f9-a30e-cc176265f31d.png)

## Result
Notice how most of the high-magnitude earthquakes were located closer to the tectonic plate divides. This is expected, since earthquakes form when tectonic plate stress overcomes the friction between the plates. The stress causes waves in the Earth and ocean resulting in the trembles and tidal waves that millions of people experience on a weekly basis.

## Richter Scale
![how_richter_scale_calculated](https://user-images.githubusercontent.com/102773052/180617480-fdff5e0f-ac7a-4c70-9479-f89795a7df7a.gif)
