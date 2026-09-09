import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALL_PROJECTS } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  History,
  TrendingUp,
  FileCode2,
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { sections } = project;

  return (
    <article className="pt-24 pb-24 sm:pt-32">
      {/* Top Breadcrumbs & Return Bar */}
      <div className="border-b border-white/10 bg-[#010a0b]/60 backdrop-blur-sm sticky top-[61px] z-30 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between font-mono text-xs">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-white/60 hover:text-[#dfb15b] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED PROJECTS</span>
          </Link>
          <div className="flex items-center gap-2 text-white/40">
            <span>TIER {project.tier}</span>
            <span>·</span>
            <span className="text-[#dfb15b]">{project.status}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        {/* ============================================================ */}
        {/* CASE STUDY HEADER */}
        {/* ============================================================ */}
        <header className="pb-12 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="gold" size="sm">
              FLAGSHIP CASE STUDY
            </Badge>
            {project.category.map((cat) => (
              <Badge key={cat} variant="outline" size="sm">
                {cat}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#feffff] leading-tight mb-4">
            {project.title}
          </h1>

          <p className="font-sans text-base sm:text-xl text-white/80 leading-relaxed max-w-3xl mb-8">
            {project.oneLineThesis}
          </p>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 glass-panel corner-brackets font-mono text-xs mb-8">
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
                Status
              </div>
              <div className="text-white/90">{project.status}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
                Timeline
              </div>
              <div className="text-white/90">{project.timeline}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
                Role
              </div>
              <div className="text-white/90">{project.role}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
                Primary Metric
              </div>
              <div className="text-metallic-gold font-bold">
                {project.featuredMetric.value} {project.featuredMetric.label}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.label}
                href={link.url}
                variant={link.type === 'github' ? 'primary' : 'outline'}
                size="sm"
                isExternal
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            ))}
          </div>
        </header>

        {/* ============================================================ */}
        {/* 01. PROBLEM */}
        {/* ============================================================ */}
        <section id="problem" className="py-14 border-b border-white/10">
          <SectionHeader
            number="01"
            tag="Context // Challenge"
            title="Problem Definition"
          />

          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-[#feffff]">
              {sections.problem.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
              {sections.problem.statement}
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                Why This Problem Is Difficult
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
                {sections.problem.whyDifficult.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-[#dfb15b] text-xs mt-0.5">[{i + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sections.problem.operationalConstraints.map((constraint, i) => (
                <div
                  key={i}
                  className="p-4 border border-white/5 bg-white/[0.01] font-mono text-xs text-white/60"
                >
                  <span className="text-[#dfb15b] block mb-1 text-[10px]">
                    CONSTRAINT #{i + 1}
                  </span>
                  {constraint}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02. MOTIVATION */}
        {/* ============================================================ */}
        <section id="motivation" className="py-14 border-b border-white/10">
          <SectionHeader
            number="02"
            tag="Rationale // Purpose"
            title="Motivation"
          />

          <div className="space-y-6">
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
              {sections.motivation.whyBuilt}
            </p>

            <div className="p-5 border-l-2 border-[#d4af37] bg-white/[0.02]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#dfb15b] block mb-1">
                Target Real-World Impact
              </span>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                {sections.motivation.realWorldImpact}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03. APPROACH */}
        {/* ============================================================ */}
        <section id="approach" className="py-14 border-b border-white/10">
          <SectionHeader
            number="03"
            tag="Architecture // Strategy"
            title="Approach & Hypothesis"
          />

          <div className="space-y-6">
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
              {sections.approach.proposedSolution}
            </p>

            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] mb-2 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5" />
                Core Working Hypothesis
              </div>
              <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed italic">
                "{sections.approach.coreHypothesis}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {sections.approach.architecturalTenets.map((tenet, idx) => (
                <div
                  key={tenet.title}
                  className="p-5 border border-white/10 bg-[#010a0b] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#dfb15b] block mb-1">
                      TENET 0{idx + 1}
                    </span>
                    <h4 className="font-display text-sm font-bold text-[#feffff] mb-2">
                      {tenet.title}
                    </h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">
                      {tenet.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04. SYSTEM (ARCHITECTURE) */}
        {/* ============================================================ */}
        <section id="system" className="py-14 border-b border-white/10">
          <SectionHeader
            number="04"
            tag="Pipeline // Data Flow"
            title="System Architecture"
            subtitle="Multi-stage execution flow from raw sensor streams down to root-cause attribution."
          />

          <ArchitectureDiagram
            summary={sections.system.diagramSummary}
            nodes={sections.system.nodes}
            dataFlows={sections.system.dataFlows}
            componentRelationships={sections.system.componentRelationships}
          />
        </section>

        {/* ============================================================ */}
        {/* 05. TECHNICAL DEEP DIVE */}
        {/* ============================================================ */}
        <section id="deep-dive" className="py-14 border-b border-white/10">
          <SectionHeader
            number="05"
            tag="Foundations // Mathematics"
            title="Technical Deep Dive"
            subtitle="Algorithms, mathematical representations, and low-level runtime optimizations."
          />

          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-8">
            {sections.technicalDeepDive.introduction}
          </p>

          <div className="space-y-6">
            {sections.technicalDeepDive.items.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 border border-white/10 bg-white/[0.02] space-y-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                  <h3 className="font-mono text-sm font-bold text-[#feffff] flex items-center gap-2">
                    <span className="text-[#dfb15b]">05.{idx + 1}</span>
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                    {item.concept}
                  </span>
                </div>

                {item.mathOrFormula && (
                  <div className="p-4 bg-[#010a0b] border border-white/10 overflow-x-auto text-center font-mono text-xs sm:text-sm text-[#dfb15b] py-3">
                    <code>{item.mathOrFormula}</code>
                  </div>
                )}

                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06. THE HARD PART */}
        {/* ============================================================ */}
        <section id="hard-part" className="py-14 border-b border-white/10">
          <SectionHeader
            number="06"
            tag="Bottleneck // Critical Path"
            title="The Hard Part"
            subtitle="The single problem that demanded the most algorithmic reasoning and systems profiling."
          />

          <div className="p-6 sm:p-8 border border-white/15 bg-white/[0.02] space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] block mb-2">
                Primary Core Bottleneck
              </span>
              <h3 className="font-display text-xl font-bold text-[#feffff]">
                {sections.theHardPart.challenge}
              </h3>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">
                Why Standard Baseline Approaches Failed:
              </h4>
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                {sections.theHardPart.whyStandardSolutionsFailed}
              </p>
            </div>

            <div className="p-5 border-l-2 border-[#d4af37] bg-[#010a0b] space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#dfb15b]">
                Resolution Mechanism:
              </h4>
              <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                {sections.theHardPart.resolutionMechanism}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07. EXPERIMENTS */}
        {/* ============================================================ */}
        <section id="experiments" className="py-14 border-b border-white/10">
          <SectionHeader
            number="07"
            tag="Verification // Hypotheses"
            title="Experiments & Empirical Tests"
            subtitle="Testing hypotheses through empirical sweeps, ablation baselines, and synthetic fault injections."
          />

          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
            {sections.experiments.overview}
          </p>

          <div className="space-y-4">
            {sections.experiments.experiments.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 border border-white/10 bg-white/[0.02] space-y-3"
              >
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
                  <span className="font-mono text-xs text-[#dfb15b]">
                    EXPERIMENT #{idx + 1}
                  </span>
                  <Badge
                    variant={exp.verdict === 'Confirmed' ? 'gold' : 'outline'}
                    size="sm"
                  >
                    Verdict: {exp.verdict}
                  </Badge>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block mb-1">
                    Hypothesis:
                  </span>
                  <p className="font-mono text-xs sm:text-sm text-white/90">
                    "{exp.hypothesis}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans text-white/70">
                  <div className="p-3 bg-[#010a0b] border border-white/5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                      Setup:
                    </span>
                    {exp.setup}
                  </div>
                  <div className="p-3 bg-[#010a0b] border border-white/5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                      Observation:
                    </span>
                    {exp.observation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 08. RESULTS */}
        {/* ============================================================ */}
        <section id="results" className="py-14 border-b border-white/10">
          <SectionHeader
            number="08"
            tag="Benchmarks // Quantitative"
            title="Results & Metrics"
            subtitle="Quantitative performance across accuracy, execution latency, and resource footprint."
          />

          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
            {sections.results.summary}
          </p>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {sections.results.metrics.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                subtext={m.subtext}
                highlight={m.highlight}
              />
            ))}
          </div>

          {/* Comparison Table */}
          <div className="border border-white/10 bg-white/[0.02] overflow-x-auto">
            <div className="p-4 border-b border-white/10 font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
              Baseline Benchmark Comparisons
            </div>
            <table className="w-full text-left font-mono text-xs">
              <thead className="border-b border-white/10 bg-white/5 text-white/40">
                <tr>
                  <th className="p-3">Evaluation Metric</th>
                  <th className="p-3">Baseline Architecture</th>
                  <th className="p-3">Our T-GNN System</th>
                  <th className="p-3 text-right">Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/70">
                {sections.results.comparisons.map((comp) => (
                  <tr key={comp.metric} className="hover:bg-white/[0.02]">
                    <td className="p-3 font-medium text-white/90">{comp.metric}</td>
                    <td className="p-3 text-white/50">{comp.baseline}</td>
                    <td className="p-3 text-[#feffff] font-semibold">{comp.ourSystem}</td>
                    <td className="p-3 text-right font-bold text-[#dfb15b]">
                      {comp.delta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 09. FAILURE (THE FAILURE PRINCIPLE) */}
        {/* ============================================================ */}
        <section id="failure" className="py-14 border-b border-white/10">
          <SectionHeader
            number="09"
            tag="Autopsy // Honesty"
            title="The Failure Principle"
            subtitle="Demonstrating engineering maturity through explicit failure diagnosis and systematic redesign."
          />

          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
            {sections.failure.narrative}
          </p>

          <div className="border border-white/10 bg-[#010a0b] divide-y divide-white/10">
            {/* Step 1: Attempt */}
            <div className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="w-32 flex-shrink-0 font-mono text-xs uppercase tracking-widest text-white/40">
                01. Attempt
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                {sections.failure.chain.attempt}
              </p>
            </div>

            {/* Step 2: Failure */}
            <div className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start bg-red-950/[0.08]">
              <div className="w-32 flex-shrink-0 font-mono text-xs uppercase tracking-widest text-red-400">
                02. Failure
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                {sections.failure.chain.failure}
              </p>
            </div>

            {/* Step 3: Diagnosis */}
            <div className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="w-32 flex-shrink-0 font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                03. Diagnosis
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                {sections.failure.chain.diagnosis}
              </p>
            </div>

            {/* Step 4: Modification */}
            <div className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="w-32 flex-shrink-0 font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                04. Modification
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                {sections.failure.chain.modification}
              </p>
            </div>

            {/* Step 5: Result */}
            <div className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start bg-[#d4af37]/[0.05]">
              <div className="w-32 flex-shrink-0 font-mono text-xs uppercase tracking-widest text-[#dfb15b] font-bold">
                05. Result
              </div>
              <p className="font-sans text-xs sm:text-sm text-white font-medium leading-relaxed">
                {sections.failure.chain.result}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. EVOLUTION */}
        {/* ============================================================ */}
        <section id="evolution" className="py-14 border-b border-white/10">
          <SectionHeader
            number="10"
            tag="Lineage // Versioning"
            title="System Evolution"
            subtitle="The progression from rudimentary statistical baselines to edge-quantized streaming inference."
          />

          <div className="space-y-4">
            {sections.evolution.stages.map((stage, idx) => (
              <div
                key={stage.version}
                className="p-5 border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="space-y-1 sm:max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#dfb15b]">
                      {stage.version}
                    </span>
                    <span className="text-white/30 font-mono text-xs">·</span>
                    <span className="font-mono text-xs text-white/50">{stage.timeline}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-[#feffff]">
                    {stage.title}
                  </h4>
                </div>

                <div className="flex-1 space-y-2 text-xs font-sans">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-0.5">
                      Architecture:
                    </span>
                    <p className="text-white/80">{stage.architecture}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#dfb15b] block mb-0.5">
                      Outcome:
                    </span>
                    <p className="text-white/90">{stage.outcome}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-0.5">
                      Key Limitation:
                    </span>
                    <p className="text-white/60">{stage.keyLimitation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11. LESSONS */}
        {/* ============================================================ */}
        <section id="lessons" className="py-14 border-b border-white/10">
          <SectionHeader
            number="11"
            tag="Takeaways // Knowledge"
            title="Engineering Lessons"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                Machine Learning Engineering
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
                {sections.lessons.engineeringLessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#dfb15b] mt-0.5">▸</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                Systems & Infrastructure
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
                {sections.lessons.systemsLessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#dfb15b] mt-0.5">▸</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12. FUTURE WORK */}
        {/* ============================================================ */}
        <section id="future" className="py-14 border-b border-white/10">
          <SectionHeader
            number="12"
            tag="Roadmap // Horizon"
            title="Future Work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 bg-white/[0.02] space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/60">
                Upcoming Milestones
              </h4>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/75">
                {sections.future.upcomingMilestones.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#dfb15b]">0{idx + 1}.</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-white/10 bg-white/[0.02] space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                Open Research Questions
              </h4>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/75">
                {sections.future.openResearchQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-white/40">?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* STACK BREAKDOWN */}
        {/* ============================================================ */}
        <section id="stack" className="py-14 border-b border-white/10">
          <SectionHeader
            tag="Ecosystem // Tooling"
            title="Complete Technical Stack"
          />

          <div className="space-y-4">
            {project.technologies.map((group) => (
              <div
                key={group.domain}
                className="p-5 border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] sm:w-48">
                  {group.domain}
                </span>
                <div className="flex flex-wrap gap-2 flex-1">
                  {group.items.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* REPOSITORY & REPRODUCIBILITY LINKS */}
        {/* ============================================================ */}
        <section id="links" className="py-14">
          <SectionHeader
            tag="Artifacts // Code"
            title="Artifacts & Links"
          />

          <div className="p-6 sm:p-8 border border-white/10 bg-[#010a0b] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-display text-base font-bold text-[#feffff]">
                Explore Source Repositories & Artifacts
              </h4>
              <p className="font-sans text-xs text-white/60 max-w-md leading-relaxed">
                Source code implementations, synthetic fault injection pipelines, and benchmark data scripts are available for review.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button
                  key={link.label}
                  href={link.url}
                  variant="primary"
                  size="sm"
                  isExternal
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
