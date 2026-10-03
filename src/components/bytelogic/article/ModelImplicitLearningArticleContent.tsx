'use client';

import React from 'react';
import { ArticlePullQuote } from './ArticlePullQuote';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';
import { CodeBlock } from '@/components/bytelogic/ui/CodeBlock';
import { ByteLogicSignatureBlock } from './ByteLogicSignatureBlock';
import {
  Brain,
  Sparkles,
  Layers,
  ArrowRight,
  Database,
  Cpu,
  Compass,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  GitBranch,
  Network,
} from 'lucide-react';

export const ModelImplicitLearningArticleContent: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 text-base sm:text-lg leading-relaxed text-fg-soft font-sans">
      {/* ------------------------------------------------------------------- */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------- */}
      <section id="introduction" className="space-y-6 pt-4">
        <p className="text-lg sm:text-xl font-sans text-fg leading-relaxed">
          We often describe machine learning as if it were a very sophisticated version of teaching.
        </p>

        <p>You give a model examples.</p>
        <p>You provide the correct answers.</p>
        <p>The model adjusts its parameters until it becomes good at producing those answers.</p>

        <p>So it seems reasonable to think:</p>

        <blockquote className="my-4 pl-4 border-l-2 border-accent text-fg italic bg-surface/60 py-3 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;A model can only learn what we teach it.&rdquo;
        </blockquote>

        <p>But that intuition starts breaking down when we look at modern machine learning systems.</p>

        <p>
          A model can sometimes discover patterns, representations, and even useful relationships that were{' '}
          <strong className="text-fg font-semibold">
            never explicitly written down as instructions or labels
          </strong>.
        </p>

        <p>So the interesting question is:</p>

        <ArticlePullQuote
          quote="Can a model learn something that nobody explicitly taught it?"
          attribution="Foundational Epistemological Inquiry"
        />

        <p className="text-lg text-fg">
          The short answer is <strong className="text-accent">yes — but with an important distinction.</strong>
        </p>

        <p>
          A model cannot magically obtain information that has no connection to its training signal or data.
        </p>

        <p>
          But it can discover <strong className="text-accent">structure that was implicit in the data</strong>,
          even when nobody explicitly told it to look for that structure.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 01 // What Does "Teach" Actually Mean? */}
      {/* ------------------------------------------------------------------- */}
      <section id="what-does-teach-mean" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 01 // SPECIFICATION VS OPTIMIZATION</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          1. What Does &ldquo;Teach&rdquo; Actually Mean?
        </h2>

        <p>Suppose we want to train a model to recognize cats.</p>

        <p>We give it thousands of images:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg space-y-1">
          <div className="text-fg-soft">// Training instances</div>
          <div>Image → Cat</div>
          <div>Image → Cat</div>
          <div>Image → Not Cat</div>
          <div>Image → Cat</div>
          <div className="text-[#68747D]">...</div>
        </div>

        <p>Nobody explicitly tells the model:</p>

        <ul className="space-y-2 pl-4 border-l-2 border-line text-sm sm:text-base italic text-fg">
          <li>&ldquo;Cats usually have two triangular ears.&rdquo;</li>
          <li>&ldquo;Cats tend to have whiskers.&rdquo;</li>
          <li>&ldquo;A cat&apos;s eyes are usually positioned approximately like this.&rdquo;</li>
        </ul>

        <p>Instead, the model receives examples and a learning objective.</p>

        <p>During training, it changes its parameters to reduce its error.</p>

        <p>
          Eventually, internal representations may emerge that respond strongly to things such as:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-xs sm:text-sm">
          {['edges', 'textures', 'shapes', 'eyes', 'ears', 'fur', 'spatial arrangements'].map((feature) => (
            <div
              key={feature}
              className="p-2.5 rounded-[4px] bg-surface border border-line text-center text-accent"
            >
              {feature}
            </div>
          ))}
        </div>

        <p>Nobody necessarily programmed these features into the model.</p>

        <p className="text-fg font-medium">
          They emerged as useful representations for solving the task.
        </p>

        <div className="p-4 rounded-[6px] bg-surface border border-accent/40 bg-gradient-to-br from-accent/[0.06] to-transparent">
          <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
            Core Realization
          </div>
          <p className="text-base sm:text-lg text-fg font-medium leading-relaxed">
            Learning does not require every learned feature to be explicitly specified.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 02 // Explicit Knowledge vs. Implicit Structure */}
      {/* ------------------------------------------------------------------- */}
      <section id="explicit-vs-implicit" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 02 // STATISTICAL MANIFOLDS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          2. Explicit Knowledge vs. Implicit Structure
        </h2>

        <p>Consider a dataset containing sentences:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg space-y-2">
          <div>The cat sat on the mat.</div>
          <div>The dog chased the ball.</div>
          <div>The child ate the apple.</div>
        </div>

        <p>Nobody gives the model a grammar textbook.</p>

        <p>Nobody writes:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-line font-mono text-center text-sm text-accent">
          Noun + Verb + Object
        </div>

        <p>
          Yet a sufficiently capable language model can develop representations that reflect grammatical structure.
        </p>

        <p className="text-lg text-fg font-semibold">Why?</p>

        <p>
          Because grammar is already <strong className="text-accent">implicit in the data</strong>.
        </p>

        <p>
          The model is exposed to enormous numbers of examples in which words interact according to grammatical patterns.
        </p>

        <p>It doesn&apos;t need someone to explicitly say:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-line text-fg italic text-base">
          &ldquo;This is a noun.&rdquo;
        </blockquote>

        <p>
          The statistical structure of the data provides enough information for the model to discover useful internal representations.
        </p>

        <p className="text-fg">
          This is similar to how a child can hear thousands of sentences without receiving a formal lecture on syntax.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 03 // The Model Isn't Learning From Nothing */}
      {/* ------------------------------------------------------------------- */}
      <section id="not-learning-from-nothing" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 03 // INFORMATIONAL BOUNDARIES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          3. The Model Isn&apos;t Learning From Nothing
        </h2>

        <p>There is an important caveat here.</p>

        <p>When we say:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-line text-fg-soft italic text-base">
          &ldquo;The model learned something nobody taught it.&rdquo;
        </blockquote>

        <p>we shouldn&apos;t interpret that as:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-red-500/60 text-red-300 italic text-base">
          &ldquo;The model created completely new knowledge from nothing.&rdquo;
        </blockquote>

        <p>That isn&apos;t what is happening.</p>

        <p>Suppose we give a model:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg space-y-1">
          <div>A = 10</div>
          <div>B = 20</div>
          <div>C = 30</div>
        </div>

        <p>and it learns:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-accent/40 font-mono text-center text-sm sm:text-base text-accent">
          C = A + B
        </div>

        <p>Nobody explicitly taught it that equation.</p>

        <p>
          But the information required to infer the relationship was already present in the examples.
        </p>

        <p>
          The model discovered a <strong className="text-accent">relationship contained within the data</strong>.
        </p>

        <p className="text-fg font-semibold">This distinction is fundamental.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-[6px] bg-surface border border-accent/40 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The model CAN discover</span>
            </div>
            <ul className="space-y-1.5 text-sm text-fg font-mono">
              <li>• relationships</li>
              <li>• correlations</li>
              <li>• abstractions</li>
              <li>• representations</li>
              <li>• latent structure</li>
              <li>• patterns</li>
              <li>• combinations of existing information</li>
            </ul>
          </div>

          <div className="p-5 rounded-[6px] bg-surface border border-red-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>The model CANNOT do</span>
            </div>
            <p className="text-sm text-fg-soft leading-relaxed">
              It cannot simply invent factual information about the world without some source of information.
            </p>
            <p className="text-xs text-[#68747D] leading-relaxed">
              The training data, environment, feedback, architecture, or objective must provide some signal.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 04 // The Interesting Part: Emergent Representations */}
      {/* ------------------------------------------------------------------- */}
      <section id="emergent-representations" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 04 // HIERARCHICAL ABSTRACTIONS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          4. The Interesting Part: Emergent Representations
        </h2>

        <p>This becomes much more fascinating with neural networks.</p>

        <p>Imagine a neural network processing images.</p>

        <p>Early layers might learn representations related to:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-center text-fg space-y-1 max-w-sm mx-auto">
          <div>edges</div>
          <div className="text-accent">↓</div>
          <div>corners</div>
          <div className="text-accent">↓</div>
          <div>textures</div>
          <div className="text-accent">↓</div>
          <div>parts</div>
          <div className="text-accent">↓</div>
          <div className="text-accent font-semibold">objects</div>
        </div>

        <p>Nobody explicitly assigns these responsibilities.</p>

        <p>The network is simply optimizing its parameters.</p>

        <p>Yet useful hierarchical representations can emerge:</p>

        <div className="p-5 rounded-[6px] bg-[#0A0F14] border border-line font-mono text-xs sm:text-sm text-center text-fg-soft space-y-1.5 max-w-md mx-auto bl-tick-box">
          <div className="text-[#68747D]">Input Domain</div>
          <div className="text-fg">Pixels</div>
          <div className="text-accent">↓</div>
          <div className="text-fg">Edges</div>
          <div className="text-accent">↓</div>
          <div className="text-fg">Shapes</div>
          <div className="text-accent">↓</div>
          <div className="text-fg">Eyes / ears / fur</div>
          <div className="text-accent">↓</div>
          <div className="text-fg">Face</div>
          <div className="text-accent">↓</div>
          <div className="text-accent font-bold">Animal Classification</div>
        </div>

        <p>The network wasn&apos;t necessarily instructed:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-line text-fg italic text-base">
          &ldquo;First learn edges, then learn shapes, then learn faces.&rdquo;
        </blockquote>

        <p>
          The optimization process found representations that were useful for minimizing the training objective.
        </p>

        <p>This is one reason neural networks can feel surprisingly intelligent.</p>

        <p className="text-fg font-medium">
          Their internal organization can contain abstractions that were never directly specified by the programmer.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 05 // Self-Supervised Learning Makes This Even More Interesting */}
      {/* ------------------------------------------------------------------- */}
      <section id="self-supervised-learning" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 05 // NEXT-TOKEN PREDICTION DYNAMICS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          5. Self-Supervised Learning Makes This Even More Interesting
        </h2>

        <p>Modern large language models provide an even clearer example.</p>

        <p>Consider the task:</p>

        <div className="p-3.5 rounded-[4px] bg-surface border border-line font-mono text-sm sm:text-base text-fg">
          The capital of France is <span className="text-accent border-b border-accent pb-0.5">___</span>
        </div>

        <p>During training, the model might be asked to predict:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-accent/40 font-mono text-center text-sm sm:text-base text-accent font-semibold">
          Paris
        </div>

        <p>The training objective is incredibly simple:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-accent text-fg font-mono text-base bg-surface/40 py-2">
          Predict the next token.
        </blockquote>

        <p>Nobody necessarily creates a separate lesson called:</p>

        <div className="p-3 rounded-[4px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg-soft text-center">
          Lesson 17: European Geography
        </div>

        <p>Yet the model can develop knowledge about:</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-xs sm:text-sm">
          {[
            'geography',
            'grammar',
            'programming',
            'mathematics',
            'history',
            'semantic relationships',
            'syntax',
            'reasoning patterns',
          ].map((topic) => (
            <div
              key={topic}
              className="p-2.5 rounded-[4px] bg-surface border border-line text-center text-fg"
            >
              {topic}
            </div>
          ))}
        </div>

        <p>from a relatively general training objective.</p>

        <p className="text-lg text-fg font-semibold">Why?</p>

        <p>
          Because solving the prediction problem requires understanding statistical regularities in the data.
        </p>

        <p className="text-fg">
          If predicting the next word requires understanding a sentence&apos;s structure, then learning that structure becomes useful.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 06 // A Simple Example */}
      {/* ------------------------------------------------------------------- */}
      <section id="simple-example" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 06 // LATENT CO-OCCURRENCE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          6. A Simple Example
        </h2>

        <p>Imagine we train a model on:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg space-y-1">
          <div>John eats apples.</div>
          <div>John eats bananas.</div>
          <div>John eats oranges.</div>
          <div className="text-[#68747D] py-1">---</div>
          <div>Sarah eats apples.</div>
          <div>Sarah eats bananas.</div>
          <div>Sarah eats oranges.</div>
        </div>

        <p>Now suppose we ask:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-line font-mono text-sm text-fg">
          John eats <span className="text-accent">___</span>
        </div>

        <p>The model can predict:</p>

        <div className="p-3 rounded-[4px] bg-surface border border-accent/40 font-mono text-center text-xs sm:text-sm text-accent">
          apples | bananas | oranges
        </div>

        <p>But imagine the dataset becomes much larger:</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
          <div className="p-3 rounded-[4px] bg-surface border border-line space-y-1">
            <div className="text-accent font-semibold">// Action: Eats</div>
            <div>John eats apples.</div>
            <div>Sarah eats bananas.</div>
            <div>Tom eats oranges.</div>
          </div>
          <div className="p-3 rounded-[4px] bg-surface border border-line space-y-1">
            <div className="text-accent font-semibold">// Action: Buys</div>
            <div>John buys apples.</div>
            <div>Sarah buys bananas.</div>
            <div>Tom buys oranges.</div>
          </div>
          <div className="p-3 rounded-[4px] bg-surface border border-line space-y-1">
            <div className="text-accent font-semibold">// Action: Likes</div>
            <div>John likes apples.</div>
            <div>Sarah likes bananas.</div>
            <div>Tom likes oranges.</div>
          </div>
        </div>

        <p>Nobody explicitly tells the model:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-line font-mono text-xs sm:text-sm text-center text-fg space-y-1">
          <div>John → apples</div>
          <div>Sarah → bananas</div>
          <div>Tom → oranges</div>
        </div>

        <p>
          But the model can discover that association because it repeatedly appears in the data.
        </p>

        <p>The relationship wasn&apos;t explicitly labeled.</p>

        <p className="text-lg text-fg font-semibold">
          It was <span className="text-accent">latent in the examples</span>.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 07 // So Is the Model Actually "Understanding"? */}
      {/* ------------------------------------------------------------------- */}
      <section id="understanding-vs-correlation" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 07 // BEHAVIOR VS MECHANISM</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          7. So Is the Model Actually &ldquo;Understanding&rdquo;?
        </h2>

        <p>This is where things become philosophically interesting.</p>

        <p>Suppose a model learns that:</p>

        <div className="p-3 rounded-[4px] bg-surface border border-line font-mono text-center text-sm text-fg">
          A → B &emsp;and&emsp; B → C
        </div>

        <p>and then predicts:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-accent/40 font-mono text-center text-sm text-accent font-semibold">
          A → C
        </div>

        <p className="text-lg text-fg">Did it understand the relationship?</p>

        <p>There are several possible interpretations.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">
              Interpretation 01: Generalization
            </div>
            <p className="text-sm text-fg leading-relaxed">
              The model has learned a useful internal representation that allows it to generalize beyond the exact examples it saw.
            </p>
          </div>

          <div className="p-5 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-fg-soft uppercase tracking-wider">
              Interpretation 02: Statistical Fit
            </div>
            <p className="text-sm text-fg leading-relaxed">
              It has simply learned statistical correlations.
            </p>
          </div>
        </div>

        <p>The difficult part is determining where one ends and the other begins.</p>

        <p>
          A model can sometimes produce behavior that looks like reasoning without necessarily possessing the same kind of conceptual understanding humans have.
        </p>

        <p>Therefore, we should distinguish:</p>

        <div className="p-5 rounded-[6px] bg-[#0A0F14] border border-line text-center space-y-3 bl-tick-box">
          <div className="text-base sm:text-lg font-semibold text-accent">
            Behavioral capability
          </div>
          <div className="text-xs font-mono text-[#68747D]">vs</div>
          <div className="text-base sm:text-lg font-semibold text-fg">
            The internal mechanism producing that capability.
          </div>
        </div>

        <p>
          A model can demonstrate a capability without us fully understanding how that capability is represented internally.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 08 // The Model Can Combine Things Nobody Combined */}
      {/* ------------------------------------------------------------------- */}
      <section id="compositional-generalization" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 08 // COMPOSITIONAL GENERALIZATION</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          8. The Model Can Combine Things Nobody Combined
        </h2>

        <p>Here&apos;s an even more interesting phenomenon.</p>

        <p>Suppose a model has learned:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg space-y-1">
          <div>Dogs → animals</div>
          <div>Cars → vehicles</div>
          <div>Red → color</div>
        </div>

        <p>and it has seen:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-line font-mono text-xs sm:text-sm text-fg-soft space-y-1">
          <div>&ldquo;red car&rdquo;</div>
          <div>&ldquo;dog in a car&rdquo;</div>
        </div>

        <p>Now we ask:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-accent text-fg italic text-base">
          &ldquo;Describe a red dog driving a car.&rdquo;
        </blockquote>

        <p>Nobody necessarily showed it that exact sentence.</p>

        <p>Yet the model can combine previously learned concepts:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-accent/40 font-mono text-xs sm:text-sm text-center text-accent space-y-1 max-w-xs mx-auto">
          <div>red</div>
          <div>+</div>
          <div>dog</div>
          <div>+</div>
          <div>driving</div>
          <div>+</div>
          <div>car</div>
        </div>

        <p>into a new composition.</p>

        <div className="p-4 rounded-[6px] bg-surface border border-accent/40 bg-gradient-to-br from-accent/[0.06] to-transparent">
          <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
            Fundamental Concept
          </div>
          <p className="text-base sm:text-lg text-fg font-semibold leading-snug">
            This is called compositional generalization.
          </p>
        </div>

        <p>The model isn&apos;t necessarily learning an entirely new fact.</p>

        <p>
          Instead, it is recombining existing representations in a new configuration.
        </p>

        <p className="text-fg">
          And this is one of the most important ways models can produce outputs that weren&apos;t explicitly present in their training examples.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 09 // What About Truly New Knowledge? */}
      {/* ------------------------------------------------------------------- */}
      <section id="truly-new-knowledge" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 09 // THE INFORMATION HORIZON</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          9. What About Truly New Knowledge?
        </h2>

        <p>Now we reach the boundary.</p>

        <p>Suppose nobody has ever observed something.</p>
        <p>Nobody has written about it.</p>
        <p>It isn&apos;t present in the training data.</p>
        <p>No feedback contains information about it.</p>
        <p>And the model has no interaction with the environment that reveals it.</p>

        <p className="text-lg text-fg font-semibold">Can the model learn the fact?</p>

        <p className="text-2xl font-display font-bold text-red-400">No.</p>

        <p>For example, imagine a completely unknown physical phenomenon occurs tomorrow.</p>

        <p>If the model has:</p>

        <ul className="space-y-1.5 pl-4 border-l border-line font-mono text-xs sm:text-sm text-fg">
          <li>• never seen it,</li>
          <li>• never received measurements of it,</li>
          <li>• never interacted with it,</li>
          <li>• and has no information from which to infer it,</li>
        </ul>

        <p>then the model cannot simply learn the exact new fact.</p>

        <p className="text-fg font-medium">There has to be an information channel.</p>

        <ArticlePullQuote
          quote="A model cannot learn information without information, but it can discover structure within information that nobody explicitly encoded."
          attribution="Conservation of Information in Learning"
        />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 10 // Where Does the "New" Knowledge Come From? */}
      {/* ------------------------------------------------------------------- */}
      <section id="source-of-new-knowledge" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 10 // MANIFOLD GEOMETRY</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          10. Where Does the &ldquo;New&rdquo; Knowledge Come From?
        </h2>

        <p>We can think about learning as a transformation:</p>

        <div className="p-5 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-center text-fg space-y-1 max-w-sm mx-auto bl-tick-box">
          <div className="text-accent">Data</div>
          <div>↓</div>
          <div className="text-accent">Learning algorithm</div>
          <div>↓</div>
          <div className="text-accent">Parameters</div>
          <div>↓</div>
          <div className="text-accent">Internal representations</div>
          <div>↓</div>
          <div className="text-fg font-bold">Behavior</div>
        </div>

        <p>
          The surprising part is that the final representation doesn&apos;t have to resemble the way humans described the training data.
        </p>

        <p>Suppose the dataset contains millions of images.</p>

        <p>Humans might describe them using:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-line font-mono text-xs sm:text-sm text-center text-fg-soft">
          color · shape · object · location · label
        </div>

        <p>
          But the neural network may encode information in a completely different high-dimensional representation.
        </p>

        <p>A concept might not correspond to one neuron.</p>

        <p>Instead, information may be distributed across many dimensions.</p>

        <div className="p-6 rounded-[6px] bg-[#0A0F14] border border-line font-mono text-xs sm:text-sm text-center max-w-md mx-auto bl-tick-box">
          <div className="text-accent">neuron 1</div>
          <div className="text-[#68747D]">↑</div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-accent">neuron 2</span>
            <span className="text-[#68747D]">←</span>
            <span className="px-3 py-1 rounded bg-accent/15 border border-accent text-fg font-bold">
              concept
            </span>
            <span className="text-[#68747D]">→</span>
            <span className="text-accent">neuron 3</span>
          </div>
          <div className="text-[#68747D]">↓</div>
          <div className="text-accent">neuron 4</div>
        </div>

        <p>The representation is not necessarily human-readable.</p>

        <p className="text-fg">
          Yet it can still be extremely useful for prediction.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 11 // The Role of the Objective Function */}
      {/* ------------------------------------------------------------------- */}
      <section id="role-of-objective-function" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 11 // LOSS SURFACES & INDUCTIVE BIAS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          11. The Role of the Objective Function
        </h2>

        <p>There&apos;s another piece people often overlook:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-accent text-fg font-semibold text-base sm:text-lg">
          What the model is rewarded for matters enormously.
        </blockquote>

        <p>Imagine two models receiving exactly the same dataset.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">Model A</div>
            <div className="text-sm font-mono text-[#68747D]">Objective:</div>
            <div className="p-2.5 rounded bg-[#0A0F14] border border-line font-mono text-sm text-fg">
              Predict the next word.
            </div>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">Model B</div>
            <div className="text-sm font-mono text-[#68747D]">Objective:</div>
            <div className="p-2.5 rounded bg-[#0A0F14] border border-line font-mono text-sm text-fg">
              Classify whether an image contains a dog.
            </div>
          </div>
        </div>

        <p>They may discover completely different internal structures.</p>

        <p>The data provides the raw information.</p>

        <p className="text-fg font-medium">
          The objective determines <span className="text-accent">which structures are useful to discover</span>.
        </p>

        <p>This is why the learning process is not simply:</p>

        <div className="p-3 rounded-[4px] bg-surface border border-line font-mono text-xs sm:text-sm text-center text-fg-soft">
          Data → Knowledge
        </div>

        <p>It is closer to:</p>

        <div className="p-5 rounded-[6px] bg-[#0A0F14] border border-accent/40 font-mono text-xs sm:text-sm text-center text-fg space-y-1 max-w-sm mx-auto bl-tick-box">
          <div>Data</div>
          <div>+</div>
          <div>Objective</div>
          <div>+</div>
          <div>Architecture</div>
          <div>+</div>
          <div>Optimization</div>
          <div>+</div>
          <div>Inductive biases</div>
          <div className="text-accent font-bold">↓</div>
          <div className="text-accent font-bold">Learned representation</div>
        </div>

        <p>
          The architecture and training procedure influence what the model can discover efficiently.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 12 // This Is Why Scale Matters */}
      {/* ------------------------------------------------------------------- */}
      <section id="why-scale-matters" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 12 // SCALING DYNAMICS & EMERGENCE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          12. This Is Why Scale Matters
        </h2>

        <p>A small model might fail to discover a complicated relationship.</p>

        <p>A larger model trained on more diverse data might discover it.</p>

        <div className="p-5 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm space-y-3 max-w-md mx-auto">
          <div className="space-y-1">
            <div className="text-[#68747D]">Small model</div>
            <div className="text-accent">↓ simple correlations</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#68747D]">Larger model</div>
            <div className="text-accent">↓ more complex representations</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#68747D]">More data + larger model + better objective</div>
            <div className="text-accent font-semibold">↓ more sophisticated abstractions</div>
          </div>
        </div>

        <p>
          This is one reason researchers observe capabilities appearing as models become larger and training becomes more sophisticated.
        </p>

        <p>
          However, we should be careful with the word <strong className="text-fg">emergence</strong>.
        </p>

        <p>
          A capability appearing suddenly in evaluation does not necessarily mean the model suddenly acquired a completely new cognitive mechanism.
        </p>

        <p>
          Sometimes a smooth improvement crosses a threshold where the benchmark starts showing the capability clearly.
        </p>

        <div className="p-4 rounded-[6px] bg-surface border border-accent/40">
          <p className="text-base text-fg font-medium leading-relaxed">
            Observed emergence does not automatically tell us what happened internally.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 13 // A Model Can Discover a Shortcut Too */}
      {/* ------------------------------------------------------------------- */}
      <section id="shortcut-learning" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 13 // PATHOLOGY OF OPTIMIZATION</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          13. A Model Can Discover a Shortcut Too
        </h2>

        <p>There is also a darker side to this phenomenon.</p>

        <p>Suppose we want a model to distinguish:</p>

        <div className="p-3 rounded-[4px] bg-surface border border-line font-mono text-center text-sm text-fg">
          Wolf vs. Dog
        </div>

        <p>and most wolf photographs in the dataset happen to contain snow.</p>

        <p>The model might learn:</p>

        <div className="p-3 rounded-[4px] bg-[#0A0F14] border border-amber-500/40 font-mono text-center text-sm text-amber-300">
          snow → wolf
        </div>

        <p>instead of learning the actual visual differences between wolves and dogs.</p>

        <p>Nobody taught:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-line text-fg-soft italic text-base">
          &ldquo;Snow means wolf.&rdquo;
        </blockquote>

        <p>The model discovered the correlation itself.</p>

        <p className="text-red-400 font-medium">But the correlation is misleading.</p>

        <div className="p-4 rounded-[6px] bg-surface border border-amber-500/40 bg-gradient-to-br from-amber-500/[0.06] to-transparent">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
            Pathological Mode
          </div>
          <p className="text-base sm:text-lg text-fg font-semibold leading-snug">
            This is called shortcut learning.
          </p>
        </div>

        <p>So the ability to discover hidden structure is not automatically beneficial.</p>

        <p>The model doesn&apos;t inherently know which discovered pattern represents the &ldquo;right&rdquo; explanation.</p>

        <p>It optimizes the objective.</p>

        <p className="text-fg">
          If a shortcut works, the optimizer may happily use it.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 14 // This Changes How We Think About Machine Learning */}
      {/* ------------------------------------------------------------------- */}
      <section id="fundamental-shift" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 14 // PARADIGM SHIFT</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          14. This Changes How We Think About Machine Learning
        </h2>

        <p>Traditional programming looks like:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-center text-fg space-y-1 max-w-xs mx-auto">
          <div>Rules</div>
          <div>+</div>
          <div>Data</div>
          <div className="text-accent">↓</div>
          <div className="text-accent font-semibold">Output</div>
        </div>

        <p>Machine learning is closer to:</p>

        <div className="p-4 rounded-[6px] bg-[#0A0F14] border border-accent/40 font-mono text-xs sm:text-sm text-center text-fg space-y-1 max-w-xs mx-auto bl-tick-box">
          <div>Data</div>
          <div>+</div>
          <div>Objective</div>
          <div className="text-accent">↓</div>
          <div className="text-accent font-semibold">Learned rules / representations</div>
          <div className="text-accent">↓</div>
          <div className="text-fg font-bold">Output</div>
        </div>

        <p>The programmer specifies the learning setup.</p>

        <p>The model determines many of the internal representations.</p>

        <p className="text-fg font-semibold">That is the fundamental shift.</p>

        <p>Instead of explicitly programming:</p>

        <div className="p-4 rounded-[6px] bg-surface border border-line font-mono text-xs sm:text-sm text-fg space-y-1.5">
          <div><span className="text-accent">if</span> edge exists:</div>
          <div className="pl-4">detect shape</div>
          <div><span className="text-accent">if</span> shape exists:</div>
          <div className="pl-4">detect object</div>
        </div>

        <p>
          we provide examples and let optimization find useful parameter configurations.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 15 // The Strange Part: We Don't Always Know What It Learned */}
      {/* ------------------------------------------------------------------- */}
      <section id="interpretability" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 15 // MECHANISTIC INTERPRETABILITY</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          15. The Strange Part: We Don&apos;t Always Know What It Learned
        </h2>

        <p>Modern neural networks can contain billions of parameters.</p>

        <p>
          Even when a model performs a task correctly, determining exactly{' '}
          <strong className="text-fg">what representation it developed</strong> can be difficult.
        </p>

        <p>This is the motivation behind fields such as:</p>

        <div className="flex flex-wrap gap-2 my-2 font-mono text-xs sm:text-sm">
          <span className="px-3 py-1.5 rounded-[4px] bg-surface border border-accent/40 text-accent">
            Interpretability
          </span>
          <span className="px-3 py-1.5 rounded-[4px] bg-surface border border-accent/40 text-accent">
            Mechanistic Interpretability
          </span>
        </div>

        <p>Researchers attempt to identify:</p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4 font-mono text-xs text-fg">
          {['features', 'circuits', 'representations', 'attention patterns', 'neuron behaviors', 'computational pathways'].map((item) => (
            <li key={item} className="p-2 rounded bg-surface border border-line text-center">
              • {item}
            </li>
          ))}
        </ul>

        <p>inside neural networks.</p>

        <p>The goal is not simply:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-line text-fg-soft italic text-base">
          &ldquo;Does the model give the correct answer?&rdquo;
        </blockquote>

        <p>but:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-accent text-fg font-semibold italic text-base sm:text-lg">
          &ldquo;What computation happened inside the model to produce that answer?&rdquo;
        </blockquote>

        <p className="text-fg">That&apos;s a much harder question.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 16 // So, Can a Model Learn Something Nobody Taught It? */}
      {/* ------------------------------------------------------------------- */}
      <section id="four-modes-of-learning" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 16 // THE FOUR MODES OF DISCOVERY</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          16. So, Can a Model Learn Something Nobody Taught It?
        </h2>

        <p className="text-xl font-display font-semibold text-accent">Yes.</p>

        <p>
          But we need to be precise about what &ldquo;nobody taught it&rdquo; means.
        </p>

        <p>A model can learn:</p>

        <div className="space-y-4 my-6">
          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">
              Mode 1 // Something explicitly labeled
            </div>
            <div className="font-mono text-sm text-fg">Image → Cat</div>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">
              Mode 2 // Something implicitly present
            </div>
            <div className="font-mono text-xs sm:text-sm text-fg space-y-0.5">
              <div>Images</div>
              <div className="text-accent">↓ visual regularities</div>
              <div className="text-accent">↓ ears / fur / shape</div>
              <div className="text-accent font-semibold">↓ cat representation</div>
            </div>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">
              Mode 3 // Something composed from existing knowledge
            </div>
            <div className="font-mono text-xs sm:text-sm text-fg space-y-0.5">
              <div>Concept A + Concept B</div>
              <div className="text-accent font-semibold">↓ new combination</div>
            </div>
          </div>

          <div className="p-4 rounded-[6px] bg-surface border border-line space-y-2">
            <div className="text-xs font-mono text-accent uppercase tracking-wider">
              Mode 4 // Something inferred from relationships
            </div>
            <div className="font-mono text-xs sm:text-sm text-fg space-y-0.5">
              <div>A → B</div>
              <div>B → C</div>
              <div className="text-accent font-semibold">↓ A → C</div>
            </div>
          </div>
        </div>

        <p className="text-fg">
          But it cannot obtain arbitrary information that has no informational basis in its data, environment, feedback, or prior structure.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 17 // The Bigger Question */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-bigger-question" className="space-y-6 pt-6 border-t border-line/60">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 bg-accent" />
          <span>SECTION 17 // THE HORIZON OF LEARNING</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          17. The Bigger Question
        </h2>

        <p>And this leads to a much deeper question:</p>

        <p>If we give a sufficiently capable learning system:</p>

        <ul className="space-y-1.5 pl-4 border-l border-line font-mono text-sm text-fg">
          <li>• enough data,</li>
          <li>• a suitable objective,</li>
          <li>• sufficient computational capacity,</li>
          <li>• and an architecture capable of representing complex relationships,</li>
        </ul>

        <div className="p-5 rounded-[6px] bg-surface border border-accent/40 bg-gradient-to-br from-accent/[0.08] to-transparent">
          <p className="text-lg sm:text-xl font-display font-semibold text-fg leading-snug">
            How much structure can it discover without us explicitly specifying that structure?
          </p>
        </div>

        <p>That question sits at the heart of modern AI research.</p>

        <p>
          Because perhaps the most interesting property of a learning system isn&apos;t that it can memorize what we show it.
        </p>

        <p className="text-lg text-fg">It&apos;s that:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-accent text-fg font-semibold text-lg sm:text-xl bg-surface/50 py-3 pr-4 rounded-r-[4px]">
          We can specify the problem without specifying the complete solution.
        </blockquote>

        <p>We define the objective.</p>
        <p>We provide the information.</p>
        <p>We construct the learning machinery.</p>

        <p>
          And optimization searches through an enormous space of possible representations until it finds configurations that work.
        </p>

        <p>
          The resulting model may contain patterns that{' '}
          <strong className="text-fg">
            no human explicitly programmed and nobody explicitly labeled.
          </strong>
        </p>

        <p>That doesn&apos;t mean the model learned from nothing.</p>

        <p>It means something more subtle happened:</p>

        <div className="p-5 rounded-[6px] bg-[#0A0F14] border border-accent/40 bl-tick-box">
          <p className="text-lg sm:text-xl font-display font-medium text-fg leading-relaxed">
            The knowledge was <span className="text-accent font-semibold">implicit in the information</span>, while the structure was <span className="text-accent font-semibold">discovered by the learning process</span>.
          </p>
        </div>

        <p className="text-fg">
          And that may be one of the most important ideas behind modern machine learning.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* One-Sentence Takeaway */}
      {/* ------------------------------------------------------------------- */}
      <section id="one-sentence-takeaway" className="space-y-6 pt-6 border-t-2 border-accent/40">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <Sparkles className="w-4 h-4" />
          <span>EDITORIAL SYNTHESIS // THE TAKEAWAY</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg tracking-tight">
          The One-Sentence Takeaway
        </h2>

        <div className="p-6 sm:p-8 rounded-[8px] bg-surface border border-accent bg-gradient-to-br from-accent/[0.12] via-transparent to-transparent shadow-xl">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-display font-medium text-fg leading-relaxed">
            &ldquo;A model cannot learn information from nothing, but it can discover relationships, representations, abstractions, and combinations that nobody explicitly taught it — as long as the information needed to infer them exists somewhere in its learning process.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* ByteLogic Editorial Signature */}
      {/* ------------------------------------------------------------------- */}
      <ByteLogicSignatureBlock
        articleCode="ARTICLE 005"
        articleRef="BL-ART-005"
        statementHeading={
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-fg leading-snug tracking-tight">
            Learning is not mere transcription.
            <br />
            <span className="text-accent">
              It is the compression and discovery of implicit structure.
            </span>
          </h2>
        }
        statementDescription={
          <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
            By shifting from explicit rule formulation to high-dimensional loss minimization, we allow neural networks to crystallize abstractions that no programmer ever needed to dictate.
          </p>
        }
      />
    </div>
  );
};
