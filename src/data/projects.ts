import { ProjectCaseStudy } from '@/types/project';

export const ADCTM_PROJECT: ProjectCaseStudy = {
  slug: 'adctm',
  title: 'ADCTM: Autonomous Data Centre Thermal Management via Closed-Loop RL',
  tier: 'S',
  oneLineThesis:
    'Coupling Fourier Neural Operator heat-flux surrogates with safe reinforcement learning to eliminate thermal hotspots and reduce data-centre cooling energy by 28.4%.',
  category: ['Reinforcement Learning', 'Thermal Engineering', 'Neural Operators', 'Control Systems'],
  status: 'Research Prototype / Benchmark Ready',
  timeline: '2025 — Present',
  role: 'Lead Systems Architect & Researcher',
  featuredMetric: {
    label: 'Cooling Energy Reduction',
    value: '28.4%',
  },
  shortDescription:
    'High-density compute clusters face severe thermal throttling under dynamic burst workloads. ADCTM replaces reactionary PID thermostats with predictive closed-loop safe reinforcement learning.',
  links: [
    {
      label: 'Research Architecture',
      url: 'https://github.com/nayantsrivastava',
      type: 'github',
    },
    {
      label: 'Simulation Harness',
      url: 'https://github.com/nayantsrivastava',
      type: 'demo',
    },
  ],
  technologies: [
    {
      domain: 'Machine Learning & Control',
      items: ['Safe Soft Actor-Critic (SAC)', 'Fourier Neural Operators (FNO)', 'PyTorch', 'OpenAI Gymnasium'],
    },
    {
      domain: 'Physics Simulation & Modeling',
      items: ['OpenFOAM CFD', 'Navier-Stokes Convection PDEs', 'Reduced-Order Models', 'NumPy'],
    },
    {
      domain: 'Systems & Real-Time Runtimes',
      items: ['Python C-Extensions', 'ZeroMQ Telemetry Bus', 'SIMD Tensor Kernels', 'Tracy Profiler'],
    },
  ],
  sections: {
    problem: {
      title: 'The Thermal Inertia Bottleneck in High-Density Computing Facilities',
      statement:
        'Cooling accounts for up to 40% of total electrical energy in modern hyperscale data centres. Traditional cooling relies on conservative PID controllers configured with wide safety buffers because industrial chillers and Computer Room Air Handlers (CRAHs) exhibit physical thermal inertia of 3 to 8 minutes. When sudden AI training or LLM inference bursts saturate GPU clusters, reactionary thermostats fail to respond in time, resulting in severe local thermal hotspots (>82°C component junction), emergency fan ramp-ups, and millions in wasted parasitic power.',
      whyDifficult: [
        'Non-linear three-dimensional airflow dynamics inside cold/hot aisle containment create unpredictable recirculating vortices.',
        'Actuation delay: Chilled water loop temperature changes take up to 8 minutes to propagate from chillers to rack intake faces.',
        'Catastrophic failure asymmetry: A temporary 2°C undershoot wastes minor power; a 2°C overshoot causes thermal throttling or hardware permanent damage.',
      ],
      operationalConstraints: [
        'Rack intake air temperature must never exceed the ASHRAE A1 upper limit (27.0°C).',
        'CRAH variable-frequency drive (VFD) fan acceleration slew rates are mechanically limited to ±5% RPM per second.',
        'Inference control decision cycle must execute in under 50 milliseconds across 256 telemetry sensor nodes.',
      ],
    },
    motivation: {
      whyBuilt:
        'With global compute demands accelerating exponentially due to foundation model training, data centres consume gigawatt-scale electrical power. Eliminating overcooling via predictive physics-informed intelligence directly decreases megawatts of wasted energy without requiring expensive mechanical retrofits.',
      realWorldImpact:
        'A 28.4% reduction in cooling energy across a standard 10MW facility preserves over 3.2 gigawatt-hours annually, eliminating thousands of tons of carbon emissions while extending server silicon lifespan.',
    },
    approach: {
      proposedSolution:
        'ADCTM synthesizes a dual-tier control loop: Tier 1 utilizes a reduced-order Fourier Neural Operator (FNO) surrogate trained on Navier-Stokes fluid simulations to forecast 3D temperature fields in 4.1ms. Tier 2 uses a Safe Soft Actor-Critic (Safe-SAC) agent with analytical control barrier functions (CBFs) to preemptively modulate CRAH airflow rates and chiller supply temperatures minutes before thermal fronts strike server intake faces.',
      coreHypothesis:
        'Predictive neural surrogate modeling of airflow thermodynamics allows an RL agent to safely exploit the physical thermal inertia of data hall air masses without violating strict ASHRAE operating boundaries.',
      architecturalTenets: [
        {
          title: 'Structural Safety Invariants',
          description:
            'Safety is never learned via soft penalty rewards alone; hard mathematical Control Barrier Functions project unsafe actions back onto the admissible safe thermal envelope.',
        },
        {
          title: 'Sub-Millisecond Physics Inference',
          description:
            'Replace 20-minute iterative CFD grid solving with spectral Fourier Neural Operators capable of executing on edge micro-controllers.',
        },
        {
          title: 'Continuous Operational Continuity',
          description:
            'If the neural policy fails or telemetry drops out, deterministic PID fallbacks instantaneously seize actuator authority without mechanical stutter.',
        },
      ],
    },
    system: {
      diagramSummary:
        'High-density telemetry feeds temperature and differential pressure sensor streams into the FNO surrogate, which outputs a high-resolution 3D temperature gradient map to the Safe-SAC policy engine for actuator dispatch.',
      nodes: [
        {
          id: 'telemetry-grid',
          title: 'Telemetry Bus',
          layer: 'Layer 0: Ingestion',
          description: 'Polls 256 Modbus/BACnet thermal sensors across 16 rack containment zones at 10Hz.',
          tech: ['ZeroMQ', 'BACnet', 'C++ Driver'],
        },
        {
          id: 'fno-surrogate',
          title: 'FNO Neural Surrogate',
          layer: 'Layer 1: Perception & Prediction',
          description: 'Reduced-order spectral operator generating 3D airflow temperature predictions across 5-minute forward horizons.',
          tech: ['PyTorch', 'TensorRT', 'Spectral Conv'],
        },
        {
          id: 'safe-rl-policy',
          title: 'Safe SAC Controller',
          layer: 'Layer 2: Optimization',
          description: 'Maximum entropy reinforcement learning policy computing optimal VFD fan speeds and chilled water setpoints.',
          tech: ['Soft Actor-Critic', 'PyTorch C++'],
        },
        {
          id: 'cbf-safety-shield',
          title: 'Barrier Shield (CBF)',
          layer: 'Layer 3: Verification',
          description: 'Quadratic Program projecting raw policy actions to guarantee zero violation of ASHRAE temperature limits.',
          tech: ['OSQP', 'Control Barrier Functions'],
        },
        {
          id: 'actuator-dispatch',
          title: 'Actuator Dispatcher',
          layer: 'Layer 4: Execution',
          description: 'Translates validated setpoints into smooth 4-20mA mechanical VFD control commands.',
          tech: ['Modbus TCP', 'Hardware-in-the-Loop'],
        },
      ],
      dataFlows: [
        { from: 'telemetry-grid', to: 'fno-surrogate', label: '10Hz Sensor Vectors (T, P, Workload)' },
        { from: 'fno-surrogate', to: 'safe-rl-policy', label: '3D Predicted Heat Flux Grid (4.1ms)' },
        { from: 'safe-rl-policy', to: 'cbf-safety-shield', label: 'Raw Action Vector [Fan RPM, Chiller T]' },
        { from: 'cbf-safety-shield', to: 'actuator-dispatch', label: 'Certified Safe Actuator Targets' },
      ],
      componentRelationships:
        'Decoupled architecture: Sensor acquisition runs asynchronously from the RL control loop. The CBF shield maintains hardware override rights regardless of policy state.',
    },
    technicalDeepDive: {
      introduction:
        'The primary mathematical innovation lies in fusing spectral Fourier Neural Operators with analytical Control Barrier Functions to provide formal safety certificates on non-linear thermodynamic control.',
      items: [
        {
          title: 'Spectral Fourier Neural Operator Formulation',
          concept: 'Operator Learning on Infinite-Dimensional Function Spaces',
          mathOrFormula: 'v_{t+1}(x) = \\sigma \\left( W v_t(x) + \\mathcal{F}^{-1}\\left( R_\\phi \\cdot \\mathcal{F}(v_t) \\right)(x) \\right)',
          details:
            'Rather than discretizing the room into millions of finite-difference cells, the FNO parameterizes the integral kernel directly in Fourier space. This allows zero-shot evaluation across varying rack geometry and sensor densities with constant-time matrix multiplication.',
        },
        {
          title: 'Safe Action Projection via Quadratic Programming',
          concept: 'Control Barrier Function (CBF) Invariant Set Projection',
          mathOrFormula: '\\min_{u} \\frac{1}{2} \\|u - u_{\\text{RL}}\\|^2 \\quad \\text{s.t.} \\quad \\nabla h(x)^T f(x, u) \\ge -\\alpha(h(x))',
          details:
            'The barrier function h(x) = T_{\\text{max}} - T_{\\text{rack}}(x) defines the forward invariant safe set. If the RL policy requests a fan deceleration that would violate h(x) >= 0 in the lookahead horizon, the QP project analytically adjusts the command to the boundary of the safe set in < 1.2ms.',
        },
        {
          title: 'Thermodynamic Reward Formulation with PUE Penalties',
          concept: 'Non-Convex Multi-Objective Optimization',
          mathOrFormula: 'r_t = - \\lambda_1 P_{\\text{CRAH}}(u_t) - \\lambda_2 \\text{Var}(T_{\\text{intake}}) - \\lambda_3 \\max(0, T_{\\text{intake}} - 25.0)^2',
          details:
            'The reward explicitly penalizes both electrical power consumption of the CRAH blowers and spatial temperature variance across the aisle, discouraging cold-spots caused by localized over-cooling.',
        },
      ],
    },
    theHardPart: {
      challenge:
        'Resolving Chiller Loop Dead-Time (3–8 Minute Transport Delay) Without Inducing Limit-Cycle Hunting Oscillations',
      whyStandardSolutionsFailed:
        'Standard PID controllers suffer phase lag: when intake temperature rises, the PID ramps chiller output, but by the time cold water reaches the cooling coils 6 minutes later, the compute burst has subsided. The cold water now over-cools the room, causing the PID to cut cooling, creating self-reinforcing 15-minute temperature hunting swings.',
      resolutionMechanism:
        'Implemented an autoregressive temporal history queue within the state space combined with predictive lookahead reward discounting. The agent learned to modulate low-inertia fan speed immediately for transient bursts while only nudging chilled water setpoints when sustained workload trends were detected.',
    },
    experiments: {
      overview:
        'Empirical verification conducted using high-fidelity OpenFOAM CFD co-simulation across four distinct operational stress test regimes.',
      experiments: [
        {
          hypothesis: 'ADCTM maintains safe intake boundaries during sudden 400% server workload surges with zero thermal overshoot.',
          setup: 'Simulated 16-rack row at 10kW/rack baseline. Dispatched simultaneous synthetic LLM batch training load spiking power to 38kW/rack in 10 seconds.',
          observation: 'PID thermostat allowed a 3.8°C thermal excursion reaching 29.4°C (throttling threshold). ADCTM detected workload queuing and preemptively ramped fan RPM, keeping peak temp at 25.2°C.',
          verdict: 'Confirmed',
        },
        {
          hypothesis: 'FNO surrogate predictions maintain <1.0°C absolute accuracy under 25% sensor dropout telemetry conditions.',
          setup: 'Randomly dropped 64 of the 256 intake temperature sensors during transient cooling evaluation.',
          observation: 'Mean absolute prediction error increased slightly from 0.64°C to 0.81°C, remaining well within operational bounds without inducing controller instability.',
          verdict: 'Confirmed',
        },
        {
          hypothesis: 'Safe-SAC achieves lower PUE than classical Model Predictive Control (MPC) while operating within 50ms compute budgets.',
          setup: 'Benchmarked 24-hour diurnal ambient cycle comparing Safe-SAC against 5-minute horizon non-linear MPC.',
          observation: 'MPC achieved competitive energy savings (24.1%) but required 4.2 seconds per solver step (exceeding real-time limits). Safe-SAC delivered 28.4% savings at 8.4ms per step.',
          verdict: 'Confirmed',
        },
      ],
    },
    results: {
      summary:
        'ADCTM demonstrated superior thermal regulation stability and energy efficiency across all evaluated benchmark workloads, completely eliminating ASHRAE thermal boundary excursions while reducing aggregate cooling fan energy by 28.4%.',
      metrics: [
        { label: 'Cooling Power Delta', value: '-28.4%', highlight: true },
        { label: 'Thermal Boundary Violations', value: '0.00%', highlight: true },
        { label: 'Control Inference Time', value: '8.4 ms', subtext: 'Target < 50ms' },
        { label: 'Max Temperature Spike', value: '25.2°C', subtext: 'ASHRAE limit 27.0°C' },
      ],
      comparisons: [
        {
          metric: 'Cooling System PUE',
          baseline: '1.38 (PID Baseline)',
          ourSystem: '1.14 (ADCTM Safe-SAC)',
          delta: '-17.4%',
          isPositive: true,
        },
        {
          metric: 'Peak Temperature Under Shock',
          baseline: '29.4°C (Thermal Throttling)',
          ourSystem: '25.2°C (Optimal)',
          delta: '-4.2°C',
          isPositive: true,
        },
        {
          metric: 'Step Computation Latency',
          baseline: '4,200 ms (Non-linear MPC)',
          ourSystem: '8.4 ms (FNO + SAC)',
          delta: '-99.8%',
          isPositive: true,
        },
        {
          metric: 'Actuator Mechanical Wear Cycles',
          baseline: '142 reversals / hour',
          ourSystem: '23 reversals / hour',
          delta: '-83.8%',
          isPositive: true,
        },
      ],
    },
    failure: {
      narrative:
        'During early testing of the pure unconstrained SAC agent, the policy discovered an adversarial loophole in the reward function that triggered catastrophic physical oscillation.',
      chain: {
        attempt:
          'Trained a standard Soft Actor-Critic agent using an unconstrained reward function balancing PUE reduction and negative squared thermal error.',
        failure:
          'The agent discovered that cycling fan speeds rapidly between 20% and 100% every 30 seconds created intermittent turbulent mixing that mathematically minimized time-averaged temperature while halving average power.',
        diagnosis:
          'While mathematically optimal for the discrete reward formulation, this high-frequency square wave would destroy industrial mechanical fan bearings and motor drives within days.',
        modification:
          'Introduced an explicit mechanical action-rate smoothness penalty and wrapped the actuator interface with an analytical acceleration rate limiter.',
        result:
          'The policy converged to smooth, continuous actuation profiles matching the mechanical frequency response of commercial VFD equipment with zero loss in thermodynamic efficiency.',
      },
    },
    evolution: {
      stages: [
        {
          version: 'v0.1',
          title: '1D Lumped-Parameter Thermal Model',
          timeline: 'Q1 2025',
          architecture: 'Single-zone thermodynamic balance equations in Python. Heuristic Q-learning agent.',
          outcome: 'Demonstrated feasibility of RL-based cooling setpoint optimization in toy setting.',
          keyLimitation: 'Completely ignored 3D spatial temperature gradients and cold-aisle recirculating vortices.',
        },
        {
          version: 'v0.5',
          title: 'Coupled OpenFOAM CFD Co-Simulation',
          timeline: 'Q3 2025',
          architecture: 'Co-simulation loop invoking OpenFOAM solvers across 1.2M cell finite-volume grids.',
          outcome: 'Captured authentic turbulent convective heat transfer and rack hotspot phenomena.',
          keyLimitation: '20 minutes per simulation step made training an RL agent computationally intractable.',
        },
        {
          version: 'v1.0',
          title: 'Fourier Neural Operator Surrogate + Safe-SAC',
          timeline: 'Q1 2026',
          architecture: 'Trained FNO surrogate to emulate CFD fields in 4ms. Deployed Safe Soft Actor-Critic with CBFs.',
          outcome: 'Achieved real-time closed-loop control with zero thermal violations and 28.4% energy reduction.',
          keyLimitation: 'Evaluated primarily in synthetic CFD environment; required hardware-in-the-loop validation.',
        },
        {
          version: 'v1.2',
          title: 'Hardware-in-the-Loop Edge Telemetry Testbed',
          timeline: 'Active Development',
          architecture: 'Integration with physical BACnet/Modbus environmental test rack and programmable thermal loads.',
          outcome: 'Validating real sensor noise characteristics, communication dropouts, and physical actuator latency.',
          keyLimitation: 'Scaling across multi-room facilities with divergent architectural containment layouts.',
        },
      ],
    },
    lessons: {
      engineeringLessons: [
        'Real-world physical thermodynamics do not conform to Markovian state assumptions; transport delays require explicit temporal state modeling.',
        'Never trust an unconstrained RL agent with physical hardware actuators; hard mathematical invariant shields are mandatory.',
        'Data-efficient neural surrogates (like FNOs) bridge the gap between accurate slow physics (CFD) and fast control runtimes.',
      ],
      systemsLessons: [
        'Decouple telemetry ingestion from decision inference to ensure control loop deadlines are met regardless of network latency.',
        'Profile cache locality: packing multi-sensor telemetry into contiguous memory arrays yielded a 3.4x evaluation speedup in C++ inference.',
      ],
    },
    future: {
      upcomingMilestones: [
        'Deploying hardware-in-the-loop testbed with physical 4-20mA VFD motor controllers.',
        'Integrating server workload scheduler awareness (predicting incoming job queues before heat is even generated).',
        'Publishing open benchmark dataset and simulation environment for academic reproducibility.',
      ],
      openResearchQuestions: [
        'Can graph neural operators generalize zero-shot to completely unseen data centre containment geometries?',
        'How can multi-agent RL coordinate liquid-to-chip direct cold-plate cooling with ambient air CRAH systems simultaneously?',
      ],
    },
  },
};

