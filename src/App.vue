<template>
  <calcite-loader></calcite-loader>
  <calcite-shell content-behind hidden>
    <h2 id="header-title" slot="header">
      <!-- Dynamically populated -->
    </h2>

    <calcite-shell-panel slot="panel-start" display-mode="float">
      <calcite-action-bar slot="action-bar">
        <calcite-action data-action-id="layers" icon="layers" text="Layers"></calcite-action>
        <calcite-action data-action-id="basemaps" icon="basemap" text="Basemaps"></calcite-action>
        <calcite-action data-action-id="legend" icon="legend" text="Legend"></calcite-action>
        <calcite-action data-action-id="bookmarks" icon="bookmark" text="Bookmarks"></calcite-action>
        <calcite-action data-action-id="print" icon="print" text="Print"></calcite-action>
        <calcite-action data-action-id="information" icon="information" text="Information"></calcite-action>
      </calcite-action-bar>

      <!-- Map-specific panels (each one provides a div for a ArcGIS Maps SDK for JavaScript widget) -->
      <calcite-panel heading="Layers" height-scale="l" data-panel-id="layers" hidden>
        <div id="layers-container"></div>
      </calcite-panel>
      <calcite-panel heading="Basemaps" height-scale="l" data-panel-id="basemaps" hidden>
        <div id="basemaps-container"></div>
      </calcite-panel>
      <calcite-panel heading="Legend" height-scale="l" data-panel-id="legend" hidden>
        <div id="legend-container"></div>
      </calcite-panel>
      <calcite-panel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" hidden>
        <div id="bookmarks-container"></div>
      </calcite-panel>
      <calcite-panel heading="Print" height-scale="l" data-panel-id="print" hidden>
        <div id="print-container"></div>
      </calcite-panel>

      <!-- Info panel (populates with info from the web map) -->
      <calcite-panel heading="Details" data-panel-id="information" hidden>
        <div id="info-content">
          <img id="item-thumbnail" alt="webmap thumbnail" />
          <div id="item-description">
            <!-- Dynamically populated -->
          </div>
          <calcite-label layout="inline">
            <b>Rating:</b>
            <calcite-rating id="item-rating" read-only>
              <!-- Dynamically populated -->
            </calcite-rating>
          </calcite-label>
        </div>
      </calcite-panel>
    </calcite-shell-panel>
    <div id="viewDiv"></div>
  </calcite-shell>
</template>

<script setup>
import { onMounted } from 'vue';
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"
import Bookmarks from "@arcgis/core/widgets/Bookmarks"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import LayerList from "@arcgis/core/widgets/LayerList"
import Legend from "@arcgis/core/widgets/Legend"
import Print from "@arcgis/core/widgets/Print"

import "@esri/calcite-components/dist/components/calcite-alert";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-rating";
import "@esri/calcite-components/dist/components/calcite-loader";


onMounted(() => {

  const webmapId = new URLSearchParams(window.location.search).get("webmap")
    ?? "210c5b77056846808c7a5ce93920be81";

  const map = new WebMap({
    portalItem: {
      id: webmapId
    }
  });

  const view = new MapView({
    map,
    container: "viewDiv",
    padding: {
      left: 49
    }
  });

  view.ui.move("zoom", "top-left");

  const basemaps = new BasemapGallery({
    view,
    container: "basemaps-container"
  });

  const bookmarks = new Bookmarks({
    view,
    container: "bookmarks-container"
  });

  const layerList = new LayerList({
    view,
    selectionEnabled: true,
    container: "layers-container"
  });

  const legend = new Legend({
    view,
    container: "legend-container"
  });

  const print = new Print({
    view,
    container: "print-container"
  });

  map.when(() => {
    const { title, description, thumbnailUrl, avgRating } = map.portalItem;
    document.querySelector("#header-title").textContent = title;
    document.querySelector("#item-description").innerHTML = description;
    document.querySelector("#item-thumbnail").src = thumbnailUrl;
    document.querySelector("#item-rating").value = avgRating;

    let activeWidget;

    const handleActionBarClick = ({ target }) => {
      if (target.tagName !== "CALCITE-ACTION") {
        return;
      }

      if (activeWidget) {
        document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
        document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
      }

      const nextWidget = target.dataset.actionId;
      if (nextWidget !== activeWidget) {
        document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
        document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
        activeWidget = nextWidget;
      } else {
        activeWidget = null;
      }
    };

    document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

    let actionBarExpanded = false;

    document.addEventListener("calciteActionBarToggle", event => {
      actionBarExpanded = !actionBarExpanded;
      view.padding = {
        left: actionBarExpanded ? 150 : 49
      };
    });

    document.querySelector("calcite-shell").hidden = false;
    document.querySelector("calcite-loader").hidden = true;

  });
});

</script>

<style scoped>
html,
body,
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  display: flex;
}

calcite-loader {
  align-self: center;
  justify-self: center;
}

#header-title {
  margin-left: 1rem;
  margin-right: 1rem;
}

#info-content {
  padding: 0.75rem;
}

calcite-rating {
  margin-top: 0.25rem;
}
</style>
