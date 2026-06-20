import { useState, useEffect, useRef } from 'react'

const services = [
  {
    icon: '🏠',
    title: 'Couverture & Réfection',
    desc: 'Réparation et remplacement complet de toitures. Tuiles, ardoises, zinc — un savoir-faire artisanal pour des toits qui durent.'
  },
  {
    icon: '🔧',
    title: 'Zinguerie & Étanchéité',
    desc: 'Gouttières, chéneaux, faîtages et solins. Protection optimale contre les infiltrations avec des finitions soignées.'
  },
  {
    icon: '🪵',
    title: 'Charpente & Ossature',
    desc: 'Rénovation et construction de charpentes traditionnelles et fermettes. Bois massif et techniques modernes.'
  },
  {
    icon: '☀️',
    title: 'Isolation & Énergie',
    desc: 'Isolation thermique des combles et rampants. Réduisez vos factures jusqu\'à 30 % avec nos solutions éco-performantes.'
  },
  {
    icon: '🔍',
    title: 'Diagnostic & Entretien',
    desc: 'Inspection complète de votre toiture avec rapport détaillé. Détection précoce des fuites et points faibles.'
  },
  {
    icon: '⚡',
    title: 'Devis Instantané IA',
    desc: 'Obtenez un devis préliminaire en moins de 60 secondes via notre assistant IA. Simple, rapide, sans engagement.'
  }
]

