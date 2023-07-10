// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
'use client'

import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Box, Heading, Text } from 'theme-ui'
import Counter from '@/components/counter'
// import Url from '../../util/url'

// @connect((state) => state.user)
export default function Deliberation() {
    // const userSiteId = this.props.user === null
    //  ? '__loading, try refreshing__'
    //  : this.props.user.site_ids[0];

    return (
      <Box>
        <Box>
          <Heading
            as="h3"
            sx={{
              fontSize: [3, null, 4],
              lineHeight: 'body',
              mb: [3, null, 4]
            }}>
            Deliberation
          </Heading>
          <Text>
            Welcome to Pol.is, a real-time system for gathering, analyzing and understanding what large groups of people think in their own words, enabled by advanced statistics and machine learning.
          </Text>
          <ul>
            <li>
              This is a sample page that is served using Next.js.
            </li>
            <li>
              It uses React, and a library called theme-ui for styling.
            </li>
            <li>
              In the future, it will use React Redux to store state for authentication purposes.
            </li>
          </ul>
          <Box>
            <Counter/>
            {/* <pre>
              {`
<div
  class="polis"
  data-page_id="PAGE_ID"
  data-site_id="${userSiteId}">
</div>
<script async src="${Url.urlPrefix}embed.js"></script>
              `}
            </pre> */}
          </Box>
        </Box>
      </Box>
    )
}

// Integrate.propTypes = {
//   user: PropTypes.shape({
//     site_ids: PropTypes.arrayOf(PropTypes.string)
//   })
// }
