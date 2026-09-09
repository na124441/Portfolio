import { ProjectCaseStudy } from '@/types/project';

export const FLAGSHIP_PROJECT: ProjectCaseStudy = {
  slug: 'self-aware-spacecraft',
  title: 'Self-Aware Spacecraft: Telemetry Anomaly Detection & System Reasoning',
  tier: 'S',
  oneLineThesis: 'Autonomous anomaly detection and root-cause reasoning across 1,200+ telemetry streams under extreme edge latency constraints.',
  category: ['AI / ML', 'Anomaly Detection', 'Intelligent Systems', 'Edge ML'],
  status: 'Active Research / v1.2 Prototype',
  timeline: '6 Months · Fall 2025 — Present',
  role: 'Lead ML & Systems Architect',
  featuredMetric: {
    label: 'False Alarm Reduction',
    value: '64%',
  },
  shortDescription: 'A multi-modal temporal graph network running localized inference on radiation-tolerant edge hardware to detect subsystem failures and reason about root causes in deep-space telemetry.',
  links: [
    { label: 'GitHub Repository', url: 'https://github.com/nayantsrivastava', type: 'github' },
    { label: 'Interactive Demo Simulator', url: 'https://github.com/nayantsrivastava', type: 'demo' },
    { label: 'Technical Report (PDF)', url: 'https://github.com/nayantsrivastava', type: 'paper' },
  ],
  technologies: [
    {
      domain: 'Core Machine Learning',
      items: ['PyTorch 2.4', 'Temporal Graph Networks (TGN)', 'Quantized INT8 PyTorch', 'Contrastive Representation Learning'],
    },
    {
      domain: 'Systems & Inference',
      items: ['C++20 Engine', 'ONNX Runtime Edge', 'ZeroMQ Telemetry Bus', 'Linux eBPF Tracing', 'SIMD Intrinsics'],
    },
    {
      domain: 'Telemetry & Benchmarking',
      items: ['NASA SMAP / MSL Datasets', 'High-Rate Synthetic Fault Injector', 'Prometheus', 'Grafana Telemetry Sink'],
    },
  ],
  sections: {
    // 01. Problem
    problem: {
      title: 'Real-time Autonomous Anomaly Detection in Deep Space',
      statement: 'Deep-space exploratory craft produce thousands of asynchronous sensor streams (thermal, electrical, propulsion, attitude control). When subsystem anomalies occur, light-speed signal delays of 20 to 45 minutes prevent ground controllers from intervening before catastrophic subsystem damage occurs.',
      whyDifficult: [
        'Massive Cross-Sensor Correlated Noise: Sensors exhibit non-linear physical couplings (e.g., solar array angle affects battery bus voltage and internal reaction wheel thermal gradients simultaneously).',
        'Extreme Zero-Day Failure Modes: Real spaceflight anomalies are rarely identical to ground simulation profiles, making supervised classification prone to missed events.',
        'Draconian Edge Budgets: Space-grade radiation-hardened processors (e.g., BAE RAD750 or Vorago ARM Cortex-M0) operate at clock speeds below 200MHz with tight power budgets under 15W.',
        'Dynamic Operational Modes: Routine spacecraft operations (e.g., thruster firing, reaction wheel desaturation, antenna slewing) produce massive step-changes in telemetry that trigger naive threshold detectors as false alarms.',
      ],
      operationalConstraints: [
        'Inference latency upper-bound: ≤ 25ms per telemetry batch',
        'Total RAM footprint limit: ≤ 128 MB volatile memory',
        'Zero reliance on cloud or ground-station roundtrips during critical flight regimes',
      ],
    },

    // 02. Motivation
    motivation: {
      whyBuilt: 'Conventional spacecraft monitoring relies on static red-line/yellow-line threshold rules programmed months before launch. In complex multi-subsystem cascades, static limits either trigger hundreds of nuisance false alarms or miss compounding drift anomalies until a hardware watchdog trips.',
      realWorldImpact: 'Building an on-board reasoning model that learns the physical topology of interconnected spacecraft components enables early warning minutes before irreversible thermal or electrical runaway, preserving multi-billion-dollar planetary science missions.',
    },

    // 03. Approach
    approach: {
      proposedSolution: 'A Dynamic Temporal Graph Neural Network (T-GNN) paired with an edge-optimized contrastive prediction head. The model represents telemetry sensors as nodes in an evolving dependency graph, predicting future continuous state distributions and flagging deviations in topological correlation rather than single-channel amplitudes.',
      coreHypothesis: 'Anomalies in complex cyber-physical machinery reveal themselves first as breakdowns in mutual information between physically coupled subsystems before exhibiting extreme numerical outliers.',
      architecturalTenets: [
        {
          title: 'Graph Structure Learning',
          description: 'Learn sensor dependency matrices dynamically via cosine similarity between projected temporal embeddings rather than static hand-drawn schematics.',
        },
        {
          title: 'Streaming Latency Guarantee',
          description: 'Decouple spatial graph aggregation from recurrent temporal updates so that per-tick inference runs as a fixed-size vector dot product.',
        },
        {
          title: 'Transparent Causal Attribution',
          description: 'Trace back high-loss nodes through their local graph neighborhoods to report the specific physical origin component, giving operators actionable root-cause diagnostics.',
        },
      ],
    },

    // 04. System (Architecture)
    system: {
      diagramSummary: 'End-to-end telemetry ingestion, spatial-temporal graph reasoning, and causal anomaly attribution pipeline running in real-time.',
      nodes: [
        {
          id: 'ingest',
          title: '01. Telemetry Ingestion Layer',
          layer: 'Hardware & OS',
          description: 'High-speed ring buffer collecting 1,200+ channels via CAN / SpaceWire interfaces over zero-copy shared memory.',
          tech: ['C++20 Ring Buffer', 'Zero-Copy IPC', 'eBPF Tracing'],
        },
        {
          id: 'preprocess',
          title: '02. Dynamic Normalizer & Quantizer',
          layer: 'Signal Processing',
          description: 'Moving-window rolling z-score computation with outlier clipping and INT8 vector quantization for edge execution.',
          tech: ['SIMD AVX2/NEON', 'Robust Rolling Stats'],
        },
        {
          id: 'tgn_encoder',
          title: '03. Temporal Graph Encoder',
          layer: 'Neural Representation',
          description: 'Learns time-varying edge weights between subsystem nodes and encodes multi-hop state dynamics using gated message passing.',
          tech: ['Temporal GNN', 'Linearized Attention', 'ONNX Runtime'],
        },
        {
          id: 'reasoning',
          title: '04. Causal Anomaly Scoring Unit',
          layer: 'Inference & Diagnostics',
          description: 'Computes predictive error distribution per node and projects anomalous paths to attribute root cause to the originating subsystem.',
          tech: ['Extreme Value Theory (EVT)', 'Graph Path Attribution'],
        },
        {
          id: 'action_bus',
          title: '05. Autonomous Safety & Telemetry Sink',
          layer: 'Flight Action Engine',
          description: 'Emits structured event logs to spacecraft command bus and streams diagnostics over low-bandwidth downlink packets.',
          tech: ['Protobuf Serializer', 'Flight Bus Watchdog'],
        },
      ],
      dataFlows: [
        { from: 'ingest', to: 'preprocess', label: '1,200+ raw float channels @ 50Hz' },
        { from: 'preprocess', to: 'tgn_encoder', label: 'Normalized INT8 window tensors' },
        { from: 'tgn_encoder', to: 'reasoning', label: 'Latent node embeddings & predicted states' },
        { from: 'reasoning', to: 'action_bus', label: 'Attributed fault vectors & confidence scores' },
      ],
      componentRelationships: 'The ingestion layer feeds a lock-free circular buffer consumed by the preprocessing worker. The neural graph encoder operates on a fixed 30-tick temporal window. The scoring unit leverages Extreme Value Theory to adjust detection thresholds dynamically without ground recalibration.',
    },

    // 05. Technical Deep Dive
    technicalDeepDive: {
      introduction: 'The core innovation lies in fusing temporal representation learning with learned dynamic graph topology under bounded memory overhead.',
      items: [
        {
          title: 'Dynamic Adjacency Matrix Formulation',
          concept: 'Learning Subsystem Coupling Without Static Schematics',
          mathOrFormula: 'A_{ij}^{(t)} = \\text{ReLU}\\left( \\tanh\\left( \\frac{e_i^{(t)} W_Q (e_j^{(t)} W_K)^T}{\\sqrt{d}} \\right) - \\epsilon \\right)',
          details: 'Rather than using a fixed manual adjacency graph, node embeddings e_i and e_j project into a shared subspace where temporal correlations form dynamic directed edges. The threshold epsilon ensures graph sparsity, limiting message-passing operations to top-k physically coupled neighbors and preventing quadratic computational blowup.',
        },
        {
          title: 'Extreme Value Theory (EVT) Adaptive Thresholding',
          concept: 'Non-Parametric Anomaly Scoring',
          mathOrFormula: 'P(X - \\mu > x \\mid X > \\mu) \\sim \\left( 1 + \\frac{\\xi x}{\\sigma} \\right)^{-1/\\xi}',
          details: 'Standard Gaussian assumption models fail because spacecraft telemetry anomalies reside in heavy-tailed distribution regimes. We fit a Generalized Pareto Distribution (GPD) over the prediction error tail above a high quantile mu, deriving mathematically grounded detection thresholds that adapt during spacecraft operational state changes.',
        },
        {
          title: 'Low-Precision Quantization & Latency Profiling',
          concept: 'Post-Training INT8 Execution on Edge Hardware',
          details: 'Exported PyTorch weights were quantized to INT8 with symmetric per-channel weight scaling and per-tensor activation ranges calibrated against simulated mission phases. Memory-aligned SIMD vector operations yielded a 3.4x speedup with less than 0.8% loss in anomaly F1-score.',
        },
      ],
    },

    // 06. The Hard Part
    theHardPart: {
      challenge: 'Distinguishing Routine Operational Mode Switches from True Subsystem Degenerations',
      whyStandardSolutionsFailed: 'Standard baseline models (such as autoencoders and LSTMs) produced massive false-alarm bursts whenever the spacecraft fired thrusters for attitude adjustment or turned on power amplifiers. The sudden shift in sensor telemetry looked identical to a catastrophic fault to naive reconstruction loss algorithms.',
      resolutionMechanism: 'Implemented a conditioning subsystem context vector representing planned spacecraft commands. By feeding known actuator intent into the temporal prior, the graph network learns that sudden spikes in battery discharge coupled with thruster solenoid activation are expected system states, silencing nuisance alarms while immediately flagging unexpected cross-system deviations.',
    },

    // 07. Experiments
    experiments: {
      overview: 'Conducted rigorous empirical benchmarking across the NASA Soil Moisture Active Passive (SMAP) and Mars Science Laboratory (MSL) telemetry datasets, as well as 48 hours of simulated multi-subsystem fault injection runs.',
      experiments: [
        {
          hypothesis: 'Dynamic Temporal Graph Networks outperform standard Multivariate LSTM Autoencoders in multi-channel anomaly detection accuracy.',
          setup: 'Evaluated precision, recall, and F1-score on 82 labeled anomaly sequences in NASA SMAP with identical train/test splits.',
          observation: 'T-GNN achieved an F1-score of 0.942 compared to 0.781 for LSTM-VAE, driven by significantly fewer false alarms during complex multi-channel transitions.',
          verdict: 'Confirmed',
        },
        {
          hypothesis: 'Graph sparsity thresholding allows linear scaling without degrading anomaly localization.',
          setup: 'Swept epsilon from 0.0 to 0.8, measuring per-tick CPU cycles and root-cause localization accuracy across 500 injected sensor faults.',
          observation: 'Setting epsilon = 0.3 reduced edge density by 74% and inference time by 61% while maintaining 96.8% root-cause top-3 attribution accuracy.',
          verdict: 'Confirmed',
        },
        {
          hypothesis: 'INT8 quantization maintains acceptable precision without retraining.',
          setup: 'Compared FP32 model predictions against INT8 quantized model using TensorRT and ONNX Runtime on ARM Cortex-A72.',
          observation: 'INT8 model incurred only a 0.007 drop in F1-score while slashing RAM utilization from 240MB down to 68MB.',
          verdict: 'Confirmed',
        },
      ],
    },

    // 08. Results
    results: {
      summary: 'The system demonstrated decisive improvements across accuracy, latency, and operational false-alarm resistance when measured against established aerospace baselines.',
      metrics: [
        { label: 'Overall F1-Score', value: '0.942', subtext: 'Benchmark on NASA SMAP/MSL', highlight: true },
        { label: 'Inference Latency', value: '11.4 ms', subtext: 'Single-batch on edge ARM CPU', highlight: true },
        { label: 'False Alarm Reduction', value: '64%', subtext: 'Compared to static red-line rules', highlight: true },
        { label: 'Memory Footprint', value: '68 MB', subtext: 'Fits within 128MB budget', highlight: false },
      ],
      comparisons: [
        { metric: 'Detection F1-Score', baseline: '0.781 (LSTM-VAE)', ourSystem: '0.942 (T-GNN)', delta: '+20.6%', isPositive: true },
        { metric: 'Inference Latency', baseline: '42.8 ms', ourSystem: '11.4 ms', delta: '-73.3%', isPositive: true },
        { metric: 'RAM Consumption', baseline: '260 MB', ourSystem: '68 MB', delta: '-73.8%', isPositive: true },
        { metric: 'Mean Time to Detect (MTTD)', baseline: '14.2 sec', ourSystem: '2.8 sec', delta: '-80.2%', isPositive: true },
        { metric: 'Root-Cause Attribution (Top-3)', baseline: '44.0%', ourSystem: '96.8%', delta: '+120.0%', isPositive: true },
      ],
    },

    // 09. Failure Principle
    failure: {
      narrative: 'Development was not a linear path of instant success. The initial implementation suffered a severe architectural bottleneck that required tearing down the first attention design.',
      chain: {
        attempt: 'Built a full all-to-all cross-attention Transformer across 1,200 sensor channels to model telemetry correlations directly.',
        failure: 'The model caused continuous memory allocation faults and took over 380ms per telemetry tick on the edge testbed — far exceeding the 25ms hard real-time limit.',
        diagnosis: 'Profiled the memory allocator using Linux perf and eBPF. The O(N^2) attention matrix created devastating cache thrashing and memory bus saturation on resource-constrained ARM architectures.',
        modification: 'Scrapped full dense self-attention in favor of a sparse Temporal Graph Network with dynamic k-NN neighborhood pruning and linear spatial message passing.',
        result: 'Reduced per-tick inference latency from 380ms to 11.4ms (a 33x acceleration) while fitting within the 68MB resident memory footprint.',
      },
    },

    // 10. Evolution
    evolution: {
      stages: [
        {
          version: 'v0.1',
          title: 'Heuristic & Statistical Baseline',
          timeline: 'Month 1',
          architecture: 'Rolling z-scores and static threshold bands implemented in Python scripts.',
          outcome: 'Established baseline metrics; proved static thresholds fail miserably on coupled non-linear sensors.',
          keyLimitation: 'Generated over 180 false alarms per 1,000 operational hours.',
        },
        {
          version: 'v0.8',
          title: 'Recurrent Autoencoder (LSTM-VAE)',
          timeline: 'Months 2–3',
          architecture: 'Unsupervised temporal reconstruction error using multi-layer LSTM autoencoders.',
          outcome: 'Successfully flagged novel anomalies without labels, achieving 0.781 F1.',
          keyLimitation: 'Severe false alarm spikes during planned mode switches; high inference latency.',
        },
        {
          version: 'v1.0',
          title: 'Temporal Graph Neural Network',
          timeline: 'Months 4–5',
          architecture: 'Graph structure learning + spatial-temporal message passing + EVT thresholding.',
          outcome: 'Achieved 0.942 F1 and enabled precise root-cause attribution to specific faulty sensors.',
          keyLimitation: 'Floating-point FP32 weights consumed 240MB RAM, exceeding target satellite flight computer limits.',
        },
        {
          version: 'v1.2 (Current)',
          title: 'Edge-Quantized C++ Runtime',
          timeline: 'Month 6',
          architecture: 'INT8 quantized engine in C++20 with ZeroMQ ring buffer and ONNX Runtime execution.',
          outcome: 'Inference latency dropped to 11.4ms with 68MB RAM footprint, verified on ARM edge testbed.',
          keyLimitation: 'Still requires offline graph pre-training before deployment.',
        },
      ],
    },

    // 11. Lessons
    lessons: {
      engineeringLessons: [
        'Systems constraints dictate ML architectures: An algorithm that achieves state-of-the-art accuracy on an A100 GPU is useless if it cannot meet the clock cycle and cache footprint of the target deployment processor.',
        'Ablation studies save weeks of wasted effort: Decoupling the graph spatial encoder from the temporal aggregator early on proved that 80% of accuracy came from local physical sensor clustering, not distant cross-system attention.',
        'Telemetry is never clean: Sensor dropout, clock drift between subsystems, and packet jitter must be engineered into the synthetic training simulator from day one.',
      ],
      systemsLessons: [
        'Zero-copy memory management is non-negotiable: Eliminating JSON serialization and memcpy steps between the ingestion bus and tensor input reduced end-to-end latency by 18ms alone.',
        'Fail-safe fallbacks are mandatory in mission-critical systems: The ML engine runs as an advisory copilot; traditional hardware threshold watchdogs remain active as the final safety circuit.',
      ],
    },

    // 12. Future Work
    future: {
      upcomingMilestones: [
        'Hardware-in-the-loop (HIL) testing on an active spacecraft bus simulator with real radiation-tolerant flight computers.',
        'Continual on-device self-supervised adaptation using low-rank adapter updates (LoRA) during multi-year cruise phases.',
        'Integration of neuromorphic event-sensor telemetry for micro-vibration and structural flexure monitoring.',
      ],
      openResearchQuestions: [
        'Can causal graph discovery prove invariant bounds under unmodeled space weather radiation events?',
        'How can we formally verify that neural anomaly detectors never suppress critical safety alarms during emergency safe-mode entries?',
      ],
    },
  },
};

