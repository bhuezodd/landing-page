<template>
  <GoogleMapLoader :mapConfig="mapConfig" :apiKey="key">
    // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      key: "",
      markers: [
        {
          id: "1",
          position: { lat: 13.710566, lng: -89.231635 },
        },
      ],
    };
  },
  mounted() {
    this.key = process.env.VUE_APP_API_KEY;
  },
  computed: {
    ...mapGetters("locations", ["getLocation"]),
    mapConfig() {
      return {
        zoom: 20,
        mapTypeId: "roadmap",
        center: this.mapCenter,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: true,
      };
    },

    mapCenter() {
      this.markers[0].position = this.getLocation;
      return this.markers[0].position;
    },
  },
};
</script>