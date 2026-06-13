import { Toaster } from 'sonner'
import './App.css'
import { DailySummary } from './components/DailySummary'

function App() {

  return (
    <main className="container mx-auto p-4">
      <Toaster  position='top-center'/>
      <DailySummary />
    </main>
  )
}

export default App
