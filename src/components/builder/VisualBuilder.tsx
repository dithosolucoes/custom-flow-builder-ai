
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, Save, Eye, Code, Trash2, Move, MousePointer, 
  Square, Type, Image, Layout, Palette
} from 'lucide-react';
import { useDesignSystemStore } from '@/store/designSystemStore';
import { toast } from 'sonner';

interface BuilderElement {
  id: string;
  type: 'div' | 'button' | 'input' | 'text' | 'image' | 'card';
  props: Record<string, any>;
  children: BuilderElement[];
  style: Record<string, string>;
  position: { x: number; y: number };
}

const VisualBuilder = () => {
  const [elements, setElements] = useState<BuilderElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [mode, setMode] = useState<'select' | 'add'>('select');
  const [elementType, setElementType] = useState<BuilderElement['type']>('div');
  const canvasRef = useRef<HTMLDivElement>(null);
  const { addComponent } = useDesignSystemStore();

  const tools = [
    { type: 'div', icon: Square, label: 'Container' },
    { type: 'button', icon: MousePointer, label: 'Botão' },
    { type: 'input', icon: Type, label: 'Input' },
    { type: 'text', icon: Type, label: 'Texto' },
    { type: 'image', icon: Image, label: 'Imagem' },
    { type: 'card', icon: Layout, label: 'Card' }
  ];

  const addElement = (type: BuilderElement['type'], position: { x: number; y: number }) => {
    const newElement: BuilderElement = {
      id: Date.now().toString(),
      type,
      props: getDefaultProps(type),
      children: [],
      style: getDefaultStyle(type),
      position
    };
    
    setElements(prev => [...prev, newElement]);
    setSelectedElement(newElement.id);
    toast.success(`${type} adicionado!`);
  };

  const getDefaultProps = (type: BuilderElement['type']) => {
    switch (type) {
      case 'button':
        return { children: 'Botão', onClick: () => {} };
      case 'input':
        return { placeholder: 'Digite aqui...', type: 'text' };
      case 'text':
        return { children: 'Texto de exemplo' };
      case 'image':
        return { src: 'https://via.placeholder.com/200x150', alt: 'Imagem' };
      case 'card':
        return { title: 'Card Title', content: 'Card content' };
      default:
        return {};
    }
  };

  const getDefaultStyle = (type: BuilderElement['type']) => {
    const base = {
      position: 'absolute',
      border: '2px dashed #e2e8f0',
      minWidth: '100px',
      minHeight: '40px'
    };

    switch (type) {
      case 'button':
        return { ...base, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '6px', border: 'none' };
      case 'input':
        return { ...base, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' };
      case 'text':
        return { ...base, padding: '8px', fontSize: '16px' };
      case 'card':
        return { ...base, padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' };
      default:
        return base;
    }
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (mode === 'add') {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        addElement(elementType, { x, y });
      }
    }
  };

  const renderElement = (element: BuilderElement) => {
    const isSelected = selectedElement === element.id;
    const style = {
      ...element.style,
      left: `${element.position.x}px`,
      top: `${element.position.y}px`,
      outline: isSelected ? '2px solid #3b82f6' : 'none',
      cursor: mode === 'select' ? 'pointer' : 'default'
    };

    const handleElementClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (mode === 'select') {
        setSelectedElement(element.id);
      }
    };

    switch (element.type) {
      case 'button':
        return (
          <button
            key={element.id}
            style={style}
            onClick={handleElementClick}
          >
            {element.props.children}
          </button>
        );
      case 'input':
        return (
          <input
            key={element.id}
            style={style}
            onClick={handleElementClick}
            {...element.props}
          />
        );
      case 'text':
        return (
          <div
            key={element.id}
            style={style}
            onClick={handleElementClick}
          >
            {element.props.children}
          </div>
        );
      case 'image':
        return (
          <img
            key={element.id}
            style={style}
            onClick={handleElementClick}
            {...element.props}
          />
        );
      case 'card':
        return (
          <div
            key={element.id}
            style={style}
            onClick={handleElementClick}
          >
            <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>{element.props.title}</h3>
            <p>{element.props.content}</p>
          </div>
        );
      default:
        return (
          <div
            key={element.id}
            style={style}
            onClick={handleElementClick}
          >
            Container
          </div>
        );
    }
  };

  const generateCode = () => {
    if (elements.length === 0) return '';
    
    const elementToJSX = (element: BuilderElement): string => {
      const props = Object.entries(element.props)
        .filter(([key]) => key !== 'children')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
      
      const className = `className="${Object.entries(element.style)
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ')}"`;
      
      switch (element.type) {
        case 'button':
          return `<button ${props} ${className}>${element.props.children}</button>`;
        case 'input':
          return `<input ${props} ${className} />`;
        case 'text':
          return `<div ${className}>${element.props.children}</div>`;
        case 'image':
          return `<img ${props} ${className} />`;
        case 'card':
          return `<div ${className}>
  <h3>${element.props.title}</h3>
  <p>${element.props.content}</p>
</div>`;
        default:
          return `<div ${className}>Container</div>`;
      }
    };

    return `<div className="generated-component">
${elements.map(elementToJSX).join('\n')}
</div>`;
  };

  const saveAsComponent = () => {
    const code = generateCode();
    const name = prompt('Nome do componente:');
    if (name && code) {
      addComponent({
        name,
        category: 'Generated',
        code,
        preview: 'generated',
        props: {},
        status: 'alpha'
      });
      toast.success(`Componente "${name}" salvo na biblioteca!`);
    }
  };

  const deleteElement = () => {
    if (selectedElement) {
      setElements(prev => prev.filter(el => el.id !== selectedElement));
      setSelectedElement(null);
      toast.success('Elemento removido!');
    }
  };

  return (
    <div className="h-screen flex">
      {/* Toolbar */}
      <div className="w-64 bg-white border-r p-4 space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Ferramentas</h3>
          <div className="space-y-2">
            <Button
              variant={mode === 'select' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMode('select')}
              className="w-full justify-start"
            >
              <MousePointer className="w-4 h-4 mr-2" />
              Selecionar
            </Button>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <Button
                  key={tool.type}
                  variant={mode === 'add' && elementType === tool.type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setMode('add');
                    setElementType(tool.type);
                  }}
                  className="flex flex-col h-16 p-2"
                >
                  <tool.icon className="w-4 h-4 mb-1" />
                  <span className="text-xs">{tool.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button onClick={saveAsComponent} className="w-full" size="sm">
            <Save className="w-4 h-4 mr-2" />
            Salvar Componente
          </Button>
          <Button onClick={deleteElement} variant="destructive" className="w-full" size="sm" disabled={!selectedElement}>
            <Trash2 className="w-4 h-4 mr-2" />
            Deletar
          </Button>
        </div>

        {/* Element Count */}
        <div className="pt-4 border-t">
          <Badge variant="secondary">
            {elements.length} elementos
          </Badge>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Canvas de Construção</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Code className="w-4 h-4 mr-2" />
                Ver Código
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={canvasRef}
          className="flex-1 bg-gray-50 relative overflow-hidden"
          onClick={handleCanvasClick}
          style={{ cursor: mode === 'add' ? 'crosshair' : 'default' }}
        >
          {elements.map(renderElement)}
          
          {elements.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Selecione uma ferramenta e clique para adicionar elementos</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Properties Panel */}
      {selectedElement && (
        <div className="w-64 bg-white border-l p-4">
          <h3 className="font-semibold mb-4">Propriedades</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Tipo:</label>
              <p className="text-sm text-gray-600 capitalize">
                {elements.find(el => el.id === selectedElement)?.type}
              </p>
            </div>
            {/* Add more property editors here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualBuilder;
