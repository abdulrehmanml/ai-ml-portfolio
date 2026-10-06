import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "A machine learning application that estimates customer churn likelihood from customer, service, contract, and billing information.",
    problem:
      "The goal was to identify customers at risk of churning from customer, service, contract, and billing information.",
    solution:
      "Built a machine learning application that preprocesses the data, trains and evaluates classification models, and delivers churn predictions through Streamlit.",
    workflow: [
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Evaluation",
      "Prediction",
      "Streamlit Deployment",
    ],
    keyWork: [
      "Data preprocessing",
      "Exploratory analysis",
      "Feature engineering",
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
    slug: "sentiment-analysis",
    title: "Sentiment Analysis App",
    category: "NLP",
    description:
      "A three-class sentiment analysis application that classifies text into positive, negative, and neutral sentiment using NLP and machine learning.",
    problem:
      "The goal was to classify social-media text into positive, negative, and neutral sentiment for clearer understanding of text feedback.",
    solution:
      "Built a three-class NLP application that preprocesses text, extracts TF-IDF features, evaluates classification models, and delivers predictions through Streamlit.",
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
      "TF-IDF feature extraction",
      "Sentiment classification",
      "Model evaluation",
      "Prediction workflow",
      "Streamlit deployment",
    ],
    technologies: ["Python", "Scikit-learn", "TF-IDF", "NLP", "Streamlit"],
    image: "/images/projects/sentiment-analysis.png",
    href: "/projects/sentiment-analysis",
    githubUrl: "https://github.com/abdulrehmanml/sentiment-analysis-system",
    liveDemoUrl: "https://sentiment-analysis-system-nlp.streamlit.app/",
  },

  {
    slug: "agrofarm-ai",
    title: "AgroFarm AI",
    category: "Generative AI",
    description:
      "A RAG-based agriculture advisor that retrieves relevant knowledge and generates context-aware responses through a Streamlit application.",
    problem:
      "The goal was to provide agricultural guidance using relevant domain knowledge while keeping responses specific to the user's context.",
    solution:
      "Built a RAG-based agronomy assistant that retrieves relevant knowledge and generates context-aware responses through a Streamlit application.",
    workflow: [
      "Knowledge Preparation",
      "Information Retrieval",
      "Context Assembly",
      "Response Generation",
      "Streamlit Application",
    ],
    keyWork: [
      "Knowledge preparation",
      "Text processing",
      "Vector storage",
      "Information retrieval",
      "Context assembly",
      "LLM integration",
      "RAG pipeline",
      "Streamlit application",
    ],
    technologies: [
      "Python",
      "Gemini",
      "ChromaDB",
      "RAG",
      "Streamlit"
    ],
    image: "/images/projects/agrofarm-ai.png",
    href: "/projects/agrofarm-ai",
    githubUrl: "https://github.com/abdulrehmanml/agrofarm-ai",
    liveDemoUrl: "https://agrofarm-ai.streamlit.app/",
  },
]
