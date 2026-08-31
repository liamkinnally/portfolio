export interface PermutationImportancePoint {
  feature: string;
  label: string;
  mean: number;
  std: number;
}

// Points-model holdout permutation importance from
// nba-scoring-model/reports/data/permutation_importance.csv.
export const pointsPermutationImportance: PermutationImportancePoint[] = [
  { feature: 'points_avg_10', label: '10-game points avg', mean: 1.796014, std: 0.035186 },
  { feature: 'minutes_avg_5', label: 'Recent minutes', mean: 0.162763, std: 0.012780 },
  { feature: 'activity_proxy_avg_5', label: 'Activity proxy', mean: 0.033293, std: 0.006754 },
  { feature: 'points_avg_5', label: '5-game points avg', mean: 0.014740, std: 0.003197 },
  { feature: 'days_rest', label: 'Days rest', mean: 0.010127, std: 0.002322 },
  { feature: 'vs_opponent_points_avg_5', label: 'Vs. opponent points', mean: 0.005865, std: 0.001855 },
  { feature: 'rebounds_avg_5', label: 'Recent rebounds', mean: 0.005647, std: 0.001311 },
];
