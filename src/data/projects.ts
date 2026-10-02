import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "End-to-end machine learning application for predicting customer churn.",
    problem:
      "Identify customers at risk of churning from customer, service, contract, and billing information.",
    solution:
      "Built a machine learning application that prepares the data, trains and evaluates predictive models, and delivers churn predictions through Streamlit.",
    workflow: [
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Evaluation",
      "Prediction",
      "Streamlit",
    ],
    keyWork: [
      "Data preprocessing",
      "Exploratory analysis",
      "Feature preparation",
      "Classification modeling",
      "Model evaluation",
      "Model serialization",
      "Prediction workflow",
      "Streamlit deployment",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Joblib",
      "Streamlit",
    ],
    image: "/images/projects/customer-churn.png",
    href: "/projects/customer-churn-prediction",
    githubUrl: "https://github.com/abdulrehmanml/customer-churn-prediction-ml",
    liveDemoUrl: "https://customer-churn-prediction-engine.streamlit.app/",
  },

  {
    slug: "agrofarm-ai",
    title: "AgroFarm AI",
    category: "Generative AI",
    description:
      "RAG-based agronomy assistant designed to provide context-aware agricultural guidance.",
    problem:
      "Provide agricultural guidance using relevant domain knowledge while keeping responses specific to the user's context.",
    solution:
      "Built a RAG-based agronomy assistant that retrieves relevant knowledge and generates context-aware responses through a Streamlit application.",
    workflow: [
      "Knowledge Preparation",
      "Information Retrieval",
      "Relevant Agronomy Context",
      "Gemini Generation",
      "Streamlit Application",
    ],
    keyWork: [
      "Knowledge preparation",
      "Text processing",
      "Information retrieval",
      "Vector storage",
      "Context retrieval",
      "LLM integration",
      "RAG pipeline",
      "Streamlit application development",
    ],
    technologies: ["Python", "Gemini", "ChromaDB", "RAG", "Streamlit"],
    image: "/images/projects/agrofarm-ai.png",
    href: "/projects/agrofarm-ai",
    githubUrl: "https://github.com/abdulrehmanml/agrofarm-ai",
    liveDemoUrl: "https://agrofarm-ai.streamlit.app/",
  },

  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis App",
    category: "NLP",
    description:
      "Three-class sentiment analysis application with an interactive Streamlit interface.",
    problem:
      "Classify social-media text into positive, negative, or neutral sentiment.",
    solution:
      "Built a three-class NLP system using text preprocessing, TF-IDF features, machine learning, evaluation, and Streamlit deployment.",
    workflow: [
      "Text Preprocessing",
      "TF-IDF",
      "Model Training",
      "Evaluation",
      "Streamlit Deployment",
    ],
    keyWork: [
      "Text preprocessing",
      "Data preparation",
      "Feature extraction",
      "Sentiment classification",
      "Model evaluation",
      "Application integration",
      "Deployment",
    ],
    technologies: ["Python", "Scikit-learn", "TF-IDF", "NLP", "Streamlit"],
    image: "/images/projects/sentiment-analysis.png",
    href: "/projects/sentiment-analysis",
    githubUrl: "https://github.com/abdulrehmanml/sentiment-analysis-system",
    liveDemoUrl: "https://sentiment-analysis-system-nlp.streamlit.app/",
  },
]
