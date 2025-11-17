export interface CourseLesson {
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  targetAudience: ("Hobbyist" | "Professional")[];
  lessons: CourseLesson[];
  keyTakeaways: string[];
}

export const course: CourseModule[] = [
  {
    id: 1,
    title: "Getting Started: Your First Print",
    description: "Everything you need to know to unbox your BambuLab printer and complete your first successful print. This module covers initial setup, software installation, and your first test print.",
    duration: "2 hours",
    difficulty: "Beginner",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "Unboxing and Hardware Setup",
        duration: "30 min",
        description: "Learn how to safely unbox your printer, identify all components, and perform the initial hardware setup.",
        topics: [
          "Unpacking your printer safely",
          "Identifying all included components",
          "Removing shipping protections",
          "Setting up the printer on a stable surface",
          "Connecting power and network cables",
          "Initial power-on sequence"
        ]
      },
      {
        title: "Software Installation and Configuration",
        duration: "45 min",
        description: "Install BambuStudio and Handy app, connect your printer, and configure basic settings.",
        topics: [
          "Downloading and installing BambuStudio",
          "Installing the Handy mobile app",
          "Connecting printer via Wi-Fi or LAN",
          "Creating your BambuLab account",
          "Linking printer to your account",
          "Understanding the software interface"
        ]
      },
      {
        title: "Your First Test Print",
        duration: "45 min",
        description: "Complete your first print using pre-sliced files and learn basic monitoring techniques.",
        topics: [
          "Loading filament into the printer",
          "Selecting a pre-sliced test model",
          "Starting your first print",
          "Monitoring print progress",
          "Understanding what to watch for",
          "Removing the finished print safely"
        ]
      }
    ],
    keyTakeaways: [
      "Successfully set up and configure your BambuLab printer",
      "Install and navigate BambuStudio software",
      "Complete your first print from start to finish",
      "Understand basic safety and handling procedures"
    ]
  },
  {
    id: 2,
    title: "Understanding BambuStudio: The Slicer Basics",
    description: "Master the fundamentals of BambuStudio, the powerful slicing software that turns 3D models into printable instructions for your BambuLab printer.",
    duration: "3 hours",
    difficulty: "Beginner",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "Interface Navigation and Workflow",
        duration: "45 min",
        description: "Learn to navigate BambuStudio efficiently and understand the standard workflow.",
        topics: [
          "Understanding the main interface layout",
          "Importing 3D models (STL, OBJ, 3MF files)",
          "Using the 3D viewport controls",
          "Working with multiple objects",
          "Project organization best practices",
          "Saving and managing project files"
        ]
      },
      {
        title: "Essential Print Settings",
        duration: "1 hour",
        description: "Understand the most important print settings and how they affect your results.",
        topics: [
          "Layer height and print quality",
          "Infill patterns and density",
          "Wall thickness and strength",
          "Print speed basics",
          "Support structure options",
          "Bed adhesion techniques"
        ]
      },
      {
        title: "Material Profiles and Presets",
        duration: "45 min",
        description: "Learn how to select and customize material profiles for different filament types.",
        topics: [
          "Understanding material profiles",
          "Selecting the right profile for your filament",
          "Temperature settings for different materials",
          "Bed temperature considerations",
          "Creating custom material profiles",
          "Importing community profiles"
        ]
      },
      {
        title: "Slicing and Print Preview",
        duration: "30 min",
        description: "Master the slicing process and learn to analyze the preview before printing.",
        topics: [
          "Running the slicer",
          "Understanding the preview layers",
          "Analyzing print time and material usage",
          "Identifying potential issues",
          "Exporting G-code files",
          "Sending prints directly to your printer"
        ]
      }
    ],
    keyTakeaways: [
      "Navigate BambuStudio with confidence",
      "Understand how key settings affect print quality",
      "Select and customize material profiles",
      "Preview and analyze prints before starting"
    ]
  },
  {
    id: 3,
    title: "Filament Types and Material Selection",
    description: "Discover the different filament types compatible with BambuLab printers and learn when to use each material for optimal results.",
    duration: "2.5 hours",
    difficulty: "Beginner",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "PLA: The Beginner-Friendly Material",
        duration: "30 min",
        description: "Learn everything about PLA filament, the most popular and easy-to-use material.",
        topics: [
          "What is PLA and its properties",
          "Best use cases for PLA",
          "Temperature settings for PLA",
          "Storage and handling tips",
          "PLA variants (Silk, Matte, Wood-filled)",
          "Limitations of PLA"
        ]
      },
      {
        title: "PETG: Strength and Durability",
        duration: "30 min",
        description: "Understand PETG filament for stronger, more durable functional parts.",
        topics: [
          "PETG properties and advantages",
          "When to choose PETG over PLA",
          "Temperature and speed settings",
          "Managing PETG stringing",
          "Layer adhesion optimization",
          "Storage requirements"
        ]
      },
      {
        title: "ABS and ASA: Engineering Materials",
        duration: "45 min",
        description: "Master printing with ABS and ASA for professional-grade parts.",
        topics: [
          "ABS vs ASA: Understanding the differences",
          "Chamber temperature requirements",
          "Preventing warping and layer splitting",
          "Ventilation and safety considerations",
          "Post-processing with acetone vapor",
          "Professional applications"
        ]
      },
      {
        title: "Flexible Filaments and Advanced Materials",
        duration: "45 min",
        description: "Explore TPU and other advanced materials for specialized applications.",
        topics: [
          "TPU properties and flexibility ratings",
          "Printing flexible materials successfully",
          "Carbon fiber and composite filaments",
          "Nylon (PA) for mechanical parts",
          "PC (Polycarbonate) for high-strength applications",
          "Material compatibility with your printer model"
        ]
      }
    ],
    keyTakeaways: [
      "Choose the right material for your specific project",
      "Understand material properties and limitations",
      "Configure settings for different filament types",
      "Store and handle materials properly"
    ]
  },
  {
    id: 4,
    title: "Optimizing Print Speed and Quality",
    description: "Learn advanced techniques to balance print speed with quality, maximizing your printer's capabilities while maintaining excellent results.",
    duration: "3 hours",
    difficulty: "Intermediate",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "Understanding Speed vs Quality Trade-offs",
        duration: "45 min",
        description: "Learn how print speed affects quality and how to find the optimal balance.",
        topics: [
          "How speed impacts print quality",
          "Layer adhesion at different speeds",
          "Acceleration and jerk settings",
          "Speed limits for different features",
          "When to prioritize speed vs quality",
          "Real-world speed benchmarks"
        ]
      },
      {
        title: "BambuLab's Speed Optimization Features",
        duration: "1 hour",
        description: "Master the speed-specific features that make BambuLab printers stand out.",
        topics: [
          "Flow rate calibration with LiDAR",
          "Dynamic flow compensation",
          "Pressure advance tuning",
          "CoreXY motion advantages",
          "Input shaping and resonance compensation",
          "Optimal speed profiles for different geometries"
        ]
      },
      {
        title: "Quality-First Settings for Critical Prints",
        duration: "45 min",
        description: "Configure your printer for maximum quality when it matters most.",
        topics: [
          "Reducing layer lines and artifacts",
          "Fine-tuning temperature for surface finish",
          "Optimizing cooling for overhangs",
          "Slow-speed strategies for details",
          "Top surface quality improvements",
          "Post-processing for professional results"
        ]
      },
      {
        title: "Speed Profiles for Different Projects",
        duration: "30 min",
        description: "Create and save custom speed profiles for different project types.",
        topics: [
          "Fast draft prints for prototyping",
          "Balanced settings for everyday prints",
          "High-quality profiles for display pieces",
          "Functional part optimization",
          "Creating custom profile presets",
          "Profile management and sharing"
        ]
      }
    ],
    keyTakeaways: [
      "Balance speed and quality based on project needs",
      "Leverage BambuLab's advanced speed features",
      "Create custom profiles for different scenarios",
      "Achieve professional results at high speeds"
    ]
  },
  {
    id: 5,
    title: "Troubleshooting Common Print Issues",
    description: "Diagnose and fix the most common 3D printing problems, from first layer issues to stringing and warping.",
    duration: "3.5 hours",
    difficulty: "Intermediate",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "First Layer Problems and Solutions",
        duration: "1 hour",
        description: "Master the critical first layer for successful prints every time.",
        topics: [
          "Identifying first layer issues",
          "Bed leveling and Z-offset adjustment",
          "Bed adhesion techniques",
          "First layer temperature settings",
          "Surface preparation methods",
          "Troubleshooting warping corners"
        ]
      },
      {
        title: "Stringing and Oozing Prevention",
        duration: "45 min",
        description: "Eliminate unwanted strings and blobs for clean prints.",
        topics: [
          "Understanding retraction settings",
          "Temperature impact on stringing",
          "Travel move optimization",
          "Z-hop and combing strategies",
          "Material-specific solutions",
          "Post-print string removal techniques"
        ]
      },
      {
        title: "Layer Adhesion and Splitting",
        duration: "45 min",
        description: "Ensure strong layer bonds and prevent delamination.",
        topics: [
          "Causes of poor layer adhesion",
          "Temperature optimization between layers",
          "Cooling fan management",
          "Enclosure temperature for ABS/ASA",
          "Print speed effects on bonding",
          "Testing and validating layer strength"
        ]
      },
      {
        title: "Warping, Curling, and Dimensional Accuracy",
        duration: "1 hour",
        description: "Achieve flat prints with accurate dimensions.",
        topics: [
          "Understanding thermal contraction",
          "Preventing corner lifting",
          "Brim, raft, and skirt usage",
          "Enclosure benefits for warping",
          "Dimensional calibration procedures",
          "Compensating for material shrinkage"
        ]
      }
    ],
    keyTakeaways: [
      "Quickly diagnose common print problems",
      "Apply effective solutions for each issue",
      "Prevent problems before they occur",
      "Maintain consistent print quality"
    ]
  },
  {
    id: 6,
    title: "Advanced Support Strategies",
    description: "Master support generation and custom support techniques for complex geometries and overhangs.",
    duration: "2.5 hours",
    difficulty: "Intermediate",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "Understanding Support Requirements",
        duration: "45 min",
        description: "Learn when and where supports are needed for successful prints.",
        topics: [
          "Overhang angle limits by material",
          "Identifying areas needing support",
          "Support vs bridging strategies",
          "Material considerations for supports",
          "Support density and structure",
          "Interface layers for clean removal"
        ]
      },
      {
        title: "Automatic Support Generation",
        duration: "45 min",
        description: "Master BambuStudio's automatic support features.",
        topics: [
          "Configuring automatic support settings",
          "Tree supports vs normal supports",
          "Support placement optimization",
          "Adjusting support density",
          "Support interface settings",
          "Minimizing support material usage"
        ]
      },
      {
        title: "Custom Support Painting",
        duration: "1 hour",
        description: "Use manual support painting for precise control.",
        topics: [
          "Support painting tools in BambuStudio",
          "Adding supports in specific areas",
          "Removing unwanted automatic supports",
          "Creating custom support structures",
          "Strategic support placement",
          "Balancing support and surface quality"
        ]
      },
      {
        title: "Support Removal and Cleanup",
        duration: "20 min",
        description: "Best practices for removing supports without damaging prints.",
        topics: [
          "Tools for support removal",
          "Techniques for clean separation",
          "Sanding and finishing supported surfaces",
          "Soluble support options",
          "Break-away support strategies",
          "Minimizing post-processing time"
        ]
      }
    ],
    keyTakeaways: [
      "Determine optimal support strategies",
      "Use automatic and manual support effectively",
      "Minimize material waste and print time",
      "Achieve clean surface finishes"
    ]
  },
  {
    id: 7,
    title: "Multi-Material and Multi-Color Printing",
    description: "Unlock the full potential of the AMS (Automatic Material System) for stunning multi-color prints and functional multi-material parts.",
    duration: "3 hours",
    difficulty: "Advanced",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "AMS Setup and Configuration",
        duration: "45 min",
        description: "Set up and configure your AMS for reliable multi-material printing.",
        topics: [
          "Installing and connecting the AMS",
          "Loading multiple filaments",
          "Filament mapping and identification",
          "Buffer tube management",
          "AMS calibration procedures",
          "Troubleshooting AMS issues"
        ]
      },
      {
        title: "Multi-Color Design Principles",
        duration: "45 min",
        description: "Design and prepare models for beautiful multi-color prints.",
        topics: [
          "Color assignment in BambuStudio",
          "Painting on model surfaces",
          "Layer-based color changes",
          "Text and logo embedding",
          "Color transition optimization",
          "Minimizing filament waste"
        ]
      },
      {
        title: "Functional Multi-Material Prints",
        duration: "1 hour",
        description: "Combine different materials for enhanced functionality.",
        topics: [
          "Combining rigid and flexible materials",
          "Soluble support materials",
          "Material compatibility considerations",
          "Interface bonding between materials",
          "Engineering applications",
          "Professional prototyping workflows"
        ]
      },
      {
        title: "Advanced Techniques and Optimization",
        duration: "30 min",
        description: "Master advanced multi-material printing techniques.",
        topics: [
          "Purge volume optimization",
          "Purge tower alternatives",
          "Reducing material changes",
          "Speed optimization for multi-color",
          "Preventing color bleeding",
          "Complex multi-material assemblies"
        ]
      }
    ],
    keyTakeaways: [
      "Set up and use the AMS system effectively",
      "Create stunning multi-color designs",
      "Print functional multi-material parts",
      "Optimize for efficiency and quality"
    ]
  },
  {
    id: 8,
    title: "CAD Integration and Design for Printing",
    description: "Learn to design 3D printable models or prepare existing CAD files for optimal printing results.",
    duration: "3.5 hours",
    difficulty: "Intermediate",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "CAD Software Options and Basics",
        duration: "1 hour",
        description: "Overview of popular CAD software and basic 3D modeling concepts.",
        topics: [
          "Free CAD options: Fusion 360, Tinkercad, FreeCAD",
          "Professional CAD: SolidWorks, Inventor, Onshape",
          "Basic 3D modeling principles",
          "Parametric vs direct modeling",
          "Sketching and extrusion basics",
          "Exporting models for 3D printing"
        ]
      },
      {
        title: "Design Rules for 3D Printing",
        duration: "1 hour",
        description: "Learn essential design principles for printable parts.",
        topics: [
          "Minimum wall thickness guidelines",
          "Avoiding unsupported overhangs",
          "Designing for layer orientation",
          "Hole and feature sizing",
          "Tolerances and clearances",
          "Material-specific design considerations"
        ]
      },
      {
        title: "Optimizing Models for Print Success",
        duration: "1 hour",
        description: "Prepare and optimize CAD models for the best print results.",
        topics: [
          "Model orientation strategies",
          "Adding chamfers and fillets",
          "Hollowing and lightweighting",
          "Adding drainage holes",
          "Splitting large models",
          "Reducing support requirements"
        ]
      },
      {
        title: "File Preparation and Repair",
        duration: "30 min",
        description: "Fix common CAD export issues and prepare files for slicing.",
        topics: [
          "Checking mesh integrity",
          "Repairing non-manifold edges",
          "Fixing normal directions",
          "Reducing file size",
          "STL vs 3MF file formats",
          "Using mesh repair tools"
        ]
      }
    ],
    keyTakeaways: [
      "Choose and use CAD software effectively",
      "Design parts optimized for 3D printing",
      "Avoid common design pitfalls",
      "Prepare clean, printable files"
    ]
  },
  {
    id: 9,
    title: "Remote Monitoring and Management",
    description: "Master remote printing capabilities, monitoring tools, and fleet management for multiple printers.",
    duration: "2 hours",
    difficulty: "Intermediate",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "BambuLab Handy App Mastery",
        duration: "45 min",
        description: "Use the mobile app for complete remote control and monitoring.",
        topics: [
          "Setting up remote access",
          "Starting prints from your phone",
          "Live camera monitoring",
          "Receiving print notifications",
          "Adjusting settings remotely",
          "Emergency stop and intervention"
        ]
      },
      {
        title: "Cloud Features and Integration",
        duration: "45 min",
        description: "Leverage cloud services for seamless printing workflows.",
        topics: [
          "BambuLab Cloud storage",
          "Sharing models and profiles",
          "Print history and statistics",
          "Firmware updates over cloud",
          "Multi-device synchronization",
          "Privacy and security settings"
        ]
      },
      {
        title: "Managing Multiple Printers",
        duration: "30 min",
        description: "Professional workflows for managing a printer farm.",
        topics: [
          "Adding multiple printers to your account",
          "Queue management across printers",
          "Load balancing strategies",
          "Centralized monitoring dashboard",
          "Batch printing workflows",
          "Professional production planning"
        ]
      }
    ],
    keyTakeaways: [
      "Monitor prints from anywhere",
      "Use cloud features for better workflow",
      "Manage multiple printers efficiently",
      "Implement professional production systems"
    ]
  },
  {
    id: 10,
    title: "Maintenance and Care",
    description: "Keep your BambuLab printer running smoothly with proper maintenance routines and care procedures.",
    duration: "2.5 hours",
    difficulty: "Beginner",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "Daily and Weekly Maintenance",
        duration: "45 min",
        description: "Essential maintenance tasks for consistent performance.",
        topics: [
          "Build plate cleaning procedures",
          "Nozzle inspection and cleaning",
          "Filament path maintenance",
          "Checking belt tension",
          "Lubricating moving parts",
          "Dust and debris removal"
        ]
      },
      {
        title: "Advanced Maintenance Procedures",
        duration: "1 hour",
        description: "Periodic maintenance for long-term reliability.",
        topics: [
          "Hot end maintenance and replacement",
          "Build plate surface replacement",
          "Belt replacement and tensioning",
          "Fan cleaning and replacement",
          "Extruder gear maintenance",
          "Camera lens cleaning"
        ]
      },
      {
        title: "Troubleshooting Hardware Issues",
        duration: "45 min",
        description: "Diagnose and fix common hardware problems.",
        topics: [
          "Identifying mechanical issues",
          "Error code interpretation",
          "Sensor problems and solutions",
          "Electrical connection checks",
          "When to contact support",
          "Warranty coverage understanding"
        ]
      }
    ],
    keyTakeaways: [
      "Perform regular maintenance routines",
      "Extend the life of printer components",
      "Diagnose hardware issues early",
      "Maintain optimal print quality"
    ]
  },
  {
    id: 11,
    title: "Professional Applications and Workflows",
    description: "Implement professional-grade workflows for prototyping, small-scale manufacturing, and business applications.",
    duration: "3 hours",
    difficulty: "Advanced",
    targetAudience: ["Professional"],
    lessons: [
      {
        title: "Rapid Prototyping Best Practices",
        duration: "1 hour",
        description: "Use 3D printing for efficient product development.",
        topics: [
          "Iterative design workflow",
          "Material selection for prototypes",
          "Speed vs accuracy for iterations",
          "Testing mechanical properties",
          "Documentation and version control",
          "Client presentation strategies"
        ]
      },
      {
        title: "Small-Scale Manufacturing",
        duration: "1 hour",
        description: "Set up efficient production runs with BambuLab printers.",
        topics: [
          "Print farm setup and organization",
          "Quality control procedures",
          "Material consistency and sourcing",
          "Production scheduling",
          "Cost calculation and pricing",
          "Scaling production capacity"
        ]
      },
      {
        title: "Business Integration and ROI",
        duration: "1 hour",
        description: "Integrate 3D printing into your business effectively.",
        topics: [
          "Calculating return on investment",
          "Service bureau opportunities",
          "Client file management",
          "Intellectual property considerations",
          "Insurance and liability",
          "Marketing your 3D printing services"
        ]
      }
    ],
    keyTakeaways: [
      "Implement professional prototyping workflows",
      "Run efficient small-scale production",
      "Build a sustainable 3D printing business",
      "Calculate costs and maximize ROI"
    ]
  },
  {
    id: 12,
    title: "Advanced Techniques and Future Skills",
    description: "Explore cutting-edge techniques, experimental features, and prepare for the future of 3D printing.",
    duration: "3 hours",
    difficulty: "Advanced",
    targetAudience: ["Hobbyist", "Professional"],
    lessons: [
      {
        title: "Post-Processing Mastery",
        duration: "1 hour",
        description: "Professional finishing techniques for exceptional results.",
        topics: [
          "Sanding and smoothing techniques",
          "Acetone vapor smoothing for ABS",
          "Painting and coating methods",
          "Epoxy coating for strength",
          "Dyeing and chemical treatments",
          "Professional finishing standards"
        ]
      },
      {
        title: "Experimental Materials and Techniques",
        duration: "1 hour",
        description: "Push the boundaries with advanced printing methods.",
        topics: [
          "High-temperature material printing",
          "Composite and reinforced filaments",
          "Metal-filled filaments",
          "Wood and specialty filaments",
          "Variable layer height techniques",
          "Adaptive layer settings"
        ]
      },
      {
        title: "Community and Continuous Learning",
        duration: "1 hour",
        description: "Connect with the community and continue developing skills.",
        topics: [
          "BambuLab community resources",
          "Model repositories and marketplaces",
          "Online forums and support groups",
          "Contributing to open-source projects",
          "Sharing knowledge and teaching",
          "Staying current with technology"
        ]
      }
    ],
    keyTakeaways: [
      "Apply professional post-processing techniques",
      "Experiment with advanced materials safely",
      "Connect with the 3D printing community",
      "Continue learning and growing skills"
    ]
  }
];

