import React from 'react'

const PledgesContext = React.createContext({
  pledges: [],
  addPledge: () => {},
  updatePledge: () => {},
})

export default PledgesContext
