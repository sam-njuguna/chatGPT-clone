export interface Prompt {
  title: string;
  description: string;
}
export interface Shortcut {
  action: string;
  keyCombination: { name: string; id: string }[];
}

export const prompts: Prompt[] = [
  {
    title: "Write a short story",
    description: "Detective solving a mysterious case in a small town.",
  },
  {
    title: "Design a website",
    description: "E-commerce store selling outdoor gear.",
  },
  {
    title: "Create a to-do list app",
    description: "Task creation, completion, and deletion features.",
  },
  {
    title: "Describe your dream vacation",
    description: "Dream vacation destination with activities and sights.",
  },
  {
    title: "Explain a scientific concept",
    description: "Photosynthesis and its importance in plant growth.",
  },
  {
    title: "Write a poem",
    description: "Beauty of nature and its impact on emotions.",
  },
  {
    title: "Design a mobile app",
    description: "Track daily water intake and provide hydration reminders.",
  },
  {
    title: "Explain blockchain technology",
    description: "Use cases and impact on industries.",
  },
  {
    title: "Create a recipe",
    description: "Favorite homemade pasta dish recipe with instructions.",
  },
  {
    title: "Describe a historical event",
    description: "Significant historical event and its consequences.",
  },
  {
    title: "Invent a new board game",
    description: "Fun and engaging board game with rules and objectives.",
  },
  {
    title: "Discuss the future of AI",
    description: "AI's potential benefits and ethical concerns.",
  },
  {
    title: "Write a product review",
    description: "Review of a recently purchased product's features.",
  },
  {
    title: "Create a short film plot",
    description: "Plot for a short film with characters and setting.",
  },
  {
    title: "Describe your ideal workspace",
    description: "Ideal workspace design and elements inspiring creativity.",
  },
  {
    title: "Write a short biography",
    description: "Short biography of an inspiring historical figure.",
  },
  {
    title: "Design a logo",
    description: "Logo for 'Mocha Delights' coffee shop.",
  },
  {
    title: "Explain climate change",
    description: "Causes, consequences, and individual actions.",
  },
  {
    title: "Create a workout routine",
    description: "Weekly workout routine for fitness and strength.",
  },
  {
    title: "Analyze a piece of art",
    description: "Famous artwork's composition, symbolism, and significance.",
  },
  {
    title: "Invent a new smartphone feature",
    description: "Revolutionary smartphone feature concept.",
  },
  {
    title: "Debate a controversial topic",
    description: "Arguments for and against a controversial topic.",
  },
  {
    title: "Write a movie script",
    description: "Script for a dramatic conflict scene.",
  },
  {
    title: "Describe an alien world",
    description: "Vivid description of an imaginary alien planet.",
  },
  {
    title: "Suggest a business idea",
    description: "Unique business idea with target market and revenue model.",
  },
];

export const shortcuts: Shortcut[] = [
  {
    action: "Open new chat",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "Shift", id: "shift" },
      { name: "O", id: "o" },
    ],
  },
  {
    action: "Focus chat input",
    keyCombination: [
      { name: "Shift", id: "shift" },
      { name: "Esc", id: "esc" },
    ],
  },
  {
    action: "Copy last code block",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "Shift", id: "shift" },
      { name: ";", id: "semicolon" },
    ],
  },
  {
    action: "Copy last response",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "Shift", id: "shift" },
      { name: "C", id: "c" },
    ],
  },
  {
    action: "Set custom instructions",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "Shift", id: "shift" },
      { name: "I", id: "i" },
    ],
  },
  {
    action: "Toggle sidebar",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "Shift", id: "shift" },
      { name: "S", id: "s" },
    ],
  },
  {
    action: "Delete chat",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "Shift", id: "shift" },
      { name: "⌫", id: "delete" },
    ],
  },
  {
    action: "Show shortcuts",
    keyCombination: [
      { name: "Ctrl", id: "ctrl" },
      { name: "/", id: "slash" },
    ],
  },
];