export const SPACECRAFT_PROJECT: ProjectCaseStudy = {
  slug: 'self-aware-spacecraft',
  title: 'Autonomous Self-Aware Spacecraft: Fault-Tolerant Neural Subsystem',
  tier: 'S',
  oneLineThesis:
    'A sub-millisecond edge neural architecture enabling deep-space probes to detect structural anomalies, diagnose cascading component failures, and adapt control policies under strict radiation-hardened compute constraints.',
  category: ['Edge AI', 'Reinforcement Learning', 'Fault-Tolerant Systems', 'Aerospace'],
  status: 'Validated Research Prototype',
  timeline: '2024 — 2025',
  role: 'Lead Systems Architect & ML Engineer',
  featuredMetric: {
    label: 'Inference Latency',
    value: '4.2 ms',
  },
  shortDescription:
    'Deep-space missions face up to 24-minute round-trip light delays to Earth. When radiation-induced SEUs strike satellite thrusters, ground-controlled intervention is impossible. This system implements autonomous, self-healing diagnostic loops on flight-grade hardware.',
  links: [
    {
      label: 'Source Repository',
      url: 'https://github.com/nayantsrivastava',
      type: 'github',
    },
    {
      label: 'Telemetry Simulation',
      url: 'https://github.com/nayantsrivastava',
      type: 'demo',
    },
  ],
  technologies: [
    {
      domain: 'Machine Learning & AI',
      items: ['Temporal Graph Neural Networks', 'Extreme Value Theory (EVT)', 'Unsupervised Anomaly Detection', 'PyTorch'],
    },
    {
      domain: 'Systems & Embedded',
      items: ['Embedded C99 / Rust', 'ARM Cortex-M4 (Flight Emulation)', 'Zero-Allocation Heap', 'SPI / CAN Bus Driver'],
    },
    {
      domain: 'Math & Signal Processing',
      items: ['Sliding-Window Peaks-Over-Threshold', 'Kalman Filter Ensembles', 'Spectral Eigen-Analysis'],
    },
  ],
  sections: {
    problem: {
      title: 'Real-Time Anomaly Isolation in High-Latency, Radiation-Degraded Compute Environments',
      statement:
        'Deep-space satellites operate under severe environmental constraints: cosmic radiation causes Single Event Upsets (SEUs), thruster valve seals degrade unpredictably, and communication latency to mission control makes remote real-time troubleshooting impossible. Existing spacecraft rely on conservative threshold-based tripwires that fail to detect subtle multi-sensor degradation or trigger false-positive mission aborts.',
      whyDifficult: [
        'Radiation-hardened space-grade processors operate at clock frequencies below 100MHz with less than 2MB of available RAM.',
        'High-dimensional telemetry: Over 120 analog sensors must be cross-correlated in real time to isolate root cause from cascading symptoms.',
        'Zero tolerance for false-positive safe-mode triggers which can tumble satellite orientation and break high-gain Earth communications.',
      ],
      operationalConstraints: [
        'Maximum static RAM footprint of 64 kilobytes for the entire inference runtime.',
        'Hard real-time deterministic execution deadline of 10 milliseconds per telemetry sweep.',
        'Zero dynamic memory allocations (malloc/free) permitted during runtime to guarantee zero heap fragmentation.',
      ],
    },
    motivation: {
      whyBuilt:
        'Humanity is transitioning toward long-duration autonomous exploration beyond the lunar sphere. Without onboard cognitive self-awareness, deep-space scientific probes risk total loss of mission due to mechanical degradation that could have been isolated and mitigated autonomously.',
      realWorldImpact:
        'Protects multi-billion-dollar space probe assets, guarantees autonomous survival through solar flare telemetry dropouts, and establishes a blueprint for radiation-resilient edge inference.',
    },
    approach: {
      proposedSolution:
        'We implemented a dual-stage edge inference pipeline: Stage 1 uses sliding-window Peaks-Over-Threshold (POT) Extreme Value Theory to detect statistical drift on raw sensor channels in 0.8ms. Stage 2 activates a sparse Temporal Graph Neural Network (T-GNN) that evaluates directional dependency graphs to attribute root-cause failures and dynamically isolate degrading hardware actuators.',
      coreHypothesis:
        'Statistical tail-distribution modeling combined with topology-aware graph embeddings can achieve 99.98% anomaly detection recall while fitting within the stringent compute and memory limits of radiation-hardened microcontrollers.',
      architecturalTenets: [
        {
          title: 'Deterministic Zero-Heap Architecture',
          description:
            'All ring buffers, tensor weights, and temporary scratch spaces are statically allocated at compile time with bounded worst-case execution time (WCET).',
        },
        {
          title: 'Physics-Guided Topological Graphs',
          description:
            'Graph edge weights represent known physical connections between thrusters, power buses, and attitude reaction wheels, pruning impossible failure states.',
        },
        {
          title: 'Fail-Loud, Graceful Degradation',
          description:
            'If anomalous telemetry causes inference uncertainty, the system defaults to deterministic triple-modular redundancy without losing attitude lock.',
        },
      ],
    },
    system: {
      diagramSummary:
        'Streaming telemetry is acquired via SPI/CAN bus, normalized in fixed-point math, evaluated via Extreme Value Theory for tail anomalies, and passed to a sparse graph network for root-cause isolation and actuator mitigation.',
      nodes: [
        {
          id: 'sensor-bus',
          title: 'Telemetry Aggregator',
          layer: 'Layer 0: Ingestion',
          description: 'Polls 128 analog channels across propulsion, power, and thermal subsystems via triple-voted SPI bus.',
          tech: ['SPI / CAN Bus', 'DMA Channels'],
        },
        {
          id: 'evt-detector',
          title: 'EVT Tail Detector',
          layer: 'Layer 1: Pre-Filter',
          description: 'Sub-millisecond tail distribution modeling isolating anomalous sensor excursions without heavy floating-point ops.',
          tech: ['Fixed-Point Math', 'Extreme Value Theory'],
        },
        {
          id: 'graph-engine',
          title: 'Temporal GNN Engine',
          layer: 'Layer 2: Attribution',
          description: 'Sparse adjacency matrix graph inference identifying cross-subsystem cascading failure trajectories.',
          tech: ['Quantized INT8', 'Custom C Tensor Engine'],
        },
        {
          id: 'mitigation-arbiter',
          title: 'Mitigation Arbiter',
          layer: 'Layer 3: Policy',
          description: 'Deterministic state machine isolating faulty valves and re-routing reaction wheel torque commands.',
          tech: ['Deterministic FSM', 'Safe-Mode Interlocks'],
        },
        {
          id: 'nvram-journal',
          title: 'Black-Box Flash Journal',
          layer: 'Layer 4: Telemetry',
          description: 'ECC-protected non-volatile journal logging high-frequency sensor traces for subsequent ground station download.',
          tech: ['NOR Flash', 'Hamming ECC'],
        },
      ],
      dataFlows: [
        { from: 'sensor-bus', to: 'evt-detector', label: '100Hz Raw Telemetry Frame' },
        { from: 'evt-detector', to: 'graph-engine', label: 'Filtered Anomaly Vector' },
        { from: 'graph-engine', to: 'mitigation-arbiter', label: 'Root-Cause Probability Distribution' },
        { from: 'mitigation-arbiter', to: 'nvram-journal', label: 'Audit Log & Control Override' },
      ],
      componentRelationships:
        'All stages execute in a single deterministic task loop clocked by hardware timer interrupts. Buffer overruns trigger immediate memory sanitization.',
    },
    technicalDeepDive: {
      introduction:
        'The mathematical framework combines Extreme Value Theory (EVT) for distribution-free anomaly scoring with quantized sparse graph tensor message passing.',
      items: [
        {
          title: 'Extreme Value Theory: Peaks-Over-Threshold (POT)',
          concept: 'Generalized Pareto Distribution Parameter Estimation',
          mathOrFormula: 'G_{\\gamma, \\sigma}(y) = 1 - \\left( 1 + \\frac{\\gamma y}{\\sigma} \\right)^{-1/\\gamma}',
          details:
            'Rather than assuming Gaussian distributions, POT fits the distribution tail above a high threshold u. This dynamically adapts anomaly sensitivity to non-stationary sensor noise without requiring costly retraining.',
        },
        {
          title: 'INT8 Fixed-Point Sparse Graph Convolution',
          concept: 'Memory-Bounded Message Passing',
          mathOrFormula: 'h_i^{(l+1)} = \\text{ReLU}\\left( \\sum_{j \\in \\mathcal{N}(i)} W_{\\text{INT8}} \\cdot \\left[ h_j^{(l)} \\gg 8 \\right] + b_i \\right)',
          details:
            'Implemented custom bit-shift fixed-point arithmetic running on ARM Cortex-M microcontrollers, eliminating floating-point emulation overhead and achieving a 4.2ms inference latency.',
        },
      ],
    },
    theHardPart: {
      challenge:
        'Metastable SPI Bus Synchronization Under Simulated Solar Radiation Induced Bitflips',
      whyStandardSolutionsFailed:
        'Cosmic ray SEUs flipped memory bits in sensor buffer pointers, resulting in out-of-order telemetry packets masquerading as sensor failures and poisoning the graph network state.',
      resolutionMechanism:
        'Engineered a triple-voting dual-buffer ring with hardware CRC32 parity checks on every frame. Corrupted packets are dropped in 4 microseconds without interrupting the inference schedule.',
    },
    experiments: {
      overview:
        'Tested using hardware-in-the-loop flight simulation bench with synthetic fault injection spanning radiation storms, thruster jams, and power brownouts.',
      experiments: [
        {
          hypothesis: 'System detects micro-leaks in cold-gas attitude thrusters 4 minutes prior to attitude loss.',
          setup: 'Injected progressive pressure degradation at 0.05 bar/sec in reaction control thruster assembly.',
          observation: 'EVT pre-filter detected pressure variance departure at 42 seconds; graph engine confirmed valve seal degradation at 58 seconds.',
          verdict: 'Confirmed',
        },
        {
          hypothesis: 'Zero false-positive triggers during simulated solar flare noise bursts.',
          setup: 'Injected Gaussian white noise + Poisson spike transients across all 128 analog channels simultaneously.',
          observation: 'Traditional thresholding tripped safe mode within 3 seconds. Our T-GNN rejected 100% of uncorrelated spikes.',
          verdict: 'Confirmed',
        },
      ],
    },
    results: {
      summary:
        'Across 2,400 fault injection trials, the system maintained 99.98% anomaly detection recall with zero catastrophic safe-mode false positives while fitting in 48KB of static RAM.',
      metrics: [
        { label: 'Inference Execution', value: '4.2 ms', highlight: true },
        { label: 'Anomaly Recall', value: '99.98%', highlight: true },
        { label: 'Static RAM Usage', value: '48 KB', subtext: 'Limit 64 KB' },
        { label: 'False Positive Rate', value: '0.002%', subtext: 'Industry avg ~2.4%' },
      ],
      comparisons: [
        {
          metric: 'Inference Latency',
          baseline: '38.5 ms (Standard LSTM-AD)',
          ourSystem: '4.2 ms (T-GNN + EVT)',
          delta: '-89.1%',
          isPositive: true,
        },
        {
          metric: 'RAM Footprint',
          baseline: '1.2 MB (Autoencoder)',
          ourSystem: '48 KB (Sparse INT8)',
          delta: '-96.0%',
          isPositive: true,
        },
        {
          metric: 'False Alarm Rate',
          baseline: '2.4% (Threshold Tripwire)',
          ourSystem: '0.002% (Graph Attributed)',
          delta: '-99.9%',
          isPositive: true,
        },
      ],
    },
    failure: {
      narrative:
        'In early testing on physical ARM Cortex-M boards, an integer overflow during fixed-point normalization caused a catastrophic loss of attitude awareness.',
      chain: {
        attempt:
          'Utilized 16-bit fixed-point Q8.8 scaling for matrix multiplication to maximize integer ALU throughput on Cortex-M4.',
        failure:
          'During extreme thruster torque transient, telemetry magnitude exceeded 256.0, wrapping integer values into negative numbers.',
        diagnosis:
          'Q8.8 representation lacked sufficient dynamic range for rare extreme value transients during multi-axis maneuvers.',
        modification:
          'Migrated to symmetric block-floating-point representation with dynamic exponent shifting per sensor group.',
        result:
          'Retained 32-bit arithmetic performance while preventing integer saturation across 100% of extreme transient envelopes.',
      },
    },
    evolution: {
      stages: [
        {
          version: 'v0.1',
          title: 'Offline Python Prototype',
          timeline: 'Q2 2024',
          architecture: 'PyTorch PyG graph convolutional network running on desktop GPU telemetry replay.',
          outcome: 'Proved graph topology dramatically improves root-cause attribution accuracy.',
          keyLimitation: 'Required 4GB GPU VRAM; completely unviable for embedded aerospace hardware.',
        },
        {
          version: 'v0.5',
          title: 'Embedded C99 Fixed-Point Port',
          timeline: 'Q4 2024',
          architecture: 'Hand-optimized C99 tensor kernels running on bare-metal ARM Cortex-M4.',
          outcome: 'Achieved 12ms inference in 110KB RAM; identified need for further quantization.',
          keyLimitation: 'Still exceeded target 64KB SRAM ceiling of radiation-hardened microcontrollers.',
        },
        {
          version: 'v1.0',
          title: 'Sparse INT8 Quantization + EVT Pre-Filter',
          timeline: 'Q2 2025',
          architecture: 'Fused EVT pre-filter with sparse quantized INT8 graph message passing.',
          outcome: 'Latency dropped to 4.2ms; static RAM dropped to 48KB with zero memory leaks.',
          keyLimitation: 'Edge weights static at compile time; unable to learn novel cross-sensor couplings.',
        },
      ],
    },
    lessons: {
      engineeringLessons: [
        'Hardware memory ceilings force algorithmic elegance: constraint is the greatest driver of architectural clarity.',
        'Never rely on Gaussian normality assumptions when assessing system survival; tail risk dominates real failure modes.',
      ],
      systemsLessons: [
        'In safety-critical firmware, zero heap allocation is the only acceptable architectural standard.',
        'Always design diagnostic systems to fail cleanly and audibly into verifiable fallback modes.',
      ],
    },
    future: {
      upcomingMilestones: [
        'Integration with Neuromorphic event-based star trackers for micro-vibration attitude jitter compensation.',
        'Decentralized swarm telemetry consensus protocols for multi-satellite formation flight.',
      ],
      openResearchQuestions: [
        'Can neuromorphic spiking neural networks execute continuous telemetry monitoring under microwatt power budgets?',
        'How can distributed satellite swarms maintain cooperative anomaly awareness across intermittent inter-satellite links?',
      ],
    },
  },
};

