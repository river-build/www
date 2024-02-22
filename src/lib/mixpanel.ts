import mixpanel from 'mixpanel-browser'

class Mixpanel {
  constructor() {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === 'development',
      ignore_dnt: true,
    })
  }

  track(eventName: string, data?: any) {
    mixpanel.track(eventName, data)
  }
}

export default Mixpanel