export const courseOverview = {
  title: "Complete BambuLab 3D Printing Course",
  subtitle: "Master 3D printing from unboxing to advanced techniques",
  description: "A comprehensive, beginner-friendly course designed specifically for BambuLab printer users. Whether you're a hobbyist creating at home or a professional prototyping for work, this course provides practical tips, troubleshooting solutions, and advanced techniques to help you achieve reliable, high-quality results.",
  totalModules: 12,
  totalDuration: "33 hours",
  skillLevel: "Beginner to Advanced",
  targetAudiences: [
    {
      type: "Hobbyist",
      description: "Perfect for makers who want to create fun, creative projects at home. Learn everything from basic setup to producing stunning multi-color prints and custom designs.",
      benefits: [
        "Start printing within hours of unboxing",
        "Create amazing personal projects",
        "Troubleshoot issues independently",
        "Join the maker community with confidence"
      ]
    },
    {
      type: "Professional",
      description: "Ideal for engineers, designers, and entrepreneurs who need reliable results for prototyping, product development, or small-scale manufacturing.",
      benefits: [
        "Optimize workflows for efficiency",
        "Achieve consistent, professional quality",
        "Calculate ROI and business integration",
        "Implement production-ready processes"
      ]
    }
  ],
  whatYouWillLearn: [
    "Set up and configure any BambuLab printer model",
    "Master BambuStudio slicing software",
    "Choose the right materials for each project",
    "Optimize print speed without sacrificing quality",
    "Troubleshoot and fix common print issues",
    "Create custom supports for complex geometries",
    "Print stunning multi-color and multi-material objects",
    "Design or prepare CAD models for printing",
    "Monitor and manage prints remotely",
    "Maintain your printer for long-term reliability",
    "Implement professional workflows",
    "Apply advanced post-processing techniques"
  ],
  prerequisites: [
    "A BambuLab 3D printer (any model: X1 Carbon, P1S, A1 Mini, etc.)",
    "A computer with internet connection",
    "Basic computer skills",
    "No prior 3D printing experience required"
  ],
  courseFormat: {
    structure: "12 self-paced modules with 40+ detailed lessons",
    content: [
      "Step-by-step written guides",
      "Real-world examples and case studies",
      "Practical troubleshooting scenarios",
      "Downloadable reference materials",
      "Progress tracking and checklists"
    ]
  }
};

