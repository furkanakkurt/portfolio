import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Furkan Akkurt",
  initials: "FA",
  location: "Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about: "Software Engineer & Architect dedicated to build highly reliable, scalable and secure systems.",
  summary: (
    <>
      I'm Furkan Akkurt, Cloud DevOps Engineer with Full Stack development background and academic foundation. My journey in the tech world has been quite the adventure. Academically, I have worked on Medical Image Reconstruction and Analysis using Deep Learning and Privacy-Preserving Federated Learning where I cultivated a rich knowledge base. From optimizing cloud infrastructure to building robust backend systems, I have been working on developing, building, and deploying mid to large scale systems, and ensuring their high-availability, optimizing performance, scalability, and reliability in the ever-evolving cloud environment, using IaC and DevOps tools. I have also been working on MLOps and DataOps to build and deploy machine learning models and data pipelines.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/39063959?v=4",
  personalWebsiteUrl: "https://furkanakkurt.com",
  contact: {
    email: "hi@furkanakkurt.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/furkanakkurt",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/furkan-akkurt-9a1056158/",
        icon: "linkedin",
      },
      // {
      //   name: "X",
      //   url: "",
      //   icon: "x",
      // },
    ],
  },
  education: [
    {
      school: "Bilkent University",
      degree: "B.S. in Computer Science",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Lyrebird Studio",
      link: "https://lyrebirdstudio.net/",
      badges: ["GenAI", "AWS", "Python", "TypeScript", "GCP"],
      title: "Cloud DevOps Engineer",
      start: "Februray 2023",
      end: "August 2025",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Built services on <strong>NestJS</strong> to expose training/inference workloads to millions of requests on a daily basis. Mainly used AWS ECS, Elasticache with Redis, Amazon DynamoDB, AWS Lambda, SQS.
          </li>
          <li>
            Built a PoC for migration of ML workloads to Kubernetes for eﬀicient GPU and resource allocation and utilization, which resulted in up to 40% cost reduction. Used Karpenter, Keda, Bottlerocket, ArgoCD, Bottlerocket.
          </li>
          <li>
            Configured a Kubernetes cluster for our self-hosted CI/CD runners and integrated with a caching mechanism to reduce build/deploy times by 50% and costs by 60%.
          </li>
          <li>
            Used S3 Express One Zone storage class when it first came out to gain up to 90% performance improvement on storage on applications serving users below second latency. Blog post can be read here.
          </li>
          <li>
            Worked with the research and development team, which develops high-quality machine learning models serving millions of users worldwide, to create a cloud-based working environment with powerful accelerators (GPUs, TPUs, and Inf2), and deploy those models to production using seamless infrastructures.
          </li>
          <li>
            Developed advanced observability, monitoring, and alerting mechanisms on AWS, and integrated them with Slack for real-time notifications and incident management. Also utilized Incident Manager, Amazon GuardDuty, AWS WAF to provide comprehensive threat detection, mitigation, and automated incident response capabilities across the cloud infrastructure.
          </li>
        </ul>
      ),
    },
    {
      company: "Commencis",
      link: "https://www.commencis.com/",
      badges: ["AWS", "GCP", "Terraform", "CI/CD", "Kubernetes"],
      title: "Cloud Engineer",
      start: "October 2021",
      end: "June 2022",
      description: (
        <ul className="list-inside list-disc">
          <li>Managing environments on AWS, GCP, Azure, and Yandex (mostly on AWS).</li>
          <li>Managing customers’ projects on the cloud and offers solutions to customers in the migrations to the cloud.</li>
          <li>Managing IaC projects (written mostly using Terraform), CI/CD pipelines, Kubernetes clusters, AWS Elastic Beanstalk applications, Glue jobs, Redshift clusters, and many more complex environments of both our customers and internal projects.</li>
          <li>Using DevOps practices to deliver better products for customer satisfaction.</li>
        </ul>
      ),
    },
    {
      company: "CryptoIndexSeries",
      link: "https://cryptoindexseries.com/",
      badges: [
        "Full Stack",
        "NodeJS",
        "Blockchain",
        "AWS",
        "React"
      ],
      title: "Full Stack Developer",
      start: "March 2021",
      end: "October 2021",
      description: (
        <ul className="list-inside list-disc">
          <li>Worked full-stack on a web application that provides users institutional-grade data and analytics solutions for cryptocurrency market. Used Node.js, AWS and WebSockets.</li>
          <li>Worked on a mobile application that provides users with a way to track their cryptocurrency portfolio and investments. Used React Native and AWS.</li>
        </ul>
      ),
    },
    {
      company: "Istanbul Technical University",
      link: "https://www.itu.edu.tr/",
      badges: ["React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Undergraduate Research Assistant",
      start: "December 2020",
      end: "July 2021",
      description: (
        <ul className="list-inside list-disc">
          <li>Worked on Medical Image Reconstruction and Analysis using Deep Learning under the supervision of Assoc. Prof. Ilkay Oksuz.</li>
          <li>Implemented medical image segmentation models for x-ray images, using architectures like UNet and XNet. Used and optimized data augmentation techniques for training.</li>
        </ul>
      ),
    }
  ],
  skills: [
    "AWS",
    "TypeScript",
    "Backend Development",
    "Java - Spring Framework",
    "Cloud-Native Development",
    "System Design",
    "NodeJS",
    "CI/CD - Jenkins - SonarQube",
    "Infrastructure as Code Tools (CDK, Terraform, CloudFormation)",
    "GCP",
    "Python - PyTorch - MLOps pipelines",
    "WebSockets",
    "Node.js",

  ],
  projects: [
    {
      title: "Innovating with Generative AI on AWS",
      techStack: ["AWS", "Generative AI", "Presentation"],
      description:
        "Gave a presentation on Innovating with Generative AI on AWS at AWS Cloud Day Türkiye 2023. Covered GenAI concepts and how we leveraged AWS to serve users efficiently.",
      link: {
        label: "Talk",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7116535381889552384/",
      },
      type: "talk"
    },
    {
      title: "Plantify",
      techStack: ["Flutter", "Node.js", "PyTorch", "Docker", "Arduino"],
      description:
        "Cross-platform mobile application for hobby-gardening: plant detection via ML, social feed, and real-time soil/moisture tracking with Arduino integrations.",
      link: {
        label: "View Project",
        href: "#",
      },
      type: "project"
    },
    {
      title: "American Sign Language Detector",
      techStack: ["Python", "CNN", "Decision Trees", "OpenCV"],
      description:
        "Built two ML models (CNN & Decision Tree) on ASL dataset and a real-time Python/OpenCV pipeline to recognize and stream ASL letters from webcam video.",
      link: {
        label: "View Project",
        href: "#",
      },
      type: "project"
    },
    {
      title: "Medical Image Reconstruction & Analysis (UNet)",
      techStack: ["Python", "UNet", "Medical Imaging"],
      description:
        "Implemented UNet-based segmentation on X-ray images for medical image reconstruction and analysis.",
      link: {
        label: "View Project",
        href: "#",
      },
      type: "project"
    },
  ],
} as const;
