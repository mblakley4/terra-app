import React from 'react'

const PledgesContext = React.createContext({
  pledges: [],
  addPledge: () => {},
})

export default PledgesContext
