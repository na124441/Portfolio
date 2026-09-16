'use client';

import React from 'react';
import { ArticlePullQuote } from './ArticlePullQuote';
import { ArticleMathCallout } from './ArticleMathCallout';
import { ByteLogicSignatureBlock } from './ByteLogicSignatureBlock';
import { Visual01DiminishingReturns } from './visuals/Visual01DiminishingReturns';
import { Visual02DatasetVsInformation } from './visuals/Visual02DatasetVsInformation';
import { Visual03Redundancy } from './visuals/Visual03Redundancy';
import { Visual04MissingRegions } from './visuals/Visual04MissingRegions';
import { Visual05DataQuality } from './visuals/Visual05DataQuality';
import { Visual06ModelBottleneck } from './visuals/Visual06ModelBottleneck';
import { Visual07TargetedCollection } from './visuals/Visual07TargetedCollection';
import { Visual08QuantityVsCoverage } from './visuals/Visual08QuantityVsCoverage';
import { Visual09InformationFunnel } from './visuals/Visual09InformationFunnel';

export const ArticleContent: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 text-base sm:text-lg leading-relaxed text-[#A8B3BA] font-sans">
      {/* ------------------------------------------------------------------- */}
      {/* 01 // Introduction & The First Few Examples Matter a Lot */}
      {/* ------------------------------------------------------------------- */}
      <section id="the-first-few-examples-matter-a-lot" className="space-y-6 pt-4">
        <p className="text-lg sm:text-xl font-sans text-[#F3F6F7] leading-relaxed">
          We have been taught a remarkably simple idea about data:
        </p>

        <p className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          More data is better.
        </p>

        <p>
          If 100 examples help a model learn, then 1,000 should help more. If 1,000 help, then 100,000 should help even more.
        </p>

        <p>It sounds almost unavoidable.</p>

        <p>And, to a point, it is true.</p>

        <p>
          Give a model too little data and it may struggle to discover the patterns hidden inside it. Give it more representative examples and its performance can improve dramatically.
        </p>

        <p className="font-medium text-[#F3F6F7]">
          But eventually, something strange can happen.
        </p>

        {/* Visual 01 placed immediately after "something strange can happen" */}
        <Visual01DiminishingReturns />

        <ul className="space-y-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>You keep adding data.</li>
          <li>The dataset becomes larger.</li>
          <li>The training process becomes more expensive.</li>
          <li>The storage requirements increase.</li>
        </ul>

        <p>And yet the model barely gets better.</p>

        <p>Sometimes, under the wrong conditions, it can even get worse.</p>

        <p className="text-xl sm:text-2xl font-display font-semibold text-[#F3F6F7] pt-2">
          So what happened?
        </p>

        <p>The answer begins with a distinction that is easy to overlook:</p>

        <ArticlePullQuote
          quote="More data is not necessarily more information."
          attribution="ByteLogic Foundational Principle"
        />

        <div className="pt-6 border-t border-[#1C2830]/60 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
            The First Few Examples Matter a Lot
          </h2>

          <p>Imagine teaching a system to recognize cats.</p>

          <p>Suppose it initially sees only 20 photographs.</p>

          <p>
            There are cats sitting, standing, lying down, looking left, looking right. The system has very little evidence about what separates a cat from everything else.
          </p>

          <p>Now increase the dataset to 1,000 photographs.</p>

          <p>Suddenly, the system encounters many more:</p>

          <ul className="grid grid-cols-2 gap-2 pl-4 font-mono text-xs sm:text-sm text-[#F3F6F7]">
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> poses
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> backgrounds
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> lighting conditions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> breeds
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> camera angles
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> sizes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#019AA2]">▸</span> environments
            </li>
          </ul>

          <p>There is a lot more to learn.</p>

          <p>
            Increasing the dataset again—from 1,000 to 10,000—may still provide substantial improvement.
          </p>

          <p>But eventually, the improvement starts to slow.</p>

          <p>Notice what happened.</p>

          <p>The curve didn&apos;t necessarily stop increasing. It simply became flatter.</p>

          <p>Each additional amount of data contributed less than the previous amount.</p>

          <p>
            This is the basic intuition behind <strong className="text-[#F3F6F7]">diminishing returns</strong>.
          </p>

          <p className="font-semibold text-[#F3F6F7]">But why does it happen?</p>

          {/* Mathematical Callout */}
          <ArticleMathCallout />
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 02 // A Dataset Can Become Larger Without Becoming More Informative */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="a-dataset-can-become-larger-without-becoming-more-informative"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          A Dataset Can Become Larger Without Becoming More Informative
        </h2>

        <p>Consider two datasets.</p>

        {/* Code representation of Dataset A */}
        <div className="p-4 sm:p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] font-mono text-xs sm:text-sm text-[#F3F6F7] space-y-1">
          <div className="text-[11px] text-[#019AA2] font-semibold mb-2 uppercase tracking-wider">
            // DATASET A (HOMOGENEOUS ARCHIVE)
          </div>
          <div>cat_001.jpg</div>
          <div>cat_002.jpg</div>
          <div>cat_003.jpg</div>
          <div>cat_004.jpg</div>
          <div className="text-[#68747D]">...</div>
          <div>cat_100000.jpg</div>
        </div>

        <p>Imagine that almost all of these photographs were taken:</p>

        <ul className="space-y-1.5 pl-4 font-mono text-xs sm:text-sm text-[#A8B3BA]">
          <li>• with the same camera</li>
          <li>• in the same room</li>
          <li>• under similar lighting</li>
          <li>• from similar angles</li>
          <li>• using similar subjects</li>
        </ul>

        <p>It is a large dataset.</p>

        <p>But much of the information is repetitive.</p>

        <p>Now imagine Dataset B also contains 100,000 images.</p>

        <p>But these images come from:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 font-mono text-xs sm:text-sm text-[#A8B3BA]">
          <li>• different cameras</li>
          <li>• different environments</li>
          <li>• different lighting</li>
          <li>• different perspectives</li>
          <li>• different breeds</li>
          <li>• partially obstructed views</li>
          <li>• indoor and outdoor scenes</li>
          <li>• different distances</li>
          <li>• unusual poses</li>
        </ul>

        <p>Both datasets contain 100,000 examples.</p>

        <p>
          But they don&apos;t necessarily contain the same amount of{' '}
          <strong className="text-[#F3F6F7]">useful variation</strong>.
        </p>

        {/* Visual 02 */}
        <Visual02DatasetVsInformation />

        <p>This is an important distinction.</p>

        <div className="p-4 sm:p-6 rounded-[6px] bg-[#0A0F14] border-l-2 border-[#019AA2] border-[#1C2830] text-[#F3F6F7] text-base sm:text-lg font-sans">
          <p className="font-medium leading-snug">
            Dataset size measures how many examples we have. It does not directly measure how much new information those examples contain.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 03 // The Problem With Repetition */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="the-problem-with-repetition"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Problem With Repetition
        </h2>

        <p>Suppose we want to understand the numbers from 0 to 9.</p>

        <p>If someone shows us:</p>

        <div className="p-3.5 rounded bg-[#0E151B] border border-[#1C2830] font-mono text-center tracking-[0.4em] text-lg sm:text-xl text-[#F3F6F7]">
          1 1 1 1 1 1 1 1 1 1
        </div>

        <p>we have received ten examples.</p>

        <p>
          But the tenth <code className="text-[#019AA2] font-mono px-1.5 py-0.5 rounded bg-[#0E151B] border border-[#1C2830]">1</code> doesn&apos;t tell us much that the first <code className="text-[#019AA2] font-mono px-1.5 py-0.5 rounded bg-[#0E151B] border border-[#1C2830]">1</code> didn&apos;t already tell us.
        </p>

        <p>Now compare that with:</p>

        <div className="p-3.5 rounded bg-[#0E151B] border border-[#019AA2]/40 font-mono text-center tracking-[0.4em] text-lg sm:text-xl text-[#019AA2]">
          0 1 2 3 4 5 6 7 8 9
        </div>

        <p>Only ten examples again.</p>

        <p>
          But the second collection covers a much larger portion of the space we care about.
        </p>

        <p>The same idea appears in machine learning datasets.</p>

        <p>
          A million highly similar samples may provide less useful coverage than a much smaller collection containing genuinely different cases.
        </p>

        {/* Visual 03 */}
        <Visual03Redundancy />

        <p>
          This doesn&apos;t mean duplicates are always useless. Repetition can still help with statistical estimation, robustness, or optimization.
        </p>

        <p>But repetition highlights the central idea:</p>

        <ArticlePullQuote
          quote="Counting examples is not the same as counting new information."
          attribution="Information Geometry & Dataset Density"
        />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 04 // What If We Are Missing Entire Regions of the Problem? */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="what-if-we-are-missing-entire-regions-of-the-problem"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          What If We Are Missing Entire Regions of the Problem?
        </h2>

        <p>Imagine building a system that analyzes road scenes.</p>

        <p>Your dataset contains millions of photographs.</p>

        <p>But almost every photograph was captured:</p>

        <ul className="space-y-1.5 pl-4 font-mono text-xs sm:text-sm text-[#A8B3BA]">
          <li>• during the day</li>
          <li>• in clear weather</li>
          <li>• from one type of camera</li>
          <li>• on relatively clean roads</li>
        </ul>

        <p>The dataset might be enormous.</p>

        <p>Then the system encounters:</p>

        <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] font-mono text-xs sm:text-sm text-[#F3F6F7] space-y-1 text-center max-w-sm mx-auto">
          <div>heavy rain</div>
          <div className="text-[#019AA2] font-bold">+</div>
          <div>night</div>
          <div className="text-[#019AA2] font-bold">+</div>
          <div>fog</div>
          <div className="text-[#019AA2] font-bold">+</div>
          <div>unusual camera angle</div>
          <div className="text-[#019AA2] font-bold">+</div>
          <div>poor visibility</div>
        </div>

        <p>
          Suddenly, the millions of training examples don&apos;t look quite so impressive.
        </p>

        <p>The issue wasn&apos;t necessarily that the dataset was too small.</p>

        <p>
          It was that the dataset did not adequately <strong className="text-[#F3F6F7]">cover the situations the system needed to understand</strong>.
        </p>

        {/* Visual 04 */}
        <Visual04MissingRegions />

        <p>This is why dataset diversity matters.</p>

        <p>A useful question isn&apos;t simply: &ldquo;How many examples do we have?&rdquo;</p>

        <ArticlePullQuote
          quote="What parts of the problem do those examples actually cover?"
          attribution="Operational Generalization"
        />
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 05 // More Data Can Also Mean More Noise */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="more-data-can-also-mean-more-noise"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          More Data Can Also Mean More Noise
        </h2>

        <p>There is another complication.</p>

        <p>Data isn&apos;t always clean.</p>

        <p>Real-world datasets can contain:</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 font-mono text-xs sm:text-sm text-[#A8B3BA]">
          <li>• incorrect labels</li>
          <li>• corrupted samples</li>
          <li>• duplicates</li>
          <li>• irrelevant examples</li>
          <li>• measurement errors</li>
          <li>• inconsistent annotations</li>
          <li>• biased samples</li>
        </ul>

        <p>Suppose we start with:</p>

        <div className="p-3 rounded bg-[#0E151B] border border-[#1C2830] font-mono text-xs sm:text-sm text-[#10b981] text-center">
          1,000,000 useful examples
        </div>

        <p>and then add another:</p>

        <div className="p-3 rounded bg-[#0E151B] border border-[#1C2830] font-mono text-xs sm:text-sm text-[#ef4444] text-center">
          9,000,000 noisy examples
        </div>

        <p>The dataset is now ten times larger.</p>

        <p>But the useful information did not increase tenfold.</p>

        <p>
          In fact, depending on the problem and training procedure, the additional noise can make learning more difficult.
        </p>

        {/* Visual 05 */}
        <Visual05DataQuality />

        <p>This creates an important distinction between:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-center text-sm">
          <div className="p-3 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA]">
            DATA QUANTITY
          </div>
          <div className="p-3 rounded bg-[#0E151B] border border-[#019AA2]/40 text-[#019AA2] font-semibold">
            DATA QUALITY
          </div>
        </div>

        <p>A larger dataset isn&apos;t automatically a better dataset.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 06 // The Model Can Become the Bottleneck */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="the-model-can-become-the-bottleneck"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Model Can Become the Bottleneck
        </h2>

        <p>There is another possibility that is easy to miss.</p>

        <p>Perhaps the data isn&apos;t the problem at all.</p>

        <p>Imagine this pipeline:</p>

        <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] font-mono text-xs sm:text-sm text-center space-y-1.5 max-w-xs mx-auto">
          <div className="text-[#A8B3BA]">DATA</div>
          <div className="text-[#68747D]">│</div>
          <div className="text-[#68747D]">▼</div>
          <div className="p-2 rounded bg-[#131C24] border border-[#019AA2]/40 text-[#019AA2] font-bold">
            MODEL
          </div>
          <div className="text-[#68747D]">│</div>
          <div className="text-[#68747D]">▼</div>
          <div className="text-[#F3F6F7]">PREDICTION</div>
        </div>

        <p>We keep improving the data.</p>

        <p>But the model has limitations.</p>

        <p>
          It might not have enough capacity to represent some of the patterns contained in the dataset. Or its architecture may not be appropriate for the structure of the problem.
        </p>

        <p>
          At that point, adding more examples can produce increasingly small improvements.
        </p>

        <p className="font-semibold text-[#F3F6F7]">The bottleneck has moved.</p>

        <div className="p-4 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] space-y-2 text-sm sm:text-base">
          <p className="text-[#68747D]">Instead of:</p>
          <p className="text-[#A8B3BA] font-mono pl-3 border-l border-[#68747D]">
            &ldquo;We don&apos;t have enough data.&rdquo;
          </p>
          <p className="text-[#68747D] pt-1">the problem may become:</p>
          <p className="text-[#019AA2] font-mono pl-3 border-l border-[#019AA2] font-semibold">
            &ldquo;Our current model isn&apos;t extracting enough from the data we already have.&rdquo;
          </p>
        </div>

        {/* Visual 06 */}
        <Visual06ModelBottleneck />

        <p>
          This is one reason machine learning development isn&apos;t simply a race to collect the largest possible dataset.
        </p>

        <p>
          Data, model architecture, optimization, representation, and evaluation all interact.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 07 // The Data We Add May Not Be the Data We Need */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="the-data-we-add-may-not-be-the-data-we-need"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Data We Add May Not Be the Data We Need
        </h2>

        <p>Consider a model trained to recognize objects in photographs.</p>

        <p>
          Suppose its training data already contains millions of ordinary images.
        </p>

        <p>We add another million ordinary images.</p>

        <p>Performance improves slightly.</p>

        <p>Now suppose instead we identify a specific weakness:</p>

        <div className="p-3.5 rounded bg-[#0E151B] border-l-2 border-[#f59e0b] border-[#1C2830] font-mono text-xs sm:text-sm text-[#F3F6F7]">
          &gt; The model struggles when objects are partially hidden.
        </div>

        <p>
          Instead of collecting another million ordinary photographs, we deliberately collect examples containing:
        </p>

        <ul className="space-y-1.5 pl-4 font-mono text-xs sm:text-sm text-[#A8B3BA]">
          <li>• objects behind trees</li>
          <li>• objects behind people</li>
          <li>• objects partially outside the frame</li>
          <li>• objects covered by other objects</li>
          <li>• low-visibility objects</li>
        </ul>

        <p>
          The second million examples may be far more valuable than the first.
        </p>

        <p className="font-semibold text-[#F3F6F7]">Why?</p>

        <p>
          Because they target a region where the model is uncertain or weak.
        </p>

        {/* Visual 07 */}
        <Visual07TargetedCollection />

        <p>This suggests a more useful strategy than blindly increasing dataset size:</p>

        <div className="p-4 sm:p-6 rounded-[6px] bg-[#0A0F14] border border-[#019AA2]/40 text-[#F3F6F7] text-base sm:text-lg">
          <p className="font-medium text-[#019AA2]">
            Find what the model doesn&apos;t understand, then collect data that addresses that weakness.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 08 // More Data Doesn't Mean More Coverage */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="more-data-doesnt-mean-more-coverage"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          More Data Doesn&apos;t Mean More Coverage
        </h2>

        <p>
          This distinction becomes especially important when dealing with real-world distributions.
        </p>

        <p>Imagine a dataset containing:</p>

        <div className="p-3 rounded bg-[#0E151B] border border-[#1C2830] font-mono text-center text-sm sm:text-base text-[#F3F6F7]">
          10,000,000 samples
        </div>

        <p>But 90% of them come from essentially the same kind of environment.</p>

        <p>The number is enormous.</p>

        <p>The coverage may not be.</p>

        <p>We can think about the dataset as exploring a space of possible situations.</p>

        <p>The dense region represents situations we have seen many times.</p>

        <p>The isolated points represent situations we have barely encountered.</p>

        <p>
          Adding more samples to the dense region makes the dataset larger.
        </p>

        <p>
          It doesn&apos;t necessarily teach the model much about the unexplored regions.
        </p>

        {/* Visual 08 */}
        <Visual08QuantityVsCoverage />

        <p>
          This is why <strong className="text-[#F3F6F7]">coverage</strong> can matter more than raw count.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 09 // So When Does More Data Stop Helping? */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="so-when-does-more-data-stop-helping"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          So When Does More Data Stop Helping?
        </h2>

        <p>There isn&apos;t a universal number.</p>

        <p>It depends on several things.</p>

        <div className="space-y-4 pt-2">
          {/* Factor 1 */}
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-mono text-sm font-bold text-[#F3F6F7] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-[#019AA2]">1.</span> The Task
            </h3>
            <p className="text-sm text-[#A8B3BA]">
              A simple classification problem and an open-ended perception problem have very different data requirements.
            </p>
          </div>

          {/* Factor 2 */}
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-mono text-sm font-bold text-[#F3F6F7] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-[#019AA2]">2.</span> The Diversity of the Data
            </h3>
            <p className="text-sm text-[#A8B3BA]">
              A dataset containing many genuinely different situations can provide more useful information than one containing mostly repetitive examples.
            </p>
          </div>

          {/* Factor 3 */}
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-mono text-sm font-bold text-[#F3F6F7] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-[#019AA2]">3.</span> Data Quality
            </h3>
            <p className="text-sm text-[#A8B3BA]">
              Incorrect labels and systematic noise can limit the value of additional data.
            </p>
          </div>

          {/* Factor 4 */}
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-mono text-sm font-bold text-[#F3F6F7] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-[#019AA2]">4.</span> Model Capacity
            </h3>
            <p className="text-sm text-[#A8B3BA]">
              A model may eventually become the limiting factor.
            </p>
          </div>

          {/* Factor 5 */}
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-mono text-sm font-bold text-[#F3F6F7] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-[#019AA2]">5.</span> Distribution
            </h3>
            <p className="text-sm text-[#A8B3BA]">
              The training data needs to be relevant to the situations in which the model will actually be used.
            </p>
          </div>

          {/* Factor 6 */}
          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830]">
            <h3 className="font-mono text-sm font-bold text-[#F3F6F7] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-[#019AA2]">6.</span> The Remaining Errors
            </h3>
            <p className="text-sm text-[#A8B3BA]">
              If the model is already performing well on most common cases, the next useful examples may need to target rare or difficult cases.
            </p>
          </div>
        </div>

        <p className="pt-2">So &ldquo;enough data&rdquo; isn&apos;t simply:</p>

        <p className="text-xl sm:text-2xl font-display font-bold text-[#F3F6F7]">
          a number.
        </p>

        <p>
          It is a relationship between the <strong className="text-[#019AA2]">task, data, model, and desired performance</strong>.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 10 // The Interesting Part Isn't the Plateau */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="the-interesting-part-isnt-the-plateau"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Interesting Part Isn&apos;t the Plateau
        </h2>

        <p>The plateau itself isn&apos;t particularly mysterious.</p>

        <p>The more interesting question is:</p>

        <div className="p-4 rounded-[6px] bg-[#0A0F14] border-l-2 border-[#019AA2] text-xl font-display font-bold text-[#F3F6F7]">
          Why did the plateau happen?
        </div>

        <p>Suppose performance stops improving.</p>

        <p>There are several possible explanations.</p>

        <ul className="space-y-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#A8B3BA]">
          <li>Maybe the new data is redundant.</li>
          <li>Maybe the labels are noisy.</li>
          <li>Maybe the new samples don&apos;t represent the deployment environment.</li>
          <li>Maybe the model has become the bottleneck.</li>
          <li>Maybe the evaluation set doesn&apos;t capture the improvement we&apos;re looking for.</li>
          <li>Or maybe we are measuring the wrong thing entirely.</li>
        </ul>

        <p>
          The same symptom—&ldquo;performance isn&apos;t improving&rdquo;—can have very different causes.
        </p>

        <p>
          And this is where machine learning starts becoming less about collecting resources and more about understanding systems.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 11 // The Hidden Resource: Information */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="the-hidden-resource-information"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Hidden Resource: Information
        </h2>

        <p>We often talk about datasets as if their only important property is size.</p>

        <p>But there is another way to think about them.</p>

        <p>Instead of asking: &ldquo;How much data do we have?&rdquo;</p>

        <p>we can ask:</p>

        <div className="p-4 rounded-[6px] bg-[#0A0F14] border border-[#019AA2]/40 text-lg sm:text-xl font-display font-bold text-[#019AA2]">
          &ldquo;How much useful uncertainty has this data removed?&rdquo;
        </div>

        <p>The first few examples can eliminate enormous amounts of uncertainty.</p>

        <p>Later examples may mostly confirm things we already know.</p>

        <p>
          And occasionally, one unusual example can be more informative than thousands of ordinary ones because it exposes a situation the model has never encountered.
        </p>

        <p>This changes how we think about data.</p>

        {/* Visual 09: Main Signature Visual */}
        <Visual09InformationFunnel />

        <p>The objective isn&apos;t necessarily:</p>

        <div className="p-3 rounded bg-[#0E151B] border border-[#1C2830] font-mono text-center text-sm text-[#A8B3BA]">
          MORE DATA
        </div>

        <p>It is:</p>

        <div className="p-3 rounded bg-[#019AA2]/15 border border-[#019AA2] font-mono text-center text-sm font-bold text-[#019AA2]">
          MORE USEFUL INFORMATION
        </div>

        <p className="font-semibold text-[#F3F6F7]">Those are not the same thing.</p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 12 // So What Should We Do Instead? */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="so-what-should-we-do-instead"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          So What Should We Do Instead?
        </h2>

        <p>
          When additional data stops producing meaningful improvements, the answer isn&apos;t automatically to stop collecting data.
        </p>

        <p>It is to investigate.</p>

        <p>Ask:</p>

        <div className="space-y-2.5 pl-4 border-l-2 border-[#019AA2] font-mono text-sm sm:text-base text-[#F3F6F7]">
          <div>What kind of examples are we adding?</div>
          <div>Are they actually different?</div>
          <div>Where does the model still fail?</div>
          <div>Are the labels reliable?</div>
          <div>Does the new data represent the real deployment environment?</div>
          <div>Is the model capable of using the additional information?</div>
          <div>Are we evaluating the behavior we actually care about?</div>
        </div>

        <p>
          These questions turn dataset growth from a brute-force exercise into an engineering problem.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 13 // The Bigger Lesson */}
      {/* ------------------------------------------------------------------- */}
      <section
        id="the-bigger-lesson"
        className="space-y-6 pt-8 border-t border-[#1C2830]"
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F6F7] tracking-tight">
          The Bigger Lesson
        </h2>

        <p>Machine learning often encourages simple intuitions.</p>

        <ul className="space-y-1.5 pl-4 font-mono text-xs sm:text-sm text-[#A8B3BA]">
          <li>• More compute should help.</li>
          <li>• More parameters should help.</li>
          <li>• More data should help.</li>
        </ul>

        <p>And often, these intuitions are directionally correct.</p>

        <p>But real systems eventually expose the limits of those rules.</p>

        <ul className="space-y-2 pl-4 border-l border-[#1C2830] font-mono text-sm text-[#F3F6F7]">
          <li>More data can become redundant.</li>
          <li>More data can contain more noise.</li>
          <li>More data can fail to cover the situations that matter.</li>
        </ul>

        <p>And sometimes the limiting factor isn&apos;t the dataset at all.</p>

        <p>
          It is the model, the objective, the labels, the evaluation, or our understanding of the problem.
        </p>

        <p>So perhaps the better question was never:</p>

        <p className="text-lg sm:text-xl font-display font-medium text-[#A8B3BA]">
          &ldquo;How much data do we need?&rdquo;
        </p>

        <p>Perhaps it is:</p>

        <ArticlePullQuote
          quote="What information are we still missing?"
          attribution="The Fundamental Dataset Question"
        />

        <p>That is a much harder question.</p>

        <p className="font-semibold text-[#F3F6F7]">
          And usually, a much more useful one.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 14 // ByteLogic Closing Block */}
      {/* ------------------------------------------------------------------- */}
      <ByteLogicSignatureBlock />
    </div>
  );
};
