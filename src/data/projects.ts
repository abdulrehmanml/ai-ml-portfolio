import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "End-to-end machine learning application for predicting customer churn with model deployment.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    href: "/projects/customer-churn-prediction",
  },
  {
    slug: "agrisense-ai",
    title: "AgriSense AI",
    category: "Generative AI",
    description:
      "RAG-based agronomy assistant designed to provide context-aware agricultural guidance.",
    technologies: ["Python", "RAG", "Gemini", "ChromaDB"],
    href: "/projects/agrisense-ai",
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis App",
    category: "NLP",
    description:
      "Three-class sentiment analysis application with an interactive Streamlit interface.",
    technologies: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    href: "/projects/sentiment-analysis",
  },
]