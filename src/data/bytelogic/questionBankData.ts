/**
 * ML Hands-On Problem Bank — Structured Data
 * Auto-generated from ml-hands-on-problem-set.md
 *
 * Content updates: edit this file only — UI components consume it directly.
 */

import type {
  QuestionBankData,
  QuestionBankTopic,
  QuestionBankCategory,
} from '@/types/question-bank';

// ---------------------------------------------------------------------------
// Helper: build a dataset source URL from the source string
// ---------------------------------------------------------------------------
function kaggleUrl(slug: string): string {
  return `https://www.kaggle.com/datasets/${slug}`;
}
function kaggleCompUrl(slug: string): string {
  return `https://www.kaggle.com/competitions/${slug}`;
}
function hfUrl(slug: string): string {
  return `https://huggingface.co/datasets/${slug}`;
}

// ---------------------------------------------------------------------------
// REGRESSION MODELS
// ---------------------------------------------------------------------------

const topic6_linearRegression: QuestionBankTopic = {
  topicNumber: '6',
  name: 'Linear Regression',
  category: 'Regression Models',
  dataset: {
    name: 'California Housing',
    source: 'Kaggle: camnugent/california-housing-prices',
    sourceUrl: kaggleUrl('camnugent/california-housing-prices'),
    rationale:
      'Clean, continuous target, mild nonlinearity — good for seeing the normal equation and GD agree.',
  },
  tiers: [
    {
      tier: 1,
      title: 'Tier 1',
      subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Derive the closed-form (normal equation) solution for simple linear regression by minimizing MSE with calculus.' },
        { id: 2, text: 'By hand, fit a line to 5 hand-picked (x, y) points using the normal equation.' },
        { id: 3, text: 'Explain why MSE, not MAE, gives you the normal equation\'s nice closed form.' },
        { id: 4, text: 'List and explain all 5 classical assumptions of linear regression (linearity, independence, homoscedasticity, normality of residuals, no multicollinearity). For each, describe what happens to your model if it\'s violated.' },
        { id: 5, text: 'What\'s the geometric interpretation of least squares as a projection?' },
      ],
    },
    {
      tier: 2,
      title: 'Tier 2',
      subtitle: 'Implement from scratch',
      questions: [
        { id: 6, text: 'Implement multiple linear regression using the closed-form normal equation (matrix inversion) in NumPy — no sklearn.' },
        { id: 7, text: 'Implement the same model using batch gradient descent. Plot cost vs. iteration and tune the learning rate until it converges cleanly.' },
        { id: 8, text: 'Implement stochastic gradient descent and mini-batch gradient descent versions of the same problem. Compare convergence speed and noise in the loss curve across all three.' },
        { id: 9, text: 'Implement residual analysis from scratch: plot residuals vs. fitted values, and a Q-Q plot to check normality, without using statsmodels.' },
      ],
    },
    {
      tier: 3,
      title: 'Tier 3',
      subtitle: 'Use it properly',
      questions: [
        { id: 10, text: 'Fit linear regression on a real dataset (e.g. California housing) using sklearn. Report R², MAE, RMSE on a held-out test set.' },
        { id: 11, text: 'Standardize/normalize features and show, empirically, why this matters for gradient descent convergence speed but not for the normal equation\'s answer.' },
        { id: 12, text: 'Detect multicollinearity using VIF (variance inflation factor) and show what happens to your coefficients when you drop a collinear feature.' },
      ],
    },
    {
      tier: 4,
      title: 'Tier 4',
      subtitle: 'Break it, diagnose it',
      questions: [
        { id: 13, text: 'Deliberately engineer a dataset where linear regression underfits (nonlinear relationship) and one where it overfits (too many polynomial features, too little data). Show the learning curves for both.' },
        { id: 14, text: 'Inject an outlier into your dataset and show how much it distorts the fitted line. Then implement a simple robust alternative (e.g. Huber loss) from scratch and compare.' },
        { id: 15, text: 'Take a dataset that visibly violates homoscedasticity (variance grows with x). Show the effect on confidence intervals and propose a fix (transform y, weighted least squares).' },
      ],
    },
    {
      tier: 5,
      title: 'Tier 5',
      subtitle: 'Deploy / extend',
      questions: [
        { id: 16, text: 'Wrap your trained model in a minimal FastAPI service with a /predict endpoint, input validation, and a health check.' },
        { id: 17, text: 'Implement online (incremental) linear regression that updates its weights as new data streams in, without retraining from scratch (recursive least squares or SGD-based).' },
        { id: 18, text: 'Research task: read about Bayesian linear regression and implement a version that returns a predictive distribution, not just a point estimate. Compare its uncertainty estimates on out-of-distribution inputs.' },
      ],
    },
  ],
};

const topic7_regularizedRegression: QuestionBankTopic = {
  topicNumber: '7',
  name: 'Regularized Regression',
  category: 'Regression Models',
  dataset: {
    name: 'Ames Housing',
    source: 'Kaggle: prevek18/ames-housing-dataset',
    sourceUrl: kaggleUrl('prevek18/ames-housing-dataset'),
    rationale:
      '~80 features, genuinely high-dimensional — Lasso actually has something to select.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Write out the Ridge and Lasso loss functions. Explain geometrically (using the constraint-region diagram) why Lasso produces sparse solutions and Ridge doesn\'t.' },
        { id: 2, text: 'Explain the bias-variance tradeoff in one paragraph, then explain specifically how increasing λ (regularization strength) shifts you along that tradeoff.' },
        { id: 3, text: 'What does Elastic Net do that neither pure Ridge nor pure Lasso can, and why would you want that?' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement Ridge regression via the closed-form solution (modified normal equation) in NumPy.' },
        { id: 5, text: 'Implement Lasso regression using coordinate descent (since Lasso has no closed form) — this is the harder, more instructive one.' },
        { id: 6, text: 'Implement Elastic Net by combining both, and verify your implementation matches sklearn\'s output on a toy dataset within numerical tolerance.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'On a high-dimensional dataset (more features than you\'d naturally need), fit Ridge, Lasso, and Elastic Net with sklearn. Plot the regularization path (coefficients vs. λ) for each.' },
        { id: 8, text: 'Use Lasso for feature selection: show which features survive at different λ values and sanity-check that against domain knowledge or correlation with the target.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Use cross-validation (RidgeCV, LassoCV) to select λ properly instead of eyeballing it. Explain why picking λ using test-set performance is a methodological error.' },
        { id: 10, text: 'Construct a dataset with groups of correlated features. Show Lasso\'s instability (which one of the group it picks changes with small data perturbations) versus Ridge\'s stability, and Elastic Net\'s compromise.' },
        { id: 11, text: 'Push λ to an extreme in both directions and describe exactly what breaks (all coefficients to zero vs. essentially unregularized).' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Implement group Lasso (regularization applied per feature-group, not per feature) from scratch for a case where features come in natural blocks (e.g. one-hot encoded categories).' },
        { id: 13, text: 'Research task: read about the LARS algorithm as a faster path-following alternative to coordinate descent for Lasso, and benchmark it against your coordinate-descent implementation.' },
      ],
    },
  ],
};

