
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to <span className="text-blue-400">Lovable</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The fastest way to build beautiful web applications. Start building your dream project today.
        </p>
        <Button size="lg" className="text-lg px-8 py-3">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
