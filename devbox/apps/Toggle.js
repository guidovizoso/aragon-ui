import React from 'react'
import { Box, Button, Header, Split, Toggle } from '@aragon/ui'
import Lorem from '../components/Lorem'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          primary="Toggle component"
          secondary={<Button mode="strong">Open SidePanel</Button>}
        />
        <Split
          primary={
            <Box>
              <Toggle>
                <Lorem repeat={10} />
              </Toggle>
            </Box>
          }
          secondary={
            <Box
              css={`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <Lorem repeat={3} />
            </Box>
          }
        />
      </React.Fragment>
    )
  }
}

export default App