const topic8_svr: QuestionBankTopic = {
  topicNumber: '8',
  name: 'Support Vector Regression',
  category: 'Regression Models',
  dataset: {
    name: 'Medical Cost Personal Dataset',
    source: 'Kaggle: mirichoi0218/insurance',
    sourceUrl: kaggleUrl('mirichoi0218/insurance'),
    rationale:
      'Smoker × BMI interaction creates real nonlinearity — RBF kernel should visibly beat linear.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain the epsilon-insensitive loss function and draw the epsilon-tube concept for a 1D regression problem.' },
        { id: 2, text: 'Explain slack variables: what problem do they solve, and how do they relate to the epsilon-tube?' },
        { id: 3, text: 'Explain the kernel trick conceptually — why can you work in a high-dimensional feature space without ever computing coordinates in that space?' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement linear SVR by directly solving its (convex) optimization problem using a QP solver (e.g. cvxopt) rather than sklearn.' },
        { id: 5, text: 'Extend your implementation to use an RBF kernel by building the kernel matrix and modifying the dual optimization problem accordingly.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 6, text: 'Fit SVR with linear, RBF, and polynomial kernels on the same nonlinear dataset using sklearn. Compare fits visually and by RMSE.' },
        { id: 7, text: 'Tune C, epsilon, and gamma (for RBF) using grid search with cross-validation. Report which parameter has the largest effect on your dataset and why.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 8, text: 'Show what happens to the model (visually) as epsilon → 0 (all points become support vectors) and as epsilon → very large (nearly no points matter).' },
        { id: 9, text: 'On a large dataset (50k+ rows), time-profile SVR training and explain why SVR scales poorly (relate to the kernel matrix\'s size).' },
        { id: 10, text: 'Compare RBF-kernel SVR against a plain linear model and a tree-based model on a dataset with a genuinely nonlinear relationship — show where SVR wins and where it\'s not worth the cost.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 11, text: 'Implement a simplified SMO (Sequential Minimal Optimization) algorithm from scratch to train linear SVR without an external QP solver.' },
        { id: 12, text: 'Research task: read about Nyström approximation or random Fourier features to make kernel SVR scale to larger datasets, and implement one of them.' },
      ],
    },
  ],
};

const topic9_decisionTreeRegression: QuestionBankTopic = {
  topicNumber: '9',
  name: 'Decision Tree Regression',
  category: 'Regression Models',
  dataset: {
    name: 'Bike Sharing Demand',
    source: 'Kaggle/UCI: bike-sharing-dataset',
    sourceUrl: kaggleUrl('lakshmi25npathi/bike-sharing-dataset'),
    rationale:
      'Strong seasonal/hourly nonlinear patterns — trees find structure linear models miss.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain how a decision tree chooses a split for regression using MSE reduction. Walk through one split calculation by hand on a tiny dataset.' },
        { id: 2, text: 'Explain the difference between using MSE vs. MAE as a splitting criterion, and when you\'d prefer one over the other.' },
        { id: 3, text: 'Explain why unpruned decision trees are high-variance, low-bias models.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement a full CART-style regression tree from scratch in Python/NumPy: recursive splitting, MSE-based split selection, a stopping condition (max depth or min samples per leaf).' },
        { id: 5, text: 'Add pre-pruning to your implementation (max depth, min samples split, min samples leaf) and show its effect on train vs. validation error.' },
        { id: 6, text: 'Implement basic feature importance (total MSE reduction attributable to each feature across all splits).' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Fit DecisionTreeRegressor on a real dataset with sklearn. Visualize the tree (e.g. plot_tree) and interpret 2–3 of the top splits in plain language.' },
        { id: 8, text: 'Compare training error vs. validation error across increasing max_depth values and plot the classic overfitting curve.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Deliberately grow a tree to full depth on a noisy dataset and show it memorizing noise (near-zero training error, poor validation error). Then apply cost-complexity pruning and show the recovery.' },
        { id: 10, text: 'Compare a decision tree\'s decision boundary/predictions against linear regression on a dataset with a smooth underlying trend — explain why trees produce "staircase" predictions and when that\'s a real weakness.' },
        { id: 11, text: 'Investigate how sensitive your tree is to small perturbations in the training data (bootstrap the data 20 times, refit, compare the resulting trees) — this sets up why ensembles help.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Implement a simple form of tree post-pruning (reduced-error pruning using a validation set) from scratch.' },
        { id: 13, text: 'Research task: implement or study "oblique" decision trees (splits on linear combinations of features rather than single features) and compare against standard axis-aligned trees.' },
      ],
    },
  ],
};

const topic10_ensembleRegression: QuestionBankTopic = {
  topicNumber: '10',
  name: 'Ensemble Regression',
  category: 'Regression Models',
  dataset: {
    name: 'House Prices: Advanced Regression Techniques',
    source: 'Kaggle competition: house-prices-advanced-regression-techniques',
    sourceUrl: kaggleCompUrl('house-prices-advanced-regression-techniques'),
    rationale:
      'Has an active leaderboard, so you can benchmark your XGBoost/LightGBM/CatBoost results against real submissions.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain bagging vs. boosting in one paragraph each — what problem does each solve (variance vs. bias), and how?' },
        { id: 2, text: 'Explain, conceptually, how gradient boosting fits successive trees to residuals (pseudo-residuals / negative gradients).' },
        { id: 3, text: 'List the key differences between XGBoost, LightGBM, and CatBoost (tree growth strategy, handling of categorical features, speed tricks) at a high level.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement Random Forest Regression from scratch: bootstrap sampling + your Topic-9 decision tree + feature bagging at each split + averaging predictions.' },
        { id: 5, text: 'Implement basic Gradient Boosting Regression from scratch: iteratively fit shallow trees to residuals, with a learning rate, and combine additively.' },
        { id: 6, text: 'Implement a simple stacking regressor from scratch: train 2–3 base models, use their out-of-fold predictions as features for a meta-model.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Fit Random Forest, XGBoost, LightGBM, and CatBoost on the same real dataset using their official libraries. Compare RMSE, training time, and inference time.' },
        { id: 8, text: 'Build a VotingRegressor that averages a linear model, a tree, and an SVR. Compare against each individual model.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Tune n_estimators, max_depth, and learning_rate for your gradient boosting model, and show the tradeoff between too few estimators (underfit) and too many with too high a learning rate (overfit) via learning curves.' },
        { id: 10, text: 'On a dataset with a genuinely smooth, mostly-linear relationship, compare a well-tuned linear/regularized model against a well-tuned ensemble — show that "ensembles are usually stronger" isn\'t universally true.' },
        { id: 11, text: 'Investigate feature importance stability: compute feature importances from 10 different Random Forest seeds and check how much they vary.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Build an end-to-end pipeline (preprocessing → model selection via CV → best ensemble → serialized artifact) and deploy it behind a REST API with input schema validation.' },
        { id: 13, text: 'Research task: write up, with small experiments, when classical ensembles (XGBoost/LightGBM) still beat neural networks on tabular data in 2025–2026, and why (cite the relevant benchmark papers/discussions you find).' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// CLASSIFICATION MODELS
// ---------------------------------------------------------------------------

const topic11_logisticRegression: QuestionBankTopic = {
  topicNumber: '11',
  name: 'Logistic Regression',
  category: 'Classification Models',
  dataset: {
    name: 'Titanic',
    source: 'Kaggle: titanic',
    sourceUrl: kaggleCompUrl('titanic'),
    rationale:
      'The canonical binary classification set — small enough to iterate fast.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Derive the sigmoid function from log-odds (logit) first principles.' },
        { id: 2, text: 'Derive the cross-entropy loss for binary classification from maximum likelihood estimation.' },
        { id: 3, text: 'Explain the decision boundary of logistic regression geometrically, and why it\'s always linear (in the original feature space).' },
        { id: 4, text: 'Explain the softmax generalization for multi-class classification and how cross-entropy generalizes accordingly.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 5, text: 'Implement binary logistic regression from scratch (sigmoid + cross-entropy + gradient descent) in NumPy.' },
        { id: 6, text: 'Implement multi-class logistic regression from scratch using softmax + categorical cross-entropy (one-vs-rest is not allowed here — do true softmax).' },
        { id: 7, text: 'Implement L2-regularized logistic regression from scratch and show its effect on the decision boundary for a small 2D dataset.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 8, text: 'Fit logistic regression with sklearn on a real binary classification dataset. Report accuracy, precision, recall, F1, and ROC-AUC.' },
        { id: 9, text: 'Plot predicted class probabilities (not just hard labels) and interpret what "0.51 vs 0.99 confidence" means practically.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 10, text: 'Perform threshold tuning: instead of the default 0.5 cutoff, sweep thresholds and plot precision/recall/F1 vs. threshold. Pick a threshold justified by a business scenario (e.g. "false negatives are 10x costlier than false positives").' },
        { id: 11, text: 'Construct a dataset where classes are linearly inseparable and show logistic regression failing. Then show that adding polynomial/interaction features fixes it (or doesn\'t, and explain why).' },
        { id: 12, text: 'Investigate class imbalance: train on an imbalanced dataset, show accuracy is misleading, and fix it with class weighting or resampling.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 13, text: 'Deploy a logistic regression model as a scoring service with a configurable decision threshold passed at inference time.' },
        { id: 14, text: 'Research task: implement calibration (Platt scaling) for a logistic regression model whose probabilities are miscalibrated, and evaluate improvement with a calibration curve / Brier score.' },
      ],
    },
  ],
};

const topic12_svm: QuestionBankTopic = {
  topicNumber: '12',
  name: 'Support Vector Machine',
  category: 'Classification Models',
  dataset: {
    name: 'Heart Disease UCI',
    source: 'Kaggle: ronitf/heart-disease-uci',
    sourceUrl: kaggleUrl('ronitf/heart-disease-uci'),
    rationale:
      'Small, low-dimensional, clean enough to actually visualize decision boundaries on 2 features.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Derive the maximum-margin objective for a linearly separable hard-margin SVM.' },
        { id: 2, text: 'Explain the role of the C parameter in the soft-margin formulation, and connect it to the bias-variance tradeoff.' },
        { id: 3, text: 'Explain the kernel trick for classification with the same rigor as you did for SVR, but now connect it to the decision boundary becoming nonlinear in original feature space.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement a hard-margin linear SVM classifier by solving its QP formulation directly (via cvxopt or similar).' },
        { id: 5, text: 'Implement a soft-margin SVM with slack variables, again via QP.' },
        { id: 6, text: 'Extend to an RBF-kernel SVM by modifying the QP to use the kernel matrix (kernelized dual formulation).' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Fit SVC with linear, RBF, and polynomial kernels with sklearn on a real dataset. Visualize decision boundaries (on a 2D projection or 2-feature subset) for each kernel.' },
        { id: 8, text: 'Tune C and gamma via grid search with cross-validation and plot the resulting validation-accuracy heatmap.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Show, empirically, how increasing C leads to overfitting (near-perfect train accuracy, worse validation accuracy) with a noisy dataset — visualize the margin shrinking.' },
        { id: 10, text: 'Compare hard-margin vs soft-margin SVM on a dataset with a few mislabeled/outlier points — show the hard-margin version failing to converge or performing terribly.' },
        { id: 11, text: 'Benchmark SVM training time as dataset size grows (1k, 10k, 50k rows) and explain the scaling bottleneck.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Implement SMO (Sequential Minimal Optimization) from scratch for a kernelized SVM classifier, and validate it matches sklearn\'s SVC on a toy dataset.' },
        { id: 13, text: 'Research task: read about One-Class SVM (used later in anomaly detection) and explain how the same margin-maximization idea gets repurposed for a fundamentally different (unsupervised) task.' },
      ],
    },
  ],
};

const topic13_decisionTreeClassification: QuestionBankTopic = {
  topicNumber: '13',
  name: 'Decision Trees Classification',
  category: 'Classification Models',
  dataset: {
    name: 'Red Wine Quality',
    source: 'Kaggle: uciml/red-wine-quality-cortez-et-al-2009',
    sourceUrl: kaggleUrl('uciml/red-wine-quality-cortez-et-al-2009'),
    rationale:
      'Multi-class (quality scores), good for Gini vs. entropy comparisons.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Derive Gini impurity and entropy formulas. By hand, compute both for a small 2-class node.' },
        { id: 2, text: 'Compare Gini vs. entropy: when do they pick different splits, and does it usually matter in practice?' },
        { id: 3, text: 'Explain how impurity-based splitting generalizes to multi-class problems.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement a CART-style classification tree from scratch: Gini-based splitting, recursive partitioning, a leaf-node majority-vote prediction rule.' },
        { id: 5, text: 'Add support for entropy as an alternative criterion and confirm your implementation produces (near-)identical trees to sklearn on a toy dataset for both criteria.' },
        { id: 6, text: 'Implement pruning (pre-pruning via depth/min-samples, and simple post-pruning via validation-set-based subtree removal).' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Fit DecisionTreeClassifier with sklearn on a real multi-class dataset. Visualize the tree and manually trace one prediction path, explaining the decision in plain language.' },
        { id: 8, text: 'Extract and rank feature importances; sanity-check the top 3 against domain intuition.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Grow a tree to full depth on a noisy multi-class dataset — show the overfitting via a train/validation accuracy gap — then tune max_depth/min_samples_leaf via cross-validation to close that gap.' },
        { id: 10, text: 'Compare a decision tree\'s decision boundary against logistic regression and an SVM (RBF) on the same 2D synthetic dataset. Characterize each model\'s "signature" boundary shape.' },
        { id: 11, text: 'Investigate tree instability: bootstrap the training set 20 times, refit, and measure how much the resulting trees (and their top splits) vary.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Serve tree predictions along with a human-readable decision-path explanation (i.e., "why did the model predict this?") through an API endpoint.' },
        { id: 13, text: 'Research task: study the CHAID and C4.5 algorithms as alternatives to CART and note their key structural differences (multi-way splits, different impurity measures).' },
      ],
    },
  ],
};

