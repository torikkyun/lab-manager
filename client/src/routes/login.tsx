import { LoginForm } from '@/components/login-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm className="w-full max-w-md" />
    </div>
  );
}
