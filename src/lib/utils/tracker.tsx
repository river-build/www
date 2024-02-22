/**
 * @fileoverview This file contains the functions to track events in Mixpanel
 */
import Mixpanel from '../mixpanel'

type Props = { [key: string]: string | number | boolean }

/**
 * trackPage:
 * @param page_name current page where the event is happenning.
 * @param props other props needed to be tracked.
 */
export const trackPage = (page_name: string, props?: Props) => {
  const Tracker = new Mixpanel()

  Tracker.track('visit_page', {
    page_name: page_name ?? 'index',
    ...props,
  })
}

/**
 * trackCta:
 * @param page_name current page where the event is happenning.
 * @param cta_name name of the cta that was clicked.
 * @param props other props needed to be tracked.
 */
export const trackCta = (page_name: string, cta_name: string, props?: Props) => {
  const Tracker = new Mixpanel()

  Tracker.track('click_cta', {
    page_name: page_name,
    cta_name: cta_name,
    ...props,
  })
}

/**
 * trackForm:
 * @param page_name current page where the event is happenning.
 * @param field_name name of the field that was filled.
 * @param form_name name of the form that is being filled.
 * @param props other props needed to be tracked.
 */
export const trackForm = (
  page_name: string,
  field_name: string,
  form_name: string,
  props?: Props,
) => {
  const Tracker = new Mixpanel()

  Tracker.track('fill_form_input', {
    page_name: page_name,
    field_name: field_name,
    form_name: form_name,
    ...props,
  })
}

/**
 * trackButton:
 * @param page_name current page where the event is happenning.
 * @param form_name name of the form that is being filled.
 * @param button_name name of the button that was clicked.
 * @param props other props needed to be tracked.
 */
export const trackButton = (
  page_name: string,
  form_name: string,
  button_name: string,
  props?: Props,
) => {
  const Tracker = new Mixpanel()

  Tracker.track('click_button', {
    page_name: page_name,
    form_name: form_name,
    button_name: button_name,
    ...props,
  })
}

/**
 *
 * @param page_name current page where the event is happenning.
 * @param page_to_visit name of the page user wants to visit.
 * @param props other props needed to be tracked.
 */
export const trackNav = (page_name: string, page_to_visit: string, props?: Props) => {
  const Tracker = new Mixpanel()

  Tracker.track('click_button', {
    page_name: page_name,
    page_to_visit: page_to_visit,
    ...props,
  })
}
