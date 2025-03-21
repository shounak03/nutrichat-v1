// 'use client'

// import { useState, useTransition } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { login } from '../action'
// import { toast } from 'sonner'


// export default function LoginPage() {
//   const router = useRouter()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setError('')
//   //   setLoading(true)

//   //   try {
//   //     const response = await fetch('/api/auth/login', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ email, password }),
//   //     })

//   //     const data = await response.json()

//   //     if (!response.ok) {
//   //       throw new Error(data.error || 'Failed to login')
//   //     }

//   //     router.push('/profile')
//   //     router.refresh()
//   //   } catch (err) {
//   //     setError(err instanceof Error ? err.message : 'An error occurred')
//   //   } finally {
//   //     setLoading(false)
//   //   }
//   // }
//   const [isPending, startTransition] = useTransition();

    

//     // const handleSubmit = () => {
      
//     //   let formData = new FormData();
//     //   formData.append("email", email);
//     //   formData.append("password", password);
//     //     startTransition(async () => {
//     //         const { errorMessage } = await login(formData);
//     //         if (errorMessage) {
//     //             toast.error(errorMessage);
//     //             console.log(errorMessage);
                
//     //         } else {
//     //             toast.success("Successfully logged in");
//     //             router.push("/profile");
//     //         }
//     //     });
//     // };
  
//     const handleSubmit = (e) => {
//       e.preventDefault(); // Add this line to prevent default form submission
      
//       let formData = new FormData();
//       formData.append("email", email);
//       formData.append("password", password);
      
//       startTransition(async () => {
//         const { errorMessage } = await login(formData);
//         if (errorMessage) {
//           toast.error(errorMessage);
//           console.log(errorMessage);
//         } else {
//           toast.success("Successfully logged in");
//           router.push("/profile");
//         }
//       });
//     };
  
//     return (
//     <div>
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email address
//           </label>
//           <div className="mt-1">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <div className="mt-1">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//         </div>

//         {error && (
//           <div className="text-red-600 text-sm">{error}</div>
//         )}

//         <div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//           >
//             {loading ? 'Signing in...' : 'Sign in'}
//           </button>
//         </div>
//       </form>

//       <div className="mt-6">
//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300" />
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">Or</span>
//           </div>
//         </div>

//         <div className="mt-6">
//           <Link
//             href="/auth/signup"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Create a new account
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// } 

'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { login } from '../action'
import {toast} from 'sonner'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
    const router = useRouter()


    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await login(formData);
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.success("Successfully logged in");
                router.push("/");
            }
        });
    };
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name='email'
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name='password'
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <Button className="w-full mt-6" disabled={isPending}>
            {isPending ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p>
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-primary hover:underline underline-blue">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
