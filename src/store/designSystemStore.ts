
import { create } from 'zustand';

export interface DesignToken {
  id: string;
  name: string;
  category: 'color' | 'typography' | 'spacing' | 'border';
  value: string;
  description?: string;
  createdAt: Date;
}

export interface Component {
  id: string;
  name: string;
  category: string;
  code: string;
  preview: string;
  props: Record<string, any>;
  status: 'stable' | 'beta' | 'alpha';
  usage: number;
  createdAt: Date;
}

export interface Composite {
  id: string;
  name: string;
  description: string;
  category: string;
  components: string[];
  code: string;
  preview: string;
  uses: number;
  rating: number;
  createdAt: Date;
}

export interface Block {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  preview: string;
  uses: number;
  rating: number;
  createdAt: Date;
}

interface DesignSystemStore {
  // Data
  tokens: DesignToken[];
  components: Component[];
  composites: Composite[];
  blocks: Block[];
  
  // Actions
  addToken: (token: Omit<DesignToken, 'id' | 'createdAt'>) => void;
  updateToken: (id: string, updates: Partial<DesignToken>) => void;
  deleteToken: (id: string) => void;
  
  addComponent: (component: Omit<Component, 'id' | 'createdAt' | 'usage'>) => void;
  updateComponent: (id: string, updates: Partial<Component>) => void;
  deleteComponent: (id: string) => void;
  
  addComposite: (composite: Omit<Composite, 'id' | 'createdAt'>) => void;
  updateComposite: (id: string, updates: Partial<Composite>) => void;
  deleteComposite: (id: string) => void;
  
  addBlock: (block: Omit<Block, 'id' | 'createdAt'>) => void;
  updateBlock: (id: string, updates: Partial<Block>) => void;
  deleteBlock: (id: string) => void;
}

export const useDesignSystemStore = create<DesignSystemStore>((set) => ({
  tokens: [
    {
      id: '1',
      name: 'Primary Blue',
      category: 'color',
      value: '#3B82F6',
      description: 'Cor principal do sistema',
      createdAt: new Date()
    },
    {
      id: '2',
      name: 'Heading Font',
      category: 'typography',
      value: 'font-bold text-2xl',
      description: 'Fonte para títulos',
      createdAt: new Date()
    }
  ],
  
  components: [
    {
      id: '1',
      name: 'Custom Button',
      category: 'Form',
      code: `<button className="bg-blue-500 text-white px-4 py-2 rounded">
  {children}
</button>`,
      preview: 'button',
      props: { children: 'string', onClick: 'function' },
      status: 'stable',
      usage: 247,
      createdAt: new Date()
    }
  ],
  
  composites: [
    {
      id: '1',
      name: 'Search Bar',
      description: 'Input com botão de busca',
      category: 'Navigation',
      components: ['input', 'button'],
      code: `<div className="flex">
  <input className="flex-1 px-3 py-2 border" />
  <button className="px-4 py-2 bg-blue-500 text-white">🔍</button>
</div>`,
      preview: 'search-bar',
      uses: 247,
      rating: 4.8,
      createdAt: new Date()
    }
  ],
  
  blocks: [
    {
      id: '1',
      name: 'Header Navigation',
      description: 'Cabeçalho completo com menu',
      category: 'Navigation',
      code: `<header className="bg-white shadow">
  <nav className="container mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
      <div className="font-bold text-xl">Logo</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
      </div>
    </div>
  </nav>
</header>`,
      preview: 'header',
      uses: 334,
      rating: 4.9,
      createdAt: new Date()
    }
  ],
  
  // Actions
  addToken: (token) => set((state) => ({
    tokens: [...state.tokens, {
      ...token,
      id: Date.now().toString(),
      createdAt: new Date()
    }]
  })),
  
  updateToken: (id, updates) => set((state) => ({
    tokens: state.tokens.map(token => 
      token.id === id ? { ...token, ...updates } : token
    )
  })),
  
  deleteToken: (id) => set((state) => ({
    tokens: state.tokens.filter(token => token.id !== id)
  })),
  
  addComponent: (component) => set((state) => ({
    components: [...state.components, {
      ...component,
      id: Date.now().toString(),
      usage: 0,
      createdAt: new Date()
    }]
  })),
  
  updateComponent: (id, updates) => set((state) => ({
    components: state.components.map(comp => 
      comp.id === id ? { ...comp, ...updates } : comp
    )
  })),
  
  deleteComponent: (id) => set((state) => ({
    components: state.components.filter(comp => comp.id !== id)
  })),
  
  addComposite: (composite) => set((state) => ({
    composites: [...state.composites, {
      ...composite,
      id: Date.now().toString(),
      createdAt: new Date()
    }]
  })),
  
  updateComposite: (id, updates) => set((state) => ({
    composites: state.composites.map(comp => 
      comp.id === id ? { ...comp, ...updates } : comp
    )
  })),
  
  deleteComposite: (id) => set((state) => ({
    composites: state.composites.filter(comp => comp.id !== id)
  })),
  
  addBlock: (block) => set((state) => ({
    blocks: [...state.blocks, {
      ...block,
      id: Date.now().toString(),
      createdAt: new Date()
    }]
  })),
  
  updateBlock: (id, updates) => set((state) => ({
    blocks: state.blocks.map(block => 
      block.id === id ? { ...block, ...updates } : block
    )
  })),
  
  deleteBlock: (id) => set((state) => ({
    blocks: state.blocks.filter(block => block.id !== id)
  }))
}));