const topic14_ensembleClassification: QuestionBankTopic = {
  topicNumber: '14',
  name: 'Ensemble Classification',
  category: 'Classification Models',
  dataset: {
    name: 'Telco Customer Churn',
    source: 'Kaggle: blastchar/telco-customer-churn',
    sourceUrl: kaggleUrl('blastchar/telco-customer-churn'),
    rationale:
      'Realistic imbalance + high-cardinality categoricals — where CatBoost\'s native categorical handling actually matters.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain how AdaBoost reweights misclassified examples between rounds, and why that\'s a form of boosting distinct from gradient boosting.' },
        { id: 2, text: 'Explain what "calibration" means for an ensemble classifier and why averaging many trees\' votes doesn\'t automatically give well-calibrated probabilities.' },
        { id: 3, text: 'Explain SHAP values at a conceptual level: what game-theoretic idea (Shapley values) are they borrowing, and what do they let you say about a single prediction that plain feature importance can\'t?' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement Random Forest Classification from scratch: bootstrap sampling + your Topic-13 tree + feature bagging + majority vote.' },
        { id: 5, text: 'Implement AdaBoost from scratch: weighted training examples, weak learner (decision stumps), and the alpha-weighted combination rule.' },
        { id: 6, text: 'Implement a basic Voting Classifier (hard and soft voting) from scratch, combining 3 models you\'ve already built.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Fit Random Forest, AdaBoost, XGBoost, LightGBM, and CatBoost on the same real multi-class dataset. Compare accuracy, F1 (macro), and training time in a single table.' },
        { id: 8, text: 'Build a StackingClassifier with sklearn, using out-of-fold predictions from 3 base models as meta-features. Compare against the best individual base model.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Check calibration: plot reliability diagrams for Random Forest vs. logistic regression on the same dataset, and apply Platt scaling or isotonic regression to fix a miscalibrated ensemble.' },
        { id: 10, text: 'Compute SHAP values for a trained XGBoost model on a handful of individual predictions and interpret at least 3 of them in plain language, comparing SHAP explanations against the model\'s global feature importances.' },
        { id: 11, text: 'Deliberately overfit a boosting model (too many rounds, too little regularization) and show early stopping (using a validation set) fixing it.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Deploy an ensemble model with a monitoring layer that logs prediction distributions over time (to catch drift) alongside the prediction API.' },
        { id: 13, text: 'Research task: compare 3 boosting libraries (XGBoost, LightGBM, CatBoost) specifically on a dataset with high-cardinality categorical features, and write up which handles them best and why (native categorical support vs. manual encoding).' },
      ],
    },
  ],
};

