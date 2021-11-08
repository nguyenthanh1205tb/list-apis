import React, { PropsWithChildren } from 'react'
import { Box } from '@mui/system'

function PublicLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <Box
      component="main"
      sx={{
        backgroundImage: 'url(/static/images/dashboard-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Box
        display="flex"
        alignItems="center"
        height="100vh"
        maxHeight="100vh"
        width="100%"
        justifyContent="center"
        overflow="hidden">
        {children}
      </Box>
    </Box>
  )
}

export default PublicLayout
