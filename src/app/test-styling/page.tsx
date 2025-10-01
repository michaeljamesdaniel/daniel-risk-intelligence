'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-foreground">Styling Test Page</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
            <CardDescription>This is a test card to verify shadcn/ui components are working</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This text should use the muted foreground color. The background should be the card background color.
            </p>
            <div className="flex gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-primary">Primary Border</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This card has a primary border.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-secondary-foreground">Secondary Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-secondary-foreground">This card has a secondary background.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle className="text-muted-foreground">Muted Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This card has a muted background.</p>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-accent rounded-lg">
          <h2 className="text-xl font-semibold text-accent-foreground mb-2">Accent Section</h2>
          <p className="text-accent-foreground">This section uses the accent background and foreground colors.</p>
        </div>
      </div>
    </div>
  );
}