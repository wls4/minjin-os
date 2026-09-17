'use client';
import { useMemo, useState } from 'react';

const projects = [
 {name:'10월 가을 선물',range:'09.17 - 10.31',progress:35,kind:'프로모션',icon:'🎁'},
 {name:'네이버 기획전',range:'09.20 - 10.15',progress:50,kind:'프로모션',icon:'🛍️'},
 {name:'신제품 런칭',range:'10.01 - 11.15',progress:10,kind:'상품',icon:'✨'},
];
const tasks=[
 ['09.18','상품 선정','10월 가을 선물','기획'],['09.21','디자인팀 요청','10월 가을 선물','디자인'],['09.22','메인 상품 확정','네이버 기획전','기획'],['09.25','배너 1차 확인','10월 가을 선물','디자인'],['09.28','상세페이지 전달','네이버 기획전','상품등록'],['10.06','신제품 촬영','신제품 런칭','촬영']
];
export default function Home(){
 const [view,setView]=useState('project'); const [filter,setFilter]=useState('전체');
 const shown=useMemo(()=>filter==='전체'?projects:projects.filter(p=>p.kind===filter),[filter]);
 return <main className="desktop"><section className="window">
  <header className="bar"><div className="lights"><i/><i/><i/></div><b>MINJIN OS</b><span>⌕</span></header>
  <div className="body"><aside><h4>즐겨찾기</h4><button onClick={()=>setView('project')}>♡ PROJECT</button><button onClick={()=>setView('task')}>☑ TASK</button><button onClick={()=>setView('calendar')}>▣ CALENDAR</button><h4>채널</h4>{['자사몰','네이버','무신사','에이블리','오늘의집'].map(x=><button key={x}>⌁ {x}</button>)}</aside>
  <section className="content"><div className="crumb">‹ &nbsp; 업무 &nbsp;/&nbsp; {view.toUpperCase()}</div>
  {view==='project'&&<><div className="filters">{['전체','프로모션','상품'].map(x=><button className={filter===x?'on':''} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><div className="folders">{shown.map(p=><article className="folder" key={p.name}><div className="folderIcon"><span>{p.icon}</span></div><h3>{p.name}</h3><small>{p.range}</small><div className="progress"><i style={{width:p.progress+'%'}}/></div><small>{p.progress}% · {p.kind}</small></article>)}</div></>}
  {view==='task'&&<div className="tasklist"><h2>TASK</h2>{tasks.map((t,i)=><div className="task" key={i}><b>{t[0]}</b><span>{t[1]}</span><small>{t[2]} · {t[3]}</small><em>○</em></div>)}</div>}
  {view==='calendar'&&<Calendar/>}
  </section></div><nav className="dock"><button onClick={()=>setView('project')}>📁<small>PROJECT</small></button><button onClick={()=>setView('task')}>☑️<small>TASK</small></button><button onClick={()=>setView('calendar')}>🗓️<small>CALENDAR</small></button></nav>
 </section></main>
}
function Calendar(){const days=Array.from({length:35},(_,i)=>i-1);return <div className="calendar"><div className="calhead"><h2>SEPTEMBER <b>2026</b></h2><span>‹ &nbsp; TODAY &nbsp; ›</span></div><div className="week">{['SUN','MON','TUE','WED','THU','FRI','SAT'].map(x=><b key={x}>{x}</b>)}</div><div className="grid">{days.map((d,i)=><div className="day" key={i}>{d>0&&d<=30?<span>{d}</span>:''}{d===18&&<i>상품 선정</i>}{d===21&&<i>디자인팀 요청</i>}{d===22&&<i>메인 상품 확정</i>}{d===25&&<i>배너 1차 확인</i>}{d===28&&<i>상세페이지 전달</i>}</div>)}</div></div>}