const topic15_neuralBaselines: QuestionBankTopic = {
  topicNumber: '15',
  name: 'Neural Baselines for Classification',
  category: 'Classification Models',
  dataset: {
    name: 'Fashion-MNIST (CNN) + IMDB Reviews (Transformer)',
    source: 'HF: zalando-datasets/fashion_mnist, HF: stanfordnlp/imdb',
    sourceUrl: hfUrl('zalando-datasets/fashion_mnist'),
    rationale:
      'Fashion-MNIST for the CNN exercise, IMDB for fine-tuning a small pretrained text classifier.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain what an MLP is: layers, weights, activation functions, and how forward propagation computes a prediction.' },
        { id: 2, text: 'Explain backpropagation conceptually (chain rule through layers) without derivation, then derive it for a single hidden-layer MLP with a sigmoid output.' },
        { id: 3, text: 'Explain, at a high level, what an embedding layer does and why it\'s more efficient than one-hot encoding for high-cardinality categorical inputs.' },
        { id: 4, text: 'Explain what a CNN\'s convolution and pooling operations are doing intuitively for image classification.' },
        { id: 5, text: 'Explain, at a conceptual level (no math needed here), what self-attention does in a Transformer-based classifier and why it can outperform CNNs on some tasks.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 6, text: 'Implement a simple MLP classifier from scratch in raw NumPy: forward pass, backward pass (manual backprop), and gradient descent update — no PyTorch.' },
        { id: 7, text: 'Implement a minimal embedding-based classifier from scratch (a lookup table + MLP) for a categorical-heavy tabular dataset.' },
        { id: 8, text: 'Implement a small CNN (2–3 conv layers) from scratch in PyTorch and train it on MNIST or a similarly small image dataset.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 9, text: 'Train the same MLP classifier using PyTorch (proper DataLoader, optimizer, loss function) on a real tabular dataset. Compare against your from-scratch NumPy version\'s results.' },
        { id: 10, text: 'Use a pretrained lightweight Transformer classifier (e.g. via HuggingFace) for a text classification task via fine-tuning, following proper train/val/test methodology.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 11, text: 'On the same tabular dataset, compare your best classical ensemble (from Topic 14) against your MLP. Report which wins, and hypothesize why (dataset size, feature type, noise level).' },
        { id: 12, text: 'Deliberately train your MLP with a too-high learning rate (diverges), a too-low learning rate (barely moves), and a good one — plot all three loss curves together.' },
        { id: 13, text: 'Investigate overfitting in your CNN: train without regularization/augmentation on a small image dataset, show the train/val gap, then apply dropout and/or data augmentation and show it close.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 14, text: 'Deploy your trained CNN or MLP classifier as an inference service (batching requests if you want the extra challenge) with proper input preprocessing matching training-time preprocessing exactly.' },
        { id: 15, text: 'Write up a decision framework: given a dataset\'s size, dimensionality, feature types, and available compute, when should you reach for a classical ensemble vs. a neural baseline vs. a pretrained Transformer? Ground it in the actual results from steps 9–11.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// MODEL EVALUATION
// ---------------------------------------------------------------------------

const topic16_evaluationMetrics: QuestionBankTopic = {
  topicNumber: '16',
  name: 'Evaluation Metrics',
  category: 'Model Evaluation',
  dataset: {
    name: 'Credit Card Fraud Detection',
    source: 'Kaggle: mlg-ulb/creditcardfraud',
    sourceUrl: kaggleUrl('mlg-ulb/creditcardfraud'),
    rationale:
      '492 fraud out of 284,807 transactions — this is the dataset for learning why accuracy lies and PR curves matter.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Write out the formulas for MAE, MSE, RMSE, and R², and explain what each penalizes differently (e.g. why RMSE punishes large errors more than MAE).' },
        { id: 2, text: 'Derive Precision, Recall, and F1 from a confusion matrix by hand on a small example.' },
        { id: 3, text: 'Explain what ROC-AUC actually measures (probability that a random positive is ranked above a random negative) and why it\'s threshold-independent.' },
        { id: 4, text: 'Explain log loss and why it penalizes confident-and-wrong predictions much more harshly than accuracy would.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 5, text: 'Implement MAE, MSE, RMSE, and R² from scratch in NumPy and verify against sklearn\'s implementations.' },
        { id: 6, text: 'Implement precision, recall, F1, and a full confusion matrix from scratch for both binary and multi-class cases.' },
        { id: 7, text: 'Implement ROC curve and AUC computation from scratch (sort by predicted probability, sweep thresholds, compute TPR/FPR) and verify against roc_auc_score.' },
        { id: 8, text: 'Implement K-fold and Stratified K-fold cross-validation from scratch (index splitting logic only — you can still fit sklearn models inside the loop).' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 9, text: 'Evaluate a real classifier using the full suite: accuracy, precision, recall, F1, ROC-AUC, confusion matrix, and a precision-recall curve. Report macro vs. micro vs. weighted averaging for the multi-class case and explain when each is appropriate.' },
        { id: 10, text: 'Compute Top-K accuracy for a multi-class classifier with many classes (e.g. 20+) and explain when it\'s a more meaningful metric than plain accuracy.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 11, text: 'On an imbalanced dataset, show a classifier with high accuracy but terrible recall on the minority class. Use the PR curve (not ROC) to justify why PR is more informative than ROC-AUC here.' },
        { id: 12, text: 'Implement calibration error (ECE — Expected Calibration Error) from scratch and compute it for a model you know is overconfident; visualize with a reliability diagram.' },
        { id: 13, text: 'Design a cost-sensitive evaluation for a scenario you define (e.g. fraud detection where false negatives cost 50x false positives) and show how the "best" model changes when you optimize for that cost function instead of accuracy.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 14, text: 'Build a reusable evaluation report generator (a function/script that takes predictions + ground truth and spits out all relevant metrics + plots automatically) you can reuse across future projects.' },
        { id: 15, text: 'Research task: read about metrics beyond the classical set (e.g. Matthews Correlation Coefficient, Cohen\'s Kappa) and justify a case where they\'d be more appropriate than F1 or accuracy.' },
      ],
    },
  ],
};

const topic17_modelSelection: QuestionBankTopic = {
  topicNumber: '17',
  name: 'Model Selection Techniques',
  category: 'Model Evaluation',
  dataset: {
    name: 'Telco Customer Churn (reuse) or House Prices (reuse)',
    source: 'Kaggle: blastchar/telco-customer-churn',
    sourceUrl: kaggleUrl('blastchar/telco-customer-churn'),
    rationale:
      'Reusing a dataset you already know well means the tuning results are legible, not confounded by unfamiliar data.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain the difference between Grid Search and Random Search, and why Random Search is often more efficient in high-dimensional hyperparameter spaces (Bergstra & Bengio\'s argument).' },
        { id: 2, text: 'Explain, conceptually, how Bayesian Optimization uses a surrogate model (e.g. Gaussian Process) to search more intelligently than random search.' },
        { id: 3, text: 'Explain what a validation curve shows vs. what a learning curve shows — they\'re often confused, so be precise about the x-axis of each.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement grid search from scratch (nested loops over a hyperparameter dict + cross-validation scoring) without GridSearchCV.' },
        { id: 5, text: 'Implement random search from scratch by sampling hyperparameters from defined distributions.' },
        { id: 6, text: 'Implement a minimal Bayesian optimization loop from scratch using a simple Gaussian Process surrogate (you can use scikit-learn\'s GP regressor as a building block, just not an AutoML/Bayesian-opt library) for tuning 1–2 hyperparameters.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Use GridSearchCV and RandomizedSearchCV on a real model + dataset, and compare wall-clock time and best score found for an equal "budget" of trials.' },
        { id: 8, text: 'Use a proper Bayesian optimization library (e.g. Optuna) to tune 4+ hyperparameters jointly for a gradient boosting model, and compare against your random search results.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Plot validation curves (score vs. a single hyperparameter, e.g. tree depth) and learning curves (score vs. training set size) for the same model, and write down what each one tells you that the other doesn\'t.' },
        { id: 10, text: 'Design and run an ablation study: take a full pipeline (feature engineering + model), remove one component at a time, and measure the performance drop — report which component matters most.' },
        { id: 11, text: 'Deliberately tune hyperparameters against the test set (the wrong way) and show the inflated performance estimate, then redo it correctly with a validation set / nested CV, and quantify the gap.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Set up nested cross-validation (outer loop for unbiased performance estimate, inner loop for hyperparameter tuning) and explain why plain CV-then-report is optimistic when you also tuned hyperparameters using CV.' },
        { id: 13, text: 'Research task: read about multi-fidelity optimization (e.g. Hyperband, successive halving) and explain how it speeds up hyperparameter search by allocating more budget to promising configurations early.' },
      ],
    },
  ],
};

const topic18_biasVariance: QuestionBankTopic = {
  topicNumber: '18',
  name: 'Bias-Variance Tradeoff',
  category: 'Model Evaluation',
  dataset: {
    name: 'Bike Sharing Demand (reuse)',
    source: 'Kaggle/UCI: bike-sharing-dataset',
    sourceUrl: kaggleUrl('lakshmi25npathi/bike-sharing-dataset'),
    rationale:
      'Sweep tree depth / polynomial degree on data you\'ve already modeled once.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Derive the bias-variance decomposition of expected test error (bias² + variance + irreducible noise) for a regression setting.' },
        { id: 2, text: 'Explain, precisely, the difference between "training error" and "testing error" as diagnostic signals, and how the gap between them tells you where you are on the tradeoff.' },
        { id: 3, text: 'Explain how L1 and L2 regularization each shift you along the bias-variance tradeoff, and why they do it differently (relate back to Topic 7).' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Empirically estimate bias and variance for a model by simulation: generate many bootstrap training sets from a known ground-truth function, fit a model to each, and decompose the average test error into bias², variance, and noise.' },
        { id: 5, text: 'Repeat the above across models of increasing complexity (e.g. polynomial degree 1 through 15) and plot how bias² decreases while variance increases — this is the textbook curve, but you\'re building it yourself from raw simulation, not citing it.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 6, text: 'Reproduce the same bias-variance curve using a real dataset and increasingly complex sklearn models (e.g. regularization strength sweep, or tree depth sweep) instead of a synthetic simulation.' },
        { id: 7, text: 'Show, with actual numbers on a real dataset, how increasing data size shrinks variance for a fixed high-complexity model — connect this to "data size vs. model size" tradeoffs.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 8, text: 'Construct a genuinely noisy dataset (high irreducible error) and show that even the "perfect" model can\'t drive test error to zero — separate irreducible error from the reducible bias+variance terms empirically.' },
        { id: 9, text: 'Implement early stopping from scratch for an iterative model (gradient descent based) by monitoring validation loss, and show it acting as an implicit regularizer against variance — plot train/val loss curves with the stopping point marked.' },
        { id: 10, text: 'Take a real project (e.g. one of your ensemble models from Topic 10 or 14) and diagnose, from its learning curve alone, whether it\'s high-bias or high-variance, then apply the correct fix (more data / more regularization / more complexity) and show the improvement.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 11, text: 'Write a short technical note (with your own plots) explaining the bias-variance tradeoff as if teaching a junior engineer, using at least 2 of your own experiments above as evidence rather than textbook diagrams.' },
        { id: 12, text: 'Research task: read a critique or refinement of the classical bias-variance tradeoff in the context of deep learning (e.g. "double descent") and summarize, in your own words, why the classical U-shaped curve doesn\'t fully hold for overparameterized neural networks.' },
      ],
    },
  ],
};

const topic19_errorAnalysis: QuestionBankTopic = {
  topicNumber: '19',
  name: 'Error Analysis',
  category: 'Model Evaluation',
  dataset: {
    name: 'Telco Customer Churn or Titanic (reuse)',
    source: 'Kaggle: blastchar/telco-customer-churn',
    sourceUrl: kaggleUrl('blastchar/telco-customer-churn'),
    rationale:
      'You want a dataset small enough to manually read 20 misclassified rows.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain how to read a confusion matrix for a multi-class problem: which off-diagonal cells matter most, and how you\'d prioritize investigating them.' },
        { id: 2, text: 'Explain the difference between a "data issue" and a "model issue" as root causes of poor performance, with an example of each.' },
        { id: 3, text: 'Explain what "slice-based evaluation" means and why aggregate metrics (overall accuracy) can hide serious per-slice failures.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement a function that, given predictions and ground truth, automatically extracts the top-N worst false positives and false negatives (by confidence/margin) for manual inspection.' },
        { id: 5, text: 'Implement slice-based evaluation from scratch: given a dataset with metadata columns (e.g. region, device type, class), compute per-slice accuracy/F1 and flag slices performing well below the global average.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 6, text: 'Take a real trained classifier and build a full confusion matrix heatmap. Identify the single most confused class pair and hypothesize why (look at actual misclassified examples).' },
        { id: 7, text: 'Run slice-based evaluation on a real dataset with at least 2 meaningful subgroups, and report whether performance is fair/consistent across them.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 8, text: 'Collect 20 failure cases from a real model, manually categorize each as "data issue" (mislabeled, ambiguous, out-of-distribution) or "model issue" (genuinely hard but learnable pattern the model missed), and report the split.' },
        { id: 9, text: 'Based on your failure case review, make one concrete change (fix labels, add a feature, adjust class weights, collect more data for a weak slice) and re-measure — show before/after per-slice metrics.' },
        { id: 10, text: 'Set up an iterative improvement loop: error analysis → hypothesis → fix → re-evaluate, and run it for at least 2 full cycles on the same model, documenting what changed each time.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 11, text: 'Build a lightweight "human review" interface (even a simple script or notebook widget) that surfaces the model\'s lowest-confidence or most-disagreed-upon predictions for manual labeling/review.' },
        { id: 12, text: 'Research task: read about systematic error analysis frameworks used in production ML teams (e.g. slice discovery methods, error clustering via embeddings) and propose how you\'d apply one to a project of your own.' },
      ],
    },
  ],
};

