import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
function App() { return <main className="shell"><div className="badge">SHINE</div><h1>Um novo começo.</h1><p>O frontend está pronto para crescer conectado ao Shine Backend.</p><div className="status"><span /> API configurável via VITE_API_URL</div></main> }
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
