import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Post from '../../../components/Post'

import adsTwoImg from './assets/2.0_full_page.png'
import bbbImg from './assets/bbb_full_page.png'
import newAbstractImg from './assets/new_abstract_page.png'
import oldAbstractImg from './assets/old_abstract_page.png'
import newLibraryListImg from './assets/new_library_list.png'
import oldLibraryListImg from './assets/old_library_list.png'
import newLibraryPage from './assets/new_library_page.png'
import oldLibraryPage from './assets/old_library_page.png'

class RedesigningADS extends Component {
  render() {
    return (
      <Post title="Redesigning the Astrophysics Data System">
        <p className="lead">
          When I was working on redesigning parts of the{' '}
          <a href="http://www.adsabs.harvard.edu/">
            NASA/Astrophysics Data System (ADS)
          </a>, I looked for opportunities to streamline the experience for the
          scientists, students and other researchers who use the site.
        </p>
        <p>
          It was very helpful talking to scientists and science librarians about
          the aspects of the interface they used most heavily. To supplement
          user interviews, I used Google Analytics custom events to explore
          which features in the existing interface were heavily trafficked and
          which were generally ignored. This information combined to inform my
          decision of which elements to highlight, which to de-emphasize, and
          which to remove altogether.
        </p>
        <p>
          Below I provide some screen comparisons of a few of the pages I
          redesigned and re-implemented in JS, HTML and CSS.
        </p>

        <Tabs>
          <TabList>
            <Tab>Old search results</Tab>
            <Tab>New search results</Tab>
          </TabList>

          <TabPanel>
            <img src={adsTwoImg} alt="the original search results view" />
          </TabPanel>
          <TabPanel>
            <img src={bbbImg} alt="redesigned search results page" />
          </TabPanel>
        </Tabs>

        <p>
          For the redesign of the search results page, I emphasized
          scannability, situating the search result titles as the main focal
          point. Since Google Analytics showed that sort operations were the
          most common operation on a set of search results, I raised the visual
          profile of the sort selector. Across the board, I increased font
          sizes.
        </p>

        <Tabs>
          <TabList>
            <Tab>Old abstract</Tab>
            <Tab>New abstract</Tab>
          </TabList>

          <TabPanel>
            <img src={oldAbstractImg} alt="the original abstract view" />
          </TabPanel>
          <TabPanel>
            <img src={newAbstractImg} alt="redesigned abstract view" />
          </TabPanel>
        </Tabs>

        <p>
          This one is cheating a bit, since the predecessor system I'm generally
          showing in the "older version" tabs was retired before I thought to
          get a screen shot of its abstract page. Instead, I show the original
          system's abstract page (the original system is still heavily in use as
          it is the one that astrophysics researchers are most familiar with, so
          thousands of people still see this page each week!) I focused on
          hierarchy and contrast and added a left navigation panel to bring
          order and scannability to the page.
        </p>

        <Tabs>
          <TabList>
            <Tab>Old saved items</Tab>
            <Tab>New saved items</Tab>
          </TabList>

          <TabPanel>
            <img src={oldLibraryListImg} alt="the original library list view" />
          </TabPanel>
          <TabPanel>
            <img src={newLibraryListImg} alt="redesigned library list" />
          </TabPanel>
        </Tabs>

        <p>
          ADS libraries are a place where users can store their personal
          collections of papers. They have many purposes and could serve as a
          quick reading list, a convenient way to generate metrics, or a list
          intended for public consumption. In the original implementation, there
          was lots of explanatory text and the main functions of the library—to
          explore your library collection or possibly add a library— were not as
          obvious. My redesign simplifies things considerably, with some of the
          least-used functionality being removed entirely, or moved elsewhere.
        </p>

        <Tabs>
          <TabList>
            <Tab>Old item detail</Tab>
            <Tab>New item detail</Tab>
          </TabList>

          <TabPanel>
            <img
              src={oldLibraryPage}
              alt="the original library item detail view"
            />
          </TabPanel>
          <TabPanel>
            <img
              src={newLibraryPage}
              alt="redesigned library item detail view"
            />
          </TabPanel>
        </Tabs>

        <p>
          With this page I focused on using hierarchy and alignment to allow a
          user to, at a glance, understand the significant metadata attached to
          their library and the actions they can undertake on their library
          (manage permissions, export, visualize...).
        </p>
      </Post>
    )
  }
}

export default RedesigningADS
