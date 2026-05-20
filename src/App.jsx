Enterexport default function App() {
  return (
    <div style={{fontFamily:'Arial',padding:'40px',background:'#f8fafc',minHeight:'100vh'}}>
      <div style={{maxWidth:'1100px',margin:'auto'}}>
        <h1 style={{fontSize:'48px',color:'#0f172a'}}>MedBriefsHub Academy</h1>
        <p style={{fontSize:'20px',color:'#475569',lineHeight:'1.8'}}>
          Professional Medical Research & Publishing Platform
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',marginTop:'40px'}}>
          <div style={{background:'white',padding:'25px',borderRadius:'20px'}}>
            <h2>Research Support</h2>
            <p>Support from proposal to publication in indexed journals.</p>
          </div>

          <div style={{background:'white',padding:'25px',borderRadius:'20px'}}>
            <h2>SCFHS Training</h2>
            <p>Accredited educational and CME activities.</p>
          </div>

          <div style={{background:'white',padding:'25px',borderRadius:'20px'}}>
            <h2>Publication Guidance</h2>
            <p>PubMed, Scopus, WoS publication assistance.</p>
          </div>
        </div>

        <div style={{marginTop:'60px',background:'#0f172a',color:'white',padding:'30px',borderRadius:'24px'}}>
          <h2>Contact</h2>
          <p>Email: info@medbriefshub.com</p>
          <p>Telegram: @MedBriefsHub</p>
        </div>
      </div>
    </div>
  )
      }
