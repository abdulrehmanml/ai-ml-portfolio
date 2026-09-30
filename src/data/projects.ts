import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "End-to-end machine learning application for predicting customer churn.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    image: "/images/projects/customer-churn.png",
    href: "/projects/customer-churn-prediction",
  },

  {
    slug: "agrisense-ai",
    title: "AgriSense AI",
    category: "Generative AI",
    description:
      "RAG-based agronomy assistant designed to provide context-aware agricultural guidance.",
    technologies: ["Python", "RAG", "Gemini", "ChromaDB"],
    image: "/images/projects/agrofarm-ai.png",
    href: "/projects/agrisense-ai",
  },

  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis App",
    category: "NLP",
    description:
      "Three-class sentiment analysis application with an interactive Streamlit interface.",
    technologies: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    image: "/images/projects/sentiment-analysis.png",
    href: "/projects/sentiment-analysis",
  },
]