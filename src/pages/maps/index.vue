<!-- 高德地图 -->
<template>
  <div class="amap-wrapper">
    <el-amap-search-box class="search-box"
                        :search-option="searchOption"
                        :on-search-result="onSearchResult"></el-amap-search-box>
    <el-amap class="amap-box"
             :plugin="plugin"
             :center="mapCenter"
             :zoom="12"
             :vid="'amap-vue'">
      <el-amap-marker v-for="(marker, index) in markers"
                      :position="marker"
                      :key="index">
      </el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
export default {
  name: 'AMap',
  data () {
    return {
      plugin: [
        {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init (instance) {
              console.log(instance);
            }
          }
        },
        {
          pName: 'Scale',
          events: {
            init (instance) {
              console.log(instance);
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              console.log(instance);
            }
          }
        }
      ],
      markers: [],
      mapCenter: [120.15, 30.28],
      searchOption: {
        city: '',
        citylimit: true
      }
    }
  },
  methods: {
    addMarker: function () {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult (pois) {
      this.markers = []
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.amap-wrapper {
  @include wh(100%, calc(100vh - 105px));
  .search-box {
    position: absolute;
    top: 25px;
    left: 105px;
  }
}
</style>