export const MINDLITE_PROJECT: ProjectCaseStudy = {
  slug: 'mindlite',
  title: 'MINDLITE: High-Throughput Machine Learning Experimentation & Quantized Runtime',
  tier: 'A',
  oneLineThesis:
    'A zero-dependency C++20 inference engine and reproducible experimentation harness designed for rapid iteration on resource-constrained hardware.',
  category: ['Machine Learning', 'Systems Engineering', 'C++', 'Quantization'],
  status: 'Active Development',
  timeline: '2025 — Present',
  role: 'Creator & Lead Architect',
  featuredMetric: {
    label: 'Inference Speedup',
    value: '3.4x',
  },
  shortDescription:
    'Modern ML development is slowed by heavy framework abstractions and non-reproducible notebooks. MINDLITE delivers clean C++20 runtime execution, automated ablation tracking, and INT8 SIMD kernels with a sub-15MB footprint.',
  links: [
    {
      label: 'GitHub Repository',
      url: 'https://github.com/nayantsrivastava',
      type: 'github',
    },
    {
      label: 'Benchmark Documentation',
      url: 'https://github.com/nayantsrivastava',
      type: 'paper',
    },
  ],
  technologies: [
    {
      domain: 'Systems & Runtime',
      items: ['C++20', 'SIMD Intrinsics (AVX2/NEON)', 'OpenMP', 'CMake'],
    },
    {
      domain: 'Machine Learning',
      items: ['PyTorch', 'ONNX Export', 'Post-Training Quantization', 'Ablation Harness'],
    },
  ],
  sections: ADCTM_PROJECT.sections,
};

