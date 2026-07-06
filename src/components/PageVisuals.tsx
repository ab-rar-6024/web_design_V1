"use client";

import { useRef, useState } from "react";
import {
  MapPin, Wifi, Gauge, ShieldCheck, Video, Cpu, Radio, Scale,
  Activity, TrendingUp, Truck, Navigation, Globe, Zap, BarChart2,
  CheckCircle2, AlertCircle, Circle, Signal, Server, Database,
  Map, Clock, Users, Battery, ThumbsUp, ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────── */
/* Product Lineup Visual — for Products page hero                               */
/* ─────────────────────────────────────────────────────────────────────────── */
export function ProductLineupVisual() {
  const orbs = [
    { label: "AIS 140",       icon: ShieldCheck, color: "#f59e0b", pos: "top-4 left-1/2 -translate-x-1/2" },
    { label: "GPS Tracker",   icon: Navigation,  color: "#3ebdef", pos: "top-[22%] right-6" },
    { label: "4G Camera",     icon: Video,       color: "#f43f5e", pos: "bottom-[30%] right-4" },
    { label: "Speed Gov.",    icon: Gauge,       color: "#a855f7", pos: "bottom-4 left-1/2 -translate-x-1/2" },
    { label: "Payload Sys.",  icon: Scale,       color: "#6366f1", pos: "bottom-[30%] left-4" },
    { label: "Rover Elite",   icon: Cpu,         color: "#3b82f6", pos: "top-[22%] left-6" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center"
    >
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-white/5" />
      <div className="absolute inset-[12%] rounded-full border border-white/5" />
      {/* Pulse rings */}
      <div className="absolute inset-[30%] rounded-full bg-cyan-bright/4 animate-ping" style={{ animationDuration: "3s" }} />
      <div className="absolute inset-[35%] rounded-full bg-blue-500/6" />

      {/* Center hub */}
      <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_60px_rgba(62,189,239,0.3)]">
        <Cpu className="w-8 h-8 text-white" />
        <span className="text-[9px] font-bold text-white/80 mt-1 tracking-widest uppercase">APM</span>
      </div>

      {/* Orbital nodes */}
      {orbs.map((orb, i) => {
        const Icon = orb.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className={`absolute flex flex-col items-center gap-1.5 group`}
            style={{ ...parsePos(orb.pos) }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
              style={{ background: `${orb.color}18`, border: `1px solid ${orb.color}30`, boxShadow: `0 0 20px ${orb.color}18` }}
            >
              <Icon className="w-5 h-5" style={{ color: orb.color }} />
            </div>
            <span className="text-[9px] font-semibold text-white/50 whitespace-nowrap">{orb.label}</span>
          </motion.div>
        );
      })}

      {/* Dotted scan line */}
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed border-white/4 animate-spin"
        style={{ animationDuration: "20s" }}
      />
    </motion.div>
  );
}

/* Helper to parse Tailwind position classes into inline styles */
function parsePos(_cls: string) {
  return {};
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Fleet Dashboard Mockup — for B2B Solutions page                             */
/* ─────────────────────────────────────────────────────────────────────────── */
export function FleetDashboardVisual() {
  const vehicles = [
    { id: "TN-01-AX", speed: 62, lat: "28.6°N", status: "ok",  fuel: 78, driver: "R. Kumar" },
    { id: "MH-12-BZ", speed: 0,  lat: "19.0°N", status: "idle",fuel: 45, driver: "S. Sharma" },
    { id: "DL-08-CK", speed: 88, lat: "28.5°N", status: "warn",fuel: 32, driver: "P. Gupta" },
    { id: "KA-03-DL", speed: 51, lat: "12.9°N", status: "ok",  fuel: 91, driver: "M. Nair" },
  ];

  const statusColor = { ok: "#10b981", idle: "#f59e0b", warn: "#f43f5e" };
  const statusLabel = { ok: "On Route", idle: "Parked", warn: "Overspeed" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/8"
      style={{ background: "rgba(5,13,26,0.8)", backdropFilter: "blur(12px)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/6" style={{ background: "rgba(5,13,26,0.9)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/70" />
            <div className="w-3 h-3 rounded-full bg-amber-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex items-center gap-1.5 ml-2">
            <Navigation className="w-3.5 h-3.5 text-cyan-bright/70" />
            <span className="text-[11px] font-bold text-white/60 tracking-wider">APM FleetEye — Live Dashboard</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" /> LIVE
          </span>
          <span className="text-[10px] text-white/30">Updated now</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-12 flex flex-col items-center py-4 gap-5 border-r border-white/5" style={{ background: "rgba(5,13,26,0.5)" }}>
          {[Map, Truck, BarChart2, Users, Database].map((Icon, i) => (
            <button key={i} className={`p-2 rounded-lg transition-all ${i === 0 ? "bg-cyan-bright/15 text-cyan-bright" : "text-white/25 hover:text-white/50"}`}>
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 flex flex-col gap-4">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Total Vehicles", value: "48", icon: Truck,    color: "text-blue-400",    bg: "bg-blue-500/10" },
              { label: "On Route",       value: "31", icon: Activity,  color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { label: "Alerts Today",   value: "4",  icon: AlertCircle,color:"text-rose-400",   bg: "bg-rose-500/10" },
              { label: "Avg. Speed",     value: "58", icon: Gauge,     color: "text-cyan-bright", bg: "bg-cyan-500/10" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className={`rounded-xl p-3 flex flex-col gap-1.5 border border-white/5 ${s.bg}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-white/40 uppercase tracking-wider">{s.label}</span>
                    <Icon className={`w-3 h-3 ${s.color}`} />
                  </div>
                  <span className={`text-xl font-bold ${s.color}`}>{s.value}</span>
                </div>
              );
            })}
          </div>

          {/* Vehicle list */}
          <div className="rounded-xl border border-white/6 overflow-hidden">
            <div className="grid grid-cols-5 text-[9px] font-bold uppercase tracking-widest text-white/30 px-3 py-2 border-b border-white/5">
              <span>Vehicle</span><span>Driver</span><span>Speed</span><span>Fuel</span><span>Status</span>
            </div>
            {vehicles.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="grid grid-cols-5 items-center px-3 py-2.5 border-b border-white/4 hover:bg-white/3 transition-colors"
              >
                <span className="text-[11px] font-mono font-bold text-white/80">{v.id}</span>
                <span className="text-[10px] text-white/50">{v.driver}</span>
                <span className="text-[11px] font-bold text-white/70">{v.speed} <span className="text-white/30 font-normal">km/h</span></span>
                <div className="flex items-center gap-1.5">
                  <div className="w-12 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-cyan-bright/70" style={{ width: `${v.fuel}%` }} />
                  </div>
                  <span className="text-[9px] text-white/40">{v.fuel}%</span>
                </div>
                <span className="flex items-center gap-1 text-[9px] font-semibold" style={{ color: statusColor[v.status as keyof typeof statusColor] }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[v.status as keyof typeof statusColor] }} />
                  {statusLabel[v.status as keyof typeof statusLabel]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Fuel / trip chart strip */}
          <div className="rounded-xl p-3 border border-white/5 flex items-end justify-between gap-1" style={{ background: "rgba(62,189,239,0.03)", height: "64px" }}>
            {[42, 58, 55, 73, 62, 80, 76, 68, 84, 72, 78, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-cyan-bright/50 to-cyan-bright/10"
                style={{ height: `${h}%`, minHeight: "3px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Software Platform Mockup — for Software Solutions page                       */
/* ─────────────────────────────────────────────────────────────────────────── */
export function SoftwarePlatformVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/8 shadow-2xl"
      style={{ background: "rgba(5,13,26,0.85)", backdropFilter: "blur(16px)", boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(147,51,234,0.08)" }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/6" style={{ background: "rgba(8,16,32,0.9)" }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-rose-500/70" /><div className="w-3 h-3 rounded-full bg-amber-500/70" /><div className="w-3 h-3 rounded-full bg-emerald-500/70" /></div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Server className="w-3 h-3 text-white" />
            </div>
            <span className="text-[11px] font-bold text-white/50 tracking-wider">APM One — Enterprise Platform</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
            <Signal className="w-3 h-3 text-purple-400" />
            <span className="text-[9px] text-purple-400 font-bold">Connected</span>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="flex h-80">
        {/* Left sidebar */}
        <div className="w-48 border-r border-white/5 p-3 flex flex-col gap-1" style={{ background: "rgba(5,10,22,0.6)" }}>
          {[
            { icon: BarChart2, label: "Analytics",    active: true  },
            { icon: Truck,     label: "Fleet Ops",    active: false },
            { icon: MapPin,    label: "Locations",    active: false },
            { icon: Users,     label: "Drivers",      active: false },
            { icon: ShieldCheck, label: "Compliance", active: false },
            { icon: Database,  label: "Data Logs",    active: false },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium transition-all ${item.active ? "bg-purple-500/15 text-purple-300 border border-purple-500/20" : "text-white/35 hover:text-white/55 hover:bg-white/4"}`}>
                <Icon className="w-3.5 h-3.5 flex-shrink-0" /> {item.label}
              </div>
            );
          })}
          <div className="mt-auto border-t border-white/5 pt-2 mt-4">
            {[
              { icon: Clock,    label: "History" },
              { icon: Zap,      label: "Alerts" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium text-white/25 hover:text-white/45 hover:bg-white/4 transition-all">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" /> {item.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          {/* Top KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue (MTD)",     value: "₹ 48.2L",  trend: "+12.4%",  color: "#10b981" },
              { label: "Active Deployments",value: "1,204",     trend: "+8.1%",   color: "#3ebdef" },
              { label: "Uptime SLA",        value: "99.97%",    trend: "0.02% ↑", color: "#a855f7" },
            ].map((k, i) => (
              <div key={i} className="rounded-xl p-3 border border-white/5 flex flex-col gap-1" style={{ background: "rgba(255,255,255,0.02)" }}>
                <span className="text-[9px] uppercase tracking-wider text-white/30">{k.label}</span>
                <span className="text-lg font-bold text-white">{k.value}</span>
                <span className="text-[10px] font-semibold" style={{ color: k.color }}>{k.trend}</span>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="flex-1 rounded-xl border border-white/5 p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.015)" }}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Fleet Telemetry — 30d</span>
              <div className="flex gap-1">
                {["1D","7D","30D","90D"].map((t, i) => (
                  <span key={i} className={`text-[9px] px-2 py-0.5 rounded font-bold transition-all ${i === 2 ? "bg-purple-500/20 text-purple-400" : "text-white/25 hover:text-white/45"}`}>{t}</span>
                ))}
              </div>
            </div>

            {/* Bars */}
            <div className="flex-1 flex items-end gap-1 pt-2">
              {[55, 72, 65, 80, 68, 85, 74, 90, 82, 95, 88, 78, 84, 92, 86, 76, 88, 93, 85, 79, 91, 87, 83, 88, 90, 82, 78, 85, 92, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i > 25 ? "linear-gradient(to top, rgba(168,85,247,0.7), rgba(168,85,247,0.2))" : "linear-gradient(to top, rgba(168,85,247,0.3), rgba(168,85,247,0.06))",
                    minWidth: "2px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom status row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "API Health", value: "Nominal",  dot: "#10b981" },
              { label: "DB Latency", value: "12ms",     dot: "#10b981" },
              { label: "Alerts",     value: "2 Open",   dot: "#f59e0b" },
              { label: "Data Sync",  value: "Real-time",dot: "#3ebdef" },
            ].map((s, i) => (
              <div key={i} className="rounded-lg px-2.5 py-1.5 border border-white/4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot }} />
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/30">{s.label}</span>
                  <span className="text-[10px] font-bold text-white/65">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* India Coverage Visual — for About page                                       */
/* ─────────────────────────────────────────────────────────────────────────── */
export function IndiaCoverageVisual() {
  const nodes = [
    { label: "Chennai HQ",    x: "50%", y: "77%", size: 18, color: "#3ebdef",  pulse: true  },
    { label: "Delhi",         x: "46%", y: "28%", size: 14, color: "#60a5fa",  pulse: false },
    { label: "Mumbai",        x: "26%", y: "55%", size: 14, color: "#60a5fa",  pulse: false },
    { label: "Bengaluru",     x: "44%", y: "82%", size: 12, color: "#34d399",  pulse: false },
    { label: "Hyderabad",     x: "48%", y: "65%", size: 12, color: "#34d399",  pulse: false },
    { label: "Kolkata",       x: "74%", y: "42%", size: 12, color: "#c084fc",  pulse: false },
    { label: "Ahmedabad",     x: "24%", y: "42%", size: 10, color: "#fbbf24",  pulse: false },
    { label: "Pune",          x: "31%", y: "60%", size: 10, color: "#fbbf24",  pulse: false },
    { label: "Jaipur",        x: "36%", y: "34%", size: 10, color: "#fbbf24",  pulse: false },
    { label: "Lucknow",       x: "52%", y: "35%", size: 10, color: "#fbbf24",  pulse: false },
    { label: "Coimbatore",    x: "42%", y: "88%", size: 9,  color: "#94a3b8",  pulse: false },
    { label: "Nagpur",        x: "50%", y: "52%", size: 9,  color: "#94a3b8",  pulse: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl border border-white/6 overflow-hidden"
      style={{ background: "rgba(5,13,26,0.7)", backdropFilter: "blur(8px)" }}
    >
      {/* Grid dot background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(62,189,239,0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* India outline suggestion — using a gradient blob */}
      <div
        className="absolute"
        style={{
          top: "10%", left: "18%", width: "64%", height: "80%",
          background: "radial-gradient(ellipse at 50% 40%, rgba(62,189,239,0.06) 0%, transparent 70%)",
          border: "1px solid rgba(62,189,239,0.06)",
          borderRadius: "30% 40% 60% 30% / 40% 30% 60% 50%",
        }}
      />

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.06, type: "spring", stiffness: 200 }}
          className="absolute flex flex-col items-center"
          style={{ left: n.x, top: n.y, transform: "translate(-50%,-50%)" }}
        >
          {n.pulse && (
            <div
              className="absolute rounded-full animate-ping opacity-40"
              style={{ width: n.size + 12, height: n.size + 12, background: n.color }}
            />
          )}
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: n.size, height: n.size,
              background: n.color,
              boxShadow: `0 0 ${n.size * 2}px ${n.color}60`,
            }}
          >
            {n.size >= 14 && <MapPin className="w-2 h-2 text-white" />}
          </div>
          {n.size >= 12 && (
            <span className="mt-1 text-[8px] text-white/50 font-medium whitespace-nowrap">{n.label}</span>
          )}
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 right-3 rounded-xl p-2.5 border border-white/6" style={{ background: "rgba(5,13,26,0.9)" }}>
        <div className="flex items-center justify-between">
          {[{ c: "#3ebdef", l: "HQ" }, { c: "#60a5fa", l: "Metro" }, { c: "#34d399", l: "City" }, { c: "#fbbf24", l: "District" }].map((leg, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ background: leg.c }} />
              <span className="text-[9px] text-white/40">{leg.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute top-3 left-3">
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">28 States · 10 Countries</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Device Showcase — for B2C Solutions page                                     */
/* ─────────────────────────────────────────────────────────────────────────── */
const BASE = "https://apmgroups.in";

export function DeviceShowcaseVisual() {
  const devices = [
    { name: "GPS Tracker",   icon: Navigation, color: "#3ebdef", desc: "Real-time vehicle location", img: `${BASE}/productdetails/upload/24062025/pd_rover__main_160334.png` },
    { name: "4G Camera",     icon: Video,      color: "#f43f5e", desc: "Live surveillance & DVR",    img: `${BASE}/productdetails/upload/19082025/pd_19_main.png` },
    { name: "Speed Gov.",    icon: Gauge,      color: "#a855f7", desc: "CMVR certified SLD",         img: `${BASE}/productdetails/upload/04072025/pd_17_main.png` },
    { name: "Auto Dipper",   icon: Zap,        color: "#f59e0b", desc: "Smart beam controller",     img: `${BASE}/productdetails/upload/30062025/pd_auto_dipper_sensor_main_153216.png` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-sm"
    >
      {/* Phone frame */}
      <div
        className="w-full aspect-[9/17] rounded-[2rem] p-1 mx-auto max-w-[200px]"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <div className="w-full h-full rounded-[1.7rem] overflow-hidden flex flex-col gap-2 p-3"
          style={{ background: "rgba(5,13,26,0.98)" }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[8px] text-white/40 font-bold">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3 text-white/40" />
              <Battery className="w-3 h-3 text-white/40" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center gap-1.5 px-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Navigation className="w-3 h-3 text-white" />
            </div>
            <span className="text-[9px] font-bold text-white/70">APM Track</span>
          </div>

          {/* Map area */}
          <div className="flex-1 rounded-xl relative overflow-hidden" style={{ background: "rgba(30,50,80,0.6)", border: "1px solid rgba(62,189,239,0.1)" }}>
            {/* Grid */}
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "linear-gradient(rgba(62,189,239,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(62,189,239,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            {/* Ping dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-cyan-bright/20 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute inset-1 rounded-full bg-cyan-bright shadow-[0_0_12px_rgba(62,189,239,0.8)]" />
            </div>
          </div>

          {/* Speed bar */}
          <div className="rounded-lg p-2 flex items-center gap-2" style={{ background: "rgba(62,189,239,0.08)", border: "1px solid rgba(62,189,239,0.15)" }}>
            <Gauge className="w-4 h-4 text-cyan-bright" />
            <div className="flex flex-col flex-1">
              <span className="text-[8px] text-white/40">Current Speed</span>
              <span className="text-sm font-bold text-white">62 km/h</span>
            </div>
            <span className="text-[8px] text-emerald-400 font-bold">SAFE</span>
          </div>
        </div>
      </div>

      {/* Floating device cards */}
      {devices.map((d, i) => {
        const Icon = d.icon;
        const positions = [
          "absolute -top-3 -right-6",
          "absolute top-16 -right-8",
          "absolute bottom-24 -left-8",
          "absolute -bottom-3 -right-6",
        ];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className={`${positions[i]} flex items-center gap-2 rounded-xl px-2.5 py-2 border border-white/8 w-36 shadow-xl`}
            style={{ background: "rgba(5,13,26,0.92)", backdropFilter: "blur(12px)" }}
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: `radial-gradient(ellipse at center, ${d.color}30, ${d.color}08)`, border: `1px solid ${d.color}30` }}>
              <img src={d.img} alt={d.name} className="w-full h-full object-contain p-1" loading="lazy" style={{ filter: "saturate(1.8) brightness(1.15) contrast(1.05)" }} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-bold text-white truncate">{d.name}</span>
              <span className="text-[8px] text-white/40 truncate">{d.desc}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Road Compliance Visual — for B2G page                                        */
/* ─────────────────────────────────────────────────────────────────────────── */
export function RoadComplianceVisual() {
  const certifications = [
    { label: "AIS 140",  pct: 100, color: "#3ebdef" },
    { label: "CMVR",     pct: 100, color: "#10b981" },
    { label: "ISO 9001", pct: 100, color: "#a855f7" },
    { label: "BIS",      pct: 100, color: "#f59e0b" },
    { label: "ICAT",     pct: 100, color: "#f43f5e" },
    { label: "GARC",     pct: 100, color: "#6366f1" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-sm rounded-2xl border border-amber-500/12 overflow-hidden"
      style={{ background: "rgba(5,13,26,0.85)", backdropFilter: "blur(12px)" }}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between" style={{ background: "rgba(245,158,11,0.05)" }}>
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-bold text-white">Compliance Dashboard</span>
        </div>
        <span className="text-[9px] bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full font-bold">All Clear</span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Circular compliance score */}
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 flex-shrink-0">
            <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
              <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
              <motion.circle
                cx="40" cy="40" r="34" fill="none" stroke="#10b981" strokeWidth="6"
                strokeDasharray="213.6" strokeDashoffset="0" strokeLinecap="round"
                initial={{ strokeDashoffset: 213.6 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-extrabold text-white">100%</span>
              <span className="text-[8px] text-white/40">Score</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-white mb-1">Full Regulatory Clearance</p>
            <p className="text-[11px] text-white/50 leading-relaxed">All devices certified by CDAC, ICAT, BIS, and state RTOs for India compliance.</p>
          </div>
        </div>

        {/* Cert bars */}
        <div className="flex flex-col gap-2.5">
          {certifications.map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-white/60 w-14 flex-shrink-0">{c.label}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: c.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                />
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Info row */}
        <div className="rounded-xl p-3 border border-white/5 text-center" style={{ background: "rgba(245,158,11,0.04)" }}>
          <p className="text-[10px] text-white/50">Valid in <span className="text-amber-400 font-bold">28 states</span> · Renewable certifications managed by APM</p>
        </div>
      </div>
    </motion.div>
  );
}