const topic20_foundationModelEval: QuestionBankTopic = {
  topicNumber: '20',
  name: 'Foundation Model Evaluation',
  category: 'Model Evaluation',
  dataset: {
    name: 'TruthfulQA (factuality) + RealToxicityPrompts (toxicity)',
    source: 'HF: truthfulqa/truthful_qa, HF: allenai/real-toxicity-prompts',
    sourceUrl: hfUrl('truthfulqa/truthful_qa'),
    rationale:
      'Purpose-built eval sets — you\'re not training on these, just evaluating a pretrained/open model against them.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain, in your own words, why accuracy/F1 alone are insufficient for evaluating large foundation models (LLMs, multimodal models) — what dimensions do they miss?' },
        { id: 2, text: 'Define hallucination, factuality, robustness, toxicity, and bias/fairness as evaluation dimensions, each with a concrete example of a failure in that dimension.' },
        { id: 3, text: 'Explain what "benchmark contamination" means (training data overlapping with test benchmarks) and why it inflates reported performance.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Build a small factuality-checking harness: given a set of model-generated answers to factual questions with known ground truth, implement an automatic scorer (exact match / fuzzy match) plus manual spot-checking, and report the gap between automatic and manual scores.' },
        { id: 5, text: 'Implement a basic robustness test: take a working prompt/input, apply small perturbations (typos, paraphrasing, reordering), and measure how much the model\'s output/accuracy degrades.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 6, text: 'Run an existing safety/toxicity classifier (e.g. via an open-source tool or API) over a set of model outputs and report the toxicity rate, along with 2–3 examples that were flagged.' },
        { id: 7, text: 'Design and run a small human-preference evaluation: generate 2 different model outputs for the same set of prompts, have (yourself or others) blind-rate which is better, and compute a preference win-rate.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 8, text: 'Investigate benchmark contamination risk for a specific open-source model + benchmark pair: research whether the benchmark\'s data is known/suspected to overlap with the model\'s training set, and explain how that would bias reported scores.' },
        { id: 9, text: 'Design a private, held-out test set for a specific task, explicitly to avoid contamination, and explain the tradeoffs (smaller size, need to keep it truly private, cost of labeling) versus using a public benchmark.' },
        { id: 10, text: 'Write a bias/fairness audit for a specific model + task: define a protected attribute of interest, measure whether performance or error rates differ meaningfully across groups, and report findings honestly even if they\'re inconclusive.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 11, text: 'Write a full evaluation report for a model you\'ve worked with (any model from this problem set, or an open-source LLM) covering accuracy/quality, robustness, and at least one safety dimension — structured the way a production readiness review would be.' },
        { id: 12, text: 'Research task: draft a "safety and reliability checklist" you would require before deploying a foundation model into a product, informed by what you\'ve read about real incidents or evaluation frameworks (e.g. from model cards, system cards, or evaluation papers you find).' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// UNSUPERVISED LEARNING
// ---------------------------------------------------------------------------

const topicU1_introUnsupervised: QuestionBankTopic = {
  topicNumber: 'U1',
  name: 'Intro to Unsupervised Learning',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'Mall Customer Segmentation',
    source: 'Kaggle: vjchoudhary7/customer-segmentation-tutorial-in-python',
    sourceUrl: kaggleUrl('vjchoudhary7/customer-segmentation-tutorial-in-python'),
    rationale:
      'Small enough that manual EDA and a clustering algorithm can be directly compared.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Contrast supervised and unsupervised learning precisely: what\'s different about the objective function, not just "labels vs. no labels."' },
        { id: 2, text: 'List 3 real-world applications where unsupervised learning is the only option (no labels exist or are prohibitively expensive) and explain why.' },
        { id: 3, text: 'Explain the difference between unsupervised learning and self-supervised learning — they\'re often conflated, so be precise about what "labels" self-supervised learning actually uses.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Do a full exploratory data analysis (EDA) from scratch (no auto-EDA libraries) on an unfamiliar dataset: distributions, correlations, missing values, outliers — and write up 3 "hidden patterns" you found before applying any model.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 5, text: 'Take the same dataset and run it through a standard unsupervised pipeline (e.g. scale → PCA → cluster) using sklearn, and compare what the model "discovers" against what you found manually in your EDA.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 6, text: 'Find a dataset where your manual EDA and an unsupervised model\'s output disagree (e.g. you saw 2 obvious groups but the clustering algorithm finds a different number) and investigate why.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 7, text: 'Research task: read about representation learning as the unifying idea behind modern unsupervised/self-supervised methods (embeddings, latent spaces) and write a short explainer connecting classical unsupervised learning (PCA, clustering) to it as its predecessor.' },
      ],
    },
  ],
};

