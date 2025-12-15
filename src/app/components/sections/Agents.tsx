"use client";

import React from "react";
import { RevealSection } from "../ui";
import { AgentCard } from "../cards";
import { AGENTS } from "../../data";

export const Agents: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Meet Our Elite Agents
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS.map((agent, idx) => (
            <RevealSection key={agent.id} delay={idx * 150}>
              <AgentCard agent={agent} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
