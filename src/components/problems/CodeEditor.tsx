import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Define interface for props
interface CodeEditorProps {
  onCodeCompile: (code: string) => void;
}

// Define type for iframe element
interface HTMLIFrameElement extends HTMLElement {
  contentDocument: Document;
  contentWindow: Window;
}

const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Editor</title>
</head>
<body>
    <!-- Write your HTML here -->
    
</body>
</html>`;

const CodeEditor: React.FC<CodeEditorProps> = ({ onCodeCompile }) => {
  const [html, setHtml] = useState<string>(DEFAULT_HTML);
  const [css, setCss] = useState<string>('');
  const [js, setJs] = useState<string>('');
  const [compiledCode, setCompiledCode] = useState<string>('');

  // Compile code whenever HTML, CSS, or JS changes
  useEffect(() => {
    compileCode();
  }, [html, css, js]);

  const compileCode = () => {
    // Extract body content from HTML
    const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || html;
    
    // Extract head content if it exists
    const headContent = html.match(/<head[^>]*>([\s\S]*)<\/head>/i)?.[1] || '';
    
    // Create the compiled HTML with injected CSS and JS
    const compiled = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Code Output</title>
          ${headContent}
          <style>
              ${css}
          </style>
      </head>
      <body>
          ${bodyContent}
          <script>
              ${js}
          </script>
      </body>
      </html>
    `;
    
    setCompiledCode(compiled);
    
    // Send compiled code to parent component if callback exists
    if (onCodeCompile) {
      onCodeCompile(compiled);
    }
  };

  const handleHtmlChange = (newHtml: string) => {
    setHtml(newHtml);
  };

  const handleCssChange = (newCss: string) => {
    setCss(newCss);
  };

  const handleJsChange = (newJs: string) => {
    setJs(newJs);
  };

  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="html" className="flex-1">
        <TabsList className="mb-2">
          <TabsTrigger value="html" className="px-4">HTML</TabsTrigger>
          <TabsTrigger value="css" className="px-4">CSS</TabsTrigger>
          <TabsTrigger value="js" className="px-4">JavaScript</TabsTrigger>
        </TabsList>

        <div className="flex-1 h-[calc(100%-3rem)]">
          <TabsContent value="html" className="h-full m-0">
            <textarea
              className="w-full h-full p-4 font-mono text-sm bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-blue-500 resize-none"
              value={html}
              onChange={(e) => handleHtmlChange(e.target.value)}
              spellCheck="false"
            />
          </TabsContent>

          <TabsContent value="css" className="h-full m-0">
            <textarea
              className="w-full h-full p-4 font-mono text-sm bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="/* Write your CSS here */\n\n"
              value={css}
              onChange={(e) => handleCssChange(e.target.value)}
              spellCheck="false"
            />
          </TabsContent>

          <TabsContent value="js" className="h-full m-0">
            <textarea
              className="w-full h-full p-4 font-mono text-sm bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="// Write your JavaScript here\n\n"
              value={js}
              onChange={(e) => handleJsChange(e.target.value)}
              spellCheck="false"
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CodeEditor;