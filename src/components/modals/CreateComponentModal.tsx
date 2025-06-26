
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDesignSystemStore } from '@/store/designSystemStore';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

const CreateComponentModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    code: '',
    preview: '',
    status: 'alpha' as const
  });
  
  const { addComponent } = useDesignSystemStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.code) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    addComponent({
      ...formData,
      props: {}
    });
    
    toast.success(`Componente "${formData.name}" criado!`);
    setFormData({ name: '', category: '', code: '', preview: '', status: 'alpha' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <Plus className="w-4 h-4 mr-2" />
          Novo Componente
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Criar Novo Componente</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ex: CustomButton"
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Form">Form</SelectItem>
                  <SelectItem value="Layout">Layout</SelectItem>
                  <SelectItem value="Navigation">Navigation</SelectItem>
                  <SelectItem value="Display">Display</SelectItem>
                  <SelectItem value="Feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="status">Status</Label>
              <Select onValueChange={(value: any) => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="alpha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alpha">Alpha</SelectItem>
                  <SelectItem value="beta">Beta</SelectItem>
                  <SelectItem value="stable">Stable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="preview">Preview (emoji)</Label>
              <Input
                id="preview"
                value={formData.preview}
                onChange={(e) => setFormData(prev => ({ ...prev, preview: e.target.value }))}
                placeholder="Ex: 🔘"
                maxLength={2}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="code">Código JSX *</Label>
            <Textarea
              id="code"
              value={formData.code}
              onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
              placeholder="Ex: <button className='btn'>{children}</button>"
              rows={6}
              className="font-mono text-sm"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Criar Componente
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateComponentModal;
