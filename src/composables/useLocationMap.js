import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(15);
  const center = ref([2.4400417, -76.6038031, 16.39]);

  function pin(e) {
    const market = e.target.getLatLng();
    center.value = [market.lat, market.lng];
  }

  return {
    zoom,
    center,
    pin,
  };
}
