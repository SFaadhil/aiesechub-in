'use client';

import { useState, useMemo, Fragment } from 'react';
import {
  PORTFOLIOS, RECOGNITION_PORTFOLIOS, TIER_PORTFOLIOS,
  TIERS, TIER_META, TIERS_BY_PORTFOLIO, LC_PORTFOLIO_TIERS,
  MONTHS_LIST, RNR_METRICS, METRICS_ORDER, MONTHLY_POINTS,
  getDashboardDataForMonth, getRecognitionData,
} from '@/lib/rnr-data';
import PageOffline from '@/components/PageOffline';

const PAGE_STATUS_LIVE = true;

const ACCENT = '#f59e0b';

function TierBadge({ tier, small, inline }) {
  if (!tier || tier === '—') {
    return <span style={{ fontSize: small ? 10 : 11, color: 'var(--text-3)', fontWeight: 600 }}>—</span>;
  }
  const { color, bg } = TIER_META[tier] || { color: '#8b9ab0', bg: '#f8fafc' };
  const label = tier === 'Tier X' ? 'TX' : tier.replace('Tier ', 'T');
  return (
    <span style={{
      fontSize: small ? 10 : 11,
      fontWeight: 700,
      color,
      background: inline ? 'transparent' : bg,
      border: inline ? 'none' : `1px solid ${color}30`,
      borderRadius: 20,
      padding: small ? '1px 6px' : '2px 9px',
      whiteSpace: 'nowrap',
      display: 'inline-block',
    }}>
      {inline ? label : tier}
    </span>
  );
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-5 animate-fade-up">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mb-2">{title}</h2>
      {desc && <p style={{ fontSize: 14.5, color: 'var(--text-2)', maxWidth: 600 }}>{desc}</p>}
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1a0a00 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0 64px',
    }}>
      <div style={{ position:'absolute', top:-60, right:-60, width:400, height:400, borderRadius:'50%', background:'rgba(245,158,11,0.15)', filter:'blur(80px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-80, left:-40, width:320, height:320, borderRadius:'50%', background:'rgba(245,158,11,0.08)', filter:'blur(60px)', pointerEvents:'none' }} />

      <div className="container-xl position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7 animate-fade-up">
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(245,158,11,0.15)', border:'1px solid rgba(245,158,11,0.3)',
              borderRadius:20, padding:'4px 14px', fontSize:12, fontWeight:700,
              color:ACCENT, marginBottom:20, letterSpacing:'0.5px', textTransform:'uppercase',
            }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:ACCENT, display:'inline-block' }} />
              RnR ·  26.1
            </div>

            <h1 style={{
              fontSize:'clamp(2rem, 5vw, 3.2rem)', fontWeight:900,
              letterSpacing:'-1px', color:'#fff', lineHeight:1.15, marginBottom:20,
            }}>
              Rewards &<br />
              <span style={{ color:ACCENT }}>Recognition</span>
            </h1>

            <p style={{ fontSize:16, lineHeight:1.8, color:'rgba(255,255,255,0.65)', maxWidth:520, marginBottom:32 }}>
              Track where your portfolio and entity stand in the National Plenary against all other competing entities.
            </p>

            <div style={{
              background:'rgba(255,255,255,0.05)', border:'1px solid rgba(245,158,11,0.2)',
              borderRadius:12, padding:'20px 24px',
            }}>
              <p style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', color:'rgba(255,255,255,0.4)', marginBottom:12 }}>
                Points to Note
              </p>
              {[
                'Read the Minimums to Attain RnR sheet to understand minimum requirements.',
                'View your portfolio and entity tier standings in the Tiers section below.',
                'Tiers vary per portfolio — your entity may be in Tier 1 for one portfolio and Tier 3 for another.',
                'A portfolio may not be recognised for any month if they fail respective product audits.',
                'Understand the scoring system for your portfolio in the Metrics section.',
              ].map((note, i) => (
                <div key={i} style={{ display:'flex', gap:10, marginBottom:i<4?8:0 }}>
                  <span style={{ color:ACCENT, flexShrink:0, marginTop:2 }}>·</span>
                  <span style={{ fontSize:13.5, color:'rgba(255,255,255,0.6)', lineHeight:1.6 }}>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5 animate-fade-up delay-2">
            <div style={{
              background:'rgba(245,158,11,0.08)', border:'1px solid rgba(245,158,11,0.2)',
              borderRadius:16, padding:'28px 24px', marginBottom:16,
            }}>
              <p style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', color:'rgba(255,255,255,0.4)', marginBottom:16 }}>
                For Queries
              </p>
              {[
                { label:'Name',  value:'Mohammed Zahid Ahmed' },
                { label:'Role',  value:'MCVP Expansions & ODm' },
                { label:'Phone', value:'+91 6366304513' },
                { label:'Email', value:'zahid.ahmed@aiesec.in' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display:'flex', gap:12, alignItems:'baseline', marginBottom:8 }}>
                  <span style={{ fontSize:11, color:ACCENT, fontWeight:700, minWidth:44 }}>{label}</span>
                  <span style={{ fontSize:13.5, color:'rgba(255,255,255,0.75)' }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
              {Object.entries(TIER_META).map(([tier, { color }]) => (
                <span key={tier} style={{
                  fontSize:11, fontWeight:700, color,
                  background:'rgba(255,255,255,0.06)', border:`1px solid ${color}40`,
                  borderRadius:20, padding:'3px 10px',
                }}>
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  const [search, setSearch]         = useState('');
  const [activeTier, setActiveTier] = useState('All');
  const [activeMonth, setActiveMonth] = useState(MONTHS_LIST[MONTHS_LIST.length - 1].key);
  const [visiblePf, setVisiblePf]   = useState(
    new Set(['Entity','iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL'])
  );

  function togglePortfolio(key) {
    setVisiblePf((prev) => {
      const next = new Set(prev);
      if (next.has(key)) { if (next.size > 1) next.delete(key); }
      else next.add(key);
      return next;
    });
  }

  const dashboardRows = useMemo(() => getDashboardDataForMonth(activeMonth), [activeMonth]);

  const filtered = useMemo(() => dashboardRows.filter((row) => {
    const matchSearch = !search || row.lc.toLowerCase().includes(search.toLowerCase());
    const matchTier   = activeTier === 'All' || row.entityTier === activeTier;
    return matchSearch && matchTier;
  }), [dashboardRows, search, activeTier]);

  const visiblePortfolios = PORTFOLIOS.filter((p) => visiblePf.has(p.key));

  return (
    <section className="section-py" style={{ background:'var(--bg)' }}>
      <div className="container-xl">
        <SectionHeader
          eyebrow="Rankings"
          title="National Dashboard"
          desc="Per-portfolio standings for every LC. Tier badges show each entity's tier within that specific portfolio."
        />

        {/* Filters */}
        <div style={{
          background:'var(--surface)', border:'1px solid var(--border)',
          borderRadius:'var(--radius-md)', padding:'16px 20px', marginBottom:24,
        }}>
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-4">
              <div style={{ position:'relative' }}>
                <svg style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', color:'var(--text-3)' }}
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  type="search" value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search LC…"
                  style={{
                    width:'100%', paddingLeft:32, paddingRight:12, height:36,
                    border:'1px solid var(--border)', borderRadius:8,
                    background:'var(--bg)', color:'var(--text)', fontSize:13, outline:'none',
                  }}
                />
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {['All', ...Object.keys(TIER_META)].map((t) => {
                  const active = activeTier === t;
                  const color  = TIER_META[t]?.color ?? ACCENT;
                  return (
                    <button key={t} onClick={() => setActiveTier(t)} style={{
                      fontSize:11, fontWeight:700, cursor:'pointer', borderRadius:20,
                      padding:'4px 12px',
                      border:`1px solid ${active ? color : 'var(--border)'}`,
                      background: active ? `${color}15` : 'transparent',
                      color: active ? color : 'var(--text-3)',
                      transition:'all 0.15s',
                    }}>
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Month filter */}
          <div style={{ marginTop:12, paddingTop:12, borderTop:'1px solid var(--border)' }}>
            <span style={{ fontSize:11, fontWeight:600, color:'var(--text-3)', marginRight:10, textTransform:'uppercase', letterSpacing:'0.5px' }}>Month:</span>
            {MONTHS_LIST.map((m) => {
              const active = activeMonth === m.key;
              return (
                <button key={m.key} onClick={() => setActiveMonth(m.key)} style={{
                  fontSize:11, fontWeight:700, cursor:'pointer', borderRadius:20,
                  padding:'4px 12px', marginRight:6,
                  border:`1px solid ${active ? ACCENT : 'var(--border)'}`,
                  background: active ? `${ACCENT}15` : 'transparent',
                  color: active ? ACCENT : 'var(--text-3)',
                  transition:'all 0.15s',
                }}>
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Portfolio toggles */}
          <div style={{ marginTop:12, paddingTop:12, borderTop:'1px solid var(--border)' }}>
            <span style={{ fontSize:11, fontWeight:600, color:'var(--text-3)', marginRight:10, textTransform:'uppercase', letterSpacing:'0.5px' }}>Portfolios:</span>
            {PORTFOLIOS.map((p) => {
              const on = visiblePf.has(p.key);
              // Entity uses near-black — swap to amber accent so the chip is legible
              const chipColor = on
                ? (p.key === 'Entity' ? ACCENT : p.color)
                : 'var(--text-3)';
              return (
                <button key={p.key} onClick={() => togglePortfolio(p.key)} style={{
                  fontSize:11, fontWeight:700, cursor:'pointer', borderRadius:6,
                  padding:'3px 9px', marginRight:5, marginBottom:4,
                  border:`1px solid ${on ? chipColor : 'var(--border)'}`,
                  background: on ? `${chipColor}18` : 'transparent',
                  color: chipColor,
                  transition:'all 0.15s',
                }}>
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--radius-md)', overflow:'hidden' }}>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
              <thead>
                <tr style={{ background:'var(--bg-alt)', borderBottom:'2px solid var(--border)' }}>
                  <th style={{ ...TH, textAlign:'center', width:48, position:'sticky', left:0, background:'var(--bg-alt)', zIndex:2 }}>#</th>
                  <th style={{ ...TH, minWidth:190, position:'sticky', left:48, background:'var(--bg-alt)', zIndex:2 }}>Local Committee</th>
                  {visiblePortfolios.map((p) => (
                    <th key={p.key} colSpan={3} style={{ ...TH, textAlign:'center', minWidth:140, borderLeft:'1px solid var(--border)' }}>
                      <span style={{ color: p.key === 'Entity' ? ACCENT : p.color }}>{p.label}</span>
                    </th>
                  ))}
                </tr>
                <tr style={{ background:'var(--bg-alt)', borderBottom:'1px solid var(--border)' }}>
                  <th style={{ ...STH, position:'sticky', left:0, background:'var(--bg-alt)', zIndex:2 }} />
                  <th style={{ ...STH, position:'sticky', left:48, background:'var(--bg-alt)', zIndex:2 }} />
                  {visiblePortfolios.map((p) => (
                    <Fragment key={p.key}>
                      <th style={{ ...STH, textAlign:'center', borderLeft:'1px solid var(--border)' }}>Tier</th>
                      <th style={{ ...STH, textAlign:'center' }}>Rank</th>
                      <th style={{ ...STH, textAlign:'right' }}>Pts</th>
                    </Fragment>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={2 + visiblePortfolios.length * 3}
                      style={{ textAlign:'center', padding:32, color:'var(--text-3)', fontSize:13 }}>
                      No LCs match your filters.
                    </td>
                  </tr>
                ) : filtered.map((row) => {
                  const lcTiers = LC_PORTFOLIO_TIERS[row.lc] || {};
                  return (
                    <tr key={row.lc}
                      className="dashboard-row"
                      style={{ borderBottom:'1px solid var(--border)' }}
                    >
                      <td className="sticky-col" style={{ ...TD, textAlign:'center', fontWeight:700, color:'var(--text-3)', position:'sticky', left:0, zIndex:1 }}>
                        {row.entityRank}
                      </td>
                      <td className="sticky-col" style={{ ...TD, fontWeight:600, position:'sticky', left:48, zIndex:1 }}>
                        {row.lc.replace('AIESEC in ', '')}
                        <div style={{ fontSize:10, color:'var(--text-3)', fontWeight:400 }}>{row.lc}</div>
                      </td>
                      {visiblePortfolios.map((p) => {
                        const pData     = row.portfolios[p.key];
                        const pfTier    = lcTiers[p.key];
                        const tierColor = pfTier && TIER_META[pfTier] ? TIER_META[pfTier].color : 'var(--text-3)';
                        return (
                          <Fragment key={`${row.lc}-${p.key}`}>
                            <td style={{ ...TD, textAlign:'center', borderLeft:'1px solid var(--border)' }}>
                              {pfTier ? (
                                <span style={{
                                  fontSize:10, fontWeight:700, color:tierColor,
                                  background:`${tierColor}12`, borderRadius:10, padding:'1px 6px',
                                  display:'inline-block',
                                }}>
                                  {pfTier === 'Tier X' ? 'TX' : pfTier.replace('Tier ','')}
                                </span>
                              ) : (
                                <span style={{ fontSize:10, color:'var(--text-3)' }}>—</span>
                              )}
                            </td>
                            <td style={{ ...TD, textAlign:'center', color:'var(--text-3)', fontSize:11 }}>
                              {pData ? `#${pData.rank}` : '—'}
                            </td>
                            <td style={{ ...TD, textAlign:'right', fontWeight:600 }}>
                              {pData ? pData.points : 0}
                            </td>
                          </Fragment>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionSection() {
  const [selectedPortfolio, setSelectedPortfolio] = useState('Entity');
  const [selectedMonth, setSelectedMonth]         = useState(MONTHS_LIST[MONTHS_LIST.length - 1].key);

  const recData  = useMemo(() => getRecognitionData(selectedPortfolio, selectedMonth), [selectedPortfolio, selectedMonth]);
  const portfolio = RECOGNITION_PORTFOLIOS.find((p) => p.key === selectedPortfolio) || RECOGNITION_PORTFOLIOS[0];
  const pfPts    = useMemo(() => {
    const pfKey = selectedPortfolio === 'Entity' ? 'entity' : selectedPortfolio;
    return (MONTHLY_POINTS[selectedMonth] || {})[pfKey] || {};
  }, [selectedPortfolio, selectedMonth]);

  return (
    <section className="section-py" style={{ background:'var(--bg-alt)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="container-xl">
        <SectionHeader
          eyebrow="Monthly Recognition"
          title="Recognition Table"
          desc="Select a portfolio and month to see which LCs were recognised at each tier level."
        />

        <div style={{ display:'flex', flexWrap:'wrap', gap:12, marginBottom:28 }}>
          <div>
            <label style={{ fontSize:11, fontWeight:700, color:'var(--text-3)', display:'block', marginBottom:4, textTransform:'uppercase', letterSpacing:'0.5px' }}>Portfolio</label>
            <select value={selectedPortfolio} onChange={(e) => setSelectedPortfolio(e.target.value)} style={SEL}>
              {RECOGNITION_PORTFOLIOS.map((p) => (
                <option key={p.key} value={p.key}>{p.label} — {p.fullName}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ fontSize:11, fontWeight:700, color:'var(--text-3)', display:'block', marginBottom:4, textTransform:'uppercase', letterSpacing:'0.5px' }}>Month</label>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} style={SEL}>
              {MONTHS_LIST.map((m) => <option key={m.key} value={m.key}>{m.label}</option>)}
            </select>
          </div>
        </div>

        <div className="row g-3">
          {TIERS.map((tier, i) => {
            const { color, bg, label } = TIER_META[tier];
            const lcs = recData[tier] || [];
            return (
              <div key={tier} className={`col-12 col-sm-6 col-lg-4 animate-fade-up delay-${Math.min(i+1,6)}`}>
                <div style={{
                  background:'var(--surface)', border:`1px solid ${color}30`,
                  borderTop:`3px solid ${color}`,
                  borderRadius:'var(--radius-md)', padding:'20px 20px 16px', height:'100%',
                }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
                    <div>
                      <span style={{ fontSize:14, fontWeight:800, color }}>{tier}</span>
                      {label && <span style={{ fontSize:11, color:'var(--text-3)', display:'block', marginTop:2 }}>{label}</span>}
                    </div>
                    <span style={{
                      fontSize:10, fontWeight:700, color, background:`${color}15`,
                      border:`1px solid ${color}30`, borderRadius:12, padding:'2px 8px',
                    }}>
                      {portfolio.label}
                    </span>
                  </div>

                  {lcs.length === 0 ? (
                    <p style={{ fontSize:12.5, color:'var(--text-3)', margin:0, fontStyle:'italic' }}>No recognitions for this selection.</p>
                  ) : (
                    <ul style={{ listStyle:'none', padding:0, margin:0 }}>
                      {lcs.map((lc) => (
                        <li key={lc} style={{
                          fontSize:12.5, color:'var(--text-2)', padding:'5px 0',
                          borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', gap:8,
                        }}>
                          <span style={{ width:6, height:6, borderRadius:'50%', background:color, flexShrink:0, display:'inline-block' }} />
                          <span style={{ flex:1 }}>{lc}</span>
                          {pfPts[lc] != null && (
                            <span style={{ fontSize:11.5, fontWeight:700, color, whiteSpace:'nowrap' }}>
                              {pfPts[lc].toLocaleString()} pts
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TiersSection() {
  const [activeKey, setActiveKey] = useState('Entity');

  const tierData  = TIERS_BY_PORTFOLIO[activeKey] || {};
  const portfolio = TIER_PORTFOLIOS.find((p) => p.key === activeKey) || TIER_PORTFOLIOS[0];

  return (
    <section className="section-py">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Tier Structure"
          title="Portfolio Tiers"
          desc="LC tier assignments for the current term. Tiers are computed from cumulative points across all months. Each portfolio has independent tier standings."
        />

        {/* Portfolio tabs */}
        <div style={{ marginBottom:28, overflowX:'auto', paddingBottom:4 }}>
          <div style={{ display:'flex', gap:6, minWidth:'max-content' }}>
            {TIER_PORTFOLIOS.map((p) => {
              const active = activeKey === p.key;
              return (
                <button key={p.key} onClick={() => setActiveKey(p.key)} style={{
                  fontSize:12, fontWeight:700, cursor:'pointer', borderRadius:8,
                  padding:'7px 16px', whiteSpace:'nowrap',
                  border:`1px solid ${active ? p.color : 'var(--border)'}`,
                  background: active ? p.color : 'var(--surface)',
                  color: active ? '#fff' : 'var(--text-2)',
                  transition:'all 0.15s',
                }}>
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <p style={{ fontSize:13, color:'var(--text-3)', marginBottom:20 }}>
          <span style={{ fontWeight:700, color:portfolio.color }}>{portfolio.label}</span> — {portfolio.fullName}
        </p>

        <div className="row g-3">
          {TIERS.map((tier, i) => {
            const { color, bg, label } = TIER_META[tier];
            const lcs = tierData[tier] || [];
            return (
              <div key={tier} className={`col-12 col-sm-6 col-lg-4 animate-fade-up delay-${Math.min(i+1,6)}`}>
                <div style={{
                  background:bg, border:`1px solid ${color}25`,
                  borderLeft:`4px solid ${color}`,
                  borderRadius:'var(--radius-md)', padding:'18px 18px 14px', height:'100%',
                }}>
                  <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:10 }}>
                    <span style={{ fontSize:15, fontWeight:800, color }}>{tier}</span>
                    {label && <span style={{ fontSize:11, color:'var(--text-3)', fontWeight:500 }}>{label}</span>}
                  </div>

                  {lcs.length === 0 ? (
                    <p style={{ fontSize:12.5, color:'var(--text-3)', margin:0, fontStyle:'italic' }}>No LCs at this tier.</p>
                  ) : (
                    <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                      {lcs.map((lc) => (
                        <span key={lc} style={{
                          fontSize:11.5, fontWeight:600, color:'var(--text-2)',
                          background:'var(--surface)', border:'1px solid var(--border)',
                          borderRadius:6, padding:'3px 8px',
                        }}>
                          {lc.replace('AIESEC in ', '')}
                        </span>
                      ))}
                    </div>
                  )}

                  <p style={{ fontSize:10.5, color:'var(--text-3)', marginTop:10, marginBottom:0 }}>
                    {lcs.length} {lcs.length === 1 ? 'entity' : 'entities'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop:24, padding:'12px 16px',
          background:'rgba(139,154,176,0.08)', border:'1px solid rgba(139,154,176,0.2)',
          borderRadius:'var(--radius-sm)', fontSize:12.5, color:'var(--text-3)',
        }}>
          <strong style={{ color:'var(--text-2)' }}>Note</strong> — 
          A portfolio may not be recognised for any month if they fail respective product audits.
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const [activeKey, setActiveKey] = useState('Entity');
  const currentMetric = RNR_METRICS[activeKey];

  return (
    <section className="section-py" style={{ background:'var(--bg-alt)', borderTop:'1px solid var(--border)' }}>
      <div className="container-xl">
        <SectionHeader
          eyebrow="Points Framework"
          title="RnR Metrics"
          desc="Scoring parameters and weightages for each portfolio — updated for term 2026.1."
        />

        {/* Portfolio tabs */}
        <div style={{ marginBottom:28, overflowX:'auto', paddingBottom:4 }}>
          <div style={{ display:'flex', gap:6, minWidth:'max-content' }}>
            {METRICS_ORDER.map((key) => {
              const active = activeKey === key;
              const color  = RNR_METRICS[key]?.color ?? '#8b9ab0';
              return (
                <button key={key} onClick={() => setActiveKey(key)} style={{
                  fontSize:12, fontWeight:700, cursor:'pointer', borderRadius:8,
                  padding:'7px 16px', whiteSpace:'nowrap',
                  border:`1px solid ${active ? color : 'var(--border)'}`,
                  background: active ? color : 'var(--surface)',
                  color: active ? '#fff' : 'var(--text-2)',
                  transition:'all 0.15s',
                }}>
                  {key}
                </button>
              );
            })}
          </div>
        </div>

        {currentMetric ? (
          <>
            <div style={{
              background:'var(--surface)', border:`1px solid ${currentMetric.color}30`,
              borderTop:`3px solid ${currentMetric.color}`,
              borderRadius:'var(--radius-md)', overflow:'hidden',
            }}>
              <div style={{ overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
                  <thead>
                    <tr style={{ background:`${currentMetric.color}08`, borderBottom:'1px solid var(--border)' }}>
                      {['Parameter','Scale / Criteria','Max Points','Weightage'].map((h) => (
                        <th key={h} style={{ ...TH, textAlign: (h==='Max Points'||h==='Weightage') ? 'center' : 'left' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentMetric.parameters.map((row, i) => (
                      <tr key={row.parameter}
                        style={{ borderBottom: i<currentMetric.parameters.length-1 ? '1px solid var(--border)' : 'none', transition:'background 0.1s' }}
                        onMouseEnter={(e) => e.currentTarget.style.background='var(--bg-alt)'}
                        onMouseLeave={(e) => e.currentTarget.style.background=''}
                      >
                        <td style={{ ...TD, fontWeight:600, color:'var(--text)' }}>{row.parameter}</td>
                        <td style={{ ...TD, color:'var(--text-2)', maxWidth:280 }}>{row.scale}</td>
                        <td style={{ ...TD, textAlign:'center', fontWeight:700, color: row.maxPoints ? currentMetric.color : 'var(--text-3)' }}>
                          {row.maxPoints ?? 'Variable'}
                        </td>
                        <td style={{ ...TD, textAlign:'center' }}>
                          <span style={{
                            fontSize:11.5, fontWeight:700, color:currentMetric.color,
                            background:`${currentMetric.color}12`, border:`1px solid ${currentMetric.color}25`,
                            borderRadius:12, padding:'2px 9px',
                          }}>
                            {row.weightage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p style={{ fontSize:12, color:'var(--text-3)', marginTop:12 }}>
              Data verified monthly via Expa, Monthly Audits, and respective tracking tools. Contact the MCVP for any discrepancies.
            </p>
          </>
        ) : (
          <div style={{ padding:40, textAlign:'center', color:'var(--text-3)', fontSize:13 }}>
            Metrics for this portfolio are not yet configured.
          </div>
        )}
      </div>
    </section>
  );
}

const TH = {
  padding: '10px 14px',
  fontSize: 11,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: 'var(--text-3)',
  whiteSpace: 'nowrap',
};

const STH = {
  padding: '4px 14px 8px',
  fontSize: 10,
  fontWeight: 600,
  color: 'var(--text-3)',
  whiteSpace: 'nowrap',
};

const TD = {
  padding: '11px 14px',
  color: 'var(--text-2)',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

const SEL = {
  height: 36,
  padding: '0 32px 0 12px',
  border: '1px solid var(--border)',
  borderRadius: 8,
  background: 'var(--surface)',
  color: 'var(--text)',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  outline: 'none',
  appearance: 'auto',
  minWidth: 240,
};

export default function RnRPage() {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  return (
    <>
      <HeroSection />
      <DashboardSection />
      <RecognitionSection />
      <TiersSection />
      <MetricsSection />
    </>
  );
}