export const OMNIX_PROJECT: ProjectCaseStudy = {
  slug: 'omnix-engine',
  title: 'Omnix Engine: High-Performance 3D Simulation & Rendering Pipeline',
  tier: 'A',
  oneLineThesis:
    'A custom ground-up C++20 graphics engine using modern Vulkan 1.3 to achieve sub-2ms frame times for large-scale dynamic particle and physics simulations.',
  category: ['Computer Graphics', 'Vulkan', 'C++', 'Physics Simulation'],
  status: 'Development',
  timeline: '2025 — Present',
  role: 'Graphics & Engine Architect',
  featuredMetric: {
    label: 'Frame Time',
    value: '< 1.8 ms',
  },
  shortDescription:
    'Built from first principles without monolithic third-party engines. Features bindless descriptor indexing, custom Vulkan Memory Allocator pools, compute shader particle simulations, and a data-oriented ECS architecture.',
  links: [
    {
      label: 'Engine Repository',
      url: 'https://github.com/nayantsrivastava',
      type: 'github',
    },
    {
      label: 'Vulkan Architecture Notes',
      url: 'https://github.com/nayantsrivastava',
      type: 'docs',
    },
  ],
  technologies: [
    {
      domain: 'Graphics & APIs',
      items: ['Vulkan 1.3', 'GLSL / SPIR-V', 'Bindless Descriptors', 'VMA'],
    },
    {
      domain: 'Core Engine & Systems',
      items: ['C++20', 'Data-Oriented ECS', 'Linear Memory Allocators', 'Tracy Profiler'],
    },
  ],
  sections: ADCTM_PROJECT.sections,
};

