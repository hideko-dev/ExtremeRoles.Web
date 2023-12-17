import {writable} from "svelte/store";

export const featuresOverlayState = writable(0)

export function openFeaturesOverlay(id){
    featuresOverlayState.set(id)
}

export function closeFeaturesOverlay() {
    featuresOverlayState.set(0)
}