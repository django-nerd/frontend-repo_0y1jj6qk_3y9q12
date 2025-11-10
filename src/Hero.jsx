import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_20%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Top Nav */}
          <div className="flex items-center justify-between py-6 md:py-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30" />
              <span className="text-sm font-semibold tracking-widest text-white uppercase">NeonChain</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-gray-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#docs" className="hover:text-white transition-colors">Docs</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <button className="ml-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white px-5 py-2 text-sm font-semibold hover:from-fuchsia-500 hover:to-cyan-400 transition-colors shadow-lg shadow-fuchsia-500/20">Launch App</button>
            </div>
          </div>

          {/* Hero Copy */}
          <div className="grid lg:grid-cols-12 items-center gap-8 md:gap-10 pt-6 pb-20 md:pb-28">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Mainnet-ready smart accounts
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                Build the future of finance on a
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300"> programmable blockchain</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-300/90">
                NeonChain is a high-throughput, EVM-compatible chain for modern fintech apps.
                Ship wallets, payments, and dApps with blazing speed, low fees, and secure smart accounts.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:from-fuchsia-500 hover:to-cyan-400 transition-transform active:scale-[0.99]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#docs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-white font-semibold border border-white/15 backdrop-blur-md hover:bg-white/15 transition"
                >
                  Read the Docs
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white">3,200+</div>
                  <div className="text-xs md:text-sm text-gray-400">TPS Throughput</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white">$0.0003</div>
                  <div className="text-xs md:text-sm text-gray-400">Avg. Fee</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white">99.99%</div>
                  <div className="text-xs md:text-sm text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </div>

            {/* Spacer for layout balance on large screens */}
            <div className="lg:col-span-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
