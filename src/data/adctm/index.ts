import canonicalBenchmarkRaw from './canonical-benchmark.json';
import ruleBasedTrajectoryRaw from './rule_based_trajectory.json';
import pidTrajectoryRaw from './pid_trajectory.json';
import ppoTrajectoryRaw from './ppo_trajectory.json';
import zeroTrajectoryRaw from './zero_trajectory.json';

export interface AdctmScenarioConfig {
  num_zones: number;
  initial_temperatures: number[];
  initial_workloads: number[];
  ambient_temperature: number;
  safe_temperature: number;
  max_steps: number;
  target_temperature: number;
  seed: number;
  workload_volatility: number;
  degradation_step: number | null;
  degraded_zone: number | null;
  jitter_bypass_threshold: number;
}

export interface AdctmDetailedMetrics {
  mean_temp: number;
  peak_temp: number;
  p95_temp: number;
  thermal_headroom: number;
  safety_violations: number;
  safety_violations_zones?: number;
  cooling_energy: number;
  mean_cooling_power: number;
  peak_cooling_power: number;
  undercooling: number;
  mean_undercooling: number;
  overcooling: number;
  mean_overcooling: number;
  response_time: number;
}

export interface AdctmCompositeMetrics {
  score: number;
  safety: number;
  energy: number;
  jitter: number;
  target: number;
  raw_energy?: number;
  raw_jitter?: number;
  raw_target_error?: number;
}

export interface AdctmControllerBenchmark {
  controller: string;
  score: number;
  composite_metrics: AdctmCompositeMetrics;
  detailed_metrics: AdctmDetailedMetrics;
}

export interface AdctmTrajectoryStep {
  step: number;
  temperatures: number[];
  workloads: number[];
  cooling: number[];
  ambient_temp: number;
  fault_active: boolean;
  degraded_zone: number | null;
}

export interface AdctmTrajectory {
  controller: string;
  task: string;
  seed: number;
  config: AdctmScenarioConfig;
  metrics: AdctmDetailedMetrics;
  steps: AdctmTrajectoryStep[];
}

export interface AdctmCanonicalData {
  task: string;
  seed: number;
  config: AdctmScenarioConfig;
  controllers: {
    rule_based: AdctmControllerBenchmark;
    pid: AdctmControllerBenchmark;
    ppo: AdctmControllerBenchmark;
    zero: AdctmControllerBenchmark;
  };
}

export const CANONICAL_BENCHMARK = canonicalBenchmarkRaw as unknown as AdctmCanonicalData;

export const TRAJECTORIES: Record<string, AdctmTrajectory> = {
  rule_based: ruleBasedTrajectoryRaw as unknown as AdctmTrajectory,
  pid: pidTrajectoryRaw as unknown as AdctmTrajectory,
  ppo: ppoTrajectoryRaw as unknown as AdctmTrajectory,
  zero: zeroTrajectoryRaw as unknown as AdctmTrajectory,
};
