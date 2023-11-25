import {init, register} from 'svelte-i18n';
import { browser } from "$app/environment";
const defaultLocale = 'en';

register('ja', () => import('./i18n/ja.json'));
register('en', () => import('./i18n/en.json'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})