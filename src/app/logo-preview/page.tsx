'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LogoPreview() {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>('large');

  const sizes = {
    small: { width: 50, height: 50, label: 'Small (50x50)' },
    medium: { width: 100, height: 100, label: 'Medium (100x100)' },
    large: { width: 200, height: 200, label: 'Large (200x200)' },
    xlarge: { width: 400, height: 400, label: 'Extra Large (400x400)' }
  };

  const currentSize = sizes[selectedSize];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daniel Risk Intelligence Logo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aggressive yet professional eagle logo designed for strategic intelligence and competitive analysis
          </p>
          <div className="mt-4 inline-flex items-center space-x-2">
            <Badge variant="destructive" className="bg-red-600">Aggressive Design</Badge>
            <Badge variant="secondary">Professional Edge</Badge>
            <Badge variant="outline">Strategic Impact</Badge>
          </div>
        </div>

        {/* Size Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {Object.entries(sizes).map(([key, size]) => (
              <Button
                key={key}
                variant={selectedSize === key ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedSize(key as keyof typeof sizes)}
                className="px-4 py-2 text-sm"
              >
                {size.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Logo Display */}
        <div className="flex justify-center mb-12">
          <Card className="p-8 shadow-lg">
            <CardContent className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="/eagle-logo-large.svg"
                  alt="Daniel Risk Intelligence Logo"
                  width={currentSize.width}
                  height={currentSize.height}
                  className="object-contain"
                />
              </div>
              <Badge variant="secondary" className="mb-2">
                {currentSize.label}
              </Badge>
              <p className="text-sm text-gray-600 text-center">
                Scalable vector format maintains perfect quality at any size
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Logo Variations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Header Logo</CardTitle>
              <CardDescription>As used in website navigation</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/eagle-logo.svg"
                  alt="Daniel Risk Intelligence Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Daniel Risk Intelligence</h3>
                  <p className="text-xs text-gray-600">LLC</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Compact Logo</CardTitle>
              <CardDescription>Icon-only version for mobile</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <img
                src="/eagle-logo.svg"
                alt="Daniel Risk Intelligence Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Large Format</CardTitle>
              <CardDescription>For presentations and print</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <img
                src="/eagle-logo-large.svg"
                alt="Daniel Risk Intelligence Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </CardContent>
          </Card>
        </div>

        {/* Design Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Aggressive Design Elements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-slate-900 to-blue-900 rounded"></div>
                  <span className="text-sm text-gray-700">Dark Aggressive Gradients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-800 to-indigo-800 rounded"></div>
                  <span className="text-sm text-gray-700">Sharp Angular Wings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-700 to-red-600 rounded"></div>
                  <span className="text-sm text-gray-700">Aggressive Red Accents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-800 rounded"></div>
                  <span className="text-sm text-gray-700">Intense Motion Lines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-red-700 rounded"></div>
                  <span className="text-sm text-gray-700">Sharp Hooked Beak</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Professional Symbolism</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Aggressive Stance:</strong> Competitive advantage</p>
                <p><strong>Sharp Wings:</strong> Decisive market entry</p>
                <p><strong>Intense Eye:</strong> Strategic focus</p>
                <p><strong>Hooked Beak:</strong> Assertive positioning</p>
                <p><strong>Dark Colors:</strong> Serious expertise</p>
                <p><strong>Red Accents:</strong> Urgent intelligence</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Color Palette */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Aggressive Color Palette</CardTitle>
            <CardDescription>Professional colors optimized for competitive intelligence consulting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-slate-900 rounded-lg mb-2"></div>
                <p className="text-xs font-medium">#0f172a</p>
                <p className="text-xs text-gray-600">Dark Primary</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-blue-900 rounded-lg mb-2"></div>
                <p className="text-xs font-medium">#1e40af</p>
                <p className="text-xs text-gray-600">Aggressive Blue</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-indigo-800 rounded-lg mb-2"></div>
                <p className="text-xs font-medium">#3730a3</p>
                <p className="text-xs text-gray-600">Power Indigo</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-red-700 rounded-lg mb-2"></div>
                <p className="text-xs font-medium">#dc2626</p>
                <p className="text-xs text-gray-600">Urgent Red</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-slate-100 rounded-lg mb-2 border border-gray-300"></div>
                <p className="text-xs font-medium">#f1f5f9</p>
                <p className="text-xs text-gray-600">Sharp White</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Options */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => window.open('/eagle-logo-large.svg', '_blank')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3"
            >
              View Full Aggressive Logo
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('/eagle-logo.svg', '_blank')}
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3"
            >
              View Standard Version
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Aggressive design for competitive intelligence and strategic market analysis
          </p>
        </div>
      </div>
    </div>
  );
}