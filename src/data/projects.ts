/**
 * Hand-picked projects for the Projects page.
 * Add an entry here to show a repo; order here is the order on the page.
 */
export type Status = 'live' | 'wip' | 'complete';

export interface Project {
  name: string;
  /** One-line pitch shown under the name. */
  summary: string;
  /** Two or three short bullet points. */
  details: string[];
  tech: string[];
  status: Status;
  repo?: string;
  demo?: string;
  /** Featured projects get the large card at the top. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Eve-Market-Predictor',
    summary: 'Machine-learning forecasts of EVE Online market prices, powered by a data pipeline that updates itself.',
    details: [
      'Collects daily price history and live order-book snapshots for six trade hubs from the ESI REST API, with retries, rate-limit backoff, and a backfill reaching back to 2003. Everything lands in SQLite.',
      'Forecasts 7-day price moves with ridge regression and gradient boosting on engineered features (momentum, volatility, moving-average distance, volume z-scores), checked by walk-forward backtests against naive baselines.',
      'Scores market health (liquidity, spread, depth, price impact) and serves it all through a Flask and Chart.js dashboard, with OAuth login for player-owned markets.',
      'A scheduled GitHub Actions pipeline re-collects data, rebuilds a static copy of the dashboard, and redeploys it to GitHub Pages every 6 hours.',
    ],
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Flask', 'SQLite', 'Chart.js', 'JavaScript', 'REST API', 'OAuth 2.0', 'pytest', 'GitHub Actions', 'GitHub Pages'],
    status: 'live',
    repo: 'https://github.com/InTheHiggsField/Eve-Market-Predictor',
    demo: 'https://inthehiggsfield.github.io/Eve-Market-Predictor/index.html',
    featured: true,
  },
  {
    name: 'League_Data_App',
    summary: 'A personal draft helper for League of Legends solo queue, built on live game data.',
    details: [
      'Pulls champion and game data from the Riot Games APIs through a small Python client.',
      'Stores the data in a local database and computes champion stats to guide picks during draft.',
      'Built for my own use: I run it whenever I queue up for ranked solo games.',
    ],
    tech: ['Python', 'REST API', 'Riot Games API'],
    status: 'wip',
    repo: 'https://github.com/InTheHiggsField/League_Data_App',
  },
  {
    name: 'QuantA&M Website',
    summary: "I manage and update the website for QuantA&M, Texas A&M's quantum computing club.",
    details: [
      'Maintain the club site: home, about, event calendar, officer profiles, and the newsletter archive.',
      'Recent work improved how the site functions and changed how newsletters are published and delivered to members.',
      'Added an animated, interactive Bloch sphere to show how a single qubit state is pictured.',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'GitHub Pages'],
    status: 'live',
    repo: 'https://github.com/quantamu/quantamu.github.io',
    demo: 'https://quantamu.github.io',
  },
  {
    name: 'inthehiggsfield.github.io',
    summary: "This site: a cyberpunk-themed portfolio and blog.",
    details: [
      'Static site built with Astro, deployed to GitHub Pages by GitHub Actions on every push.',
      'Essays are plain Markdown files validated by a typed content schema.',
      'Responsive images, a native-dialog photo viewer, and motion effects that respect reduced-motion settings.',
    ],
    tech: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions'],
    status: 'wip',
    repo: 'https://github.com/InTheHiggsField/inthehiggsfield.github.io',
  },
];
