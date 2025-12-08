import { useNavigate } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { Button } from './ui/button';

export const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
            <ShieldAlert className="w-10 h-10 text-red-600" />
          </div>
        </div>

        <h2 className="mb-3">Unauthorized Access</h2>
        <p className="text-[#64748B] mb-8">
          Please login to continue and access this page.
        </p>

        <Button
          onClick={() => navigate('/login')}
          className="bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] px-8 h-12"
        >
          Go to Login
        </Button>
      </div>
    </div>
  );
};
