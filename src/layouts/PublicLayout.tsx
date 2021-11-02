import React, { PropsWithChildren } from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/system'

function PublicLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        display="flex"
        alignItems="center"
        height="100vh"
        maxHeight="100vh"
        width="100%">
        {children}
      </Box>
    </Container>
  )
}

export default PublicLayout
