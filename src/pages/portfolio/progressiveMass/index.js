import React, { Component } from "react"
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import landingImg from "./assets/prog-mass-landing.png"
import redesignImg from "./assets/progressive-mass-redesign.png"
import repImg from "./assets/prog-mass-3.png"
import oldView from "./assets/prog-mass-csv.png"

import Post from "../../../components/Post"

class ProgressiveMassPage extends Component {

  render() {
    return (
      <Post title="Creating a Scorecard for Massachussetts Legislators">
        <p className="lead">
          As a volunteer project, I designed and built{" "}
          <a href="https://scorecard.progressivemass.com/" target="_blank">
            a new interface
          </a>{" "}
          to help people explore state legislator voting information collected by a grassroots
          organization called Progressive Massachusetts. The app uses a small node API to deliver
          information previously scattered in various spreadsheets to{" "}
          <a href="https://github.com/aholachek/legislator-scorecard">
            an accessible, mobile-friendly front end written in React
          </a>.
        </p>
        <Tabs>
          <TabList>
            <Tab>Original Interface</Tab>
            <Tab>New Interface</Tab>
          </TabList>

          <TabPanel>
            <p>
              Before I built the new site, the legislator voting and scoring information was only
              accessible in embedded Google Sheets on Progressive Massachusetts' website. This
              required users to 1) already know who their legislators were, 2) navigate the unwieldy
              embedded spreadsheet, and 3) to look at a different spreadsheet for information
              regarding the content of the bills in question.
            </p>
            <img src={oldView} alt="the old view of the scorecard -- a busy csv sheet" />
          </TabPanel>
          <TabPanel>
            <p>
              The landing page prompts you to enter your address in order to find your Massachusetts
              House Rep and Senator.
            </p>

            <img src={landingImg} alt="the progressive mass landing page" />
            <p>
              Each legislator has a page beginning with a summary of their information and their
              progressive rating based on votes and bill cosponsorships.
            </p>
            <img src={repImg} alt="a scorecard for an individual massachussetts representative" />
            <p>
              Further down the legislator's page, the site juxtaposes an individual legislator's
              votes with descriptions of the bills that went to a vote, hopefully contextualizing
              voting information in a way that makes it more accessible for newcomers:
            </p>
            <img
              src={redesignImg}
              alt="the redesigned data view for the progressive mass scorecard"
            />
          </TabPanel>
        </Tabs>
      </Post>
    )
  }
}

export default ProgressiveMassPage
