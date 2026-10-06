import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  slug: string
  number: string
  title: string
  icon: LucideIcon
  shortDescription: string
  description: string
  capabilities: string[]
  process: string[]
  technologies: string[]
  projectSlugs: string[]
}

export const services: Service[] = [
  {
    slug: "machine-learning",
    number: "01",
    title: "Machine Learning",
    icon: BrainCircuit,
    shortDescription:
      "Build predictive models for practical classification and regression problems.",
    description:
      "Build and evaluate machine learning solutions that turn structured data into practical predictions and decision-support applications.",
    capabilities: [
      "Classification and regression",
      "Data preprocessing",
      "Feature engineering",
      "Feature scaling",
      "Model evaluation",
      "Model comparison",
      "Hyperparameter optimization",
    ],
    process: [
      "Understand the problem",
      "Prepare and explore the data",
      "Build and evaluate models",
      "Prepare the solution for deployment",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Joblib"],
    projectSlugs: ["customer-churn-prediction", "sentiment-analysis"],
  },

  {
    slug: "data-analysis-visualization",
    number: "02",
    title: "Data Analysis & Visualization",
    icon: BarChart3,
    shortDescription:
      "Turn raw datasets into clear insights through analysis and visualization.",
    description:
      "Clean, explore, analyze, and visualize structured data to identify patterns, trends, and useful business insights.",
    capabilities: [
      "Data cleaning",
      "Missing-value handling",
      "Exploratory data analysis",
      "Data transformation",
      "Trend and category analysis",
      "Data visualization",
      "Business insights",
    ],
    process: [
      "Understand the dataset",
      "Clean and prepare the data",
      "Explore patterns and relationships",
      "Present useful findings",
    ],
    technologies: [
      "Python",
      "Matplotlib",
      "Seaborn",
      "Pandas",
      "NumPy",
      "Jupyter",
    ],
    projectSlugs: ["ecommerce-sales-profitability-analysis"],
  },

  {
    slug: "generative-ai-rag",
    number: "03",
    title: "Generative AI & RAG",
    icon: Sparkles,
    shortDescription:
      "Build knowledge-based AI applications using retrieval and generative AI.",
    description:
      "Develop domain-focused AI applications that retrieve relevant information and use generative models to produce context-aware responses.",
    capabilities: [
      "RAG workflows",
      "Knowledge-base applications",
      "Information retrieval",
      "Vector-based retrieval",
      "LLM integration",
      "AI assistants",
      "NLP applications",
    ],
    process: [
      "Prepare the knowledge source",
      "Build the retrieval workflow",
      "Connect the generative model",
      "Deliver the AI application",
    ],
    technologies: [
      "Python",
      "Gemini",
      "ChromaDB",
      "RAG",
      "Streamlit",
    ],
    projectSlugs: ["agrofarm-ai"],
  },

  {
    slug: "deployment-ml-apis",
    number: "04",
    title: "Deployment & ML APIs",
    icon: Cloud,
    shortDescription:
      "Turn machine learning solutions into usable applications and API workflows.",
    description:
      "Move trained machine learning solutions from notebooks into usable applications through model serialization, interfaces, APIs, and deployment workflows.",
    capabilities: [
      "Model serialization",
      "ML application integration",
      "Streamlit applications",
      "REST API workflows",
      "Prediction endpoints",
      "Git and GitHub workflows",
      "Cloud deployment",
    ],
    process: [
      "Prepare the trained model",
      "Integrate inference logic",
      "Expose the solution through an interface or API",
      "Prepare for deployment",
    ],
    technologies: [
      "Python",
      "Joblib",
      "Streamlit",
      "APIs",
      "Git",
      "GitHub",
      "AWS",
    ],
    projectSlugs: ["customer-churn-prediction", "sentiment-analysis", "agrofarm-ai"],
  },
]