const topicU2_clustering: QuestionBankTopic = {
  topicNumber: 'U2',
  name: 'Clustering',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'Mall Customer Segmentation (reuse) or Online Retail II',
    source: 'Kaggle: mashlyn/online-retail-ii-uci',
    sourceUrl: kaggleUrl('mashlyn/online-retail-ii-uci'),
    rationale:
      'Online Retail II is better if you want to build customer segments from real RFM (recency/frequency/monetary) features.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain the K-Means algorithm\'s two-step iterative procedure (assignment, update) and why it\'s guaranteed to converge (though possibly to a local optimum).' },
        { id: 2, text: 'Explain the difference between agglomerative and divisive hierarchical clustering, and describe at least 2 linkage criteria (single, complete, average, Ward).' },
        { id: 3, text: 'Explain how DBSCAN defines clusters via density (core points, border points, noise) instead of centroids, and why that lets it find non-spherical clusters.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement K-Means from scratch in NumPy (random initialization, assignment step, update step, convergence check).' },
        { id: 5, text: 'Implement K-Means++ initialization from scratch and show it converges faster / finds better clusters than random initialization on the same dataset.' },
        { id: 6, text: 'Implement agglomerative hierarchical clustering from scratch (distance matrix + iterative merging) for a small dataset, and produce a dendrogram.' },
        { id: 7, text: 'Implement DBSCAN from scratch (epsilon-neighborhood queries + core/border/noise classification + cluster expansion).' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 8, text: 'Run K-Means, hierarchical clustering, and DBSCAN with sklearn on the same real dataset. Visualize all three cluster assignments side by side.' },
        { id: 9, text: 'Use the Elbow Method and Silhouette Score together to choose K for K-Means, and explain a case where they disagree.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 10, text: 'Construct a dataset with non-spherical (e.g. moon-shaped or ring-shaped) clusters and show K-Means failing while DBSCAN succeeds — explain exactly why K-Means\'s centroid assumption breaks down here.' },
        { id: 11, text: 'Cluster a high-dimensional dataset (50+ features) directly, then again after dimensionality reduction (PCA to 2–10 dims), and compare cluster quality (silhouette score) — explain the curse of dimensionality\'s effect on distance-based clustering.' },
        { id: 12, text: 'Cluster a set of embeddings (e.g. sentence embeddings or image embeddings from a pretrained model) instead of raw tabular features, and qualitatively inspect whether the resulting clusters are semantically meaningful.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 13, text: 'Build a clustering pipeline that automatically selects K (via silhouette score sweep) and refits, packaged as a reusable function/service.' },
        { id: 14, text: 'Research task: read about clustering in very high-dimensional embedding spaces at scale (e.g. approximate nearest-neighbor-based clustering methods) and explain why naive K-Means becomes impractical at scale, and what\'s used instead in production systems.' },
      ],
    },
  ],
};

const topicU3_dimensionalityReduction: QuestionBankTopic = {
  topicNumber: 'U3',
  name: 'Dimensionality Reduction',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'MNIST or Fashion-MNIST',
    source: 'HF: ylecun/mnist, HF: zalando-datasets/fashion_mnist',
    sourceUrl: hfUrl('ylecun/mnist'),
    rationale:
      'High-dimensional (784 pixels), visually interpretable clusters after projection.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Derive PCA from the eigen-decomposition of the covariance matrix — explain why the top eigenvectors capture maximum variance directions.' },
        { id: 2, text: 'Explain t-SNE\'s core idea (converting distances to probabilities, matching high-D and low-D distributions via KL divergence) at a conceptual level.' },
        { id: 3, text: 'Explain how UMAP differs from t-SNE (theoretical basis in manifold learning/topology, generally better at preserving global structure) without necessarily going into the full math.' },
        { id: 4, text: 'Explain the difference between linear (PCA) and nonlinear (t-SNE, UMAP) dimensionality reduction, and when linear methods fail.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 5, text: 'Implement PCA from scratch using eigen-decomposition (or SVD) of the covariance matrix — no sklearn — and verify it matches sklearn\'s PCA output (up to sign flips) on a toy dataset.' },
        { id: 6, text: 'Implement a simplified version of t-SNE from scratch (compute pairwise affinities in high-D, initialize low-D points, gradient-descend on KL divergence) — this is a genuinely hard implementation exercise, budget real time for it.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Apply PCA, t-SNE, and UMAP to the same real high-dimensional dataset (e.g. MNIST or a text-embedding dataset) using standard libraries, and visually compare the 2D projections.' },
        { id: 8, text: 'Use PCA as a preprocessing step before a classifier (e.g. reduce to 95% explained variance) and compare downstream model performance and training time against using raw features.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Show a case where PCA fails to separate classes that are visually well-separated by t-SNE/UMAP (i.e. construct or find data with nonlinear structure) — explain why the linear assumption breaks down.' },
        { id: 10, text: 'Investigate t-SNE\'s perplexity parameter: run it at very low, medium, and very high perplexity on the same dataset and show how the resulting visualization changes — explain why t-SNE plots shouldn\'t be over-interpreted (cluster sizes/distances aren\'t meaningful).' },
        { id: 11, text: 'Visualize the same embedding space (e.g. word or image embeddings) with PCA vs UMAP and discuss which one seems to preserve semantically meaningful neighborhoods better, and why.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Build a reusable "embedding visualization" utility that takes any high-dimensional embedding matrix and produces PCA + UMAP plots with optional color-coding by a label/metadata column.' },
        { id: 13, text: 'Research task: read about how dimensionality reduction is used specifically to visualize latent spaces of generative models (e.g. VAEs, diffusion models) and explain what "latent space interpolation" reveals about a model\'s learned representation (this sets up Topic 5).' },
      ],
    },
  ],
};

const topicU4_associationRules: QuestionBankTopic = {
  topicNumber: 'U4',
  name: 'Association Rule Learning',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'Instacart Market Basket Analysis',
    source: 'Kaggle: instacart-market-basket-analysis',
    sourceUrl: kaggleCompUrl('instacart-market-basket-analysis'),
    rationale:
      '3M+ real grocery orders — large enough that Apriori vs. FP-Growth speed differences actually show up.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Define support, confidence, and lift precisely, with a worked hand-calculation on a tiny transaction dataset (5–6 "baskets").' },
        { id: 2, text: 'Explain the Apriori principle (all subsets of a frequent itemset must be frequent) and why it\'s used to prune the search space.' },
        { id: 3, text: 'Explain, briefly, why association rule learning is a lower priority in modern deep-learning-centric pipelines (what problems does it solve that embeddings/neural methods have largely absorbed, and what niche use cases remain).' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement the Apriori algorithm from scratch: generate candidate itemsets, prune by minimum support, iterate.' },
        { id: 5, text: 'Implement rule generation from frequent itemsets (computing confidence and lift for each candidate rule) from scratch.' },
        { id: 6, text: 'Implement FP-Growth from scratch (build the FP-tree, mine conditional pattern bases) — this is meaningfully harder than Apriori, treat it as the challenge implementation for this topic.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 7, text: 'Run a market basket analysis on a real transactions dataset using mlxtend\'s Apriori/FP-Growth implementations, and report the top 5 rules by lift with a plain-language interpretation of each.' },
        { id: 8, text: 'Benchmark your from-scratch Apriori vs. FP-Growth (or the library versions) on the same dataset for speed as the minimum support threshold decreases.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Sweep the minimum support and minimum confidence thresholds and show how the number of discovered rules explodes or collapses — pick thresholds you\'d actually defend for a real business use case and justify them.' },
        { id: 10, text: 'Find or construct a case where high-confidence rules are actually just reflecting a very frequent item (misleadingly high confidence, low lift) — show why lift is necessary to avoid trivial/misleading rules.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 11, text: 'Build a small "recommend related items" function powered by your mined association rules, given a partial basket as input.' },
        { id: 12, text: 'Research task: identify 1–2 "optional use cases" for association rule mining that persist today outside of market basket analysis (e.g. web usage mining, intrusion detection rule discovery) and briefly explain how the same support/confidence/lift framework applies.' },
      ],
    },
  ],
};

