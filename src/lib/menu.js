import {get, writable} from "svelte/store";

export const menuState = writable(false)

export function toggleMenu() {
    const state = get(menuState)
    if(state === false){
        menuState.set(true)
    }else if(state === true){
        menuState.set(false)
    }
}