import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../assets/c62f533105c0c1e5b2518d71113997455d7bb5ad.png';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-32 h-32 flex items-center justify-center">
            <img src={logo} alt="ZM Logo" className="w-full h-full object-contain" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-[#0F172A]">Personal Task Manager</h1>
          <p className="text-[#64748B]">
            Organize, track, and manage your daily tasks.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <Button
            onClick={() => navigate('/login')}
            className="w-full h-12 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px]"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/register')}
            variant="outline"
            className="w-full h-12 border-[#E2E8F0] rounded-[10px]"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};