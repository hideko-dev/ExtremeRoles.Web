import { browser } from '$app/environment'
import '../i18n.js'
import { locale, waitLocale } from 'svelte-i18n'

export const load = async () => {
    if (browser) {
        locale.set(window.navigator.language)
    }
    await waitLocale()
}