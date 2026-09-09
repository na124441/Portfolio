import React from 'react';
import { ArchitectureNode, ArchitectureDataFlow } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { ArrowDown, ArrowRight, Layers, Cpu, Radio, ShieldCheck, Activity } from 'lucide-react';

interface ArchitectureDiagramProps {
  summary: string;
  nodes: ArchitectureNode[];
  dataFlows: ArchitectureDataFlow[];
  componentRelationships: string;
}

const nodeIcons: Record<string, React.ReactNode> = {
  ingest: <Radio className="w-4 h-4 text-[#dfb15b]" />,
  preprocess: <Activity className="w-4 h-4 text-[#dfb15b]" />,
  tgn_encoder: <Cpu className="w-4 h-4 text-[#dfb15b]" />,
  reasoning: <Layers className="w-4 h-4 text-[#dfb15b]" />,
  action_bus: <ShieldCheck className="w-4 h-4 text-[#dfb15b]" />,
};

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  summary,
  nodes,
  dataFlows,
  componentRelationships,
}) => {
  return (
    <div className="glass-panel corner-brackets p-6 sm:p-8 relative">
      {/* Top Bar / Schematic Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2.5 text-white/70">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] radar-dot inline-block" />
          <span>SYSTEM ARCHITECTURE DIAGRAM // v1.2</span>
        </div>
        <div className="text-white/40">
          STAGES: {nodes.length} · BUS: ZERO-COPY SHARED MEMORY
        </div>
      </div>

      <p className="text-sm text-white/80 font-sans mb-8 leading-relaxed max-w-3xl">
        {summary}
      </p>

      {/* Pipeline Diagram (Responsive Flex/Grid with Connectors) */}
      <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4 relative">
        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            <div className="glass-panel glass-panel-hover p-4 sm:p-5 flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfb15b]">
                    {node.layer}
                  </span>
                  {nodeIcons[node.id] || <Cpu className="w-4 h-4 text-[#dfb15b]" />}
                </div>

                <h4 className="font-mono text-xs font-semibold text-[#feffff] mb-2">
                  {node.title}
                </h4>

                <p className="text-xs text-white/60 font-sans leading-relaxed mb-4">
                  {node.description}
                </p>
              </div>

              {node.tech && node.tech.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-white/5">
                  {node.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono text-white/50 bg-white/5 px-1.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Down arrow on mobile, right arrow on large screens */}
            {index < nodes.length - 1 && (
              <div className="flex items-center justify-center lg:hidden py-1 text-white/30">
                <ArrowDown className="w-4 h-4 text-[#dfb15b]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Data Flow Interconnects Table */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <h5 className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#d4af37]" />
          Data Flow Pipelines
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          {dataFlows.map((flow, i) => (
            <div
              key={i}
              className="p-2.5 bg-white/[0.02] border border-white/5 flex items-center justify-between text-white/70"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#dfb15b]">{flow.from}</span>
                <ArrowRight className="w-3 h-3 text-white/30" />
                <span className="text-white/90">{flow.to}</span>
              </div>
              <span className="text-[10px] text-white/40">{flow.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Component Relationships */}
      <div className="mt-6 p-4 bg-white/[0.02] border-l-2 border-[#d4af37] text-xs font-sans text-white/70 leading-relaxed">
        <span className="font-mono text-[#dfb15b] uppercase tracking-wider block mb-1">
          Component Topology Note:
        </span>
        {componentRelationships}
      </div>
    </div>
  );
};
