import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import landingImg from './assets/prog-mass-landing.png'
import redesignImg from './assets/progressive-mass-redesign.png'
import repImg from './assets/prog-mass-3.png'
import oldView from './assets/prog-mass-csv.png'

import Post from '../../../components/Post'

class ProgressiveMassPage extends Component {
  render() {
    return (
      <Post title="Creating a Scorecard for Massachussetts Legislators">
        <p className="lead">
          As a volunteer project, I designed and built{' '}
          <a
            href="https://scorecard.progressivemass.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a new interface to help people explore state legislator voting
            information
          </a>{' '}
          collected by a grassroots organization called Progressive
          Massachusetts. The app uses a small node API to deliver information
          previously scattered in various spreadsheets to{' '}
          <a href="https://github.com/aholachek/legislator-scorecard">
            an accessible, mobile-friendly front end written in React
          </a>.
        </p>
        <p>
          The initial version made use of a small node backend I wrote that
          served legistator voting information parsed from a CSV. The backend
          has since been enhanced other volunteers into a proper database.
        </p>
        <Tabs>
          <TabList>
            <Tab>Original Interface</Tab>
            <Tab>New Interface</Tab>
          </TabList>

          <TabPanel>
            <p>
              Before I built the new site, the legislator voting and scoring
              information was only accessible in embedded Google Sheets on
              Progressive Massachusetts' website. This required users to 1)
              already know who their legislators were, 2) navigate the unwieldy
              embedded spreadsheet, and 3) to look at a different spreadsheet
              for information regarding the content of the bills in question.
            </p>
            <figure>
              <img
                src={oldView}
                alt="the old view of the scorecard -- a busy csv sheet"
              />
              <figcaption>
                <b>Older interface:</b> In order to understand the spreadsheet,
                you had to already know who your representative was, and in
                order to understand the context of any particular vote you had
                to follow the tiny link at the top to load the full text of the
                bill. As someone new to state politics, I personally found it
                difficult to parse.{' '}
              </figcaption>
            </figure>
          </TabPanel>
          <TabPanel>
            <p>
              The landing page prompts you to enter your address in order to
              find your Massachusetts House Rep and Senator.
            </p>
            <figure>
              <img src={landingImg} alt="the progressive mass landing page" />
              <figcaption>
                I tried to make the landing page as simple and inviting as
                possible. It has one call to action: enter in your address to
                find your representatives. (For those who don't want to enter in
                their address or already know their representatives, there's a
                link at top right to view all legislators.)
              </figcaption>
            </figure>

            <p>
              Each legislator has a page beginning with a summary of their
              information and their progressive rating based on votes and bill
              cosponsorships.
            </p>
            <figure>
              <img
                src={repImg}
                alt="a scorecard for an individual massachussetts representative"
              />
              <figcaption>
                The scorecard rates a rep's votes and bill cosponsorships
                against Progressive Massachusetts' legislative priorities.
              </figcaption>
            </figure>
            <p>
              Further down the legislator's page, the site juxtaposes an
              individual legislator's votes with descriptions of the bills that
              went to a vote, hopefully contextualizing voting information in a
              way that makes it more accessible for newcomers:
            </p>
            <figure>
              <img
                src={redesignImg}
                alt="the redesigned data view for the progressive mass scorecard"
              />
              <figcaption>
                This interface hopefully invites the user to filter and explore
                the data based on his or her particular interests.
              </figcaption>
            </figure>
          </TabPanel>
        </Tabs>
      </Post>
    )
  }
}

export default ProgressiveMassPage