const topicU5_neuralUnsupervised: QuestionBankTopic = {
  topicNumber: 'U5',
  name: 'Neural Nets for Unsupervised Learning',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'MNIST / Fashion-MNIST (reuse)',
    source: 'HF: ylecun/mnist, HF: zalando-datasets/fashion_mnist',
    sourceUrl: hfUrl('ylecun/mnist'),
    rationale:
      'Standard for autoencoder/VAE reconstruction and latent-space interpolation exercises.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain the autoencoder architecture (encoder, bottleneck/latent space, decoder) and why reconstruction loss forces it to learn a compressed representation.' },
        { id: 2, text: 'Explain how a denoising autoencoder differs from a standard one, and why forcing it to reconstruct clean input from corrupted input produces more robust features.' },
        { id: 3, text: 'Explain the variational autoencoder\'s key innovation over a standard autoencoder: what does it mean for the latent space to be a distribution, and why does that enable generation (not just compression)?' },
        { id: 4, text: 'Explain, at a conceptual level, what a Restricted Boltzmann Machine and a Self-Organizing Map do, and why they\'re largely historical relative to modern autoencoders.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 5, text: 'Implement a basic autoencoder from scratch in PyTorch (encoder + decoder as simple MLPs) trained with reconstruction (MSE) loss on a small image dataset (e.g. MNIST).' },
        { id: 6, text: 'Implement a denoising autoencoder by adding noise to inputs during training (but computing reconstruction loss against the clean original) and compare its learned features against the plain autoencoder\'s.' },
        { id: 7, text: 'Implement a variational autoencoder from scratch: the reparameterization trick, the KL-divergence term in the loss, and sampling from the latent space to generate new outputs.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 8, text: 'Train your autoencoder and VAE on a real image dataset with proper train/val splits, and visually compare reconstruction quality between the two.' },
        { id: 9, text: 'Use the trained autoencoder\'s bottleneck layer as a feature extractor for a downstream classifier, and compare classifier performance against using raw pixels/features directly.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 10, text: 'Shrink the bottleneck dimension progressively (e.g. 64 → 16 → 4 → 2) and show reconstruction quality degrading — plot reconstruction loss vs. bottleneck size.' },
        { id: 11, text: 'Investigate the VAE\'s KL-divergence weight (the β in β-VAE): show what happens to reconstruction quality and latent space "smoothness"/disentanglement as you increase or decrease it.' },
        { id: 12, text: 'Perform latent space interpolation with your VAE: pick two real inputs, encode both, linearly interpolate between their latent vectors, and decode the intermediate points — show that the intermediate reconstructions are semantically meaningful.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 13, text: 'Wrap your trained VAE in a small generative demo: sample random points from the latent space\'s prior distribution and decode them into novel outputs.' },
        { id: 14, text: 'Research task: read about how autoencoder-style reconstruction objectives connect to modern self-supervised pretext tasks (Topic 6) and diffusion models, and write a short note tracing the conceptual lineage from "compress and reconstruct" to "denoise and generate."' },
      ],
    },
  ],
};

const topicU6_selfSupervised: QuestionBankTopic = {
  topicNumber: 'U6',
  name: 'Self-Supervised Learning',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'CIFAR-10 + STL-10',
    source: 'HF: uoft-cs/cifar10, HF: jxie/stl10',
    sourceUrl: hfUrl('uoft-cs/cifar10'),
    rationale:
      'STL-10 was specifically designed for SSL — few labels, lots of unlabeled images, exactly the SimCLR/BYOL setting.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Define self-supervised learning precisely and explain how it differs from both supervised and purely unsupervised learning — the key is where the labels come from.' },
        { id: 2, text: 'Explain 2–3 pretext tasks in detail (e.g. masked prediction, rotation prediction, jigsaw puzzle solving) and what representation each is implicitly forcing the model to learn.' },
        { id: 3, text: 'Explain contrastive learning\'s core idea: pulling positive pairs together and pushing negative pairs apart in embedding space.' },
        { id: 4, text: 'Explain the InfoNCE loss conceptually (a classification problem: pick the true positive out of many negatives) without necessarily deriving the full mutual-information-lower-bound argument.' },
        { id: 5, text: 'Compare SimCLR, BYOL, and DINO at a high level: what does each do differently to avoid representation collapse?' },
        { id: 6, text: 'Explain why self-supervised learning matters specifically for foundation models — what does it let you do that supervised learning can\'t (scale, data efficiency)?' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 7, text: 'Implement a masked prediction pretext task from scratch on a simple dataset and train a small model to predict the masked content.' },
        { id: 8, text: 'Implement a basic contrastive learning setup from scratch: generate positive pairs via data augmentation, sample negatives from the batch, and implement the InfoNCE loss manually.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 9, text: 'Use a proper SimCLR-style pipeline (standard augmentations, a real contrastive loss implementation, a small CNN backbone) via PyTorch to pretrain on an unlabeled image dataset.' },
        { id: 10, text: 'Fine-tune (linear probe) a classifier head on top of your frozen SimCLR-pretrained backbone and compare against a fully supervised model trained from scratch on the same (small) amount of labeled data.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 11, text: 'Vary the number of negative samples in your contrastive loss and show how downstream linear-probe accuracy changes — explain why more negatives generally helps contrastive learning.' },
        { id: 12, text: 'Deliberately weaken your data augmentations and show the pretrained representation\'s downstream quality degrading — this demonstrates how much SSL quality depends on augmentation design.' },
        { id: 13, text: 'Investigate representation collapse: implement a naive contrastive setup without proper negatives or asymmetry tricks and show the model learning a trivial/collapsed representation — then fix it.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 14, text: 'Use your pretrained self-supervised backbone as a general-purpose feature extractor for a downstream task you haven\'t tried yet and evaluate whether the SSL features outperform raw features.' },
        { id: 15, text: 'Research task: read the original SimCLR, BYOL, and DINO papers and write a comparison table of their key architectural tricks, then explain why DINO-style self-distillation was a notable step toward today\'s large-scale visual foundation models.' },
      ],
    },
  ],
};

const topicU7_representationLearning: QuestionBankTopic = {
  topicNumber: 'U7',
  name: 'Representation Learning',
  category: 'Unsupervised Learning',
  dataset: {
    name: '20 Newsgroups (text) + STL-10/CIFAR-10 (image)',
    source: 'HF: SetFit/20_newsgroups',
    sourceUrl: hfUrl('SetFit/20_newsgroups'),
    rationale:
      'Good pair for building both a text-embedding and an image-embedding search demo.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Define "embedding" and "latent space" precisely, and explain how semantic similarity gets encoded as geometric proximity (or cosine similarity) in a good embedding space.' },
        { id: 2, text: 'Explain linear probing: why does training a simple linear classifier on top of frozen features tell you something meaningful about representation quality?' },
        { id: 3, text: 'Explain the difference between feature reuse and full fine-tuning in transfer learning, and the tradeoffs (speed, data efficiency, risk of catastrophic forgetting) of each.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 4, text: 'Implement cosine similarity and Euclidean distance search from scratch over a set of embeddings (no vector database) to build a minimal "embedding search" function.' },
        { id: 5, text: 'Implement a linear probe from scratch: freeze a pretrained model\'s features, train only a linear layer on top for a new task, and report accuracy.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 6, text: 'Generate text embeddings (via a pretrained sentence embedding model) for a real dataset and build a semantic search function using a proper library/vector index (e.g. FAISS).' },
        { id: 7, text: 'Generate image embeddings from a pretrained CNN or ViT backbone and use them for an image similarity search task.' },
        { id: 8, text: 'Fine-tune a pretrained model on a new task (proper transfer learning, not just linear probing) and compare its performance/data-efficiency against training the same architecture from scratch.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 9, text: 'Compare linear probing vs. full fine-tuning on the same downstream task with varying amounts of labeled data (e.g. 10, 100, 1000 examples) — show at what data scale full fine-tuning starts to clearly win.' },
        { id: 10, text: 'Investigate embedding quality qualitatively: for a set of text or image embeddings, manually inspect nearest-neighbor results for several query items and flag cases where "semantic similarity" clearly breaks down.' },
        { id: 11, text: 'Compare brute-force embedding search against an approximate nearest neighbor index (e.g. FAISS with an IVF or HNSW index) on a large embedding set — report the speed/accuracy tradeoff.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 12, text: 'Build a small end-to-end semantic search service (embed → index → query → return top-K) for a domain of your choice.' },
        { id: 13, text: 'Research task: read about domain-specific embeddings (audio embeddings, game asset embeddings) and write a short proposal for how you\'d build an embedding-based similarity/search system for a specific asset type.' },
      ],
    },
  ],
};

const topicU8_anomalyDetection: QuestionBankTopic = {
  topicNumber: 'U8',
  name: 'Anomaly Detection',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'Credit Card Fraud (reuse) + NSL-KDD',
    source: 'Kaggle: mlg-ulb/creditcardfraud; NSL-KDD via Kaggle',
    sourceUrl: kaggleUrl('mlg-ulb/creditcardfraud'),
    rationale:
      'NSL-KDD is the standard, still-cited benchmark for network intrusion detection.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain classical statistical anomaly detection (e.g. z-score, IQR-based outlier detection) and its core limitation (assumes a specific distribution, struggles in high dimensions).' },
        { id: 2, text: 'Explain how Isolation Forest detects anomalies by exploiting the idea that anomalies are "easier to isolate" via random splits.' },
        { id: 3, text: 'Explain One-Class SVM\'s approach: learning a boundary around "normal" data in a possibly kernel-transformed space.' },
        { id: 4, text: 'Explain how autoencoder-based anomaly detection works: train on normal data only, flag high reconstruction error as anomalous.' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 5, text: 'Implement z-score and IQR-based outlier detection from scratch on a tabular dataset.' },
        { id: 6, text: 'Implement a simplified Isolation Forest from scratch (build random trees with random split points, compute average path length as the anomaly score).' },
        { id: 7, text: 'Implement autoencoder-based anomaly detection from scratch: reuse your Topic-5 autoencoder, train on "normal" data only, and use reconstruction error as the anomaly score on a held-out mixed set.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 8, text: 'Run Isolation Forest and One-Class SVM (via sklearn) on the same real dataset with known/labeled anomalies, and compare their detection performance.' },
        { id: 9, text: 'Apply anomaly detection to a real-world-flavored dataset — pick one of: fraud detection, network intrusion, or game cheat detection / abnormal player behavior — and report results with proper evaluation.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 10, text: 'Compare all three approaches (statistical, Isolation Forest, autoencoder-based) on the same dataset at varying anomaly rates (1%, 5%, 20% anomalies) and report how each method\'s performance changes.' },
        { id: 11, text: 'Investigate the effect of the contamination parameter (expected anomaly fraction) in Isolation Forest — sweep it and show how it shifts the precision/recall tradeoff for anomaly detection.' },
        { id: 12, text: 'Construct a case where autoencoder-based anomaly detection fails (e.g. the autoencoder is powerful enough to reconstruct anomalies well too) and explain why capacity control matters.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 13, text: 'Build a streaming anomaly detection setup: score incoming data points one at a time against a pre-fit model, and flag anomalies in near-real-time (simulate a stream from a static dataset if needed).' },
        { id: 14, text: 'Research task: design (on paper, with a concrete evaluation plan) an anomaly detection system for abnormal player behavior or bug detection in a game engine context.' },
      ],
    },
  ],
};

