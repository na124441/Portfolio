'use client';

import React from 'react';
import { ArticlePullQuote } from './ArticlePullQuote';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';
import { ByteLogicSignatureBlock } from './ByteLogicSignatureBlock';
import { Visual01HeroCapacityManifold } from './visuals/smaller-models/Visual01HeroCapacityManifold';
import { Visual02DistillationMechanics } from './visuals/smaller-models/Visual02DistillationMechanics';
import { Visual03ParetoFrontier } from './visuals/smaller-models/Visual03ParetoFrontier';
import { Visual04QuantizationPrecision } from './visuals/smaller-models/Visual04QuantizationPrecision';
import { Visual05SystemsPipeline } from './visuals/smaller-models/Visual05SystemsPipeline';

export const SmallerModelArticleContent: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 text-base sm:text-lg leading-relaxed text-[#A8B3BA] font-sans">
      {/* ------------------------------------------------------------------- */}
      {/* 01 // The Anomaly in the Metric */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-anomaly-in-the-metric" className="space-y-6 pt-4">
        <p className="text-lg sm:text-xl font-sans text-[#F3F6F7] leading-relaxed">
          In the prevailing folklore of artificial intelligence, parameter count has long been
          treated as the primary currency of intelligence.
        </p>

        <p className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          More parameters = more intelligence.
        </p>

        <p>
          The mental model is deceptively clean: allocate more weights, provision more high-bandwidth
          memory, scale up the matrix multiplications, and superior downstream capability
          inevitably follows. For years, empirical scaling laws appeared to sanction this intuition.
        </p>

        <p>Yet inside production environments and research benchmarks alike, an empirical anomaly quietly disrupts the orthodoxy:</p>

        <ul className="space-y-2.5 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>
            <span className="text-[#019AA2]">▸</span> A 7-billion parameter language model, fine-tuned on clean mathematical derivations, solves competitive programming challenges that stump a 70-billion parameter generalist.
          </li>
          <li>
            <span className="text-[#019AA2]">▸</span> An 80-million parameter convolutional backbone, trained purely on high-frequency seismic telemetry, detects subsurface structural anomalies with higher precision and lower false-positive rates than a trillion-parameter multimodal foundation model prompted with the same data.
          </li>
          <li>
            <span className="text-[#019AA2]">▸</span> A heavily compressed, 3-billion parameter edge student model matches the conversational instruction-following of the 70-billion parameter teacher that supervised it—while running locally on an off-the-shelf smartphone within a 4-watt thermal envelope.
          </li>
        </ul>

        <p>
          If parameters were an absolute measure of intelligence, these outcomes should be mathematically
          impossible. A larger model contains strictly more representational capacity than a smaller
          one; its hypothesis space strictly subsumes that of its smaller counterpart. Why, then, does
          the smaller system routinely win?
        </p>

        <ArticlePullQuote
          quote="Parameters define potential representational capacity, not realized competence."
          attribution="ByteLogic Research Memo"
        />

        {/* Visual 01 placed immediately after the core thesis */}
        <Visual01HeroCapacityManifold />

        <p>
          Translating raw capacity into useful capability depends on data information density,
          optimization dynamics, task geometry, and the physical constraints of the hardware running
          the forward pass.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 02 // Parameters Are Capacity, Not an Intelligence Meter */}
      {/* ------------------------------------------------------------------- */}
      <section id="parameters-are-capacity" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          02 // Parameters Are Capacity, Not an Intelligence Meter
        </h2>

        <p>
          To understand why smaller models can prevail, we must first clarify what a parameter
          actually is.
        </p>

        <p>
          Mathematically, a parameter is simply an entry in a weight tensor{' '}
          <span className="font-mono text-[#F3F6F7]">W &isin; &Ropf;^(d_out &times; d_in)</span> or bias
          vector <span className="font-mono text-[#F3F6F7]">b &isin; &Ropf;^(d_out)</span>. In a
          feedforward or attention layer, these values parameterize continuous affine transformations
          followed by non-linear activations:
        </p>

        <EquationBlock
          math="h^{(l+1)} = \sigma\left(W^{(l)} h^{(l)} + b^{(l)}\right)"
          label="LAYER TRANSFORMATION"
          title="01 / FORWARD PROJECTION"
          explanation="Parameters do not store symbolic facts; they define continuous coordinate transformations in high-dimensional latent space."
        />

        <p>
          A network with 70 billion parameters does not possess 70 billion ideas, facts, or logical
          rules. It possesses a parameterized function space capable of partitioning high-dimensional
          vector spaces into complex decision boundaries. Parameter count measures{' '}
          <strong className="text-[#F3F6F7]">capacity</strong>—the upper bound on the complexity of the
          function the network can theoretically compute.
        </p>

        <p>
          Think of a warehouse. A 500,000-square-foot warehouse has tenfold the storage volume of a
          50,000-square-foot workshop. If the larger facility is filled with disorganized scrap metal,
          unindexed duplicates, and shipping crates of packing peanuts, a specialist working out of the
          50,000-square-foot workshop—stocked exclusively with precision calibration tools, indexed
          tooling dies, and clean inventory—will complete an engine overhaul faster, cheaper, and with
          far higher mechanical tolerances.
        </p>

        <p>
          Capacity without organization, calibration, and signal density is dead weight. In deep
          learning, an oversized model trained on noisy, poorly balanced data will expend immense
          representational capacity memorizing web noise, stylistic quirks, and conflicting facts.
          Conversely, a compact architecture whose parameters are precisely steered along the specific
          manifold of interest can achieve substantially higher functional density per parameter.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 03 // "Better" Is Always Conditional on the Task */}
      {/* ------------------------------------------------------------------- */}
      <section id="better-depends-on-the-task" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          03 // &ldquo;Better&rdquo; Is Always Conditional on the Task
        </h2>

        <p>
          Any statement that &ldquo;Model A is better than Model B&rdquo; is scientifically meaningless
          without specifying the evaluation distribution, the loss metric, and the deployment boundary.
        </p>

        <p>
          Modern foundation models are trained as universal approximators across diverse distributions:
          natural prose, conversational banter, programming languages, web scrapings, legal statutes,
          and casual forums. To perform adequately across this vast domain, the network must distribute
          its weight budget across thousands of disparate, often orthogonal, sub-manifolds.
        </p>

        <div className="my-6 rounded-[6px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box">
          <div className="p-3 bg-[#0A0F14] border-b border-[#1C2830] text-xs font-mono text-[#019AA2] font-semibold">
            TABLE 01 // CAPACITY ALLOCATION COMPARISON
          </div>
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left font-mono text-xs text-[#A8B3BA]">
              <thead>
                <tr className="border-b border-[#1C2830] text-[#F3F6F7]">
                  <th className="pb-2">DIMENSION</th>
                  <th className="pb-2">MASSIVE GENERALIST (70B+)</th>
                  <th className="pb-2">COMPACT SPECIALIST (3B–8B)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2830]/60">
                <tr>
                  <td className="py-2.5 text-[#F3F6F7]">Knowledge Breadth</td>
                  <td className="py-2.5">Enormous (trivia, recipes, multilingual)</td>
                  <td className="py-2.5 text-[#019AA2]">Narrow (confined to target domain)</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-[#F3F6F7]">Latent Allocation</td>
                  <td className="py-2.5">Diffuse across orthogonal vector spaces</td>
                  <td className="py-2.5 text-[#019AA2]">Concentrated on task-specific manifold</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-[#F3F6F7]">Failure Modes</td>
                  <td className="py-2.5">Irrelevant associations, hallucinations</td>
                  <td className="py-2.5">Out-of-domain brittleness</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-[#F3F6F7]">Inference Cost</td>
                  <td className="py-2.5">~140 GFLOPS / token (dense)</td>
                  <td className="py-2.5 text-[#019AA2]">~6–16 GFLOPS / token</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-[#F3F6F7]">Arithmetic Bottleneck</td>
                  <td className="py-2.5">High memory bandwidth bound</td>
                  <td className="py-2.5 text-[#019AA2]">Fits in fast SRAM / unified memory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          When evaluated on an isolated problem—such as synthesizing executable SQL from relational
          schema metadata—a general-purpose giant and a specialized compact model face completely
          different optimization challenges:
        </p>

        <p>
          The 70B generalist must maintain representations for 18th-century French poetry, recipes, and
          celebrity gossip. During inference, its attention heads integrate context across these diffuse
          subspaces, risking hallucination, syntactic drift, and prompt distraction.
        </p>

        <p>
          The 7B SQL specialist has had its entire parameter budget aligned with relational algebra,
          query planning, and syntactic constraints.
        </p>

        <p className="font-semibold text-[#F3F6F7]">
          Better on a task does not mean universally more capable. It simply demonstrates that allocating
          7 billion parameters exclusively to one task often yields a sharper decision boundary than
          allocating 1% of 70 billion parameters to that same task.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 04 // Data Quality Dominates Raw Scale */}
      {/* ------------------------------------------------------------------- */}
      <section id="data-quality-dominates-scale" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          04 // Data Quality Dominates Raw Scale
        </h2>

        <p>
          The breakthrough empirical insight of modern machine learning research—formalized by Hoffmann
          et al. in the Chinchilla scaling laws (2022) and extended by synthetic data regimes like
          Microsoft&apos;s Phi series (<em>Textbooks Are All You Need</em>, 2023)—is that models have
          historically been severely <strong className="text-[#F3F6F7]">data-starved relative to their parameter capacity</strong>.
        </p>

        <p>
          Historically, practitioners scaled parameters aggressively while training on web crawls
          dominated by duplicate text, machine-generated spam, grammatical errors, and low reasoning
          density. Under such regimes, if tokens contain low informational entropy, parameters are
          expended modeling noise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 font-mono text-xs">
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] space-y-2">
            <div className="text-[#68747D] uppercase tracking-wider text-[10px]">REGIME A</div>
            <div className="text-sm font-bold text-[#F3F6F7]">Large Model + Unfiltered Data</div>
            <p className="text-[#A8B3BA] font-sans text-xs leading-relaxed">
              30B parameters trained on 500B tokens of raw web text. Gradient updates cancel out across
              conflicting documents; vast capacity is squandered memorizing boilerplate HTML, comment
              wars, and SEO filler.
            </p>
          </div>
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#019AA2]/40 space-y-2">
            <div className="text-[#019AA2] uppercase tracking-wider text-[10px]">REGIME B (OPTIMAL)</div>
            <div className="text-sm font-bold text-[#019AA2]">Small Model + Synthetic Textbooks</div>
            <p className="text-[#A8B3BA] font-sans text-xs leading-relaxed">
              3B parameters trained on 1.5T tokens of filtered, textbook-grade derivations, clean
              codebases, and synthetic step-by-step reasoning chains. Every gradient step carves out
              invariant deductive structure.
            </p>
          </div>
        </div>

        <p>
          Model B consistently outperforms Model A on complex reasoning tasks despite possessing
          one-tenth the parameter capacity. The explanation lies in the{' '}
          <strong className="text-[#F3F6F7]">useful information per unit of compute</strong>. A smaller
          network trained on high-signal data extracts more functional constraints per parameter than a
          massive network saturated with low-grade entropy.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 05 // The Training Recipe: Optimization and Alignment */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-training-recipe" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          05 // The Training Recipe: Optimization and Alignment
        </h2>

        <p>
          Two models with identical parameter counts and identical architectures can display completely
          different cognitive horizons based entirely on their training recipes:
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-display font-bold text-[#F3F6F7] text-base mb-1">
              1. Optimization and Learning Rate Dynamics
            </h3>
            <p className="text-sm text-[#A8B3BA] leading-relaxed">
              Larger models suffer from loss landscape instabilities that require conservative learning
              rates, aggressive gradient clipping, and short warmups. A smaller model, possessing a
              simpler loss surface with fewer degenerate saddle points, can be pushed along a much more
              aggressive cosine decay schedule, settling into broader, flatter minima that generalize
              substantially better out of distribution.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-display font-bold text-[#F3F6F7] text-base mb-1">
              2. Annealing and Curricular Mixtures
            </h3>
            <p className="text-sm text-[#A8B3BA] leading-relaxed">
              The composition of data across time matters as much as the total volume. In modern
              multi-stage training, a 500-billion-token high-quality annealing phase with formal math,
              complex code, and structured logic can allow a 7B model to leapfrog a 30B model whose
              training was halted abruptly when compute ran out.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-display font-bold text-[#F3F6F7] text-base mb-1">
              3. Post-Training and Policy Alignment
            </h3>
            <p className="text-sm text-[#A8B3BA] leading-relaxed">
              Instruction tuning, Direct Preference Optimization (DPO), and Reinforcement Learning from
              Human/AI Feedback (RLHF) do not teach models vast new factual databases; they serve as an
              inductive lens. They suppress useless generative branches and align the model&apos;s raw
              distribution with structured execution.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 06 // Specialization and the Geometry of Task Manifolds */}
      {/* ------------------------------------------------------------------- */}
      <section id="specialization-and-task-manifolds" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          06 // Specialization and the Geometry of Task Manifolds
        </h2>

        <p>
          Consider an edge diagnostic engine designed for industrial telemetry. The system monitors a
          high-speed centrifugal pump via three vibration sensors and a thermal sensor, sampling at
          10 kHz. Its sole objective is to predict bearing failure 48 hours before catastrophic
          mechanical seizure.
        </p>

        <p>
          Deploying a massive 70B multimodal language model to solve this problem is not merely
          computationally wasteful; it is mathematically suboptimal.
        </p>

        <p>
          The true intrinsic dimensionality <span className="font-mono text-[#F3F6F7]">k</span> of the
          bearing-failure manifold is small (<span className="font-mono text-[#F3F6F7]">k &ll; d</span>).
          An enormous generalist network operates across an observation space of immense dimensionality.
          To process telemetry, it must map sensor readings into tokens, pass them through dozens of
          self-attention layers trained to model human syntax, and output natural language predictions.
        </p>

        <ArticlePullQuote
          quote="The narrower the operational distribution, the less useful excess parameters become."
          attribution="Manifold Hypothesis in Applied ML"
        />

        <p>
          Every unused capability of the large model represents an operational vulnerability: risk of
          hallucination, sensitivity to out-of-distribution noise, and enormous latency. By contrast, a
          compact 50-million parameter Temporal Convolutional Network (TCN) or state-space model projects
          the sensor inputs directly onto the harmonic resonance manifold. Zero capacity is squandered on
          unrelated world knowledge.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 07 // Knowledge Distillation: Compressing the Teacher’s Manifold */}
      {/* ------------------------------------------------------------------- */}
      <section id="knowledge-distillation" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          07 // Knowledge Distillation: Compressing the Teacher’s Manifold
        </h2>

        <p>
          Perhaps the most direct proof that smaller models can inherit the capability of larger models
          without inheriting their scale is <strong className="text-[#F3F6F7]">Knowledge Distillation</strong> (Hinton et al., 2015).
        </p>

        <p>
          In standard supervised learning, a network trains against hard one-hot targets{' '}
          <span className="font-mono text-[#F3F6F7]">y &isin; &#123;0, 1&#125;^C</span>. If an image depicts a
          Siberian Husky, the target vector assigns 1.0 to <code>husky</code> and 0.0 to every other
          class. This throws away nearly all structural information about the problem space.
        </p>

        <p>
          When a large, highly capable Teacher model processes that same image, its output logits before
          the final softmax contain rich, continuous geometric data—what Geoffrey Hinton termed{' '}
          <strong className="text-[#019AA2]">&ldquo;dark knowledge.&rdquo;</strong>
        </p>

        <EquationBlock
          math="p_i = \frac{\exp(z_i / T)}{\sum_j \exp(z_j / T)}"
          label="TEMPERATURE SCALING"
          title="02 / SOFTMAX DISTRIBUTIONS"
          explanation="Scaling logits by temperature T > 1 flattens the distribution, revealing relative affinities between non-target classes."
        />

        {/* Visual 02 placed right after distillation formulation */}
        <Visual02DistillationMechanics />

        <p>
          The student minimizes a composite loss combining ground-truth cross-entropy and Kullback-Leibler
          divergence against the teacher:
        </p>

        <EquationBlock
          math="\mathcal{L}_{\text{total}} = (1 - \alpha) \mathcal{L}_{\text{CE}}(y, \sigma(z_S)) + \alpha T^2 \mathcal{D}_{\text{KL}}\left(\sigma\left(\frac{z_T}{T}\right) \parallel \sigma\left(\frac{z_S}{T}\right)\right)"
          label="DISTILLATION OBJECTIVE"
          title="03 / COMPOSITE KD LOSS"
          explanation="The student is supervised directly on the smooth, regularized decision surface of the teacher."
        />

        <p>
          The student does not need to reproduce every computation of the teacher. It needs to preserve
          the useful behavior. As a result, a 3B student trained via distillation can frequently match or
          exceed the accuracy of a 70B teacher on the target task while using a fraction of the memory.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 08 // Compression: Pruning, Factorization, and Structural Efficiency */}
      {/* ------------------------------------------------------------------- */}
      <section id="compression-and-sparsity" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          08 // Compression: Pruning, Factorization, and Structural Efficiency
        </h2>

        <p>
          Dense neural networks exhibit massive overparameterization. As demonstrated by Frankle and
          Carbin&apos;s <em>Lottery Ticket Hypothesis</em> (2018), dense, randomly-initialized networks
          contain sparse subnetworks that, when trained in isolation, can match the accuracy of the full
          network in an equivalent number of iterations.
        </p>

        <p>Modern compression techniques exploit this redundancy directly:</p>

        <ul className="space-y-3 pl-4 border-l border-[#1C2830] text-sm text-[#A8B3BA]">
          <li>
            <strong className="text-[#F3F6F7]">Structured Pruning:</strong> Entire attention heads, MLP
            intermediate channels, or transformer layers are removed based on sensitivity analyses. If a
            32-layer model can shed 8 intermediate layers with less than a 0.5% drop in benchmark
            accuracy, those 8 layers were performing near-identity mappings.
          </li>
          <li>
            <strong className="text-[#F3F6F7]">Low-Rank Factorization (SVD):</strong> Decomposing large
            weight matrices into low-rank products reduces parameter count from{' '}
            <span className="font-mono text-[#019AA2]">m &middot; n</span> to{' '}
            <span className="font-mono text-[#019AA2]">k(m + n)</span>, radically cutting FLOPs per layer.
          </li>
          <li>
            <strong className="text-[#F3F6F7]">Architectural Innovations:</strong> Grouped-Query Attention
            (GQA), Multi-Head Latent Attention (MLA), and linear-time state-space mechanisms (like Mamba)
            substantially reduce parameter overhead and KV cache memory while preserving long-range associative recall.
          </li>
        </ul>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 09 // Precision vs. Scale: The Mathematics of Quantization */}
      {/* ------------------------------------------------------------------- */}
      <section id="precision-vs-scale-quantization" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          09 // Precision vs. Scale: The Mathematics of Quantization
        </h2>

        <p>
          A parameter&apos;s count does not tell you its information-theoretic storage size. In standard
          frameworks, parameters are initialized and trained in 16-bit half-precision (`FP16`/`BF16`,
          2 bytes per parameter) or 32-bit float (`FP32`, 4 bytes per parameter).
        </p>

        <p>
          Consider a baseline 7-billion parameter model (<span className="font-mono text-[#F3F6F7]">N = 7 &times; 10^9</span>):
        </p>

        <EquationBlock
          math="\text{Weight Memory}_{\text{FP16}} \approx 7\text{B} \times 2\text{ bytes} \approx 14.0\text{ GB}"
          label="FP16 STORAGE"
          title="04 / HALF-PRECISION FOOTPRINT"
        />

        <p>
          Now consider that same model quantized to a 4-bit integer representation using second-order
          post-training quantization techniques like GPTQ or AWQ:
        </p>

        <EquationBlock
          math="\text{Weight Memory}_{\text{INT4}} \approx 7\text{B} \times 0.5\text{ bytes} \approx 3.5\text{ GB}"
          label="INT4 STORAGE"
          title="05 / QUANTIZED FOOTPRINT"
          explanation="Note: These calculations represent pure weight storage. Runtime memory requires additional VRAM for dynamic activations, KV cache, and framework buffers."
        />

        {/* Visual 04 placed right after calculation */}
        <Visual04QuantizationPrecision />

        <p>
          Through methods like Activation-aware Weight Quantization (AWQ), the salient weights protecting
          outlier activation channels are retained at higher precision, while 90% of the matrix is reduced
          to 4 bits. The resulting INT4 model often demonstrates benchmark retention within 1% of its FP16
          baseline, while delivering 3x to 4x higher throughput on memory-bandwidth-constrained hardware.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 10 // The Cost of Being Large: The Physics of Hardware Execution */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-cost-of-being-large" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          10 // The Cost of Being Large: The Physics of Hardware Execution
        </h2>

        <p>
          Software does not execute in the abstract; it executes on physical silicon bounded by
          thermodynamics, memory buses, and interconnect latency.
        </p>

        <p>
          In autoregressive generation (token-by-token output), large language models are almost never
          compute-bound; they are <strong className="text-[#F3F6F7]">memory-bandwidth bound</strong>.
        </p>

        <EquationBlock
          math="\text{Time per Token} \approx \frac{\text{Model Weights in Bytes}}{\text{Memory Bandwidth (Bytes/sec)}}"
          label="ROOFLINE LIMIT"
          title="06 / AUTOREGRESSIVE MEMORY BOTTLENECK"
        />

        <p>
          For a 70-billion parameter model in 16-bit precision (140 GB of weights), even an accelerator
          with 3.35 TB/s of memory bandwidth (such as an NVIDIA H100 SXM) cannot generate a token faster
          than the physical time it takes to sweep 140 GB over the memory bus:
        </p>

        <EquationBlock
          math="\text{Theoretical Latency} = \frac{140 \times 10^9\text{ B}}{3.35 \times 10^{12}\text{ B/s}} \approx 41.8\text{ ms / token} \quad (\approx 24\text{ tokens/sec})"
          label="PHYSICAL LATENCY CEILING"
          title="07 / 70B SINGLE-GPU ROOFLINE"
        />

        <p>
          To serve this model with low latency, it must be sharded across multiple GPUs using Tensor
          Parallelism, introducing cross-GPU AllReduce communication latency over NVLink.
        </p>

        <p>
          Now look at an 8-billion parameter model quantized to INT4 (4 GB of weights). On that exact same
          hardware, its theoretical memory-sweep latency drops to ~1.19 ms per token (~840 tokens/sec).
          A model that delivers results with single-digit millisecond latency on a local machine often
          vastly outperforms a 70B model in interactive user experiences and robotics.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 11 // Pareto Efficiency: The Performance-Compute Frontier */}
      {/* ------------------------------------------------------------------- */}
      <section id="pareto-efficiency" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          11 // Pareto Efficiency: The Performance-Compute Frontier
        </h2>

        <p>
          In production engineering, the question is never &ldquo;Which model is the most capable in the
          abstract?&rdquo;
        </p>

        <p className="font-semibold text-[#F3F6F7]">
          The question is always: Which model maximizes capability while satisfying the operational budget?
        </p>

        <Visual03ParetoFrontier />

        <p>
          The relationship between model scale and task performance follows a curve of diminishing
          marginal returns. Moving from 1B to 8B yields an enormous leap in accuracy (e.g. from 55% to 88%
          on domain code synthesis). Moving from 8B to 70B yields an incremental improvement (88% to 93%).
        </p>

        <p>
          Yet capturing that final 5% of performance requires an 800% increase in compute and a 10x
          increase in serving cost. Pairing an 8B model with external verification (compilers, linters, or
          speculative execution) frequently achieves 98% accuracy at a fraction of the cost of a single
          70B pass.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 12 // Hardware Changes What "Better" Means */}
      {/* ------------------------------------------------------------------- */}
      <section id="hardware-changes-what-better-means" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          12 // Hardware Changes What &ldquo;Better&rdquo; Means
        </h2>

        <p>
          The environment where intelligence is deployed completely redefines the objective function:
        </p>

        <ul className="space-y-2 pl-4 font-mono text-xs text-[#F3F6F7] border-l border-[#1C2830]">
          <li>Cloud Datacenter: Megawatts of power, distributed multi-node clusters.</li>
          <li>Edge Workstation: Hundreds of watts, 16GB–64GB unified memory.</li>
          <li>Drone / Embedded MCU: Single watts, 512MB–4GB RAM, zero cellular uplink.</li>
        </ul>

        <p>
          In an autonomous agricultural drone surveying crop blight in a remote valley without network
          access, a 70-billion parameter model living on a cloud instance is completely useless. Its
          effective capability is zero.
        </p>

        <p>
          A 1.5-billion parameter vision-language model, quantized to 4 bits and running on an onboard NPU
          within an 8-watt power envelope at 30 frames per second, identifies leaf fungus instantly and
          adjusts spray nozzles in real time. In this environment, the 1.5B model is not just better—it
          is the only functional solution.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 13 // Mixture-of-Experts: Total Parameters vs. Active Parameters */}
      {/* ------------------------------------------------------------------- */}
      <section id="mixture-of-experts" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          13 // Mixture-of-Experts: Total Parameters vs. Active Parameters
        </h2>

        <p>
          The traditional equation equating parameter count with computational cost has been fundamentally
          disrupted by sparse <strong className="text-[#F3F6F7]">Mixture-of-Experts (MoE)</strong> architectures.
        </p>

        <p>
          In a dense transformer, every parameter is engaged for every token. In a sparse MoE, a
          lightweight gating router dispatches each token to only a subset of expert sub-networks:
        </p>

        <EquationBlock
          math="y = \sum_{i \in \text{Top-}k} G(x)_i \cdot \text{Expert}_i(x)"
          label="ROUTED MIXTURE"
          title="08 // SPARSE MOE GATING"
          explanation="Only top-k experts are activated per token forward pass, decoupling parameter memory from arithmetic cost."
        />

        <p>
          Consider Mixtral 8x7B: it contains ~46.7 billion total parameters in memory, but activates only
          ~12.9 billion parameters per token forward pass. When comparing models, parameter count alone
          no longer tells us how many floating-point operations occur per token.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 14 // Can a Smaller Model Actually Be "Smarter"? */}
      {/* ------------------------------------------------------------------- */}
      <section id="can-a-smaller-model-be-smarter" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          14 // Can a Smaller Model Actually Be &ldquo;Smarter&rdquo;?
        </h2>

        <p>
          The answer hinges entirely on avoiding semantic ambiguity around the word <em>smart</em>.
        </p>

        <p>
          If &ldquo;smart&rdquo; means possessing a massive encyclopedic memory capable of reciting 16th-century
          Ottoman treaties, translating rare dialects, and drafting contracts across 50 jurisdictions—
          <strong className="text-[#F3F6F7]">no</strong>. A compact model lacks the raw capacity to store
          the sheer volume of factual Shannon entropy contained in a 400B+ parameter reservoir.
        </p>

        <p>However, if &ldquo;smart&rdquo; is defined operationally as:</p>

        <ul className="space-y-2 pl-4 border-l border-[#019AA2] font-mono text-xs sm:text-sm text-[#F3F6F7]">
          <li>1. Deductive fidelity (executing logical steps without skipping).</li>
          <li>2. Syntactic adherence (producing strictly valid JSON matching an arbitrary schema).</li>
          <li>3. Context utilization (synthesizing facts within the prompt without hallucinating).</li>
          <li>4. Algorithmic precision (correctly tracing variable states in execution).</li>
        </ul>

        <p>
          Then <strong className="text-[#019AA2]">yes</strong>. By offloading factual storage to an external
          database via Retrieval-Augmented Generation (RAG) and dedicating parameters purely to reasoning
          over the retrieved context, a 4B parameter model can regularly outperform a 70B parameter model
          relying on internal parametric memory alone.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 15 // A Rigorous Mental Model: Intelligence as Constrained Optimization */}
      {/* ------------------------------------------------------------------- */}
      <section id="a-rigorous-mental-model" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          15 // A Rigorous Mental Model: Intelligence as Constrained Optimization
        </h2>

        <p>
          It is time to replace the simplistic heuristic with a comprehensive systems formulation:
        </p>

        <EquationBlock
          math="\mathcal{U} = f\left(\mathcal{A},\, \mathcal{D}_{\text{quality}},\, \mathcal{T}_{\text{recipe}},\, \mathcal{C},\, \mathcal{M}_{\text{task}},\, \mathcal{I}_{\text{engine}}\right)"
          label="SYSTEM FUNCTIONAL"
          title="09 // THE CAPABILITY FUNCTIONAL"
          explanation="Useful capability U is the joint product of architecture, data density, optimization trajectory, capacity, task geometry, and inference engine."
        />

        <p>In production engineering, this manifests as a constrained optimization problem:</p>

        <EquationBlock
          math="\max_{\theta} \mathcal{U}(\theta; \mathcal{M}_{\text{task}}) \quad \text{subject to} \quad \begin{cases} \text{Memory}(\theta) \le M_{\max} \\ \text{Latency}(\theta) \le L_{\max} \\ \text{Energy}(\theta) \le E_{\max} \\ \text{Cost}(\theta) \le B_{\max} \end{cases}"
          label="CONSTRAINED OPTIMIZATION"
          title="10 / SYSTEMS FORMULATION"
        />

        {/* Visual 05 placed immediately after systems formulation */}
        <Visual05SystemsPipeline />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 16 // The Deeper Idea: The Compression of Intelligence */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-compression-of-intelligence" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          16 // The Deeper Idea: The Compression of Intelligence
        </h2>

        <p>
          At the deepest theoretical level, machine learning is intimately linked to algorithmic
          information theory and Kolmogorov complexity.
        </p>

        <p>
          Ray Solomonoff&apos;s theory of universal inductive inference establishes that the optimal
          prediction of future data is achieved by finding the most compact program capable of generating
          past observations. Learning is not the accumulation of parameters;{' '}
          <strong className="text-[#019AA2]">learning is compression</strong>.
        </p>

        <ArticlePullQuote
          quote="A smaller model beats a larger model when it represents a purer compression of the target function."
          attribution="Information-Theoretic Foundation"
        />

        <p>
          When an enormous network is trained across the entire surface of human internet text, it
          achieves loss minimization by brute force: it allocates billions of parameters to act as a
          lossy lookup table for human culture.
        </p>

        <p>
          Knowledge distillation, precision quantization, structured pruning, and synthetic data filtering
          are formal operations that strip away the non-essential Kolmogorov complexity of the data
          distribution. They isolate the minimal sufficient representation required to execute the target
          task, discarding the computational overhead of storing world knowledge they do not need.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 17 // Conclusion: The Era of Efficient Intelligence */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-era-of-efficient-intelligence" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          Conclusion // The Era of Efficient Intelligence
        </h2>

        <p>
          The initial phase of the deep learning revolution was defined by an uncompromising brute-force
          scaling regime: more compute, larger clusters, bigger parameter counts. That era demonstrated
          what is possible when massive capacity is thrown at web-scale data.
        </p>

        <p>
          The current frontier of machine learning engineering is entering a far more sophisticated phase:
          the era of <strong className="text-[#F3F6F7]">efficient, structured intelligence</strong>.
        </p>

        <p>
          The future of production AI does not belong to a single monolithic trillion-parameter model
          attempting to answer every query and control every device. It belongs to compound AI systems:
        </p>

        <ul className="space-y-2 pl-4 border-l border-[#019AA2] font-mono text-xs sm:text-sm text-[#F3F6F7]">
          <li>Frontier reasoning models in data centers for scientific discovery and distillation supervision.</li>
          <li>Specialized 3B–8B domain experts operating with high precision in law, medicine, code, and finance.</li>
          <li>Ultra-fast local students running at single-digit millisecond latencies on phones and robotics.</li>
          <li>Deterministic tools and retrieval systems providing verified ground truth to compact reasoning cores.</li>
        </ul>

        <p>
          A larger model will always give you more potential capacity. But engineering is not the pursuit
          of unconstrained capacity. It is the art of delivering maximum useful capability within the
          uncompromising boundaries of physics, cost, and latency.
        </p>

        <p className="text-lg sm:text-xl font-display font-semibold text-[#F3F6F7] pt-2">
          A smaller model does not beat a larger model in spite of its size. It beats the larger model
          because its size allows it to be dense, fast, calibrated, and tailored precisely to the
          problem at hand.
        </p>

        {/* ByteLogic Signature Block */}
        <ByteLogicSignatureBlock />
      </section>
    </div>
  );
};