const reviews = [
  {
    name: 'Sophie Martin',
    location: 'Briou',
    text: 'Travail remarquable ! L\'équipe a refait ma toiture en seulement 3 jours. Le devis IA était très proche du prix final. Je recommande vivement.',
    initials: 'SM',
    rating: 5
  },
  {
    name: 'Jean-Pierre Dubois',
    location: 'Mulsans',
    text: 'Professionnalisme et qualité. Le diagnostic par drone était impressionnant, ils ont détecté des défauts que personne n\'avait vus avant.',
    initials: 'JD',
    rating: 5
  },
  {
    name: 'Marie Lefèvre',
    location: 'La Chapelle-Saint-Martin',
    text: 'Devis gratuit reçu sous 24h, chantier propre et terminé dans les temps. La garantie décennale m\'a rassurée. Un artisan de confiance.',
    initials: 'ML',
    rating: 5
  },
  {
    name: 'Pierre Chevalier',
    location: 'Oucques',
    text: 'L\'assistant IA pour la prise de rendez-vous est très pratique. Réponse immédiate même le dimanche soir ! Et la qualité du travail est au rendez-vous.',
    initials: 'PC',
    rating: 5
  },
  {
    name: 'Isabelle Renard',
    location: 'Briou',
    text: 'Ravie de ma nouvelle toiture. L\'équipe a été ponctuelle, respectueuse, et le résultat est magnifique. Merci pour ce beau travail.',
    initials: 'IR',
    rating: 5
  },
  {
    name: 'Claude Moreau',
    location: 'Villeneuve-Frouville',
    text: 'Entreprise sérieuse et réactive. Intervention en urgence pour une fuite après un orage. Dépannage rapide et efficace. Je les recommande.',
    initials: 'CM',
    rating: 5
  }
]

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: '👋 Bonjour ! Je suis l\'assistant IA des Toitures d\'Elma. Souhaitez-vous un devis gratuit pour votre toiture ?' }
  ])
  const [chatInput, setChatInput] = useState('')
  const chatEndRef = useRef(null)

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages])

  const handleChatSend = () => {
    const msg = chatInput.trim()
    if (!msg) return

    setChatMessages(prev => [...prev, { from: 'user', text: msg }])
    setChatInput('')

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Très bien ! Pour établir un devis personnalisé, pourriez-vous me dire la superficie approximative de votre toiture ?",
        "Merci ! Nous intervenons sur Briou et tout le Loir-et-Cher. Quel type de bien avez-vous (maison individuelle, immeuble, dépendance) ?",
        "Excellent choix ! Nous proposons des rendez-vous gratuits pour évaluer vos besoins. Êtes-vous disponible cette semaine ?",
        "Je note ! Notre équipe vous contactera sous 24h pour confirmer un rendez-vous. Y a-t-il une urgence particulière ?",
        "Parfait ! Nous avons bien noté votre demande. Un conseiller vous rappelle dans les plus brefs délais. Belle journée ! 🌟",
        "Magnifique ! Nous avons des disponibilités dès cette semaine pour un diagnostic gratuit. Souhaitez-vous qu'on vous rappelle ?"
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setChatMessages(prev => [...prev, { from: 'bot', text: randomResponse }])
    }, 1200)
  }

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleChatSend()
    }
  }

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <div className="logo-icon">🏠</div>
            <div className="logo-text">
              Les Toitures d'Elma
              <span>Artisan Couvreur — Briou 41</span>
            </div>
          </a>
          <div className="header-cta">
            <span className="header-phone">📞 02 54 XX XX XX</span>
            <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setChatOpen(true) }}>
              💬 Devis Gratuit
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Devis gratuit sous 24h
            </div>
            <h1 className="hero-title">
              Votre toiture mérite un{' '}
              <span className="hero-title-accent">artisan d'exception</span>
            </h1>
            <p className="hero-subtitle">
              Depuis plus de 15 ans, Les Toitures d'Elma allie le savoir-faire 
              artisanal français aux outils modernes pour vous offrir des 
              toitures durables et esthétiques dans le Loir-et-Cher.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large" onClick={() => setChatOpen(true)}>
                ⚡ Obtenir un Devis Instantané
              </button>
              <a href="#services" className="btn btn-outline btn-large">
                Nos Services →
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div>
                <div className="stat-number">850+</div>
                <div className="stat-label">Toitures réalisées</div>
              </div>
              <div>
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Note moyenne clients</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1632889696457-9871b66d65f0?w=600&h=400&fit=crop"
                alt="Toiture de qualité par Les Toitures d'Elma"
                loading="eager"
              />
              <div className="hero-image-overlay"></div>
              <div className="hero-floating-card hero-card-1">
                <div className="hero-card-icon">🤖</div>
                <div>
                  <strong>Devis IA</strong>
                  <div style={{fontSize:'0.7rem', color:'var(--slate-500)', fontWeight:400}}>en 60 secondes</div>
                </div>
              </div>
              <div className="hero-floating-card hero-card-2">
                <div className="hero-card-icon">⭐</div>
                <div>
                  <strong>4.9 / 5</strong>
                  <div style={{fontSize:'0.7rem', color:'var(--slate-500)', fontWeight:400}}>82 avis vérifiés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI QUOTE DEMO ===== */}
      <section className="ai-quote" id="quote">
        <div className="container">
          <div className="ai-quote-grid">
            <div className="ai-quote-visual">
              <div className="ai-quote-mockup">
                <div className="ai-quote-header">
                  <div className="ai-quote-header-dots">
                    <span className="ai-quote-dot"></span>
                    <span className="ai-quote-dot"></span>
                    <span className="ai-quote-dot"></span>
                  </div>
                  <span className="ai-quote-header-text">Assistant IA - Les Toitures d'Elma</span>
                </div>
                <div className="ai-quote-body">
                  <div className="ai-message">
                    <div className="ai-avatar">🤖</div>
                    <div className="ai-bubble">
                      👋 Bonjour ! Je suis l'assistant intelligent des <strong>Toitures d'Elma</strong>.<br />
                      Je peux vous donner un <strong>devis préliminaire</strong> en moins d'une minute.<br /><br />
                      Quelle est la surface approximative de votre toiture ?
                    </div>
                  </div>
                  <div className="user-message">
                    <div className="user-bubble">Environ 120 m², maison individuelle à Briou</div>
                  </div>
                  <div className="ai-message">
                    <div className="ai-avatar">🤖</div>
                    <div className="ai-bubble">
                      Parfait ! Voici une estimation préliminaire :<br /><br />
                      📋 <strong>Rénovation complète</strong> : 8 500 € – 11 200 €<br />
                      🔧 <strong>Réparation partielle</strong> : 2 300 € – 4 800 €<br /><br />
                      Souhaitez-vous <strong>programmer une visite gratuite</strong> pour un devis précis ?
                    </div>
                  </div>
                </div>
              </div>
              <div className="ai-quote-cta">
                <button className="btn btn-primary" onClick={() => setChatOpen(true)}>
                  💬 Essayez l'assistant IA →
                </button>
              </div>
            </div>
            <div>
              <div className="section-tag">⚡ Devis Instantané</div>
              <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem, 2.5vw, 2.2rem)', color:'var(--navy-900)', lineHeight:1.2, marginBottom:16}}>
                Un devis préliminaire<br />
                <span style={{color:'var(--navy-500)'}}>en moins de 60 secondes</span>
              </h2>
              <p style={{color:'var(--slate-500)', fontSize:'0.95rem', lineHeight:1.7, marginBottom:24}}>
                Notre assistant IA vous guide pas à pas pour estimer le coût de vos travaux. 
                Posez vos questions à tout moment — il répond 24h/24, 7j/7, même le week-end.
              </p>
              <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:12}}>
                {['Réponse instantanée, sans attente', 'Devis préliminaire gratuit et sans engagement', 'Prise de rendez-vous en un clic'].map((item, i) => (
                  <li key={i} style={{display:'flex', alignItems:'center', gap:10, fontSize:'0.9rem', color:'var(--slate-600)'}}>
                    <span style={{width:20, height:20, borderRadius:10, background:'#f0fdf4', color:'#16a34a', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.7rem', flexShrink:0}}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label">
            <div className="section-tag">✨ Notre Savoir-Faire</div>
            <h2>Des solutions complètes pour votre toiture</h2>
            <p>De la réparation d'urgence à la rénovation complète, nous prenons en charge tous vos projets de couverture.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="reviews" id="reviews">
        <div className="container">
          <div className="section-label">
            <div className="section-tag">⭐ Avis Clients</div>
            <h2>Ils nous ont confié leur toiture</h2>
            <p>Découvrez les retours de nos clients du Loir-et-Cher.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div className="review-card" key={i}>
                <div className="review-badge">✅ Avis vérifié</div>
                <div className="review-stars">
                  {Array.from({length: review.rating}).map((_, si) => (
                    <span className="star" key={si}>★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-location">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à donner un nouveau toit à votre maison ?</h2>
            <p>
              Obtenez votre devis gratuit en moins de 60 secondes grâce à notre assistant IA, 
              ou contactez-nous directement pour un rendez-vous personnalisé.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large" onClick={() => setChatOpen(true)}>
                ⚡ Devis IA Instantané
              </button>
              <a href="tel:+33600000000" className="btn btn-outline btn-large">
                📞 02 54 XX XX XX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-text">
              © 2026 Les Toitures d'Elma — Artisan Couvreur à Briou (41), Loir-et-Cher
            </div>
            <div className="footer-links">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#" onClick={() => setChatOpen(true)}>Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== CHAT BUBBLE ===== */}
      <div className="chat-bubble">
        {chatOpen && (
          <div className="chat-panel">
            <div className="chat-panel-header">
              <div className="chat-panel-avatar">🤖</div>
              <div className="chat-panel-info">
                <h4>Elma - Assistant IA</h4>
                <span>En ligne</span>
              </div>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg, i) => (
                <div className={`chat-msg ${msg.from}`} key={i}>
                  <div className="chat-msg-bubble">{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="chat-input-area">
              <input
                className="chat-input"
                placeholder="Écrivez votre message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={handleChatKeyDown}
              />
              <button className="chat-send-btn" onClick={handleChatSend}>➤</button>
            </div>
          </div>
        )}
        <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
          💬
          {!chatOpen && <span className="notification-dot"></span>}
        </button>
      </div>
    </>
  )
}

export default App
