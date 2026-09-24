'use client';

import React from 'react';
import { ArticlePullQuote } from './ArticlePullQuote';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';
import { CodeBlock } from '@/components/bytelogic/ui/CodeBlock';
import { ByteLogicSignatureBlock } from './ByteLogicSignatureBlock';

export const ModelLearningArticleContent: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 text-base sm:text-lg leading-relaxed text-[#A8B3BA] font-sans">
      {/* ------------------------------------------------------------------- */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------- */}
      <section id="introduction" className="space-y-6 pt-4">
        <p className="text-lg sm:text-xl font-sans text-[#F3F6F7] leading-relaxed">
          We say it constantly:
        </p>

        <div className="space-y-3 pl-1">
          <blockquote className="my-2 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] italic bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
            &ldquo;The model learned the pattern.&rdquo;
          </blockquote>

          <blockquote className="my-2 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] italic bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
            &ldquo;The neural network learned to recognize cats.&rdquo;
          </blockquote>

          <blockquote className="my-2 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] italic bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
            &ldquo;The model learned language.&rdquo;
          </blockquote>
        </div>

        <p>
          But what does <em className="text-[#F3F6F7] not-italic font-medium">learn</em> actually mean here?
        </p>

        <p>
          A model doesn&apos;t sit down and study examples the way a human does. It doesn&apos;t read a dataset and store a list of facts somewhere in its brain.
        </p>

        <p>Something much more mechanical happens.</p>

        <p className="text-xl sm:text-2xl font-display font-semibold text-[#F3F6F7]">
          Numbers change.
        </p>

        <p>
          And somehow, those changing numbers can produce remarkably useful behavior.
        </p>

        <p>So let&apos;s take a step back and ask a deceptively simple question:</p>

        <ArticlePullQuote
          quote="What does a machine-learning model actually learn?"
          attribution="Foundational Inquiry"
        />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 01 // A Model Starts With Almost Nothing */}
      {/* ------------------------------------------------------------------- */}
      <section id="a-model-starts-with-almost-nothing" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          1. A Model Starts With Almost Nothing
        </h2>

        <p>Consider a simple model that predicts house prices.</p>

        <p>We give it information such as:</p>

        <ul className="space-y-1.5 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• area</li>
          <li>• number of bedrooms</li>
          <li>• location</li>
          <li>• age of the house</li>
        </ul>

        <p>and ask it to predict:</p>

        <EquationBlock math="\hat{y} = f(x)" />

        <p>Initially, the model&apos;s parameters are usually not useful.</p>

        <p>For a linear model:</p>

        <EquationBlock math="\hat{y} = w_1x_1+w_2x_2+\cdots+w_nx_n+b" />

        <p>
          the weights <EquationBlock math="w" inline /> and bias <EquationBlock math="b" inline /> might begin as small random values.
        </p>

        <p>The model therefore starts with a particular mathematical behavior.</p>

        <p>Then we show it an example:</p>

        <div className="p-3.5 sm:p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] font-mono text-center text-sm sm:text-base text-[#F3F6F7]">
          <strong className="text-[#019AA2]">2000 sq ft</strong> → <strong className="text-[#019AA2]">₹80 lakh</strong>
        </div>

        <p>The model predicts something else.</p>

        <p>Maybe ₹43 lakh.</p>

        <p>There is an error.</p>

        <p>
          That error is converted into a numerical signal, and the parameters are adjusted so that the model becomes slightly better at producing the desired output.
        </p>

        <p>Then another example.</p>

        <p>And another.</p>

        <p>And another.</p>

        <p>
          Millions of parameter updates later, the model behaves very differently from where it started.
        </p>

        <p className="text-lg sm:text-xl font-display font-semibold text-[#F3F6F7]">
          That change is what we call <strong className="text-[#019AA2]">learning</strong>.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 02 // Learning Is Not the Same as Memorizing */}
      {/* ------------------------------------------------------------------- */}
      <section id="learning-is-not-the-same-as-memorizing" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          2. Learning Is Not the Same as Memorizing
        </h2>

        <p>This distinction is extremely important.</p>

        <p>Suppose we train a model to distinguish cats from dogs.</p>

        <p>It sees:</p>

        <CodeBlock
          code={`Image 1 → Cat
Image 2 → Dog
Image 3 → Cat
Image 4 → Dog
...`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>What do we want it to learn?</p>

        <p>Not:</p>

        <CodeBlock
          code={`Image 1 = Cat
Image 2 = Dog
Image 3 = Cat`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>That would just be memorization.</p>

        <p>
          We want it to discover some structure that allows it to make predictions about images it has <strong className="text-[#F3F6F7]">never seen before</strong>.
        </p>

        <p>Perhaps it learns representations related to:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• edges</li>
          <li>• textures</li>
          <li>• shapes</li>
          <li>• spatial arrangements</li>
          <li>• ears</li>
          <li>• eyes</li>
          <li>• fur patterns</li>
          <li>• overall structure</li>
        </ul>

        <p>But there is an important catch.</p>

        <p>We cannot simply open the model and point to one parameter and say:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] italic bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;This parameter represents a cat.&rdquo;
        </blockquote>

        <p>The knowledge is distributed.</p>

        <p>
          The model&apos;s behavior emerges from interactions between many parameters and representations.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 03 // So What Is Actually Changing? */}
      {/* ------------------------------------------------------------------- */}
      <section id="so-what-is-actually-changing" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          3. So What Is Actually Changing?
        </h2>

        <p>Let&apos;s look inside a neural network.</p>

        <p>A simplified layer can be represented as:</p>

        <EquationBlock math="z = Wx+b" />

        <p>followed by some nonlinear transformation:</p>

        <EquationBlock math="a = \sigma(z)" />

        <p>
          During training, the model changes <EquationBlock math="W" inline /> and <EquationBlock math="b" inline />.
        </p>

        <p>That&apos;s it.</p>

        <p>There isn&apos;t a tiny database inside the network containing:</p>

        <CodeBlock
          code={`cat → animal
Paris → France
2 + 2 → 4`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>
          Instead, information becomes encoded into numerical parameters and the relationships between them.
        </p>

        <p>
          The model gradually develops a mathematical transformation that maps inputs to useful outputs.
        </p>

        <p>So when we say:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] font-semibold bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;The model learned cats.&rdquo;
        </blockquote>

        <p>a more precise statement would be:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] font-semibold bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;The optimization process changed the model&apos;s parameters so that its internal representations and output behavior became useful for distinguishing patterns associated with cats.&rdquo;
        </blockquote>

        <p>Less catchy.</p>

        <p className="text-[#F3F6F7] font-medium">Much more accurate.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 04 // The Loss Function Defines What “Learning” Means */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-loss-function-defines-what-learning-means" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          4. The Loss Function Defines What “Learning” Means
        </h2>

        <p>Here&apos;s one of the deepest ideas in machine learning:</p>

        <p className="text-xl sm:text-2xl font-display font-bold text-[#F3F6F7]">
          A model doesn&apos;t decide what to learn.
        </p>

        <p>The training objective determines what behavior gets rewarded.</p>

        <p>Suppose we&apos;re training a model to predict house prices.</p>

        <p>We could use mean squared error:</p>

        <EquationBlock math="L = \frac{1}{n}\sum_{i=1}^{n}(y_i-\hat{y}_i)^2" />

        <p>The model doesn&apos;t understand that houses are physical objects.</p>

        <p>It doesn&apos;t understand money.</p>

        <p>It doesn&apos;t understand real estate.</p>

        <p>It only receives a numerical signal telling it:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] italic bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;Your prediction was this far from the target.&rdquo;
        </blockquote>

        <p>Optimization then tries to reduce that number.</p>

        <p>
          This means that what a model learns is deeply connected to the <strong className="text-[#F3F6F7]">objective we give it</strong>.
        </p>

        <p>Change the objective, and you can change what the model considers useful.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 05 // Gradient Descent: How Learning Happens */}
      {/* ------------------------------------------------------------------- */}
      <section id="gradient-descent-how-learning-happens" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          5. Gradient Descent: How Learning Happens
        </h2>

        <p>Suppose the model has parameters:</p>

        <EquationBlock math="\theta" />

        <p>and a loss function:</p>

        <EquationBlock math="L(\theta)" />

        <p>Training repeatedly updates the parameters:</p>

        <EquationBlock math="\theta \leftarrow \theta-\eta\nabla_\theta L" />

        <p>where:</p>

        <ul className="space-y-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• <EquationBlock math="\theta" inline /> = model parameters</li>
          <li>• <EquationBlock math="\eta" inline /> = learning rate</li>
          <li>• <EquationBlock math="\nabla_\theta L" inline /> = gradient of the loss with respect to the parameters</li>
        </ul>

        <p>The gradient tells us approximately:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] font-semibold bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;If you change this parameter in this direction, the loss will increase or decrease.&rdquo;
        </blockquote>

        <p>
          The optimizer uses that information to move the parameters toward regions producing lower loss.
        </p>

        <p>Repeat this enough times and the model&apos;s behavior changes.</p>

        <p className="text-lg sm:text-xl font-display font-semibold text-[#F3F6F7]">
          That is the machinery underneath the word <strong className="text-[#019AA2]">learning</strong>.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 06 // But Where Does the Knowledge Go? */}
      {/* ------------------------------------------------------------------- */}
      <section id="but-where-does-the-knowledge-go" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          6. But Where Does the Knowledge Go?
        </h2>

        <p>This is where things become interesting.</p>

        <p>Imagine a large language model.</p>

        <p>It processes enormous amounts of text.</p>

        <p>After training, we might ask:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-[#1C2830] text-[#F3F6F7] italic">
          &ldquo;What is the capital of France?&rdquo;
        </blockquote>

        <p>and it can produce:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-[#019AA2] text-[#019AA2] font-semibold">
          Paris.
        </blockquote>

        <p>Where is &ldquo;Paris&rdquo; stored?</p>

        <p>Not necessarily in one location.</p>

        <p>
          The information is encoded across a huge collection of parameters and internal representations.
        </p>

        <p>
          A useful mental model is to think of the network as constructing a complicated <strong className="text-[#F3F6F7]">energy landscape</strong>.
        </p>

        <p>Different parameter configurations produce different behaviors.</p>

        <p>Training reshapes that landscape.</p>

        <p>
          Patterns that repeatedly help minimize the objective become embedded into the model&apos;s numerical structure.
        </p>

        <p>The model isn&apos;t necessarily storing a sentence.</p>

        <p>
          It is learning a transformation that makes certain outputs more likely given certain inputs.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 07 // Models Learn Relationships */}
      {/* ------------------------------------------------------------------- */}
      <section id="models-learn-relationships" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          7. Models Learn Relationships
        </h2>

        <p>This becomes especially visible in language models.</p>

        <p>Consider:</p>

        <CodeBlock
          code="The cat sat on the ___."
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>A model might assign high probability to:</p>

        <CodeBlock
          code={`mat
floor
chair
...`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>What has it learned?</p>

        <p>Not simply:</p>

        <CodeBlock
          code="cat → mat"
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>It has learned statistical relationships among many pieces of language.</p>

        <p>Words interact with:</p>

        <ul className="space-y-1.5 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• surrounding words</li>
          <li>• syntax</li>
          <li>• semantics</li>
          <li>• context</li>
          <li>• writing patterns</li>
          <li>• concepts</li>
          <li>• other learned representations</li>
        </ul>

        <p>The model therefore develops a high-dimensional representation of relationships.</p>

        <p>
          This is one reason modern models can produce behavior that wasn&apos;t explicitly programmed.
        </p>

        <p>The rules were not individually written.</p>

        <p>They emerged from optimization over enormous numbers of examples.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 08 // Features Are Not Always Human-Readable */}
      {/* ------------------------------------------------------------------- */}
      <section id="features-are-not-always-human-readable" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          8. Features Are Not Always Human-Readable
        </h2>

        <p>Here&apos;s another surprising part.</p>

        <p>We often imagine a neural network like this:</p>

        <CodeBlock
          code={`Neuron 1 → detects ears
Neuron 2 → detects eyes
Neuron 3 → detects fur
Neuron 4 → detects cats`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>Reality is usually much messier.</p>

        <p>Representations can be:</p>

        <ul className="space-y-1.5 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• distributed</li>
          <li>• overlapping</li>
          <li>• hierarchical</li>
          <li>• context-dependent</li>
          <li>• highly entangled</li>
        </ul>

        <p>A single feature may participate in many behaviors.</p>

        <p>A single concept may also be represented across many dimensions.</p>

        <p>This makes neural networks difficult to interpret.</p>

        <p>We can inspect the numbers.</p>

        <p>
          But understanding what those numbers <em className="text-[#F3F6F7] not-italic font-medium">mean</em> can be much harder.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 09 // Learning Happens at Different Levels */}
      {/* ------------------------------------------------------------------- */}
      <section id="learning-happens-at-different-levels" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          9. Learning Happens at Different Levels
        </h2>

        <p>A model can learn increasingly abstract structure.</p>

        <p>Imagine a vision model.</p>

        <p>Early layers might become sensitive to relatively simple visual patterns:</p>

        <CodeBlock
          code={`edges
↓
textures
↓
shapes
↓
parts
↓
objects`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>
          The exact interpretation depends on the architecture and training setup, but the general idea is powerful:
        </p>

        <ArticlePullQuote
          quote="useful representations can be built on top of other representations."
          attribution="Representational Hierarchy Principle"
        />

        <p>Language models exhibit their own hierarchy of representations.</p>

        <p>They may capture patterns involving:</p>

        <CodeBlock
          code={`characters / tokens
        ↓
local patterns
        ↓
syntax
        ↓
semantic relationships
        ↓
longer-range structure
        ↓
task-relevant representations`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>
          The model isn&apos;t necessarily explicitly constructing these concepts one by one.
        </p>

        <p>They emerge as useful internal structure under the training objective.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 10 // The Dataset Shapes the Mind of the Model */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-dataset-shapes-the-mind-of-the-model" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          10. The Dataset Shapes the Mind of the Model
        </h2>

        <p>
          If parameters are the model&apos;s machinery, the dataset is one of the strongest forces shaping what that machinery becomes.
        </p>

        <p>Consider two models with identical architectures.</p>

        <p>Train one on:</p>

        <CodeBlock
          code="scientific papers"
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>and another on:</p>

        <CodeBlock
          code="movie scripts"
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>
          Even with the same architecture, they will develop different statistical structures.
        </p>

        <p>The training distribution matters.</p>

        <p>So does:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• data quality</li>
          <li>• data quantity</li>
          <li>• labels</li>
          <li>• preprocessing</li>
          <li>• sampling</li>
          <li>• augmentation</li>
          <li>• objective</li>
          <li>• optimization</li>
          <li>• architecture</li>
        </ul>

        <p>
          A model can only learn patterns that are sufficiently represented in the information and training signal available to it.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 11 // A Model Can Learn the Wrong Thing */}
      {/* ------------------------------------------------------------------- */}
      <section id="a-model-can-learn-the-wrong-thing" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          11. A Model Can Learn the Wrong Thing
        </h2>

        <p>This is where machine learning becomes dangerous—and fascinating.</p>

        <p>Suppose we want a model to detect wolves.</p>

        <p>Our dataset contains:</p>

        <CodeBlock
          code={`Wolf → snowy background
Wolf → snowy background
Wolf → snowy background
Wolf → snowy background

Dog → grass
Dog → grass
Dog → grass
Dog → grass`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>The model might discover:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-[#f59e0b] text-[#f59e0b] font-mono text-base sm:text-lg">
          Snow → Wolf
        </blockquote>

        <p>instead of:</p>

        <blockquote className="my-2 pl-4 border-l-2 border-[#019AA2] text-[#019AA2] font-mono text-base sm:text-lg">
          Wolf → Wolf
        </blockquote>

        <p>It achieved a useful training objective by exploiting a shortcut.</p>

        <p>From the model&apos;s perspective, there was no mistake.</p>

        <p>The dataset allowed the shortcut.</p>

        <p>
          This phenomenon is often called <strong className="text-[#F3F6F7]">spurious correlation</strong>.
        </p>

        <p>
          The model learns whatever statistical structure helps satisfy its objective—not necessarily the concept we intended.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 12 // Then What Does “Understanding” Mean? */}
      {/* ------------------------------------------------------------------- */}
      <section id="then-what-does-understanding-mean" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          12. Then What Does “Understanding” Mean?
        </h2>

        <p>This is where terminology gets philosophical.</p>

        <p>
          If a model can translate a sentence, write code, solve equations, or describe an image, does it <strong className="text-[#F3F6F7]">understand</strong> those things?
        </p>

        <p>There isn&apos;t a single universally accepted answer.</p>

        <p>From an engineering perspective, we can make a narrower statement:</p>

        <p>
          A model has learned an internal computational structure that allows it to perform certain tasks and generalize to some previously unseen inputs.
        </p>

        <p>
          Whether that deserves the word <em className="text-[#F3F6F7] not-italic font-medium">understanding</em> depends on what definition of understanding we choose.
        </p>

        <p>And that&apos;s an important distinction.</p>

        <div className="space-y-2 pt-2">
          <p className="text-xl sm:text-2xl font-display font-bold text-[#F3F6F7]">
            Capability is measurable.
          </p>

          <p className="text-xl sm:text-2xl font-display font-bold text-[#019AA2]">
            Interpretation is harder.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 13 // Generalization Is the Real Test */}
      {/* ------------------------------------------------------------------- */}
      <section id="generalization-is-the-real-test" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          13. Generalization Is the Real Test
        </h2>

        <p>Suppose we train a model on:</p>

        <CodeBlock
          code={`2 + 2 = 4
3 + 3 = 6
4 + 4 = 8
...`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>If we ask:</p>

        <CodeBlock
          code="7 + 7 = ?"
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>and it answers correctly, something useful has happened.</p>

        <p>
          The model has produced a correct output for an example that wasn&apos;t necessarily present during training.
        </p>

        <p>
          That&apos;s <strong className="text-[#F3F6F7]">generalization</strong>.
        </p>

        <p>But generalization has limits.</p>

        <p>
          A model can perform brilliantly on familiar distributions and fail dramatically when the distribution changes.
        </p>

        <p>This is why:</p>

        <blockquote className="my-3 pl-4 border-l-2 border-[#019AA2] text-[#F3F6F7] font-semibold bg-[#0E151B]/40 py-2.5 pr-4 rounded-r-[4px] text-base sm:text-lg">
          &ldquo;Low training error does not automatically mean useful learning.&rdquo;
        </blockquote>

        <p>A model can memorize.</p>

        <p>A model can exploit shortcuts.</p>

        <p>A model can overfit.</p>

        <p>A model can learn representations that work only within a narrow distribution.</p>

        <p>Learning therefore isn&apos;t simply:</p>

        <EquationBlock math="\text{training error} \downarrow" />

        <p>The deeper goal is:</p>

        <EquationBlock math="\text{useful behavior on unseen data}" />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 14 // The Strange Part: We Don't Program the Final Behavior */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-strange-part-we-dont-program-the-final-behavior" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          14. The Strange Part: We Don&apos;t Program the Final Behavior
        </h2>

        <p>Traditional software often looks like:</p>

        <CodeBlock
          code={`if condition:
    do X
else:
    do Y`}
          language="python"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>Machine learning reverses much of this process.</p>

        <p>Instead of explicitly writing every rule, we specify:</p>

        <CodeBlock
          code={`data
+
objective
+
optimization`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>and allow the model to discover parameters that produce useful behavior.</p>

        <p>
          We specify the <strong className="text-[#F3F6F7]">learning process</strong>.
        </p>

        <p>The final internal representation is largely discovered through optimization.</p>

        <p>This is one of the fundamental shifts from traditional programming to machine learning.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 15 // So What Does a Model Actually Learn? */}
      {/* ------------------------------------------------------------------- */}
      <section id="so-what-does-a-model-actually-learn" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          15. So What Does a Model Actually Learn?
        </h2>

        <p>We can now answer the original question.</p>

        <p>
          A machine-learning model learns <strong className="text-[#F3F6F7]">parameters and internal representations that encode statistical structure useful for minimizing its training objective</strong>.
        </p>

        <p>Those structures can correspond to things such as:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>• correlations</li>
          <li>• features</li>
          <li>• relationships</li>
          <li>• transformations</li>
          <li>• patterns</li>
          <li>• representations</li>
          <li>• decision boundaries</li>
          <li>• hierarchical structure</li>
        </ul>

        <p>But the model does not necessarily learn the human concept we intended.</p>

        <p>It learns what the combination of:</p>

        <EquationBlock
          math="\boxed{
\begin{gathered}
\text{Data} \\
+ \\
\text{Objective} \\
+ \\
\text{Architecture} \\
+ \\
\text{Optimization}
\end{gathered}
}"
        />

        <p>makes useful.</p>

        <p>And that distinction explains a huge amount of modern machine learning.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 16 // The Most Important Mental Model */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-most-important-mental-model" className="space-y-6 pt-6 border-t border-[#1C2830]/60">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          16. The Most Important Mental Model
        </h2>

        <p>Perhaps the best way to think about learning is this:</p>

        <ArticlePullQuote
          quote="Training doesn't put answers into a model. It changes the model so that certain answers become easier for it to produce."
          attribution="The Core ByteLogic Mental Model"
        />

        <p>That is a subtle difference.</p>

        <p>A trained model isn&apos;t simply a database of everything it has seen.</p>

        <p>It is a transformed computational system.</p>

        <p>The training process takes:</p>

        <CodeBlock
          code={`initial parameters
        ↓
examples
        ↓
predictions
        ↓
error
        ↓
gradients
        ↓
parameter updates
        ↓
new representations
        ↓
new behavior`}
          language="text"
          showHeader={false}
          showLineNumbers={false}
        />

        <p>Repeat this enormous numbers of times.</p>

        <p>Eventually, something interesting emerges:</p>

        <p className="text-lg sm:text-xl font-display font-semibold text-[#F3F6F7]">
          the model becomes capable of doing things it couldn&apos;t reliably do before.
        </p>

        <p>We call that learning.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* The Bigger Question */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-bigger-question" className="space-y-6 pt-8 border-t-2 border-[#019AA2]/40">
        <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="font-semibold tracking-wider uppercase">SYNTHESIS // THE HORIZON</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Bigger Question
        </h2>

        <p className="text-lg sm:text-xl text-[#F3F6F7] leading-relaxed">
          And this leaves us with an even more interesting question:
        </p>

        <p>
          If learning is the process of reshaping an internal mathematical system until it captures useful structure from data...
        </p>

        <blockquote className="my-6 py-6 px-6 sm:px-8 border-l-2 border-[#019AA2] bg-gradient-to-r from-[#019AA2]/[0.08] to-transparent rounded-r-[6px]">
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#F3F6F7] leading-snug tracking-tight">
            how much of the structure we call &ldquo;intelligence&rdquo; can emerge from that process alone?
          </p>
        </blockquote>

        <p>That&apos;s a much harder question.</p>

        <p className="text-lg sm:text-xl font-display text-[#A8B3BA] pt-2">
          And perhaps that&apos;s where machine learning stops being just about models—and starts becoming a question about intelligence itself.
        </p>

        {/* Editorial Signature Block */}
        <ByteLogicSignatureBlock
          articleCode="ARTICLE 003"
          articleRef="BL-ART-003"
          statementHeading={
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#F3F6F7] leading-snug tracking-tight">
              Training doesn&apos;t put answers into a model.
              <br />
              <span className="text-[#019AA2]">
                It changes the model so that certain answers become easier for it to produce.
              </span>
            </h2>
          }
          statementDescription={
            <p className="text-sm sm:text-base text-[#A8B3BA] font-sans leading-relaxed pt-2 max-w-xl mx-auto">
              If intelligence emerges from optimization over statistical structure, where does the boundary between mechanical pattern matching and genuine understanding lie? Explore foundational ML proofs and interactive computational simulations across ByteLogic.
            </p>
          }
        />
      </section>
    </div>
  );
};
