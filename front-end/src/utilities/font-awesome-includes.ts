import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export const fontAwesomeInit = () : void => {
    library.add(fas, far); //TODO: only add icons we're using
    Vue.component('fa-icon', FontAwesomeIcon)
}

/**
 * import icons and add them using library.add(...)
 * 
 * Font Awesome Solid
 *  :icon['fas', 'icon-kebab-case']
 * 
 * Brand Icons
 *  '@fortawesome/free-brands-svg-icons'
 *  :icon['fab', 'icon-kebab-case']
 */