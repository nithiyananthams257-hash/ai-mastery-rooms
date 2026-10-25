import type React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Fingerprint, Menu, Plus } from "lucide-react";
import { cx } from "../utils/cx";

export function AppShell({children}:{children:React.ReactNode}){const [menu,setMenu]=useState(false);return <div className="app-shell"><header className="topbar"><Link to="/" className="brand"><span className="brand-mark"><Fingerprint size={19}/></span><span>CASEFILE<span className="brand-sub">MYSTERY ROOM</span></span></Link><button className="mobile-menu icon-button" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}><Menu size={19}/></button><nav className={cx("main-nav",menu&&"open")}><NavLink to="/" onClick={()=>setMenu(false)}>Overview</NavLink><NavLink to="/create" onClick={()=>setMenu(false)}>Create case</NavLink><NavLink to="/cases" onClick={()=>setMenu(false)}>My cases</NavLink><Link to="/#how" onClick={()=>setMenu(false)}>How to play</Link><NavLink to="/settings" onClick={()=>setMenu(false)}>Settings</NavLink></nav><Link className="top-cta" to="/create"><Plus size={15}/> New investigation</Link></header>{children}<footer className="footer"><div className="footer-inner"><div className="brand footer-brand"><span className="brand-mark"><Fingerprint size={17}/></span><span>CASEFILE<span className="brand-sub">MYSTERY ROOM</span></span></div><span>Every case is fictional. Every clue has a story.</span><span>© 2026 Casefile</span></div></footer></div>}


