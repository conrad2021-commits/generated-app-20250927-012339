import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Activity, CheckCircle, Clock, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
const mockProjects = [
  { id: 'PROJ-001', name: 'Legacy CRM UI Refresh', status: 'Completed', lastUpdate: '2023-10-25' },
  { id: 'PROJ-002', name: 'Data Migration to Azure', status: 'In Progress', lastUpdate: '2023-11-15' },
  { id: 'PROJ-003', name: 'New Inventory Management App', status: 'Pending', lastUpdate: '2023-11-20' },
];
const newProjectSchema = z.object({
  projectName: z.string().min(5, 'Project name must be at least 5 characters.'),
  projectType: z.enum(['new', 'upgrade', 'migration']),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
});
export function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const form = useForm<z.infer<typeof newProjectSchema>>({
    resolver: zodResolver(newProjectSchema),
    defaultValues: {
      projectName: '',
      projectType: 'new',
      description: '',
    },
  });
  const onSubmit = (values: z.infer<typeof newProjectSchema>) => {
    toast.success('New project request submitted!', {
      description: `We've received your request for "${values.projectName}".`,
    });
    form.reset();
  };
  const statusMap: { [key: string]: { className: string; icon: React.ReactNode } } = {
    Completed: {
      className: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
      icon: <CheckCircle className="h-4 w-4" />,
    },
    'In Progress': {
      className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
      icon: <Activity className="h-4 w-4" />,
    },
    Pending: {
      className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
      icon: <Clock className="h-4 w-4" />,
    },
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Here's an overview of your projects.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Total Projects</CardTitle></CardHeader>
            <CardContent><p className="text-4xl font-bold">{mockProjects.length}</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>In Progress</CardTitle></CardHeader>
            <CardContent><p className="text-4xl font-bold">{mockProjects.filter(p => p.status === 'In Progress').length}</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Completed</CardTitle></CardHeader>
            <CardContent><p className="text-4xl font-bold">{mockProjects.filter(p => p.status === 'Completed').length}</p></CardContent>
          </Card>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Projects</CardTitle>
                <CardDescription>A list of all your current and past projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Update</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-mono">{project.id}</TableCell>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={cn(statusMap[project.status]?.className)}>
                            <div className="flex items-center gap-2">
                              {statusMap[project.status]?.icon}
                              {project.status}
                            </div>
                          </Badge>
                        </TableCell>
                        <TableCell>{project.lastUpdate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><PlusCircle className="h-6 w-6" /> New Project Request</CardTitle>
                <CardDescription>Have a new idea? Submit it here.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="projectName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl><Input placeholder="e.g., New Reporting Tool" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="new">New Application</SelectItem>
                            <SelectItem value="upgrade">Upgrade Existing</SelectItem>
                            <SelectItem value="migration">Cloud Migration</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="description" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brief Description</FormLabel>
                        <FormControl><Textarea placeholder="Describe the main goals of the project..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit Request</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}