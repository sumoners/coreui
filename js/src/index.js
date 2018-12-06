import './polyfill'
import $ from 'jquery'
import AjaxLoad from './ajax-load'
import Alert from './bootstrap/alert'
import AsideMenu from './aside-menu'
import Button from './bootstrap/button'
import Carousel from './bootstrap/carousel'
import Collapse from './bootstrap/collapse'
import Dropdown from './bootstrap/dropdown'
import Modal from './bootstrap/modal'
import Popover from './bootstrap/popover'
import Scrollspy from './bootstrap/scrollspy'
import Sidebar from './sidebar'
import Tab from './bootstrap/tab'
// import Toast from './bootstrap/toast'
import Tooltip from './bootstrap/tooltip'
import Util from './bootstrap/util'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.3): index.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

(($) => {
  if (typeof $ === 'undefined') {
    throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const minMajor = 1
  const ltMajor = 2
  const minMinor = 9
  const minPatch = 1
  const maxMajor = 4

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})($)

export {
  Util,
  AjaxLoad,
  Alert,
  AsideMenu,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Scrollspy,
  Sidebar,
  Tab,
  // Toast,
  Tooltip
}

// Global functions
import getStyle from './utilities/get-style'
window.getStyle = getStyle

import hexToRgb from './utilities/hex-to-rgb'
window.hexToRgb = hexToRgb

import hexToRgba from './utilities/hex-to-rgba'
window.hexToRgba = hexToRgba

import rgbToHex from './utilities/rgb-to-hex'
window.rgbToHex = rgbToHex
