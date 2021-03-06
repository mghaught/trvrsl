// @flow
import React, { Fragment } from 'react'
import { withRouteData } from 'react-static'
import Attendees from '../modules/Attendees'
import Contact from '../modules/Contact'
import Introduction from '../modules/Introduction'
import ImageBreak from '../modules/ImageBreak'
import EventInformation from '../modules/EventInformation'
import Schedule from '../modules/Schedule'
import Speakers from '../modules/Speakers'

type Props = {
  attendees: string,
  contact: string,
  eventInformation: string,
  introduction: string,
  scheduleCards: Array<string>,
  scheduleSource: string,
  speakersCards: Array<string>,
  speakersSource: string,
}

export default withRouteData((props: Props) => (
  <Fragment>
    <Introduction
      source={props.introduction}
    />
    <Schedule
      cards={props.scheduleCards}
      currentIndex={0}
      source={props.scheduleSource}
    />
    <Attendees
      source={props.attendees}
    />
    <ImageBreak
      alt="attendees and event information"
      css={{ objectPosition: '50% 0' }}
      source="/attendees-and-event-information.jpg"
    />
    <EventInformation
      source={props.eventInformation}
    />
    <Speakers
      cards={props.speakersCards}
      source={props.speakersSource}
    />
    <Contact
      source={props.contact}
    />
  </Fragment>
))
