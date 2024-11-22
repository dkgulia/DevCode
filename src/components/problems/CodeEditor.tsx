import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CodeEditorProps {
  onCodeCompile: (code: string) => void;
  onCodeSubmit?: (code: string) => boolean;
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

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  onCodeCompile, 
  onCodeSubmit 
}) => {
  const [html, setHtml] = useState<string>(DEFAULT_HTML);
  const [css, setCss] = useState<string>('');
  const [js, setJs] = useState<string>('');
  const [compiledCode, setCompiledCode] = useState<string>('');

  useEffect(() => {
    compileCode();
  }, [html, css, js]);

  
  const compileCode = () => {
    const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || html;
    const headContent = html.match(/<head[^>]*>([\s\S]*)<\/head>/i)?.[1] || '';
  
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
  
    if (onCodeCompile) {
      onCodeCompile(compiled);
    }
  };

  const handleSubmit = () => {
    if (onCodeSubmit) {
      const result = onCodeSubmit(compiledCode);
      console.log('Compiled Code:', compiledCode);

      return result;
      
    }
    return false;
    
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
              onChange={(e) => setHtml(e.target.value)}
              spellCheck="false"
            />
          </TabsContent>

          <TabsContent value="css" className="h-full m-0">
            <textarea
              className="w-full h-full p-4 font-mono text-sm bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="/* Write your CSS here */\n\n"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck="false"
            />
          </TabsContent>

          <TabsContent value="js" className="h-full m-0">
            <textarea
              className="w-full h-full p-4 font-mono text-sm bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="// Write your JavaScript here\n\n"
              value={js}
              onChange={(e) => setJs(e.target.value)}
              spellCheck="false"
            />
          </TabsContent>
        </div>
      </Tabs>

      {onCodeSubmit && (
        <div className="mt-4 flex justify-end space-x-2">
          <button 
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Solution
          </button>
          
        </div>
        
      )}
    </div>
  );
};

export default CodeEditor;