const topicU9_unsupervisedEvalMetrics: QuestionBankTopic = {
  topicNumber: 'U9',
  name: 'Unsupervised Evaluation Metrics',
  category: 'Unsupervised Learning',
  dataset: {
    name: 'Mall Customer Segmentation / Online Retail II (reuse)',
    source: 'Kaggle: vjchoudhary7/customer-segmentation-tutorial-in-python',
    sourceUrl: kaggleUrl('vjchoudhary7/customer-segmentation-tutorial-in-python'),
    rationale:
      'Reuse your Topic U2 clustering output — you\'re evaluating clusters you already produced.',
  },
  tiers: [
    {
      tier: 1, title: 'Tier 1', subtitle: 'Foundations',
      questions: [
        { id: 1, text: 'Explain the Silhouette Coefficient: what does it measure for a single point (cohesion vs. separation), and how does it aggregate to a dataset-level score?' },
        { id: 2, text: 'Explain the Davies-Bouldin Index and the Dunn Index, and contrast them with Silhouette (what\'s being optimized, lower-is-better vs. higher-is-better).' },
        { id: 3, text: 'Explain why "visual assessment using t-SNE/UMAP" is a legitimate (if informal) evaluation technique for clustering, and also why it can be misleading.' },
        { id: 4, text: 'Explain reconstruction error and anomaly score as evaluation signals, and why they\'re fundamentally different from clustering metrics (no notion of "clusters" involved).' },
      ],
    },
    {
      tier: 2, title: 'Tier 2', subtitle: 'Implement from scratch',
      questions: [
        { id: 5, text: 'Implement the Silhouette Coefficient from scratch (per-point and averaged) and verify against silhouette_score.' },
        { id: 6, text: 'Implement the Davies-Bouldin Index from scratch and verify against sklearn\'s implementation.' },
        { id: 7, text: 'Implement cluster stability measurement from scratch: run your clustering algorithm on multiple bootstrap resamples of the data and measure agreement (e.g. via Adjusted Rand Index) between the resulting cluster assignments.' },
      ],
    },
    {
      tier: 3, title: 'Tier 3', subtitle: 'Use it properly',
      questions: [
        { id: 8, text: 'For a real clustering task, compute Silhouette, Davies-Bouldin, and Dunn Index across a range of K values, and report whether all three metrics agree on the "best" K — if they disagree, explain why.' },
        { id: 9, text: 'Combine quantitative metrics with visual assessment (UMAP/t-SNE plots) for the same clustering result and write a short justification for your final choice of K that uses both.' },
      ],
    },
    {
      tier: 4, title: 'Tier 4', subtitle: 'Break it, diagnose it, tune it',
      questions: [
        { id: 10, text: 'Construct a case where Silhouette Score is misleadingly high (e.g. one giant cluster and one tiny well-separated cluster) and show how Davies-Bouldin or Dunn Index tells a different, more informative story.' },
        { id: 11, text: 'Measure cluster stability (via your bootstrap + Adjusted Rand Index implementation) for K-Means at different K values, and show that the "best" K by Silhouette isn\'t always the most stable K.' },
        { id: 12, text: 'For your anomaly detection models from Topic 8, sweep the anomaly-score threshold and report how precision/recall trade off, connecting this back to the PR curve concepts from Topic 16.' },
      ],
    },
    {
      tier: 5, title: 'Tier 5', subtitle: 'Deploy / extend',
      questions: [
        { id: 13, text: 'Build a small automated "clustering quality report" tool: given a dataset and a clustering result, output Silhouette, Davies-Bouldin, Dunn Index, a stability estimate, and a UMAP visualization, all in one function call.' },
        { id: 14, text: 'Research task: read about evaluation challenges specific to self-supervised and foundation-model-scale representations and write a short note connecting this back to Topic 20\'s foundation model evaluation discussion.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// FULL QUESTION BANK DATA EXPORT
// ---------------------------------------------------------------------------

export const QUESTION_BANK_CATEGORIES: QuestionBankCategory[] = [
  'Regression Models',
  'Classification Models',
  'Model Evaluation',
  'Unsupervised Learning',
];

export const QUESTION_BANK_TOPICS: QuestionBankTopic[] = [
  // Regression Models
  topic6_linearRegression,
  topic7_regularizedRegression,
  topic8_svr,
  topic9_decisionTreeRegression,
  topic10_ensembleRegression,
  // Classification Models
  topic11_logisticRegression,
  topic12_svm,
  topic13_decisionTreeClassification,
  topic14_ensembleClassification,
  topic15_neuralBaselines,
  // Model Evaluation
  topic16_evaluationMetrics,
  topic17_modelSelection,
  topic18_biasVariance,
  topic19_errorAnalysis,
  topic20_foundationModelEval,
  // Unsupervised Learning
  topicU1_introUnsupervised,
  topicU2_clustering,
  topicU3_dimensionalityReduction,
  topicU4_associationRules,
  topicU5_neuralUnsupervised,
  topicU6_selfSupervised,
  topicU7_representationLearning,
  topicU8_anomalyDetection,
  topicU9_unsupervisedEvalMetrics,
];

/** Pre-grouped topics by category for sidebar rendering */
export const QUESTION_BANK_BY_CATEGORY: Record<QuestionBankCategory, QuestionBankTopic[]> = {
  'Regression Models': QUESTION_BANK_TOPICS.filter((t) => t.category === 'Regression Models'),
  'Classification Models': QUESTION_BANK_TOPICS.filter((t) => t.category === 'Classification Models'),
  'Model Evaluation': QUESTION_BANK_TOPICS.filter((t) => t.category === 'Model Evaluation'),
  'Unsupervised Learning': QUESTION_BANK_TOPICS.filter((t) => t.category === 'Unsupervised Learning'),
};

export const questionBankData: QuestionBankData = {
  categories: QUESTION_BANK_CATEGORIES,
  topics: QUESTION_BANK_TOPICS,
};
