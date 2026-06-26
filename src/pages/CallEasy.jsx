import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';

export default function CallEasy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="CallEasy CRM | Zero-Latency Calling Partner for MSMEs"
        description="Stop leaking leads. CallEasy provides zero-second lead actioning, an omnichannel WhatsApp inbox, and auto-QA analytics for high-performance sales floors."
      />

      <main className="bg-gradient-to-br from-[#050505] via-[#0a0f05] to-[#050505] bg-[length:200%_200%] animate-[gradient-shift_15s_ease_infinite] min-h-screen text-slate-100 font-sans overflow-x-hidden selection:bg-lime-500/30 selection:text-lime-300">

        {/* =========================================
            1. THE HERO: Asymmetric & Unconventional
            ========================================= */}
        <section className="relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto border-b border-white/5">
          {/* Subtle Ambient Tricolor Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-40 left-0 lg:left-1/4 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-orange-500/10 rounded-full blur-[100px] mix-blend-screen animate-[blob_15s_infinite]" />
            <div className="absolute top-40 right-0 lg:right-1/4 w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-green-500/10 rounded-full blur-[120px] mix-blend-screen animate-[blob_18s_infinite_2s]" />
            <div className="absolute top-1/2 left-1/3 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-white/5 rounded-full blur-[100px] mix-blend-screen animate-[blob_20s_infinite_4s]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
            
            {/* Left: Aggressive Copywriting */}
            <div className="lg:col-span-6 relative z-20">
              <ScrollReveal>
                <img src="/images/callEasy logo.png" alt="CallEasy" className="block mr-auto object-left h-20 sm:h-28 lg:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(163,230,53,0.2)] -mb-4 sm:-mb-6 -ml-2 sm:-ml-3 lg:-ml-4" />
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 font-sans">
                  Stop Leaking Leads. <br className="hidden sm:block"/>
                  Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-100 to-green-500 animate-[gradient-shift_5s_ease_infinite] bg-[length:200%_auto]">Closing.</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-xl sm:text-2xl text-zinc-400 font-light mb-12 max-w-2xl leading-relaxed font-sans">
                  CallEasy is the zero-latency CRM built for MSMEs. We route Meta & Google leads to your agents in <strong className="text-white font-medium">under 1 second</strong>. If you aren't first, you're last.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-lime-400 text-black font-extrabold text-lg rounded-2xl hover:bg-lime-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(163,230,53,0.4)] group font-sans"
                  >
                    Deploy CallEasy Today
                    <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="flex flex-col gap-1 justify-center py-2">
                    <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider font-sans">Trusted by</span>
                    <span className="text-white font-bold text-xl font-sans">5,000+ Agents</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Floating UIs & Mockup (Unconventional Layout) */}
            <div className="lg:col-span-6 relative z-10 h-[400px] sm:h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end overflow-hidden sm:overflow-visible">
              <ScrollReveal delay={400} className="w-full relative h-full">
                
                {/* Main Dashboard Panel - Rotated and scaled for depth */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full sm:w-[100%] max-w-[800px] rounded-3xl overflow-hidden border border-[#222] shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-[#0a0a0a] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-1000 ease-out z-10">
                  <img src="/images/callEasy ui.png" alt="CallEasy Dashboard" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating UI 1: Incoming Lead Toast */}
                <div className="absolute left-2 sm:-left-4 top-8 sm:top-1/4 z-30 bg-[#111111]/90 backdrop-blur-xl border border-lime-500/30 p-3 sm:p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 sm:gap-4 animate-[float_5s_ease-in-out_infinite] transform -rotate-2 max-w-[260px] sm:max-w-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-500/20 flex items-center justify-center border border-lime-500/50 shrink-0">
                    <img src="https://cdn.simpleicons.org/meta/0668E1" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Meta Lead" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-lime-400 font-bold text-xs sm:text-sm tracking-wide font-sans truncate">New Lead: Facebook Ads</p>
                    <p className="text-white font-medium text-sm sm:text-lg font-sans truncate">Rajesh Kumar (+91 98***)</p>
                    <p className="text-zinc-400 text-[10px] sm:text-xs mt-0.5 font-sans truncate">Routed in 0.4s to Priya</p>
                  </div>
                </div>

                {/* Floating UI 2: Conversion Metric */}
                <div className="absolute right-2 sm:-right-4 bottom-8 sm:bottom-1/4 z-30 bg-[#111111]/90 backdrop-blur-xl border border-[#333] p-3 sm:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col gap-1 sm:gap-2 animate-[float_7s_ease-in-out_infinite] transform rotate-3">
                  <div className="flex items-center justify-between gap-4 sm:gap-6 mb-1 sm:mb-2">
                    <span className="text-zinc-400 font-medium text-xs sm:text-sm font-sans">Close Rate</span>
                    <span className="text-green-400 text-[10px] sm:text-xs font-bold bg-green-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md font-sans">+24%</span>
                  </div>
                  <div className="text-xl sm:text-3xl font-black text-white font-sans">42.8%</div>
                  <div className="w-full bg-zinc-800 h-1.5 sm:h-2 rounded-full mt-1 overflow-hidden">
                    <div className="bg-lime-400 h-full w-[42.8%] rounded-full" />
                  </div>
                </div>

              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================
            2. INFINITE LOGO MARQUEE
            ========================================= */}
        <section className="py-12 border-b border-white/5 bg-[#020202] relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm font-sans">Natively Integrated With Your Entire Funnel</p>
          </div>
          
          <div className="relative flex overflow-x-hidden group">
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Track */}
            <div className="animate-marquee flex w-max">
              {/* We duplicate the identical flex container twice. 
                  flex-shrink-0 prevents squishing. 
                  pr-20 matches gap-20 so the end of block 1 flows seamlessly into block 2 */}
              {[1, 2].map((loopIndex) => (
                <div key={loopIndex} className="flex shrink-0 items-center gap-20 pr-20">
                  <img src="https://cdn.simpleicons.org/meta/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="Meta" />
                  <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="h-10 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all object-contain" alt="Google" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all object-contain" alt="WhatsApp" />
                  <img src="https://cdn.simpleicons.org/zoho/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="Zoho" />
                  <img src="https://cdn.simpleicons.org/hubspot/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="HubSpot" />
                  <img src="https://cdn.simpleicons.org/shopify/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="Shopify" />
                  <img src="https://cdn.simpleicons.org/mailchimp/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="Mailchimp" />
                  <img src="https://cdn.simpleicons.org/zendesk/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="Zendesk" />
                  <img src="https://cdn.simpleicons.org/stripe/ffffff" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity object-contain" alt="Stripe" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            3. DEEP DIVE FEATURE 1: Asymmetric Left
            ========================================= */}
        <section className="py-24 lg:py-40 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <ScrollReveal className="order-2 lg:order-1 relative">
                {/* Abstract geometric background behind image */}
                <div className="absolute -inset-10 bg-lime-500/5 rounded-[3rem] transform -rotate-3" />
                
                <div className="relative rounded-3xl overflow-hidden border border-[#222] bg-[#0a0a0a] p-8 lg:p-12 shadow-2xl">
                  {/* Decorative Header */}
                  <div className="flex justify-between items-center mb-8 border-b border-[#222] pb-6">
                    <h4 className="text-white font-bold text-xl font-sans">Incoming Leads Queue</h4>
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#333]" />
                      <span className="w-3 h-3 rounded-full bg-[#333]" />
                      <span className="w-3 h-3 rounded-full bg-lime-500 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Simulated UI rows */}
                  <div className="space-y-4">
                    {[
                      { name: "Rahul Sharma", source: "Google Search Ads", time: "0s ago", active: true },
                      { name: "Aarav Tech Ltd", source: "Meta Lead Form", time: "12s ago", active: false },
                      { name: "Neha Gupta", source: "Website Chatbot", time: "45s ago", active: false },
                    ].map((lead, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${lead.active ? 'border-lime-500/30 bg-lime-500/5' : 'border-[#222] bg-[#111]'}`}>
                        <div className="flex flex-col gap-1">
                          <span className={`font-bold font-sans ${lead.active ? 'text-lime-400' : 'text-white'}`}>{lead.name}</span>
                          <span className="text-zinc-500 text-xs uppercase tracking-wider font-sans font-medium">{lead.source}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-sm font-sans">{lead.time}</span>
                          {lead.active && <p className="text-lime-500 text-xs font-bold mt-1 font-sans">Dialing...</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 font-medium text-sm mb-6 font-sans">
                  01. Speed to Lead
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 font-sans tracking-tight">
                  Zero-Second Lead <br className="hidden sm:block"/> Actioning.
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-sans">
                  MSMEs lose millions because agents call hours after a prospect submits a form. CallEasy's algorithmic routing engine bypasses manual assignment. The moment a lead clicks "Submit" on Facebook or Google, your agent's phone is ringing.
                </p>
                <ul className="space-y-5">
                  {[
                    "Webhook integration with Meta & Google Ads",
                    "Round-robin & skill-based automated routing",
                    "Push notifications to mobile app instantly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-lime-500/20 flex items-center justify-center shrink-0 border border-lime-500/30">
                        <svg className="w-3 h-3 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-medium font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              
            </div>
          </div>
        </section>

        {/* =========================================
            4. DEEP DIVE FEATURE 2: Asymmetric Right
            ========================================= */}
        <section className="py-24 lg:py-40 relative z-10 border-t border-white/5 bg-[#0a0a0a] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <ScrollReveal className="order-1 relative z-20">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm mb-6 font-sans">
                  02. Centralized Comms
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 font-sans tracking-tight">
                  The "No-Escape" <br className="hidden sm:block"/> Omnichannel Inbox.
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-sans">
                  Stop letting agents use their personal WhatsApp numbers. Gain 100% visibility into every client interaction. CallEasy merges phone calls, WhatsApp chats, and emails into a single, immutable timeline for every contact.
                </p>
                <Link to="/contact" className="text-green-400 font-bold font-sans hover:text-green-300 flex items-center gap-2 transition-colors">
                  Get WhatsApp API Access 
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={200} className="order-2 relative z-10">
                {/* UI Mockup showing an omnichannel chat */}
                <div className="relative rounded-3xl overflow-hidden border border-[#222] bg-[#111] shadow-[0_0_100px_rgba(34,197,94,0.1)] flex flex-col h-[500px] transform rotate-1 hover:rotate-0 transition-transform duration-700">
                  {/* Chat Header */}
                  <div className="bg-[#1a1a1a] p-5 border-b border-[#333] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg font-sans">VK</div>
                    <div>
                      <h4 className="text-white font-bold font-sans">Vikram Kapoor</h4>
                      <p className="text-green-400 text-xs font-medium font-sans flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Online via WhatsApp
                      </p>
                    </div>
                  </div>
                  {/* Chat Body */}
                  <div className="flex-1 p-6 space-y-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
                    
                    {/* Call Log */}
                    <div className="flex justify-center relative z-10">
                      <span className="px-4 py-1.5 rounded-full bg-[#222] text-zinc-400 text-xs font-medium font-sans border border-[#333]">
                        ☎️ Outbound Call • 4m 12s • Recorded
                      </span>
                    </div>

                    {/* Agent Msg */}
                    <div className="flex justify-end relative z-10">
                      <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md">
                        <p className="text-sm font-sans leading-relaxed">Hi Vikram, as discussed on the call, here is the proposal link for the new software upgrade. Let me know if you have questions!</p>
                        <span className="text-white/50 text-[10px] block text-right mt-1 font-sans">11:42 AM</span>
                      </div>
                    </div>

                    {/* Client Msg */}
                    <div className="flex justify-start relative z-10">
                      <div className="bg-[#202c33] text-white p-4 rounded-2xl rounded-tl-sm max-w-[80%] shadow-md">
                        <p className="text-sm font-sans leading-relaxed">Thanks Priya. I reviewed it. Can we schedule a demo for my team tomorrow?</p>
                        <span className="text-white/50 text-[10px] block text-right mt-1 font-sans">11:45 AM</span>
                      </div>
                    </div>
                  </div>
                  {/* Input area */}
                  <div className="p-4 bg-[#1a1a1a] border-t border-[#333]">
                    <div className="bg-[#2a2a2a] rounded-full px-6 py-3 flex items-center justify-between text-zinc-500 text-sm font-sans">
                      Type a WhatsApp message...
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Meta Tag */}
                <div className="absolute top-4 right-4 sm:-top-6 sm:-right-6 bg-white text-black font-black font-sans px-4 sm:px-6 py-2.5 sm:py-4 rounded-2xl shadow-2xl transform rotate-3 sm:rotate-6 border-2 sm:border-4 border-[#0a0a0a] z-30 text-xs sm:text-base">
                  Official API Provider
                </div>

              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================
            5. HIGH CONTRAST CTA SECTION
            ========================================= */}
        <section className="py-32 lg:py-48 relative z-10 bg-[#050505] border-t border-white/5 overflow-hidden">
          {/* Subtle typography background texture */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <h2 className="text-[20vw] font-black text-white leading-none whitespace-nowrap tracking-tighter">INDIA LOVES US</h2>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 mb-8 backdrop-blur-md">
                <span className="flex w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <span className="text-lime-400 text-sm font-semibold tracking-widest uppercase font-sans">Built For Bharat</span>
              </div>
              <h2 className="text-4xl sm:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.9] mb-8 font-sans uppercase">
                INDIA'S MSMEs <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-100 to-green-500 animate-[gradient-shift_5s_ease_infinite] bg-[length:200%_auto]">LOVE THIS.</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
                No more lost leads. No more unrecorded calls. Bring enterprise-grade sales infrastructure to your MSME today.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <Link
                  to="/contact"
                  className="relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-orange-500 via-orange-300 to-green-500 text-black font-black text-xl rounded-2xl hover:brightness-110 transition-all duration-300 hover:scale-105 group font-sans overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.3)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative flex items-center">
                    Book a Strategy Call
                    <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <div className="flex flex-col items-center sm:items-start text-left">
                  <span className="text-white font-black uppercase tracking-widest text-lg font-sans">
                    14-Day Free Trial
                  </span>
                  <span className="text-zinc-400 font-semibold text-sm font-sans">Cancel anytime. No credit card.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Abstract background typography in CTA */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden z-10">
            <span className="text-[12rem] sm:text-[35rem] lg:text-[45rem] font-black text-white leading-none whitespace-nowrap tracking-tighter font-sans">CALLEASY</span>
          </div>
        </section>

      </main>

      {/* Global Custom CSS for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </>
  );
}