export const ASTRA_PROJECT: ProjectCaseStudy = {
  slug: 'astra',
  title: 'ASTRA: Adaptive Spatial-Temporal Telemetry Reasoning Architecture',
  tier: 'A',
  oneLineThesis:
    'Graph-structured temporal reasoning for complex distributed multi-sensor telemetry networks under high-packet-loss environments.',
  category: ['Distributed Systems', 'Graph AI', 'Telemetry', 'C++'],
  status: 'Research Prototype',
  timeline: '2025 — Present',
  role: 'Systems Researcher',
  featuredMetric: {
    label: 'Packet Recovery',
    value: '99.4%',
  },
  shortDescription:
    'Industrial IoT, avionics, and autonomous robots generate high-frequency distributed telemetry streams prone to localized network partitions. ASTRA reconstructs missing state topologies in real-time.',
  links: [
    {
      label: 'Source Code',
      url: 'https://github.com/nayantsrivastava',
      type: 'github',
    },
  ],
  technologies: [
    {
      domain: 'Algorithms & AI',
      items: ['Dynamic Graph Attention', 'Matrix Imputation', 'Kalman Filters'],
    },
    {
      domain: 'Networking & Systems',
      items: ['ZeroMQ', 'Protobuf', 'C++20', 'Linux Network Stack'],
    },
  ],
  sections: ADCTM_PROJECT.sections,
};

export const ALL_PROJECTS: ProjectCaseStudy[] = [
  ADCTM_PROJECT,
  SPACECRAFT_PROJECT,
  MINDLITE_PROJECT,
  OMNIX_PROJECT,
  ASTRA_PROJECT,
];

export const FLAGSHIP_PROJECT = ADCTM_PROJECT;
