import { appId, moralisApiKey, serverUrl } from '@/config/env'
import MainAppRoutes from '@/routes/routes'
import Moralis from 'moralis'
import { useEffect } from 'react'
import { MoralisProvider } from 'react-moralis'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  useEffect(() => {
    const moralisStart = async () => {
      if (!Moralis.Core.isStarted) {
        await Moralis.start({
          apiKey: moralisApiKey,
        })
      }
    }

    moralisStart()
  }, [])

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Router>
        <MainAppRoutes />
      </Router>
    </MoralisProvider>
  )
}
