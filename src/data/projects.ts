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
    projectLinksDescription: "Explore the source code and live application.",
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
    projectLinksDescription: "Explore the source code and live application.",
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
    projectLinksDescription: "Explore the source code and live application.",
  },
  
  {
    slug: "ecommerce-sales-profitability-analysis",
    title: "E-Commerce Sales & Profitability Analysis",
    category: "Data Analysis",
    description:
      "A data analysis project that explores e-commerce sales, profitability, customer segments, products, regions, and discount patterns.",
    problem:
      "The goal was to understand sales and profitability patterns across products, customers, regions, and discounts to support clearer business decisions.",
    solution:
      "Built a data analysis workflow that cleans and transforms transaction data, performs exploratory analysis, visualizes patterns, and derives business insights.",
    workflow: [
      "Data Understanding",
      "Data Quality Assessment",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Business Analysis",
      "Insights & Recommendations",
    ],
    keyWork: [
      "Data quality assessment",
      "Data preprocessing",
      "Feature engineering",
      "Exploratory analysis",
      "Sales trend analysis",
      "Product and regional analysis",
      "Customer and discount analysis",
      "Business insights",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    image: "/images/projects/ecommerce-sales-profitability-analysis.png",
    href: "/projects/ecommerce-sales-profitability-analysis",
    githubUrl: "https://github.com/abdulrehman-02/ecommerce-sales-profitability-analysis",
    documentationUrl: "https://github.com/abdulrehmanml/aws-secure-web-hosting-infrastructure/blob/main/documentation/AWSProjectDocumentation.pdf",
    projectLinksDescription: "Explore the source code and documentation.",
  },

  {
    slug: "aws-secure-web-hosting-infrastructure",
    title: "AWS Secure Web Hosting Infrastructure",
    category: "Cloud Computing",
    description:
      "A hands-on AWS infrastructure project covering secure web hosting, identity and access management, private storage, backup, cost monitoring, and network troubleshooting.",
    problem:
      "The goal was to build a small-business cloud infrastructure combining secure web hosting, storage, access control, backup, and basic cost management.",
    solution:
      "Built and configured an AWS environment using EC2, Nginx, IAM, Security Groups, S3, and an EC2 IAM role for secure infrastructure and storage workflows.",
    workflow: [
      "IAM & Access Control",
      "EC2 & Security Groups",
      "Nginx Web Hosting",
      "Private S3 Storage",
      "EC2-S3 Integration",
      "Backup & Validation",
    ],
    keyWork: [
      "IAM user and group management",
      "MFA and permission validation",
      "EC2 server configuration",
      "Security Group configuration",
      "Nginx web hosting",
      "Private S3 configuration",
      "EC2 IAM role integration",
      "Infrastructure troubleshooting",
    ],
    technologies: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "Linux",
      "Nginx",
    ],
    image: "/images/projects/aws-secure-web-hosting.png",
    href: "/projects/aws-secure-web-hosting-infrastructure",
    githubUrl: "https://github.com/abdulrehmanml/aws-secure-web-hosting-infrastructure",
    documentationUrl: "https://github.com/abdulrehmanml/ecommerce-sales-profitability-analysis/blob/main/ecommerce-sales-analysis-report.pdf",
    projectLinksDescription: "Explore the AWS implementation and documentation.",
  },
]