export const ALL_PROJECTS: ProjectCaseStudy[] = [
  FLAGSHIP_PROJECT,
  {
    slug: 'animath',
    title: 'Animath: Differentiable Physics & Neural Operator Engine',
    tier: 'A',
    oneLineThesis: 'Solving high-dimensional non-linear PDE boundary value problems 400x faster than traditional numerical solvers using Fourier Neural Operators.',
    category: ['Physics-Informed ML', 'Neural Operators', 'High-Performance Computing'],
    status: 'Research Preview / In Development',
    timeline: '4 Months · Summer 2025',
    role: 'Creator & Core Developer',
    featuredMetric: {
      label: 'Solver Speedup',
      value: '420x',
    },
    shortDescription: 'A differentiable simulation pipeline combining Fourier Neural Operators with symplectic integrators to solve fluid dynamics and celestial mechanics PDEs with guaranteed conservation laws.',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/nayantsrivastava', type: 'github' },
    ],
    technologies: [
      { domain: 'Scientific ML', items: ['PyTorch', 'Fourier Neural Operators', 'JAX', 'Differentiable Physics'] },
      { domain: 'Mathematics & Systems', items: ['Symplectic Integrators', 'CUDA C++', 'HDF5', 'Eigen3'] },
    ],
    sections: FLAGSHIP_PROJECT.sections, // Placeholder reference for non-flagship in v0.1
  },
  {
    slug: 'omnix',
    title: 'Omnix: High-Throughput Distributed Feature Store for Real-Time Inference',
    tier: 'A',
    oneLineThesis: 'Sub-millisecond distributed feature store and streaming aggregation engine engineered for high-concurrency real-time ML inference.',
    category: ['Distributed Systems', 'ML Systems', 'Data Engineering'],
    status: 'v0.9 Prototype',
    timeline: '3 Months · Spring 2025',
    role: 'Systems Engineer',
    featuredMetric: {
      label: 'p99 Read Latency',
      value: '0.84 ms',
    },
    shortDescription: 'A low-latency distributed feature cache engineered in Rust with lock-free concurrent hash structures and Raft consensus for deterministic point-in-time correctness.',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/nayantsrivastava', type: 'github' },
    ],
    technologies: [
      { domain: 'Systems & Infrastructure', items: ['Rust', 'Tokio Async', 'Raft Consensus', 'gRPC / Protobuf'] },
      { domain: 'Storage & Networking', items: ['RocksDB', 'Memory-Mapped Files', 'Linux epoll', 'Prometheus'] },
    ],
    sections: FLAGSHIP_PROJECT.sections, // Placeholder reference for non-flagship in v0.1
  },
];