export const expansionIdeas = [
  {
    title: "Video Tutorial Series",
    description: "Create companion video content showing hands-on demonstrations of each module, including live troubleshooting sessions and real-time print monitoring.",
    benefits: [
      "Visual learning for complex procedures",
      "See actual print quality results",
      "Watch real-time problem-solving",
      "Easier to follow along"
    ]
  },
  {
    title: "Interactive Community Forum",
    description: "Build a dedicated community platform where students can share their prints, ask questions, get feedback, and connect with other BambuLab users.",
    benefits: [
      "Peer-to-peer learning and support",
      "Share tips and discoveries",
      "Showcase your best prints",
      "Get help from experienced users"
    ]
  },
  {
    title: "Live Q&A Workshops",
    description: "Host regular live sessions where instructors demonstrate techniques, answer questions in real-time, and review student submissions.",
    benefits: [
      "Get personalized guidance",
      "See new techniques demonstrated live",
      "Ask specific questions about your projects",
      "Network with other learners"
    ]
  },
  {
    title: "Certification Program",
    description: "Offer a formal certification upon course completion with assessment tests, practical projects, and portfolio review to validate skills.",
    benefits: [
      "Prove your expertise to clients or employers",
      "Stand out in the maker community",
      "Structured learning path with clear goals",
      "Portfolio development guidance"
    ]
  },
  {
    title: "Advanced Specialization Tracks",
    description: "Create specialized course extensions focusing on specific industries or applications like medical modeling, architectural prototyping, or jewelry design.",
    benefits: [
      "Industry-specific techniques",
      "Professional workflow templates",
      "Material and finish specifications",
      "Compliance and standards guidance"
    ]
  },
  {
    title: "Model Library and Project Challenges",
    description: "Provide exclusive access to a curated library of practice models and monthly design challenges with prizes and recognition.",
    benefits: [
      "Practice with purpose-built models",
      "Test skills with real challenges",
      "Win prizes and recognition",
      "Build an impressive portfolio"
    ]
  },
  {
    title: "Business Accelerator Program",
    description: "Additional content focused on starting and growing a 3D printing business, including marketing, pricing strategies, and client management.",
    benefits: [
      "Turn your skills into income",
      "Business planning templates",
      "Marketing and client acquisition strategies",
      "Financial planning tools"
    ]
  },
  {
    title: "Mobile Learning App",
    description: "Develop a mobile application with quick reference guides, troubleshooting wizards, and AR features for hands-free learning while printing.",
    benefits: [
      "Learn while at the printer",
      "Quick problem-solving guides",
      "AR-assisted maintenance procedures",
      "Offline access to content"
    ]
  }
];

export const instructorInfo = {
  approach: "Our teaching philosophy focuses on practical, hands-on learning with real-world applications. We believe in learning by doing, with comprehensive safety guidelines and encouragement to experiment and troubleshoot independently.",
  support: "Students receive access to course materials for life, including all future updates and additions. Community forum support and regular content updates ensure you stay current with the latest BambuLab features and techniques.",
  commitment: "This course represents over 1,000 hours of combined teaching experience and real-world 3D printing expertise, distilled into clear, actionable lessons that respect your time and intelligence."
};
