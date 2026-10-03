'use client';

import React from 'react';
import { ArticlePullQuote } from './ArticlePullQuote';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';
import { ByteLogicSignatureBlock } from './ByteLogicSignatureBlock';
import {
  Layers,
  Database,
  Cpu,
  Brain,
  Binary,
  Compass,
  ArrowRight,
  Sparkles,
  Zap,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export const CapableWithoutGettingBiggerArticleContent: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 text-base sm:text-lg leading-relaxed text-fg-soft font-sans">
      {/* ------------------------------------------------------------------- */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------- */}
      <section id="introduction" className="space-y-6 pt-4">
        <p className="text-lg sm:text-xl font-sans text-fg leading-relaxed">
          An AI model with <span className="text-accent font-semibold">3 billion parameters</span> today can
          sometimes perform tasks that required a much larger model just a few years ago. Models are
          becoming more efficient, more accurate, and increasingly capable of running on consumer hardware.
        </p>

        <p>But this raises an interesting question:</p>

        <blockquote className="my-4 pl-4 border-l-2 border-accent text-fg italic bg-surface/60 py-3 pr-4 rounded-r-[4px] text-base sm:text-lg">
          If bigger models have more parameters and more computational power, how can smaller models keep getting
          better without growing in size?
        </blockquote>

        <p>
          The answer lies in something deeper than simply adding more parameters. AI researchers are learning how to
          make models use their capacity more effectively, learn better representations, and perform computation more
          efficiently.
        </p>

        <p>
          To understand this, we need to look at what actually makes an AI model intelligent, how training changes its
          capabilities, and why model size is only one part of the equation.
        </p>

        <ArticlePullQuote
          quote="Model size determines part of what a model can represent. It does not determine everything the model will learn or how well it will perform."
          attribution="Foundational Axiom of Parameter Efficiency"
        />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 01 // The Biggest Misconception */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-biggest-misconception" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 01 // CAPACITY VS INTELLIGENCE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          1. The Biggest Misconception: More Parameters Means More Intelligence
        </h2>

        <p>Imagine two students preparing for an examination.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-fg-muted uppercase tracking-wider">Student A</div>
            <div className="text-sm font-semibold text-fg">10,000 Pages Read</div>
            <p className="text-xs text-fg-soft leading-relaxed">
              Reads 10,000 pages but remembers very little and struggles to apply what they have learned to
              unseen problems.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-accent/40 bg-gradient-to-br from-accent/[0.05] to-transparent space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">Student B</div>
            <div className="text-sm font-semibold text-fg">2,000 Pages Mastered</div>
            <p className="text-xs text-fg-soft leading-relaxed">
              Studies 2,000 pages, understands the underlying concepts, recognizes structural patterns, and
              effortlessly solves unfamiliar problems.
            </p>
          </div>
        </div>

        <p className="text-fg font-medium">Who performs better?</p>

        <p>
          The number of pages studied does not directly determine how well either student performs. What matters is
          how effectively they learn and apply the information.
        </p>

        <p>
          AI models work differently from humans in many important ways, but the analogy illustrates a useful
          principle: the amount of information processed is not the same as the quality of the knowledge acquired.
        </p>

        <p>
          A neural network contains parameters, usually weights and biases, that determine how information flows
          through its computational layers.
        </p>

        <p>For a dense neural network, a rough approximation of its parameter count is:</p>

        <EquationBlock
          math="P \approx \sum_{l=1}^{L} \left(d_{l-1}d_l + d_l\right)"
          title="Dense Layer Parameter Accounting"
          label="EQ. 01"
          explanation="Calculates the aggregate weight matrix entries and additive bias terms across all contiguous dense feed-forward transformations."
          annotations={[
            { symbol: 'P', meaning: 'Total number of trainable parameters' },
            { symbol: 'L', meaning: 'Total number of network layers' },
            { symbol: 'd_l', meaning: 'Width (neuron dimensionality) of layer l' },
            { symbol: 'd_{l-1}d_l', meaning: 'Weight matrix connections from previous layer' },
            { symbol: 'd_l', meaning: 'Additive bias vector dimension for layer l' },
          ]}
        />

        <p>
          Increasing the number of layers or neurons generally increases the number of parameters. However, parameters
          are not independent facts stored in a database. They collectively encode patterns, features,
          relationships, and transformations learned from training data.
        </p>

        <p>
          A model with more parameters has a larger representational capacity, but that does not guarantee that it will
          learn better representations or solve a particular task more accurately.
        </p>

        <div className="my-6 rounded-[6px] bg-surface border border-line overflow-hidden bl-tick-box">
          <div className="p-3 bg-bg-2 border-b border-line text-xs font-mono text-accent font-semibold">
            TABLE 01 // IDENTICAL PARAMETER BUDGET WITH DIVERGENT UTILITY
          </div>
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left font-mono text-xs text-fg-soft">
              <thead>
                <tr className="border-b border-line text-fg">
                  <th className="pb-2.5">PROPERTY</th>
                  <th className="pb-2.5">MODEL A</th>
                  <th className="pb-2.5">MODEL B</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2830]/60">
                <tr>
                  <td className="py-2.5 text-fg font-semibold">Parameters</td>
                  <td className="py-2.5">7 Billion</td>
                  <td className="py-2.5 text-accent">7 Billion</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-fg font-semibold">Training Data</td>
                  <td className="py-2.5">Limited and repetitive</td>
                  <td className="py-2.5 text-fg">Diverse and high-quality</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-fg font-semibold">Training Process</td>
                  <td className="py-2.5">Basic next-token prediction</td>
                  <td className="py-2.5 text-fg">Improved training and post-training</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-fg font-semibold">Task Performance</td>
                  <td className="py-2.5 text-fg-muted">Moderate</td>
                  <td className="py-2.5 text-accent font-semibold">Potentially much higher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Both models have the same number of parameters. Yet their capabilities can differ substantially. The
          difference is not necessarily the architecture&apos;s size. It is what the model learned, how its
          parameters were optimized, and how it was trained to use that knowledge.
        </p>

        <div className="p-4 rounded-[6px] border border-accent/30 bg-accent/[0.06] text-fg text-sm">
          <strong className="text-accent font-mono">FIRST PRINCIPLE:</strong> Model size determines part of what a
          model can represent. It does not determine everything the model will learn or how well it will perform.
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 02 // Better Training Data */}
      {/* ------------------------------------------------------------------- */}
      <section id="better-training-data" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 02 // DATA CURATION DYNAMICS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          2. Better Training Data: Learning More from Every Example
        </h2>

        <p>
          One of the most significant reasons AI models improve without becoming larger is the quality of their
          training data.
        </p>

        <p>
          Early language models were trained on enormous collections of text gathered from books, websites, articles,
          and other sources. More data often improved performance because the models encountered more language
          patterns, facts, and examples.
        </p>

        <p>
          But there is a limitation. <strong className="text-fg">More data is not automatically better data.</strong>
        </p>

        <p>
          Suppose a model is trained on 100 million examples, many of which are duplicated, poorly written,
          irrelevant, or incorrect. Another model receives 30 million carefully selected examples covering a broad
          range of subjects and reasoning patterns.
        </p>

        <p className="text-fg">
          The second model may learn more useful representations, despite receiving fewer examples.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          2.1 Data Quality Changes What the Model Learns
        </h3>

        <p>
          During training, a language model attempts to predict the next token in a sequence. For example:
        </p>

        <div className="p-3.5 sm:p-4 rounded-[6px] bg-surface border border-line font-mono text-center text-sm sm:text-base text-fg">
          The capital of France is <strong className="text-accent">Paris</strong>
        </div>

        <p>
          The model learns to assign a high probability to the token &ldquo;Paris&rdquo; in the appropriate context.
          But real training involves billions or trillions of tokens and a vast range of contexts.
        </p>

        <p>
          If the dataset contains high-quality explanations, mathematical derivations, programming examples, and
          diverse language patterns, the model receives more opportunities to learn useful relationships.
        </p>

        <p>
          If the dataset contains large amounts of redundant or low-quality content, some of the training computation
          is spent learning patterns that contribute little to the desired capabilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-xs font-mono text-accent font-semibold mb-1">DEDUPLICATION</div>
            <p className="text-xs text-fg-soft">Removing repeated or near-identical examples to prevent wasted parameter capacity.</p>
          </div>
          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-xs font-mono text-accent font-semibold mb-1">DATA FILTERING</div>
            <p className="text-xs text-fg-soft">Eliminating machine-generated spam, low-entropy noise, and factual incoherence.</p>
          </div>
          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-xs font-mono text-accent font-semibold mb-1">DATA CURATION</div>
            <p className="text-xs text-fg-soft">Selecting dense demonstrations covering rigorous concepts and transferable skills.</p>
          </div>
          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-xs font-mono text-accent font-semibold mb-1">DATA BALANCING</div>
            <p className="text-xs text-fg-soft">Preventing hyper-representation of narrow domains at the expense of general reasoning.</p>
          </div>
          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-xs font-mono text-accent font-semibold mb-1">CONTAMINATION CONTROL</div>
            <p className="text-xs text-fg-soft">Strictly scrubbing evaluation benchmarks to guarantee true out-of-sample generalization.</p>
          </div>
        </div>

        <p>
          These methods do not magically increase a model&apos;s capacity. They improve the usefulness of the learning
          signal supplied to the model.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          2.2 Why This Matters Mathematically
        </h3>

        <p>Training is commonly formulated as an optimization problem:</p>

        <EquationBlock
          math="\theta^* = \arg\min_{\theta} \mathbb{E}_{(x,y)\sim \mathcal{D}} \left[ \mathcal{L}(f_\theta(x), y) \right]"
          title="Empirical Risk Minimization Over Distribution D"
          label="EQ. 02"
          explanation="The optimizer minimizes the expected prediction error over the sampled distribution D by adjusting parameter vector theta."
          annotations={[
            { symbol: '\\theta', meaning: 'Network parameter vector (weights & biases)' },
            { symbol: '\\mathcal{D}', meaning: 'Training data distribution manifold' },
            { symbol: 'f_\\theta', meaning: 'The parameterized neural network function' },
            { symbol: '\\mathcal{L}', meaning: 'Loss function quantifying deviation from ground truth' },
          ]}
        />

        <p>
          The optimizer adjusts the parameters to reduce the loss over the training distribution. Changing the quality
          and distribution of <EquationBlock math="\mathcal{D}" inline /> changes the learning problem itself. A
          carefully constructed dataset can provide more informative gradients and better coverage of the tasks we
          care about.
        </p>

        <p>
          The important distinction is that lower training loss does not always guarantee better real-world
          performance. The data must also represent the tasks and distributions on which the model will be evaluated.
        </p>

        <p className="text-fg">
          The goal is not simply to feed a model more data. It is to give it better opportunities to learn.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 03 // Training Efficiency */}
      {/* ------------------------------------------------------------------- */}
      <section id="training-efficiency" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 03 // OPTIMIZATION TRAJECTORIES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          3. Training Efficiency: Getting More Intelligence from the Same Model
        </h2>

        <p>
          Data is only one side of the equation. The training algorithm also matters. A neural network does not arrive
          at its final capabilities simply because it has a particular architecture. Its weights must be learned
          through optimization.
        </p>

        <p>
          Two models with identical architectures can develop very different capabilities depending on how they are
          trained.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          3.1 The Role of Gradient Descent
        </h3>

        <p>
          During training, the model produces a prediction, calculates the error, and uses backpropagation to estimate
          how its parameters contributed to that error. A basic gradient descent update is:
        </p>

        <EquationBlock
          math="\theta_{t+1} = \theta_t - \eta \nabla_\theta \mathcal{L}(\theta_t)"
          title="First-Order Parameter Gradient Update"
          label="EQ. 03"
          explanation="Iterative step shifting weights opposite the loss gradient direction to converge toward an optimal functional manifold."
          annotations={[
            { symbol: '\\theta_t', meaning: 'Parameter weights at optimization step t' },
            { symbol: '\\eta', meaning: 'Learning rate (step size multiplier)' },
            { symbol: '\\nabla_\\theta \\mathcal{L}', meaning: 'Vector of partial derivatives of loss with respect to parameters' },
          ]}
        />

        <p>
          In practice, modern training systems use techniques such as adaptive optimizers (AdamW, Lion), learning-rate
          schedules (cosine annealing with warmup), gradient clipping, decoupled weight decay, and carefully selected
          batch sizes.
        </p>

        <p>
          These methods help make optimization more stable and effective. They do not guarantee a better model in
          every setting. Poorly chosen hyperparameters or an unsuitable training objective can still produce weak
          results.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          3.2 Training Recipes Matter
        </h3>

        <p>Imagine training two identical Transformer models with the same parameter count:</p>

        <ul className="space-y-2 pl-4 border-l border-line text-sm">
          <li>
            <strong className="text-fg">Model 1:</strong> Trained using a poorly tuned learning rate, an
            unsuitable data mixture, and an insufficient training budget.
          </li>
          <li>
            <strong className="text-accent">Model 2:</strong> Uses a carefully tuned learning-rate schedule,
            appropriate data selection, stable optimization, and a well-designed training objective.
          </li>
        </ul>

        <p>The second model can learn more useful representations from the same architecture.</p>

        <p>
          The neural network&apos;s architecture defines a space of possible functions. Training determines which
          region of that space the model actually reaches. The same number of parameters can therefore support very
          different levels of capability.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 04 // Knowledge Distillation */}
      {/* ------------------------------------------------------------------- */}
      <section id="knowledge-distillation" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 04 // BEHAVIOR TRANSFER</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          4. Knowledge Distillation: Teaching a Small Model from a Larger One
        </h2>

        <p>
          This is one of the most direct answers to our central question: What if we could train a small model using
          the knowledge and behavior of a much larger model?
        </p>

        <p>That is the idea behind knowledge distillation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <span className="text-xs font-mono text-fg-muted uppercase">Teacher Network</span>
            <h4 className="text-base font-semibold text-fg mt-1">Massive Foundation Model</h4>
            <p className="text-xs text-fg-soft mt-2">
              Deep, broad representational capacity that outputs rich probability distributions and detailed
              step-by-step rationales.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-accent/40 bg-accent/[0.04]">
            <span className="text-xs font-mono text-accent uppercase">Student Network</span>
            <h4 className="text-base font-semibold text-fg mt-1">Compact Specialist Model</h4>
            <p className="text-xs text-fg-soft mt-2">
              Trained to mimic the teacher&apos;s soft logits, probability distributions, and reasoning traces
              without carrying its parameter footprint.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          4.1 Learning from Probability Distributions
        </h3>

        <p>Suppose a teacher model predicts the next word in this sentence:</p>

        <div className="p-3 rounded-[6px] bg-surface border border-line font-mono text-sm text-center text-fg">
          The animal sat on the ___
        </div>

        <p>The teacher might assign probabilities like these:</p>

        <div className="my-6 rounded-[6px] bg-surface border border-line overflow-hidden bl-tick-box">
          <div className="p-3 bg-bg-2 border-b border-line text-xs font-mono text-accent font-semibold">
            TABLE 02 // TEACHER PREDICTION DISTRIBUTION (&ldquo;DARK KNOWLEDGE&rdquo;)
          </div>
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left font-mono text-xs text-fg-soft">
              <thead>
                <tr className="border-b border-line text-fg">
                  <th className="pb-2">CANDIDATE TOKEN</th>
                  <th className="pb-2">TEACHER PROBABILITY</th>
                  <th className="pb-2">SEMANTIC IMPLICATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2830]/60">
                <tr>
                  <td className="py-2 text-accent font-semibold">mat</td>
                  <td className="py-2 text-fg">0.60</td>
                  <td className="py-2 text-fg-muted">Primary target</td>
                </tr>
                <tr>
                  <td className="py-2 text-fg">floor</td>
                  <td className="py-2 text-fg">0.20</td>
                  <td className="py-2 text-fg-muted">High semantic plausibility</td>
                </tr>
                <tr>
                  <td className="py-2 text-fg">chair</td>
                  <td className="py-2 text-fg">0.12</td>
                  <td className="py-2 text-fg-muted">Moderate semantic plausibility</td>
                </tr>
                <tr>
                  <td className="py-2 text-fg">roof</td>
                  <td className="py-2 text-fg">0.03</td>
                  <td className="py-2 text-fg-muted">Unlikely physical context</td>
                </tr>
                <tr>
                  <td className="py-2 text-fg-muted">Other tokens</td>
                  <td className="py-2 text-fg">0.05</td>
                  <td className="py-2 text-fg-muted">Residual probability mass</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          A basic training example might only tell the student that &ldquo;mat&rdquo; is the correct answer. But the
          teacher&apos;s probability distribution communicates that &ldquo;floor&rdquo; and &ldquo;chair&rdquo; are
          also plausible in context, while &ldquo;roof&rdquo; is less likely.
        </p>

        <p>
          The student learns these latent relationships by matching the teacher&apos;s softened output distribution:
        </p>

        <EquationBlock
          math="\mathcal{L}_{KD} = T^2 D_{KL} \left( p_{\text{teacher}}^{(T)} \parallel p_{\text{student}}^{(T)} \right)"
          title="Kullback–Leibler Distillation Loss"
          label="EQ. 04"
          explanation="Measures relative entropy between softened teacher logits and student logits scaled by temperature T squared."
          annotations={[
            { symbol: 'D_{KL}', meaning: 'Kullback–Leibler divergence between probability densities' },
            { symbol: 'T', meaning: 'Temperature parameter softening peak softmax distributions' },
            { symbol: 'p^{(T)}', meaning: 'Temperature-scaled categorical softmax distribution' },
          ]}
        />

        <p>In practice, distillation combines teacher targets with the original ground-truth cross-entropy loss:</p>

        <EquationBlock
          math="\mathcal{L} = \alpha \mathcal{L}_{KD} + (1 - \alpha) \mathcal{L}_{task}"
          title="Blended Distillation Objective"
          label="EQ. 05"
          explanation="Interpolates between supervised target loss and teacher behavioral mimicry."
          annotations={[
            { symbol: '\\alpha', meaning: 'Loss weighting interpolation factor (typically 0.5 - 0.9)' },
            { symbol: '\\mathcal{L}_{task}', meaning: 'Standard cross-entropy loss on hard dataset ground truth' },
          ]}
        />

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          4.2 Does a Small Model Become as Intelligent as Its Teacher?
        </h3>

        <p>
          Not necessarily. A student has limited capacity. It cannot perfectly reproduce every behavior of a much
          larger teacher, especially when the teacher&apos;s capabilities depend on extensive world knowledge or broad
          reasoning.
        </p>

        <p>
          However, the student can learn to reproduce selected behaviors remarkably well. For example, a small model
          distilled on programming tasks might learn to generate code, explain common algorithms, or follow structured
          instructions far more effectively than a model trained from scratch on raw code tokens.
        </p>

        <div className="p-4 rounded-[6px] bg-surface border-l-2 border-accent text-sm">
          <p className="text-fg font-medium">Distillation transfers behavior, not complete capacity.</p>
          <p className="text-xs text-fg-soft mt-1">
            A smaller model can inherit valuable capabilities from a larger model, but it cannot automatically inherit
            the teacher&apos;s underlying generalized hypothesis space.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 05 // Better Architectures */}
      {/* ------------------------------------------------------------------- */}
      <section id="better-architectures" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 05 // STRUCTURAL COMPUTATION</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          5. Better Architectures: Doing More with the Same Number of Parameters
        </h2>

        <p>
          Another major source of improvement is architectural design. A neural network&apos;s architecture determines
          how its parameters are connected, how information moves through the network, and which computations can be
          performed efficiently.
        </p>

        <p>
          Increasing parameter count is only one way to increase capability. Changing the structure of computation can
          also make a model more effective.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          5.1 The Transformer Revolution
        </h3>

        <p>
          The Transformer architecture introduced self-attention, allowing each token to dynamically incorporate
          context from all other tokens in a sequence:
        </p>

        <div className="p-3 rounded-[6px] bg-surface border border-line font-mono text-sm text-fg">
          &ldquo;The robot picked up the battery because <strong className="text-accent">it</strong> was discharged.&rdquo;
        </div>

        <p>
          To interpret &ldquo;it,&rdquo; the model must evaluate relationships between different parts of the
          sentence. Self-attention computes explicit interactions across token representations:
        </p>

        <EquationBlock
          math="\operatorname{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\top}{\sqrt{d_k}} \right) V"
          title="Scaled Dot-Product Attention"
          label="EQ. 06"
          explanation="Computes pairwise token compatibility matrices, scaled by square root of key dimension to prevent gradient saturation."
          annotations={[
            { symbol: 'Q, K, V', meaning: 'Query, Key, and Value linear projections of input tokens' },
            { symbol: 'd_k', meaning: 'Dimensionality of keys and queries' },
            { symbol: 'QK^\\top', meaning: 'Pairwise affinity matrix across all sequence positions' },
          ]}
        />

        <p>
          Standard self-attention has a computational and memory cost that grows quadratically with sequence length.
          Researchers have therefore developed improvements to attention, normalization (RMSNorm), rotary positional
          embeddings (RoPE), and SwiGLU feed-forward networks to extract more capability per parameter.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          5.2 Mixture of Experts: More Total Parameters, Less Computation per Token
        </h3>

        <p>
          There is another important case that helps clarify what &ldquo;bigger&rdquo; actually means. A
          Mixture-of-Experts (MoE) model contains many parameters while activating only a small subset for any
          individual token.
        </p>

        <EquationBlock
          math="y = \sum_{i=1}^{N} g_i(x) E_i(x)"
          title="Sparse Mixture-of-Experts Routing Equation"
          label="EQ. 07"
          explanation="Calculates the weighted linear combination of outputs from top-k selected expert sub-networks."
          annotations={[
            { symbol: 'E_i(x)', meaning: 'Feed-forward computation executed by expert i' },
            { symbol: 'g_i(x)', meaning: 'Sparse gating probability assigned by the routing gate' },
            { symbol: 'N', meaning: 'Total available expert sub-networks' },
          ]}
        />

        <p>
          An illustrative MoE model could have <strong className="text-fg">100 billion total parameters</strong>,
          yet activate only <strong className="text-accent">10 billion parameters</strong> for any given token forward
          pass.
        </p>

        <div className="my-6 rounded-[6px] bg-surface border border-line overflow-hidden bl-tick-box">
          <div className="p-3 bg-bg-2 border-b border-line text-xs font-mono text-accent font-semibold">
            TABLE 03 // METRIC DISSECTION: WHAT &ldquo;SIZE&rdquo; REALLY MEASURES
          </div>
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left font-mono text-xs text-fg-soft">
              <thead>
                <tr className="border-b border-line text-fg">
                  <th className="pb-2">MEASUREMENT</th>
                  <th className="pb-2">SYSTEM MEANING</th>
                  <th className="pb-2">DEPLOYMENT IMPACT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2830]/60">
                <tr>
                  <td className="py-2.5 text-fg font-semibold">Total Parameters</td>
                  <td className="py-2.5">Overall parameter capacity</td>
                  <td className="py-2.5 text-fg-muted">Determines disk storage & VRAM footprint</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-accent font-semibold">Active Parameters</td>
                  <td className="py-2.5">Parameters in a given forward pass</td>
                  <td className="py-2.5 text-fg">Determines execution latency</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-fg font-semibold">FLOPs per Token</td>
                  <td className="py-2.5">Computational work per token</td>
                  <td className="py-2.5 text-fg-muted">Determines energy consumption and silicon load</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-fg font-semibold">Memory Footprint</td>
                  <td className="py-2.5">Weights + KV cache + runtime buffers</td>
                  <td className="py-2.5 text-fg-muted">Hardware compatibility barrier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          A model can become significantly more computationally efficient without reducing its total parameter count.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 06 // Quantization */}
      {/* ------------------------------------------------------------------- */}
      <section id="quantization" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 06 // NUMERICAL PRECISION</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          6. Quantization: Making the Same Model Smaller in Memory
        </h2>

        <p>
          Now we arrive at a technique particularly relevant to running AI on consumer hardware: What if we could
          take an existing model and reduce its memory footprint without substantially changing its behavior?
        </p>

        <p>That is the goal of quantization.</p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          6.1 Why Precision Matters
        </h3>

        <p>Consider a model containing 7 billion parameters:</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-fg-muted uppercase">FP32 (32-bit Float)</div>
            <div className="text-lg font-bold text-fg my-1">~28 GB</div>
            <p className="text-fg-soft">7 × 10⁹ × 4 bytes</p>
          </div>

          <div className="p-3.5 rounded-[6px] bg-surface border border-line">
            <div className="text-fg-muted uppercase">FP16 / BF16 (16-bit)</div>
            <div className="text-lg font-bold text-fg my-1">~14 GB</div>
            <p className="text-fg-soft">7 × 10⁹ × 2 bytes</p>
          </div>

          <div className="p-3.5 rounded-[6px] bg-surface border border-accent/50 bg-accent/[0.05]">
            <div className="text-accent uppercase font-semibold">INT4 (4-bit Integer)</div>
            <div className="text-lg font-bold text-accent my-1">~3.5 GB</div>
            <p className="text-fg-soft">7 × 10⁹ × 0.5 bytes</p>
          </div>
        </div>

        <p className="text-xs text-fg-muted">
          *Note: These are idealized weight-storage estimates using decimal gigabytes. Actual runtime memory is higher
          because of quantization metadata, activation buffers, the KV cache, and runtime overhead.
        </p>

        <p>
          The crucial observation is that the quantized model still possesses 7 billion parameters. We have not
          removed its learned architecture or retrained it from scratch. We have changed how its numerical values are
          represented.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          6.2 How Lower Precision Preserves Useful Behavior
        </h3>

        <p>
          A quantization procedure maps continuous floating-point weights into a discrete set of representable
          integers:
        </p>

        <EquationBlock
          math="\hat{w} = s \cdot q"
          title="Uniform Linear Quantization Mapping"
          label="EQ. 08"
          explanation="Reconstructs continuous floating-point weight approximation by scaling discrete integer value q by scaling factor s."
          annotations={[
            { symbol: '\\hat{w}', meaning: 'Dequantized floating-point weight approximation' },
            { symbol: 's', meaning: 'Floating-point quantization scale factor' },
            { symbol: 'q', meaning: 'Stored low-bit quantized integer (e.g., INT4 / INT8)' },
          ]}
        />

        <p>
          Techniques like Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT) ensure rounding errors
          do not destructively compound through computational layers.
        </p>

        <p>
          Quantization does not make a model more intelligent. It makes existing capabilities accessible on hardware
          that could never otherwise fit the raw uncompressed tensors.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 07 // Better Post-Training */}
      {/* ------------------------------------------------------------------- */}
      <section id="better-post-training" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 07 // BEHAVIORAL ALIGNMENT</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          7. Better Post-Training: Turning a Language Model into a Useful Assistant
        </h2>

        <p>
          Pretraining teaches a model statistical structure and prediction patterns across data distributions. But
          predicting next tokens is not the same as reliably following instructions, solving multi-step problems, or
          interacting coherently with humans.
        </p>

        <p>
          Post-training modifies a pretrained model&apos;s behavior through supervised fine-tuning (SFT), preference
          optimization (DPO, RLHF), and verifiable reward training.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          7.1 Supervised Fine-Tuning (SFT)
        </h3>

        <p>Suppose a pretrained model is given this prompt:</p>

        <div className="p-3 rounded-[6px] bg-surface border border-line font-mono text-sm text-fg">
          Explain binary search in C++ with an example.
        </div>

        <p>
          A raw base model might output commentary about C++, cite a textbook table of contents, or babble related
          topics without ever fulfilling the instruction. SFT tunes the model on structured instruction-response pairs:
        </p>

        <EquationBlock
          math="\mathcal{L}_{SFT} = -\sum_{t=1}^{T} \log p_\theta(y_t \mid x, y_{<t})"
          title="Supervised Fine-Tuning Auto-Regressive Loss"
          label="EQ. 09"
          explanation="Maximizes the conditional log-likelihood of target response tokens y given prompt x and preceding tokens."
          annotations={[
            { symbol: 'x', meaning: 'User prompt and system instructions' },
            { symbol: 'y_t', meaning: 'Target token at position t of demonstration response' },
            { symbol: 'p_\\theta', meaning: 'Model predicted probability distribution' },
          ]}
        />

        <p>
          The parameter count remains unchanged during full fine-tuning. Yet the model&apos;s behavior changes
          substantially because its weights are aligned with human intent.
        </p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          7.2 Preference Optimization and Reinforcement Learning
        </h3>

        <p>
          Beyond simple imitation, preference-based training (DPO, PPO) teaches the model which responses are
          preferable among candidates. When paired with verifiable rewards in mathematics or software engineering,
          the model learns to prioritize rigorous reasoning paths.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 08 // Test-Time Compute */}
      {/* ------------------------------------------------------------------- */}
      <section id="test-time-compute" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 08 // DYNAMIC INFERENCE COMPUTE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          8. Test-Time Compute: What If the Model Thinks for Longer?
        </h2>

        <p>
          Traditionally, language models were evaluated by running one forward pass per generated token. But complex
          tasks benefit from spending more computation during inference.
        </p>

        <p>
          Under the paradigm of <strong className="text-accent">test-time compute</strong>, a model can generate
          intermediate reasoning tokens, explore alternative search paths, use tools, or verify candidate answers
          before returning a final answer.
        </p>

        <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
          <div className="text-xs font-mono text-accent font-semibold">TEST-TIME INFERENCE VERIFICATION CYCLE</div>
          <ol className="list-decimal list-inside space-y-1 text-sm text-fg-soft font-sans">
            <li>Break the complex task into decomposed intermediate steps.</li>
            <li>Generate candidate reasoning paths and draft solutions.</li>
            <li>Check calculations and verify intermediate constraints.</li>
            <li>Revise or backtrack if a logical contradiction is detected.</li>
            <li>Synthesize and return the validated final result.</li>
          </ol>
        </div>

        <p>The parameter count does not change. The system is simply allowed to spend more compute on the problem.</p>

        <h3 className="text-xl font-display font-semibold text-fg pt-2">
          8.1 More Inference Compute Is Not Always Better
        </h3>

        <div className="my-6 rounded-[6px] bg-surface border border-line overflow-hidden bl-tick-box">
          <div className="p-3 bg-bg-2 border-b border-line text-xs font-mono text-accent font-semibold">
            TABLE 04 // THE TRADEOFF MATRIX OF TEST-TIME COMPUTE
          </div>
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left font-mono text-xs text-fg-soft">
              <thead>
                <tr className="border-b border-line text-fg">
                  <th className="pb-2">MORE TEST-TIME COMPUTE INCREASES</th>
                  <th className="pb-2">BUT IT ALSO INCREASES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2830]/60">
                <tr>
                  <td className="py-2.5 text-accent">Opportunities to explore solution spaces</td>
                  <td className="py-2.5 text-fg">Response latency</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-accent">Chances of finding a valid, verified solution</td>
                  <td className="py-2.5 text-fg">Per-query inference cost</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-accent">Ability to catch and revise subtle errors</td>
                  <td className="py-2.5 text-fg">Token and memory consumption</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Generating more tokens does not guarantee better reasoning. The system must allocate compute according to
          task difficulty and rely on mechanisms that distinguish fruitful reasoning from unproductive drift.
        </p>

        <div className="p-4 rounded-[6px] border border-line bg-surface text-sm">
          <span className="text-accent font-mono font-semibold">THE INFERENCE PRINCIPLE:</span> The capability of an
          AI system is not determined only by the weights stored in its neural network. It also depends on how much
          computation it can perform and how effectively that computation is organized.
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 09 // The Bigger Picture */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-bigger-picture" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 09 // UNIFIED FRAMEWORK</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          9. The Bigger Picture: Intelligence Is an Engineering Trade-Off
        </h2>

        <p>
          When an AI model becomes more capable without increasing its parameter count, that improvement comes from six
          interconnected mechanisms:
        </p>

        {/* 6 Mechanisms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Database className="w-4 h-4" />
              <span className="font-semibold">01 // BETTER DATA</span>
            </div>
            <p className="text-xs text-fg-soft mt-2">
              Higher-quality, curated, and diverse examples supply dense, high-entropy learning signals.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Sliders className="w-4 h-4" />
              <span className="font-semibold">02 // BETTER OPTIMIZATION</span>
            </div>
            <p className="text-xs text-fg-soft mt-2">
              Adaptive algorithms, schedulers, and regularization guide weights toward superior local minima.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Brain className="w-4 h-4" />
              <span className="font-semibold">03 // KNOWLEDGE DISTILLATION</span>
            </div>
            <p className="text-xs text-fg-soft mt-2">
              Compact models absorb the output distributions and reasoning traces of massive teacher networks.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Layers className="w-4 h-4" />
              <span className="font-semibold">04 // BETTER ARCHITECTURES</span>
            </div>
            <p className="text-xs text-fg-soft mt-2">
              Innovations like RoPE, SwiGLU, and Mixture of Experts decouple parameter capacity from FLOP costs.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Binary className="w-4 h-4" />
              <span className="font-semibold">05 // EFFICIENT NUMERICAL FORMATS</span>
            </div>
            <p className="text-xs text-fg-soft mt-2">
              INT4/INT8 quantization shrinks memory footprints by 70–85% without sacrificing functional fidelity.
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">06 // MORE EFFECTIVE INFERENCE</span>
            </div>
            <p className="text-xs text-fg-soft mt-2">
              Test-time search, reasoning tokens, and validation expand reasoning power without modifying weights.
            </p>
          </div>
        </div>

        <p>
          These mechanisms are complementary, but they solve different problems. Distillation transfers capabilities.
          Quantization reduces representation cost. Post-training refines behavior. Test-time compute dynamically
          scales reasoning.
        </p>

        <p>The fundamental engineering question is not:</p>

        <div className="p-3 rounded-[6px] bg-surface border border-line font-mono text-sm text-fg-muted line-through">
          How many parameters does this model have?
        </div>

        <p>It is:</p>

        <div className="p-3.5 rounded-[6px] bg-surface border border-accent/50 text-sm font-mono text-fg">
          How much useful capability does this system deliver for a given budget of memory, compute, latency, and watts?
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 10 // What This Means for the Future of AI */}
      {/* ------------------------------------------------------------------- */}
      <section id="what-this-means-for-the-future" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 10 // PRACTICAL IMPLICATIONS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          10. What This Means for the Future of AI
        </h2>

        <p>
          For developers building local AI, edge inference systems, robotics, and consumer applications, these
          developments are transformative.
        </p>

        <p>
          Instead of deploying massive, remote API-bound models, developers can take a 3B or 7B parameter foundation,
          fine-tune it on domain data, quantize it to 4 bits, and execute it entirely locally on laptop GPUs, phones,
          or embedded chips with microsecond response times.
        </p>

        <div className="space-y-2 pl-4 border-l border-accent">
          <h4 className="text-sm font-semibold text-fg font-mono">FRONTIER ENGINEERING DIRECTIONS:</h4>
          <ul className="space-y-1.5 text-xs text-fg-soft font-mono">
            <li>• Parameter-Efficient Fine-Tuning (LoRA, QLoRA) for low-overhead adaptation</li>
            <li>• Post-Training Quantization (AWQ, GPTQ) for sub-4-bit memory footprints</li>
            <li>• Knowledge Distillation pipelines specialized for domain code & reasoning</li>
            <li>• Hardware-aware kernel compilation (FlashAttention, Marlin) for peak memory bandwidth</li>
            <li>• Rigorous task-specific evaluation over generic benchmark memorization</li>
          </ul>
        </div>

        <p>
          The future of AI is not a world where every model is 1 trillion parameters. It is a world where models are
          designed and deployed across a spectrum of scales, with capabilities and costs calibrated to the problem
          they solve.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------- */}
      <section id="conclusion" className="space-y-6 pt-8 border-t-2 border-accent/40">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="font-semibold tracking-wider uppercase">SYNTHESIS // THE HORIZON</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-fg tracking-tight">
          Conclusion: Bigger Is an Advantage, Not the Measure of Intelligence
        </h2>

        <p className="text-lg sm:text-xl text-fg leading-relaxed">
          AI models become more capable without getting bigger because parameter count is only one component of the
          system.
        </p>

        <p>
          Better data changes what they learn. Better optimization changes how effectively they learn it. Distillation
          transfers capabilities. Better architectures organize computation. Quantization reduces memory barriers.
          Post-training and test-time compute unlock real-world utility.
        </p>

        <blockquote className="my-6 py-6 px-6 sm:px-8 border-l-2 border-accent bg-gradient-to-r from-accent/[0.08] to-transparent rounded-r-[6px]">
          <p className="text-xl sm:text-2xl font-display font-bold text-fg leading-snug tracking-tight">
            The real frontier is not simply building bigger AI. It is building AI that delivers more capability per
            parameter, per operation, and per watt.
          </p>
        </blockquote>

        <p className="text-sm sm:text-base text-fg-soft pt-2">
          And that is what makes efficient AI such an exciting field: the possibility of bringing increasingly
          powerful intelligence to hardware and applications that were previously out of reach.
        </p>

        {/* Editorial Signature Block */}
        <ByteLogicSignatureBlock
          articleCode="ARTICLE 004"
          articleRef="BL-ART-004"
          statementHeading={
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-fg leading-snug tracking-tight">
              Scale provides capacity.
              <br />
              <span className="text-accent">
                Engineering efficiency determines how much intelligence is actually realized.
              </span>
            </h2>
          }
          statementDescription={
            <p className="text-sm sm:text-base text-fg-soft font-sans leading-relaxed pt-2 max-w-xl mx-auto">
              From data curation and knowledge distillation to quantization and inference compute: explore foundational
              benchmarks and mathematical analyses across ByteLogic.
            </p>
          }
        />
      </section>
    </div>
  );
};
