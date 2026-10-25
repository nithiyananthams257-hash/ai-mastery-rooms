import type React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, FileSearch, Fingerprint, Users } from "lucide-react";
import type { CasePublic } from "@mystery/shared";

export function Feature({number,icon,title,text}:{number:string;icon:React.ReactNode;title:string;text:string}){return <article className="feature-card"><div className="feature-top"><span>{number} / 04</span><span className="feature-icon">{icon}</span></div><h3>{title}</h3><p>{text}</p><div className="feature-rule"/></article>}
export function Step({n,title,text}:{n:string;title:string;text:string}){return <div className="step"><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight size={17}/></div>}
export function CaseCard({item}:{item:CasePublic}){return <Link className="case-card" to={`/cases/${item.id}`}><div className="case-cover"><span className="cover-grid"/><span className="cover-number">{item.id.slice(-5).toUpperCase()}</span><span className="cover-icon"><Fingerprint size={28}/></span><span className="cover-status"><span className="live-dot"/> FILE OPEN</span></div><div className="case-card-body"><div className="card-kicker">{item.genre} <span>·</span> {item.difficulty}</div><h3>{item.title}</h3><p>{item.briefing.summary}</p><div className="case-card-foot"><span><Users size={14}/> {item.suspectIds.length} suspects</span><span><FileSearch size={14}/> {item.evidenceIds.length} exhibits</span><ArrowRight size={16}/></div></div></Link>}

