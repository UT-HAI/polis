// import React from 'react'
import { Box, jsx } from 'theme-ui'
import Link from 'next/link'
// import { Link } from 'react-router-dom'
import Logomark from '@/components/framework/logomark'

export default function InteriorHeader({children}) {
    return (
        <Box>
        <Box
            sx={{
            width: '100%',
            backgroundColor: 'primary',
            color: 'background',
            zIndex: 1000,
            py: [3],
            px: [4],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            }}>
            <Link href='/' sx={{ variant: 'links.header' }}>
            <Logomark
                style={{ marginRight: 10, position: 'relative', top: 6 }}
                fill={'white'}
            />
            Polis
            </Link>
            sign out
            {/* <Link sx={{ variant: 'links.header' }} to="/">
            <Logomark
                style={{ marginRight: 10, position: 'relative', top: 6 }}
                fill={'white'}
            />
            Polis
            </Link>
            <Link id="signoutLink" sx={{ variant: 'links.header' }} to="/signout">
            sign out
            </Link> */}
        </Box>
        <Box>{children}</Box>
        </Box>
    )
}